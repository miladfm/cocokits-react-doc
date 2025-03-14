import{ag as e,ah as s}from"./chunk-NUUEMKO5-D6jbGMRW.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{M as o}from"./mdx-page-with-theme-section-B4Bj4vfB.js";import"./index-qVDZzPEr.js";import"./doc-page-DgmE1Q-V.js";import"./react-18-CVVedRj1.js";import"./index-DM35cTar.js";import"./iframe-BV-LLgkn.js";import"../sb-preview/runtime.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";const d=[{id:"selection_elementanchorpoint",name:"ElementAnchorPoint"},{id:"selection_getelementanchorposition",name:"getElementAnchorPosition()"}];function r(t){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utils/DOM"}),`
`,e.jsxs(o,{breadcrumb:"Utils",title:"DOM",tocItems:d,hideThemeSwitcher:!0,children:[e.jsx("div",{}),e.jsxs("div",{id:"selection_elementanchorpoint",children:[e.jsx(n.h2,{id:"elementanchorpoint",children:"ElementAnchorPoint"}),e.jsx(n.p,{children:"Defines anchor point positions for element positioning."}),e.jsx(n.p,{children:`These anchor points determine how one element should be positioned\r
relative to another element.`}),e.jsx(n.h3,{id:"enumeration-members",children:"Enumeration Members"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Enumeration Member"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"BottomLeft"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:'"BottomLeft"'})})}),e.jsx("td",{children:e.jsx(n.p,{children:"Position the element at the bottom-left corner of the source"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"BottomRight"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:'"BottomRight"'})})}),e.jsx("td",{children:e.jsx(n.p,{children:"Position the element at the bottom-right corner of the source"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"TopLeft"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:'"TopLeft"'})})}),e.jsx("td",{children:e.jsx(n.p,{children:"Position the element at the top-left corner of the source"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"TopRight"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:'"TopRight"'})})}),e.jsx("td",{children:e.jsx(n.p,{children:"Position the element at the top-right corner of the source"})})]})]})]}),e.jsx(n.hr,{})]}),e.jsxs("div",{id:"selection_getelementanchorposition",children:[e.jsx(n.h2,{id:"getelementanchorposition",children:"getElementAnchorPosition()"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function getElementAnchorPosition(
   targetElement: HTMLElement, 
   sourceElement: HTMLElement, 
   anchorPoint: ElementAnchorPoint): {
  x: number;
  y: number;
 }
`})}),e.jsx(n.p,{children:`Calculates the position coordinates needed to place a target element\r
at a specified anchor point relative to a source element.`}),e.jsx(n.h3,{id:"parameters",children:"Parameters"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"targetElement"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"HTMLElement"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The element to be positioned"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"sourceElement"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"HTMLElement"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The reference element to position against"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"anchorPoint"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"ElementAnchorPoint"})})}),e.jsx("td",{children:e.jsx(n.p,{children:"The desired anchor point position"})})]})]})]}),e.jsx(n.h3,{id:"returns",children:"Returns"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  x: number;
  y: number;
 }
`})}),e.jsx(n.p,{children:"Coordinates representing the position offset"}),e.jsxs("table",{class:"arg-type-table arg-type-table--full-width",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"x"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"y"})})}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.code,{children:"number"})})})]})]})]}),e.jsx(n.h3,{id:"example",children:"Example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Position a dropdown menu below a button\r
const button = document.getElementById('dropdown-button');\r
const menu = document.getElementById('dropdown-menu');

const position = getElementAnchorPosition(\r
  menu,\r
  button,\r
  ElementAnchorPoint.BottomLeft\r
);

menu.style.transform = \`translate(\${position.x}px, \${position.y}px)\`;
`})})]})]})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{f as default,d as tocItems};
