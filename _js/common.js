$(function(){
    function opacity(id, id2) {
        $(id).hover(function () {
                $(id2).stop().fadeIn();
            },
            function () {
                $(id2).stop().fadeOut();
            }
        )
    }

    $('#consult a:first').hover(function () {
        $(this).html('联系我们')
    }, function () {
        $(this).html('')
    })
    $('#consult a:last').hover(function () {
        $(this).html('常见问题')
    }, function () {
        $(this).html('')
    })
    opacity('#user-center', '#user-intro');
    opacity('#store', '.store-content');






});