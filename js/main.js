$(document).ready(function(){
    $('.tab_panels .tabs li').on('click', function(){
        var panelToShow = $(this).attr('rel');
        $(this).addClass('active').siblings().removeClass('active')

        $('.tab_panels .panel.active').fadeOut(600, function () {
            $(this).removeClass('active');
                $('#' + panelToShow).fadeIn(600, function () {
                    $(this).addClass('active');
                })
            })
        })
})