(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{19:function(t,e,n){},23:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var s=n(2),o=n.n(s),c=n(13),a=n.n(c),r=(n(19),n(3)),i=n(8),d=(n(23),n(14)),l=n(12),u=n(4),j=n(5),h=n(7),b=n(6),O=n(11),f=(n(26),n(0)),p=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={Id:+t.props.todos[t.props.todos.length-1].Id+1,Title:"",Status:"Current status"},t.handleTitleChange=function(e){t.setState({Title:e.target.value})},t.handleStatusChange=function(e){t.setState({Status:e.target.value})},t.handleToDoSubmit=function(e){e.preventDefault(),t.props.onAdd({Id:t.state.Id,Title:t.state.Title,Status:t.state.Status}),t.setState({Id:t.state.Id+1,Title:"",Status:"Current status"})},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Add ToDo"}),Object(f.jsxs)("form",{onSubmit:this.handleToDoSubmit,children:[Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{value:"ID: "+this.state.Id,className:"form-control",readonly:"readonly"})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{value:this.state.Title,onChange:this.handleTitleChange,className:"form-control",placeholder:"Enter Title"})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("select",{value:this.state.Status,onChange:this.handleStatusChange,className:"form-control",children:[Object(f.jsx)("option",{value:"Current status",disabled:!0,selected:!0,children:"Current status"}),Object(f.jsx)("option",{value:"Done",children:"Done"}),Object(f.jsx)("option",{value:"Pending",children:"Pending"})]})}),Object(f.jsx)("button",{type:"submit",className:"form-control btn btn-primary",children:"Add Todo"})]})]})}}]),n}(s.Component),x=(n(28),function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{Id:"1",Title:"Push your code to github",Status:"Done"},{Id:"2",Title:"Email to your manager",Status:"Pending"}]},t.deleteToDo=function(e){var n=t.state.todos.filter((function(t){return t.Id!==e.Id}));t.setState({todos:n})},t.editToDo=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.Id===e.Id?Object(l.a)(Object(l.a)({},t),{},{Status:"Done"===t.Status?"Pending":"Done"}):t}))}}))},t.addToDo=function(e){t.setState({todos:[].concat(Object(d.a)(t.state.todos),[e])})},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(p,{onAdd:this.addToDo,todos:this.state.todos}),Object(f.jsx)("h1",{children:"TodoList "}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Id"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Status"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:this.state.todos.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.Id}),Object(f.jsx)("td",{children:e.Title}),Object(f.jsx)("td",{style:{color:"Done"===e.Status?"green":"red"},children:e.Status}),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{className:"btn del",onClick:function(){return t.deleteToDo(e)},children:Object(f.jsx)("span",{children:Object(f.jsx)(O.a,{icon:"trash"})})}),Object(f.jsx)("button",{className:"btn edit",onClick:function(){return t.editToDo(e)},children:Object(f.jsx)("span",{children:Object(f.jsx)(O.a,{icon:"edit"})})})]})]},e.Id)}))})]})]})}}]),n}(s.Component));r.b.add(i.c,i.a,i.b);var m=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(x,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,s=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),s(t),o(t),c(t),a(t)}))};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.8c090737.chunk.js.map