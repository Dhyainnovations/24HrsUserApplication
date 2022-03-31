(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_signin_signin_module_ts"], {
    /***/
    11644:
    /*!*************************************************!*\
      !*** ./src/app/signin/signin-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPageRoutingModule": function SigninPageRoutingModule() {
          return (
            /* binding */
            _SigninPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin.page */
      61895);

      var routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
      }];

      var _SigninPageRoutingModule = function SigninPageRoutingModule() {
        _classCallCheck(this, SigninPageRoutingModule);
      };

      _SigninPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SigninPageRoutingModule);
      /***/
    },

    /***/
    87445:
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPageModule": function SigninPageModule() {
          return (
            /* binding */
            _SigninPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin-routing.module */
      11644);
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.page */
      61895);

      var _SigninPageModule = function SigninPageModule() {
        _classCallCheck(this, SigninPageModule);
      };

      _SigninPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
      })], _SigninPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_signin_signin_module_ts-es5.js.map