import{s as w,a5 as R,f,y as m,z as G,D as x}from"./index-BPRWoLf4.js";var _={left:"start",right:"end",center:"center",auto:"stretch"},C={top:"start",bottom:"end",middle:"center",auto:"stretch"},b=function(o){w(e,o);function e(t){return o.call(this,t)||this}return e.prototype.renderChild=function(t,a){var i=this.props,n=i.render,s=i.disabled;return n(t,a,{disabled:s})},e.prototype.renderGrid=function(t,a,i){var n=this.props,s=n.itemRender,l=n.data;if(!R(t,l))return null;var d={gridColumnStart:t.x,gridColumnEnd:t.x+t.w,gridRowStart:t.y,gridRowEnd:t.y+t.h,justifySelf:t.align?_[t.align]:"stretch",alignSelf:t.valign?C[t.valign]:"stretch"};return f.createElement("div",{key:a,style:d,className:t.gridClassName},s?s(t,a,i,this.props):this.renderChild("grid2d/".concat(a),t))},e.prototype.renderGrids=function(){var t=this,a=this.props.grids;return a.map(function(i,n){return t.renderGrid(i,n,a.length)})},e.prototype.render=function(){var t=this.props,a=t.grids,i=t.cols,n=t.gap,s=t.gapRow,l=t.width,d=t.rowHeight,y=t.style,v=t.id,h=new Array(i);h.fill("1fr");var p=0;a.forEach(function(r,S){var c=r.y+r.h-1;c>p&&(p=c)});var u=new Array(p);u.fill(d),a.forEach(function(r){r.width&&(h[r.x-1]=Number.isInteger(r.width)?r.width+"px":r.width),r.height&&(u[r.y-1]=Number.isInteger(r.height)?r.height+"px":r.height)});var g=m(m({},y),{display:"grid",columnGap:n,rowGap:typeof s>"u"?n:s,width:l,gridTemplateColumns:h.join(" "),gridTemplateRows:u.join(" ")});return f.createElement("div",{style:g,"data-id":v},this.renderGrids())},e.propsList=["grids"],e.defaultProps={cols:12,width:"auto",gap:0,rowHeight:"3.125rem"},e}(f.Component),D=function(o){w(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e=G([x({type:"grid-2d"})],e),e}(b);export{D as Grid2DRenderer,b as default};