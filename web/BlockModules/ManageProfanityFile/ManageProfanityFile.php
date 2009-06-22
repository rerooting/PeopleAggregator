<?php

class ManageProfanityFile extends Module {

  public $module_type = 'system|network';
  public $module_placement = 'middle';
  public $outer_template = 'outer_public_center_module.tpl';
  
  function __construct() {
  }


   function render() {
    $this->inner_HTML = $this->generate_inner_html();
    $content = parent::render();
    return $content;
  }

  function generate_inner_html() {
    switch ($this->mode) {
     default:
        $inner_template = PA::$blockmodule_path .'/'. get_class($this) . '/center_inner_private.tpl';   
    }
    $this->links = $this->get_links();

    $info = & new Template($inner_template);
    $info->set('links', $this->links);
    $inner_html = $info->fetch();
    return $inner_html;
  }
  
  function get_links() {
    global  $_PA;

    if(file_exists(PA::$project_dir . "/web/config/profanity_words.txt")) {
      $content = file_get_contents(PA::$project_dir . "/web/config/profanity_words.txt");
    } else if(file_exists(PA::$core_dir . "/web/config/profanity_words.txt")) {
      $content = file_get_contents(PA::$core_dir ."/web/config/profanity_words.txt");
    } else {
      $content = join("\r\n", $_PA->profanity); //If no file yet, use defaults
    }
    return $content;
  }

}
?>