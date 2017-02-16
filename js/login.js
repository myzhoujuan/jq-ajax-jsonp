$(function () {
    $('#login-btn').click(function () {
        if (checkName() || checkPwd()) {
            return;
        }
        $.ajax({
            url: '../url/user.php',
            //type:'POST',
            data: {
                act:'login',
                user: $('#username').val(),
                pass: $('#password').val()
            },
            success: function (str) {
                debugger;
                console.log(str);
                if (str.error) {
                    alert(str.desc);
                } else {
                   window.location.href = '../index.html'
                }
            },
            error: function () {
                alert('亲，请求错误了哦！');//crash
            }
        })
    });
    //keyup
    $('#username').keyup(function () {
        keyUp_name();
    });
    $('#password').keyup(function () {
        keyUp_pwd();
    });

    function checkName() {
        if (!$('#username').val()) {
            $('#error-question').show();
            $('#error-question').html('<span>请输入您的账号</span>');
            return true;
        }
    }

    function checkPwd() {
        if ($('#password').val().length < 6) {
            $('#error-question').show();
            $('#error-question').html('<span>密码不能小于6位</span>');
            return true;
        }
    }

    function keyUp_name() {
        $('#username').keyup(function () {
            if (!$('#username').val()) {
                $('#error-question').show();
            }
            $('#error-question').hide();
        })
    }

    function keyUp_pwd() {
        $('#password').keyup(function () {
            if ($('#password').val().length<6) {
                $('#error-question').show();
            }
            $('#error-question').hide();
        })
    }

})
