(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_myalarms_myalarms_module_ts"], {
    /***/
    5858:
    /*!*****************************************************!*\
      !*** ./src/app/myalarms/myalarms-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyalarmsPageRoutingModule": function MyalarmsPageRoutingModule() {
          return (
            /* binding */
            _MyalarmsPageRoutingModule
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


      var _myalarms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myalarms.page */
      53373);

      var routes = [{
        path: '',
        component: _myalarms_page__WEBPACK_IMPORTED_MODULE_0__.MyalarmsPage
      }];

      var _MyalarmsPageRoutingModule = function MyalarmsPageRoutingModule() {
        _classCallCheck(this, MyalarmsPageRoutingModule);
      };

      _MyalarmsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyalarmsPageRoutingModule);
      /***/
    },

    /***/
    51881:
    /*!*********************************************!*\
      !*** ./src/app/myalarms/myalarms.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyalarmsPageModule": function MyalarmsPageModule() {
          return (
            /* binding */
            _MyalarmsPageModule
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


      var _myalarms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myalarms-routing.module */
      5858);
      /* harmony import */


      var _myalarms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myalarms.page */
      53373);

      var _MyalarmsPageModule = function MyalarmsPageModule() {
        _classCallCheck(this, MyalarmsPageModule);
      };

      _MyalarmsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _myalarms_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyalarmsPageRoutingModule],
        declarations: [_myalarms_page__WEBPACK_IMPORTED_MODULE_1__.MyalarmsPage]
      })], _MyalarmsPageModule);
      /***/
    },

    /***/
    53373:
    /*!*******************************************!*\
      !*** ./src/app/myalarms/myalarms.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyalarmsPage": function MyalarmsPage() {
          return (
            /* binding */
            _MyalarmsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_myalarms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./myalarms.page.html */
      14286);
      /* harmony import */


      var _myalarms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myalarms.page.scss */
      15349);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _MyalarmsPage = /*#__PURE__*/function () {
        function MyalarmsPage(router, http, toastCtrl, route, alertController) {
          var _this = this;

          _classCallCheck(this, MyalarmsPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.alertController = alertController;
          this.isVisible = false;
          this.storeAlarmList = [];
          this.productAlarmList = [];
          this.storeAlram = false;
          this.noDataFound = true;
          route.params.subscribe(function (val) {
            // this.getAlarmList()
            _this.getStoreAlarmList();

            _this.getproductAlarmList();
          });
        }

        _createClass(MyalarmsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //-------------- Navigate to searchpage ----------//

        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          } //-------------- Navigate to notificationpage  ----------//

        }, {
          key: "notification",
          value: function notification() {
            this.router.navigate(['/notification']);
          } //-------------- Navigate to setalarmpage  ----------//

        }, {
          key: "newAlarm",
          value: function newAlarm() {
            this.router.navigate(['/setalarm']);
          } //-------------- Get alarm List Api func  ----------//

        }, {
          key: "getAlarmList",
          value: function getAlarmList() {
            this.http.get('/list_all_alarm').subscribe(function (response) {}, function (error) {
              console.log(error);
            });
          } //---------- Delete storeAlarm ------------//

        }, {
          key: "deleteStoreAlarm",
          value: function deleteStoreAlarm(value) {
            this.storeAlram = true;
            this.tbid = value;
            this.presentAlertConfirm();
          } //---------- Delete productAlarm ------------//

        }, {
          key: "deleteProductAlarm",
          value: function deleteProductAlarm(value) {
            this.storeAlram = false;
            this.tbid = value;
            this.presentAlertConfirm();
          } //------------- Alart confirmation popup -----------//

        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'buttonCss ',
                        header: 'Are you sure want to delete?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'alert-danger',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: No');
                          }
                        }, {
                          text: 'Yes',
                          cssClass: 'buttonCss',
                          handler: function handler() {
                            console.log('Confirm Okay');
                            var obj = {
                              tbid: _this2.tbid
                            };
                            console.log(obj);

                            if (_this2.storeAlram == true) {
                              _this2.http.post('/delete_store_alarm', obj).subscribe(function (response) {
                                console.log(response);

                                if (response.success == "true") {
                                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    didOpen: function didOpen(toast) {
                                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                    }
                                  });
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Alarm Deleted successfully'
                                  });
                                  _this2.storeAlarmList = [];

                                  _this2.getStoreAlarmList();
                                }
                              }, function (error) {
                                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                  toast: true,
                                  position: 'top-end',
                                  showConfirmButton: false,
                                  timer: 1000,
                                  timerProgressBar: true,
                                  didOpen: function didOpen(toast) {
                                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                  }
                                });
                                Toast.fire({
                                  icon: 'error',
                                  title: 'Something Went Wrong'
                                });
                                console.log(error);
                              });
                            } else {
                              _this2.http.post('/delete_alarm_product', obj).subscribe(function (response) {
                                console.log(response);

                                if (response.success == "true") {
                                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    didOpen: function didOpen(toast) {
                                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                    }
                                  });
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Alarm Deleted successfully'
                                  });
                                  _this2.productAlarmList = [];

                                  _this2.getproductAlarmList();
                                }
                              }, function (error) {
                                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                  toast: true,
                                  position: 'top-end',
                                  showConfirmButton: false,
                                  timer: 1000,
                                  timerProgressBar: true,
                                  didOpen: function didOpen(toast) {
                                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                  }
                                });
                                Toast.fire({
                                  icon: 'error',
                                  title: 'Something Went Wrong'
                                });
                                console.log(error);
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //------------- Get StoreAlarmList -----------//

        }, {
          key: "getStoreAlarmList",
          value: function getStoreAlarmList() {
            var _this3 = this;

            this.http.get('/store_read_alarm').subscribe(function (response) {
              _this3.storeAlarmList = response.records;
              _this3.noDataFound = false;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          } //------------- Get ProductAlarmList -----------//

        }, {
          key: "getproductAlarmList",
          value: function getproductAlarmList() {
            var _this4 = this;

            this.http.get('/product_read_alarm').subscribe(function (response) {
              _this4.productAlarmList = response.records;
              console.log(response);
              _this4.noDataFound = false;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return MyalarmsPage;
      }();

      _MyalarmsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }];
      };

      _MyalarmsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-myalarms',
        template: _raw_loader_myalarms_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        //------------- Animations ----------//
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_myalarms_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyalarmsPage);
      /***/
    },

    /***/
    15349:
    /*!*********************************************!*\
      !*** ./src/app/myalarms/myalarms.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  height: 50px;\n}\n\n.dot {\n  margin: 2px;\n  height: 27px;\n  width: 30px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.btn-set-new-alarm {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #535252 0%, #0D0D0D 100%);\n  color: #fff;\n  width: 80%;\n  margin: 15px;\n  margin-left: -20px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWxhcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLDZCQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUNBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQU9JO0VBQ0ksYUFBQTtBQUxSIiwiZmlsZSI6Im15YWxhcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uZG90IHtcbiAgICBtYXJnaW46IDJweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5idG4tc2V0LW5ldy1hbGFybXtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzUzNTI1MlxuICAgIDAlLCAjMEQwRDBEXG4gICAgMTAwJSk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjoxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgfVxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhjZGJlMlxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSJdfQ== */";
      /***/
    },

    /***/
    14286:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myalarms/myalarms.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\" >\n  <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n        <svg  width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          </svg>\n      </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n        <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\" fill=\"black\"/>\n          <path d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\" fill=\"black\"/>\n          <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\"/>\n          </svg>\n          \n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h3><b>My Alarms:</b></h3>\n      </div>\n      <div class=\"col-6 ion-text-right\">\n        <button (click)=\"newAlarm()\" class=\"btn btn-sm btn-set-new-alarm\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle\"\n            viewBox=\"0 0 16 16\">\n            <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\" />\n            <path\n              d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\" />\n          </svg>\n          New Alarm</button>\n      </div>\n    </div>\n\n    <!---------- No data Gif ------------>\n    <div *ngIf=\"isVisible\">\n      <lottie-player src=\"https://assets9.lottiefiles.com/private_files/lf30_bn5winlb.json\" background=\"transparent\"\n        speed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player>\n    </div>\n\n    <!-- <h4 @slidelefttitle>Store Alarms:</h4> -->\n    <!--------- store alarms ---------->\n    <div *ngFor=\"let alarm of storeAlarmList\" class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\"  src=\"{{alarm.store_logo}}\" alt=\"\">\n          <span>{{alarm.store_name}}</span>\n        </div>\n        <div class=\"col-2 mt-2\">\n          <span style=\"margin-left: -5px;\" class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n              <svg (click)=\"deleteStoreAlarm(alarm.tbid)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\n                <path fill-rule=\"evenodd\"\n                  d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\n              </svg>\n            </span></span>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- <h4 @slidelefttitle>Product Alarms:</h4> -->\n    <!------------ product alarms ------------>\n\n    <div *ngFor=\"let alarm of productAlarmList\" class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"{{alarm.store_logo}}\" alt=\"\">\n          <span style=\"font-size: 14px;\">{{alarm.store_name}}/</span> <span style=\"font-size: 12px;\">\n            {{alarm.product}}</span>\n        </div>\n        <div class=\"col-2 mt-2\">\n          <span style=\"margin-left: -5px;\" class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n              <svg (click)=\"deleteProductAlarm(alarm.tbid)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\n                <path fill-rule=\"evenodd\"\n                  d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\n              </svg>\n            </span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-------------  No data found Gif ------------------->\n  <div style=\"margin-top: 35%;\" *ngIf=\"noDataFound\">\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\n  </div>\n  \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_myalarms_myalarms_module_ts-es5.js.map