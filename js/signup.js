/**
 * password_strength_plugin.js
 * Copyright (c) 20010 myPocket technologies (www.mypocket-technologies.com)
 

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * @author Darren Mason (djmason9@gmail.com)
 * @date 3/13/2009
 * @projectDescription Password Strength Meter is a jQuery plug-in provide you smart algorithm to detect a password strength. Based on Firas Kassem orginal plugin - http://phiras.wordpress.com/2007/04/08/password-strength-meter-a-jquery-plugin/
 * @version 1.0.1
 * 
 * @requires jquery.js (tested with 1.3.2)
 * @param shortPass:	"shortPass",	//optional
 * @param badPass:		"badPass",		//optional
 * @param goodPass:		"goodPass",		//optional
 * @param strongPass:	"strongPass",	//optional
 * @param baseStyle:	"testresult",	//optional
 * @param userid:		"",				//required override
 * @param messageloc:	1				//before == 0 or after == 1
 * 
*/
(function(e){e.fn.shortPass="Too short",e.fn.badPass="Weak",e.fn.goodPass="Good",e.fn.strongPass="Strong",e.fn.samePassword="Username and Password identical.",e.fn.resultStyle="",e.fn.passStrength=function(t){var a={shortPass:"shortPass",badPass:"badPass",goodPass:"goodPass",strongPass:"strongPass",baseStyle:"testresult",userid:"",messageloc:1},s=e.extend(a,t);return this.each(function(){var t=e(this);e(t).unbind().keyup(function(){var t=e.fn.teststrength(e(this).val(),e(s.userid).val(),s);1===s.messageloc?(e(this).next("."+s.baseStyle).remove(),e(this).after('<span class="'+s.baseStyle+'"><span></span></span>'),e(this).next("."+s.baseStyle).addClass(e(this).resultStyle).find("span").text(t)):(e(this).prev("."+s.baseStyle).remove(),e(this).before('<span class="'+s.baseStyle+'"><span></span></span>'),e(this).prev("."+s.baseStyle).addClass(e(this).resultStyle).find("span").text(t))}),e.fn.teststrength=function(t,a,s){var r=0;return 4>t.length?(this.resultStyle=s.shortPass,e(this).shortPass):t.toLowerCase()==a.toLowerCase()?(this.resultStyle=s.badPass,e(this).samePassword):(r+=4*t.length,r+=1*(e.fn.checkRepetition(1,t).length-t.length),r+=1*(e.fn.checkRepetition(2,t).length-t.length),r+=1*(e.fn.checkRepetition(3,t).length-t.length),r+=1*(e.fn.checkRepetition(4,t).length-t.length),t.match(/(.*[0-9].*[0-9].*[0-9])/)&&(r+=5),t.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)&&(r+=5),t.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(r+=10),t.match(/([a-zA-Z])/)&&t.match(/([0-9])/)&&(r+=15),t.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&t.match(/([0-9])/)&&(r+=15),t.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&t.match(/([a-zA-Z])/)&&(r+=15),(t.match(/^\w+$/)||t.match(/^\d+$/))&&(r-=10),0>r&&(r=0),r>100&&(r=100),34>r?(this.resultStyle=s.badPass,e(this).badPass):68>r?(this.resultStyle=s.goodPass,e(this).goodPass):(this.resultStyle=s.strongPass,e(this).strongPass))}})}})(jQuery),$.fn.checkRepetition=function(e,t){for(var a="",s=0;t.length>s;s++){for(var r=!0,l=0;e>l&&t.length>l+s+e;l++)r=r&&t.charAt(l+s)==t.charAt(l+s+e);e>l&&(r=!1),r?(s+=e-1,r=!1):a+=t.charAt(s)}return a},function(e,t,a){function s(e){var t={},s=/^jQuery\d+$/;return a.each(e.attributes,function(e,a){a.specified&&!s.test(a.name)&&(t[a.name]=a.value)}),t}function r(e,s){var r=this,l=a(r);if(r.value==l.attr("placeholder")&&l.hasClass("placeholder"))if(l.data("placeholder-password")){if(l=l.hide().next().show().attr("id",l.removeAttr("id").data("placeholder-id")),e===!0)return l[0].value=s;l.focus()}else r.value="",l.removeClass("placeholder"),r==t.activeElement&&r.select()}function l(){var e,t=this,l=a(t),n=this.id;if(""==t.value){if("password"==t.type){if(!l.data("placeholder-textinput")){try{e=l.clone().attr({type:"text"})}catch(o){e=a("<input>").attr(a.extend(s(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":n}).bind("focus.placeholder",r),l.data({"placeholder-textinput":e,"placeholder-id":n}).before(e)}l=l.removeAttr("id").hide().prev().attr("id",n).show()}l.addClass("placeholder"),l[0].value=l.attr("placeholder")}else l.removeClass("placeholder")}var n,o,h="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),c=a.fn,d=a.valHooks;h&&i?(o=c.placeholder=function(){return this},o.input=o.textarea=!0):(o=c.placeholder=function(){var e=this;return e.filter((h?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":l}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},o.input=h,o.textarea=i,n={get:function(e){var t=a(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,s){var n=a(e);return n.data("placeholder-enabled")?(""==s?(e.value=s,e!=t.activeElement&&l.call(e)):n.hasClass("placeholder")?r.call(e,!0,s)||(e.value=s):e.value=s,n):e.value=s}},h||(d.input=n),i||(d.textarea=n),a(function(){a(t).delegate("form","submit.placeholder",function(){var e=a(".placeholder",this).each(r);setTimeout(function(){e.each(l)},10)})}),a(e).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),$(document).ready(function(){$("input, textarea").placeholder()}),$(document).ready(function(){$("#inputPassword").passStrength({userid:"#inputEmail",messageloc:0,shortPass:"top_shortPass",badPass:"top_badPass",goodPass:"top_goodPass",strongPass:"top_strongPass",baseStyle:"top_testresult"})});