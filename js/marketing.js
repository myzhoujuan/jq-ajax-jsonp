$(function(){
   var oCase=$('#case-wrapper');
    $.ajax({
        url:'http://boss.shopcmd.com/boss/website/websiteCase.do?site=2',
        dataType:'jsonp',
        success:function(json){
            var arr=json.data.content;
            $.each(arr,function(i){
                var oLi=$('<li><a href="'+arr[i].webAddress+'"><img src="http://hycloudshop.img-cn-hangzhou.aliyuncs.com/'+arr[i].logo+'"></a><h2>'+arr[i].webName+'<a href="'+arr[i].webAddress+'"></h2><span><i></i></span></a></li>')
                oLi.appendTo(oCase);


            })
            com();
            //function
        },
        error:function(){
            alert('哎呦！网络不给力哦！')
        }


    }) ;

    var n=0;
    function com() {
        var aLi2 = oCase.children();

        oCase.css('width', (aLi2.outerWidth() + 40) * aLi2.length + 'px');

        aLi2.hover(function () {
            $(this).find('span').stop().fadeIn();
            $(this).find('img').css('transform','scale(1.2,1.2)')
        }, function () {
            $(this).find('span').stop().fadeOut();
            $(this).find('img').css('transform','scale(1,1)')
        })


        $('#next').click(function () {
            if (oCase.css('left') == -(aLi2.outerWidth() + 40) * (aLi2.length-3) + 'px') {
                return;
            }

            n+=3;
            if(aLi2.length-n<3){
                n=aLi2.length-3;
            };
            if(n>aLi2.length-3){


                return;
            }
            oCase.stop().animate({left: -n * aLi2.outerWidth() - n*40});
            if (n==aLi2.length-3) {
                $(this).css('background-position', '0px -180px');
            };
            $('#pre').css('background-position', '0px -60px')

        })

        $('#pre').click(function () {
            if (oCase.css('left') == 0) {
                return;
            }
            n-=3;
            if(n<0){
                n=0;
                $(this).css('background-position', '0px 0px');
            }
            oCase.stop().animate({left: -n * aLi2.outerWidth() - n*40});
            $('#next').css('background-position', '0px -120px')

        })
    }









});