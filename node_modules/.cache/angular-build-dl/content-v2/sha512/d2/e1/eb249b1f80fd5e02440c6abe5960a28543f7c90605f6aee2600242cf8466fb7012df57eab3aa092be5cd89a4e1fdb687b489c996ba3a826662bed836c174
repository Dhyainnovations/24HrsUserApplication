(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["default-src_app_signin_signin_page_ts"], {
    /***/
    61895:
    /*!***************************************!*\
      !*** ./src/app/signin/signin.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPage": function SigninPage() {
          return (
            /* binding */
            _SigninPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signin.page.html */
      13746);
      /* harmony import */


      var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.page.scss */
      49180);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _SigninPage = /*#__PURE__*/function () {
        function SigninPage(modalCtrl, router, http, toastCtrl, route, platform) {
          var _this = this;

          _classCallCheck(this, SigninPage);

          this.modalCtrl = modalCtrl;
          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.platform = platform;
          this.intervalId = 0;
          this.message = '';
          this.seconds = 0;
          this.hour = 0;
          this.userInfo = null;
          this.loginsts = localStorage.getItem("loginstatus");
          this.mobileNumber = '';
          this.otp = '';
          this.sendOtpBtnVisible = false;
          this.submitBtnVisible = false;
          this.resendOtpVisible = false;
          this.timerVisible = false;
          route.params.subscribe(function (val) {
            _this.loginsts = localStorage.getItem("loginstatus");
            _this.mobileNumber = '';
            _this.otp = '';
          }); // this.platform.ready().then(async () => {
          //   GoogleAuth.initialize();
          // });
        } // async googleSignup() {
        //   const googleUser = await GoogleAuth.signIn() as any;
        //   console.log('my user: ', googleUser);
        //   this.userInfo = googleUser;
        // }


        _createClass(SigninPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.MobInputcolSize = 12;
            this.OtpInputcolSize = 12; // this.geolocation.getCurrentPosition().then((resp) => {
            //   this.lat = resp.coords.latitude
            //   this.lon = resp.coords.longitude
            // }).catch((error) => {
            //   console.log('Error getting location', error);
            // });
            // let watch = this.geolocation.watchPosition();
            // watch.subscribe((data) => {
            //   // data can be a set of coordinates, or an error (if an error occurred).
            //   // data.coords.latitude
            //   // data.coords.longitude
            // });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearTimer();
          }
        }, {
          key: "clearTimer",
          value: function clearTimer() {
            clearInterval(this.intervalId);
          }
        }, {
          key: "start",
          value: function start() {
            this.countDown();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.clearTimer();
            this.message = "$ ".concat(this.hour, " {this.seconds} ");
          }
        }, {
          key: "countDown",
          value: function countDown() {
            var _this2 = this;

            this.clearTimer();
            this.intervalId = window.setInterval(function () {
              _this2.seconds -= 1;

              if (_this2.seconds === 0) {// this.message = 'Offers Ends..!';
              } else {
                if (_this2.seconds < 0) {
                  _this2.seconds = 60;
                } // reset


                _this2.message = "".concat(_this2.hour, ". ").concat(_this2.seconds, "s");
              }
            }, 1000);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "enterMobile",
          value: function enterMobile() {
            this.MobInputcolSize = 8;
            this.sendOtpBtnVisible = true;
          }
        }, {
          key: "enterOtp",
          value: function enterOtp() {
            this.OtpInputcolSize = 8;
            this.submitBtnVisible = true;
          }
        }, {
          key: "sendOtp",
          value: function sendOtp() {
            var _this3 = this;

            this.seconds = 60;
            this.MobInputcolSize = 12;
            this.sendOtpBtnVisible = false;
            this.resendOtpVisible = true;
            var Data = {
              mobile_number: this.mobileNumber
            };
            console.log(Data);
            console.log(this.registersts); //--------------- Register Api ------------//

            this.http.post('/user_register', Data).subscribe(function (response) {
              console.log(response);
              _this3.loginsts = response.user_status;
            }, function (error) {
              console.log(error);
            }); //--------------- Get otp Api ------------//

            this.http.post('/user_get_otp', Data).subscribe(function (response) {
              console.log(response);
              _this3.registersts = response.user_status;
              localStorage.setItem("registerstatus", response.user_status);
            }, function (error) {
              console.log(error);
            });
          } //--------------------- Resent Otp ------------------//

        }, {
          key: "ResendOtp",
          value: function ResendOtp() {
            this.timerVisible = true;
            this.start();
            var Data = {
              mobile_number: this.mobileNumber
            };
            console.log(Data);
            this.http.post('/user_get_otp', Data).subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          } //------------------- signIn api call -----------//

        }, {
          key: "signIn",
          value: function signIn() {
            var _this4 = this;

            var Data = {
              mobile_number: this.mobileNumber,
              verify_otp: this.otp
            };
            this.http.post('/user_verify_otp', Data).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this4.dismiss();

                _this4.http.post('/user_login', Data).subscribe(function (response) {
                  console.log(response);
                  localStorage.setItem("token", response.token);
                  localStorage.setItem("tbid", response.tbid);
                  localStorage.setItem("mobilenumber", response.mobile_number);
                  var obj = {
                    id: response.tbid,
                    username: response.user_name,
                    mobile: response.mobile_number,
                    token: response.token,
                    loginstatus: response.user_status
                  };
                  _this4.loginsts = response.user_status;
                  console.log(obj);
                  var encodeText = btoa(JSON.stringify(obj));
                  localStorage.setItem("24hrs-user-data", encodeText);
                  localStorage.setItem("loginstatus", response.user_status);
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
                    title: 'Login successfully'
                  });
                  console.log(_this4.registersts);

                  if (_this4.registersts == "1" || _this4.loginsts == "First Login" && _this4.loginsts != undefined) {
                    console.log(_this4.registersts);
                    console.log("1st");

                    _this4.router.navigate(['/signuppage']);
                  } else {
                    console.log("2nd");

                    _this4.router.navigate(['/tabs']);
                  }
                }, function (error) {
                  console.log(error);
                });
              }
            }, function (error) {
              console.log(error);
            });
          } // ------------------- navigation checking -------------//
          // navigateTabs() {
          //   if (this.loginsts == "1") {
          //     console.log(this.loginsts);
          //     console.log("1st");
          //     this.router.navigate(['/signuppage'])
          //   }
          //   if (this.loginsts == "2") {
          //     console.log("2nd");
          //     this.router.navigate(['/homepage'])
          //   }
          // }

        }, {
          key: "signupPage",
          value: function signupPage() {
            this.router.navigate(['/signuppage']);
          }
        }, {
          key: "signin",
          value: function signin() {
            this.router.navigate(['/homepage']);
          }
        }, {
          key: "navigateToLocal",
          value: function navigateToLocal() {
            this.router.navigate(['/home']);
          }
        }]);

        return SigninPage;
      }();

      _SigninPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }];
      };

      _SigninPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SigninPage);
      /***/
    },

    /***/
    49180:
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-dark);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n\n.otp-btn {\n  color: #fff;\n  background-color: var(--ion-color-dark);\n  border: none !important;\n  font-size: 14px;\n  text-align: center;\n  height: 78%;\n  border-radius: 5px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUlBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBR0k7RUFDSSxhQUFBO0FBRFIiLCJmaWxlIjoic2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogLTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50aXRsZSBoNCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZm9yZ2V0IGEge1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbn1cblxuLm90cC1idG57XG4gICAgY29sb3I6I2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6NzglO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    13746:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content   class=\"ion-padding\">\n  <div class=\"title\">\n    <div class=\"row\">\n      <div class=\"col-10\">\n        <h4 ><b>Login</b></h4>\n      </div>\n      <div class=\"col-2\">\n        <div class=\"ion-margin-top ion-text-center\">\n          <svg (click)=\"dismiss()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\"/>\n            <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\n            <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\n            </svg>\n          </div>\n      </div>\n    </div>\n    <p>Lets get started</p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-{{MobInputcolSize}}\">\n      <ion-input style=\"color: #000000;\" [(ngModel)]=\"mobileNumber\" (keyup)=\"enterMobile()\" placeholder=\"Enter your mobile number\" class=\"primary-input\"></ion-input>\n    </div>\n    <div *ngIf=\"sendOtpBtnVisible\" color=\"dark\" class=\"col-4 \">\n      <button (click)=\"sendOtp()\" class=\" btn btn-sm otp-btn\">Send Otp</button>\n    </div>\n    <div *ngIf=\"resendOtpVisible\" class=\"row\">\n      <div (click)=\"ResendOtp()\" class=\"col-7\">\n        <p style=\"font-size: 14px;color:#000000;  \">\n          <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10 19L9.29289 18.2929L8.58579 19L9.29289 19.7071L10 19ZM13.2929 14.2929L9.29289 18.2929L10.7071 19.7071L14.7071 15.7071L13.2929 14.2929ZM9.29289 19.7071L13.2929 23.7071L14.7071 22.2929L10.7071 18.2929L9.29289 19.7071Z\" fill=\"#eb445a\"/>\n            <path d=\"M18.0622 8.5C18.6766 9.56413 19 10.7712 19 12C19 13.2288 18.6766 14.4359 18.0622 15.5C17.4478 16.5641 16.5641 17.4478 15.5 18.0622C14.4359 18.6766 13.2288 19 12 19\" stroke=\"#eb445a\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M14 5L14.7071 5.70711L15.4142 5L14.7071 4.29289L14 5ZM10.7071 9.70711L14.7071 5.70711L13.2929 4.29289L9.29289 8.29289L10.7071 9.70711ZM14.7071 4.29289L10.7071 0.292893L9.29289 1.70711L13.2929 5.70711L14.7071 4.29289Z\" fill=\"#eb445a\"/>\n            <path d=\"M5.93782 15.5C5.32344 14.4359 5 13.2288 5 12C5 10.7712 5.32344 9.56413 5.93782 8.5C6.5522 7.43587 7.43587 6.5522 8.5 5.93782C9.56413 5.32344 10.7712 5 12 5\" stroke=\"#eb445a\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            </svg>\n            Resend Otp</p>\n\n      </div>\n      <div class=\"col-5\">\n        <div *ngIf=\"timerVisible\"  class=\"row\">\n          <div class=\"col-6\">\n            <svg style=\"margin-left:10px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" fill=\"#121212\" class=\"bi bi-clock-history\" viewBox=\"0 0 16 16\">\n              <path d=\"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z\"/>\n              <path d=\"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z\"/>\n              <path d=\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"/>\n            </svg>\n          </div>\n          <div class=\"col-6\">\n            <p style=\"color:rgb(75, 72, 72);margin-left: -75%;margin-top: 2px;\"> {{message}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n \n  <ion-input style=\"color: #000000;\" (click)=\"enterOtp()\" [(ngModel)]=\"otp\" placeholder=\"Enter Otp\" type=\"password\" class=\"primary-input\"></ion-input>\n  <div class=\"ion-margin-top\">\n    <ion-button  [disabled]=\"otp == '' \" expand=\"block\" color=\"dark\" (click)=\"signIn()\">LOGIN</ion-button>\n  </div>\n\n  \n\n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_signin_signin_page_ts-es5.js.map