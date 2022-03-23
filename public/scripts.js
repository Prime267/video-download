$(document).ready(function () {
    t396_init('267196377');
    setTimeout(function () { t794_init('269772248'); }, 500);
    setTimeout(function () { t826_init('268984801'); });
    t396_init('269279419');
    setTimeout(function () { t826_init('269614815'); });
    t396_init('268909498');
    t396_init('269487230');
    t396_init('268896361');
    t213_init('268988174');
    // jQuery.cachedScript = function (url) { var options = { dataType: "script", cache: true, url: url }; return jQuery.ajax(options); }; $.cachedScript("https://static.tildacdn.com/js/tilda-zero-forms-1.0.min.js").done(function (script, textStatus) { if (textStatus == 'success') { setTimeout(function () { var recid = '268897427'; var elemid = '1610448173120'; t_zeroForms__init(recid, elemid); }, 500); } else { console.log('Error init form in zeroblock. Err:' + textStatus); } });
    // t396_init('268897427');
    setTimeout(function () { t702_initPopup('386123775'); }, 500); 
    /* fix for Android */
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    if (isAndroid) { 
        $('.t-body').addClass('t-body_scrollable-fix-for-android'); $('head').append("<style>@media screen and (max-width: 560px) {\n.t-body_scrollable-fix-for-android {\noverflow: visible !important;\n}\n}\n</style>");
    }
    console.log('Android css fix was inited');
});
