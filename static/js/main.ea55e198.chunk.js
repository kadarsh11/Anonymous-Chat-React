(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{117:function(e,t,a){e.exports=a(209)},122:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},194:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(122),a(123),a(57)),s=a(58),l=a(65),m=a(59),u=a(66),p=a(216),g=a(10),h=a(219),b=a(213),d=a(214),f=a(215),y=p.a.Meta,E=(r.a.Component,a(194),a(112)),v=a.n(E),x=a(220),C=a(217),k=a(42),j=a(20),w=a(114),_=a(218),S=x.a.Header,O=(x.a.Footer,x.a.Sider),B=x.a.Content,M=C.a.TextArea,N=p.a.Meta,P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={is_chat_active:!1,join_id:"",name:"",msg:"",chat:[]},a.connect=function(){var e=a.state,t=e.join_id,n=e.name;a.pubnub.subscribe({channels:[t,"".concat(t,"-data")]}),a.pubnub.getMessage(t,(function(e){var t=null,o=a.state.chat;t=e.message.by==n?r.a.createElement(k.a,{style:{marginBottom:"10px"},key:e.timmetoken},r.a.createElement(j.a,{span:12}),r.a.createElement(j.a,{span:12,style:{backgroundColor:"pink"}},e.message.msg)):r.a.createElement(k.a,{style:{marginBottom:"10px"},key:e.timmetoken},r.a.createElement(j.a,{span:12,style:{backgroundColor:"pink"}},e.message.msg),r.a.createElement(j.a,{span:12})),o.push(t),a.setState({chat:o})}))},a.send=function(){var e=a.state,t=e.msg,n=e.name,r=e.join_id;console.log("CONNECT",t),a.pubnub.publish({message:{by:n,msg:t},channel:r,sendByPost:!1,storeInHistory:!1},(function(e,t){console.log("My Response",t)}))},a.renderChatScreen=function(){return r.a.createElement("div",{style:{backgroundColor:"#ecf0f1",height:"100vh",margin:"auto"}},r.a.createElement(x.a,null,r.a.createElement(S,{style:{color:"white",height:"60px"}},"Chat anonymous"),r.a.createElement(x.a,{style:{height:"89vh"}},r.a.createElement(O,{style:{"padding-left":"5px","padding-right":"5px"}},r.a.createElement(N,{style:{backgroundColor:"#ecf0f1","border-radius":"5px","margin-top":"10px"},avatar:r.a.createElement(b.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Adarsh Kumar"}),r.a.createElement(N,{style:{backgroundColor:"#ecf0f1","border-radius":"5px","margin-top":"10px"},avatar:r.a.createElement(b.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Phoolan"})),r.a.createElement(B,null,r.a.createElement("div",{style:{margin:"10px",height:"100%"}},r.a.createElement("div",{style:{margin:"10px",backgroundColor:"orange",height:"90%"}},a.state.chat),r.a.createElement(k.a,null,r.a.createElement(j.a,{span:20},r.a.createElement(M,{onChange:function(e){return a.state.msg=e.target.value},placeholder:"Enter your message",autoSize:{minRows:2,maxRows:4}})),r.a.createElement(j.a,{span:4},r.a.createElement(w.a,{type:"primary",onClick:function(){return a.send()}},"Send"))))))))},a.onConnect=function(){var e=a.state,t=e.name,n=e.msg;a.pubnub.publish({message:{by:t,msg:n+t},channel:"1111",sendByPost:!1,storeInHistory:!1,meta:{cool:"meta"}},(function(e,t){console.log("My Response",t),console.log("My Response",e)}))},a.renderJoinScreen=function(){return r.a.createElement("div",{style:{backgroundColor:"#ecf0f1",height:"100vh",margin:"auto"}},r.a.createElement("div",{style:{width:"30%","padding-vertical":"20px"}},r.a.createElement(C.a,{onChange:function(e){return a.state.name=e.target.value},placeholder:"Your good name",prefix:r.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),suffix:r.a.createElement(_.a,{title:"Extra information"},r.a.createElement(g.a,{type:"info-circle",style:{color:"rgba(0,0,0,.45)"}}))}),r.a.createElement(C.a,{onChange:function(e){return a.state.join_id=e.target.value},placeholder:"Enter Joining Number",prefix:r.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),suffix:r.a.createElement(_.a,{title:"Extra information"},r.a.createElement(g.a,{type:"info-circle",style:{color:"rgba(0,0,0,.45)"}}))}),r.a.createElement(w.a,{onClick:function(){a.connect(),a.setState({is_chat_active:!0})},type:"primary",style:{"margin-top":"20px"}},"Primary")))},a.initializePubNub(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"initializePubNub",value:function(){this.pubnub=new v.a({publishKey:"pub-c-c64d0b2d-2349-4e51-9231-b04f77fa59b2",subscribeKey:"sub-c-360a7838-eebc-11e9-bdee-36080f78eb20"}),this.pubnub.init(this)}},{key:"render",value:function(){var e=this.state.is_chat_active;return r.a.createElement("div",null,e?this.renderChatScreen():this.renderJoinScreen())}}]),t}(r.a.Component);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[117,1,2]]]);
//# sourceMappingURL=main.ea55e198.chunk.js.map