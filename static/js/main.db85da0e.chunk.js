(this.webpackJsonpprojectsix=this.webpackJsonpprojectsix||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(25),r=a.n(o),s=(a(33),a(5)),c=a(6),i=a(8),m=a(7),p=a(9),u=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"header"},l.a.createElement(p.b,{to:"/",tabIndex:"0"},l.a.createElement("p",{class:"logo"},"Poll it Together")),l.a.createElement(p.b,{to:"/createpoll",class:"createLink",tabIndex:"0"},"Create a Poll")))},h=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Pull it Together \xa9 2020 - Built with the Power of Teamwork")))},d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"homePage"},l.a.createElement("div",{className:"styleBlock block0"},l.a.createElement("div",{className:"copyContainer"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h1",null,"Create Polls & Share with Your Friends"),l.a.createElement(p.b,{to:"/createpoll",className:"button",tabIndex:"0"},"Create Now!")))),l.a.createElement("div",{className:"styleBlock block1"},l.a.createElement("div",{className:"copyContainer"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h2",null,"1. Use Anywhere"),l.a.createElement("p",null,"Use your customized poll to poll your team in slack, plan your family picnic on facebook, or even settle a hot debate in whatsapp! Your poll can go anywhere and do anything. It's omnipolltent!")))),l.a.createElement("div",{className:"styleBlock block2"},l.a.createElement("div",{className:"copyContainer"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h2",null,"2. Share With Friends"),l.a.createElement("p",null,"Share the link to your poll with friends, family members, and peers! Post it on your wall, or on an instagram story. There is literally no place on the internet for your friends to hide from your poll!")))),l.a.createElement("div",{className:"styleBlock block3"},l.a.createElement("div",{className:"copyContainer"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h2",null,"3. Settle debates!"),l.a.createElement("p",null,"Whether its money, the last doughnut or your pride at stake, you can always settle it with a poll!")))),l.a.createElement("div",{className:"toCreatePoll"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h3",null,"Create a Poll"),l.a.createElement("p",null,"Take me to the Poll Maker!"),l.a.createElement(p.b,{to:"/createpoll",className:"button",tabIndex:"0"},"Create"))))}}]),a}(n.Component),E=a(18),v=a.n(E);a(38);v.a.initializeApp({apiKey:"AIzaSyDQOt04CcDsNhQHAyZMFwjSLY1X2MuEQTg",authDomain:"voting-booth-4107f.firebaseapp.com",databaseURL:"https://voting-booth-4107f.firebaseio.com",projectId:"voting-booth-4107f",storageBucket:"voting-booth-4107f.appspot.com",messagingSenderId:"424744854902",appId:"1:424744854902:web:8119084df741436fab4657"});var y=v.a,b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){switch(t.target.id){case"name":e.setState({name:t.target.value});break;case"question":e.setState({question:t.target.value});break;case"optionA":e.setState({optionA:t.target.value});break;case"optionB":e.setState({optionB:t.target.value})}},e.isQuestion=function(e){var t=e.length-1;return"?"!==e.charAt(t)?e.concat("?"):e},e.handleSubmit=function(t){t.preventDefault();var a=y.database().ref(),n=e.state,l=e.isQuestion(n.question),o={name:n.name,question:l,optionA:n.optionA,optionB:n.optionB,optionACount:0,optionBCount:0},r=a.push(o).key;e.setState({key:r,display:"modal"}),e.handleReset()},e.handleReset=function(){e.setState({name:"",question:"",optionA:"",optionB:""})},e.state={key:"",name:"",question:"",optionA:"",optionB:"",display:"form"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.key;return l.a.createElement("main",{className:"createPollMain"},("form"===e.display||"modal"===e.display)&&l.a.createElement("section",{className:"createPoll"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h1",null,"Let's get right to it"),l.a.createElement("p",null,"Use the form below to make your poll! It 's not rocket science. Or is it ? Only one way to find out - make a poll!")),l.a.createElement("form",{action:"/",onSubmit:this.handleSubmit,onReset:this.handleReset,className:"createPollForm"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h2",null,"Create Your Poll"),l.a.createElement("label",{htmlFor:"name"},l.a.createElement("span",null,"Name"),"Tell us who you are!"),l.a.createElement("input",{type:"text",id:"name",value:e.name,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"question"},l.a.createElement("span",null,"Question"),"What do you wanna know?"),l.a.createElement("input",{type:"text",id:"question",value:e.question,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"optionA"},l.a.createElement("span",null,"Option A"),"What's the first choice?"),l.a.createElement("input",{type:"text",id:"optionA",value:e.optionA,onChange:this.handleChange,required:!0,maxLength:"25 characters"}),l.a.createElement("label",{htmlFor:"optionB"},l.a.createElement("span",null,"Option B"),"Put the second choice here!"),l.a.createElement("input",{type:"text",id:"optionB",value:e.optionB,onChange:this.handleChange,required:!0,maxLength:"25 characters"}),l.a.createElement("div",{className:"buttonContainer"},l.a.createElement("button",{type:"submit"},"I'm done!"),l.a.createElement("button",{type:"button",className:"resetButton",onClick:this.handleReset},"Reset"))))),"modal"===e.display&&l.a.createElement("div",{className:"pollModalWrapper"},l.a.createElement("div",{className:"pollModal"},l.a.createElement("h2",null,"Wow! You just made a poll!"),l.a.createElement("p",null,"We expected this, so we made a little chart of your poll's stat's just for you! We did this because we care."),l.a.createElement(p.b,{to:"/polls/".concat(t,"/analytics"),className:"button",tabIndex:"0"},"Poll up your stats!"))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={poll:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.pollKey;y.database().ref(t).on("value",(function(t){e.setState({poll:t.val()})}))}},{key:"render",value:function(){var e=this.props.match.params.pollKey,t=this.state.poll;return l.a.createElement("main",{className:"analytics"},l.a.createElement("div",{className:"pageContainer"},l.a.createElement("div",{className:"copyWrapper info"},l.a.createElement("h2",null,"Your Poll Analytics!"),l.a.createElement("p",null,"As poll creater, you can spy on the anonymous votes before anyone else. Whenever you are ready to make your research public, reveal the results with your friends and family with the click of a button!"),l.a.createElement(p.b,{className:"button",to:"/polls/".concat(e,"/view"),tabIndex:"0"},"See your poll!")),l.a.createElement("section",{className:"analyticsInfo"},l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("h2",null,t.name,"'s Poll Analytics"),l.a.createElement("p",{className:"pollQuestion"},t.question)),l.a.createElement("div",{className:"pollCounters"},l.a.createElement("div",{className:"count"},l.a.createElement("p",{className:"option"},"A votes"),l.a.createElement("p",{className:"countNum"},t.optionACount)),l.a.createElement("div",{className:"count"},l.a.createElement("p",{className:"option"},"B votes "),l.a.createElement("p",{className:"countNum"},t.optionBCount)),l.a.createElement("div",{className:"count"},l.a.createElement("p",{className:"option"},"Total"),l.a.createElement("p",{className:"countNum"},t.optionACount+t.optionBCount))),l.a.createElement("div",{className:"optionsWrapper"},l.a.createElement("p",null," Option A: ",t.optionA),l.a.createElement("p",null," Option B: ",t.optionB)),l.a.createElement("p",null,"Need ",l.a.createElement("span",null,"votes"),"? Share your poll with the link below!"),l.a.createElement("p",{className:"usersPollLink",tabIndex:"0"},"https://pollTogether.github.io/poll-it/polls/".concat(e,"/view")),l.a.createElement("p",null,"Ready to share your ",l.a.createElement("span",null,"results"),"? Send this link."),l.a.createElement("p",{className:"usersPollLink",tabIndex:"0"},"https://pollTogether.github.io/poll-it/polls/".concat(e,"/results")))))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={poll:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.pollKey;y.database().ref(t).on("value",(function(t){e.setState({poll:t.val()})}))}},{key:"render",value:function(){var e=this.state.poll;return l.a.createElement("main",{className:"pageContainer analytics"},l.a.createElement("h2",null,e.name,"'s Poll Results are In!!"),l.a.createElement("section",{className:"analyticsInfo"},l.a.createElement("h2",null,e.name,"'s poll Results"),l.a.createElement("div",{className:"copyWrapper"},l.a.createElement("p",{className:"pollQuestion"},e.question),l.a.createElement("p",null," Option A: ",e.optionA),l.a.createElement("p",null," Option B: ",e.optionB)),l.a.createElement("div",{className:"pollCounters"},l.a.createElement("div",{className:"count countA"},l.a.createElement("p",{className:"option"},"A votes"),l.a.createElement("p",{className:"countNum"},e.optionACount)),l.a.createElement("div",{className:"count countB"},l.a.createElement("p",{className:"option"},"B votes "),l.a.createElement("p",{className:"countNum"},e.optionBCount)),l.a.createElement("div",{className:"count countTotal"},l.a.createElement("p",{className:"option"},"Total"),l.a.createElement("p",{className:"countNum"},e.optionACount+e.optionBCount)))))}}]),a}(n.Component),g=a(1),w=a(27),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userSelection:t.target.id})},e.handleSelected=function(){},e.sendCount=function(t){var a=e.props.match.params.pollKey,n=y.database().ref("".concat(a,"/").concat(t));n.once("value",(function(e){var t=e.val();t++,n.set(t)}))},e.updateStorage=function(e){var t=window.localStorage.getItem("answeredPolls"),a=[];t&&a.push.apply(a,Object(w.a)(t.split(","))),a.push(e),window.localStorage.setItem("answeredPolls",a.join(","))},e.checkIsAnswered=function(e){var t=window.localStorage.getItem("answeredPolls");return!!t&&t.split(",").some((function(t){return t===e}))},e.handleSubmit=function(t){var a=e.props.match.params.pollKey,n=e.state;t.preventDefault();var l=n.optionOneCount,o=n.optionTwoCount;e.checkIsAnswered(a)?e.setState({isPollStored:!0}):(e.updateStorage(a),e.setState({isPollAnswered:!0}),"optionA"===n.userSelection?(l++,e.setState({optionOneCount:l}),e.sendCount("optionACount")):"optionB"===n.userSelection&&(o++,e.setState({optionTwoCount:o++}),e.sendCount("optionBCount")))},e.state={poll:{},userSelection:"",optionACount:0,optionBCount:0,isPollAnswered:!1,isPollStored:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.pollKey;y.database().ref(t).on("value",(function(t){e.setState({poll:t.val()})}))}},{key:"render",value:function(){var e=this.state.poll;return l.a.createElement("main",{className:"viewPoll"},l.a.createElement("section",{className:!1===this.state.isPollAnswered?"show":"hide"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"viewPollForm"},l.a.createElement("h2",null,e.name,"'s poll"),l.a.createElement("h3",null,e.question),l.a.createElement("div",{className:"optionWrapper",ariarole:"radio-group"},l.a.createElement("label",{htmlFor:"optionA",onClick:this.handleSelect,className:"optionA"===this.state.userSelection?"selected":void 0},e.optionA,l.a.createElement("input",{type:"radio",name:"options",id:"optionA",onChange:this.handleChange,value:e.optionA,required:!0})),l.a.createElement("label",{htmlFor:"optionB",className:"optionB"===this.state.userSelection?"selected":void 0},e.optionB,l.a.createElement("input",{type:"radio",name:"options",id:"optionB",onChange:this.handleChange,value:e.optionB,required:!0}))),l.a.createElement("button",{type:"submit"},"Answer"))),l.a.createElement("div",{className:!0===this.state.isPollAnswered?"show":"hide"},l.a.createElement("p",{className:"userMessage"},"Thank you for your submission!",l.a.createElement("span",{role:"img","aria-labelledby":"sunglasses emoji"},"\ud83d\ude0e"))),l.a.createElement("div",{className:!0===this.state.isPollStored?"show":"hide"},l.a.createElement("p",{className:"userMessage"},"Nice try. You can only vote once per poll",l.a.createElement("span",{role:"img","aria-labelledby":"wink emoji"},"\ud83d\ude09"))))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:"/poll-it"},l.a.createElement(n.Fragment,null,l.a.createElement(u,null),l.a.createElement(g.a,{exact:!0,path:"/",component:d}),l.a.createElement(g.a,{exact:!0,path:"/createpoll",component:b}),l.a.createElement(g.a,{path:"/polls/:pollKey/analytics",component:f}),l.a.createElement(g.a,{path:"/polls/:pollKey/view",component:C}),l.a.createElement(g.a,{path:"/polls/:pollKey/results",component:N}),l.a.createElement(h,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.db85da0e.chunk.js.map