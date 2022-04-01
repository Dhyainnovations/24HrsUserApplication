(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["default-src_app_signup_signup_page_ts"],{

/***/ 80771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 21355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 74194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 55160);










let SignupPage = class SignupPage {
    constructor(router, http, toastCtrl, popoverController, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.route = route;
        this.userTbid = ((localStorage.getItem("loginstatus")));
        this.mobilenumber = ((localStorage.getItem("mobilenumber")));
        this.userName = "";
        this.mobileNumber = 8838373520;
        this.locationsList = [];
        this.route.queryParams.subscribe(queryParams => {
            this.locationList();
        });
    }
    ngOnInit() {
        this.locationList();
    }
    locationList() {
        this.http.get('/list_location').subscribe((response) => {
            console.log(response);
            this.locationsList = response.records;
            console.log(response.records.city);
        }, (error) => {
            console.log(error);
        });
    }
    userDetailsUpload() {
        const data = {
            "tbid": this.userTbid,
            "user_name": this.userName,
            "mobile_number": this.mobilenumber,
            "location": this.location
        };
        console.log(data);
        this.http.post('/user_update_profile', data).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                localStorage.setItem("userName", this.userName);
                localStorage.setItem("location", this.location);
                this.router.navigate(['/selectcategories']);
            }
        }, (error) => {
            console.log(error);
        });
    }
    navigateHome() {
        this.router.navigate(['/selectcategories']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('600ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 74194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".get-started {\n  font-size: 20px;\n  color: #4d4848;\n  margin: 8px;\n}\n\n.myproduct-div {\n  position: absolute;\n  top: 18%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  margin-top: 18px !important;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #EB154B;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid #EB154B;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #535252 0%, #0D0D0D 100%);\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 5px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #EB154B;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 5px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\n.row {\n  margin-bottom: 10px !important;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nmodal-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n@media not all and (min-height: 600px) and (min-width: 768px) {\n  ion-modal ion-backdrop {\n    visibility: hidden;\n  }\n}\n\n@media only screen and (min-height: 0px) and (min-width: 0px) {\n  .modal-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0VBR0EsZ0NBQUE7QUFBSjs7QUFFRTtFQUNFLDZCQUFBO0VBQ0YsOERBQUE7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFDRTtFQUNJLGFBQUE7QUFDTjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFO0lBQ0Usa0JBQUE7RUFGSjtBQUNGOztBQUtFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFISjtBQUNGIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LXN0YXJ0ZWQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvciAgICA6ICM0ZDQ4NDg7XG4gICAgbWFyZ2luICAgOiA4cHg7XG59XG5cbi5teXByb2R1Y3QtZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTglO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbiAgICB3aWR0aDo5NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46NXB4O1xuICAgIFxuICB9XG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQjE1NEI7O1xuICB9XG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDJweCAjMjNkNWFiO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUIxNTRCOztcbiAgfVxuICAudXBkYXRlLWJ0bntcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM1MzUyNTJcbiAgMCUsICMwRDBEMERcbiAgMTAwJSk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICB3aWR0aDo1NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQgO1xufVxuLnNraXAtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6I0VCMTU0QjtcbiAgaGVpZ2h0OjI1cHg7XG4gIHdpZHRoOjI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjo1cHggIWltcG9ydGFudDtcbn1cbmxvdHRpZS1wbGF5ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWxlY3R7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gXG59XG4ucm93e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojRjRGN0ZBICAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxubW9kYWwtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgQG1lZGlhIG5vdCBhbGwgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLW1vZGFsIGlvbi1iYWNrZHJvcCB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAwcHgpIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cblxuXG4gICJdfQ== */");

/***/ }),

/***/ 21355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"mt-2\">\n  <div class=\"myproduct-div mt-5 \">\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <ion-icon (click)=\"navigateHome()\" style=\"margin:20px;cursor:pointer;color:#EB154B\" name=\"close\"></ion-icon>\n\n      </div>\n\n      <div class=\"col-5 ion-text-center\">\n        <span class=\"seller\"><b>24hrs</b></span>\n        <!-- <img id=\"logo\" height=\"100px\" width=\"120px\" src=\"assets/logo.jpeg\" alt=\"\"> -->\n      </div>\n\n    </div>\n    <p class=\"get-started mt-2 mx-3\"><b>Getting Started</b></p>\n\n\n\n\n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z\" fill=\"#7E869E\" fill-opacity=\"0.25\"/>\n          <circle cx=\"12\" cy=\"10\" r=\"4\" fill=\"white\"/>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.2209 18.2462C18.2791 18.3426 18.2613 18.466 18.1795 18.5432C16.5675 20.0662 14.3928 21 12 21C9.60731 21 7.43267 20.0663 5.8206 18.5433C5.7388 18.466 5.72104 18.3427 5.77921 18.2463C6.9434 16.318 9.29218 15 12.0001 15C14.708 15 17.0567 16.3179 18.2209 18.2462Z\" fill=\"white\"/>\n          </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Username\" [(ngModel)]=\"userName\" maxlength=\"10\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <svg style=\"margin-left: 25% !important;\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z\" fill=\"#007CFF\"/>\n          <path d=\"M27 21.7215C25.0583 21.7215 23.2065 21.2985 21.4988 20.4638C21.231 20.3355 20.9205 20.3152 20.637 20.412C20.3535 20.511 20.1218 20.718 19.9913 20.9857L19.1812 22.662C16.7512 21.267 14.7352 19.2487 13.338 16.8187L15.0165 16.0087C15.2865 15.8782 15.4912 15.6465 15.5902 15.363C15.687 15.0795 15.669 14.769 15.5385 14.5013C14.7015 12.7958 14.2785 10.944 14.2785 9C14.2785 8.379 13.7745 7.875 13.1535 7.875H9C8.379 7.875 7.875 8.379 7.875 9C7.875 19.5457 16.4543 28.125 27 28.125C27.621 28.125 28.125 27.621 28.125 27V22.8465C28.125 22.2255 27.621 21.7215 27 21.7215Z\" fill=\"white\"/>\n          </svg>\n      </div>\n      <div class=\"col-8\">\n        <input disabled type=\"text\" id=\"edit-field\" placeholder=\"Mobile number\" [(ngModel)]=\"mobileNumber\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <img src=\"assets/gif/location.gif\" alt=\"\">\n      </div>\n      <div class=\"col-8\">\n        <ion-item>\n          <svg style=\"margin: 5px;\" (click)=\"locationChange()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n            fill=\"#EB154B\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" />\n          </svg>\n          <ion-label style=\"font-size:13px !important;color: #121212;\">{{city}}</ion-label>\n          <ion-select (ionChange)=\"changeLocation()\" style=\"font-size: 10px;\" [(ngModel)]=\"city\" interface=\"popover\">\n            <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </div>\n\n\n    <div class=\"row \">\n      <div class=\"col-7\">\n        <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\n      </div>\n      <div class=\"col-5\">\n        <button (click)=\"userDetailsUpload()\" type=\"button\" class=\"btn btn-success btn-sm update-btn\">Next</button>\n      </div>\n    </div>\n  </div>\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_signup_signup_page_ts-es2015.js.map