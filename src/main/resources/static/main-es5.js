function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-bar></app-nav-bar>\n<app-covid19-home></app-covid19-home>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/covid19-home/covid19-home.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/covid19-home/covid19-home.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCovid19HomeCovid19HomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-lg\">\n    <h1>Covid-19 Tracker</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <app-covid19-stats></app-covid19-stats>\n        </div>\n        <div class=\"col-md-6\">\n            <app-mycountrydoughnut [countryDataSet]='countryDataSet'></app-mycountrydoughnut>\n            <app-worldstatline></app-worldstatline>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/covid19-stats/covid19-stats.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/covid19-stats/covid19-stats.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCovid19StatsCovid19StatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"pb-5\">Confirmed: {{confirmed}} Recovered: {{recovered}} Deaths: {{deaths}}</p>\n<form>\n    <div class=\"form-group form-inline\">\n        Full text search: <input class=\"form-control ml-2\" type=\"text\" [formControl]=\"filter\" />\n    </div>\n</form>\n<table *ngIf=\"flag\" class=\"table table-striped table-responsive\">\n    <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Country</th>\n            <th scope=\"col\">Confirmed</th>\n            <th scope=\"col\">Recovered</th>\n            <th scope=\"col\">Deaths</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor='let country of countryCodes | async; index as i'>\n            <th scope=\"row\">{{ i + 1 }}</th>\n            <td>{{country[\"Country\"]}}</td>\n            <td>{{countries[country[\"Alpha-3 code\"]] ? countries[country[\"Alpha-3 code\"]].confirmed : 0}}</td>\n            <td>{{countries[country[\"Alpha-3 code\"]] ? countries[country[\"Alpha-3 code\"]].recovered : 0}}</td>\n            <td>{{countries[country[\"Alpha-3 code\"]] ? countries[country[\"Alpha-3 code\"]].deaths : 0}}</td>\n        </tr>\n    </tbody>\n</table>\n<!--\n<ngb-pagination [(page)]=\"page\" [pageSize]=\"pageSize\" [collectionSize]=\"collectionSize\"></ngb-pagination>\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mycountrydoughnut/mycountrydoughnut.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mycountrydoughnut/mycountrydoughnut.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMycountrydoughnutMycountrydoughnutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>{{yourCountry}}</h3>\n<p *ngIf='updatedDataAvailable'>Confirmed: {{confirmed}} Recovered: {{recovered}} Deaths: {{deaths}}</p>\n<div *ngIf='updatedDataAvailable' class=\"chart-wrapper\">\n    <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\">\n    </canvas>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/img/logo.png\" width=\"30\" height=\"30\" alt=\"\">\n    </a>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/worldstatline/worldstatline.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/worldstatline/worldstatline.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWorldstatlineWorldstatlineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>World trend</h3>\n\n<div class=\"chart-wrapper\">\n    <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\n        [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\">\n    </canvas>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covid19-frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _covid19_stats_covid19_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./covid19-stats/covid19-stats.component */
    "./src/app/covid19-stats/covid19-stats.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _mycountrydoughnut_mycountrydoughnut_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./mycountrydoughnut/mycountrydoughnut.component */
    "./src/app/mycountrydoughnut/mycountrydoughnut.component.ts");
    /* harmony import */


    var _worldstatline_worldstatline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./worldstatline/worldstatline.component */
    "./src/app/worldstatline/worldstatline.component.ts");
    /* harmony import */


    var _covid19_home_covid19_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./covid19-home/covid19-home.component */
    "./src/app/covid19-home/covid19-home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _covid19_stats_covid19_stats_component__WEBPACK_IMPORTED_MODULE_9__["Covid19StatsComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _mycountrydoughnut_mycountrydoughnut_component__WEBPACK_IMPORTED_MODULE_11__["MycountrydoughnutComponent"], _worldstatline_worldstatline_component__WEBPACK_IMPORTED_MODULE_12__["WorldstatlineComponent"], _covid19_home_covid19_home_component__WEBPACK_IMPORTED_MODULE_13__["Covid19HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/covid19-home/covid19-home.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/covid19-home/covid19-home.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCovid19HomeCovid19HomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkMTktaG9tZS9jb3ZpZDE5LWhvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/covid19-home/covid19-home.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/covid19-home/covid19-home.component.ts ***!
    \********************************************************/

  /*! exports provided: Covid19HomeComponent */

  /***/
  function srcAppCovid19HomeCovid19HomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Covid19HomeComponent", function () {
      return Covid19HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _covid19_stats_covid19_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../covid19-stats/covid19-stats.component */
    "./src/app/covid19-stats/covid19-stats.component.ts");

    var Covid19HomeComponent = /*#__PURE__*/function () {
      function Covid19HomeComponent() {
        _classCallCheck(this, Covid19HomeComponent);
      }

      _createClass(Covid19HomeComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(function () {
            _this.countryDataSet = _this.covid19Stat.countries;
          }, 1000);
          console.log("after view init");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Covid19HomeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_covid19_stats_covid19_stats_component__WEBPACK_IMPORTED_MODULE_2__["Covid19StatsComponent"], {
      "static": false
    })], Covid19HomeComponent.prototype, "covid19Stat", void 0);
    Covid19HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-covid19-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./covid19-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/covid19-home/covid19-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./covid19-home.component.css */
      "./src/app/covid19-home/covid19-home.component.css"))["default"]]
    })], Covid19HomeComponent);
    /***/
  },

  /***/
  "./src/app/covid19-stats/covid19-stats.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/covid19-stats/covid19-stats.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCovid19StatsCovid19StatsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkMTktc3RhdHMvY292aWQxOS1zdGF0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/covid19-stats/covid19-stats.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/covid19-stats/covid19-stats.component.ts ***!
    \**********************************************************/

  /*! exports provided: Covid19StatsComponent */

  /***/
  function srcAppCovid19StatsCovid19StatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Covid19StatsComponent", function () {
      return Covid19StatsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_services_covid19_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/covid19-stats.service */
    "./src/services/covid19-stats.service.ts");
    /* harmony import */


    var src_assets_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/countries */
    "./src/assets/countries.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Covid19StatsComponent = /*#__PURE__*/function () {
      function Covid19StatsComponent(covid19StatService) {
        _classCallCheck(this, Covid19StatsComponent);

        this.covid19StatService = covid19StatService;
        this.affectedByCountry = [];
        this.countryCodes = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(src_assets_countries__WEBPACK_IMPORTED_MODULE_3__["CountryISO3"]);
        this.page = 1;
        this.pageSize = 25;
        this.collectionSize = src_assets_countries__WEBPACK_IMPORTED_MODULE_3__["CountryISO3"].length;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
      }

      _createClass(Covid19StatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.getCovid19StatWorldwide();
          this.getUpdatedCovid19Cases(); //this.countryCodes = of(CountryISO3.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize));

          this.countryCodes = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (text) {
            return _this2.search(text);
          }));
          console.log("on init");
        }
      }, {
        key: "search",
        value: function search(text) {
          //let countries = CountryISO3.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + 100);
          return src_assets_countries__WEBPACK_IMPORTED_MODULE_3__["CountryISO3"].filter(function (country) {
            var term = text.toLowerCase();
            return country['Country'].toLowerCase().includes(term);
          });
        }
      }, {
        key: "getCovid19StatWorldwide",
        value: function getCovid19StatWorldwide() {
          var _this3 = this;

          this.covid19StatService.getCovid19StatWorldwide().subscribe(function (res) {
            _this3.affectedByCountry = res.result;
            _this3.countries = Object.assign.apply(Object, [{}].concat(_toConsumableArray(_this3.affectedByCountry)));
            _this3.flag = true;
          });
        }
      }, {
        key: "getUpdatedCovid19Cases",
        value: function getUpdatedCovid19Cases() {
          var _this4 = this;

          this.covid19StatService.getUpdatedCovid19Cases().subscribe(function (res) {
            _this4.confirmed = res.result.confirmed;
            _this4.recovered = res.result.recovered;
            _this4.deaths = res.result.deaths;
          });
        }
      }]);

      return Covid19StatsComponent;
    }();

    Covid19StatsComponent.ctorParameters = function () {
      return [{
        type: src_services_covid19_stats_service__WEBPACK_IMPORTED_MODULE_2__["Covid19StatsService"]
      }];
    };

    Covid19StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-covid19-stats',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./covid19-stats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/covid19-stats/covid19-stats.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./covid19-stats.component.css */
      "./src/app/covid19-stats/covid19-stats.component.css"))["default"]]
    })], Covid19StatsComponent);
    /***/
  },

  /***/
  "./src/app/mycountrydoughnut/mycountrydoughnut.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/mycountrydoughnut/mycountrydoughnut.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMycountrydoughnutMycountrydoughnutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Y291bnRyeWRvdWdobnV0L215Y291bnRyeWRvdWdobnV0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mycountrydoughnut/mycountrydoughnut.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/mycountrydoughnut/mycountrydoughnut.component.ts ***!
    \******************************************************************/

  /*! exports provided: MycountrydoughnutComponent */

  /***/
  function srcAppMycountrydoughnutMycountrydoughnutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MycountrydoughnutComponent", function () {
      return MycountrydoughnutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_services_covid19_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/covid19-stats.service */
    "./src/services/covid19-stats.service.ts");
    /* harmony import */


    var src_services_ip_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/ip-location.service */
    "./src/services/ip-location.service.ts");

    var MycountrydoughnutComponent = /*#__PURE__*/function () {
      function MycountrydoughnutComponent(covid19StatService, ipLocationService) {
        _classCallCheck(this, MycountrydoughnutComponent);

        this.covid19StatService = covid19StatService;
        this.ipLocationService = ipLocationService;
        this.doughnutChartLabels = ['Confirmed', 'Recovered', 'Deaths'];
        this.doughnutChartType = 'doughnut';
      }

      _createClass(MycountrydoughnutComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.getUserLocation();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} //this.getUserLocation();

        /*
          getYourCountryCovid19Cases(): void {
            this.covid19StatService.getYourCountryCovid19Cases('IND')
              .subscribe((res: Covid19Affected) => {
                this.confirmed = res.confirmed;
                this.recovered = res.recovered;
                this.deaths = res.deaths;
                this.updatedDataAvailable = true;
                this.doughnutChartData = [
                  [this.confirmed, this.recovered, this.deaths]
                ]
              });
          }
          */

      }, {
        key: "updateDoughnutChart",
        value: function updateDoughnutChart() {
          if (this.countryDataSet) {
            this.confirmed = this.countryDataSet[this.yourCountryISO3] ? this.countryDataSet[this.yourCountryISO3].confirmed : 0;
            this.recovered = this.countryDataSet[this.yourCountryISO3] ? this.countryDataSet[this.yourCountryISO3].recovered : 0;
            this.deaths = this.countryDataSet[this.yourCountryISO3] ? this.countryDataSet[this.yourCountryISO3].deaths : 0;
            this.doughnutChartData = [[this.confirmed, this.recovered, this.deaths]];
            this.updatedDataAvailable = true;
          }
        }
      }, {
        key: "getUserLocation",
        value: function getUserLocation() {
          var _this5 = this;

          this.ipLocationService.getIPAddress().subscribe(function (res) {
            //this.ipAddress = res.ip;
            _this5.ipLocationService.getLocationFromIp(res.ip).subscribe(function (res) {
              _this5.yourCountry = res.country_name;
              _this5.yourCountryISO3 = res.country_code_iso3;

              _this5.updateDoughnutChart();
            });
          }, function (error) {
            _this5.yourCountry = 'INIDA';
            _this5.yourCountryISO3 = 'IND';

            _this5.updateDoughnutChart();
          });
        }
      }]);

      return MycountrydoughnutComponent;
    }();

    MycountrydoughnutComponent.ctorParameters = function () {
      return [{
        type: src_services_covid19_stats_service__WEBPACK_IMPORTED_MODULE_2__["Covid19StatsService"]
      }, {
        type: src_services_ip_location_service__WEBPACK_IMPORTED_MODULE_3__["IpLocationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MycountrydoughnutComponent.prototype, "countryDataSet", void 0);
    MycountrydoughnutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mycountrydoughnut',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mycountrydoughnut.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mycountrydoughnut/mycountrydoughnut.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mycountrydoughnut.component.css */
      "./src/app/mycountrydoughnut/mycountrydoughnut.component.css"))["default"]]
    })], MycountrydoughnutComponent);
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/nav-bar/nav-bar.component.css"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/worldstatline/worldstatline.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/worldstatline/worldstatline.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWorldstatlineWorldstatlineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkc3RhdGxpbmUvd29ybGRzdGF0bGluZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/worldstatline/worldstatline.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/worldstatline/worldstatline.component.ts ***!
    \**********************************************************/

  /*! exports provided: WorldstatlineComponent */

  /***/
  function srcAppWorldstatlineWorldstatlineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldstatlineComponent", function () {
      return WorldstatlineComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_services_covid19_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/covid19-stats.service */
    "./src/services/covid19-stats.service.ts");

    var WorldstatlineComponent = /*#__PURE__*/function () {
      function WorldstatlineComponent(covid19StatService) {
        _classCallCheck(this, WorldstatlineComponent);

        this.covid19StatService = covid19StatService;
        this.dates = [];
        this.confirmed = [];
        this.recovered = [];
        this.deaths = [];
        this.lineChartData = [{
          data: [],
          label: 'confirmed'
        }, {
          data: [],
          label: 'recovered'
        }, {
          data: [],
          label: 'deaths'
        }];
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          borderColor: 'black'
        }];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
      }

      _createClass(WorldstatlineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCovid19StatByDateWorldwide();
        }
      }, {
        key: "getCovid19StatByDateWorldwide",
        value: function getCovid19StatByDateWorldwide() {
          var _this6 = this;

          this.covid19StatService.getCovid19StatByDateWorldwide().subscribe(function (res) {
            _this6.dates = _this6.dates.concat(Object.keys(res.result));
            var data = Object.values(res.result);
            data.forEach(function (element) {
              _this6.confirmed.push(element.confirmed);

              _this6.recovered.push(element.recovered);

              _this6.deaths.push(element.deaths);
            });
            _this6.lineChartLabels = _this6.dates;
            _this6.lineChartData[0].data = _this6.confirmed;
            _this6.lineChartData[1].data = _this6.recovered;
            _this6.lineChartData[2].data = _this6.deaths;
          });
        }
      }]);

      return WorldstatlineComponent;
    }();

    WorldstatlineComponent.ctorParameters = function () {
      return [{
        type: src_services_covid19_stats_service__WEBPACK_IMPORTED_MODULE_2__["Covid19StatsService"]
      }];
    };

    WorldstatlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-worldstatline',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./worldstatline.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/worldstatline/worldstatline.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./worldstatline.component.css */
      "./src/app/worldstatline/worldstatline.component.css"))["default"]]
    })], WorldstatlineComponent);
    /***/
  },

  /***/
  "./src/assets/countries.ts":
  /*!*********************************!*\
    !*** ./src/assets/countries.ts ***!
    \*********************************/

  /*! exports provided: CountryISO3 */

  /***/
  function srcAssetsCountriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryISO3", function () {
      return CountryISO3;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CountryISO3 = [{
      "Country": "Afghanistan",
      "Alpha-2 code": "AF",
      "Alpha-3 code": "AFG",
      "Numeric code": "4",
      "Latitude (average)": "33",
      "Longitude (average)": "65"
    }, {
      "Country": "Albania",
      "Alpha-2 code": "AL",
      "Alpha-3 code": "ALB",
      "Numeric code": "8",
      "Latitude (average)": "41",
      "Longitude (average)": "20"
    }, {
      "Country": "Algeria",
      "Alpha-2 code": "DZ",
      "Alpha-3 code": "DZA",
      "Numeric code": "12",
      "Latitude (average)": "28",
      "Longitude (average)": "3"
    }, {
      "Country": "American Samoa",
      "Alpha-2 code": "AS",
      "Alpha-3 code": "ASM",
      "Numeric code": "16",
      "Latitude (average)": "-14.3333",
      "Longitude (average)": "-170"
    }, {
      "Country": "Andorra",
      "Alpha-2 code": "AD",
      "Alpha-3 code": "AND",
      "Numeric code": "20",
      "Latitude (average)": "42.5",
      "Longitude (average)": "1.6"
    }, {
      "Country": "Angola",
      "Alpha-2 code": "AO",
      "Alpha-3 code": "AGO",
      "Numeric code": "24",
      "Latitude (average)": "-12.5",
      "Longitude (average)": "18.5"
    }, {
      "Country": "Anguilla",
      "Alpha-2 code": "AI",
      "Alpha-3 code": "AIA",
      "Numeric code": "660",
      "Latitude (average)": "18.25",
      "Longitude (average)": "-63.1667"
    }, {
      "Country": "Antarctica",
      "Alpha-2 code": "AQ",
      "Alpha-3 code": "ATA",
      "Numeric code": "10",
      "Latitude (average)": "-90",
      "Longitude (average)": "0"
    }, {
      "Country": "Antigua and Barbuda",
      "Alpha-2 code": "AG",
      "Alpha-3 code": "ATG",
      "Numeric code": "28",
      "Latitude (average)": "17.05",
      "Longitude (average)": "-61.8"
    }, {
      "Country": "Argentina",
      "Alpha-2 code": "AR",
      "Alpha-3 code": "ARG",
      "Numeric code": "32",
      "Latitude (average)": "-34",
      "Longitude (average)": "-64"
    }, {
      "Country": "Armenia",
      "Alpha-2 code": "AM",
      "Alpha-3 code": "ARM",
      "Numeric code": "51",
      "Latitude (average)": "40",
      "Longitude (average)": "45"
    }, {
      "Country": "Aruba",
      "Alpha-2 code": "AW",
      "Alpha-3 code": "ABW",
      "Numeric code": "533",
      "Latitude (average)": "12.5",
      "Longitude (average)": "-69.9667"
    }, {
      "Country": "Australia",
      "Alpha-2 code": "AU",
      "Alpha-3 code": "AUS",
      "Numeric code": "36",
      "Latitude (average)": "-27",
      "Longitude (average)": "133"
    }, {
      "Country": "Austria",
      "Alpha-2 code": "AT",
      "Alpha-3 code": "AUT",
      "Numeric code": "40",
      "Latitude (average)": "47.3333",
      "Longitude (average)": "13.3333"
    }, {
      "Country": "Azerbaijan",
      "Alpha-2 code": "AZ",
      "Alpha-3 code": "AZE",
      "Numeric code": "31",
      "Latitude (average)": "40.5",
      "Longitude (average)": "47.5"
    }, {
      "Country": "Bahamas",
      "Alpha-2 code": "BS",
      "Alpha-3 code": "BHS",
      "Numeric code": "44",
      "Latitude (average)": "24.25",
      "Longitude (average)": "-76"
    }, {
      "Country": "Bahrain",
      "Alpha-2 code": "BH",
      "Alpha-3 code": "BHR",
      "Numeric code": "48",
      "Latitude (average)": "26",
      "Longitude (average)": "50.55"
    }, {
      "Country": "Bangladesh",
      "Alpha-2 code": "BD",
      "Alpha-3 code": "BGD",
      "Numeric code": "50",
      "Latitude (average)": "24",
      "Longitude (average)": "90"
    }, {
      "Country": "Barbados",
      "Alpha-2 code": "BB",
      "Alpha-3 code": "BRB",
      "Numeric code": "52",
      "Latitude (average)": "13.1667",
      "Longitude (average)": "-59.5333"
    }, {
      "Country": "Belarus",
      "Alpha-2 code": "BY",
      "Alpha-3 code": "BLR",
      "Numeric code": "112",
      "Latitude (average)": "53",
      "Longitude (average)": "28"
    }, {
      "Country": "Belgium",
      "Alpha-2 code": "BE",
      "Alpha-3 code": "BEL",
      "Numeric code": "56",
      "Latitude (average)": "50.8333",
      "Longitude (average)": "4"
    }, {
      "Country": "Belize",
      "Alpha-2 code": "BZ",
      "Alpha-3 code": "BLZ",
      "Numeric code": "84",
      "Latitude (average)": "17.25",
      "Longitude (average)": "-88.75"
    }, {
      "Country": "Benin",
      "Alpha-2 code": "BJ",
      "Alpha-3 code": "BEN",
      "Numeric code": "204",
      "Latitude (average)": "9.5",
      "Longitude (average)": "2.25"
    }, {
      "Country": "Bermuda",
      "Alpha-2 code": "BM",
      "Alpha-3 code": "BMU",
      "Numeric code": "60",
      "Latitude (average)": "32.3333",
      "Longitude (average)": "-64.75"
    }, {
      "Country": "Bhutan",
      "Alpha-2 code": "BT",
      "Alpha-3 code": "BTN",
      "Numeric code": "64",
      "Latitude (average)": "27.5",
      "Longitude (average)": "90.5"
    }, {
      "Country": "Bolivia, Plurinational State of",
      "Alpha-2 code": "BO",
      "Alpha-3 code": "BOL",
      "Numeric code": "68",
      "Latitude (average)": "-17",
      "Longitude (average)": "-65"
    }, {
      "Country": "Bolivia",
      "Alpha-2 code": "BO",
      "Alpha-3 code": "BOL",
      "Numeric code": "68",
      "Latitude (average)": "-17",
      "Longitude (average)": "-65"
    }, {
      "Country": "Bosnia and Herzegovina",
      "Alpha-2 code": "BA",
      "Alpha-3 code": "BIH",
      "Numeric code": "70",
      "Latitude (average)": "44",
      "Longitude (average)": "18"
    }, {
      "Country": "Botswana",
      "Alpha-2 code": "BW",
      "Alpha-3 code": "BWA",
      "Numeric code": "72",
      "Latitude (average)": "-22",
      "Longitude (average)": "24"
    }, {
      "Country": "Bouvet Island",
      "Alpha-2 code": "BV",
      "Alpha-3 code": "BVT",
      "Numeric code": "74",
      "Latitude (average)": "-54.4333",
      "Longitude (average)": "3.4"
    }, {
      "Country": "Brazil",
      "Alpha-2 code": "BR",
      "Alpha-3 code": "BRA",
      "Numeric code": "76",
      "Latitude (average)": "-10",
      "Longitude (average)": "-55"
    }, {
      "Country": "British Indian Ocean Territory",
      "Alpha-2 code": "IO",
      "Alpha-3 code": "IOT",
      "Numeric code": "86",
      "Latitude (average)": "-6",
      "Longitude (average)": "71.5"
    }, {
      "Country": "Brunei Darussalam",
      "Alpha-2 code": "BN",
      "Alpha-3 code": "BRN",
      "Numeric code": "96",
      "Latitude (average)": "4.5",
      "Longitude (average)": "114.6667"
    }, {
      "Country": "Brunei",
      "Alpha-2 code": "BN",
      "Alpha-3 code": "BRN",
      "Numeric code": "96",
      "Latitude (average)": "4.5",
      "Longitude (average)": "114.6667"
    }, {
      "Country": "Bulgaria",
      "Alpha-2 code": "BG",
      "Alpha-3 code": "BGR",
      "Numeric code": "100",
      "Latitude (average)": "43",
      "Longitude (average)": "25"
    }, {
      "Country": "Burkina Faso",
      "Alpha-2 code": "BF",
      "Alpha-3 code": "BFA",
      "Numeric code": "854",
      "Latitude (average)": "13",
      "Longitude (average)": "-2"
    }, {
      "Country": "Burundi",
      "Alpha-2 code": "BI",
      "Alpha-3 code": "BDI",
      "Numeric code": "108",
      "Latitude (average)": "-3.5",
      "Longitude (average)": "30"
    }, {
      "Country": "Cambodia",
      "Alpha-2 code": "KH",
      "Alpha-3 code": "KHM",
      "Numeric code": "116",
      "Latitude (average)": "13",
      "Longitude (average)": "105"
    }, {
      "Country": "Cameroon",
      "Alpha-2 code": "CM",
      "Alpha-3 code": "CMR",
      "Numeric code": "120",
      "Latitude (average)": "6",
      "Longitude (average)": "12"
    }, {
      "Country": "Canada",
      "Alpha-2 code": "CA",
      "Alpha-3 code": "CAN",
      "Numeric code": "124",
      "Latitude (average)": "60",
      "Longitude (average)": "-95"
    }, {
      "Country": "Cape Verde",
      "Alpha-2 code": "CV",
      "Alpha-3 code": "CPV",
      "Numeric code": "132",
      "Latitude (average)": "16",
      "Longitude (average)": "-24"
    }, {
      "Country": "Cayman Islands",
      "Alpha-2 code": "KY",
      "Alpha-3 code": "CYM",
      "Numeric code": "136",
      "Latitude (average)": "19.5",
      "Longitude (average)": "-80.5"
    }, {
      "Country": "Central African Republic",
      "Alpha-2 code": "CF",
      "Alpha-3 code": "CAF",
      "Numeric code": "140",
      "Latitude (average)": "7",
      "Longitude (average)": "21"
    }, {
      "Country": "Chad",
      "Alpha-2 code": "TD",
      "Alpha-3 code": "TCD",
      "Numeric code": "148",
      "Latitude (average)": "15",
      "Longitude (average)": "19"
    }, {
      "Country": "Chile",
      "Alpha-2 code": "CL",
      "Alpha-3 code": "CHL",
      "Numeric code": "152",
      "Latitude (average)": "-30",
      "Longitude (average)": "-71"
    }, {
      "Country": "China",
      "Alpha-2 code": "CN",
      "Alpha-3 code": "CHN",
      "Numeric code": "156",
      "Latitude (average)": "35",
      "Longitude (average)": "105"
    }, {
      "Country": "Christmas Island",
      "Alpha-2 code": "CX",
      "Alpha-3 code": "CXR",
      "Numeric code": "162",
      "Latitude (average)": "-10.5",
      "Longitude (average)": "105.6667"
    }, {
      "Country": "Cocos (Keeling) Islands",
      "Alpha-2 code": "CC",
      "Alpha-3 code": "CCK",
      "Numeric code": "166",
      "Latitude (average)": "-12.5",
      "Longitude (average)": "96.8333"
    }, {
      "Country": "Colombia",
      "Alpha-2 code": "CO",
      "Alpha-3 code": "COL",
      "Numeric code": "170",
      "Latitude (average)": "4",
      "Longitude (average)": "-72"
    }, {
      "Country": "Comoros",
      "Alpha-2 code": "KM",
      "Alpha-3 code": "COM",
      "Numeric code": "174",
      "Latitude (average)": "-12.1667",
      "Longitude (average)": "44.25"
    }, {
      "Country": "Congo",
      "Alpha-2 code": "CG",
      "Alpha-3 code": "COG",
      "Numeric code": "178",
      "Latitude (average)": "-1",
      "Longitude (average)": "15"
    }, {
      "Country": "Congo, the Democratic Republic of the",
      "Alpha-2 code": "CD",
      "Alpha-3 code": "COD",
      "Numeric code": "180",
      "Latitude (average)": "0",
      "Longitude (average)": "25"
    }, {
      "Country": "Cook Islands",
      "Alpha-2 code": "CK",
      "Alpha-3 code": "COK",
      "Numeric code": "184",
      "Latitude (average)": "-21.2333",
      "Longitude (average)": "-159.7667"
    }, {
      "Country": "Costa Rica",
      "Alpha-2 code": "CR",
      "Alpha-3 code": "CRI",
      "Numeric code": "188",
      "Latitude (average)": "10",
      "Longitude (average)": "-84"
    }, {
      "Country": "Côte d'Ivoire",
      "Alpha-2 code": "CI",
      "Alpha-3 code": "CIV",
      "Numeric code": "384",
      "Latitude (average)": "8",
      "Longitude (average)": "-5"
    }, {
      "Country": "Ivory Coast",
      "Alpha-2 code": "CI",
      "Alpha-3 code": "CIV",
      "Numeric code": "384",
      "Latitude (average)": "8",
      "Longitude (average)": "-5"
    }, {
      "Country": "Croatia",
      "Alpha-2 code": "HR",
      "Alpha-3 code": "HRV",
      "Numeric code": "191",
      "Latitude (average)": "45.1667",
      "Longitude (average)": "15.5"
    }, {
      "Country": "Cuba",
      "Alpha-2 code": "CU",
      "Alpha-3 code": "CUB",
      "Numeric code": "192",
      "Latitude (average)": "21.5",
      "Longitude (average)": "-80"
    }, {
      "Country": "Cyprus",
      "Alpha-2 code": "CY",
      "Alpha-3 code": "CYP",
      "Numeric code": "196",
      "Latitude (average)": "35",
      "Longitude (average)": "33"
    }, {
      "Country": "Czech Republic",
      "Alpha-2 code": "CZ",
      "Alpha-3 code": "CZE",
      "Numeric code": "203",
      "Latitude (average)": "49.75",
      "Longitude (average)": "15.5"
    }, {
      "Country": "Denmark",
      "Alpha-2 code": "DK",
      "Alpha-3 code": "DNK",
      "Numeric code": "208",
      "Latitude (average)": "56",
      "Longitude (average)": "10"
    }, {
      "Country": "Djibouti",
      "Alpha-2 code": "DJ",
      "Alpha-3 code": "DJI",
      "Numeric code": "262",
      "Latitude (average)": "11.5",
      "Longitude (average)": "43"
    }, {
      "Country": "Dominica",
      "Alpha-2 code": "DM",
      "Alpha-3 code": "DMA",
      "Numeric code": "212",
      "Latitude (average)": "15.4167",
      "Longitude (average)": "-61.3333"
    }, {
      "Country": "Dominican Republic",
      "Alpha-2 code": "DO",
      "Alpha-3 code": "DOM",
      "Numeric code": "214",
      "Latitude (average)": "19",
      "Longitude (average)": "-70.6667"
    }, {
      "Country": "Ecuador",
      "Alpha-2 code": "EC",
      "Alpha-3 code": "ECU",
      "Numeric code": "218",
      "Latitude (average)": "-2",
      "Longitude (average)": "-77.5"
    }, {
      "Country": "Egypt",
      "Alpha-2 code": "EG",
      "Alpha-3 code": "EGY",
      "Numeric code": "818",
      "Latitude (average)": "27",
      "Longitude (average)": "30"
    }, {
      "Country": "El Salvador",
      "Alpha-2 code": "SV",
      "Alpha-3 code": "SLV",
      "Numeric code": "222",
      "Latitude (average)": "13.8333",
      "Longitude (average)": "-88.9167"
    }, {
      "Country": "Equatorial Guinea",
      "Alpha-2 code": "GQ",
      "Alpha-3 code": "GNQ",
      "Numeric code": "226",
      "Latitude (average)": "2",
      "Longitude (average)": "10"
    }, {
      "Country": "Eritrea",
      "Alpha-2 code": "ER",
      "Alpha-3 code": "ERI",
      "Numeric code": "232",
      "Latitude (average)": "15",
      "Longitude (average)": "39"
    }, {
      "Country": "Estonia",
      "Alpha-2 code": "EE",
      "Alpha-3 code": "EST",
      "Numeric code": "233",
      "Latitude (average)": "59",
      "Longitude (average)": "26"
    }, {
      "Country": "Ethiopia",
      "Alpha-2 code": "ET",
      "Alpha-3 code": "ETH",
      "Numeric code": "231",
      "Latitude (average)": "8",
      "Longitude (average)": "38"
    }, {
      "Country": "Falkland Islands (Malvinas)",
      "Alpha-2 code": "FK",
      "Alpha-3 code": "FLK",
      "Numeric code": "238",
      "Latitude (average)": "-51.75",
      "Longitude (average)": "-59"
    }, {
      "Country": "Faroe Islands",
      "Alpha-2 code": "FO",
      "Alpha-3 code": "FRO",
      "Numeric code": "234",
      "Latitude (average)": "62",
      "Longitude (average)": "-7"
    }, {
      "Country": "Fiji",
      "Alpha-2 code": "FJ",
      "Alpha-3 code": "FJI",
      "Numeric code": "242",
      "Latitude (average)": "-18",
      "Longitude (average)": "175"
    }, {
      "Country": "Finland",
      "Alpha-2 code": "FI",
      "Alpha-3 code": "FIN",
      "Numeric code": "246",
      "Latitude (average)": "64",
      "Longitude (average)": "26"
    }, {
      "Country": "France",
      "Alpha-2 code": "FR",
      "Alpha-3 code": "FRA",
      "Numeric code": "250",
      "Latitude (average)": "46",
      "Longitude (average)": "2"
    }, {
      "Country": "French Guiana",
      "Alpha-2 code": "GF",
      "Alpha-3 code": "GUF",
      "Numeric code": "254",
      "Latitude (average)": "4",
      "Longitude (average)": "-53"
    }, {
      "Country": "French Polynesia",
      "Alpha-2 code": "PF",
      "Alpha-3 code": "PYF",
      "Numeric code": "258",
      "Latitude (average)": "-15",
      "Longitude (average)": "-140"
    }, {
      "Country": "French Southern Territories",
      "Alpha-2 code": "TF",
      "Alpha-3 code": "ATF",
      "Numeric code": "260",
      "Latitude (average)": "-43",
      "Longitude (average)": "67"
    }, {
      "Country": "Gabon",
      "Alpha-2 code": "GA",
      "Alpha-3 code": "GAB",
      "Numeric code": "266",
      "Latitude (average)": "-1",
      "Longitude (average)": "11.75"
    }, {
      "Country": "Gambia",
      "Alpha-2 code": "GM",
      "Alpha-3 code": "GMB",
      "Numeric code": "270",
      "Latitude (average)": "13.4667",
      "Longitude (average)": "-16.5667"
    }, {
      "Country": "Georgia",
      "Alpha-2 code": "GE",
      "Alpha-3 code": "GEO",
      "Numeric code": "268",
      "Latitude (average)": "42",
      "Longitude (average)": "43.5"
    }, {
      "Country": "Germany",
      "Alpha-2 code": "DE",
      "Alpha-3 code": "DEU",
      "Numeric code": "276",
      "Latitude (average)": "51",
      "Longitude (average)": "9"
    }, {
      "Country": "Ghana",
      "Alpha-2 code": "GH",
      "Alpha-3 code": "GHA",
      "Numeric code": "288",
      "Latitude (average)": "8",
      "Longitude (average)": "-2"
    }, {
      "Country": "Gibraltar",
      "Alpha-2 code": "GI",
      "Alpha-3 code": "GIB",
      "Numeric code": "292",
      "Latitude (average)": "36.1833",
      "Longitude (average)": "-5.3667"
    }, {
      "Country": "Greece",
      "Alpha-2 code": "GR",
      "Alpha-3 code": "GRC",
      "Numeric code": "300",
      "Latitude (average)": "39",
      "Longitude (average)": "22"
    }, {
      "Country": "Greenland",
      "Alpha-2 code": "GL",
      "Alpha-3 code": "GRL",
      "Numeric code": "304",
      "Latitude (average)": "72",
      "Longitude (average)": "-40"
    }, {
      "Country": "Grenada",
      "Alpha-2 code": "GD",
      "Alpha-3 code": "GRD",
      "Numeric code": "308",
      "Latitude (average)": "12.1167",
      "Longitude (average)": "-61.6667"
    }, {
      "Country": "Guadeloupe",
      "Alpha-2 code": "GP",
      "Alpha-3 code": "GLP",
      "Numeric code": "312",
      "Latitude (average)": "16.25",
      "Longitude (average)": "-61.5833"
    }, {
      "Country": "Guam",
      "Alpha-2 code": "GU",
      "Alpha-3 code": "GUM",
      "Numeric code": "316",
      "Latitude (average)": "13.4667",
      "Longitude (average)": "144.7833"
    }, {
      "Country": "Guatemala",
      "Alpha-2 code": "GT",
      "Alpha-3 code": "GTM",
      "Numeric code": "320",
      "Latitude (average)": "15.5",
      "Longitude (average)": "-90.25"
    }, {
      "Country": "Guernsey",
      "Alpha-2 code": "GG",
      "Alpha-3 code": "GGY",
      "Numeric code": "831",
      "Latitude (average)": "49.5",
      "Longitude (average)": "-2.56"
    }, {
      "Country": "Guinea",
      "Alpha-2 code": "GN",
      "Alpha-3 code": "GIN",
      "Numeric code": "324",
      "Latitude (average)": "11",
      "Longitude (average)": "-10"
    }, {
      "Country": "Guinea-Bissau",
      "Alpha-2 code": "GW",
      "Alpha-3 code": "GNB",
      "Numeric code": "624",
      "Latitude (average)": "12",
      "Longitude (average)": "-15"
    }, {
      "Country": "Guyana",
      "Alpha-2 code": "GY",
      "Alpha-3 code": "GUY",
      "Numeric code": "328",
      "Latitude (average)": "5",
      "Longitude (average)": "-59"
    }, {
      "Country": "Haiti",
      "Alpha-2 code": "HT",
      "Alpha-3 code": "HTI",
      "Numeric code": "332",
      "Latitude (average)": "19",
      "Longitude (average)": "-72.4167"
    }, {
      "Country": "Heard Island and McDonald Islands",
      "Alpha-2 code": "HM",
      "Alpha-3 code": "HMD",
      "Numeric code": "334",
      "Latitude (average)": "-53.1",
      "Longitude (average)": "72.5167"
    }, {
      "Country": "Holy See (Vatican City State)",
      "Alpha-2 code": "VA",
      "Alpha-3 code": "VAT",
      "Numeric code": "336",
      "Latitude (average)": "41.9",
      "Longitude (average)": "12.45"
    }, {
      "Country": "Honduras",
      "Alpha-2 code": "HN",
      "Alpha-3 code": "HND",
      "Numeric code": "340",
      "Latitude (average)": "15",
      "Longitude (average)": "-86.5"
    }, {
      "Country": "Hong Kong",
      "Alpha-2 code": "HK",
      "Alpha-3 code": "HKG",
      "Numeric code": "344",
      "Latitude (average)": "22.25",
      "Longitude (average)": "114.1667"
    }, {
      "Country": "Hungary",
      "Alpha-2 code": "HU",
      "Alpha-3 code": "HUN",
      "Numeric code": "348",
      "Latitude (average)": "47",
      "Longitude (average)": "20"
    }, {
      "Country": "Iceland",
      "Alpha-2 code": "IS",
      "Alpha-3 code": "ISL",
      "Numeric code": "352",
      "Latitude (average)": "65",
      "Longitude (average)": "-18"
    }, {
      "Country": "India",
      "Alpha-2 code": "IN",
      "Alpha-3 code": "IND",
      "Numeric code": "356",
      "Latitude (average)": "20",
      "Longitude (average)": "77"
    }, {
      "Country": "Indonesia",
      "Alpha-2 code": "ID",
      "Alpha-3 code": "IDN",
      "Numeric code": "360",
      "Latitude (average)": "-5",
      "Longitude (average)": "120"
    }, {
      "Country": "Iran, Islamic Republic of",
      "Alpha-2 code": "IR",
      "Alpha-3 code": "IRN",
      "Numeric code": "364",
      "Latitude (average)": "32",
      "Longitude (average)": "53"
    }, {
      "Country": "Iraq",
      "Alpha-2 code": "IQ",
      "Alpha-3 code": "IRQ",
      "Numeric code": "368",
      "Latitude (average)": "33",
      "Longitude (average)": "44"
    }, {
      "Country": "Ireland",
      "Alpha-2 code": "IE",
      "Alpha-3 code": "IRL",
      "Numeric code": "372",
      "Latitude (average)": "53",
      "Longitude (average)": "-8"
    }, {
      "Country": "Isle of Man",
      "Alpha-2 code": "IM",
      "Alpha-3 code": "IMN",
      "Numeric code": "833",
      "Latitude (average)": "54.23",
      "Longitude (average)": "-4.55"
    }, {
      "Country": "Israel",
      "Alpha-2 code": "IL",
      "Alpha-3 code": "ISR",
      "Numeric code": "376",
      "Latitude (average)": "31.5",
      "Longitude (average)": "34.75"
    }, {
      "Country": "Italy",
      "Alpha-2 code": "IT",
      "Alpha-3 code": "ITA",
      "Numeric code": "380",
      "Latitude (average)": "42.8333",
      "Longitude (average)": "12.8333"
    }, {
      "Country": "Jamaica",
      "Alpha-2 code": "JM",
      "Alpha-3 code": "JAM",
      "Numeric code": "388",
      "Latitude (average)": "18.25",
      "Longitude (average)": "-77.5"
    }, {
      "Country": "Japan",
      "Alpha-2 code": "JP",
      "Alpha-3 code": "JPN",
      "Numeric code": "392",
      "Latitude (average)": "36",
      "Longitude (average)": "138"
    }, {
      "Country": "Jersey",
      "Alpha-2 code": "JE",
      "Alpha-3 code": "JEY",
      "Numeric code": "832",
      "Latitude (average)": "49.21",
      "Longitude (average)": "-2.13"
    }, {
      "Country": "Jordan",
      "Alpha-2 code": "JO",
      "Alpha-3 code": "JOR",
      "Numeric code": "400",
      "Latitude (average)": "31",
      "Longitude (average)": "36"
    }, {
      "Country": "Kazakhstan",
      "Alpha-2 code": "KZ",
      "Alpha-3 code": "KAZ",
      "Numeric code": "398",
      "Latitude (average)": "48",
      "Longitude (average)": "68"
    }, {
      "Country": "Kenya",
      "Alpha-2 code": "KE",
      "Alpha-3 code": "KEN",
      "Numeric code": "404",
      "Latitude (average)": "1",
      "Longitude (average)": "38"
    }, {
      "Country": "Kiribati",
      "Alpha-2 code": "KI",
      "Alpha-3 code": "KIR",
      "Numeric code": "296",
      "Latitude (average)": "1.4167",
      "Longitude (average)": "173"
    }, {
      "Country": "Korea, Democratic People's Republic of",
      "Alpha-2 code": "KP",
      "Alpha-3 code": "PRK",
      "Numeric code": "408",
      "Latitude (average)": "40",
      "Longitude (average)": "127"
    }, {
      "Country": "Korea, Republic of",
      "Alpha-2 code": "KR",
      "Alpha-3 code": "KOR",
      "Numeric code": "410",
      "Latitude (average)": "37",
      "Longitude (average)": "127.5"
    }, {
      "Country": "South Korea",
      "Alpha-2 code": "KR",
      "Alpha-3 code": "KOR",
      "Numeric code": "410",
      "Latitude (average)": "37",
      "Longitude (average)": "127.5"
    }, {
      "Country": "Kuwait",
      "Alpha-2 code": "KW",
      "Alpha-3 code": "KWT",
      "Numeric code": "414",
      "Latitude (average)": "29.3375",
      "Longitude (average)": "47.6581"
    }, {
      "Country": "Kyrgyzstan",
      "Alpha-2 code": "KG",
      "Alpha-3 code": "KGZ",
      "Numeric code": "417",
      "Latitude (average)": "41",
      "Longitude (average)": "75"
    }, {
      "Country": "Lao People's Democratic Republic",
      "Alpha-2 code": "LA",
      "Alpha-3 code": "LAO",
      "Numeric code": "418",
      "Latitude (average)": "18",
      "Longitude (average)": "105"
    }, {
      "Country": "Latvia",
      "Alpha-2 code": "LV",
      "Alpha-3 code": "LVA",
      "Numeric code": "428",
      "Latitude (average)": "57",
      "Longitude (average)": "25"
    }, {
      "Country": "Lebanon",
      "Alpha-2 code": "LB",
      "Alpha-3 code": "LBN",
      "Numeric code": "422",
      "Latitude (average)": "33.8333",
      "Longitude (average)": "35.8333"
    }, {
      "Country": "Lesotho",
      "Alpha-2 code": "LS",
      "Alpha-3 code": "LSO",
      "Numeric code": "426",
      "Latitude (average)": "-29.5",
      "Longitude (average)": "28.5"
    }, {
      "Country": "Liberia",
      "Alpha-2 code": "LR",
      "Alpha-3 code": "LBR",
      "Numeric code": "430",
      "Latitude (average)": "6.5",
      "Longitude (average)": "-9.5"
    }, {
      "Country": "Libyan Arab Jamahiriya",
      "Alpha-2 code": "LY",
      "Alpha-3 code": "LBY",
      "Numeric code": "434",
      "Latitude (average)": "25",
      "Longitude (average)": "17"
    }, {
      "Country": "Libya",
      "Alpha-2 code": "LY",
      "Alpha-3 code": "LBY",
      "Numeric code": "434",
      "Latitude (average)": "25",
      "Longitude (average)": "17"
    }, {
      "Country": "Liechtenstein",
      "Alpha-2 code": "LI",
      "Alpha-3 code": "LIE",
      "Numeric code": "438",
      "Latitude (average)": "47.1667",
      "Longitude (average)": "9.5333"
    }, {
      "Country": "Lithuania",
      "Alpha-2 code": "LT",
      "Alpha-3 code": "LTU",
      "Numeric code": "440",
      "Latitude (average)": "56",
      "Longitude (average)": "24"
    }, {
      "Country": "Luxembourg",
      "Alpha-2 code": "LU",
      "Alpha-3 code": "LUX",
      "Numeric code": "442",
      "Latitude (average)": "49.75",
      "Longitude (average)": "6.1667"
    }, {
      "Country": "Macao",
      "Alpha-2 code": "MO",
      "Alpha-3 code": "MAC",
      "Numeric code": "446",
      "Latitude (average)": "22.1667",
      "Longitude (average)": "113.55"
    }, {
      "Country": "Macedonia, the former Yugoslav Republic of",
      "Alpha-2 code": "MK",
      "Alpha-3 code": "MKD",
      "Numeric code": "807",
      "Latitude (average)": "41.8333",
      "Longitude (average)": "22"
    }, {
      "Country": "Madagascar",
      "Alpha-2 code": "MG",
      "Alpha-3 code": "MDG",
      "Numeric code": "450",
      "Latitude (average)": "-20",
      "Longitude (average)": "47"
    }, {
      "Country": "Malawi",
      "Alpha-2 code": "MW",
      "Alpha-3 code": "MWI",
      "Numeric code": "454",
      "Latitude (average)": "-13.5",
      "Longitude (average)": "34"
    }, {
      "Country": "Malaysia",
      "Alpha-2 code": "MY",
      "Alpha-3 code": "MYS",
      "Numeric code": "458",
      "Latitude (average)": "2.5",
      "Longitude (average)": "112.5"
    }, {
      "Country": "Maldives",
      "Alpha-2 code": "MV",
      "Alpha-3 code": "MDV",
      "Numeric code": "462",
      "Latitude (average)": "3.25",
      "Longitude (average)": "73"
    }, {
      "Country": "Mali",
      "Alpha-2 code": "ML",
      "Alpha-3 code": "MLI",
      "Numeric code": "466",
      "Latitude (average)": "17",
      "Longitude (average)": "-4"
    }, {
      "Country": "Malta",
      "Alpha-2 code": "MT",
      "Alpha-3 code": "MLT",
      "Numeric code": "470",
      "Latitude (average)": "35.8333",
      "Longitude (average)": "14.5833"
    }, {
      "Country": "Marshall Islands",
      "Alpha-2 code": "MH",
      "Alpha-3 code": "MHL",
      "Numeric code": "584",
      "Latitude (average)": "9",
      "Longitude (average)": "168"
    }, {
      "Country": "Martinique",
      "Alpha-2 code": "MQ",
      "Alpha-3 code": "MTQ",
      "Numeric code": "474",
      "Latitude (average)": "14.6667",
      "Longitude (average)": "-61"
    }, {
      "Country": "Mauritania",
      "Alpha-2 code": "MR",
      "Alpha-3 code": "MRT",
      "Numeric code": "478",
      "Latitude (average)": "20",
      "Longitude (average)": "-12"
    }, {
      "Country": "Mauritius",
      "Alpha-2 code": "MU",
      "Alpha-3 code": "MUS",
      "Numeric code": "480",
      "Latitude (average)": "-20.2833",
      "Longitude (average)": "57.55"
    }, {
      "Country": "Mayotte",
      "Alpha-2 code": "YT",
      "Alpha-3 code": "MYT",
      "Numeric code": "175",
      "Latitude (average)": "-12.8333",
      "Longitude (average)": "45.1667"
    }, {
      "Country": "Mexico",
      "Alpha-2 code": "MX",
      "Alpha-3 code": "MEX",
      "Numeric code": "484",
      "Latitude (average)": "23",
      "Longitude (average)": "-102"
    }, {
      "Country": "Micronesia, Federated States of",
      "Alpha-2 code": "FM",
      "Alpha-3 code": "FSM",
      "Numeric code": "583",
      "Latitude (average)": "6.9167",
      "Longitude (average)": "158.25"
    }, {
      "Country": "Moldova, Republic of",
      "Alpha-2 code": "MD",
      "Alpha-3 code": "MDA",
      "Numeric code": "498",
      "Latitude (average)": "47",
      "Longitude (average)": "29"
    }, {
      "Country": "Monaco",
      "Alpha-2 code": "MC",
      "Alpha-3 code": "MCO",
      "Numeric code": "492",
      "Latitude (average)": "43.7333",
      "Longitude (average)": "7.4"
    }, {
      "Country": "Mongolia",
      "Alpha-2 code": "MN",
      "Alpha-3 code": "MNG",
      "Numeric code": "496",
      "Latitude (average)": "46",
      "Longitude (average)": "105"
    }, {
      "Country": "Montenegro",
      "Alpha-2 code": "ME",
      "Alpha-3 code": "MNE",
      "Numeric code": "499",
      "Latitude (average)": "42",
      "Longitude (average)": "19"
    }, {
      "Country": "Montserrat",
      "Alpha-2 code": "MS",
      "Alpha-3 code": "MSR",
      "Numeric code": "500",
      "Latitude (average)": "16.75",
      "Longitude (average)": "-62.2"
    }, {
      "Country": "Morocco",
      "Alpha-2 code": "MA",
      "Alpha-3 code": "MAR",
      "Numeric code": "504",
      "Latitude (average)": "32",
      "Longitude (average)": "-5"
    }, {
      "Country": "Mozambique",
      "Alpha-2 code": "MZ",
      "Alpha-3 code": "MOZ",
      "Numeric code": "508",
      "Latitude (average)": "-18.25",
      "Longitude (average)": "35"
    }, {
      "Country": "Myanmar",
      "Alpha-2 code": "MM",
      "Alpha-3 code": "MMR",
      "Numeric code": "104",
      "Latitude (average)": "22",
      "Longitude (average)": "98"
    }, {
      "Country": "Burma",
      "Alpha-2 code": "MM",
      "Alpha-3 code": "MMR",
      "Numeric code": "104",
      "Latitude (average)": "22",
      "Longitude (average)": "98"
    }, {
      "Country": "Namibia",
      "Alpha-2 code": "NA",
      "Alpha-3 code": "NAM",
      "Numeric code": "516",
      "Latitude (average)": "-22",
      "Longitude (average)": "17"
    }, {
      "Country": "Nauru",
      "Alpha-2 code": "NR",
      "Alpha-3 code": "NRU",
      "Numeric code": "520",
      "Latitude (average)": "-0.5333",
      "Longitude (average)": "166.9167"
    }, {
      "Country": "Nepal",
      "Alpha-2 code": "NP",
      "Alpha-3 code": "NPL",
      "Numeric code": "524",
      "Latitude (average)": "28",
      "Longitude (average)": "84"
    }, {
      "Country": "Netherlands",
      "Alpha-2 code": "NL",
      "Alpha-3 code": "NLD",
      "Numeric code": "528",
      "Latitude (average)": "52.5",
      "Longitude (average)": "5.75"
    }, {
      "Country": "Netherlands Antilles",
      "Alpha-2 code": "AN",
      "Alpha-3 code": "ANT",
      "Numeric code": "530",
      "Latitude (average)": "12.25",
      "Longitude (average)": "-68.75"
    }, {
      "Country": "New Caledonia",
      "Alpha-2 code": "NC",
      "Alpha-3 code": "NCL",
      "Numeric code": "540",
      "Latitude (average)": "-21.5",
      "Longitude (average)": "165.5"
    }, {
      "Country": "New Zealand",
      "Alpha-2 code": "NZ",
      "Alpha-3 code": "NZL",
      "Numeric code": "554",
      "Latitude (average)": "-41",
      "Longitude (average)": "174"
    }, {
      "Country": "Nicaragua",
      "Alpha-2 code": "NI",
      "Alpha-3 code": "NIC",
      "Numeric code": "558",
      "Latitude (average)": "13",
      "Longitude (average)": "-85"
    }, {
      "Country": "Niger",
      "Alpha-2 code": "NE",
      "Alpha-3 code": "NER",
      "Numeric code": "562",
      "Latitude (average)": "16",
      "Longitude (average)": "8"
    }, {
      "Country": "Nigeria",
      "Alpha-2 code": "NG",
      "Alpha-3 code": "NGA",
      "Numeric code": "566",
      "Latitude (average)": "10",
      "Longitude (average)": "8"
    }, {
      "Country": "Niue",
      "Alpha-2 code": "NU",
      "Alpha-3 code": "NIU",
      "Numeric code": "570",
      "Latitude (average)": "-19.0333",
      "Longitude (average)": "-169.8667"
    }, {
      "Country": "Norfolk Island",
      "Alpha-2 code": "NF",
      "Alpha-3 code": "NFK",
      "Numeric code": "574",
      "Latitude (average)": "-29.0333",
      "Longitude (average)": "167.95"
    }, {
      "Country": "Northern Mariana Islands",
      "Alpha-2 code": "MP",
      "Alpha-3 code": "MNP",
      "Numeric code": "580",
      "Latitude (average)": "15.2",
      "Longitude (average)": "145.75"
    }, {
      "Country": "Norway",
      "Alpha-2 code": "NO",
      "Alpha-3 code": "NOR",
      "Numeric code": "578",
      "Latitude (average)": "62",
      "Longitude (average)": "10"
    }, {
      "Country": "Oman",
      "Alpha-2 code": "OM",
      "Alpha-3 code": "OMN",
      "Numeric code": "512",
      "Latitude (average)": "21",
      "Longitude (average)": "57"
    }, {
      "Country": "Pakistan",
      "Alpha-2 code": "PK",
      "Alpha-3 code": "PAK",
      "Numeric code": "586",
      "Latitude (average)": "30",
      "Longitude (average)": "70"
    }, {
      "Country": "Palau",
      "Alpha-2 code": "PW",
      "Alpha-3 code": "PLW",
      "Numeric code": "585",
      "Latitude (average)": "7.5",
      "Longitude (average)": "134.5"
    }, {
      "Country": "Palestinian Territory, Occupied",
      "Alpha-2 code": "PS",
      "Alpha-3 code": "PSE",
      "Numeric code": "275",
      "Latitude (average)": "32",
      "Longitude (average)": "35.25"
    }, {
      "Country": "Panama",
      "Alpha-2 code": "PA",
      "Alpha-3 code": "PAN",
      "Numeric code": "591",
      "Latitude (average)": "9",
      "Longitude (average)": "-80"
    }, {
      "Country": "Papua New Guinea",
      "Alpha-2 code": "PG",
      "Alpha-3 code": "PNG",
      "Numeric code": "598",
      "Latitude (average)": "-6",
      "Longitude (average)": "147"
    }, {
      "Country": "Paraguay",
      "Alpha-2 code": "PY",
      "Alpha-3 code": "PRY",
      "Numeric code": "600",
      "Latitude (average)": "-23",
      "Longitude (average)": "-58"
    }, {
      "Country": "Peru",
      "Alpha-2 code": "PE",
      "Alpha-3 code": "PER",
      "Numeric code": "604",
      "Latitude (average)": "-10",
      "Longitude (average)": "-76"
    }, {
      "Country": "Philippines",
      "Alpha-2 code": "PH",
      "Alpha-3 code": "PHL",
      "Numeric code": "608",
      "Latitude (average)": "13",
      "Longitude (average)": "122"
    }, {
      "Country": "Pitcairn",
      "Alpha-2 code": "PN",
      "Alpha-3 code": "PCN",
      "Numeric code": "612",
      "Latitude (average)": "-24.7",
      "Longitude (average)": "-127.4"
    }, {
      "Country": "Poland",
      "Alpha-2 code": "PL",
      "Alpha-3 code": "POL",
      "Numeric code": "616",
      "Latitude (average)": "52",
      "Longitude (average)": "20"
    }, {
      "Country": "Portugal",
      "Alpha-2 code": "PT",
      "Alpha-3 code": "PRT",
      "Numeric code": "620",
      "Latitude (average)": "39.5",
      "Longitude (average)": "-8"
    }, {
      "Country": "Puerto Rico",
      "Alpha-2 code": "PR",
      "Alpha-3 code": "PRI",
      "Numeric code": "630",
      "Latitude (average)": "18.25",
      "Longitude (average)": "-66.5"
    }, {
      "Country": "Qatar",
      "Alpha-2 code": "QA",
      "Alpha-3 code": "QAT",
      "Numeric code": "634",
      "Latitude (average)": "25.5",
      "Longitude (average)": "51.25"
    }, {
      "Country": "Réunion",
      "Alpha-2 code": "RE",
      "Alpha-3 code": "REU",
      "Numeric code": "638",
      "Latitude (average)": "-21.1",
      "Longitude (average)": "55.6"
    }, {
      "Country": "Romania",
      "Alpha-2 code": "RO",
      "Alpha-3 code": "ROU",
      "Numeric code": "642",
      "Latitude (average)": "46",
      "Longitude (average)": "25"
    }, {
      "Country": "Russian Federation",
      "Alpha-2 code": "RU",
      "Alpha-3 code": "RUS",
      "Numeric code": "643",
      "Latitude (average)": "60",
      "Longitude (average)": "100"
    }, {
      "Country": "Russia",
      "Alpha-2 code": "RU",
      "Alpha-3 code": "RUS",
      "Numeric code": "643",
      "Latitude (average)": "60",
      "Longitude (average)": "100"
    }, {
      "Country": "Rwanda",
      "Alpha-2 code": "RW",
      "Alpha-3 code": "RWA",
      "Numeric code": "646",
      "Latitude (average)": "-2",
      "Longitude (average)": "30"
    }, {
      "Country": "Saint Helena, Ascension and Tristan da Cunha",
      "Alpha-2 code": "SH",
      "Alpha-3 code": "SHN",
      "Numeric code": "654",
      "Latitude (average)": "-15.9333",
      "Longitude (average)": "-5.7"
    }, {
      "Country": "Saint Kitts and Nevis",
      "Alpha-2 code": "KN",
      "Alpha-3 code": "KNA",
      "Numeric code": "659",
      "Latitude (average)": "17.3333",
      "Longitude (average)": "-62.75"
    }, {
      "Country": "Saint Lucia",
      "Alpha-2 code": "LC",
      "Alpha-3 code": "LCA",
      "Numeric code": "662",
      "Latitude (average)": "13.8833",
      "Longitude (average)": "-61.1333"
    }, {
      "Country": "Saint Pierre and Miquelon",
      "Alpha-2 code": "PM",
      "Alpha-3 code": "SPM",
      "Numeric code": "666",
      "Latitude (average)": "46.8333",
      "Longitude (average)": "-56.3333"
    }, {
      "Country": "Saint Vincent and the Grenadines",
      "Alpha-2 code": "VC",
      "Alpha-3 code": "VCT",
      "Numeric code": "670",
      "Latitude (average)": "13.25",
      "Longitude (average)": "-61.2"
    }, {
      "Country": "Saint Vincent & the Grenadines",
      "Alpha-2 code": "VC",
      "Alpha-3 code": "VCT",
      "Numeric code": "670",
      "Latitude (average)": "13.25",
      "Longitude (average)": "-61.2"
    }, {
      "Country": "St. Vincent and the Grenadines",
      "Alpha-2 code": "VC",
      "Alpha-3 code": "VCT",
      "Numeric code": "670",
      "Latitude (average)": "13.25",
      "Longitude (average)": "-61.2"
    }, {
      "Country": "Samoa",
      "Alpha-2 code": "WS",
      "Alpha-3 code": "WSM",
      "Numeric code": "882",
      "Latitude (average)": "-13.5833",
      "Longitude (average)": "-172.3333"
    }, {
      "Country": "San Marino",
      "Alpha-2 code": "SM",
      "Alpha-3 code": "SMR",
      "Numeric code": "674",
      "Latitude (average)": "43.7667",
      "Longitude (average)": "12.4167"
    }, {
      "Country": "Sao Tome and Principe",
      "Alpha-2 code": "ST",
      "Alpha-3 code": "STP",
      "Numeric code": "678",
      "Latitude (average)": "1",
      "Longitude (average)": "7"
    }, {
      "Country": "Saudi Arabia",
      "Alpha-2 code": "SA",
      "Alpha-3 code": "SAU",
      "Numeric code": "682",
      "Latitude (average)": "25",
      "Longitude (average)": "45"
    }, {
      "Country": "Senegal",
      "Alpha-2 code": "SN",
      "Alpha-3 code": "SEN",
      "Numeric code": "686",
      "Latitude (average)": "14",
      "Longitude (average)": "-14"
    }, {
      "Country": "Serbia",
      "Alpha-2 code": "RS",
      "Alpha-3 code": "SRB",
      "Numeric code": "688",
      "Latitude (average)": "44",
      "Longitude (average)": "21"
    }, {
      "Country": "Seychelles",
      "Alpha-2 code": "SC",
      "Alpha-3 code": "SYC",
      "Numeric code": "690",
      "Latitude (average)": "-4.5833",
      "Longitude (average)": "55.6667"
    }, {
      "Country": "Sierra Leone",
      "Alpha-2 code": "SL",
      "Alpha-3 code": "SLE",
      "Numeric code": "694",
      "Latitude (average)": "8.5",
      "Longitude (average)": "-11.5"
    }, {
      "Country": "Singapore",
      "Alpha-2 code": "SG",
      "Alpha-3 code": "SGP",
      "Numeric code": "702",
      "Latitude (average)": "1.3667",
      "Longitude (average)": "103.8"
    }, {
      "Country": "Slovakia",
      "Alpha-2 code": "SK",
      "Alpha-3 code": "SVK",
      "Numeric code": "703",
      "Latitude (average)": "48.6667",
      "Longitude (average)": "19.5"
    }, {
      "Country": "Slovenia",
      "Alpha-2 code": "SI",
      "Alpha-3 code": "SVN",
      "Numeric code": "705",
      "Latitude (average)": "46",
      "Longitude (average)": "15"
    }, {
      "Country": "Solomon Islands",
      "Alpha-2 code": "SB",
      "Alpha-3 code": "SLB",
      "Numeric code": "90",
      "Latitude (average)": "-8",
      "Longitude (average)": "159"
    }, {
      "Country": "Somalia",
      "Alpha-2 code": "SO",
      "Alpha-3 code": "SOM",
      "Numeric code": "706",
      "Latitude (average)": "10",
      "Longitude (average)": "49"
    }, {
      "Country": "South Africa",
      "Alpha-2 code": "ZA",
      "Alpha-3 code": "ZAF",
      "Numeric code": "710",
      "Latitude (average)": "-29",
      "Longitude (average)": "24"
    }, {
      "Country": "South Georgia and the South Sandwich Islands",
      "Alpha-2 code": "GS",
      "Alpha-3 code": "SGS",
      "Numeric code": "239",
      "Latitude (average)": "-54.5",
      "Longitude (average)": "-37"
    }, {
      "Country": "Spain",
      "Alpha-2 code": "ES",
      "Alpha-3 code": "ESP",
      "Numeric code": "724",
      "Latitude (average)": "40",
      "Longitude (average)": "-4"
    }, {
      "Country": "Sri Lanka",
      "Alpha-2 code": "LK",
      "Alpha-3 code": "LKA",
      "Numeric code": "144",
      "Latitude (average)": "7",
      "Longitude (average)": "81"
    }, {
      "Country": "Sudan",
      "Alpha-2 code": "SD",
      "Alpha-3 code": "SDN",
      "Numeric code": "736",
      "Latitude (average)": "15",
      "Longitude (average)": "30"
    }, {
      "Country": "Suriname",
      "Alpha-2 code": "SR",
      "Alpha-3 code": "SUR",
      "Numeric code": "740",
      "Latitude (average)": "4",
      "Longitude (average)": "-56"
    }, {
      "Country": "Svalbard and Jan Mayen",
      "Alpha-2 code": "SJ",
      "Alpha-3 code": "SJM",
      "Numeric code": "744",
      "Latitude (average)": "78",
      "Longitude (average)": "20"
    }, {
      "Country": "Swaziland",
      "Alpha-2 code": "SZ",
      "Alpha-3 code": "SWZ",
      "Numeric code": "748",
      "Latitude (average)": "-26.5",
      "Longitude (average)": "31.5"
    }, {
      "Country": "Sweden",
      "Alpha-2 code": "SE",
      "Alpha-3 code": "SWE",
      "Numeric code": "752",
      "Latitude (average)": "62",
      "Longitude (average)": "15"
    }, {
      "Country": "Switzerland",
      "Alpha-2 code": "CH",
      "Alpha-3 code": "CHE",
      "Numeric code": "756",
      "Latitude (average)": "47",
      "Longitude (average)": "8"
    }, {
      "Country": "Syrian Arab Republic",
      "Alpha-2 code": "SY",
      "Alpha-3 code": "SYR",
      "Numeric code": "760",
      "Latitude (average)": "35",
      "Longitude (average)": "38"
    }, {
      "Country": "Taiwan, Province of China",
      "Alpha-2 code": "TW",
      "Alpha-3 code": "TWN",
      "Numeric code": "158",
      "Latitude (average)": "23.5",
      "Longitude (average)": "121"
    }, {
      "Country": "Taiwan",
      "Alpha-2 code": "TW",
      "Alpha-3 code": "TWN",
      "Numeric code": "158",
      "Latitude (average)": "23.5",
      "Longitude (average)": "121"
    }, {
      "Country": "Tajikistan",
      "Alpha-2 code": "TJ",
      "Alpha-3 code": "TJK",
      "Numeric code": "762",
      "Latitude (average)": "39",
      "Longitude (average)": "71"
    }, {
      "Country": "Tanzania, United Republic of",
      "Alpha-2 code": "TZ",
      "Alpha-3 code": "TZA",
      "Numeric code": "834",
      "Latitude (average)": "-6",
      "Longitude (average)": "35"
    }, {
      "Country": "Thailand",
      "Alpha-2 code": "TH",
      "Alpha-3 code": "THA",
      "Numeric code": "764",
      "Latitude (average)": "15",
      "Longitude (average)": "100"
    }, {
      "Country": "Timor-Leste",
      "Alpha-2 code": "TL",
      "Alpha-3 code": "TLS",
      "Numeric code": "626",
      "Latitude (average)": "-8.55",
      "Longitude (average)": "125.5167"
    }, {
      "Country": "Togo",
      "Alpha-2 code": "TG",
      "Alpha-3 code": "TGO",
      "Numeric code": "768",
      "Latitude (average)": "8",
      "Longitude (average)": "1.1667"
    }, {
      "Country": "Tokelau",
      "Alpha-2 code": "TK",
      "Alpha-3 code": "TKL",
      "Numeric code": "772",
      "Latitude (average)": "-9",
      "Longitude (average)": "-172"
    }, {
      "Country": "Tonga",
      "Alpha-2 code": "TO",
      "Alpha-3 code": "TON",
      "Numeric code": "776",
      "Latitude (average)": "-20",
      "Longitude (average)": "-175"
    }, {
      "Country": "Trinidad and Tobago",
      "Alpha-2 code": "TT",
      "Alpha-3 code": "TTO",
      "Numeric code": "780",
      "Latitude (average)": "11",
      "Longitude (average)": "-61"
    }, {
      "Country": "Trinidad & Tobago",
      "Alpha-2 code": "TT",
      "Alpha-3 code": "TTO",
      "Numeric code": "780",
      "Latitude (average)": "11",
      "Longitude (average)": "-61"
    }, {
      "Country": "Tunisia",
      "Alpha-2 code": "TN",
      "Alpha-3 code": "TUN",
      "Numeric code": "788",
      "Latitude (average)": "34",
      "Longitude (average)": "9"
    }, {
      "Country": "Turkey",
      "Alpha-2 code": "TR",
      "Alpha-3 code": "TUR",
      "Numeric code": "792",
      "Latitude (average)": "39",
      "Longitude (average)": "35"
    }, {
      "Country": "Turkmenistan",
      "Alpha-2 code": "TM",
      "Alpha-3 code": "TKM",
      "Numeric code": "795",
      "Latitude (average)": "40",
      "Longitude (average)": "60"
    }, {
      "Country": "Turks and Caicos Islands",
      "Alpha-2 code": "TC",
      "Alpha-3 code": "TCA",
      "Numeric code": "796",
      "Latitude (average)": "21.75",
      "Longitude (average)": "-71.5833"
    }, {
      "Country": "Tuvalu",
      "Alpha-2 code": "TV",
      "Alpha-3 code": "TUV",
      "Numeric code": "798",
      "Latitude (average)": "-8",
      "Longitude (average)": "178"
    }, {
      "Country": "Uganda",
      "Alpha-2 code": "UG",
      "Alpha-3 code": "UGA",
      "Numeric code": "800",
      "Latitude (average)": "1",
      "Longitude (average)": "32"
    }, {
      "Country": "Ukraine",
      "Alpha-2 code": "UA",
      "Alpha-3 code": "UKR",
      "Numeric code": "804",
      "Latitude (average)": "49",
      "Longitude (average)": "32"
    }, {
      "Country": "United Arab Emirates",
      "Alpha-2 code": "AE",
      "Alpha-3 code": "ARE",
      "Numeric code": "784",
      "Latitude (average)": "24",
      "Longitude (average)": "54"
    }, {
      "Country": "United Kingdom",
      "Alpha-2 code": "GB",
      "Alpha-3 code": "GBR",
      "Numeric code": "826",
      "Latitude (average)": "54",
      "Longitude (average)": "-2"
    }, {
      "Country": "United States",
      "Alpha-2 code": "US",
      "Alpha-3 code": "USA",
      "Numeric code": "840",
      "Latitude (average)": "38",
      "Longitude (average)": "-97"
    }, {
      "Country": "United States Minor Outlying Islands",
      "Alpha-2 code": "UM",
      "Alpha-3 code": "UMI",
      "Numeric code": "581",
      "Latitude (average)": "19.2833",
      "Longitude (average)": "166.6"
    }, {
      "Country": "Uruguay",
      "Alpha-2 code": "UY",
      "Alpha-3 code": "URY",
      "Numeric code": "858",
      "Latitude (average)": "-33",
      "Longitude (average)": "-56"
    }, {
      "Country": "Uzbekistan",
      "Alpha-2 code": "UZ",
      "Alpha-3 code": "UZB",
      "Numeric code": "860",
      "Latitude (average)": "41",
      "Longitude (average)": "64"
    }, {
      "Country": "Vanuatu",
      "Alpha-2 code": "VU",
      "Alpha-3 code": "VUT",
      "Numeric code": "548",
      "Latitude (average)": "-16",
      "Longitude (average)": "167"
    }, {
      "Country": "Venezuela, Bolivarian Republic of",
      "Alpha-2 code": "VE",
      "Alpha-3 code": "VEN",
      "Numeric code": "862",
      "Latitude (average)": "8",
      "Longitude (average)": "-66"
    }, {
      "Country": "Venezuela",
      "Alpha-2 code": "VE",
      "Alpha-3 code": "VEN",
      "Numeric code": "862",
      "Latitude (average)": "8",
      "Longitude (average)": "-66"
    }, {
      "Country": "Viet Nam",
      "Alpha-2 code": "VN",
      "Alpha-3 code": "VNM",
      "Numeric code": "704",
      "Latitude (average)": "16",
      "Longitude (average)": "106"
    }, {
      "Country": "Vietnam",
      "Alpha-2 code": "VN",
      "Alpha-3 code": "VNM",
      "Numeric code": "704",
      "Latitude (average)": "16",
      "Longitude (average)": "106"
    }, {
      "Country": "Virgin Islands, British",
      "Alpha-2 code": "VG",
      "Alpha-3 code": "VGB",
      "Numeric code": "92",
      "Latitude (average)": "18.5",
      "Longitude (average)": "-64.5"
    }, {
      "Country": "Virgin Islands, U.S.",
      "Alpha-2 code": "VI",
      "Alpha-3 code": "VIR",
      "Numeric code": "850",
      "Latitude (average)": "18.3333",
      "Longitude (average)": "-64.8333"
    }, {
      "Country": "Wallis and Futuna",
      "Alpha-2 code": "WF",
      "Alpha-3 code": "WLF",
      "Numeric code": "876",
      "Latitude (average)": "-13.3",
      "Longitude (average)": "-176.2"
    }, {
      "Country": "Western Sahara",
      "Alpha-2 code": "EH",
      "Alpha-3 code": "ESH",
      "Numeric code": "732",
      "Latitude (average)": "24.5",
      "Longitude (average)": "-13"
    }, {
      "Country": "Yemen",
      "Alpha-2 code": "YE",
      "Alpha-3 code": "YEM",
      "Numeric code": "887",
      "Latitude (average)": "15",
      "Longitude (average)": "48"
    }, {
      "Country": "Zambia",
      "Alpha-2 code": "ZM",
      "Alpha-3 code": "ZMB",
      "Numeric code": "894",
      "Latitude (average)": "-15",
      "Longitude (average)": "30"
    }, {
      "Country": "Zimbabwe",
      "Alpha-2 code": "ZW",
      "Alpha-3 code": "ZWE",
      "Numeric code": "716",
      "Latitude (average)": "-20",
      "Longitude (average)": "30"
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/services/covid19-stats.service.ts":
  /*!***********************************************!*\
    !*** ./src/services/covid19-stats.service.ts ***!
    \***********************************************/

  /*! exports provided: Covid19StatsService */

  /***/
  function srcServicesCovid19StatsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Covid19StatsService", function () {
      return Covid19StatsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Covid19StatsService = /*#__PURE__*/function () {
      function Covid19StatsService(http) {
        _classCallCheck(this, Covid19StatsService);

        this.http = http;
      }

      _createClass(Covid19StatsService, [{
        key: "getCovid19StatWorldwide",
        value: function getCovid19StatWorldwide() {
          return this.http.get('/global/latest');
        }
      }, {
        key: "getUpdatedCovid19Cases",
        value: function getUpdatedCovid19Cases() {
          return this.http.get('/global/total');
        }
      }, {
        key: "getYourCountryCovid19Cases",
        value: function getYourCountryCovid19Cases(country) {
          return this.http.get("/country/".concat(country, "/latest"));
        }
      }, {
        key: "getCovid19StatByDateWorldwide",
        value: function getCovid19StatByDateWorldwide() {
          return this.http.get('/global/date');
        }
      }]);

      return Covid19StatsService;
    }();

    Covid19StatsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    Covid19StatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], Covid19StatsService);
    /***/
  },

  /***/
  "./src/services/ip-location.service.ts":
  /*!*********************************************!*\
    !*** ./src/services/ip-location.service.ts ***!
    \*********************************************/

  /*! exports provided: IpLocationService */

  /***/
  function srcServicesIpLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpLocationService", function () {
      return IpLocationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var IpLocationService = /*#__PURE__*/function () {
      function IpLocationService(http) {
        _classCallCheck(this, IpLocationService);

        this.http = http;
      }

      _createClass(IpLocationService, [{
        key: "getIPAddress",
        value: function getIPAddress() {
          return this.http.get("http://api.ipify.org/?format=json");
        }
      }, {
        key: "getLocationFromIp",
        value: function getLocationFromIp(ip) {
          return this.http.get("https://ipapi.co/".concat(ip, "/json/"));
        }
      }]);

      return IpLocationService;
    }();

    IpLocationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    IpLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IpLocationService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sudip/Documents/repos/covid19-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map