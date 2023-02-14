
//左侧图标多彩
let leftHeader=document.querySelectorAll("span.nav-icon>svg,span.nav-icon>i");let leftHeaderColorArr=["#FF69B4","#58c7ea","#E066FF","#FF69B4","#FFA54F","#90EE90","#0043ff","#cc00ff","#8e7cc3","#A0522D","#FF7256","#FFA500","#8B0000","#7CFC00","#4EEE94","#00FFFF","#EE0000"];leftHeader.forEach(tag=>{tagsColor=leftHeaderColorArr[Math.floor(Math.random()*leftHeaderColorArr.length)];tag.style.color=tagsColor});

// 彩色标签云
let tags = document.querySelectorAll("#tag_cloud-2 a");
let infos = document.querySelectorAll(".badge");
let colorArr = ["#428BCA", "#AEDCAE", "#ECA9A7", "#DA99FF", "#FFB380", "#D9B999"];
tags.forEach(tag => {
    tagsColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    tag.style.backgroundColor = tagsColor;
});
infos.forEach(info => {
    infosColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    info.style.backgroundColor = infosColor;
});
function addNumber(a) {
    var length = document.getElementById("comment").value.length;
    if(length> 0){
        document.getElementById("comment").focus()
        document.getElementById("comment").value += '\n' + a + new Date
    }else{
        document.getElementById("comment").focus()
        document.getElementById("comment").value += a + new Date
    }
}
$(function(){
        $("#PageLoading").fadeOut(400);
        $("#body").css('overflow','');
    });

//加载显示
$(window).scroll(function() {
    var a = $(window).scrollTop(),
    c = $(document).height(),
    b = $(window).height();
    scrollPercent = a / (c - b) * 100;
    scrollPercent = scrollPercent.toFixed(1);
    $("#percentageCounter").css({
        width: scrollPercent + "%"
    });
}).trigger("scroll");

kaygb_copy();function kaygb_copy(){$(document).ready(function(){$("body").bind('copy',function(e){hellolayer()})});var sitesurl=window.location.href;function hellolayer(){
$.message({
    message: "尊重原创，转载请注明出处！<br> 本文作者：Guigui'Blog<br>原文链接："+sitesurl,
    title: "复制成功",
    type: "warning",
    autoHide: !1,
    time: "15000"
    })
}}


//人生倒计时
function init_life_time() {
            function getAsideLifeTime() {
                /* 当前时间戳 */
                let nowDate = +new Date();
                /* 今天开始时间戳 */
                let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
                /* 今天已经过去的时间 */
                let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
                /* 今天已经过去的时间比 */
                let todayPassHoursPercent = (todayPassHours / 24) * 100;
                $('#dayProgress .title span').html(parseInt(todayPassHours));
                $('#dayProgress .progress .progress-inner').css('width', parseInt(todayPassHoursPercent) + '%');
                $('#dayProgress .progress .progress-percentage').html(parseInt(todayPassHoursPercent) + '%');
                /* 当前周几 */
                let weeks = {
                    0: 7,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6
                };
                let weekDay = weeks[new Date().getDay()];
                let weekDayPassPercent = (weekDay / 7) * 100;
                $('#weekProgress .title span').html(weekDay);
                $('#weekProgress .progress .progress-inner').css('width', parseInt(weekDayPassPercent) + '%');
                $('#weekProgress .progress .progress-percentage').html(parseInt(weekDayPassPercent) + '%');
                let year = new Date().getFullYear();
                let date = new Date().getDate();
                let month = new Date().getMonth() + 1;
                let monthAll = new Date(year, month, 0).getDate();
                let monthPassPercent = (date / monthAll) * 100;
                $('#monthProgress .title span').html(date);
                $('#monthProgress .progress .progress-inner').css('width', parseInt(monthPassPercent) + '%');
                $('#monthProgress .progress .progress-percentage').html(parseInt(monthPassPercent) + '%');
                let yearPass = (month / 12) * 100;
                $('#yearProgress .title span').html(month);
                $('#yearProgress .progress .progress-inner').css('width', parseInt(yearPass) + '%');
                $('#yearProgress .progress .progress-percentage').html(parseInt(yearPass) + '%');
            }
            getAsideLifeTime();
            setInterval(() => {
                getAsideLifeTime();
            }, 1000);
        }
        init_life_time()
//人生倒计时 end


//一键评论打卡
function a(a, b, c) {
        if (document.selection) a.focus(), sel = document.selection.createRange(), c ? sel.text = b + sel.text + c : sel.text = b, a.focus();
        else if (a.selectionStart || "0" == a.selectionStart) {
            var l = a.selectionStart,
                m = a.selectionEnd,
                n = m;
            c ? a.value = a.value.substring(0, l) + b + a.value.substring(l, m) + c + a.value.substring(m, a.value.length) : a.value = a.value.substring(0, l) + b + a.value.substring(m, a.value.length);
            c ? n += b.length + c.length : n += b.length - m + l;
            l == m && c && (n -= c.length);
            a.focus();
            a.selectionStart = n;
            a.selectionEnd = n
        } else a.value += b + c, a.focus()
}
var b = (new Date).toLocaleTimeString(),
        c = document.getElementById("comment") || 0;
window.SIMPALED = {};
window.SIMPALED.Editor = {
    daka: function() {
        a(c, "滴！学生卡！打卡时间：" + b, "，请上车的乘客系好安全带~")
    },
    zan: function() {
        a(c, " 写得好好哟,我要给你生猴子！::aru:flower::  ")
    },
    cai: function() {
        a(c, "骚年,我怀疑你写了一篇假的文章！::aru:flower::  ")
    }
};
//一键评论打卡  end
