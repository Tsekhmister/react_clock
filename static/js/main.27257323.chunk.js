(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n.n(c),i=n(2),o=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=(n(14),n(9)),j=n(0),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toLocaleTimeString(),timerId:Object(b.setTimeout)((function(){}),0)},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({timerId:setInterval((function(){var e=new Date;console.log(e.toLocaleTimeString()),t.setState({time:(new Date).toLocaleTimeString()})}),1e3)})}},{key:"componentWillUnmount",value:function(){this.state.timerId&&clearInterval(this.state.timerId)}},{key:"render",value:function(){var t=this.state.time;return Object(j.jsxs)("p",{className:"app__timer",children:["Current time:"," ",t]})}}]),n}(u.a.Component),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{className:"app__title",children:"React clock"}),e&&Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"app__buttons",children:[Object(j.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show clock"}),Object(j.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide clock"})]})]})}}]),n}(u.a.Component),p=m;a.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.27257323.chunk.js.map