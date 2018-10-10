$(function(){
    document.body.style.fontSize = SetSize.getScreenRatio() * 10 + 'px';
})

var Info=function(){};      //封装消息
Info.prototype.alert = function (infomation,btn,fun){
    if (btn == undefined) {
        btn = '确定';
    }
    $('body').append(`
            <div class="public-bg">
                <div class="alert-info">
                    <div class="alert-info-top">
                        <p class="alert-info-title">${infomation}</p>
                    </div>
                    <div class="alert-info-bottom">
                        <a href="javascript: void(0)">${btn}</a>
                    </div>
                </div>
            </div>
        `);
    $('.alert-info-bottom a').click(function () {
        $('.public-bg').remove();
        if (fun == undefined) {
            return;
        } else {
            fun();
        }
    })
}
Info.prototype.msg = function (infomation, fun) {
    $('body').append(`
            <div class="msg">
                <div class="msg-main">
                    <div class="msg-left">
                        <img src="img/svg/icon-info.svg" alt="">
                        <p class="msg-info">${infomation}</p>
                    </div>
                    <img class="msg-close" src="img/svg/icon-close.svg" alt="">
                </div>
            </div>
        `);
    $('.msg').show();
    $('.msg-close').click(function () {
        $('.msg').hide();
        if (fun == undefined) {
            return;
        } else {
            fun();
        }
    })
}
var info = new Info();

function loading(){     //加载中
    $('body').append(`
        <div class="public-load">
            <img src="img/loading.gif" alt="">
        </div>
    `)
}
function loaded() {     //加载完毕
    $('.public-load').remove();
}


function Show() { }

Show.prototype.show = function (icon, title, info, callback) {
    $('body').append(`
                <div class="public-bg">
                    <div class="alert-lucency">
                        <div class="alert-main">
                            <div class="alert-close"></div>
                            <img class="alert-icon one" src="img/alert-icon-${icon}.png" alt="">
                            <p class="alert-main-title">${title}</p>
                            <p class="alert-main-info">${info}</p>
                            <a class="alert-main-btn">确定</a>
                        </div>
                    </div>
                </div>
            `)

    $('.alert-main-btn,.alert-close').click(function () {
        callback();
    })
}
Show.prototype.hide = function () {
    $('.public-bg').remove();
}

let myShow = new Show();
