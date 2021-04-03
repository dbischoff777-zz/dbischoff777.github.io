(this.webpackJsonplogistic_pathfinder=this.webpackJsonplogistic_pathfinder||[]).push([[0],{10:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(11),s=n.n(r),o=(n(16),n(10),n.p,n(17),n(9)),c=n(2),l=n(3),u=n(4),d=n(6),h=n(5),f=(n(18),n(0)),j=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,a=t.isStart,i=t.isWall,r=t.onMouseDown,s=t.onMouseEnter,o=t.onMouseUp,c=t.row,l=n?"node-finish":a?"node-start":i?"node-wall":"";return Object(f.jsx)("div",{id:"node-".concat(c,"-").concat(e),className:"node ".concat(l),onMouseDown:function(){return r(c,e)},onMouseEnter:function(){return s(c,e)},onMouseUp:function(){return o()}})}}]),n}(a.Component),v=n(7);function b(t,e,n){var a=[];e.distance=0;for(var i=function(t){var e,n=[],a=Object(v.a)(t);try{for(a.s();!(e=a.n()).done;){var i,r=e.value,s=Object(v.a)(r);try{for(s.s();!(i=s.n()).done;){var o=i.value;n.push(o)}}catch(c){s.e(c)}finally{s.f()}}}catch(c){a.e(c)}finally{a.f()}return n}(t);i.length;){p(i);var r=i.shift();if(!r.isWall){if(r.distance===1/0)return a;if(r.isVisited=!0,a.push(r),r===n)return a;g(r,t)}}}function p(t){t.sort((function(t,e){return t.distance-e.distance}))}function g(t,e){var n,a=function(t,e){var n=[],a=t.col,i=t.row;i>0&&n.push(e[i-1][a]);i<e.length-1&&n.push(e[i+1][a]);a>0&&n.push(e[i][a-1]);a<e[0].length-1&&n.push(e[i][a+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),i=Object(v.a)(a);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.distance=t.distance+1,r.previousNode=t}}catch(s){i.e(s)}finally{i.f()}}var m=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).render=function(){var e=t.state,n=e.grid,a=e.mouseIsPressed;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(f.jsxs)("div",{class:"container-fluid",children:[Object(f.jsx)("a",{class:"navbar-brand",href:"#",children:"Logistical Pathfinder"}),Object(f.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{class:"navbar-toggler-icon"})}),Object(f.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(f.jsxs)("ul",{class:"navbar-nav",children:[Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("a",{class:"nav-link text-white",href:"index.html",children:"Reset"})}),Object(f.jsxs)("li",{class:"nav-item dropdown",children:[Object(f.jsx)("a",{class:"nav-link dropdown-toggle text-white",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-expanded":"false",href:"#",children:"Algorithms"}),Object(f.jsxs)("ul",{class:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdownMenuLink",children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{class:"dropdown-item text-white",href:"#",onClick:function(e){return t.changeValue("Start "+e.target.textContent+" Pathfinding")},children:"A Star Search"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{class:"dropdown-item text-white",href:"#",onClick:function(e){return t.changeValue("Start "+e.target.textContent+" Pathfinding")},children:"Breadth-first Search"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{class:"dropdown-item text-white",href:"#",onClick:function(e){return t.changeValue("Start "+e.target.textContent+" Pathfinding")},children:"Dijkstra"})})]})]}),Object(f.jsx)("li",{class:"nav-item",children:Object(f.jsx)("form",{class:"container-fluid justify-content-center",children:Object(f.jsx)("button",{class:"btn btn-outline-light me-2",type:"button",onClick:t.clickFunction,children:t.state.value})})})]})})]})}),Object(f.jsxs)("form",{class:"box",method:"post",children:[Object(f.jsx)("h1",{children:"Racklayout"}),Object(f.jsx)("input",{type:"number",min:"10",max:"50",name:"aisles",placeholder:"Enter number of Aisles"}),Object(f.jsx)("input",{type:"number",min:"10",max:"74",name:"xPositions",placeholder:"Enter number of X-Positions"}),Object(f.jsx)("input",{type:"submit",value:"Generate Racking"})]}),Object(f.jsx)("div",{className:"grid",children:n.map((function(e,n){return Object(f.jsx)("div",{children:e.map((function(e,n){var i=e.row,r=e.col,s=e.isFinish,o=e.isStart,c=e.isWall;return Object(f.jsx)(j,{col:r,isFinish:s,isStart:o,isWall:c,mouseIsPressed:a,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()},row:i},n)}))},n)}))})]})},t.state={grid:[],mouseIsPressed:!1,value:"Select Algorithm first"},t.clickFunction=t.clickFunction.bind(Object(u.a)(t)),t}return Object(l.a)(n,[{key:"changeValue",value:function(t){this.setState({value:t})}},{key:"clickFunction",value:function(){"Start Dijkstra Pathfinding"===this.state.value&&this.visualizeDijkstra()}},{key:"componentDidMount",value:function(){var t=x();this.setState({grid:t})}},{key:"handleMouseDown",value:function(t,e){var n=k(this.state.grid,t,e);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(t,e){if(this.state.mouseIsPressed){var n=k(this.state.grid,t,e);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(t,e){for(var n=this,a=function(a){if(a===t.length)return setTimeout((function(){n.animateShortestPath(e)}),9*a),{v:void 0};setTimeout((function(){var e=t[a];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),9*a)},i=0;i<=t.length;i++){var r=a(i);if("object"===typeof r)return r.v}}},{key:"animateShortestPath",value:function(t){for(var e=function(e){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),24*e)},n=0;n<t.length;n++)e(n)}},{key:"visualizeDijkstra",value:function(){var t=this.state.grid,e=t[20][20],n=t[1][24],a=b(t,e,n),i=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}(n);this.animateDijkstra(a,i)}}]),n}(a.Component),x=function(){for(var t=[],e=0;e<34;e++){for(var n=[],a=0;a<50;a++)n.push(O(a,e));t.push(n)}return t},O=function(t,e){return{col:t,row:e,isStart:20===e&&20===t,isFinish:1===e&&24===t,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},k=function(t,e,n){var a=t.slice(),i=a[e][n],r=Object(o.a)(Object(o.a)({},i),{},{isWall:!i.isWall});return a[e][n]=r,a};var w=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(m,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),r(t),s(t)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.da7d2de0.chunk.js.map