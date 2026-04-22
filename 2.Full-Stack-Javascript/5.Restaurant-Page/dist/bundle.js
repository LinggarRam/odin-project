/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --bg-primary: #0d0d0d;\n    --bg-secondary: #1a1a1a;\n    --bg-card: #222222;\n    --accent-gold: #c9a84c;\n    --accent-light: #e8c97a;\n    --text-primary: #f0ead6;\n    --text-secondary: #a09070;\n    --border: #2a2a2a;\n}\n\nbody {\n    font-family: 'Raleway', sans-serif;\n    background: var(--bg-primary);\n    color: var(--text-primary);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.navbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px 60px;\n    background: var(--bg-secondary);\n    border-bottom: 1px solid var(--border);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\n.navbar-logo {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.6rem;\n    font-weight: 700;\n    color: var(--accent-gold);\n    letter-spacing: 2px;\n}\n\n.navbar-tabs {\n    display: flex;\n    gap: 10px;\n}\n\n.tab-btn {\n    background: transparent;\n    color: var(--text-secondary);\n    border: 1px solid transparent;\n    padding: 10px 28px;\n    border-radius: 4px;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.9rem;\n    font-weight: 500;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.tab-btn:hover {\n    color: var(--accent-gold);\n    border-color: var(--accent-gold);\n}\n\n.tab-btn.active {\n    color: var(--bg-primary);\n    background: var(--accent-gold);\n    border-color: var(--accent-gold);\n}\n\n#content {\n    flex: 1;\n    min-height: calc(100vh - 140px);\n}\n\n.hero {\n    position: relative;\n    height: 92vh;\n    background: linear-gradient(135deg, #1a1200 0%, #2d1f00 40%, #1a1a1a 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    overflow: hidden;\n}\n\n.hero::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: radial-gradient(ellipse at center, rgba(201, 168, 76, 0.15) 0%, transparent 70%);\n}\n\n.hero-content {\n    position: relative;\n    z-index: 2;\n    max-width: 700px;\n    padding: 20px;\n}\n\n.hero-tagline {\n    font-size: 0.8rem;\n    letter-spacing: 5px;\n    color: var(--accent-gold);\n    margin-bottom: 20px;\n    text-transform: uppercase;\n}\n\n.hero-title {\n    font-family: 'Playfair Display', serif;\n    font-size: 5rem;\n    font-weight: 700;\n    line-height: 1.1;\n    color: var(--text-primary);\n    margin-bottom: 25px;\n}\n\n.hero-desc {\n    font-size: 1.1rem;\n    color: var(--text-secondary);\n    line-height: 1.8;\n    margin-bottom: 40px;\n    max-width: 500px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.hero-btn {\n    background: transparent;\n    color: var(--accent-gold);\n    border: 2px solid var(--accent-gold);\n    padding: 15px 45px;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.85rem;\n    font-weight: 600;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    cursor: pointer;\n    transition: all 0.3s;\n    border-radius: 2px;\n}\n\n.hero-btn:hover {\n    background: var(--accent-gold);\n    color: var(--bg-primary);\n}\n\n.features {\n    padding: 100px 60px;\n    background: var(--bg-secondary);\n}\n\n.features-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 30px;\n    max-width: 1100px;\n    margin: 0 auto;\n}\n\n.feature-card {\n    background: var(--bg-card);\n    border: 1px solid var(--border);\n    border-radius: 8px;\n    padding: 40px 30px;\n    text-align: center;\n    transition: border-color 0.3s, transform 0.3s;\n}\n\n.feature-card:hover {\n    border-color: var(--accent-gold);\n    transform: translateY(-5px);\n}\n\n.feature-icon {\n    font-size: 2.5rem;\n    display: block;\n    margin-bottom: 20px;\n}\n\n.feature-card h3 {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.3rem;\n    color: var(--accent-gold);\n    margin-bottom: 15px;\n}\n\n.feature-card p {\n    color: var(--text-secondary);\n    line-height: 1.8;\n    font-size: 0.98rem;\n}\n\n.menu-page {\n    padding: 80px 60px;\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 100%;\n}\n\n.menu-header {\n    margin-bottom: 60px;\n}\n\n.menu-category {\n    margin-bottom: 70px;\n}\n\n.category-title {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.5rem;\n    color: var(--accent-gold);\n    border-bottom: 1px solid var(--border);\n    padding-bottom: 15px;\n    margin-bottom: 30px;\n    letter-spacing: 2px;\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}\n\n.menu-card {\n    background: var(--bg-card);\n    border: 1px solid var(--border);\n    border-radius: 8px;\n    padding: 25px;\n    transition: border-color 0.3s, transform 0.2s;\n}\n\n.menu-card:hover {\n    border-color: var(--accent-gold);\n    transform: translateY(-3px);\n}\n\n.menu-card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 10px;\n    margin-bottom: 12px;\n}\n\n.menu-item-name {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.05rem;\n    color: var(--text-primary);\n    line-height: 1.4;\n}\n\n.menu-item-price {\n    color: var(--accent-gold);\n    font-weight: 600;\n    font-size: 0.9rem;\n    white-space: nowrap;\n}\n\n.menu-item-desc {\n    color: var(--text-secondary);\n    font-size: 0.875rem;\n    line-height: 1.7;\n}\n\n.footer {\n    background: var(--bg-secondary);\n    border-color: 1px solid var(--border);\n    text-align: center;\n    padding: 20px;\n    color: var(--text-secondary);\n    font-size: 0.8rem;\n    letter-spacing: 1px;\n}\n\n.section-title {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.5rem;\n    color: var(--accent-gold);\n    text-align: center;\n    margin-bottom: 15px;\n}\n\n.section-subtitle {\n    text-align: center;\n    color: var(--text-secondary);\n    font-size: 1rem;\n    margin-bottom: 50px;\n    letter-spacing: 1px;\n}\n\n.divider {\n    width: 60px;\n    height: 2px;\n    background: var(--accent-gold);\n    margin: 15px auto 40px;\n}\n\n/* Menu Page Styles */\n.menu-page {\n    background: var(--bg-primary);\n    min-height: 100vh;\n}\n\n.menu-header {\n    padding: 80px 60px 40px;\n    background: var(--bg-secondary);\n}\n\n.menu-category {\n    padding: 60px;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.category-title {\n    font-family: 'Playfair Display', serif;\n    font-size: 2rem;\n    color: var(--accent-gold);\n    margin-bottom: 30px;\n    text-align: center;\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 25px;\n}\n\n.menu-card {\n    background: var(--bg-card);\n    border: 1px solid var(--border);\n    border-radius: 8px;\n    padding: 25px;\n    transition: border-color 0.3s, transform 0.3s;\n}\n\n.menu-card:hover {\n    border-color: var(--accent-gold);\n    transform: translateY(-3px);\n}\n\n.menu-card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    margin-bottom: 12px;\n    gap: 15px;\n}\n\n.menu-item-name {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.2rem;\n    color: var(--text-primary);\n    font-weight: 600;\n}\n\n.menu-item-price {\n    font-family: 'Raleway', sans-serif;\n    font-size: 1rem;\n    color: var(--accent-gold);\n    font-weight: 600;\n    white-space: nowrap;\n}\n\n.menu-item-desc {\n    color: var(--text-secondary);\n    line-height: 1.6;\n    font-size: 0.95rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHomePage = () => {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"home-page\");\n\n    const hero = document.createElement(\"section\");\n    hero.classList.add(\"hero\");\n    hero.innerHTML = `\n        <div class=\"hero-overlay\"></div>\n        <div class=\"hero-content\">\n            <p class=\"hero-tagline\">EST. 2019 - Ponorogo</p>\n            <h1 class=\"hero-title\">Tumikari<br/>Restaurant</h1>\n            <p class=\"hero-desc\">\n                Where the rich flavors of the Indonesian archipelago meet the elegance of modern fine dining.\n            </p>\n            <button class=\"hero-btn\">Jelajahi Menu Kita</button>\n        </div>\n    `;\n\n    const features = document.createElement(\"section\");\n    features.classList.add(\"features\");\n    features.innerHTML = `\n        <h2 class=\"section-title\">Why Choose Us</h2>\n        <div class=\"divider\"></div>\n        <p class=\"section-subtitle\">A dining experience unlike any othe</p>\n        <div class=\"features-grid\">\n            <div class=\"feature-card\">\n                <span class=\"feature-icon\">🌿</span>\n                <h3>Fresh Ingredients</h3>\n                <p>We source only the finest local ingredients, delivered fresh every morning from trusted farmers.</p>\n            </div>\n            <div class=\"feature-card\">\n                <span class=\"feature-icon\">👨‍🍳</span>\n                <h3>Expert Chefs</h3>\n                <p>Our team of award-winning chefs brings decades of experience in traditional Indonesian cuisine.</p>\n            </div>\n            <div class=\"feature-card\">\n                <span class=\"feature-icon\">🕯️</span>\n                <h3>Elegant Ambiance</h3>\n                <p>A warm and intimate atmosphere perfect for romantic dinners, family gatherings, or business meals.</p>\n            </div>\n        </div>\n    `;\n\n    container.appendChild(hero);\n    container.appendChild(features);\n\n    return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://5.restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n// Initialize the page\nconst content = document.getElementById(\"content\");\n\n// Function to load a page\nconst loadPage = (pageLoader) => {\n    content.innerHTML = \"\";\n    content.appendChild(pageLoader());\n};\n\n// Load home page by default\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    loadPage(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n    // Tab navigation\n    const tabButtons = document.querySelectorAll(\".tab-btn\");\n    tabButtons.forEach((button) => {\n        button.addEventListener(\"click\", (e) => {\n            // Remove active class from all buttons\n            tabButtons.forEach((btn) => btn.classList.remove(\"active\"));\n            // Add active class to clicked button\n            e.target.classList.add(\"active\");\n\n            // Load appropriate page\n            const tab = e.target.dataset.tab;\n            if (tab === \"home\") {\n                loadPage(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            } else if (tab === \"menu\") {\n                loadPage(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            } else if (tab === \"about\") {\n                // Placeholder for about page\n                content.innerHTML = \"<div style='padding: 60px; text-align: center;'><h2 class='section-title'>About</h2><p class='section-subtitle'>Coming soon...</p></div>\";\n            }\n        });\n    });\n});\n\n//# sourceURL=webpack://5.restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuData = [\n    {\n        category: \"🍜 Signature Mains\",\n        items: [\n            { name: \"Rendang Wagyu\", desc: \"Slow-cooked wagyu beef in rich coconut and spice sauce\", price: \"Rp 185.000\" },\n            { name: \"Soto Betawi Royal\", desc: \"Creamy beef broth with premium cuts, served with rice\", price: \"Rp 120.000\" },\n            { name: \"Nasi Goreng Istimewa\", desc: \"Wok-fried rice with lobster, truffle oil and foie gras\", price: \"Rp 210.000\" },\n        ]\n    },\n    {\n        category: \"🥗 Starters\",\n        items: [\n            { name: \"Gado-Gado Platter\", desc: \"Fresh vegetables with house-made peanut sauce and crackers\", price: \"Rp 75.000\" },\n            { name: \"Sate Lilit Bali\", desc: \"Minced seafood satay on lemongrass skewers\", price: \"Rp 95.000\" },\n            { name: \"Bakwan Jagung Crispy\", desc: \"Golden corn fritters with sambal aioli dipping sauce\", price: \"Rp 65.000\" },\n        ]\n    },\n    {\n        category: \"🍮 Desserts\",\n        items: [\n            { name: \"Es Teler Royale\", desc: \"Premium coconut jelly, avocado, jackfruit in coconut cream\", price: \"Rp 75.000\" },\n            { name: \"Klepon Cake\", desc: \"Modern twist on classic klepon in layered cake form\", price: \"Rp 85.000\" },\n            { name: \"Pisang Foster Nusantara\", desc: \"Caramelized banana with palm sugar sauce and vanilla ice cream\", price: \"Rp 90.000\" },\n        ]\n    }\n];\n\nconst createMenuPage = () => {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"menu-page\");\n\n    const header = document.createElement(\"div\");\n    header.classList.add(\"menu-header\");\n    header.innerHTML = `\n        <h2 class=\"section-title\">Our Menu</h2>\n        <div class=\"divider\"></div>\n        <p class=\"section-subtitle\">Crafted with passion, served with love</p>\n    `;\n    container.appendChild(header);\n\n    menuData.forEach((category) => {\n        const section = document.createElement(\"section\");\n        section.classList.add(\"menu-category\");\n\n        const categoryTitle = document.createElement(\"h3\");\n        categoryTitle.classList.add(\"category-title\");\n        categoryTitle.textContent = category.category;\n        section.appendChild(categoryTitle);\n\n        const itemGrid = document.createElement(\"div\");\n        itemGrid.classList.add(\"menu-grid\");\n\n        category.items.forEach((item) => {\n            const card = document.createElement(\"div\");\n            card.classList.add(\"menu-card\");\n            card.innerHTML = `\n                <div class=\"menu-card-header\">\n                    <h4 class=\"menu-item-name\">${item.name}</h4>\n                    <span class=\"menu-item-price\">${item.price}</span>\n                </div>\n                <p class=\"menu-item-desc\">${item.desc}</p>\n            `;\n            itemGrid.appendChild(card);\n        });\n\n        section.appendChild(itemGrid);\n        container.appendChild(section);\n    });\n\n    return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;