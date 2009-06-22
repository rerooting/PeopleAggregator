<?php
$login_required = TRUE;
//including necessary files
$use_theme = 'Beta'; //TODO : Remove this when new UI is completely implemented.
include_once("web/includes/page.php");
require 'api/Rating/Rating.php';
global $current_theme_path;
$Rating = new Rating();
if (!empty($_POST)) { 
  $Rating->set_rating_type(@$_POST['rating_type']);
  $Rating->set_type_id(@(int)$_POST['type_id']);
  $Rating->set_rating(@(int)$_POST['rating']);
  $Rating->set_max_rating(@(int)$_POST['max_rating']);
  $Rating->set_user_id(@(int)$login_uid);
  $Rating->rate();
  $rating = thumbs_rating(@$_POST['rating_type'], @(int)$_POST['type_id']);
  
  print $rating['overall'].'@';
  if($_POST['rating'] == 1 ) {
    $return['new'] = 'Your Recommendation:<img src="'.$current_theme_path.'/images/rec_yes1.png" alt="star" />';
   print $return['new'];
  }
  else {
    $return['new'] = 'Your Recommendation:<img src="'.$current_theme_path.'/images/rec_no1.png" alt="star" />';
    print  $return['new']; 
  }
}
  
  
?>