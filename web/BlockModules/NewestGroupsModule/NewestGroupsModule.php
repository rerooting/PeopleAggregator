<?php

require_once PA::$blockmodule_path."/GroupModule/GroupModule.php";
require_once "ext/Group/Group.php";



class NewestGroupsModule extends GroupModule {

  public $module_type = 'group|network';
  public $module_placement = 'left|right';

  function __construct() {
    $this->links = $this->get_links();
    $this->title = sprintf(__('Newest %s'), __(PA::$group_noun_plural));
    $this->html_block_id = 'NewestGroupsModule';
    $this->block_type = 'Homepage';
 }

  private function get_links() {
		$obj_group = new Group();
		$links = $obj_group->get_all('', 5, FALSE, 5, 1 );

    if(sizeof($links)) {
      if (!strstr($_SERVER['PHP_SELF'], FILE_GROUPS_HOME)) {
        $this->view_all_url = PA_ROUTE_GROUPS;
      }
    }
    return $links;
  }

  public function render() {
     $content = parent::render();
     return $content;
  }

}

?>
