import{f as p,s as U,ao as J,v as ee,w as te,d9 as re,ch as oe,ai as ne,ag as se,T as ie,z as le,D as ae,Q as ce,K as ue}from"./index-BPRWoLf4.js";var he=Object.defineProperty,I=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,z=(h,n,l)=>n in h?he(h,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):h[n]=l,S=(h,n)=>{for(var l in n||(n={}))D.call(n,l)&&z(h,l,n[l]);if(I)for(var l of I(n))Q.call(n,l)&&z(h,l,n[l]);return h},b=(h,n)=>{var l={};for(var i in h)D.call(h,i)&&n.indexOf(i)<0&&(l[i]=h[i]);if(h!=null&&I)for(var i of I(h))n.indexOf(i)<0&&Q.call(h,i)&&(l[i]=h[i]);return l};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var A;(h=>{const n=class{constructor(e,t,r,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let s=[];for(let a=0;a<this.size;a++)s.push(!1);for(let a=0;a<this.size;a++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(r);if(this.drawCodewords(c),o==-1){let a=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const f=this.getPenaltyScore();f<a&&(o=g,a=f),this.applyMask(g)}}u(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(e,t){const r=h.QrSegment.makeSegments(e);return n.encodeSegments(r,t)}static encodeBinary(e,t){const r=h.QrSegment.makeBytes(e);return n.encodeSegments([r],t)}static encodeSegments(e,t,r=1,o=40,s=-1,c=!0){if(!(n.MIN_VERSION<=r&&r<=o&&o<=n.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let a,g;for(a=r;;a++){const E=n.getNumDataCodewords(a,t)*8,w=C.getTotalBits(e,a);if(w<=E){g=w;break}if(a>=o)throw new RangeError("Data too long")}for(const E of[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH])c&&g<=n.getNumDataCodewords(a,E)*8&&(t=E);let f=[];for(const E of e){i(E.mode.modeBits,4,f),i(E.numChars,E.mode.numCharCountBits(a),f);for(const w of E.getData())f.push(w)}u(f.length==g);const R=n.getNumDataCodewords(a,t)*8;u(f.length<=R),i(0,Math.min(4,R-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let E=236;f.length<R;E^=253)i(E,8,f);let M=[];for(;M.length*8<f.length;)M.push(0);return f.forEach((E,w)=>M[w>>>3]|=E<<7-(w&7)),new n(a,t,M,s)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let o=0;o<t;o++)r==0&&o==0||r==0&&o==t-1||r==t-1&&o==0||this.drawAlignmentPattern(e[r],e[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let s=0;s<10;s++)r=r<<1^(r>>>9)*1335;const o=(t<<10|r)^21522;u(o>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,m(o,s));this.setFunctionModule(8,7,m(o,6)),this.setFunctionModule(8,8,m(o,7)),this.setFunctionModule(7,8,m(o,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,m(o,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,m(o,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,m(o,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;u(t>>>18==0);for(let r=0;r<18;r++){const o=m(t,r),s=this.size-11+r%3,c=Math.floor(r/3);this.setFunctionModule(s,c,o),this.setFunctionModule(c,s,o)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){const s=Math.max(Math.abs(o),Math.abs(r)),c=e+o,a=t+r;0<=c&&c<this.size&&0<=a&&a<this.size&&this.setFunctionModule(c,a,s!=2&&s!=4)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,Math.max(Math.abs(o),Math.abs(r))!=1)}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");const o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],s=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],c=Math.floor(n.getNumRawDataModules(t)/8),a=o-c%o,g=Math.floor(c/o);let f=[];const R=n.reedSolomonComputeDivisor(s);for(let E=0,w=0;E<o;E++){let v=e.slice(w,w+g-s+(E<a?0:1));w+=v.length;const P=n.reedSolomonComputeRemainder(v,R);E<a&&v.push(0),f.push(v.concat(P))}let M=[];for(let E=0;E<f[0].length;E++)f.forEach((w,v)=>{(E!=g-s||v>=a)&&M.push(w[E])});return u(M.length==c),M}drawCodewords(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let o=0;o<this.size;o++)for(let s=0;s<2;s++){const c=r-s,g=(r+1&2)==0?this.size-1-o:o;!this.isFunction[g][c]&&t<e.length*8&&(this.modules[g][c]=m(e[t>>>3],7-(t&7)),t++)}}u(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let o;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let s=0;s<this.size;s++){let c=!1,a=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[s][f]==c?(a++,a==5?e+=n.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,g),c||(e+=this.finderPenaltyCountPatterns(g)*n.PENALTY_N3),c=this.modules[s][f],a=1);e+=this.finderPenaltyTerminateAndCount(c,a,g)*n.PENALTY_N3}for(let s=0;s<this.size;s++){let c=!1,a=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][s]==c?(a++,a==5?e+=n.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,g),c||(e+=this.finderPenaltyCountPatterns(g)*n.PENALTY_N3),c=this.modules[f][s],a=1);e+=this.finderPenaltyTerminateAndCount(c,a,g)*n.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let c=0;c<this.size-1;c++){const a=this.modules[s][c];a==this.modules[s][c+1]&&a==this.modules[s+1][c]&&a==this.modules[s+1][c+1]&&(e+=n.PENALTY_N2)}let t=0;for(const s of this.modules)t=s.reduce((c,a)=>c+(a?1:0),t);const r=this.size*this.size,o=Math.ceil(Math.abs(t*20-r*10)/r)-1;return u(0<=o&&o<=9),e+=o*n.PENALTY_N4,u(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let r=[6];for(let o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r}}static getNumRawDataModules(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return u(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let o=0;o<e-1;o++)t.push(0);t.push(1);let r=1;for(let o=0;o<e;o++){for(let s=0;s<t.length;s++)t[s]=n.reedSolomonMultiply(t[s],r),s+1<t.length&&(t[s]^=t[s+1]);r=n.reedSolomonMultiply(r,2)}return t}static reedSolomonComputeRemainder(e,t){let r=t.map(o=>0);for(const o of e){const s=o^r.shift();r.push(0),t.forEach((c,a)=>r[a]^=n.reedSolomonMultiply(c,s))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let r=0;for(let o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(t>>>o&1)*e;return u(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];u(t<=this.size*3);const r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let l=n;l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=l;function i(e,t,r){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let o=t-1;o>=0;o--)r.push(e>>>o&1)}function m(e,t){return(e>>>t&1)!=0}function u(e){if(!e)throw new Error("Assertion error")}const d=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(const r of e)i(r,8,t);return new d(d.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!d.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let r=0;r<e.length;){const o=Math.min(e.length-r,3);i(parseInt(e.substr(r,o),10),o*3+1,t),r+=o}return new d(d.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!d.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],r;for(r=0;r+2<=e.length;r+=2){let o=d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;o+=d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),i(o,11,t)}return r<e.length&&i(d.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new d(d.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:d.isNumeric(e)?[d.makeNumeric(e)]:d.isAlphanumeric(e)?[d.makeAlphanumeric(e)]:[d.makeBytes(d.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,t)}static isNumeric(e){return d.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return d.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const o of e){const s=o.mode.numCharCountBits(t);if(o.numChars>=1<<s)return 1/0;r+=4+s+o.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}};let C=d;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=C})(A||(A={}));(h=>{(n=>{const l=class{constructor(m,u){this.ordinal=m,this.formatBits=u}};let i=l;i.LOW=new l(0,1),i.MEDIUM=new l(1,0),i.QUARTILE=new l(2,3),i.HIGH=new l(3,2),n.Ecc=i})(h.QrCode||(h.QrCode={}))})(A||(A={}));(h=>{(n=>{const l=class{constructor(m,u){this.modeBits=m,this.numBitsCharCount=u}numCharCountBits(m){return this.numBitsCharCount[Math.floor((m+7)/17)]}};let i=l;i.NUMERIC=new l(1,[10,12,14]),i.ALPHANUMERIC=new l(2,[9,11,13]),i.BYTE=new l(4,[8,16,16]),i.KANJI=new l(8,[8,10,12]),i.ECI=new l(7,[0,0,0]),n.Mode=i})(h.QrSegment||(h.QrSegment={}))})(A||(A={}));var N=A;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var k={L:N.QrCode.Ecc.LOW,M:N.QrCode.Ecc.MEDIUM,Q:N.QrCode.Ecc.QUARTILE,H:N.QrCode.Ecc.HIGH},x=128,H="L",$="#FFFFFF",Y="#000000",V=!1,L=4,de=.1;function G(h,n=0){const l=[];return h.forEach(function(i,m){let u=null;i.forEach(function(d,C){if(!d&&u!==null){l.push(`M${u+n} ${m+n}h${C-u}v1H${u+n}z`),u=null;return}if(C===i.length-1){if(!d)return;u===null?l.push(`M${C+n},${m+n} h1v1H${C+n}z`):l.push(`M${u+n},${m+n} h${C+1-u}v1H${u+n}z`);return}d&&u===null&&(u=C)})}),l.join("")}function j(h,n){return h.slice().map((l,i)=>i<n.y||i>=n.y+n.h?l:l.map((m,u)=>u<n.x||u>=n.x+n.w?m:!1))}function X(h,n,l,i){if(i==null)return null;const m=l?L:0,u=h.length+m*2,d=Math.floor(n*de),C=u/n,e=(i.width||d)*C,t=(i.height||d)*C,r=i.x==null?h.length/2-e/2:i.x*C,o=i.y==null?h.length/2-t/2:i.y*C;let s=null;if(i.excavate){let c=Math.floor(r),a=Math.floor(o),g=Math.ceil(e+r-c),f=Math.ceil(t+o-a);s={x:c,y:a,w:g,h:f}}return{x:r,y:o,h:t,w:e,excavation:s}}var fe=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function me(h){const n=h,{value:l,size:i=x,level:m=H,bgColor:u=$,fgColor:d=Y,includeMargin:C=V,style:e,imageSettings:t}=n,r=b(n,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),o=t==null?void 0:t.src,s=p.useRef(null),c=p.useRef(null),[a,g]=p.useState(!1);p.useEffect(()=>{if(s.current!=null){const M=s.current,E=M.getContext("2d");if(!E)return;let w=N.QrCode.encodeText(l,k[m]).getModules();const v=C?L:0,P=w.length+v*2,_=X(w,i,C,t),y=c.current,O=_!=null&&y!==null&&y.complete&&y.naturalHeight!==0&&y.naturalWidth!==0;O&&_.excavation!=null&&(w=j(w,_.excavation));const B=window.devicePixelRatio||1;M.height=M.width=i*B;const T=i/P*B;E.scale(T,T),E.fillStyle=u,E.fillRect(0,0,P,P),E.fillStyle=d,fe?E.fill(new Path2D(G(w,v))):w.forEach(function(W,K){W.forEach(function(q,Z){q&&E.fillRect(Z+v,K+v,1,1)})}),O&&E.drawImage(y,_.x+v,_.y+v,_.w,_.h)}}),p.useEffect(()=>{g(!1)},[o]);const f=S({height:i,width:i},e);let R=null;return o!=null&&(R=p.createElement("img",{src:o,key:o,style:{display:"none"},onLoad:()=>{g(!0)},ref:c})),p.createElement(p.Fragment,null,p.createElement("canvas",S({style:f,height:i,width:i,ref:s},r)),R)}function ge(h){const n=h,{value:l,size:i=x,level:m=H,bgColor:u=$,fgColor:d=Y,includeMargin:C=V,imageSettings:e}=n,t=b(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=N.QrCode.encodeText(l,k[m]).getModules();const o=C?L:0,s=r.length+o*2,c=X(r,i,C,e);let a=null;e!=null&&c!=null&&(c.excavation!=null&&(r=j(r,c.excavation)),a=p.createElement("image",{xlinkHref:e.src,height:c.h,width:c.w,x:c.x+o,y:c.y+o,preserveAspectRatio:"none"}));const g=G(r,o);return p.createElement("svg",S({height:i,width:i,viewBox:`0 0 ${s} ${s}`},t),p.createElement("path",{fill:u,d:`M0,0 h${s}v${s}H0z`,shapeRendering:"crispEdges"}),p.createElement("path",{fill:d,d:g,shapeRendering:"crispEdges"}),a)}var Ee=h=>{const n=h,{renderAs:l}=n,i=b(n,["renderAs"]);return l==="svg"?p.createElement(ge,S({},i)):p.createElement(me,S({},i))};function F(h,n){var l=URL.createObjectURL(h),i=document.createElement("a");i.href=l,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(function(){return URL.revokeObjectURL(l)},500)}var Ce=function(h){U(n,h);function n(l){var i=h.call(this,l)||this;return i.ref=p.createRef(),i}return n.prototype.getImageSettings=function(){var l=this.props,i=l.imageSettings,m=l.data;if(!(!i||!J(i)||!i.src||typeof i.src!="string"))return ee(i.src)&&(i.src=te(i.src,m,"| raw")),re(i,function(u,d){return~["width","height","x","y"].indexOf(d)?oe(u)?Number(u):null:u})},n.prototype.doAction=function(l,i,m,u){var d,C=this.props.codeSize,e=l==null?void 0:l.actionType;if(e==="saveAs"&&!((d=this.ref)===null||d===void 0)&&d.current)if(this.props.mode==="svg"){var t=this.ref.current.querySelector("svg");if(t){var r='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="'.concat(C,'" width="').concat(C,'" viewBox="').concat(t.getAttribute("viewBox")||"0 0 37 37",`">
         `).concat(t.innerHTML,`
         </svg>`),o=new Blob([r],{type:"image/svg+xml"});F(o,(u==null?void 0:u.name)||"qr-code.svg")}}else{var s=this.ref.current.querySelector("canvas");s&&s.toBlob(function(c){c&&F(c,u!=null&&u.name?u.name.replace(/\.svg$/,".png"):"qr-code.png")},"image/png")}},n.prototype.render=function(){var l=this.props,i=l.className,m=l.style,u=l.qrcodeClassName,d=l.codeSize,C=l.backgroundColor,e=l.foregroundColor,t=l.placeholder,r=l.level,o=l.defaultValue,s=l.data,c=l.mode,a=l.translate,g=l.classPrefix,f=ne(this.props,function(){return ue(o,s,"| raw")||void 0});return p.createElement("div",{className:se("".concat(g,"QrCode"),i),style:m,ref:this.ref},f?f.length>2953?p.createElement("span",{className:"text-danger"},a("QRCode.tooLong",{max:2953})):p.createElement(Ee,{className:u,value:f,size:d,bgColor:C,fgColor:e,level:r||"L",imageSettings:this.getImageSettings(),renderAs:c}):p.createElement("span",{className:"".concat(g,"QrCode--placeholder")},t))},n.defaultProps={codeSize:128,qrcodeClassName:"",backgroundColor:"#fff",foregroundColor:"#000",level:"L",placeholder:"-",mode:"canvas"},n}(p.Component),we=function(h){U(n,h);function n(l,i){var m=h.call(this,l)||this,u=i;return u.registerComponent(m),m}return n.prototype.componentWillUnmount=function(){var l;(l=h.prototype.componentWillUnmount)===null||l===void 0||l.call(this);var i=this.context;i.unRegisterComponent(this)},n.contextType=ie,n=le([ae({type:"qrcode",alias:["qr-code"],name:"qrcode"}),ce("design:paramtypes",[Object,Object])],n),n}(Ce);export{we as QRCodeRenderer,Ce as default};