(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),i=n(2),s=n(3),o=n(5),r=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),j=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={date:(new Date).toLocaleTimeString(),timerId:setInterval((function(){}),0)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.timerId=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){var t=this.state.date;return Object(b.jsxs)("p",{className:"app__timer",children:["Current time:"," ",t]})}}]),n}(u.a.Component),p=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h1",{className:"app__title",children:"React clock"}),e&&Object(b.jsx)(j,{}),Object(b.jsxs)("div",{className:"app__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show clock"}),Object(b.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide clock"})]})]})}}]),n}(u.a.Component),h=p;a.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.92b42403.chunk.js.map