!function(a,b){var c=function(b,c){var h=1===b.nodeType?b:document.querySelector(b),i=[].filter.call(h.children,function(a){return"SCRIPT"!==a.nodeName}),j=i[0],k={},l=function(a,b){i[a]&&(q("deactivate",r(j,b)),j=i[a],i.map(m),q("activate",r(j,b)),f(j,"active"),g(j,"inactive"))},m=function(a,b){var c=b-i.indexOf(j),d=c>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(g.bind(null,a)),a!==j&&["inactive",d,d+"-"+Math.abs(c)].map(f.bind(null,a))},n=function(a,b){return arguments.length?void(q("slide",r(i[a],b))&&l(a,b)):i.indexOf(j)},o=function(a,b){var c=i.indexOf(j)+a;q(a>0?"next":"prev",r(j,b))&&l(c,b)},p=function(a,b){return(k[a]||(k[a]=[])).push(b),function(){k[a]=k[a].filter(function(a){return a!==b})}},q=function(a,b){return(k[a]||[]).reduce(function(a,c){return a&&c(b)!==!1},!0)},r=function(a,b){return b=b||{},b.index=i.indexOf(a),b.slide=a,b},s={on:p,fire:q,slide:n,next:o.bind(null,1),prev:o.bind(null,-1),parent:h,slides:i};f(h,"parent"),i.map(function(a){f(a,"slide")});for(var t in c){if(!e[t])throw Error("Missing plugin: "+a+"-"+t);c[t]!==!1&&e[t](s,c[t])}return l(0),d.push(s),s},d=[],e={},f=function(b,c){b.classList.add(a+"-"+c)},g=function(b,c){b.className=b.className.replace(RegExp(a+"-"+c+"(\\s|$)","g")," ").trim()},h=function(a){return function(){var b=arguments;d.map(function(c){c[a].apply(null,b)})}};b[a]={from:c,slide:h("slide"),next:h("next"),prev:h("prev"),plugins:e}}("bespoke",window),bespoke.plugins.keys=function(a,b){var c=b===!0||"horizontal"==b;document.addEventListener("keydown",function(b){(34==b.which||32==b.which||c&&39==b.which||!c&&40==b.which)&&a.next(),(33==b.which||c&&37==b.which||!c&&38==b.which)&&a.prev()})},bespoke.plugins.touch=function(a,b){var c,d,e=b===!0||"horizontal"==b?"X":"Y";a.parent.addEventListener("touchstart",function(a){1==a.touches.length&&(c=a.touches[0]["page"+e],d=0)}),a.parent.addEventListener("touchmove",function(a){1==a.touches.length&&(a.preventDefault(),d=a.touches[0]["page"+e]-c)}),a.parent.addEventListener("touchend",function(){Math.abs(d)>50&&(d>0?a.prev():a.next())})},!function(a){a.plugins.scale=function(a,b){var c=a.parent,d=a.slides[0],e=d.offsetHeight,f=d.offsetWidth,g="zoom"===b||"zoom"in c.style&&"transform"!==b,h=function(a){var b=document.createElement("div");return b.className="bespoke-scale-parent",c.insertBefore(b,a),b.appendChild(a),b},i=g?a.slides:a.slides.map(h),j=function(a){var b="Moz Webkit O ms".split(" ");return b.reduce(function(b,d){return d+a in c.style?d+a:b},a.toLowerCase())}("Transform"),k=g?function(a,b){b.style.zoom=a}:function(a,b){b.style[j]="scale("+a+")"},l=function(){var a=c.offsetWidth/f,b=c.offsetHeight/e;i.forEach(k.bind(null,Math.min(a,b)))};window.addEventListener("resize",l),l()}}(bespoke),function(a){a.plugins.hash=function(a){var b,c=function(){var b=window.location.hash.slice(1),c=parseInt(b,10);b&&(c?d(c-1):a.slides.forEach(function(a,c){a.getAttribute("data-bespoke-hash")===b&&d(c)}))},d=function(c){c!==b&&a.slide(c)};setTimeout(function(){c(),a.on("activate",function(a){var c=a.slide.getAttribute("data-bespoke-hash");window.location.hash=c||a.index+1,b=a.index}),window.addEventListener("hashchange",c)},0)}}(bespoke),!function(a){a.plugins.progress=function(a,b){var c=document.createElement("div"),d=document.createElement("div"),e="vertical"===b?"height":["horizontal",!0].indexOf(b)+1?"width":void 0;e&&(c.className="bespoke-progress-parent",d.className="bespoke-progress-bar",c.appendChild(d),a.parent.appendChild(c),a.on("activate",function(b){d.style[e]=100*b.index/(a.slides.length-1)+"%"}))}}(bespoke),function(a){a.plugins.state=function(a){var b=function(b,c){var d=c.slide.getAttribute("data-bespoke-state");d&&d.split(" ").forEach(function(c){c&&a.parent.classList[b](c)})};a.on("activate",b.bind(null,"add")),a.on("deactivate",b.bind(null,"remove"))}}(bespoke),bespoke.from("article",{keys:!0,touch:!0,scale:!0,hash:!0,progress:!0,state:!0});