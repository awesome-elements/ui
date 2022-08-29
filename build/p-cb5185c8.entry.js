import{r as e,h as a,H as o,g as t,c as s}from"./p-ea3591f3.js";import{d as r,c as i,a as l}from"./p-a6b4a981.js";const n=class{constructor(a){e(this,a),this.TAG_NAME="awesome-alert",this.DEFAULT_BUTTONS=[{name:"OK"}],this.DEFAULT_Z_INDEX=999,this.DEFAULT_ATTACHING_ELEMENT="body",this.buttons=this.DEFAULT_BUTTONS,this.active=!1,this.zIndex=this.DEFAULT_Z_INDEX,this.attachingElement=this.DEFAULT_ATTACHING_ELEMENT}async present(e,a,o=this.DEFAULT_BUTTONS,t=this.DEFAULT_Z_INDEX,s=this.DEFAULT_ATTACHING_ELEMENT){var r;const i=document.createElement(this.TAG_NAME);return i.header=e,i.content=a,i.buttons=o,i.zIndex=t,i.attachingElement=s,null===(r=this.obtainActualAttachingElement(i.attachingElement))||void 0===r||r.append(i),i.active=!0,i.remove}render(){var e,t;return a(o,{hidden:!this.active,style:{zIndex:null===(e=this.zIndex)||void 0===e?void 0:e.toString()}},this.active&&[a("awesome-backdrop",{part:"backdrop",zIndex:0}),a("awesome-flex",{part:"container"},a("awesome-flex-item",{xs:12},a("div",{part:"header"},this.header)),a("awesome-flex-item",{xs:12},a("div",{part:"content",innerHTML:this.content})),a("awesome-flex-item",null,a("awesome-flex",null,a("awesome-flex-item",null),null===(t=this.buttons)||void 0===t?void 0:t.map((e=>a("awesome-flex-item",{xs:"auto"},a("awesome-button",{variant:e.variant||"solid",onClick:this.obtainButtonClickHandler(e),style:{float:"right"}},e.name)))))))])}obtainButtonClickHandler(e){return()=>{var a;this.hostElement.remove(),null===(a=null==e?void 0:e.handler)||void 0===a||a.call(e)}}obtainActualAttachingElement(e){return"string"==typeof e&&(e=document.querySelector(e)),e}get hostElement(){return t(this)}};n.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative}[part='container']{position:fixed;left:50%;top:50%;height:auto;width:auto;transform:translate(-50%, -50%);padding:var(--awesome-ui-default-whitespace-md);background:var(--awesome-ui-default-color-background);border-radius:var(--awesome-ui-default-border-radius-lg);box-shadow:0 var(--awesome-ui-default-shadow-offset-lg) var(--awesome-ui-default-shadow-blur-xl) 0 var(--awesome-ui-default-color-shadow)}[part='header']{font-size:1.5em;padding:var(--awesome-ui-default-whitespace-md) 0}[part='backdrop']{background:var(--awesome-ui-default-color-background);opacity:0.5}"};const d=class{constructor(a){e(this,a),this.zIndex=99}render(){var e;return a(o,{style:{zIndex:null===(e=this.zIndex)||void 0===e?void 0:e.toString()}})}};d.style={default:":host,*{box-sizing:border-box}:host{display:block;position:fixed;left:0;top:0;right:0;bottom:0;background:transparent;opacity:0}"};const h=class{constructor(a){e(this,a)}render(){return a(o,null,a("slot",null))}};function u(e){return a("a",{href:e,style:{display:"block",position:"absolute",left:"0",top:"0",right:"0",bottom:"0"}})}h.style={default:":host,*{box-sizing:border-box}:host{display:inline-block;padding:var(--awesome-ui-default-whitespace-sm);color:var(--awesome-ui-default-color-main);background:var(--awesome-ui-default-color-primary);border-radius:var(--awesome-ui-default-border-radius-lg);user-select:none}"};const w=class{constructor(a){e(this,a),this.variant="solid",this.disabled=!1}render(){return a(o,null,this.href&&u(this.href),a("awesome-grid",{rows:"1fr auto 1fr",columns:"1fr auto 1fr"},a("awesome-grid-item",{row:2,column:2},a("slot",null))))}get hostElement(){return t(this)}};w.style={default:":host,*{box-sizing:border-box}:host{-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;cursor:pointer;user-select:none;margin:var(--awesome-ui-default-whitespace-sm);padding:var(--awesome-ui-default-whitespace-md);border-radius:var(--awesome-ui-default-border-radius-md);overflow:hidden;transition:box-shadow 0.3s}:host([disabled]){pointer-events:none;filter:contrast(0.6)}:host([variant='round']){border-radius:50%}:host([variant='solid']),:host([variant='round']){color:var(--awesome-ui-default-color-contrast);background:var(--awesome-ui-default-color-primary);box-shadow:0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-xs) 0 var(--awesome-ui-default-color-shadow)}:host([variant='solid']:hover),:host([variant='round']:hover){background:var(--awesome-ui-default-color-primary);box-shadow:0 var(--awesome-ui-default-shadow-offset-sm) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}:host([variant='solid']:active),:host([variant='round']:active){background:var(--awesome-ui-default-color-primary);box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-sm) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}:host([variant='hollow']){color:var(--awesome-ui-default-color-primary);box-shadow:0 0 var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-primary)}:host([variant='hollow']:hover){box-shadow:0 0 var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-primary)}:host([variant='hollow']:active){box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-primary)}:host([variant='clear']){color:var(--awesome-ui-default-color-primary)}:host([variant='clear']:hover){box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-xl) -10px var(--awesome-ui-default-color-primary)}:host([variant='clear']:active){box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-xl) 0 var(--awesome-ui-default-color-primary)}:host([variant='link']){color:var(--awesome-ui-default-color-main)}:host([variant='link']:hover){color:var(--awesome-ui-default-color-primary)}:host([variant='link']:active){color:var(--awesome-ui-default-color-dim)}"};const m=class{constructor(a){e(this,a),this.button=!1}render(){return a(o,null,this.href&&u(this.href),a("slot",null))}};m.style={default:":host,*{box-sizing:border-box}:host{-webkit-tap-highlight-color:transparent;display:block;position:relative;margin:var(--awesome-ui-default-whitespace-sm);padding:var(--awesome-ui-default-whitespace-lg);border-radius:var(--awesome-ui-default-border-radius-lg);background:var(--awesome-ui-default-color-background);box-shadow:0 var(--awesome-ui-default-shadow-offset-sm) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow);transition:box-shadow 0.3s}:host([button]){cursor:pointer}:host([button]:hover){box-shadow:0 var(--awesome-ui-default-shadow-offset-sm) var(--awesome-ui-default-shadow-blur-lg) 0 var(--awesome-ui-default-color-shadow)}:host([button]:active){box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-sm) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}"};const c=class{constructor(a){e(this,a)}render(){return a(o,null,a("div",null))}};c.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative;width:100%;height:2px;margin:0.5rem 0}div{--disposition:calc(-1 * (var(--awesome-ui-default-shadow-offset-md) - 1px));display:block;height:10px;background:transparent;margin:0 var(--disposition);box-shadow:0 var(--awesome-ui-default-shadow-offset-md) var(--awesome-ui-default-shadow-blur-sm) var(--disposition) var(--awesome-ui-default-color-main);transform:translateY(-10px)}"};const p=class{constructor(a){e(this,a),this.FLEX_ITEM_TAG_NAME="awesome-flex-item",this.baseFraction=12,this.notifySizeChangeToItemElements=e=>{const a=e.contentRect.width;this.hostElement.querySelectorAll(this.FLEX_ITEM_TAG_NAME).forEach((e=>e.containerSizeChanged(a)))}}baseFractionChanged(e){r.updateCSSVariable("--awesome-flex-base-fraction",e.toString(),this.hostElement)}connectedCallback(){r.observeResize(this.hostElement,[this.notifySizeChangeToItemElements])}disconnectedCallback(){r.unobserveResize(this.hostElement)}componentWillLoad(){this.baseFractionChanged(this.baseFraction)}render(){return a(o,null,a("slot",null))}get hostElement(){return t(this)}static get watchers(){return{baseFraction:["baseFractionChanged"]}}};p.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{--awesome-flex-fraction:'';display:flex;flex-wrap:wrap;width:100%;height:auto}";const v=class{constructor(a){e(this,a),this.containerSize=0}set fraction(e){r.updateCSSVariable("--awesome-flex-fraction",null==e?void 0:e.toString(),this.hostElement),this.updateFlexCSSVariable(e)}get actualXs(){return this.xs}get actualSm(){var e;return null!==(e=this.sm)&&void 0!==e?e:this.actualXs}get actualMd(){var e;return null!==(e=this.md)&&void 0!==e?e:this.actualSm}get actualLg(){var e;return null!==(e=this.lg)&&void 0!==e?e:this.actualMd}get actualXl(){var e;return null!==(e=this.xl)&&void 0!==e?e:this.actualLg}get actualXxl(){var e;return null!==(e=this.xxl)&&void 0!==e?e:this.actualXl}async containerSizeChanged(e){this.containerSize=e,this.updateFraction()}connectedCallback(){this.fraction=this.actualXs}componentWillUpdate(){this.updateFraction()}render(){return a(o,null,a("slot",null))}updateFraction(){switch(!0){case this.containerSize>=this.getViewBreakpoint("xxl"):this.fraction=this.actualXxl;break;case this.containerSize>=this.getViewBreakpoint("xl"):this.fraction=this.actualXl;break;case this.containerSize>=this.getViewBreakpoint("lg"):this.fraction=this.actualLg;break;case this.containerSize>=this.getViewBreakpoint("md"):this.fraction=this.actualMd;break;case this.containerSize>=this.getViewBreakpoint("sm"):this.fraction=this.actualSm;break;default:this.fraction=this.actualXs}}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}-local`)}updateFlexCSSVariable(e){var a,o;switch(r.updateCSSVariable("--awesome-flex-item-max-width","calc(var(--awesome-flex-fraction) / var(--awesome-flex-base-fraction) * 100%)",this.hostElement),!0){case""!==e&&!Number.isNaN(+e):r.updateCSSVariable("--awesome-flex-item-flex","0 0 var(--awesome-flex-item-max-width)",this.hostElement);break;case"auto"===e:r.updateCSSVariable("--awesome-flex-item-flex","0 0 auto",this.hostElement);break;case(null===(a=null==e?void 0:e.toString().match(/[0-9]+fr/))||void 0===a?void 0:a.length)>0:default:const t=+(null===(o=null==e?void 0:e.toString().match(/[0-9]+/))||void 0===o?void 0:o[0])||1;r.updateCSSVariable("--awesome-flex-item-flex",`${t} ${1/t} 0`,this.hostElement)}}get hostElement(){return t(this)}};v.style=":host,*{box-sizing:border-box}:host{display:flex;flex:var(--awesome-flex-item-flex)}";const b=class{constructor(a){e(this,a)}rowsChanged(e){r.updateCSSVariable("--awesome-grid-template-rows",e,this.hostElement)}columnsChanged(e){r.updateCSSVariable("--awesome-grid-template-columns",e,this.hostElement)}rowGapChanged(e){r.updateCSSVariable("--awesome-grid-row-gap",e,this.hostElement)}columnGapChanged(e){r.updateCSSVariable("--awesome-grid-column-gap",e,this.hostElement)}componentDidLoad(){this.rowsChanged(this.rows),this.columnsChanged(this.columns),this.rowGapChanged(this.rowGap),this.columnGapChanged(this.columnGap)}render(){return a(o,null,a("div",{id:"main-container"},a("slot",null)))}get hostElement(){return t(this)}static get watchers(){return{rows:["rowsChanged"],columns:["columnsChanged"],rowGap:["rowGapChanged"],columnGap:["columnGapChanged"]}}};b.style=":host,*{box-sizing:border-box}:host{--awesome-grid-template-rows:'';--awesome-grid-template-columns:'';--awesome-grid-row-gap:'';--awesome-grid-column-gap:'';display:block;height:100%;width:100%}#main-container{display:grid;height:100%;width:100%;grid-template-rows:var(--awesome-grid-template-rows);grid-template-columns:var(--awesome-grid-template-columns);row-gap:var(--awesome-grid-row-gap);column-gap:var(--awesome-grid-column-gap)}";const f=class{constructor(a){e(this,a)}columnChanged(e){r.updateCSSVariable("--awesome-grid-column",null==e?void 0:e.toString(),this.hostElement)}columnSpanChanged(e){r.updateCSSVariable("--awesome-grid-column-span",null==e?void 0:e.toString(),this.hostElement)}rowChanged(e){r.updateCSSVariable("--awesome-grid-row",null==e?void 0:e.toString(),this.hostElement)}rowSpanChanged(e){r.updateCSSVariable("--awesome-grid-row-span",null==e?void 0:e.toString(),this.hostElement)}componentDidLoad(){this.rowChanged(this.row),this.rowSpanChanged(this.rowSpan),this.columnChanged(this.column),this.columnSpanChanged(this.columnSpan)}render(){return a(o,null,a("slot",null))}get hostElement(){return t(this)}static get watchers(){return{column:["columnChanged"],columnSpan:["columnSpanChanged"],row:["rowChanged"],rowSpan:["rowSpanChanged"]}}};f.style=":host,*{box-sizing:border-box}:host{--awesome-grid-row:'';--awesome-grid-row-span:'';--awesome-grid-column:'';--awesome-grid-column-span:'';display:block;height:100%;width:100%;grid-row-start:var(--awesome-grid-row, auto);grid-row-end:span var(--awesome-grid-row-span, 1);grid-column-start:var(--awesome-grid-column, auto);grid-column-end:span var(--awesome-grid-column-span, 1)}";const g=class{constructor(a){e(this,a),this.awesomeChange=s(this,"awesomeChange",7),this.awesomeInput=s(this,"awesomeInput",7),this.type="text",this.disabled=!1,this.handleOnChangeEvent=e=>{this.value=e.currentTarget.value,this.awesomeChange.emit({value:this.value,innerEvent:e})},this.handleOnInputEvent=e=>{this.awesomeInput.emit({innerEvent:e})}}render(){return a(o,null,a("awesome-flex",null,a("awesome-flex-item",{xs:"auto"},a("slot",{name:"before"})),a("awesome-flex-item",null,a("input",{part:"native",value:this.value,disabled:this.disabled,placeholder:this.placeholder,onChange:this.handleOnChangeEvent,onInput:this.handleOnInputEvent})),a("awesome-flex-item",{xs:"auto"},a("slot",{name:"after"}))))}};g.style={default:":host,*{box-sizing:border-box}:host{display:block;cursor:default;width:100%;background:var(--awesome-ui-default-color-background);margin:var(--awesome-ui-default-whitespace-sm) 0;padding:var(--awesome-ui-default-whitespace-md);border-radius:var(--awesome-ui-default-border-radius-md);box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-shadow);transition:box-shadow 0.3s}:host(:hover){box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}:host(:focus-within){box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow),\n    inset 0 calc(var(--awesome-ui-default-shadow-offset-xs) * -1) var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-primary)}:host([disabled]){pointer-events:none;filter:contrast(0.6)}[part='native']{width:100%;outline:none;border:none;font-size:1em;background:none;padding:0 var(--awesome-ui-default-whitespace-md);caret-color:var(--awesome-ui-default-color-primary)}"};const x=class{constructor(a){e(this,a),this.button=!1}render(){return a(o,null,this.href&&u(this.href),a("awesome-flex",null,a("awesome-flex-item",{xs:"auto"},a("slot",{name:"before"})),a("awesome-flex-item",{part:"main"},a("slot",null)),a("awesome-flex-item",{xs:"auto"},a("slot",{name:"after"}))))}};x.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative;width:100%;cursor:default;border-radius:var(--awesome-ui-default-border-radius-md);user-select:none;transition:box-shadow 0.1s}:host([button]){cursor:pointer}:host([button]:hover){box-shadow:0 5px 15px -3px var(--awesome-ui-default-color-shadow)}:host([button]:active){box-shadow:inset 0 2px 30px -5px var(--awesome-ui-default-color-shadow)}awesome-flex-item{padding:var(--awesome-ui-default-whitespace-md) var(--awesome-ui-default-whitespace-sm)}[part='main']{margin:var(--awesome-ui-default-whitespace-sm) 0;padding:var(--awesome-ui-default-whitespace-md);box-shadow:0 10px 5px -10px var(--awesome-ui-default-color-shadow);transition:box-shadow 0.1s}:host([button]:hover) [part='main'],:host([button]:active) [part='main']{box-shadow:none}"};var k=i((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.obtainCSSVariable=a.updateCSSVariable=void 0,a.updateCSSVariable=function(e,a,o){o.style.setProperty(e,null==a?"":a)},a.obtainCSSVariable=function(e,a,o=!0){let t=a.style;return o&&(t=getComputedStyle(a)),t.getPropertyValue(e)}})),y=i((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.observeResize=void 0,a.observeResize=function(e,a){new ResizeObserver((e=>{e.forEach((e=>{a.forEach((a=>a.call(this,e)))}))})).observe(e)}})),C=i((function(e,a){var o=l&&l.__createBinding||(Object.create?function(e,a,o,t){void 0===t&&(t=o),Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[o]}})}:function(e,a,o,t){void 0===t&&(t=o),e[t]=a[o]}),t=l&&l.__exportStar||function(e,a){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(a,t)||o(a,e,t)};Object.defineProperty(a,"__esModule",{value:!0}),t(k,a),t(y,a)}));const z=class{constructor(a){e(this,a),this.progress=0}handleProgressChange(e){C.updateCSSVariable("--progress",e.toString(),this.hostElement)}connectedCallback(){this.handleProgressChange(this.progress)}render(){return a(o,null,a("div",null))}get hostElement(){return t(this)}static get watchers(){return{progress:["handleProgressChange"]}}};z.style={default:":host,*{box-sizing:border-box}:host{--progress:unset;display:block;position:relative;height:4px;width:100%;border-radius:2px;box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-md) 0px var(--awesome-ui-default-color-shadow)}div{position:absolute;height:4px;width:calc(var(--progress) * 100%);max-width:100%;border-radius:2px;background:var(--awesome-ui-default-color-primary);box-shadow:0 0 var(--awesome-ui-default-shadow-blur-md) 1px var(--awesome-ui-default-color-primary)}"};const _=class{constructor(a){e(this,a),this.awesomeChange=s(this,"awesomeChange",7),this.awesomeInput=s(this,"awesomeInput",7),this.min=0,this.max=100,this.step="",this.value=0,this.disabled=!1,this.handleOnChangeEvent=e=>{this.awesomeChange.emit([+e.currentTarget.value,e])},this.handleOnInputEvent=e=>{this.value=+e.currentTarget.value,this.awesomeInput.emit(e)}}handleValueChange(e){C.updateCSSVariable("--awesome-range-handle-position-ratio",""+(e-this.min)/(this.max-this.min),this.hostElement)}connectedCallback(){this.handleValueChange(this.value)}render(){return a(o,null,a("input",{part:"native",type:"range",min:this.min,max:this.max,step:this.step,value:this.value,disabled:this.disabled,onChange:this.handleOnChangeEvent,onInput:this.handleOnInputEvent}))}get hostElement(){return t(this)}static get watchers(){return{value:["handleValueChange"]}}};_.style={default:":host,*{box-sizing:border-box}:host{--awesome-range-handle-position-ratio:unset;--thumb-size:12px;display:inline-block;position:relative;width:100%}[part='native']{--bar-height:2px;position:relative;appearance:none;outline:none;height:0;width:100%;transition:box-shadow 0.3s}:host([disabled]){pointer-events:none}:host([disabled]) [part='native']{filter:contrast(0.6)}[part='native']::before,[part='native']::after{content:'';position:absolute;height:var(--bar-height);max-width:100%;border-radius:var(--bar-height);transition:box-shadow 0.3s}[part='native']::before{left:calc(var(--thumb-size) / 2);width:calc(var(--awesome-range-handle-position-ratio) * (100% - var(--thumb-size)));background:var(--awesome-ui-default-color-primary);box-shadow:0 0 var(--awesome-ui-default-shadow-blur-xs) 0 var(--awesome-ui-default-color-primary)}:host(:hover) [part='native']::before{box-shadow:0 0 var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-primary)}[part='native']::after{z-index:-1;right:calc(var(--thumb-size) / 2);width:calc((100% - var(--thumb-size)) - var(--awesome-range-handle-position-ratio) * (100% - var(--thumb-size)));background:var(--awesome-ui-default-color-dim);box-shadow:0 0 var(--awesome-ui-default-shadow-blur-xs) 0 var(--awesome-ui-default-color-shadow)}:host(:hover) [part='native']::after{box-shadow:0 0 var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}[part='native']::-webkit-slider-thumb{position:relative;appearance:none;cursor:pointer;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background:var(--awesome-ui-default-color-primary);box-shadow:0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-sm) 0px var(--awesome-ui-default-color-shadow);transition-property:box-shadow, border-radius;transition-duration:0.3s}:host(:hover) [part='native']::-webkit-slider-thumb{box-shadow:0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0px var(--awesome-ui-default-color-shadow),\n    0 0 var(--awesome-ui-default-shadow-blur-md) 0px var(--awesome-ui-default-color-primary)}:host(:active) [part='native']::-webkit-slider-thumb{box-shadow:0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0px var(--awesome-ui-default-color-shadow),\n    0 0 var(--awesome-ui-default-shadow-blur-md) 0px var(--awesome-ui-default-color-primary)}[part='native']::-webkit-slider-thumb:active{border-radius:var(--awesome-ui-default-border-radius-md)}"};const E=class{constructor(a){e(this,a),this.heightFactor=1,this.widthFactor=1}heightFactorChanged(e){r.updateCSSVariable("--awesome-height-factor",e.toString(),this.hostElement)}widthFactorChanged(e){r.updateCSSVariable("--awesome-width-factor",e.toString(),this.hostElement)}connectedCallback(){this.heightFactorChanged(this.heightFactor),this.widthFactorChanged(this.widthFactor)}render(){return a(o,null,a("div",{id:"outer-container"},a("div",{id:"inner-container"},a("slot",null))))}get hostElement(){return t(this)}static get watchers(){return{heightFactor:["heightFactorChanged"],widthFactor:["widthFactorChanged"]}}};E.style=":host,*{box-sizing:border-box}:host{--awesome-ratio-box-ratio:calc(var(--awesome-height-factor) / var(--awesome-width-factor));display:block;width:100%}#outer-container{position:relative;width:100%;padding-top:calc(var(--awesome-ratio-box-ratio) * 100%)}#inner-container{position:absolute;top:0;left:0;bottom:0;right:0}::slotted(*){box-sizing:border-box}";const S=class{constructor(a){e(this,a),this.awesomeChange=s(this,"awesomeChange",7),this.CHILD_SELECT_OPTION_TAG_NAME="awesome-select-option",this.expanded=!1,this.dropdownZIndex=99,this.placeholder="No Selection",this.handleBackdropClick=()=>{this.expanded=!1},this.handleToggleValueChange=e=>{this.expanded=e.currentTarget.checked}}handleExpandedChange(e){if(e){const e=window.innerHeight,a=this.hostElement.getBoundingClientRect();C.updateCSSVariable("--dropdown-max-height",e-a.top-a.height+"px",this.hostElement)}}handleValueChanged(e){this.updateOptionHighlights(),this.awesomeChange.emit({value:e})}render(){const e=(this.expanded?this.dropdownZIndex:0)||0;return a(o,null,this.expanded&&a("awesome-backdrop",{part:"backdrop",zIndex:e-1,onClick:this.handleBackdropClick}),a("label",{part:"container",htmlFor:"toggle",style:{zIndex:e.toString()}},a("input",{id:"toggle",type:"checkbox",checked:this.expanded,hidden:!0,onChange:this.handleToggleValueChange}),a("div",{part:"main"},a("span",{class:"text"},this.value||this.placeholder),this.renderArrow()),a("div",{part:"dropdown",class:"popover",style:{zIndex:e.toString()}},a("slot",null))))}renderArrow(){return a("svg",{class:"arrow",width:"1em",height:"1em",viewBox:"0 0 100 100"},a("path",{"stroke-width":"10",stroke:"var(--stroke-color, black)",fill:"transparent",d:"M20,30 L50,70 L 80 30"}))}updateOptionHighlights(){var e;null===(e=this.hostElement)||void 0===e||e.querySelectorAll(this.CHILD_SELECT_OPTION_TAG_NAME).forEach((async e=>{e.selected=await e.obtainActualValue()===this.value}))}get hostElement(){return t(this)}static get watchers(){return{expanded:["handleExpandedChange"],value:["handleValueChanged"]}}};S.style={default:":host,*{box-sizing:border-box}:host{display:block;width:100%;margin:var(--awesome-ui-default-whitespace-sm) 0;user-select:none}:host([disabled]){pointer-events:none}[part='container']{display:inline-block;position:relative;cursor:pointer;width:10rem;margin:var(--awesome-ui-default-whitespace-sm) 0;transition:all 0.3s}[part='main']{display:block;cursor:pointer;min-height:1em;height:100%;width:100%;background:var(--awesome-ui-default-color-background);padding:var(--awesome-ui-default-whitespace-md);border-radius:var(--awesome-ui-default-border-radius-md);box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-shadow);transition:box-shadow 0.3s}[part='main']:hover{box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}#toggle:checked~[part='main']{box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow),\n    inset 0 calc(var(--awesome-ui-default-shadow-offset-xs) * -1) var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-primary)}:host(:not([value])) [part='main']>.text{color:var(--awesome-ui-default-color-dim)}[part='main']>.arrow{float:right;transition:all 0.3s}[part='container']:hover [part='main']>.arrow{--stroke-color:var(--awesome-ui-default-color-primary)}#toggle:checked~[part='main']>.arrow{transform:rotate(180deg)}[part='dropdown']{position:absolute;overflow-x:hidden;overflow-y:auto;max-height:calc(var(--dropdown-max-height) - 1rem);height:auto;width:10rem;top:2.5rem;left:0;opacity:0;transform:scaleY(0);transform-origin:top;z-index:999;transition:all 0.3s}#toggle:checked~[part='dropdown']{transform:scaleY(1);opacity:1}:host([disabled]) [part='main']{filter:contrast(0.6)}.popover{padding:var(--awesome-ui-default-whitespace-md);background:var(--awesome-ui-default-color-background);border-radius:var(--awesome-ui-default-border-radius-lg);box-shadow:0 var(--awesome-ui-default-shadow-offset-lg) var(--awesome-ui-default-shadow-blur-xl) 0 var(--awesome-ui-default-color-shadow)}"};const F=class{constructor(a){e(this,a),this.PARENT_SELECT_ELEMENT_TAG_NAME="awesome-select",this.selected=!1,this.select=()=>{const e=this.parentSelectElement;e&&(e.value=this.actualValue)}}get parentSelectElement(){var e;const a=null===(e=this.hostElement)||void 0===e?void 0:e.parentElement;if(a.tagName.toUpperCase()===this.PARENT_SELECT_ELEMENT_TAG_NAME.toUpperCase())return a}get actualValue(){var e;return this.value||(null===(e=this.hostElement)||void 0===e?void 0:e.innerText)}async obtainActualValue(){return this.actualValue}render(){return a(o,null,a("awesome-item",{id:"item",button:!0,onClick:this.select},a("slot",null)))}get hostElement(){return t(this)}};F.style={default:":host,*{box-sizing:border-box}:host{display:block;width:auto}:host([selected]){color:var(--awesome-ui-default-color-primary)}"};const O=class{constructor(a){e(this,a)}render(){return a(o,null,a("slot",null))}};O.style={default:":host,*{box-sizing:border-box}:host{display:block;position:relative;height:100%;width:100%;margin:var(--awesome-ui-default-whitespace-sm);border-radius:var(--awesome-ui-default-border-radius-sm);box-shadow:0 0 var(--awesome-ui-default-shadow-blur-xxl) 0 var(--awesome-ui-default-color-shadow);animation:skeleton 2s infinite}@keyframes skeleton{0%{box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-xxl) 0 var(--awesome-ui-default-color-shadow)}50%{box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-xxl) -10px var(--awesome-ui-default-color-shadow)}100%{box-shadow:inset 0 0 var(--awesome-ui-default-shadow-blur-xxl) 0 var(--awesome-ui-default-color-shadow)}}"};const V=class{constructor(a){e(this,a)}render(){return a(o,null,a("awesome-ratio-box",{part:"ring",heightFactor:1,widthFactor:1}))}};V.style={default:":host{display:block;width:5rem}[part='ring']{border-radius:50%;width:100%;box-shadow:0 var(--awesome-ui-default-shadow-offset-sm) var(--awesome-ui-default-shadow-blur-sm) -1px var(--awesome-ui-default-color-primary),\n    inset 0 calc(var(--awesome-ui-default-shadow-offset-sm) * -1) var(--awesome-ui-default-shadow-blur-sm) -1px var(--awesome-ui-default-color-primary);animation:rotate 1s linear infinite}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"};const I=class{constructor(a){e(this,a),this.PARENT_TABS_ELEMENT_TAG_NAME="awesome-tabs",this.selected=!1,this.handleClick=()=>{var e;null===(e=this.parentTabsElement)||void 0===e||e.updateSelectedTab(this.hostElement)},this.handleMouseOver=()=>{var e;null===(e=this.parentTabsElement)||void 0===e||e.moveHighlightToTabPosition(this.hostElement)},this.handleMouseOut=()=>{var e;null===(e=this.parentTabsElement)||void 0===e||e.resetHighlightPosition()}}get parentTabsElement(){var e;const a=null===(e=this.hostElement)||void 0===e?void 0:e.parentElement;if(a.tagName.toUpperCase()===this.PARENT_TABS_ELEMENT_TAG_NAME.toUpperCase())return a}get actualValue(){var e;return this.value||(null===(e=this.hostElement)||void 0===e?void 0:e.innerHTML)}async obtainActualValue(){return this.actualValue}render(){return a(o,{onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},a("slot",null))}get hostElement(){return t(this)}};I.style={default:":host,*{box-sizing:border-box}:host{display:inline-block;user-select:none;cursor:pointer;padding:var(--awesome-ui-default-whitespace-md);color:var(--awesome-ui-default-color-main);transition:color 0.3s}:host([selected]){color:var(--awesome-ui-default-color-primary)}"};const L=class{constructor(a){e(this,a),this.awesomeChange=s(this,"awesomeChange",7),this.CHILD_TAB_TAG_NAME="awesome-tab",this.orientation="down"}get childTabElements(){var e;return Array.from(null===(e=this.hostElement)||void 0===e?void 0:e.querySelectorAll(this.CHILD_TAB_TAG_NAME))}handleValueChange(e){this.awesomeChange.emit({value:e})}async componentDidLoad(){let e;for(const a of this.childTabElements)if(await a.obtainActualValue()===this.value){e=a;break}this.updateHighlight(e)}async updateSelectedTab(e){this.updateHighlight(e),this.value=await e.obtainActualValue()}async moveHighlightToTabPosition(e){C.updateCSSVariable("--highlight-left-offset",`${e.offsetLeft||0}px`,this.hostElement),C.updateCSSVariable("--highlight-width",`${e.clientWidth||0}px`,this.hostElement)}async resetHighlightPosition(){var e,a;C.updateCSSVariable("--highlight-left-offset",`${(null===(e=this.selectedTabElement)||void 0===e?void 0:e.offsetLeft)||0}px`,this.hostElement),C.updateCSSVariable("--highlight-width",`${(null===(a=this.selectedTabElement)||void 0===a?void 0:a.clientWidth)||0}px`,this.hostElement)}render(){return a(o,null,a("div",{part:"edge"}),a("div",{part:"highlight"}),a("awesome-grid",{part:"container",columns:"1fr auto 1fr"},a("awesome-grid-item",{column:2},a("slot",null))))}updateHighlight(e){var a;Boolean(e)&&(this.selectedTabElement=e,null===(a=this.childTabElements)||void 0===a||a.forEach((e=>e.selected=!1)),e.selected=!0,this.moveHighlightToTabPosition(e))}get hostElement(){return t(this)}static get watchers(){return{value:["handleValueChange"]}}};L.style={default:":host,*{box-sizing:border-box}:host{--shadow-offset:var(--awesome-ui-default-shadow-offset-lg);display:block;position:relative;min-height:calc(var(--shadow-offset) * 2.5);min-width:fit-content;width:100%;padding:0 var(--shadow-offset)}[part='highlight'],[part='edge']{pointer-events:none;position:absolute;left:0;top:0;right:0;bottom:0}:host([orientation='up']) [part='highlight'],:host([orientation='up']) [part='edge']{transform:translateY(-100%)}:host([orientation='down']) [part='highlight'],:host([orientation='down']) [part='edge']{transform:translateY(100%)}:host([orientation='up']) [part='edge']{box-shadow:0 var(--shadow-offset) var(--awesome-ui-default-shadow-blur-md) calc(var(--shadow-offset) * -1) var(--awesome-ui-default-color-shadow)}:host([orientation='down']) [part='edge']{box-shadow:0 calc(var(--shadow-offset) * -1) var(--awesome-ui-default-shadow-blur-md) calc(var(--shadow-offset) * -1) var(--awesome-ui-default-color-shadow)}[part='highlight']{left:calc(var(--highlight-left-offset) + var(--shadow-offset));width:var(--highlight-width);transition-property:left, width;transition-duration:0.3s}:host([orientation='up']) [part='highlight']{box-shadow:0 var(--shadow-offset) var(--awesome-ui-default-shadow-blur-lg) calc(var(--shadow-offset) * -1) var(--awesome-ui-default-color-primary)}:host([orientation='down']) [part='highlight']{box-shadow:0 calc(var(--shadow-offset) * -1) var(--awesome-ui-default-shadow-blur-lg) calc(var(--shadow-offset) * -1) var(--awesome-ui-default-color-primary)}[part='container']{position:relative}"};const M=class{constructor(a){e(this,a),this.awesomeChange=s(this,"awesomeChange",7),this.variant="checkbox",this.checked=!1,this.disabled=!1,this.handleToggleChange=e=>{var a;this.checked=null===(a=e.currentTarget)||void 0===a?void 0:a.checked,this.awesomeChange.emit({checked:this.checked,innerEvent:e})}}render(){return a(o,null,a("input",{id:"native",type:"checkbox",checked:this.checked,disabled:this.disabled,hidden:!0,onChange:this.handleToggleChange}),a("label",{part:"container",htmlFor:"native"},this.renderToggle(),a("slot",null)))}renderToggle(){let e;switch(this.variant){case"checkbox":e=a("svg",{class:"check-mark",viewBox:"0 0 100 100"},a("path",{d:"M10,55L40,80L90,20",fill:"none",stroke:"var(--awesome-ui-default-color-contrast)","stroke-width":20}));break;case"switch":e=a("div",{class:"thumb"})}return a("div",{part:"toggle"},e)}};M.style={default:":host,*{box-sizing:border-box}:host{display:inline-block}[part='container']{display:block;position:relative;cursor:pointer}:host([disabled]) [part='container']{pointer-events:none}[part='toggle']{display:inline-block;position:relative;margin-right:var(--awesome-ui-default-whitespace-sm);background:var(--awesome-ui-default-color-primary);box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-shadow);transition-property:background, box-shadow;transition-duration:0.3s}[part='toggle']:hover{box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-md) 0 var(--awesome-ui-default-color-shadow)}[part='toggle']:active{box-shadow:inset 0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-lg) 0 var(--awesome-ui-default-color-primary)}:host(:not([checked])) [part='toggle']{background:var(--awesome-ui-default-color-background)}:host([disabled]) [part='toggle']{filter:contrast(0.6)}:host([variant='checkbox']) [part='toggle']{height:1rem;width:1rem;border-radius:var(--awesome-ui-default-border-radius-md)}:host([variant='switch']) [part='toggle']{height:1rem;width:2rem;border-radius:100vmax}.check-mark{opacity:1;transform:scale(0.8);transition-property:opacity, transform;transition-duration:0.3s}:host(:not([checked])) .check-mark{opacity:0;transform:scale(0)}.thumb{--scale:0.8;position:absolute;left:0;top:0;height:1rem;width:1rem;border-radius:50%;background:var(--awesome-ui-default-color-contrast);transform:scale(var(--scale)) translateX(calc(100% / var(--scale)));transition:transform 0.3s}[part='toggle']:hover .thumb{box-shadow:0 var(--awesome-ui-default-shadow-offset-xs) var(--awesome-ui-default-shadow-blur-sm) 0 var(--awesome-ui-default-color-shadow)}:host(:not([checked])) .thumb{background:var(--awesome-ui-default-color-primary);transform:scale(var(--scale))}"};const j=class{constructor(a){e(this,a),this.updateContentMaxWidthForViewBreakpoint=e=>{const a=e.contentRect.width;switch(!0){case a>=this.getOuterBreakpoint("xxl"):r.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xxl-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("xl"):r.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xl-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("lg"):r.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-lg-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("md"):r.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-md-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("sm"):r.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-sm-local)",this.hostElement);break;default:r.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xs-local)",this.hostElement)}}}connectedCallback(){r.observeResize(this.hostElement,[this.updateContentMaxWidthForViewBreakpoint])}disconnectedCallback(){r.unobserveResize(this.hostElement)}render(){return a(o,null,a("div",{part:"inner"},a("slot",null)))}getOuterBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-wrap-outer-breakpoint-${e}-in-px-local`)}get hostElement(){return t(this)}};j.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{--awesome-wrap-outer-breakpoint-xs-in-px-local:var(--awesome-wrap-outer-breakpoint-xs-in-px, 0);--awesome-wrap-outer-breakpoint-sm-in-px-local:var(--awesome-wrap-outer-breakpoint-sm-in-px, 576);--awesome-wrap-outer-breakpoint-md-in-px-local:var(--awesome-wrap-outer-breakpoint-md-in-px, 768);--awesome-wrap-outer-breakpoint-lg-in-px-local:var(--awesome-wrap-outer-breakpoint-lg-in-px, 992);--awesome-wrap-outer-breakpoint-xl-in-px-local:var(--awesome-wrap-outer-breakpoint-xl-in-px, 1200);--awesome-wrap-outer-breakpoint-xxl-in-px-local:var(--awesome-wrap-outer-breakpoint-xxl-in-px, 1400);--awesome-wrap-inner-breakpoint-xs-local:var(--awesome-wrap-inner-breakpoint-xs, 100%);--awesome-wrap-inner-breakpoint-sm-local:var(--awesome-wrap-inner-breakpoint-sm, calc(var(--awesome-view-breakpoint-sm-local) * 1px));--awesome-wrap-inner-breakpoint-md-local:var(--awesome-wrap-inner-breakpoint-md, calc(var(--awesome-view-breakpoint-md-local) * 1px));--awesome-wrap-inner-breakpoint-lg-local:var(--awesome-wrap-inner-breakpoint-lg, calc(var(--awesome-view-breakpoint-lg-local) * 1px));--awesome-wrap-inner-breakpoint-xl-local:var(--awesome-wrap-inner-breakpoint-xl, calc(var(--awesome-view-breakpoint-xl-local) * 1px));--awesome-wrap-inner-breakpoint-xxl-local:var(--awesome-wrap-inner-breakpoint-xxl, calc(var(--awesome-view-breakpoint-xxl-local) * 1px));display:block}[part='inner']{max-width:var(--content-max-width);margin:auto}";export{n as awesome_alert,d as awesome_backdrop,h as awesome_badge,w as awesome_button,m as awesome_card,c as awesome_divider,p as awesome_flex,v as awesome_flex_item,b as awesome_grid,f as awesome_grid_item,g as awesome_input,x as awesome_item,z as awesome_progress_bar,_ as awesome_range,E as awesome_ratio_box,S as awesome_select,F as awesome_select_option,O as awesome_skeleton,V as awesome_spinner,I as awesome_tab,L as awesome_tabs,M as awesome_toggle,j as awesome_wrap}