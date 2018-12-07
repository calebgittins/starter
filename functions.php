<?php

/*------------------------------------*\
    $ADMIN FUNCTIONS
\*------------------------------------*/

// Load /functions/ folder
include('functions/loader.php');

// Add title tag support
add_theme_support( 'title-tag' );

// Add support for custom styles in WordPress editor
add_editor_style();

// Add default content width
if ( ! !empty( $content_width ) ) $content_width = 1200;

// Add support for WordPress custom menus
add_action( 'init', 'register_my_menu' );

// Register areas for custom menus
function register_my_menu() {
	register_nav_menu( 'menu-header', __( 'Header Menu' ) );
	register_nav_menu( 'menu-footer', __( 'Footer Menu' ) );
}

// Enable post thumbnails
add_theme_support('post-thumbnails');

// Custom image sizes
if ( function_exists( 'add_image_size' ) ) { 
	add_image_size( 'post-thumbnail', 242, 224, true );
    add_image_size( 'post-featured', 815, 450, true );
}

// Remove inline gallery styling
add_filter( 'use_default_gallery_style', '__return_false' );

/*------------------------------------*\
    $SCRIPTS
\*------------------------------------*/

// Call the google CDN version of jQuery for the frontend

if (!is_admin()) add_action("wp_enqueue_scripts", "td_jquery_enqueue", 11);
	
function td_jquery_enqueue() {
	wp_deregister_script('jquery');
	wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js", false, null);
	wp_enqueue_script('jquery');
}

// Load custom javascript files

add_action( 'wp_enqueue_scripts', 'td_load_javascript_files' );

function td_load_javascript_files() {
    $rand = rand( 1, 9999 ); 
    //wp_enqueue_script( 'google-map', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAS-PIIwiBkyt54BukihtDtzl3kmlG4_0Y&', array( 'jquery' ), NULL, true );
    wp_register_script( 'theme-vendor', get_template_directory_uri() . '/js/min/vendor.min.js', array('jquery'), $rand, true );
    wp_enqueue_script( 'theme-vendor' );
    wp_register_script( 'theme-functions', get_template_directory_uri() . '/js/min/custom.min.js', array('jquery'), $rand, true );
	wp_enqueue_script( 'theme-functions' );
}

/*------------------------------------*\
    $TYPEKIT - UNCOMMENT TO USE
\*------------------------------------*/

// function td_enqueue_scripts() {
//     wp_enqueue_script( 'typekit', '//use.typekit.net/xxx.js' );
// }

// add_action( 'wp_enqueue_scripts', 'td_enqueue_scripts' );

// function td_typekit_inline() {

//     if ( wp_script_is( 'typekit', 'done' ) ) {
//         echo '<script>try{Typekit.load();}catch(e){}</script>';
//     }

// }

// add_action( 'wp_head', 'td_typekit_inline' );

/*------------------------------------*\
    $STYLES
\*------------------------------------*/

function td_load_styles () {	
    $rand = rand( 1, 9999 ); 
	wp_enqueue_style( 'td-style', get_stylesheet_uri(), '', $rand );
}  

add_action( 'wp_enqueue_scripts', 'td_load_styles' ); 

/*------------------------------------*\
    $MISCELLANEOUS
\*------------------------------------*/

// Remove related YouTube videos

add_filter('oembed_dataparse','td_strip_related_videos', 10, 3);
 
function td_strip_related_videos($return, $data, $url) {
    if ($data->provider_name == 'YouTube') {
        $data->html = str_replace('feature=oembed', 'feature=oembed&#038;rel=0&#038;showinfo=0', $data->html);
        return $data->html;
    } else return $return;
}

function td_custom_youtube_settings($code){
	if(strpos($code, 'youtu.be') !== false || strpos($code, 'youtube.com') !== false){
		$return = preg_replace("@src=(['\"])?([^'\">\s]*)@", "src=$1$2&showinfo=0&rel=0&autohide=1", $code);
		return $return;
	}
	return $code;
}

add_filter('embed_handler_html', 'td_custom_youtube_settings');
add_filter('embed_oembed_html', 'td_custom_youtube_settings');

// Conditional statement for blog pages

function is_blog_page(){
    global $wp_query;
    if (is_home() || is_category() || is_tag() || is_singular('post')) return true;
    return false;
}

// Custom body class

add_filter( 'body_class', 'td_body_class' );

function td_body_class( $classes ) {
	if (is_blog_page())
	$classes[] = 'page--blog';
    if (!is_front_page())
    $classes[] = 'not-home';
	return $classes;
}

// Remove height and width attributes from Featured Image

add_filter( 'post_thumbnail_html', 'td_remove_thumbnail_dimensions', 10, 3 );

function td_remove_thumbnail_dimensions( $html, $post_id, $post_image_id ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
    return $html;
}

// Apple Icons

add_action('wp_head', 'td_apple_icons_header');

function td_apple_icons_header() {
    ?>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/favicon.png" sizes="16x16" type="image/x-icon" />
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/favicon@2x.png" sizes="32x32" type="image/x-icon" />
    <link rel="apple-touch-icon" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_stylesheet_directory_uri();?>/images/apple/apple-touch-icon-152x152.png" />
    <?php
}

/*------------------------------------*\
    $GRAVITY FORMS
\*------------------------------------*/

// Hide label option

add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

// Change <input type="submit"> to <button>

add_filter( 'gform_submit_button', 'td_form_submit_button', 10, 5 );

function td_form_submit_button ( $button, $form ){
    $button = str_replace( "input", "button", $button );
    $button = str_replace( "/", "", $button );
    $button .= "{$form['button']['text']}</button>";
    return $button;
}

// Load datepicker style

add_action( 'gform_enqueue_scripts', 'enqueue_custom_script' );

function enqueue_custom_script() {
    $min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG || isset( $_GET['gform_debug'] ) ? '' : '.min';
    wp_enqueue_style( 'gforms_datepicker_css', GFCommon::get_base_url() . "/css/datepicker{$min}.css", null, GFCommon::$version );
}


// Update spinner image

function gf_spinner_replace( $image_src, $form ) {
    return  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; 
}

add_filter( 'gform_ajax_spinner_url', 'gf_spinner_replace', 10, 2 );

/*------------------------------------*\
    $UPDATE SEARCH FORM HTML
\*------------------------------------*/

function td_change_search_form( $form ) {
    $form = '
    <div class="search">
        <form role="search" method="get" id="search-form" action="' . home_url( '/' ) . '" >
            <label class="screen-reader-text" for="s">' . __('',  'domain') . '</label>
            <input type="search" value="' . get_search_query() . '" name="s" id="s" placeholder="Search&hellip;" />
            <input type="submit" id="searchsubmit" value="'. esc_attr__('Go', 'domain') .'" />
        </form>
    </div>
    ';
    return $form;
}

add_filter( 'get_search_form', 'td_change_search_form' );

/*------------------------------------*\
    $ADD CURRENT CLASS WHEN ON SINGLE
\*------------------------------------*/

function td_menu_item_classes( $classes, $item, $args ) {
    $posts_page_id    = get_option('page_for_posts');
    $posts_page_title = get_the_title($posts_page_id);
    if( ( is_singular( 'post' ) || is_category() || is_tag() ) && $posts_page_title == $item->title )
        $classes[] = 'current-menu-item';
    return array_unique( $classes );
}

add_filter( 'nav_menu_css_class', 'td_menu_item_classes', 10, 3 );

?>