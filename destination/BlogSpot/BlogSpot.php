<?php
/**
 * Class for routing content.
 *
 * @package BlogSpot
 * @author Tekriti Software (http://www.tekritisoftware.com)
 */

require_once "web/includes/blogger.php";

class BlogSpot {

  /**
  * The default constructor for message class.
  */
  public function __construct() {
    return;
  }
  
  public function send($post, $blogurl, $username, $password) {
    $connection = blogger_connectToBlogger();
    $data = blogger_getUsersBlogs($username, $password);
    $blogid = usersubs_get_blog_id($data, $blogurl);
    $description = $post['body'];
    $content = $description;
    $data = blogger_newPost($blogid, $username, $password, $content, 1);
  }
}
?>