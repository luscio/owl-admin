import{s as P,E as C,G as E,f as y,ag as V,cZ as x,c_ as U,z as b,P as A,Q as p,aZ as N,bm as R,y as T,X as L,a3 as k,aB as D,ah as H}from"./index-BPRWoLf4.js";var B=function(m){P(o,m);function o(t){return m.call(this,t)||this}return o.prototype.componentWillUnmount=function(){this.unHook&&this.unHook()},o.prototype.onSearch=function(t,e,n){return C(this,void 0,void 0,function(){var a,l,s,i,d,c,u,r,f,h;return E(this,function(v){switch(v.label){case 0:if(a=this.props,l=a.searchApi,s=a.setLoading,i=a.env,l=(n==null?void 0:n.searchApi)||l,d=(n==null?void 0:n.searchTerm)||this.props.searchTerm||"term",c=(n==null?void 0:n.searchParam)||this.props.searchParam||{},u=T((h={},h[d]=t,h),c),!L(l,u))return[2,Promise.resolve([])];s(!0),v.label=1;case 1:return v.trys.push([1,,3,4]),[4,i.fetcher(l,u,{cancelExecutor:e,autoAppend:!0})];case 2:return r=v.sent(),f=r.data&&r.data.options||r.data||[],[2,f];case 3:return s(!1),[7];case 4:return[2]}})})},o.prototype.deferLoad=function(t,e,n){return C(this,void 0,void 0,function(){var a,l,s,i,d,c,u;return E(this,function(r){switch(r.label){case 0:if(a=this.props,l=a.env,s=a.deferApi,i=a.setLoading,a.formInited,a.addHook,s=(n==null?void 0:n.deferApi)||s,!l||!l.fetcher)throw new Error("fetcher is required");if(d=k(t,{}),!L(s,d))return[2,Promise.resolve([])];r.label=1;case 1:return r.trys.push([1,,3,4]),[4,l.fetcher(s,d)];case 2:return c=r.sent(),u=c.data&&c.data.options||c.data||[],e&&u.forEach(function(f){f.isRef=!0}),[2,u];case 3:return i(!1),[7];case 4:return[2]}})})},o.prototype.changeValue=function(t){return C(this,void 0,void 0,function(){var e,n,a,l,s,i,d,c,u,r,f,h;return E(this,function(v){switch(v.label){case 0:return e=this.props,n=e.joinValues,a=e.extractValue,l=e.delimiter,s=e.multiple,i=e.valueField,d=e.onChange,c=e.options,e.setOptions,e.data,u=e.dispatchEvent,r=t,f=[],(Array.isArray(t)?t:t?[t]:[]).forEach(function(g){var S=D(c,function(F){return F[i||"value"]==g[i||"value"]});S||f.push(g)}),n?s?r=Array.isArray(t)?t.map(function(g){return g[i||"value"]}).join(l):t?t[i||"value"]:"":r=r?r[i||"value"]:"":a&&(s?r=Array.isArray(t)?t.map(function(g){return g[i||"value"]}):t?[t[i||"value"]]:[]:r=r?r[i||"value"]:""),[4,u("change",H(this.props,{value:r,options:c,items:c}))];case 1:return h=v.sent(),h!=null&&h.prevented?[2]:(d(r),[2])}})})},o.prototype.renderStatic=function(){var t=this.props,e=t.selectedOptions,n=t.labelField,a=n===void 0?"label":n,l=t.classnames;return a==="avatar"?e.map(function(s,i){return y.createElement("img",{key:i,className:l("UserSelect-avatar-img"),src:s[a],alt:""})}):e.map(function(s){return s[a]}).join(",")},o.prototype.render=function(){var t=this,e=this.props,n=e.showNav,a=e.navTitle,l=e.searchable,s=e.options,i=e.className;e.style;var d=e.selectedOptions,c=e.tabOptions,u=e.multi,r=e.multiple,f=e.isDep,h=e.isRef,v=e.placeholder,g=e.searchPlaceholder,S=e.tabMode,F=e.data,_=e.displayFields,w=e.labelField,j=e.loadingConfig;return c==null||c.forEach(function(O){O.deferLoad=t.deferLoad,O.onChange=t.changeValue,O.onSearch=t.onSearch}),y.createElement("div",{className:V("UserSelectControl",i)},S?y.createElement(x,{selection:d,tabOptions:c,multiple:r,displayFields:_,onChange:this.changeValue,onSearch:this.onSearch,deferLoad:this.deferLoad,data:F}):y.createElement(U,{loadingConfig:j,showNav:n,navTitle:a,selection:d,options:s,multi:u,multiple:r,searchable:l,placeholder:v,searchPlaceholder:g,deferLoad:this.deferLoad,onChange:this.changeValue,onSearch:this.onSearch,displayFields:_,labelField:w,isDep:f,isRef:h}))},o.defaultProps={showNav:!0},b([A,p("design:type",Function),p("design:paramtypes",[String,Function,Object]),p("design:returntype",Promise)],o.prototype,"onSearch",null),b([A,p("design:type",Function),p("design:paramtypes",[Object,Boolean,Object]),p("design:returntype",Promise)],o.prototype,"deferLoad",null),b([A,p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",Promise)],o.prototype,"changeValue",null),b([N(),p("design:type",Function),p("design:paramtypes",[]),p("design:returntype",void 0)],o.prototype,"render",null),o}(y.Component),Z=function(m){P(o,m);function o(){return m!==null&&m.apply(this,arguments)||this}return o=b([R({type:"users-select"})],o),o}(B);export{Z as UserSelectControlRenderer,B as default};