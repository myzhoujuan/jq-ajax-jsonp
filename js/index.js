$(function () {
    //header
    function opacity(id, id2) {

        $(id).hover(function () {
                $(id2).stop().fadeIn();
            },
            function () {
                $(id2).stop().fadeOut();
            }
        )
    }
//contact us
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

    //banner
    var oBanner_pic = $('#banner-pic');
    oBanner_pic.append(oBanner_pic.html());
    var aLi = $('#banner-pic').children();
    oBanner_pic.css('width', aLi.outerWidth() * aLi.length + 'px');
    var aBanner_btn = $('#banner-btn');
    var n = 0;
    var timer = null;

    function next() {
        timer = setInterval(function () {
            n++;
            if (n > aLi.length / 2) {
                n = 1;
                oBanner_pic.css('left', 0);
            }
            if (n == aLi.length / 2) {
                $(aBanner_btn.children()).eq(0).addClass('active');
            } else {
                $(aBanner_btn.children()).eq(n).addClass('active');
            }
            aBanner_btn.children().eq(n - 1).removeClass('active');
            oBanner_pic.animate({left: -n * aLi.outerWidth()}, {duration: 500})
        }, 2000);
    }

    next();

    oBanner_pic.hover(function () {
        clearInterval(timer);
    }, next);
    aBanner_btn.children().click(function () {
        clearInterval(timer);
        aBanner_btn.children().removeClass('active');
        $(this).addClass('active');
        n = $(this).index()
        oBanner_pic.animate({left: -($(this).index()) * aLi.outerWidth()}, {duration: 500})
    });


//question
    $.ajax({
        url: 'http://boss.shopcmd.com/boss/website/getFaqInfoList.do?',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (json) {
            var oAsk = $('#ask-data').find('li');
            var a1 = oAsk.eq(0).find('a');
            var a2 = oAsk.eq(1).find('a');
            var a3 = oAsk.eq(2).find('a');
            var a4 = oAsk.eq(3).find('a');
            var a5 = oAsk.eq(4).find('a');
            var a6 = oAsk.eq(5).find('a');

            var arrData = json.data;
            $.each(arrData, function (i) {
                switch (arrData[i].category) {
                    case 0:
                        a1.append('<i>' + arrData[i].title + '</i>');
                        break;
                    case 2:
                        a2.append('<i>' + arrData[i].title + '</i>');
                        break;
                    case 3:
                        a3.append('<i>' + arrData[i].title + '</i>');
                        break;
                    case 4:
                        a4.append('<i>' + arrData[i].title + '</i>');
                        break;
                    case 5:
                        a5.append('<i>' + arrData[i].title + '</i>');
                        break;
                    case 6:
                        a6.append('<i>' + arrData[i].title + '</i>');
                        break;
                }
            })
        },
        error: function (str) {
            alert('哎呦！网络不给力哦！')
        }
    })


    //classical  case
    //var oCaseContent = $('.case-wrapper').find('ul');
    var oCaseContent = $('#ul_id');
    $.ajax({
        url: 'http://boss.shopcmd.com/boss/website/websiteCase.do?site=1',
        jsonp: 'callback',
        dataType: 'jsonp',
        //async:true,
        success: function (json) {
            var arr = json.data.content;
            $.each(arr, function (i) {
                var oLi = $('<li><a href="' + arr[i].webAddress + '"><img src="http://hycloudshop.img-cn-hangzhou.aliyuncs.com/' + arr[i].logo + '" alt=""></a><h2>' + arr[i].webName + '<a href="' + arr[i].webAddress + '"></h2><span><i></i></span></a></li>');
                oLi.appendTo(oCaseContent);
            });
            com();
        },
        error: function (str) {
            alert('哎呦！网络不给力哦！')
        },
    })
var caseNum=0;
    function com() {
        var aLi2 = oCaseContent.children();

        oCaseContent.css('width', (aLi2.outerWidth() + 40) * aLi2.length + 'px');

        aLi2.hover(function () {
            $(this).find('span').stop().fadeIn();
            $(this).find('img').css('transform','scale(1.2,1.2)');
        }, function () {
            $(this).find('span').stop().fadeOut();
            $(this).find('img').css('transform','scale(1,1)')
        })


        $('.next').click(function () {

            if (oCaseContent.css('left') == -(aLi2.outerWidth() + 40) * (aLi2.length-3) + 'px') {
                return;
            }

            caseNum+=3;
            if(aLi2.length-caseNum<3){
                caseNum=aLi2.length-3;
            };
            if(caseNum>aLi2.length-3){
                return;
            }
            oCaseContent.stop().animate({left: -caseNum * aLi2.outerWidth() - caseNum*40});
            if (caseNum==aLi2.length-3) {
                $(this).css('background-position', '0px -180px');
            };
            $('.pre').css('background-position', '0px -60px')

        })

        $('.pre').click(function () {
            if (oCaseContent.css('left') == 0) {
                return;
            }
            caseNum-=3;
            if(caseNum<0){
                caseNum=0;
                $(this).css('background-position', '0px 0px');
            }
            oCaseContent.stop().animate({left: -caseNum * aLi2.outerWidth() - caseNum*40});
            $('.next').css('background-position', '0px -120px')

        })
    }

//media
    $.ajax({
        url: 'http://boss.shopcmd.com/boss/website/websiteCase.do?site=3',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (json) {
            var arr = json.data.content;
            var oMediaContent = $('#media-content');
            for (var i = 0; i < arr.length; i++) {
                var oLi = $('<li><a href="' + arr[i].webAddress + '"><img src="http://hycloudshop.img-cn-hangzhou.aliyuncs.com/' + arr[i].logo + '" alt="正在加载哦"></a></li>');
                oLi.appendTo(oMediaContent);
            }
        },
        error: function () {
            alert('哎呦！网络不给力哦！')
        }
    })





})

