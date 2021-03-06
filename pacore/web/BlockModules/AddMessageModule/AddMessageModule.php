<?php
/** !
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* This module is responsible for allowing a user to send and recieve messages
* over People Aggregator.  It works between friends and also strangers
* if a user clicks the "send message" link on the actions module
* on a strangers page.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* @author Tekriti Software
* @license http://bit.ly/aVWqRV PayAsYouGo License
* @copyright Copyright (c) 2010 Broadband Mechanics
* @package PeopleAggregator
*/
?>
<?php
require_once "api/Message/Message.php";
require_once "api/Messaging/MessageDispatcher.class.php";

class AddMessageModule extends Module {

  public $module_type = 'user';
  public $module_placement = 'middle';
  public $outer_template = 'outer_message_module.tpl';

  /**
  * mid has the message id of the message
  */
  public $mid;
  
  /**
  * User id of the user who is posting the message i.e session user id
  */
  public $uid;
  
  /**
  * page uid is the user id of the person to whom message has to be sent
  * It comes when we click send message from relationship page.
  */
  public $page_uid;

  public $title;

  public function __construct() {
    parent::__construct();
    $this->title = __('Compose');
  }
  
  /** !!
     * Determines what kind of action this module will be 
     * doing, either create a new message, forward a message,
     * or reply to a message.  It defaults to new message.
     *
     * @param array $request_data  The data that determines the action taken, and the message to be acted on.
     */
  public function initializeModule($request_method, $request_data) {
    $possible_actions = array('reply', 'forward', 'new');
    $this->action = 'new'; //its a new message by default
    $this->mid = null;
    if (!empty(PA::$page_uid)) {
      $this->page_uid = PA::$page_uid;
    } 
    if (!empty(PA::$login_uid)){
      $this->uid = PA::$login_uid;
    }
    if (!empty($request_data['do_action'])) {
      if (in_array($request_data['do_action'], $possible_actions)) {
        $this->action = $request_data['do_action'];
      }
    }
    if (!empty($request_data['mssg_id'])) {
      // message id of the message for which some action has to be taken.
      $this->mid = $request_data['mssg_id'];
    } else {
      // If mid is not set then its a save of a new message only.
      $this->action = 'new';
    }
  }
  
  /** !!
     * This calls the {@link generate_inner_html() } function and
     * then calls the parent class's render function which
     * stiches together the inner and outer html.
     *
     * @return string $content The html to be rendered to the page.
     */
  public function render() {
    $this->inner_HTML = $this->generate_inner_html();
    $content = parent::render();
    return $content;
  }
  
  /** !!
     * This is stupid...
     *
     * @todo THIS DOES NOTHING! 
     */
  public function handleAddMessagesSubmit($request_method, $request_data) {
    switch ($request_method) {
      case 'POST':
        if (method_exists($this, 'handlePOSTPageSubmit')) {  // function handlePOSTPageSubmit implemented?
           $this->handlePOSTPageSubmit($request_data);      // yes, use this function to handle POST data!
        }
    }
  }
  
