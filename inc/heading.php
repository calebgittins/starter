<?php if(is_search()) { ?>
	Search results
<?php } elseif(is_404()) { ?>
	Error 404
<?php } else { ?>
	<?php the_title(); ?>
<?php } ?>