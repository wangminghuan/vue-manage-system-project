/**
 * @module  cookie 
 * @description 获取url参数
 * 例子：
 *cookie.get("name");
 *cookie.set("name","minghuang",new Date("May 1,2017"), "/", "58.com")
 *cookie.unset("name","minghuang",new Date("May 1,2017"), "/", "58.com")
 */
 var cookie = {
    get: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
        }
        return cookieValue;
    },
    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure=" + secure;
        }
        document.cookie = cookieText;
    },
    unset: function(name, value, expires, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};
/*
 取窗口可视范围的高度 
*/
export
var getClientHeight=function()
{
    var clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight)
    {
        var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }
    else
    {
        var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
    }
    return parseFloat(clientHeight);
};
/*
 取窗口可视范围的宽度 
*/
export
var getClientWidth=function()
{
    var clientWidth=0;
    if(document.body.clientWidth&&document.documentElement.clientWidth)
    {
        var clientWidth = (document.body.clientWidth<document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientWidth;        
    }
    else
    {
        var clientWidth = (document.body.clientWidth>document.documentElement.clientWidth)?document.body.clientWidth:document.documentElement.clientHeclientWidthight;    
    }
    return parseFloat(clientWidth);
};
/*
    取窗口滚动条高度 
*/
export 
var getScrollTop=function(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return parseFloat(scrollTop);
};
export 
var setScrollTop=function(height){
    if(document.documentElement&&document.documentElement.scrollTop){
        document.documentElement.scrollTop=height;
    }else if(document.body){
        document.body.scrollTop=height;
    }
};
/*
    取文档高度 
*/
export 
var getDocumentHeight= function ()
{
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}
export
var getUrlArgs=function() {
    var argStr = window.location.search ? window.location.search.substring(1) : "";
    var argObj = {},
        item = null,
        value = null,
        key = null,
        argArr = argStr.length > 0 ? argStr.split("&") : [];
    for (var i = 0, len = argArr.length; i < len; i++) {
        item = argArr[i].split("=");
        key = item[0];
        value = item[1];
        argObj[key] = value;
    }
    return argObj
}