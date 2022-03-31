(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": function() { return /* binding */ Tab3PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": function() { return /* binding */ Tab3PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": function() { return /* binding */ Tab3Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 55160);











let Tab3Page = class Tab3Page {
    constructor(router, http, toastCtrl, route, alertController) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.city = ((localStorage.getItem("location")));
        this.mobileNumber = ((localStorage.getItem("mobilenumber")));
        this.locationsList = [];
        this.PopupModel = false;
        this.password = '';
        this.updateMobile = this.userdetails.mobile;
        this.getCategoryList = [];
        route.params.subscribe(val => {
            this.PopupModel = false;
            this.getSelectCategory();
            this.locationList();
            this.UserDetails();
        });
    }
    ngOnInit() {
    }
    UserDetails() {
        this.http.get('/user_details').subscribe((response) => {
            console.log(response);
            this.loginUserTbid = response.records.user_name;
            this.loginUserName = response.records.user_name;
            this.loginUserNumber = response.records.user_name;
            this.loginUserLocation = response.records.user_name;
            this.loginUserToken = response.records.user_name;
        }, (error) => {
            console.log(error);
        });
    }
    //-------------- Navigate to supportPage ----------//
    support() {
        this.router.navigate(['/support']);
    }
    backToprivious() {
        this.PopupModel = false;
    }
    popupModelOpen() {
        this.PopupModel = true;
    }
    //-------------- Navigate to change-categoryPage ----------//
    changeCategory() {
        this.router.navigate(['change-category']);
    }
    //-------------- update profile Api call ----------//
    updateProfile() {
        const updateData = {
            tbid: this.userdetails.id,
            user_name: this.updateUsername,
            mobile_number: this.updateMobile,
            location: this.city
        };
        console.log(updateData);
        this.http.post('/user_update_profile', updateData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.updateUsername = response.user_name;
                this.PopupModel = false;
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    //-------------- Navigate to homepage ----------//
    back() {
        this.router.navigate(['/homepage']);
    }
    //-------------- Delete account func ----------//
    deleteAccount() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'buttonCss ',
                header: 'Delete Your Account!',
                message: 'Are You <strong>Sure</strong>!!!',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'alert-danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: No');
                        }
                    }, {
                        text: 'Yes',
                        cssClass: 'buttonCss',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.showPrompt();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showPrompt() {
        this.alertController.create({
            cssClass: 'buttonCss ',
            header: 'Enter The Password To Delete Your Account',
            inputs: [
                {
                    name: 'Place',
                    placeholder: 'Password',
                    type: 'text'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: (data) => {
                        console.log('Canceled', data);
                    }
                },
                {
                    text: 'Delete Account!',
                    handler: (data) => {
                        this.password = data;
                        const obj = {
                            tbid: this.userdetails.id,
                            password: this.password
                        };
                        console.log(obj);
                        this.http.post('/user_delete_account', obj).subscribe((response) => {
                            console.log(response);
                            if (response.success == "true") {
                                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                                    }
                                });
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Account Deleted Successfully.'
                                });
                            }
                        }, (error) => {
                            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 1000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                                }
                            });
                            Toast.fire({
                                icon: 'error',
                                title: 'Something Went Wrong'
                            });
                            console.log(error);
                        });
                        console.log('Saved Information', data);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //----------- get store category List ---------//
    getSelectCategory() {
        this.http.get('/store_category_user').subscribe((response) => {
            this.getCategoryList = response.records;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
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
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        //------------- Animations ----------//
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.top-container {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  height: 28%;\n  border-bottom-left-radius: 25%;\n  border-bottom-right-radius: 25%;\n}\n\n.name {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: left;\n  font-style: bold;\n  font-weight: 550;\n}\n\n.edit-name {\n  font-size: 15px;\n  margin-top: 5px;\n}\n\n.profile {\n  width: 160px;\n  height: 125px;\n  position: relative;\n  margin-top: 15%;\n  border: 2px solid #ffffff;\n  border-radius: 30px;\n  z-index: 999;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 5%;\n  margin-bottom: 5px !important;\n}\n\n.card {\n  box-shadow: 2px 2px 2px 2px #ccc;\n  border-radius: 10px;\n  margin: 5px;\n  width: 80%;\n  text-align: left;\n}\n\n.col-6 {\n  margin-bottom: 7px !important;\n}\n\nspan {\n  margin: 15px !important;\n  font-size: 14px !important;\n}\n\nsvg {\n  margin-left: 5px !important;\n}\n\n.myproduct-div {\n  align-items: center !important;\n  justify-content: center !important;\n  text-align: center !important;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 8px;\n  margin-left: 2% !important;\n  margin-right: 5% !important;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 95% !important;\n  border-top-left-radius: 25%;\n  border-top-right-radius: 25%;\n}\n\nion-item {\n  --border-color: #fff;\n  text-align: left;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: 8px;\n  margin-left: -25px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #EB154B;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px solid #EB154B !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -215px !important;\n  z-index: 999;\n}\n\n#modal {\n  position: fixed;\n  top: 20% !important;\n  margin: 5%;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: linear-gradient(to left, #000000 0%, #000000 100%);\n  color: #fff;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.update-category-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #535252 0%, #0D0D0D 100%);\n  color: #fff;\n  height: 30px;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n}\n\n.delete-acc-btn {\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: linear-gradient(to left, #f34f78 0%, #EB154B 100%);\n  margin: 5px;\n  color: #fff;\n  width: 60% !important;\n}\n\n.buttonCss button.alert-button:nth-child(1) {\n  color: red;\n}\n\n.buttonCss button.alert-button:nth-child(2) {\n  color: green;\n}\n\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n  background: linear-gradient(to right, #dd5a7b 0%, #EB154B 100%);\n  border-radius: 16px;\n  box-shadow: 1 4px 71px rgba(17, 18, 13, 0.61);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n\n.welcomecard {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRjs7QUFHQTtFQUNFLDhEQUFBO0VBUUEsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBVEY7O0FBV0E7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVVBO0VBQ0UsNkJBQUE7QUFQRjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUFORjs7QUFTQTtFQUNFLDJCQUFBO0FBTkY7O0FBUUE7RUFDRSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFMRjs7QUFZQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVEY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFURjs7QUFXQTtFQUNFLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQVJGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBUEY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLDZCQUFBO0VBQ0UsNkJBQUE7RUFDQSw4REFBQTtFQUdGLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVRGOztBQVdBO0VBQ0UsNkJBQUE7RUFDQSw4REFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBVkY7O0FBY0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBYkY7O0FBa0JFO0VBQ0UsVUFBQTtBQWZKOztBQWtCRTtFQUNFLFlBQUE7QUFoQko7O0FBbUJBO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0UsK0RBQUE7RUFHQSwrREFBQTtFQUdBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0FBcEJKOztBQXdCQTtFQUNFLFVBQUE7QUFyQkYiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cblxuLnRvcC1jb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICAvLyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjYsIDE4OCwgMTU2LCAxKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsIDEpIDEwMCUpO1xuXHQvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjYsIDE4OCwgMTU2LCAxKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsIDEpIDEwMCUpO1xuXHQvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI2LCAxODgsIDE1NiwgMSkgMCUsIHJnYmEoMTQyLCA2OCwgMTczLCAxKSAxMDAlKTtcblxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhYTQ2ZTAgMjMlLCAjNWM2M2Y3IDc2JSk7XG4gIGhlaWdodDoyOCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICAyNSU7XG5cbn1cbi5uYW1le1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBib2xkO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG5cbi5lZGl0LW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9maWxle1xuICB3aWR0aDoxNjBweDtcbiAgaGVpZ2h0OjEyNXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgLy8gdG9wOjIwJTtcbiAgLy8gbGVmdDo1JTtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOjMwcHg7XG4gIHotaW5kZXg6IDk5OTtcblxufVxuLmVkaXRwcm9maWxle1xuICB3aWR0aDoxNTVweDtcbiAgaGVpZ2h0OjE1MHB4O1xuICBib3JkZXItcmFkaXVzOjUlO1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbi5jYXJke1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29sLTZ7XG4gIG1hcmdpbi1ib3R0b206IDdweCAhaW1wb3J0YW50O1xufVxuc3BhbntcbiAgbWFyZ2luOjE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnN2Z3tcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuLm15cHJvZHVjdC1kaXZ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbiAgd2lkdGg6OTUlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1JTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAyNSU7XG4gIFxuICB9XG5cbi8vIGlvbi1sYWJlbHtcbi8vICAgbWFyZ2luLWJvdHRvbToyNXB4O1xuLy8gfVxuaW9uLWl0ZW17XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46NXB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIFxuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCMTU0Qjtcbn1cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6MnB4IHNvbGlkICNFQjE1NEIhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICNlOWYzZmY7XG59XG4jY2FyZHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGhlaWdodDoxNTAlO1xuICB3aWR0aDoxNTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgbWFyZ2luLXRvcDogLTIxNXB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cbiNtb2RhbHtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHRvcDoyMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoOjk0JSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgIFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgXG59XG4udXBkYXRlLWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDAwMDBcbiAgICAwJSwgIzAwMDAwMFxuICAgIDEwMCUpO1xuICBjb2xvcjojZmZmO1xuICBoZWlnaHQ6MjVweDtcbiAgd2lkdGg6MjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOjE1cHggIWltcG9ydGFudDtcbn1cbi51cGRhdGUtY2F0ZWdvcnktYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM1MzUyNTJcbiAgMCUsICMwRDBEMERcbiAgMTAwJSk7XG4gIGNvbG9yOiNmZmY7XG4gIGhlaWdodDozMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIFxufVxuXG4uZGVsZXRlLWFjYy1idG57XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmMzRmNzhcbiAgMCUsICNFQjE1NEJcbiAgMTAwJSk7XG4gIG1hcmdpbjo1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25Dc3Mge1xuXG4gIGJ1dHRvbi5hbGVydC1idXR0b246bnRoLWNoaWxkKDEpe1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICBidXR0b24uYWxlcnQtYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbn1cbmlvbi1jaGlwe1xuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTdweCByZ2JhKDAsIDAsIDAsIDUuNSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTU1YzU5XG4gICAgMCUsICMxZDFmMWVcbiAgICAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkZDVhN2JcbiAgMCUsICNFQjE1NEJcbiAgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3gtc2hhZG93OiAxIDRweCA3MXB4IHJnYigxNyAxOCAxMyAvIDYxJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBcbn1cblxuLndlbGNvbWVjYXJke1xuICB3aWR0aDogOTUlO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngStyle]=\"{'opacity':PopupModel ? '0.52' : '1' }\">\n<!------------ Header  ---------------->\n<ion-toolbar color=\"light\" >\n  <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n        <svg  width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          </svg>\n      </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n        <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\" fill=\"black\"/>\n          <path d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\" fill=\"black\"/>\n          <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\"/>\n          </svg>\n          \n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n    <!------------ Display Login UserDetails ----------------->\n    <div class=\"row\">\n      <div class=\"col-9 mt-1 mx-4\">\n        <p style=\"color: #121212;font-size: 30px;\"><b>{{loginUserName}}</b>\n          <svg  (click)=\"popupModelOpen()\" style=\"margin: 5px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" >\n            <path d=\"M13.5 5.5L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L18.5 10.5C19.5171 9.48295 20.0256 8.97442 20.1384 8.36277C20.1826 8.12295 20.1826 7.87705 20.1384 7.63723C20.0256 7.02558 19.5171 6.51705 18.5 5.5C17.4829 4.48295 16.9744 3.97442 16.3628 3.8616C16.1229 3.81737 15.8771 3.81737 15.6372 3.8616C15.0256 3.97442 14.5171 4.48294 13.5 5.5Z\" fill=\"#0D0D0D\"/>\n            <path d=\"M12.2929 6.70711L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L17.2929 11.7071C17.6262 11.3738 17.7929 11.2071 17.7929 11C17.7929 10.7929 17.6262 10.6262 17.2929 10.2929L17.2929 10.2929L13.7071 6.70711C13.3738 6.37377 13.2071 6.20711 13 6.20711C12.7929 6.20711 12.6262 6.37377 12.2929 6.70711Z\" fill=\"#0D0D0D\"/>\n            </svg></p>\n\n        <p style=\"color: #121212;font-size: 15px;margin-top: -15px;\">{{loginUserNumber}}\n\n       \n            \n        </p>\n\n      </div>\n      <!-- <div class=\"col-12 ion-text-center\">\n        <img class=\"profile\" src=\"assets/sparrow.JPG\" alt=\"\">\n      </div> -->\n    </div>\n\n\n  <!------------ Show category's List ----------------->\n  <div  class=\"container welcomecard\">\n    <div class=\"row mt-3\">\n      <div class=\"col-6\">\n        <p class=\"name\">Categories :</p>\n      </div>\n      <div class=\"col-6 ion-text-right\">\n\n        <svg  (click)=\"changeCategory()\"  width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" >\n          <path d=\"M13.5 5.5L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L18.5 10.5C19.5171 9.48295 20.0256 8.97442 20.1384 8.36277C20.1826 8.12295 20.1826 7.87705 20.1384 7.63723C20.0256 7.02558 19.5171 6.51705 18.5 5.5C17.4829 4.48295 16.9744 3.97442 16.3628 3.8616C16.1229 3.81737 15.8771 3.81737 15.6372 3.8616C15.0256 3.97442 14.5171 4.48294 13.5 5.5Z\" fill=\"#0D0D0D\"/>\n          <path d=\"M12.2929 6.70711L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L17.2929 11.7071C17.6262 11.3738 17.7929 11.2071 17.7929 11C17.7929 10.7929 17.6262 10.6262 17.2929 10.2929L17.2929 10.2929L13.7071 6.70711C13.3738 6.37377 13.2071 6.20711 13 6.20711C12.7929 6.20711 12.6262 6.37377 12.2929 6.70711Z\" fill=\"#0D0D0D\"/>\n          </svg>\n      </div>\n      <div class=\"col-12 mb-4\">\n        <div class=\"container mt-1\" id=\"SelectedList\">\n          <ion-chip *ngFor=\"let category of getCategoryList\">\n            <ion-label><b>{{category.store_category}}</b></ion-label>\n          </ion-chip>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!------------ Delete Account button ----------------->\n  <div class=\"ion-text-center\" style=\"margin-top: 20%;\">\n    <button (click)=\"deleteAccount()\" class=\"btn btn-sm delete-acc-btn \">Delete My Account</button>\n  </div>\n\n\n</ion-content>\n\n  <!------------ update profile PopUp ----------------->\n  <div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n    <div class=\"row\" id=\"modal\">\n      <div class=\"hidden\">\n        <div class=\"col-12 ion-text-right \" style=\"margin-top: 20px;\">\n         \n            <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" width=\"24\" height=\"27\" viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g filter=\"url(#filter0_d_1056_2574)\">\n              <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              </g>\n              <defs>\n              <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n              <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n              <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n              <feOffset dy=\"4\"/>\n              <feGaussianBlur stdDeviation=\"2\"/>\n              <feComposite in2=\"hardAlpha\" operator=\"out\"/>\n              <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"/>\n              <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\"/>\n              <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\"/>\n              </filter>\n              </defs>\n              </svg>\n        </div>\n        <h5 style=\"margin:10px; color: #5C5C5C;\"> <b>Edit Here:</b></h5>\n        <div class=\"row ion-text-center mb-2\">\n          <div class=\"col-4\">\n            <svg width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z\" fill=\"#7E869E\" fill-opacity=\"0.25\"/>\n              <circle cx=\"12\" cy=\"10\" r=\"4\" fill=\"white\"/>\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.2209 18.2462C18.2791 18.3426 18.2613 18.466 18.1795 18.5432C16.5675 20.0662 14.3928 21 12 21C9.60731 21 7.43267 20.0663 5.8206 18.5433C5.7388 18.466 5.72104 18.3427 5.77921 18.2463C6.9434 16.318 9.29218 15 12.0001 15C14.708 15 17.0567 16.3179 18.2209 18.2462Z\" fill=\"white\"/>\n              </svg>\n              \n          </div>\n          <div class=\"col-8\" >\n            <input style=\"width: 90%;\" type=\"text\" id=\"edit-field\" placeholder=\"Username\" [(ngModel)]=\"updateUsername\" maxlength=\"10\">\n          </div>\n        </div>\n    \n        <div class=\"row mb-2\">\n          <div class=\"col-4\">\n            <svg style=\"margin-left: 25% !important;\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z\" fill=\"#007CFF\"/>\n              <path d=\"M27 21.7215C25.0583 21.7215 23.2065 21.2985 21.4988 20.4638C21.231 20.3355 20.9205 20.3152 20.637 20.412C20.3535 20.511 20.1218 20.718 19.9913 20.9857L19.1812 22.662C16.7512 21.267 14.7352 19.2487 13.338 16.8187L15.0165 16.0087C15.2865 15.8782 15.4912 15.6465 15.5902 15.363C15.687 15.0795 15.669 14.769 15.5385 14.5013C14.7015 12.7958 14.2785 10.944 14.2785 9C14.2785 8.379 13.7745 7.875 13.1535 7.875H9C8.379 7.875 7.875 8.379 7.875 9C7.875 19.5457 16.4543 28.125 27 28.125C27.621 28.125 28.125 27.621 28.125 27V22.8465C28.125 22.2255 27.621 21.7215 27 21.7215Z\" fill=\"white\"/>\n              </svg>\n              \n          </div>\n          <div class=\"col-8\" style=\"padding-left: 11%;\">\n            <input disabled type=\"text\" id=\"edit-field\" placeholder=\"Mobile number\" [(ngModel)]=\"mobileNumber\">\n    \n          </div>\n        </div>\n        <div class=\"row mb-2\">\n          <div class=\"col-4\">\n            <img src=\"assets/gif/location.gif\" alt=\"\">\n          </div>\n          <div class=\"col-8\">\n            <ion-item>\n              <ion-label style=\"font-size:15px !important;color: #121212;margin-left: 0px;\">{{city}}</ion-label>\n              <ion-select style=\"font-size: 0px;\" [(ngModel)]=\"city\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </div>\n\n        <div style=\"width: 100%; text-align: center;\">\n          <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\"><b>Update</b></button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts-es2015.js.map