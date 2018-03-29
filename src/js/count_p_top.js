(function(){
    var _h=(document.documentElement.clientWidth>620)?556:436;
    var height=(document.documentElement.clientHeight-_h)/2;
    var style=document.createElement('style');
    style.innerHTML='body{padding-top:'+height+'px}'
    var head=document.getElementsByTagName('head')[0];
    head.appendChild(style);
})()
