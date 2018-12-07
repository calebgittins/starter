<?php
if( have_rows( 'td_page_content' ) ) {
    while ( have_rows( 'td_page_content' ) ) {
        the_row();
        $layout_name  = get_row_layout();
        $layout_class = str_replace('_', '-', $layout_name);
        get_template_part( 'layout/' . $layout_class );
    }
}
?>