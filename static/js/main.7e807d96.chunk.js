(this["webpackJsonptrivia-react"]=this["webpackJsonptrivia-react"]||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(9),i=a.n(c),o=function(){var e=(new Date).getFullYear();return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",null,"\xa9 ",e," Oscar Villalta"))},r=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Weird Trivia Fun"))},l=a(4),u=a(23),h=function(e){var t=e.answers,a=e.handleClick,s=Object(l.shuffle)(t);return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{onClick:a},s[0].choice),n.a.createElement(u.a,{onClick:a},s[1].choice),n.a.createElement(u.a,{onClick:a},s[2].choice),n.a.createElement(u.a,{onClick:a},s[3].choice))},m=a(22),d=function(e){var t=e.question;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("h2",null,t)))},f=a(11),k=a(12),w=[{question:"If a person holds 3 widgets, How many tires can fit in a locker?",answers:[{choice:"Banana",status:!0},{choice:"Dirt",status:!1},{choice:"Umbrella",status:!1},{choice:"Square root of a triangle",status:!1}],link:"somelink.com"},{question:"If a plane is going 300mph, does Puppy like gyros?",answers:[{choice:"James Cameron",status:!0},{choice:"Martian",status:!1},{choice:"Guitar",status:!1},{choice:"Javascript",status:!1}],link:"somelink.com"},{question:"10 times 6 is...",answers:[{choice:"Car",status:!0},{choice:"George Washington",status:!1},{choice:"Perpetual Motion",status:!1},{choice:"Tower of Hanoi",status:!1}],link:"somelink.com"},{question:"The seven dwarfs are part of which highway",answers:[{choice:"Hans Christian Anderson",status:!0},{choice:"Hamster",status:!1},{choice:"17 USD",status:!1},{choice:"Aorta",status:!1}],link:"somelink.com"},{question:"Dallas, Massachussets is adjacent to the cellular membrane on which sandwich?",answers:[{choice:"Salacious Crumb",status:!0},{choice:"Pneumonoultramicroscopicsilicovolcanoconiosis",status:!1},{choice:"6 of Diamonds",status:!1},{choice:"Twelveteen",status:!1}],link:"somelink.com"},{question:"Udo has a grain of salt. There are many wolves in a hectare.  Is rose the color of a prodigy?",answers:[{choice:"Truffles",status:!0},{choice:"Axe Body Spray",status:!1},{choice:"C",status:!1},{choice:"Vincent Van Gogh",status:!1}],link:"somelink.com"},{question:"Actor, inanimate carbon rod, stars in which Sci-Fi potato?",answers:[{choice:"Yardstick",status:!0},{choice:"Blue",status:!1},{choice:"February 14th 2008",status:!1},{choice:"Chicago Bulls",status:!1}],link:"somelink.com"},{question:"A crystalline solution of ketchup is also known as...",answers:[{choice:"External Occipital Protubrance",status:!0},{choice:"Edgar Allen Poe",status:!1},{choice:"Horse",status:!1},{choice:"Ceiling Fan",status:!1}],link:"somelink.com"},{question:"Where is the tallest amoeba in a walnut located.",answers:[{choice:"Roast Beef Sandwich",status:!0},{choice:"Labor Pains",status:!1},{choice:"Jaundice",status:!1},{choice:"A-10 Thunderbolt",status:!1}],link:"somelink.com"},{question:"During the War of 485, cosmonauts invented which Tetris Game?",answers:[{choice:"Astral Projection",status:!0},{choice:"Lightning and Thunder",status:!1},{choice:"NORAD",status:!1},{choice:"Isildur",status:!1}],link:"somelink.com"},{question:"Human Centipedes are most commonly used for this type of degenerative tissue behavior.",answers:[{choice:"10,000 Maniacs",status:!0},{choice:"Speed of Sound",status:!1},{choice:"Array of Objects",status:!1},{choice:"a battery",status:!1}],link:"somelink.com"},{question:"Peanut butter and waffled french fries, sometimes, are referred to this type of oil change",answers:[{choice:"The Quickening",status:!0},{choice:"UMDNJ",status:!1},{choice:"United Airlines",status:!1},{choice:"Grover Cleveland",status:!1}],link:"somelink.com"}],g=new(function(){function e(){Object(f.a)(this,e)}return Object(k.a)(e,[{key:"get",value:function(){return w}}]),e}()),E=a(6),p=function(){var e=g.get(),t=function(e){var t=Object(s.useState)(!1),a=Object(E.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(0),o=Object(E.a)(i,2),r=o[0],l=o[1];return{gameIsOn:n,questionNumber:r,startGame:function(){return c(!0)},handleClick:function(){r>=e.length-1?c(!1):l(r+1)}}}(e),a=t.questionNumber,c=t.handleClick,i=t.gameIsOn,o=t.startGame,r=Object(l.shuffle)(e)[a];return i?n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{question:r.question,answers:r.answers,handleClick:c})):n.a.createElement("div",{className:"start-menu"},n.a.createElement(u.a,{onClick:o},"Start Game"))},v=function(e){var t=e.question,a=e.answers,s=e.handleClick;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"question-wrapper"},n.a.createElement(d,{question:t})),n.a.createElement("div",{className:"answer-wrapper"},n.a.createElement(h,{answers:a,handleClick:s})))},b=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(r,null),n.a.createElement("div",{className:"main"},n.a.createElement(p,null)),n.a.createElement(o,null))};a(20);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7e807d96.chunk.js.map