  /** !!
     * Takes the data submitted in the form and gets all of the useful data
     * necessary to send a message.  It takes the name that is being sent to and 
     * gets the id, email, and other assorted data.  It then sends the message and
     * tells the user what the outcome of that process is. It also makes sure the
     *  message is within the correct length.
     *
     *  @param array $request_data  The data to be operated on.
     */
  public function handlePOSTPageSubmit($request_data) { 
    $error = false;
    if (!empty($request_data)) {

      if (isset($request_data['send'])) {
        $message = NULL;
        filter_all_post($request_data, TRUE); // applying input filter to the post data, this function is define in function.php
        $subject = $request_data['subject'];
        $body = $request_data['body'];
        $in_reply_to = $request_data['in_reply_to'];
        if (empty($request_data['to'])) {      
          $message = 8003;
          $error = true;
        }
        if (strlen($body) > MAX_MESSAGE_LENGTH) {      
          $message = 8002;
          $error = true;
        }
        if (!$error) {
          if (empty($subject)) {
            $subject = '[none]';
          }
          $login_names = preg_split("/,\s*/", $request_data['to']);
          $valid_recipients = array(); //login name of all the valid login names.
          $invalid_recipients = array(); // names of all the invalid recipients.
          foreach ($login_names as $login_name) {
            try {
              $User = new User();
              $User->load($login_name);
              $valid_recipients['id'][] = $User->user_id;
              $valid_recipients['name'][] = $User->login_name;
              $valid_recipients['display_name'][] = $User->display_name;
              $valid_recipients['fname'][] = $User->first_name;
              $valid_recipients['email'][] = $User->email;
              
              $valid_recipients['user'][] = $User;
              
              $notif_settings = null;
              $recipient_profile = User::load_user_profile($User->user_id, $User->user_id, 'notifications');
              if (!empty($recipient_profile)) {
                $notif_settings = unserialize($recipient_profile[0]['value']);
              }
              $valid_recipients['notifications'][] = $notif_settings;
            } catch (PAException $e) {
              $invalid_recipients[] = $login_name;
            }
          }
    
          $message = null;
          if (count($valid_recipients)) {
            $is_draft = FALSE;
            
            // actually 'send' the message
            Message::add_message(PA::$login_uid, $valid_recipients['id'], $valid_recipients['name'], $subject, $body, $is_draft, $in_reply_to);
            
            // handle 'also send to email' and 'message_waiting_blink'
            $valid_recipients_count = count($valid_recipients['id']);
            for ($counter = 0; $counter < $valid_recipients_count; $counter++) {
              if (!empty($valid_recipients['notifications'][$counter])) {
                $rec_notif_settings = $valid_recipients['notifications'][$counter];
                
                $as_email = false;
                if (!empty($rec_notif_settings['user_send_message']['value'])) {
                	switch ($rec_notif_settings['user_send_message']['value']) {
                		case NET_EMAIL:
                		case NET_BOTH:
											$as_email = true;
											PAMail::send("user_send_message", $valid_recipients['user'][$counter], PA::$login_user, 
												array(
													'subject' => $subject,
													'message' => $body
												));
                		break;
                		default:
                		break;
                	}
                } 
                // if they are not getting it in email already
                if ((empty($as_email) && !empty($rec_notif_settings['msg_waiting_blink'])) && ($rec_notif_settings['msg_waiting_blink'] == NET_EMAIL)) {
                  PAMail::send("msg_waiting_blink", $valid_recipients['email'][$counter], PA::$login_user, array());
                }  
              }
            }

            $message =   sprintf(__("Message sent successfully to %s"), implode(", ", $valid_recipients['display_name']));
          }
    
          if (count($invalid_recipients)) {
            //some of the recipients are invalid. So displaying the error message for them.
            $message .=   sprintf(__("Message sending failed for %s  as user(s) doesn't exist"), implode(", ", $invalid_recipients));
            $error = true;
          } else {
            // message sent successfully to all the recipients. Redirecting user to inbox
            header('Location: '. PA::$url . PA_ROUTE_MYMESSAGE . "/msg=$message");
            exit;
          }
        }
        if (!empty($message)) {
          $msg_array = array();
          $msg_array['failure_msg'] = $message;
          $msg_array['success_msg'] = NULL;
          $redirect_url = NULL;
          $query_str = NULL;
          set_web_variables($msg_array, $redirect_url, $query_str);
        }  
      }
      
      
    }
  }

  /** !! 
   * This takes the template and sets it up depending on what the 
   * action being executed it.
   *
   * @return string $inner_html The html that is module specific.
   */
  public function generate_inner_html () {
    
    switch ($this->mode) {
      default:
        $tmp_file = PA::$blockmodule_path .'/'. get_class($this) . '/center_inner_public.tpl';
    }
    $inner_html_gen = new Template($tmp_file, $this);
    $inner_html_gen->set('current_theme_path', PA::$theme_url);
    
    if (!empty($this->mid)) {
      $message = Message::load_message(null, $this->mid);
    }
    
    //getting the relations of user.
    $relations = Relation::get_relations($this->uid, APPROVED, PA::$network_info->network_id);
    $friends = array();
    if (count($relations)) {
      foreach ($relations as $relation) {
        $User = new User();
        $relation = (int)$relation;
        $User->load($relation);        
        //$friends[] = array('id'=>$relation, 'login_name'=>$User->login_name);
        $friends[$User->display_name] = $User->login_name;
      }      
      //key of the array will the login_name and value will be the login_id
      //sorting the array on the basis of login_name
      ksort($friends);
    }
    
    $subject = $body = $to = null;
    $in_reply_to = 0;
    switch ($this->action) {
      case 'reply':
      	$in_reply_to = $this->mid;
        $sender = new User();
        $sender->load((int)$message['sender_id']);
        $subject = 'Re: '.$message['subject'];
        $body = "\n\n\n".$sender->login_name." wrote >> \n--------------------------------------\n".$message['body'];
        $to = $sender->login_name;
        $to_display = $sender->display_name;
        $cancel_link = PA::$url .'/'.FILE_VIEW_MESSAGE.'?mid='.$this->mid;
      break;
      case 'forward':
        $subject = 'Fwd: '.$message['subject'];
        $body = $message['body'];
        $cancel_link = PA::$url .'/'.FILE_VIEW_MESSAGE.'?mid='.$this->mid;
      break;
      case 'new':
      default:
        $subject = $body = $to = null;
        $cancel_link = PA::$url . PA_ROUTE_MYMESSAGE;
    }
    
    // if page_uid is set then TO will be set with the login name corresponding with page_uid.
    if (!empty($this->page_uid)) {
      $User = new User();
      $User->load((int)$this->page_uid);
      $to = $User->login_name;
      $to_display = $User->display_name;
    }
    $folders = Message::get_user_folders($this->uid);
    
    $inner_html_gen->set('cancel_link', $cancel_link);
    $inner_html_gen->set('friends', $friends);
    $inner_html_gen->set('to', $to);
    $inner_html_gen->set('to_display', @$to_display);
    $inner_html_gen->set('in_reply_to', $in_reply_to);
    $inner_html_gen->set('subject', $subject);
    $inner_html_gen->set('body', $body);
    $inner_html_gen->set('folders', $folders);
    $inner_html = $inner_html_gen->fetch();
    return $inner_html;
  }
}
