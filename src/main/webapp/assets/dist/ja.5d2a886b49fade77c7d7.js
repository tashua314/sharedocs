!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return t[a].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/assets/dist/",e(0)}([function(t,e,n){n(3)},,,function(t,e,n){(function(e){t.exports=e.notification=n(4)}).call(e,function(){return this}())},function(t,e){var n=function(){function t(t){var n={};return n.article=t.article_id+(t.fragment_id?"#comment-"+t.fragment_id:""),n.image=t.image,n.sender=t.sender,n.title=t.title,n.type=t.type,"stock"==t.type?(n.type1="を",n.action="ストック"):"like"==t.type?(n.type1="に",n.action="いいね!"):(n.type1="で",n.action="コメント"),t.is_commenter?n.target="コメントした投稿":n.target="投稿",n.when=e(t.when),t.state?n.state="":n.state="unread",n}function e(t){var e=new Date,n=new Date(t),a=Math.ceil((e.getTime()-n.getTime())/1e3),o=null;return o=a<60?"たった今":a<120?"約 1分前":a<3600?"約"+(Math.floor(a/60)<10?" ":"")+Math.floor(a/60)+"分前":a<7200?"約 1時間前":a<86400?"約"+(Math.floor(a/3600)<10?" ":"")+Math.floor(a/3600)+"時間前":a<604800?"約"+(Math.floor(a/86400)<10?" ":"")+Math.floor(a/86400)+"日前":"約"+(Math.floor(a/604800)<10?" ":"")+Math.floor(a/604800)+"週間前"}var n=$("meta[name=csrf-token]").attr("content");$.ajax({method:"GET",url:"/notifications",dataType:"json",data:{"csrf-token":n}}).done(function(e){if($("#notification_count").text(e.count),e.data.length>0){$("#notification-items").children().remove(),$("#notification-default").remove();for(var a='\t      <li class="notification-contents-list-item"> \t      <a href="/articles/___article___" class="notification-contents-item-link___state___"> \t        <div class="notification-contents-item-icon"> \t          <img src="___image___" /> \t        </div> \t        <div class="notification-contents-item-text"> \t          <span class="sender">___sender___</span>があなたの___target___<span class="title">"___title___"</span>___type1___<span class="action ___type___">___action___</span>しました。 \t          <div class="status">___when___</div> \t        </div> \t      </a> \t      </li>',o=0;o<e.data.length;o++){var _=t(e.data[o]);$("#notification-items").append($(a.replace(/___article___/,_.article).replace(/___image___/,_.image).replace(/___sender___/,_.sender).replace(/___target___/,_.target).replace(/___title___/,_.title).replace(/___type___/,_.type).replace(/___type1___/,_.type1).replace(/___action___/,_.action).replace(/___when___/,_.when).replace(/___state___/,_.state)))}}var i=new Favico({animation:"none"});0!=e.count?($("#notification_count").addClass("unchecked").on("click",function(){$.ajax({method:"POST",url:"/notifications",dataType:"json",data:{"csrf-token":n}}).done(function(t){$("#notification_count").removeClass("unchecked").text(t.count),i.reset()})}),i.badge(e.count)):i.reset(),$(document).on("click",function(){$(".dropdownWrapper").css("display","none")}),$("#notification_count").on("click",function(t){t.stopPropagation(),$(".dropdownWrapper").toggle()})}).fail(function(t,e,n){console.log("error during get notifications")})};t.exports=n}]);
//# sourceMappingURL=ja.5d2a886b49fade77c7d7.js.map