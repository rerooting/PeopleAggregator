<?php
	$login_required = FALSE;
	$use_theme = 'Beta';
	include_once("web/includes/page.php");

	function setup_module($column, $moduleName, $obj) {
		switch ($column) {
			case 'middle':
				$obj->outer_template = 'outer_public_module.tpl';
				$obj->title = null;
				break;
		}
	}

	$page = new PageRenderer("setup_module", PAGE_POLL_MODULE, "Poll", "container_one_column_module.tpl", "header_module.tpl", PUB, HOMEPAGE, PA::$network_info);
	echo $page->render();
?>