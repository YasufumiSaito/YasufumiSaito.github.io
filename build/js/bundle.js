!function(t){function e(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),c=(n(3),n(4)),i=n(5),s=n(6);n(1),$(document).ready(function(){Object(o.a)(),Object(c.a)(),Object(i.a)(),Object(s.a)()})},function(t,e){},function(t,e,n){"use strict";e.a=function(){$.getJSON("../data/project.json",function(t){var e=document.getElementById("template").innerHTML,n=Handlebars.compile(e),o=n(t);$("#section1").html(o)})}},function(t,e,n){"use strict"},function(t,e,n){"use strict";e.a=function(){$("#typed").typed({stringsElement:$("#typed-strings"),contentType:"html",typeSpeed:20,startDelay:50,backSpeed:50,backDelay:1500,showCursor:!0,loop:!0})}},function(t,e,n){"use strict";e.a=function(){$("#loader").delay(900).fadeOut(800),$("#loader-inside").delay(600).fadeOut(300),$("#fullpage").show()}},function(t,e,n){"use strict";e.a=function(){$("#switch0").click(function(){$("#photo0").toggleClass("hidden")}),$("#switch1").click(function(){$("#photo1").toggleClass("hidden")}),$("#switch2").click(function(){$("#photo2").toggleClass("hidden")}),$("#switch3").click(function(){$("#photo3").toggleClass("hidden")}),$("#switch4").click(function(){$("#photo4").toggleClass("hidden")}),$("#switch5").click(function(){$("#photo5").toggleClass("hidden")})}}]);
//# sourceMappingURL=bundle.js.map