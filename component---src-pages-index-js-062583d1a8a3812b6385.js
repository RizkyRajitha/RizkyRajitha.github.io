"use strict";(self.webpackChunkblog_by_rajitha=self.webpackChunkblog_by_rajitha||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return k},P:function(){return E},S:function(){return W},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],L=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:i().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],$=new Set;let I,_;const R=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:u,class:g,onStartLoad:p,onLoad:m,onError:f}=e,h=o(e,j);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:E,className:k}=w,N=o(w,T),x=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(u=g);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(L);if(_&&$.has(L))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=a(s({isLoading:!0,isLoaded:$.has(L),image:n},h)),$.has(L)||(t=requestAnimationFrame((()=>{x.current&&(r=o(x.current,L,$,i,p,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{$.has(L)&&_&&(x.current.innerHTML=_(s({isLoading:$.has(L),isLoaded:$.has(L),image:n},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},N,{style:s({},E,i,{backgroundColor:d}),className:`${k}${u?` ${u}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,z);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const A=q((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:g="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=o(e,N);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:S,layout:C,images:j,placeholder:T,backgroundColor:$}=l,I=c(w,S,C),{style:_,className:R}=I,O=o(I,x),z={fallback:void 0,sources:[]};return j.fallback&&(z.fallback=s({},j.fallback,{srcSet:j.fallback.srcSet?L(j.fallback.srcSet):void 0})),j.sources&&(z.sources=j.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,s({},O,{style:s({},_,i,{backgroundColor:h}),className:`${R}${a?` ${a}`:""}`}),r.createElement(m,{layout:C,width:w,height:S},r.createElement(E,s({},u(T,!1,C,w,S,$,y,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:p},v,d("eager"===g,!1,z,g,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:S,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};A.displayName="StaticImage",A.propTypes=F;const W=q(O);W.displayName="StaticImage",W.propTypes=F},9899:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(1883),i=a(8183),s=a(4578);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.Z)(t,e),t.prototype.render=function(){return r.createElement("footer",{className:"landingpagefooter"}," ",r.createElement("span",{className:"imgcredit"}," ","Image : ",this.props.imgcredit," Source"," ")," ",r.createElement("a",{className:"imgcreditanchor",target:"_blank",rel:"noopener noreferrer",href:"https://apod.nasa.gov/apod/astropix.html"},"NASA"),r.createElement("div",{className:"landingpagefooterdiv"},r.createElement("div",{className:"landingpagefooterdivitembr"}),r.createElement("div",{className:"landingpagefooterdivitem"},r.createElement("a",{target:"_blank",alt:"github logo",rel:"noopener noreferrer",className:"landingpagefooterdivitemlink",href:"https://github.com/RizkyRajitha"},r.createElement("span",{alt:"github logo",className:"icon-github iconsfooter"}))),r.createElement("div",{className:"landingpagefooterdivitem"},r.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"landingpagefooterdivitemlink",href:"https://twitter.com/RizkyRajitha"},r.createElement("span",{className:"icon-twitter iconsfooter"}))),r.createElement("div",{className:"landingpagefooterdivitem"},r.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"landingpagefooterdivitemlink",href:"https://dev.to/rizkyrajitha"}," ",r.createElement("span",{className:"icon-dev-dot-to iconsfooter"})))," ",r.createElement("div",{className:"landingpagefooterdivitembr"})))},t}(r.Component);var l=o,c=a(8032);var d=e=>{const t=e.data.nasadata;return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:e.data.site.siteMetadata.title,description:e.data.site.siteMetadata.description}),r.createElement("div",{className:"parallax"},r.createElement(c.S,{src:"../../content/assets/background.jpg",style:{objectFit:"cover",position:"absolute",width:"100%",height:"100%",zIndex:"-1"},__imageData:a(3266)}),r.createElement("main",null,r.createElement("div",{className:"parallaxTextdiv"},r.createElement("span",{className:"parallaxText"},"Hi "),r.createElement("br",null),r.createElement("span",{className:"parallaxText"},"Nice to meet you "),r.createElement("br",null),r.createElement("span",{className:"parallaxText"},"I'am Rajitha "),r.createElement("br",null),r.createElement(n.Link,{className:"btn visitblogbtn btn-outline-primary",to:"/blog"},"visit my blog"))),r.createElement(l,{imgcredit:`${t.name}${t.copyright?` by ${t.copyright} `:""}`})))}},3266:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#384858","images":{"fallback":{"src":"/static/3c41a8846f3aafe7220c63e53686e3f7/d1b16/background.jpg","srcSet":"/static/3c41a8846f3aafe7220c63e53686e3f7/22512/background.jpg 240w,\\n/static/3c41a8846f3aafe7220c63e53686e3f7/f941e/background.jpg 480w,\\n/static/3c41a8846f3aafe7220c63e53686e3f7/d1b16/background.jpg 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/static/3c41a8846f3aafe7220c63e53686e3f7/43076/background.webp 240w,\\n/static/3c41a8846f3aafe7220c63e53686e3f7/89a34/background.webp 480w,\\n/static/3c41a8846f3aafe7220c63e53686e3f7/84e02/background.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":1440}')}}]);
//# sourceMappingURL=component---src-pages-index-js-062583d1a8a3812b6385.js.map