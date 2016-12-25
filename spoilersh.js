<script>
$(function() {
    $('#spoiler .spoiler-content').hide();
    $('#spoiler h2').css('cursor', 'pointer').click(function() {
        $('#spoiler h2').removeClass('active').next().slideUp('slow');
        if ($(this).next().is(':hidden')) {
            $(this).addClass('active').next().slideDown('slow');
        } else {
            $(this).removeClass('active').next().slideUp('slow');
        }
    });
});
</script>
