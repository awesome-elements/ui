import{r as e,h as o,H as a,g as s,c as t}from"./p-ea3591f3.js";import{d as i,c as r,a as n}from"./p-a6b4a981.js";const l=class{constructor(o){e(this,o),this.TAG_NAME="awesome-alert",this.DEFAULT_BUTTONS=[{name:"OK"}],this.DEFAULT_Z_INDEX=999,this.DEFAULT_ATTACHING_ELEMENT="body",this.buttons=this.DEFAULT_BUTTONS,this.active=!1,this.zIndex=this.DEFAULT_Z_INDEX,this.attachingElement=this.DEFAULT_ATTACHING_ELEMENT}async present(e,o,a=this.DEFAULT_BUTTONS,s=this.DEFAULT_Z_INDEX,t=this.DEFAULT_ATTACHING_ELEMENT){var i;const r=document.createElement(this.TAG_NAME);return r.header=e,r.content=o,r.buttons=a,r.zIndex=s,r.attachingElement=t,null===(i=this.obtainActualAttachingElement(r.attachingElement))||void 0===i||i.append(r),r.active=!0,r.remove}render(){var e;return o(a,{hidden:!this.active},this.active&&[o("awesome-backdrop",{part:"backdrop"}),o("awesome-flex",{part:"container"},o("awesome-flex-item",{xs:12},o("div",{part:"header"},this.header)),o("awesome-flex-item",{xs:12},o("div",{part:"content",innerHTML:this.content})),o("awesome-flex-item",null,o("awesome-flex",null,o("awesome-flex-item",null),null===(e=this.buttons)||void 0===e?void 0:e.map((e=>o("awesome-flex-item",{xs:"auto"},o("awesome-button",{variant:e.variant||"solid",onClick:this.obtainButtonClickHandler(e),style:{float:"right"}},e.name)))))))])}obtainButtonClickHandler(e){return()=>{var o;this.hostElement.remove(),null===(o=null==e?void 0:e.handler)||void 0===o||o.call(e)}}obtainActualAttachingElement(e){return"string"==typeof e&&(e=document.querySelector(e)),e}get hostElement(){return s(this)}};l.style={default:":host,*{box-sizing:border-box}:host{display:block}[part='container']{position:fixed;left:50%;top:50%;height:auto;width:auto;transform:translate(-50%, -50%);padding:var(--awesome-ui-whitespace-md);background:var(--awesome-ui-color-background);border-radius:var(--awesome-ui-border-radius-lg);box-shadow:0 var(--awesome-ui-shadow-offset-lg) var(--awesome-ui-shadow-blur-xl) 0 var(--awesome-ui-color-dim)}[part='header']{font-size:1.5em;padding:var(--awesome-ui-whitespace-md) 0}[part='backdrop']{background:var(--awesome-ui-color-background);opacity:0.5}"};const h=class{constructor(o){e(this,o)}render(){return o(a,null)}};h.style=":host{display:block;position:fixed;left:0;top:0;right:0;bottom:0;background:transparent;opacity:0}";const d=class{constructor(o){e(this,o)}render(){return o(a,null,o("slot",null))}};function u(e){return o("a",{href:e,style:{display:"block",position:"absolute",left:"0",top:"0",right:"0",bottom:"0"}})}d.style={default:":host,*{box-sizing:border-box}:host{display:inline-block;padding:var(--awesome-ui-whitespace-sm);color:var(--awesome-ui-color-main);background:var(--awesome-ui-color-primary);border-radius:var(--awesome-ui-border-radius-lg);user-select:none}"};const m=class{constructor(o){e(this,o),this.variant="solid",this.disabled=!1}render(){return o(a,null,this.href&&u(this.href),o("slot",null))}get hostElement(){return s(this)}};m.style={default:":host,*{box-sizing:border-box}:host{-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;cursor:pointer;user-select:none;margin:var(--awesome-ui-whitespace-sm);padding:var(--awesome-ui-whitespace-md);border-radius:var(--awesome-ui-border-radius-md);transition:box-shadow 0.3s}:host([disabled]){pointer-events:none;filter:contrast(0.5)}:host([variant='solid']){color:var(--awesome-ui-color-contrast);background:var(--awesome-ui-color-primary);box-shadow:0 var(--awesome-ui-shadow-offset-sm) var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-dim)}:host([variant='solid']:hover){background:var(--awesome-ui-color-primary);box-shadow:0 var(--awesome-ui-shadow-offset-sm) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim)}:host([variant='solid']:active){background:var(--awesome-ui-color-primary);box-shadow:inset 0 var(--awesome-ui-shadow-offset-sm) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim)}:host([variant='hollow']){color:var(--awesome-ui-color-primary);box-shadow:0 0 var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-primary)}:host([variant='hollow']:hover){box-shadow:0 0 var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-primary)}:host([variant='hollow']:active){box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-primary)}:host([variant='clear']){color:var(--awesome-ui-color-primary)}:host([variant='clear']:hover){box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-xl) -10px var(--awesome-ui-color-primary)}:host([variant='clear']:active){box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-xl) 0 var(--awesome-ui-color-primary)}"};const w=class{constructor(o){e(this,o),this.button=!1}render(){return o(a,null,this.href&&u(this.href),o("slot",null))}};w.style={default:":host,*{box-sizing:border-box}:host{-webkit-tap-highlight-color:transparent;display:block;position:relative;margin:var(--awesome-ui-whitespace-sm);padding:var(--awesome-ui-whitespace-lg);border-radius:var(--awesome-ui-border-radius-lg);background:var(--awesome-ui-color-background);box-shadow:0 var(--awesome-ui-shadow-offset-sm) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim);transition:box-shadow 0.3s}:host([button]){cursor:pointer}:host([button]:hover){box-shadow:0 var(--awesome-ui-shadow-offset-sm) var(--awesome-ui-shadow-blur-lg) 0 var(--awesome-ui-color-dim)}:host([button]:active){box-shadow:inset 0 var(--awesome-ui-shadow-offset-sm) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim)}"};const c=class{constructor(o){e(this,o)}render(){return o(a,null,o("div",null))}};c.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative;width:100%;height:2px;margin:0.5rem 0}div{--disposition:calc(-1 * (var(--awesome-ui-shadow-offset-md) - 1px));display:block;height:10px;background:transparent;margin:0 var(--disposition);box-shadow:0 var(--awesome-ui-shadow-offset-md) var(--awesome-ui-shadow-blur-sm) var(--disposition) var(--awesome-ui-color-dim);transform:translateY(-10px)}"};const v=class{constructor(o){e(this,o),this.FLEX_ITEM_TAG_NAME="awesome-flex-item",this.baseFraction=12,this.notifySizeChangeToItemElements=e=>{const o=e.contentRect.width;this.hostElement.querySelectorAll(this.FLEX_ITEM_TAG_NAME).forEach((e=>e.containerSizeChanged(o)))}}baseFractionChanged(e){i.updateCSSVariable("--awesome-flex-base-fraction",e.toString(),this.hostElement)}connectedCallback(){i.observeResize(this.hostElement,[this.notifySizeChangeToItemElements])}disconnectedCallback(){i.unobserveResize(this.hostElement)}componentWillLoad(){this.baseFractionChanged(this.baseFraction)}render(){return o(a,null,o("slot",null))}get hostElement(){return s(this)}static get watchers(){return{baseFraction:["baseFractionChanged"]}}};v.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{--awesome-flex-fraction:'';display:flex;flex-wrap:wrap;width:100%;height:auto}";const p=class{constructor(o){e(this,o),this.containerSize=0}set fraction(e){i.updateCSSVariable("--awesome-flex-fraction",null==e?void 0:e.toString(),this.hostElement),this.updateFlexCSSVariable(e)}get actualXs(){return this.xs}get actualSm(){var e;return null!==(e=this.sm)&&void 0!==e?e:this.actualXs}get actualMd(){var e;return null!==(e=this.md)&&void 0!==e?e:this.actualSm}get actualLg(){var e;return null!==(e=this.lg)&&void 0!==e?e:this.actualMd}get actualXl(){var e;return null!==(e=this.xl)&&void 0!==e?e:this.actualLg}get actualXxl(){var e;return null!==(e=this.xxl)&&void 0!==e?e:this.actualXl}async containerSizeChanged(e){this.containerSize=e,this.updateFraction()}connectedCallback(){this.fraction=this.actualXs}componentWillUpdate(){this.updateFraction()}render(){return o(a,null,o("slot",null))}updateFraction(){switch(!0){case this.containerSize>=this.getViewBreakpoint("xxl"):this.fraction=this.actualXxl;break;case this.containerSize>=this.getViewBreakpoint("xl"):this.fraction=this.actualXl;break;case this.containerSize>=this.getViewBreakpoint("lg"):this.fraction=this.actualLg;break;case this.containerSize>=this.getViewBreakpoint("md"):this.fraction=this.actualMd;break;case this.containerSize>=this.getViewBreakpoint("sm"):this.fraction=this.actualSm;break;default:this.fraction=this.actualXs}}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}-local`)}updateFlexCSSVariable(e){var o,a;switch(i.updateCSSVariable("--awesome-flex-item-max-width","calc(var(--awesome-flex-fraction) / var(--awesome-flex-base-fraction) * 100%)",this.hostElement),!0){case""!==e&&!Number.isNaN(+e):i.updateCSSVariable("--awesome-flex-item-flex","0 0 var(--awesome-flex-item-max-width)",this.hostElement);break;case"auto"===e:i.updateCSSVariable("--awesome-flex-item-flex","0 0 auto",this.hostElement);break;case(null===(o=null==e?void 0:e.toString().match(/[0-9]+fr/))||void 0===o?void 0:o.length)>0:default:const s=+(null===(a=null==e?void 0:e.toString().match(/[0-9]+/))||void 0===a?void 0:a[0])||1;i.updateCSSVariable("--awesome-flex-item-flex",`${s} ${1/s} 0`,this.hostElement)}}get hostElement(){return s(this)}};p.style=":host,*{box-sizing:border-box}:host{display:flex;flex:var(--awesome-flex-item-flex)}";const b=class{constructor(o){e(this,o)}rowsChanged(e){i.updateCSSVariable("--awesome-grid-template-rows",e,this.hostElement)}columnsChanged(e){i.updateCSSVariable("--awesome-grid-template-columns",e,this.hostElement)}rowGapChanged(e){i.updateCSSVariable("--awesome-grid-row-gap",e,this.hostElement)}columnGapChanged(e){i.updateCSSVariable("--awesome-grid-column-gap",e,this.hostElement)}componentDidLoad(){this.rowsChanged(this.rows),this.columnsChanged(this.columns),this.rowGapChanged(this.rowGap),this.columnGapChanged(this.columnGap)}render(){return o(a,null,o("div",{id:"main-container"},o("slot",null)))}get hostElement(){return s(this)}static get watchers(){return{rows:["rowsChanged"],columns:["columnsChanged"],rowGap:["rowGapChanged"],columnGap:["columnGapChanged"]}}};b.style=":host,*{box-sizing:border-box}:host{--awesome-grid-template-rows:'';--awesome-grid-template-columns:'';--awesome-grid-row-gap:'';--awesome-grid-column-gap:'';display:block;height:100%;width:100%}#main-container{display:grid;height:100%;width:100%;grid-template-rows:var(--awesome-grid-template-rows);grid-template-columns:var(--awesome-grid-template-columns);row-gap:var(--awesome-grid-row-gap);column-gap:var(--awesome-grid-column-gap)}";const g=class{constructor(o){e(this,o)}columnChanged(e){i.updateCSSVariable("--awesome-grid-column",null==e?void 0:e.toString(),this.hostElement)}columnSpanChanged(e){i.updateCSSVariable("--awesome-grid-column-span",null==e?void 0:e.toString(),this.hostElement)}rowChanged(e){i.updateCSSVariable("--awesome-grid-row",null==e?void 0:e.toString(),this.hostElement)}rowSpanChanged(e){i.updateCSSVariable("--awesome-grid-row-span",null==e?void 0:e.toString(),this.hostElement)}componentDidLoad(){this.rowChanged(this.row),this.rowSpanChanged(this.rowSpan),this.columnChanged(this.column),this.columnSpanChanged(this.columnSpan)}render(){return o(a,null,o("slot",null))}get hostElement(){return s(this)}static get watchers(){return{column:["columnChanged"],columnSpan:["columnSpanChanged"],row:["rowChanged"],rowSpan:["rowSpanChanged"]}}};g.style=":host,*{box-sizing:border-box}:host{--awesome-grid-row:'';--awesome-grid-row-span:'';--awesome-grid-column:'';--awesome-grid-column-span:'';display:block;height:100%;width:100%;grid-row-start:var(--awesome-grid-row, auto);grid-row-end:span var(--awesome-grid-row-span, 1);grid-column-start:var(--awesome-grid-column, auto);grid-column-end:span var(--awesome-grid-column-span, 1)}";const x=class{constructor(o){e(this,o),this.awesomeChange=t(this,"awesomeChange",7),this.awesomeInput=t(this,"awesomeInput",7),this.type="text",this.disabled=!1,this.handleOnChangeEvent=e=>{this.value=e.currentTarget.value,this.awesomeChange.emit([{value:this.value,innerEvent:e}])},this.handleOnInputEvent=e=>{this.awesomeInput.emit({innerEvent:e})}}render(){return o(a,null,o("awesome-flex",null,o("awesome-flex-item",{xs:"auto"},o("slot",{name:"before"})),o("awesome-flex-item",null,o("input",{value:this.value,disabled:this.disabled,placeholder:this.placeholder,onChange:this.handleOnChangeEvent,onInput:this.handleOnInputEvent})),o("awesome-flex-item",{xs:"auto"},o("slot",{name:"after"}))))}};x.style={default:":host,*{box-sizing:border-box}:host{display:block;cursor:default;width:100%;margin:var(--awesome-ui-whitespace-sm) 0;padding:var(--awesome-ui-whitespace-md);border-radius:var(--awesome-ui-border-radius-md);box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-dim);transition:box-shadow 0.3s}:host(:hover){box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim)}:host(:focus-within){box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim),\n    inset 0 calc(var(--awesome-ui-shadow-offset-xs) * -1) var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-primary)}:host([disabled]){pointer-events:none;filter:contrast(0.5);backdrop-filter:contrast(1)}input{width:100%;outline:none;border:none;font-size:1em;padding:0 var(--awesome-ui-whitespace-md);caret-color:var(--awesome-ui-color-primary)}input:disabled{background:inherit}"};const f=class{constructor(o){e(this,o),this.button=!1}render(){return o(a,null,this.href&&u(this.href),o("slot",null))}};f.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative;width:100%;cursor:default;padding:var(--awesome-ui-whitespace-md);border-radius:var(--awesome-ui-border-radius-md);box-shadow:0 10px 5px -10px var(--awesome-ui-color-dim);user-select:none;transition:box-shadow 0.1s}:host([button]){cursor:pointer}:host([button]:hover){box-shadow:0 5px 15px -3px var(--awesome-ui-color-dim)}:host([button]:active){box-shadow:inset 0 2px 30px -5px var(--awesome-ui-color-dim)}"};var k=r((function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.obtainCSSVariable=o.updateCSSVariable=void 0,o.updateCSSVariable=function(e,o,a){a.style.setProperty(e,null==o?"":o)},o.obtainCSSVariable=function(e,o,a=!0){let s=o.style;return a&&(s=getComputedStyle(o)),s.getPropertyValue(e)}})),y=r((function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.observeResize=void 0,o.observeResize=function(e,o){new ResizeObserver((e=>{e.forEach((e=>{o.forEach((o=>o.call(this,e)))}))})).observe(e)}})),C=r((function(e,o){var a=n&&n.__createBinding||(Object.create?function(e,o,a,s){void 0===s&&(s=a),Object.defineProperty(e,s,{enumerable:!0,get:function(){return o[a]}})}:function(e,o,a,s){void 0===s&&(s=a),e[s]=o[a]}),s=n&&n.__exportStar||function(e,o){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(o,s)||a(o,e,s)};Object.defineProperty(o,"__esModule",{value:!0}),s(k,o),s(y,o)}));const _=class{constructor(o){e(this,o),this.progress=0}handleProgressChange(e){C.updateCSSVariable("--progress",e.toString(),this.hostElement)}connectedCallback(){this.handleProgressChange(this.progress)}render(){return o(a,null,o("div",null))}get hostElement(){return s(this)}static get watchers(){return{progress:["handleProgressChange"]}}};_.style={default:":host,*{box-sizing:border-box}:host{--progress:unset;display:block;position:relative;height:4px;width:100%;border-radius:2px;box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-md) 0px var(--awesome-ui-color-dim)}div{position:absolute;height:4px;width:calc(var(--progress) * 100%);max-width:100%;border-radius:2px;background:var(--awesome-ui-color-primary);box-shadow:0 0 var(--awesome-ui-shadow-blur-md) 1px var(--awesome-ui-color-primary)}"};const z=class{constructor(o){e(this,o),this.awesomeChange=t(this,"awesomeChange",7),this.awesomeInput=t(this,"awesomeInput",7),this.min=0,this.max=100,this.step="",this.value=0,this.handleOnChangeEvent=e=>{this.awesomeChange.emit([+e.currentTarget.value,e])},this.handleOnInputEvent=e=>{this.value=+e.currentTarget.value,this.awesomeInput.emit(e)}}handleValueChange(e){C.updateCSSVariable("--awesome-range-handle-position",(e-this.min)/(this.max-this.min)*100+"%",this.hostElement)}connectedCallback(){this.handleValueChange(this.value)}render(){return o(a,null,o("input",{part:"native",type:"range",min:this.min,max:this.max,step:this.step,value:this.value,onChange:this.handleOnChangeEvent,onInput:this.handleOnInputEvent}))}get hostElement(){return s(this)}static get watchers(){return{value:["handleValueChange"]}}};z.style={default:":host,*{box-sizing:border-box}:host{--awesome-range-handle-position:unset;display:inline-block;position:relative;width:100%}[part='native']{--bar-height:4px;position:relative;appearance:none;height:var(--bar-height);width:100%;border-radius:calc(var(--bar-height) / 2);background:linear-gradient(\n    90deg,\n    var(--awesome-ui-color-primary) 0%,\n    var(--awesome-ui-color-primary) var(--awesome-range-handle-position),\n    var(--awesome-ui-color-background) var(--awesome-range-handle-position),\n    var(--awesome-ui-color-background) 100%\n  );box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-sm) 0px var(--awesome-ui-color-dim)}[part='native']:hover{box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-md) 0px var(--awesome-ui-color-dim)}[part='native']::before{content:'';position:absolute;height:4px;width:var(--awesome-range-handle-position);max-width:100%;border-radius:2px;background:var(--awesome-ui-color-primary)}[part='native']:hover::before{box-shadow:0 0 var(--awesome-ui-shadow-blur-md) 0px var(--awesome-ui-color-primary)}[part='native']::-webkit-slider-thumb{appearance:none;cursor:pointer;height:16px;width:16px;border-radius:50%;background:var(--awesome-ui-color-primary);box-shadow:0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-sm) 0px var(--awesome-ui-color-dim)}[part='native']::-webkit-slider-thumb:hover{box-shadow:0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-md) 0px var(--awesome-ui-color-dim),\n    0 0 var(--awesome-ui-shadow-blur-sm) 0px var(--awesome-ui-color-primary)}[part='native']::-webkit-slider-thumb:active{border-radius:var(--awesome-ui-border-radius-md);box-shadow:0 0 var(--awesome-ui-shadow-blur-md) 0px var(--awesome-ui-color-primary)}"};const E=class{constructor(o){e(this,o),this.awesomeChange=t(this,"awesomeChange",7),this.CHILD_SELECT_OPTION_TAG_NAME="awesome-select-option",this.expanded=!1,this.placeholder="No Selection",this.handleBackdropClick=()=>{this.expanded=!1},this.handleToggleValueChange=e=>{this.expanded=e.currentTarget.checked}}handleExpandedChange(e){if(e){const e=window.innerHeight,o=this.hostElement.getBoundingClientRect();C.updateCSSVariable("--dropdown-max-height",e-o.top-o.height+"px",this.hostElement)}}handleValueChanged(e){this.updateOptionHighlights(),this.awesomeChange.emit({value:e})}render(){return o(a,null,this.expanded&&o("awesome-backdrop",{part:"backdrop",onClick:this.handleBackdropClick}),o("label",{part:"container",htmlFor:"toggle"},o("input",{id:"toggle",type:"checkbox",checked:this.expanded,hidden:!0,onChange:this.handleToggleValueChange}),o("div",{part:"main"},o("span",{class:"text"},this.value||this.placeholder),this.renderArrow()),o("div",{part:"dropdown",class:"popover"},o("slot",null))))}renderArrow(){return o("svg",{class:"arrow",width:"1em",height:"1em",viewBox:"0 0 100 100"},o("path",{"stroke-width":"10",stroke:"var(--stroke-color, black)",fill:"transparent",d:"M20,30 L50,70 L 80 30"}))}updateOptionHighlights(){var e;null===(e=this.hostElement)||void 0===e||e.querySelectorAll(this.CHILD_SELECT_OPTION_TAG_NAME).forEach((async e=>{e.selected=await e.obtainActualValue()===this.value}))}get hostElement(){return s(this)}static get watchers(){return{expanded:["handleExpandedChange"],value:["handleValueChanged"]}}};E.style={default:":host,*{box-sizing:border-box}:host{display:block;width:100%;margin:var(--awesome-ui-whitespace-sm) 0;user-select:none}[part='container']{display:inline-block;position:relative;cursor:pointer;width:10rem;transition:all 0.3s;margin:var(--padding-sm) 0}[part='main']{display:block;cursor:pointer;min-height:1em;height:100%;width:100%;padding:var(--awesome-ui-whitespace-md);border-radius:var(--awesome-ui-border-radius-md);box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-dim);transition:box-shadow 0.3s}[part='main']:hover{box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim)}#toggle:checked~[part='main']{box-shadow:inset 0 var(--awesome-ui-shadow-offset-xs) var(--awesome-ui-shadow-blur-md) 0 var(--awesome-ui-color-dim),\n    inset 0 calc(var(--awesome-ui-shadow-offset-xs) * -1) var(--awesome-ui-shadow-blur-sm) 0 var(--awesome-ui-color-primary)}:host(:not([value])) [part='main']>.text{color:var(--awesome-ui-color-dim)}[part='main']>.arrow{float:right;transition:all 0.3s}#toggle:checked~[part='main']>.arrow{--stroke-color:var(--primary-color);transform:rotate(180deg)}[part='dropdown']{position:absolute;overflow-y:auto;max-height:calc(var(--dropdown-max-height) - 1rem);height:auto;width:10rem;top:2.5rem;left:0;background:var(--contrast-color);opacity:0;transform:scaleY(0);transform-origin:top;z-index:999;transition:all 0.3s}#toggle:checked~[part='dropdown']{transform:scaleY(1);opacity:1}:host([disabled]){pointer-events:none;filter:contrast(0.5);backdrop-filter:contrast(1)}.popover{padding:var(--awesome-ui-whitespace-md);background:var(--awesome-ui-color-background);border-radius:var(--awesome-ui-border-radius-lg);box-shadow:0 var(--awesome-ui-shadow-offset-lg) var(--awesome-ui-shadow-blur-xl) 0 var(--awesome-ui-color-dim)}"};const S=class{constructor(o){e(this,o),this.PARENT_SELECT_ELEMENT_TAG_NAME="awesome-select",this.selected=!1,this.select=()=>{const e=this.parentSelectElement;e&&(e.value=this.actualValue)}}get parentSelectElement(){var e;const o=null===(e=this.hostElement)||void 0===e?void 0:e.parentElement;if(o.tagName.toUpperCase()===this.PARENT_SELECT_ELEMENT_TAG_NAME.toUpperCase())return o}get actualValue(){var e;return this.value||(null===(e=this.hostElement)||void 0===e?void 0:e.innerText)}async obtainActualValue(){return this.actualValue}render(){return o(a,null,o("awesome-item",{id:"item",button:!0,onClick:this.select},o("slot",null)))}get hostElement(){return s(this)}};S.style={default:":host,*{box-sizing:border-box}:host{display:block;width:auto}:host([selected]){color:var(--awesome-ui-color-primary)}"};const V=class{constructor(o){e(this,o)}render(){return o(a,null,o("slot",null))}};V.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative;height:100%;width:100%;margin:var(--awesome-ui-whitespace-sm);border-radius:var(--awesome-ui-border-radius-sm);box-shadow:0 0 var(--awesome-ui-shadow-blur-xxl) 0 var(--awesome-ui-color-dim);animation:skeleton 2s infinite}@keyframes skeleton{0%{box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-xxl) 0 var(--awesome-ui-color-dim)}50%{box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-xxl) -10px var(--awesome-ui-color-dim)}100%{box-shadow:inset 0 0 var(--awesome-ui-shadow-blur-xxl) 0 var(--awesome-ui-color-dim)}}"};const O=class{constructor(o){e(this,o),this.PARENT_TABS_ELEMENT_TAG_NAME="awesome-tabs",this.selected=!1,this.handleClick=()=>{var e;null===(e=this.parentTabsElement)||void 0===e||e.updateSelectedTab(this.hostElement)},this.handleMouseOver=()=>{var e;null===(e=this.parentTabsElement)||void 0===e||e.moveHighlightToTabPosition(this.hostElement)},this.handleMouseOut=()=>{var e;null===(e=this.parentTabsElement)||void 0===e||e.resetHighlightPosition()}}get parentTabsElement(){var e;const o=null===(e=this.hostElement)||void 0===e?void 0:e.parentElement;if(o.tagName.toUpperCase()===this.PARENT_TABS_ELEMENT_TAG_NAME.toUpperCase())return o}get actualValue(){var e;return this.value||(null===(e=this.hostElement)||void 0===e?void 0:e.innerText)}async obtainActualValue(){return this.actualValue}render(){return o(a,{onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},o("slot",null))}get hostElement(){return s(this)}};O.style={default:":host{display:inline-block;user-select:none;cursor:pointer;padding:var(--awesome-ui-whitespace-md);color:var(--awesome-ui-color-main);transition:color 0.3s}:host([selected]){color:var(--awesome-ui-color-primary)}"};const j=class{constructor(o){e(this,o),this.awesomeChange=t(this,"awesomeChange",7),this.CHILD_TAB_TAG_NAME="awesome-tab"}get childTabElements(){var e;return Array.from(null===(e=this.hostElement)||void 0===e?void 0:e.querySelectorAll(this.CHILD_TAB_TAG_NAME))}handleValueChange(e){this.awesomeChange.emit({value:e})}async componentDidLoad(){let e;for(const o of this.childTabElements)if(await o.obtainActualValue()===this.value){e=o;break}this.updateHighlight(e)}async updateSelectedTab(e){this.updateHighlight(e),this.value=await e.obtainActualValue()}async moveHighlightToTabPosition(e){C.updateCSSVariable("--highlight-left-offset",`${e.offsetLeft||0}px`,this.hostElement),C.updateCSSVariable("--highlight-width",`${e.clientWidth||0}px`,this.hostElement)}async resetHighlightPosition(){var e,o;C.updateCSSVariable("--highlight-left-offset",`${(null===(e=this.selectedTabElement)||void 0===e?void 0:e.offsetLeft)||0}px`,this.hostElement),C.updateCSSVariable("--highlight-width",`${(null===(o=this.selectedTabElement)||void 0===o?void 0:o.clientWidth)||0}px`,this.hostElement)}render(){return o(a,null,o("div",{part:"highlight"}),o("awesome-grid",{part:"container",columns:"1fr auto 1fr"},o("awesome-grid-item",{column:2},o("slot",null))))}updateHighlight(e){var o;Boolean(e)&&(this.selectedTabElement=e,null===(o=this.childTabElements)||void 0===o||o.forEach((e=>e.selected=!1)),e.selected=!0,this.moveHighlightToTabPosition(e))}get hostElement(){return s(this)}static get watchers(){return{value:["handleValueChange"]}}};j.style={default:":host{--shadow-offset:var(--awesome-ui-shadow-offset-lg);display:block;position:relative;min-height:calc(var(--shadow-offset) * 2.5);min-width:fit-content;width:100%;padding:0 var(--shadow-offset);box-shadow:0 var(--shadow-offset) var(--awesome-ui-shadow-blur-md) calc(var(--shadow-offset) * -1) var(--awesome-ui-color-dim)}[part='highlight']{position:absolute;left:var(--highlight-left-offset);top:0;right:0;bottom:0;width:var(--highlight-width);box-shadow:0 var(--shadow-offset) var(--awesome-ui-shadow-blur-lg) calc(var(--shadow-offset) * -1) var(--awesome-ui-color-primary);transition-property:left, width;transition-duration:0.3s}[part='container']{position:relative}"};export{l as awesome_alert,h as awesome_backdrop,d as awesome_badge,m as awesome_button,w as awesome_card,c as awesome_divider,v as awesome_flex,p as awesome_flex_item,b as awesome_grid,g as awesome_grid_item,x as awesome_input,f as awesome_item,_ as awesome_progress_bar,z as awesome_range,E as awesome_select,S as awesome_select_option,V as awesome_skeleton,O as awesome_tab,j as awesome_tabs}