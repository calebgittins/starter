<?php if ( have_rows('td_social_media','options') ) : $i = 0; ?>
<ul class="nav nav--social">
	<?php while( have_rows('td_social_media','options') ) : the_row(); $i++; ?>
	<li><a href="<?php the_sub_field('link'); ?>" target="_blank"><i class="fa fa-fw <?php the_sub_field('icon'); ?>"></i></a></li>
	<?php endwhile; ?>
</ul>
<?php endif; ?>