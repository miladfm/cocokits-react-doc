import{g as a,T as n,b as i,i as l,r as p,I as m}from"./doc-page-d6wbzmmI.js";import{ag as c}from"./chunk-NUUEMKO5-D5vKVSNs.js";import"./index-qVDZzPEr.js";import"./mdx-page-with-theme-section-COUKzgnD.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";function u(){return e=>{const o=a(n).currentTheme;return c.jsx(i.Provider,{value:o.themeConfig,children:c.jsx(e,{})})}}function d({direction:e="row",insideBox:o=!1}={},s={}){const r=["story-decorator-wrapper"];return e==="row"&&r.push("story-decorator-wrapper__row"),e==="column"&&r.push("story-decorator-wrapper__column"),o&&r.push("story-decorator-wrapper__inside-box"),t=>c.jsx("div",{style:s,className:r.join(" "),children:c.jsx(t,{})})}function j(e){const o=e.cckControl;if(!o)return{};const s=o.themeComponentConfig.additional,r=Object.keys(s??{}).filter(t=>l(o[t]));return p(r,t=>({[t]:o[t]}),{}),{type:e.cckControl.type,size:e.cckControl.size,color:e.cckControl.color}}const w={tags:["autodocs"],decorators:[d(),u()],argTypes:{cckControl:{control:"object",table:{disable:!0}},cckExampleArgs:{control:"object",table:{disable:!0}},cckExampleCssVariables:{control:"text",table:{disable:!0}},cckIcons:{control:"object",table:{disable:!0}}},args:{cckIcons:m}};export{w as P,j as r,d as w};
