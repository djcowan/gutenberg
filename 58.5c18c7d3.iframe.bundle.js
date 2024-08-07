"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[58],{"./packages/components/build-module/grid/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>grid_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js");const ALIGNMENTS={bottom:{alignItems:"flex-end",justifyContent:"center"},bottomLeft:{alignItems:"flex-start",justifyContent:"flex-end"},bottomRight:{alignItems:"flex-end",justifyContent:"flex-end"},center:{alignItems:"center",justifyContent:"center"},spaced:{alignItems:"center",justifyContent:"space-between"},left:{alignItems:"center",justifyContent:"flex-start"},right:{alignItems:"center",justifyContent:"flex-end"},stretch:{alignItems:"stretch"},top:{alignItems:"flex-start",justifyContent:"center"},topLeft:{alignItems:"flex-start",justifyContent:"flex-start"},topRight:{alignItems:"flex-start",justifyContent:"flex-end"}};var use_responsive_value=__webpack_require__("./packages/components/build-module/utils/use-responsive-value.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");function useGrid(props){const{align,alignment,className,columnGap,columns=2,gap=3,isInline=!1,justify,rowGap,rows,templateColumns,templateRows,...otherProps}=(0,use_context_system.y)(props,"Grid"),columnsAsArray=Array.isArray(columns)?columns:[columns],column=(0,use_responsive_value.V)(columnsAsArray),rowsAsArray=Array.isArray(rows)?rows:[rows],row=(0,use_responsive_value.V)(rowsAsArray),gridTemplateColumns=templateColumns||!!columns&&`repeat( ${column}, 1fr )`,gridTemplateRows=templateRows||!!rows&&`repeat( ${row}, 1fr )`,cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>{const alignmentProps=function getAlignmentProps(alignment){return alignment?ALIGNMENTS[alignment]:{}}(alignment),gridClasses=(0,emotion_react_browser_esm.iv)({alignItems:align,display:isInline?"inline-grid":"grid",gap:`calc( ${config_values.Z.gridBase} * ${gap} )`,gridTemplateColumns:gridTemplateColumns||void 0,gridTemplateRows:gridTemplateRows||void 0,gridRowGap:rowGap,gridColumnGap:columnGap,justifyContent:justify,verticalAlign:isInline?"middle":void 0,...alignmentProps},"","","","");return cx(gridClasses,className)}),[align,alignment,className,columnGap,cx,gap,gridTemplateColumns,gridTemplateRows,isInline,justify,rowGap])}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const grid_component=(0,context_connect.Iq)((function UnconnectedGrid(props,forwardedRef){const gridProps=useGrid(props);return(0,jsx_runtime.jsx)(component.Z,{...gridProps,ref:forwardedRef})}),"Grid")},"./packages/components/build-module/heading/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>heading_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),hook=__webpack_require__("./packages/components/build-module/text/hook.js"),font_size=__webpack_require__("./packages/components/build-module/utils/font-size.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const heading_component=(0,context_connect.Iq)((function UnconnectedHeading(props,forwardedRef){const headerProps=function useHeading(props){const{as:asProp,level=2,color=colors_values.D.gray[900],isBlock=!0,weight=config_values.Z.fontWeightHeading,...otherProps}=(0,use_context_system.y)(props,"Heading"),as=asProp||`h${level}`,a11yProps={};return"string"==typeof as&&"h"!==as[0]&&(a11yProps.role="heading",a11yProps["aria-level"]="string"==typeof level?parseInt(level):level),{...(0,hook.Z)({color,isBlock,weight,size:(0,font_size.gZ)(level),...otherProps}),...a11yProps,as}}(props);return(0,jsx_runtime.jsx)(component.Z,{...headerProps,ref:forwardedRef})}),"Heading")},"./packages/components/build-module/menu-group/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=function MenuGroup(props){const{children,className="",label,hideSeparator}=props,instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)(MenuGroup);if(!_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Children.count(children))return null;const labelId=`components-menu-group-label-${instanceId}`,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(className,"components-menu-group",{"has-hidden-separator":hideSeparator});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classNames,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"components-menu-group__label",id:labelId,"aria-hidden":"true",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{role:"group","aria-labelledby":label?labelId:void 0,children})]})}},"./packages/components/build-module/menu-item/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_shortcut__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/shortcut/index.js"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/button/index.js"),_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedMenuItem(props,ref){let{children,info,className,icon,iconPosition="right",shortcut,isSelected,role="menuitem",suffix,...buttonProps}=props;return className=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("components-menu-item__button",className),info&&(children=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"components-menu-item__info-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"components-menu-item__item",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"components-menu-item__info",children:info})]})),icon&&"string"!=typeof icon&&(icon=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(icon,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("components-menu-items__item-icon",{"has-icon-right":"right"===iconPosition})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{ref,"aria-checked":"menuitemcheckbox"===role||"menuitemradio"===role?isSelected:void 0,role,icon:"left"===iconPosition?icon:void 0,className,...buttonProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"components-menu-item__item",children}),!suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"components-menu-item__shortcut",shortcut}),!suffix&&icon&&"right"===iconPosition&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_5__.Z,{icon}),suffix]})}))},"./packages/components/build-module/tools-panel/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useToolsPanelContext,h:()=>ToolsPanelContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const noop=()=>{},ToolsPanelContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({menuItems:{default:{},optional:{}},hasMenuItems:!1,isResetting:!1,shouldRenderPlaceholderItems:!1,registerPanelItem:noop,deregisterPanelItem:noop,flagItemCustomization:noop,registerResetAllFilter:noop,deregisterResetAllFilter:noop,areAllOptionalControlsHidden:!0}),useToolsPanelContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToolsPanelContext)},"./packages/components/build-module/tools-panel/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DK:()=>ToolsPanel,FN:()=>ToolsPanelHeader,Ju:()=>ResetLabel,VY:()=>ToolsPanelItem,Y3:()=>DefaultControlsItem,cg:()=>ToolsPanelWithInnerWrapper,d5:()=>ToolsPanelHeading,h_:()=>DropdownMenu,rg:()=>ToolsPanelItemPlaceholder,sq:()=>ToolsPanelHiddenInnerWrapper});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_base_control_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/base-control/styles/base-control-styles.js"),_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/utils/config-values.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/utils/rtl.js"),_utils_space__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/utils/space.js");const toolsPanelGrid={columns:columns=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("grid-template-columns:",`repeat( ${columns}, minmax(0, 1fr) )`,";","","",""),spacing:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("column-gap:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(2),";row-gap:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(4),";","","",""),item:{fullWidth:{name:"18iuzk9",styles:"grid-column:1/-1"}}},ToolsPanel=columns=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(toolsPanelGrid.columns(columns)," ",toolsPanelGrid.spacing," border-top:",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.borderWidth," solid ",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[300],";margin-top:-1px;padding:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(4),";","","",""),ToolsPanelWithInnerWrapper=columns=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(">div:not( :first-of-type ){display:grid;",toolsPanelGrid.columns(columns)," ",toolsPanelGrid.spacing," ",toolsPanelGrid.item.fullWidth,";}","","",""),ToolsPanelHiddenInnerWrapper={name:"huufmu",styles:">div:not( :first-of-type ){display:none;}"},ToolsPanelHeader=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(toolsPanelGrid.item.fullWidth," gap:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(2),";.components-dropdown-menu{margin:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(-1)," 0;line-height:0;}&&&& .components-dropdown-menu__toggle{padding:0;min-width:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(6),";}","","",""),ToolsPanelHeading={name:"1pmxm02",styles:"font-size:inherit;font-weight:500;line-height:normal;&&{margin:0;}"},ToolsPanelItem=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(toolsPanelGrid.item.fullWidth,"&>div,&>fieldset{padding-bottom:0;margin-bottom:0;max-width:100%;}&& ",_base_control_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_5__.im,"{margin-bottom:0;",_base_control_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_5__.ob,":last-child{margin-bottom:0;}}",_base_control_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_5__.vB,"{margin-bottom:0;}&& ",_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_6__.ub,"{label{line-height:1.4em;}}","","",""),ToolsPanelItemPlaceholder={name:"eivff4",styles:"display:none"},DropdownMenu={name:"16gsvie",styles:"min-width:200px"},ResetLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"ews648u0"})("color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.theme.accentDarker10,";font-size:11px;font-weight:500;line-height:1.4;",(0,_utils__WEBPACK_IMPORTED_MODULE_7__.b)({marginLeft:(0,_utils_space__WEBPACK_IMPORTED_MODULE_2__.D)(3)})," text-transform:uppercase;"),DefaultControlsItem=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)("color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[900],";&&[aria-disabled='true']{color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[700],";opacity:1;&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[700],";}",ResetLabel,"{opacity:0.3;}}","","","")},"./packages/components/build-module/tools-panel/tools-panel-item/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tools_panel_item_component});var use_previous=__webpack_require__("./packages/compose/build-module/hooks/use-previous/index.js"),react=__webpack_require__("./node_modules/react/index.js"),styles=__webpack_require__("./packages/components/build-module/tools-panel/styles.js"),context=__webpack_require__("./packages/components/build-module/tools-panel/context.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");const noop=()=>{};var component=__webpack_require__("./packages/components/build-module/view/component.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const tools_panel_item_component=(0,context_connect.Iq)(((props,forwardedRef)=>{const{children,isShown,shouldRenderPlaceholder,...toolsPanelItemProps}=function useToolsPanelItem(props){const{className,hasValue,isShownByDefault=!1,label,panelId,resetAllFilter=noop,onDeselect,onSelect,...otherProps}=(0,use_context_system.y)(props,"ToolsPanelItem"),{panelId:currentPanelId,menuItems,registerResetAllFilter,deregisterResetAllFilter,registerPanelItem,deregisterPanelItem,flagItemCustomization,isResetting,shouldRenderPlaceholderItems:shouldRenderPlaceholder,firstDisplayedItem,lastDisplayedItem,__experimentalFirstVisibleItemClass,__experimentalLastVisibleItemClass}=(0,context.K)(),hasValueCallback=(0,react.useCallback)(hasValue,[panelId]),resetAllFilterCallback=(0,react.useCallback)(resetAllFilter,[panelId]),previousPanelId=(0,use_previous.Z)(currentPanelId),hasMatchingPanel=currentPanelId===panelId||null===currentPanelId;(0,react.useLayoutEffect)((()=>(hasMatchingPanel&&null!==previousPanelId&&registerPanelItem({hasValue:hasValueCallback,isShownByDefault,label,panelId}),()=>{(null===previousPanelId&&currentPanelId||currentPanelId===panelId)&&deregisterPanelItem(label)})),[currentPanelId,hasMatchingPanel,isShownByDefault,label,hasValueCallback,panelId,previousPanelId,registerPanelItem,deregisterPanelItem]),(0,react.useEffect)((()=>(hasMatchingPanel&&registerResetAllFilter(resetAllFilterCallback),()=>{hasMatchingPanel&&deregisterResetAllFilter(resetAllFilterCallback)})),[registerResetAllFilter,deregisterResetAllFilter,resetAllFilterCallback,hasMatchingPanel]);const menuGroup=isShownByDefault?"default":"optional",isMenuItemChecked=menuItems?.[menuGroup]?.[label],wasMenuItemChecked=(0,use_previous.Z)(isMenuItemChecked),isRegistered=void 0!==menuItems?.[menuGroup]?.[label],isValueSet=hasValue();(0,react.useEffect)((()=>{(isShownByDefault||isValueSet)&&flagItemCustomization(isValueSet,label,menuGroup)}),[isValueSet,menuGroup,label,flagItemCustomization,isShownByDefault]),(0,react.useEffect)((()=>{isRegistered&&!isResetting&&hasMatchingPanel&&(!isMenuItemChecked||isValueSet||wasMenuItemChecked||onSelect?.(),!isMenuItemChecked&&isValueSet&&wasMenuItemChecked&&onDeselect?.())}),[hasMatchingPanel,isMenuItemChecked,isRegistered,isResetting,isValueSet,wasMenuItemChecked,onSelect,onDeselect]);const isShown=isShownByDefault?void 0!==menuItems?.[menuGroup]?.[label]:isMenuItemChecked,cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>{const shouldApplyPlaceholderStyles=shouldRenderPlaceholder&&!isShown,firstItemStyle=firstDisplayedItem===label&&__experimentalFirstVisibleItemClass,lastItemStyle=lastDisplayedItem===label&&__experimentalLastVisibleItemClass;return cx(styles.VY,shouldApplyPlaceholderStyles&&styles.rg,!shouldApplyPlaceholderStyles&&className,firstItemStyle,lastItemStyle)}),[isShown,shouldRenderPlaceholder,className,cx,firstDisplayedItem,lastDisplayedItem,__experimentalFirstVisibleItemClass,__experimentalLastVisibleItemClass,label]);return{...otherProps,isShown,shouldRenderPlaceholder,className:classes}}(props);return isShown?(0,jsx_runtime.jsx)(component.Z,{...toolsPanelItemProps,ref:forwardedRef,children}):shouldRenderPlaceholder?(0,jsx_runtime.jsx)(component.Z,{...toolsPanelItemProps,ref:forwardedRef}):null}),"ToolsPanelItem")},"./packages/components/build-module/tools-panel/tools-panel/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tools_panel_component});var build_module=__webpack_require__("./packages/a11y/build-module/index.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js"),plus=__webpack_require__("./packages/icons/build-module/library/plus.js"),more_vertical=__webpack_require__("./packages/icons/build-module/library/more-vertical.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),dropdown_menu=__webpack_require__("./packages/components/build-module/dropdown-menu/index.js"),menu_group=__webpack_require__("./packages/components/build-module/menu-group/index.js"),menu_item=__webpack_require__("./packages/components/build-module/menu-item/index.js"),component=__webpack_require__("./packages/components/build-module/h-stack/component.js"),heading_component=__webpack_require__("./packages/components/build-module/heading/component.js"),react=__webpack_require__("./node_modules/react/index.js"),styles=__webpack_require__("./packages/components/build-module/tools-panel/styles.js"),context=__webpack_require__("./packages/components/build-module/tools-panel/context.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultControlsGroup=({itemClassName,items,toggleItem})=>{if(!items.length)return null;const resetSuffix=(0,jsx_runtime.jsx)(styles.Ju,{"aria-hidden":!0,children:(0,i18n_build_module.__)("Reset")});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map((([label,hasValue])=>hasValue?(0,jsx_runtime.jsx)(menu_item.Z,{className:itemClassName,role:"menuitem",label:(0,i18n_build_module.gB)((0,i18n_build_module.__)("Reset %s"),label),onClick:()=>{toggleItem(label),(0,build_module.D)((0,i18n_build_module.gB)((0,i18n_build_module.__)("%s reset to default"),label),"assertive")},suffix:resetSuffix,children:label},label):(0,jsx_runtime.jsx)(menu_item.Z,{icon:check.Z,className:itemClassName,role:"menuitemcheckbox",isSelected:!0,"aria-disabled":!0,children:label},label)))})},OptionalControlsGroup=({items,toggleItem})=>items.length?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map((([label,isSelected])=>{const itemLabel=isSelected?(0,i18n_build_module.gB)((0,i18n_build_module.__)("Hide and reset %s"),label):(0,i18n_build_module.gB)((0,i18n_build_module.__)("Show %s"),label);return(0,jsx_runtime.jsx)(menu_item.Z,{icon:isSelected?check.Z:null,isSelected,label:itemLabel,onClick:()=>{isSelected?(0,build_module.D)((0,i18n_build_module.gB)((0,i18n_build_module.__)("%s hidden and reset to default"),label),"assertive"):(0,build_module.D)((0,i18n_build_module.gB)((0,i18n_build_module.__)("%s is now visible"),label),"assertive"),toggleItem(label)},role:"menuitemcheckbox",children:label},label)}))}):null,tools_panel_header_component=(0,context_connect.Iq)(((props,forwardedRef)=>{const{areAllOptionalControlsHidden,defaultControlsItemClassName,dropdownMenuClassName,hasMenuItems,headingClassName,headingLevel=2,label:labelText,menuItems,resetAll,toggleItem,dropdownMenuProps,...headerProps}=function useToolsPanelHeader(props){const{className,headingLevel=2,...otherProps}=(0,use_context_system.y)(props,"ToolsPanelHeader"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(styles.FN,className)),[className,cx]),dropdownMenuClassName=(0,react.useMemo)((()=>cx(styles.h_)),[cx]),headingClassName=(0,react.useMemo)((()=>cx(styles.d5)),[cx]),defaultControlsItemClassName=(0,react.useMemo)((()=>cx(styles.Y3)),[cx]),{menuItems,hasMenuItems,areAllOptionalControlsHidden}=(0,context.K)();return{...otherProps,areAllOptionalControlsHidden,defaultControlsItemClassName,dropdownMenuClassName,hasMenuItems,headingClassName,headingLevel,menuItems,className:classes}}(props);if(!labelText)return null;const defaultItems=Object.entries(menuItems?.default||{}),optionalItems=Object.entries(menuItems?.optional||{}),dropDownMenuIcon=areAllOptionalControlsHidden?plus.Z:more_vertical.Z,dropDownMenuLabelText=(0,i18n_build_module.gB)((0,i18n_build_module._x)("%s options","Button label to reveal tool panel options"),labelText),dropdownMenuDescriptionText=areAllOptionalControlsHidden?(0,i18n_build_module.__)("All options are currently hidden"):void 0,canResetAll=[...defaultItems,...optionalItems].some((([,isSelected])=>isSelected));return(0,jsx_runtime.jsxs)(component.Z,{...headerProps,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(heading_component.Z,{level:headingLevel,className:headingClassName,children:labelText}),hasMenuItems&&(0,jsx_runtime.jsx)(dropdown_menu.Z,{...dropdownMenuProps,icon:dropDownMenuIcon,label:dropDownMenuLabelText,menuProps:{className:dropdownMenuClassName},toggleProps:{size:"small",description:dropdownMenuDescriptionText},children:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(menu_group.Z,{label:labelText,children:[(0,jsx_runtime.jsx)(DefaultControlsGroup,{items:defaultItems,toggleItem,itemClassName:defaultControlsItemClassName}),(0,jsx_runtime.jsx)(OptionalControlsGroup,{items:optionalItems,toggleItem})]}),(0,jsx_runtime.jsx)(menu_group.Z,{children:(0,jsx_runtime.jsx)(menu_item.Z,{"aria-disabled":!canResetAll,variant:"tertiary",onClick:()=>{canResetAll&&(resetAll(),(0,build_module.D)((0,i18n_build_module.__)("All options reset"),"assertive"))},children:(0,i18n_build_module.__)("Reset all")})})]})})]})}),"ToolsPanelHeader"),generateMenuItems=({panelItems,shouldReset,currentMenuItems,menuItemOrder})=>{const newMenuItems={default:{},optional:{}},menuItems={default:{},optional:{}};return panelItems.forEach((({hasValue,isShownByDefault,label})=>{const group=isShownByDefault?"default":"optional",existingItemValue=currentMenuItems?.[group]?.[label],value=existingItemValue||hasValue();newMenuItems[group][label]=!shouldReset&&value})),menuItemOrder.forEach((key=>{newMenuItems.default.hasOwnProperty(key)&&(menuItems.default[key]=newMenuItems.default[key]),newMenuItems.optional.hasOwnProperty(key)&&(menuItems.optional[key]=newMenuItems.optional[key])})),Object.keys(newMenuItems.default).forEach((key=>{menuItems.default.hasOwnProperty(key)||(menuItems.default[key]=newMenuItems.default[key])})),Object.keys(newMenuItems.optional).forEach((key=>{menuItems.optional.hasOwnProperty(key)||(menuItems.optional[key]=newMenuItems.optional[key])})),menuItems},isMenuItemTypeEmpty=obj=>obj&&0===Object.keys(obj).length;var grid_component=__webpack_require__("./packages/components/build-module/grid/component.js");const tools_panel_component=(0,context_connect.Iq)(((props,forwardedRef)=>{const{children,label,panelContext,resetAllItems,toggleItem,headingLevel,dropdownMenuProps,...toolsPanelProps}=function useToolsPanel(props){const{className,headingLevel=2,resetAll,panelId,hasInnerWrapper=!1,shouldRenderPlaceholderItems=!1,__experimentalFirstVisibleItemClass,__experimentalLastVisibleItemClass,...otherProps}=(0,use_context_system.y)(props,"ToolsPanel"),isResetting=(0,react.useRef)(!1),wasResetting=isResetting.current;(0,react.useEffect)((()=>{wasResetting&&(isResetting.current=!1)}),[wasResetting]);const[panelItems,setPanelItems]=(0,react.useState)([]),[menuItemOrder,setMenuItemOrder]=(0,react.useState)([]),[resetAllFilters,setResetAllFilters]=(0,react.useState)([]),registerPanelItem=(0,react.useCallback)((item=>{setPanelItems((items=>{const newItems=[...items],existingIndex=newItems.findIndex((oldItem=>oldItem.label===item.label));return-1!==existingIndex&&newItems.splice(existingIndex,1),[...newItems,item]})),setMenuItemOrder((items=>items.includes(item.label)?items:[...items,item.label]))}),[setPanelItems,setMenuItemOrder]),deregisterPanelItem=(0,react.useCallback)((label=>{setPanelItems((items=>{const newItems=[...items],index=newItems.findIndex((item=>item.label===label));return-1!==index&&newItems.splice(index,1),newItems}))}),[setPanelItems]),registerResetAllFilter=(0,react.useCallback)((newFilter=>{setResetAllFilters((filters=>[...filters,newFilter]))}),[setResetAllFilters]),deregisterResetAllFilter=(0,react.useCallback)((filterToRemove=>{setResetAllFilters((filters=>filters.filter((filter=>filter!==filterToRemove))))}),[setResetAllFilters]),[menuItems,setMenuItems]=(0,react.useState)({default:{},optional:{}});(0,react.useEffect)((()=>{setMenuItems((prevState=>generateMenuItems({panelItems,shouldReset:!1,currentMenuItems:prevState,menuItemOrder})))}),[panelItems,setMenuItems,menuItemOrder]);const flagItemCustomization=(0,react.useCallback)(((value,label,group="default")=>{setMenuItems((items=>({...items,[group]:{...items[group],[label]:value}})))}),[setMenuItems]),[areAllOptionalControlsHidden,setAreAllOptionalControlsHidden]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(isMenuItemTypeEmpty(menuItems?.default)&&!isMenuItemTypeEmpty(menuItems?.optional)){const allControlsHidden=!Object.entries(menuItems.optional).some((([,isSelected])=>isSelected));setAreAllOptionalControlsHidden(allControlsHidden)}}),[menuItems,setAreAllOptionalControlsHidden]);const cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>{const wrapperStyle=hasInnerWrapper&&styles.cg(2),emptyStyle=isMenuItemTypeEmpty(menuItems?.default)&&areAllOptionalControlsHidden&&styles.sq;return cx(styles.DK(2),wrapperStyle,emptyStyle,className)}),[areAllOptionalControlsHidden,className,cx,hasInnerWrapper,menuItems]),toggleItem=(0,react.useCallback)((label=>{const currentItem=panelItems.find((item=>item.label===label));if(!currentItem)return;const menuGroup=currentItem.isShownByDefault?"default":"optional",newMenuItems={...menuItems,[menuGroup]:{...menuItems[menuGroup],[label]:!menuItems[menuGroup][label]}};setMenuItems(newMenuItems)}),[menuItems,panelItems,setMenuItems]),resetAllItems=(0,react.useCallback)((()=>{"function"==typeof resetAll&&(isResetting.current=!0,resetAll(resetAllFilters));const resetMenuItems=generateMenuItems({panelItems,menuItemOrder,shouldReset:!0});setMenuItems(resetMenuItems)}),[panelItems,resetAllFilters,resetAll,setMenuItems,menuItemOrder]),getFirstVisibleItemLabel=items=>{const optionalItems=menuItems.optional||{},firstItem=items.find((item=>item.isShownByDefault||!!optionalItems[item.label]));return firstItem?.label},firstDisplayedItem=getFirstVisibleItemLabel(panelItems),lastDisplayedItem=getFirstVisibleItemLabel([...panelItems].reverse());return{...otherProps,headingLevel,panelContext:(0,react.useMemo)((()=>({areAllOptionalControlsHidden,deregisterPanelItem,deregisterResetAllFilter,firstDisplayedItem,flagItemCustomization,hasMenuItems:!!panelItems.length,isResetting:isResetting.current,lastDisplayedItem,menuItems,panelId,registerPanelItem,registerResetAllFilter,shouldRenderPlaceholderItems,__experimentalFirstVisibleItemClass,__experimentalLastVisibleItemClass})),[areAllOptionalControlsHidden,deregisterPanelItem,deregisterResetAllFilter,firstDisplayedItem,flagItemCustomization,lastDisplayedItem,menuItems,panelId,panelItems,registerResetAllFilter,registerPanelItem,shouldRenderPlaceholderItems,__experimentalFirstVisibleItemClass,__experimentalLastVisibleItemClass]),resetAllItems,toggleItem,className:classes}}(props);return(0,jsx_runtime.jsx)(grid_component.Z,{...toolsPanelProps,columns:2,ref:forwardedRef,children:(0,jsx_runtime.jsxs)(context.h.Provider,{value:panelContext,children:[(0,jsx_runtime.jsx)(tools_panel_header_component,{label,resetAll:resetAllItems,toggleItem,headingLevel,dropdownMenuProps}),children]})})}),"ToolsPanel")}}]);