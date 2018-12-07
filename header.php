<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<div class="header">

	<?php 
		get_template_part('inc/hamburger'); 
		get_template_part('inc/offscreen');
	?>

	<div class="wrap">

		<?php if ( get_field('td_logo','options') ) : $image = get_field('td_logo','options'); ?>
			<div class="header__logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="link--cover"></a>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo get_bloginfo( 'name' ); ?>" />
			</div>
		<?php endif; ?>

		<div class="header__nav">
			<?php $args = array(
				'container'      => 'false',
				'menu_class'     => 'nav nav--primary',
				'theme_location' => 'menu-header'
			); ?>
			<?php wp_nav_menu( $args ); ?>
		</div>

	</div>

</div>

<?php //get_template_part('inc/hero'); ?>