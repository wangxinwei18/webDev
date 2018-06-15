/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./basiccalendar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./basiccalendar.js":
/*!**************************!*\
  !*** ./basiccalendar.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//require(\"!style-loader!css-loader!./calendar1.css\");\n//import css from './calendar1.css';\nfunction buildCal(m, y, cM, cH, cDW, cD, brdr){\nvar mn=['January','February','March','April','May','June','July','August','September','October','November','December'];\nvar dim=[31,0,31,30,31,30,31,31,30,31,30,31];\n\nvar oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st\noD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st\n\nvar todaydate=new Date() //DD added\nvar scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added\n\ndim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;\nvar t='<div class=\"'+cM+'\"><table class=\"'+cM+'\" cols=\"7\" cellpadding=\"0\" border=\"'+brdr+'\" cellspacing=\"0\"><tr align=\"center\">';\nt+='<td colspan=\"7\" align=\"center\" class=\"'+cH+'\">'+mn[m-1]+' - '+y+'</td></tr><tr align=\"center\">';\nfor(s=0;s<7;s++)t+='<td class=\"'+cDW+'\">'+\"SMTWTFS\".substr(s,1)+'</td>';\nt+='</tr><tr align=\"center\">';\nfor(i=1;i<=42;i++){\nvar x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';\nif (x==scanfortoday) //DD added\nx='<span id=\"today\">'+x+'</span>' //DD added\nt+='<td class=\"'+cD+'\">'+x+'</td>';\nif(((i)%7==0)&&(i<36))t+='</tr><tr align=\"center\">';\n}\nreturn t+='</tr></table></div>';\n}\n\n\n\n//# sourceURL=webpack:///./basiccalendar.js?");

/***/ })

/******/ });