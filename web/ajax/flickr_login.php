<?php
  /*
  This script has the sole purpose of generating
  a current Flickt Auth URL, cmplete with frob etc
  */
  require_once dirname(__FILE__).'/../../config.inc';
  require_once "web/includes/classes/Flickrclient.php";
  $client = new Flickrclient();
  $frob = $client->auth_getFrob();
  $flickr_auth_url = $client->make_auth_url($frob, "write");
  header("Location: $flickr_auth_url");
  exit(0);
?>