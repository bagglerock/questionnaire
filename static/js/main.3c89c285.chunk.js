(this["webpackJsonptrivia-react"]=this["webpackJsonptrivia-react"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),i=n.n(s),c=function(){var e=(new Date).getFullYear();return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",null,"\xa9 ",e," Oscar Villalta"))},u=function(e){var t=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,t))},o=n(60),l=function(e){var t=e.answers,n=e.handleClick;return e.disableAnswers?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(o.a,{key:e,onClick:function(e){return n(e)}},e)})))},m=n(59),f=function(e){var t=e.question;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("h2",null,t)))},h=n(1),v=n.n(h),p=n(4),w=n(10),d=n(9),b=n(5),g=n(8),E=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(b.a)(this,e),this.question="",this.answers=[],this.correctAnswer="",Object.assign(this,t)},O=n(25),j=n(26),k=n.n(j),q=new(function(){function e(){Object(b.a)(this,e),this.httpClient=void 0,this.httpClient=k.a.create({baseURL:"https://opentdb.com"})}return Object(g.a)(e,[{key:"get",value:function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.httpClient.get(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),y=new(function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,[{key:"get",value:function(){var e=Object(p.a)(v.a.mark((function e(){var t,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api.php?amount=10");case 2:return t=e.sent,n=t.data.results,a=C(n),e.abrupt("return",Object(d.shuffle)(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),C=function(e){var t=O.AllHtmlEntities.decode;return e.map((function(e){var n=Object(d.concat)(e.incorrect_answers,e.correct_answer).map((function(e){return t(e)}));if("True"!==n[0]){var a=Object(d.shuffle)(n)||[];return new E({question:t(e.question),correctAnswer:t(e.correct_answer),answers:a})}return new E({question:t(e.question),correctAnswer:t(e.correct_answer),answers:n})}))},Q=function(){function e(){Object(b.a)(this,e),this.questions=void 0,this.questionPosition=void 0,this.questions=[new E],this.questionPosition=0}return Object(g.a)(e,[{key:"initialize",value:function(){var e=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.questionPosition=0,e.next=3,this.fetchQuestions();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"advanceQuestion",value:function(){this.questionPosition++}},{key:"getQuestion",value:function(){return this.questions[this.questionPosition]}},{key:"getQuestionsCount",value:function(){return this.questions.length}},{key:"getQuestionsPosition",value:function(){return this.questionPosition}},{key:"fetchQuestions",value:function(){var e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get();case 2:t=e.sent,this.questions=t;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();Q.instance=void 0;var x=function(){var e=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(w.a)(s,2),c=i[0],u=i[1],o=Object(a.useState)(10),l=Object(w.a)(o,2),m=l[0],f=l[1],h=Object(a.useState)(!1),b=Object(w.a)(h,2),g=b[0],E=b[1],O=Object(a.useState)(0),j=Object(w.a)(O,2),k=j[0],q=j[1],y=Q.getInstance(),C=Object(a.useCallback)((function(){y.getQuestionsPosition()!==y.getQuestionsCount()-1?(y.advanceQuestion(),E(!1),f(10)):r(!1)}),[y]);return Object(a.useEffect)((function(){var e;return n&&(e=setInterval((function(){f((function(e){return null!=e?e-1:null}))}),1e3),0===m&&(clearInterval(e),f(null),function(){var e=y.getQuestion().correctAnswer;u("The answer is: "+e),E(!0),setTimeout((function(){C(),u("")}),5e3)}())),function(){return clearInterval(e)}}),[m,n,y,C]),{gameIsOn:n,init:function(){var e=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.initialize();case 3:r(!0),q(0),f(10),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u("Problem resetting game.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),handleClick:function(e){var t=e.currentTarget.textContent,n=y.getQuestion();t===Object(d.find)(n.answers,(function(e){return e===n.correctAnswer}))?(q(k+(m||0)),C(),u("")):u("that is incorrect")},message:c,question:y.getQuestion(),advanceQuestion:C,countdown:m,disableAnswers:g,score:k}}(),t=e.handleClick,n=e.gameIsOn,s=e.init,i=e.question,c=e.message,u=e.countdown,m=e.disableAnswers,h=e.score;return n?r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"question-wrapper"},r.a.createElement(f,{question:i.question})),r.a.createElement("div",{className:"message-wrapper"},r.a.createElement(N,{countdown:u})),r.a.createElement("div",{className:"message-wrapper"},r.a.createElement(A,{message:c})),r.a.createElement("div",{className:"answer-wrapper"},r.a.createElement(l,{answers:i.answers,handleClick:t,disableAnswers:m}))):r.a.createElement("div",{className:"game start-page"},r.a.createElement(o.a,{onClick:s},"Start Game"),r.a.createElement("h2",{className:"mt-5"},"Your last score was: ",h))},A=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t))},N=function(e){var t=e.countdown;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("h3",null,t):"")},P=function(){return r.a.createElement(x,null)},I=n(13);I.a.initialize("UA-193836134-1"),I.a.pageview(window.location.pathname+window.location.search);var F=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(u,{title:"Trivia-1"}),r.a.createElement("div",{className:"main"},r.a.createElement(P,null)),r.a.createElement(c,null))};n(57);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3c89c285.chunk.js.map