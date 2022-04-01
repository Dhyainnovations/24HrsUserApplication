(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    86640:
    /*!****************************************************************************************!*\
      !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgSelectComponent": function NgSelectComponent() {
          return (
            /* binding */
            _NgSelectComponent
          );
        },

        /* harmony export */
        "NgSelectConfig": function NgSelectConfig() {
          return (
            /* binding */
            _NgSelectConfig
          );
        },

        /* harmony export */
        "NgSelectModule": function NgSelectModule() {
          return (
            /* binding */
            _NgSelectModule
          );
        },

        /* harmony export */
        "SELECTION_MODEL_FACTORY": function SELECTION_MODEL_FACTORY() {
          return (
            /* binding */
            _SELECTION_MODEL_FACTORY
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            DefaultSelectionModelFactory
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            DefaultSelectionModel
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            NgDropdownPanelService
          );
        },

        /* harmony export */
        "ɵe": function ɵe() {
          return (
            /* binding */
            NgItemLabelDirective
          );
        },

        /* harmony export */
        "ɵf": function ɵf() {
          return (
            /* binding */
            NgOptionTemplateDirective
          );
        },

        /* harmony export */
        "ɵg": function ɵg() {
          return (
            /* binding */
            NgOptgroupTemplateDirective
          );
        },

        /* harmony export */
        "ɵh": function ɵh() {
          return (
            /* binding */
            NgLabelTemplateDirective
          );
        },

        /* harmony export */
        "ɵi": function ɵi() {
          return (
            /* binding */
            NgMultiLabelTemplateDirective
          );
        },

        /* harmony export */
        "ɵj": function ɵj() {
          return (
            /* binding */
            NgHeaderTemplateDirective
          );
        },

        /* harmony export */
        "ɵk": function ɵk() {
          return (
            /* binding */
            NgFooterTemplateDirective
          );
        },

        /* harmony export */
        "ɵl": function ɵl() {
          return (
            /* binding */
            NgNotFoundTemplateDirective
          );
        },

        /* harmony export */
        "ɵm": function ɵm() {
          return (
            /* binding */
            NgTypeToSearchTemplateDirective
          );
        },

        /* harmony export */
        "ɵn": function ɵn() {
          return (
            /* binding */
            NgLoadingTextTemplateDirective
          );
        },

        /* harmony export */
        "ɵo": function ɵo() {
          return (
            /* binding */
            NgTagTemplateDirective
          );
        },

        /* harmony export */
        "ɵp": function ɵp() {
          return (
            /* binding */
            NgLoadingSpinnerTemplateDirective
          );
        },

        /* harmony export */
        "ɵq": function ɵq() {
          return (
            /* binding */
            NgDropdownPanelComponent
          );
        },

        /* harmony export */
        "ɵr": function ɵr() {
          return (
            /* binding */
            NgOptionComponent
          );
        },

        /* harmony export */
        "ɵs": function ɵs() {
          return (
            /* binding */
            ConsoleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      45697);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      54857);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      58571);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["content"];
      var _c1 = ["scroll"];
      var _c2 = ["padding"];

      var _c3 = function _c3(a0) {
        return {
          searchTerm: a0
        };
      };

      function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
        }
      }

      function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
        }
      }

      var _c4 = ["*"];
      var _c5 = ["searchInput"];

      function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.unselect(item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
        }
      }

      function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

      var _c6 = function _c6(a0, a1, a2) {
        return {
          item: a0,
          clear: a1,
          label: a2
        };
      };

      function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
        }
      }

      function NgSelectComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
        }
      }

      function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

      var _c7 = function _c7(a0, a1) {
        return {
          items: a0,
          clear: a1
        };
      };

      function NgSelectComponent_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
        }
      }

      function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
        }
      }

      function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
        }
      }

      function NgSelectComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

      var _c8 = function _c8(a0, a1, a2, a3) {
        return {
          item: a0,
          item$: a1,
          index: a2,
          searchTerm: a3
        };
      };

      function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var item_r24 = restoredCtx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.toggleItem(item_r24);
          })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var item_r24 = restoredCtx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.onItemHover(item_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.itemsList.unmarkItem();
          })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.selectTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.viewPortItems = $event;
          })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.scroll.emit($event);
          })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.scrollToEnd.emit($event);
          })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
        }
      }

      var unescapedHTMLExp = /[&<>"']/g;
      var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      };

      function escapeHTML(string) {
        return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp, function (chr) {
          return htmlEscapes[chr];
        }) : string;
      }

      function isDefined(value) {
        return value !== undefined && value !== null;
      }

      function isObject(value) {
        return typeof value === 'object' && isDefined(value);
      }

      function isPromise(value) {
        return value instanceof Promise;
      }

      function isFunction(value) {
        return value instanceof Function;
      }

      var NgItemLabelDirective = /*#__PURE__*/function () {
        function NgItemLabelDirective(element) {
          _classCallCheck(this, NgItemLabelDirective);

          this.element = element;
          this.escape = true;
        }

        _createClass(NgItemLabelDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
          }
        }]);

        return NgItemLabelDirective;
      }();

      NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
        return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      NgItemLabelDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgItemLabelDirective,
        selectors: [["", "ngItemLabel", ""]],
        inputs: {
          escape: "escape",
          ngItemLabel: "ngItemLabel"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      NgItemLabelDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      NgItemLabelDirective.propDecorators = {
        ngItemLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        escape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngItemLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var NgOptionTemplateDirective = function NgOptionTemplateDirective(template) {
        _classCallCheck(this, NgOptionTemplateDirective);

        this.template = template;
      };

      NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
        return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgOptionTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgOptionTemplateDirective,
        selectors: [["", "ng-option-tmp", ""]]
      });

      NgOptionTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-option-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgOptgroupTemplateDirective = function NgOptgroupTemplateDirective(template) {
        _classCallCheck(this, NgOptgroupTemplateDirective);

        this.template = template;
      };

      NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
        return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgOptgroupTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgOptgroupTemplateDirective,
        selectors: [["", "ng-optgroup-tmp", ""]]
      });

      NgOptgroupTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-optgroup-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgLabelTemplateDirective = function NgLabelTemplateDirective(template) {
        _classCallCheck(this, NgLabelTemplateDirective);

        this.template = template;
      };

      NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
        return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgLabelTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLabelTemplateDirective,
        selectors: [["", "ng-label-tmp", ""]]
      });

      NgLabelTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-label-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgMultiLabelTemplateDirective = function NgMultiLabelTemplateDirective(template) {
        _classCallCheck(this, NgMultiLabelTemplateDirective);

        this.template = template;
      };

      NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
        return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgMultiLabelTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgMultiLabelTemplateDirective,
        selectors: [["", "ng-multi-label-tmp", ""]]
      });

      NgMultiLabelTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-multi-label-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgHeaderTemplateDirective = function NgHeaderTemplateDirective(template) {
        _classCallCheck(this, NgHeaderTemplateDirective);

        this.template = template;
      };

      NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
        return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgHeaderTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgHeaderTemplateDirective,
        selectors: [["", "ng-header-tmp", ""]]
      });

      NgHeaderTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-header-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgFooterTemplateDirective = function NgFooterTemplateDirective(template) {
        _classCallCheck(this, NgFooterTemplateDirective);

        this.template = template;
      };

      NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
        return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgFooterTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgFooterTemplateDirective,
        selectors: [["", "ng-footer-tmp", ""]]
      });

      NgFooterTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-footer-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgNotFoundTemplateDirective = function NgNotFoundTemplateDirective(template) {
        _classCallCheck(this, NgNotFoundTemplateDirective);

        this.template = template;
      };

      NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
        return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgNotFoundTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgNotFoundTemplateDirective,
        selectors: [["", "ng-notfound-tmp", ""]]
      });

      NgNotFoundTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-notfound-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgTypeToSearchTemplateDirective = function NgTypeToSearchTemplateDirective(template) {
        _classCallCheck(this, NgTypeToSearchTemplateDirective);

        this.template = template;
      };

      NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
        return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgTypeToSearchTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTypeToSearchTemplateDirective,
        selectors: [["", "ng-typetosearch-tmp", ""]]
      });

      NgTypeToSearchTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-typetosearch-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgLoadingTextTemplateDirective = function NgLoadingTextTemplateDirective(template) {
        _classCallCheck(this, NgLoadingTextTemplateDirective);

        this.template = template;
      };

      NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
        return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgLoadingTextTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLoadingTextTemplateDirective,
        selectors: [["", "ng-loadingtext-tmp", ""]]
      });

      NgLoadingTextTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-loadingtext-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgTagTemplateDirective = function NgTagTemplateDirective(template) {
        _classCallCheck(this, NgTagTemplateDirective);

        this.template = template;
      };

      NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
        return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgTagTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTagTemplateDirective,
        selectors: [["", "ng-tag-tmp", ""]]
      });

      NgTagTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-tag-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgLoadingSpinnerTemplateDirective = function NgLoadingSpinnerTemplateDirective(template) {
        _classCallCheck(this, NgLoadingSpinnerTemplateDirective);

        this.template = template;
      };

      NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
        return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgLoadingSpinnerTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLoadingSpinnerTemplateDirective,
        selectors: [["", "ng-loadingspinner-tmp", ""]]
      });

      NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-loadingspinner-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var ConsoleService = /*#__PURE__*/function () {
        function ConsoleService() {
          _classCallCheck(this, ConsoleService);
        }

        _createClass(ConsoleService, [{
          key: "warn",
          value: function warn(message) {
            console.warn(message);
          }
        }]);

        return ConsoleService;
      }();

      ConsoleService.ɵfac = function ConsoleService_Factory(t) {
        return new (t || ConsoleService)();
      };

      ConsoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ConsoleService_Factory() {
          return new ConsoleService();
        },
        token: ConsoleService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      function newId() {
        // First character is an 'a', it's good practice to tag id to begin with a letter
        return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
          // tslint:disable-next-line:no-bitwise
          var val = Math.random() * 16 | 0;
          return val.toString(16);
        });
      }

      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03C9": "\u03C9",
        "\u03C2": "\u03C3"
      };

      function stripSpecialChars(text) {
        var match = function match(a) {
          return diacritics[a] || a;
        };

        return text.replace(/[^\u0000-\u007E]/g, match);
      }

      var ItemsList = /*#__PURE__*/function () {
        function ItemsList(_ngSelect, _selectionModel) {
          _classCallCheck(this, ItemsList);

          this._ngSelect = _ngSelect;
          this._selectionModel = _selectionModel;
          this._items = [];
          this._filteredItems = [];
          this._markedIndex = -1;
        }

        _createClass(ItemsList, [{
          key: "items",
          get: function get() {
            return this._items;
          }
        }, {
          key: "filteredItems",
          get: function get() {
            return this._filteredItems;
          }
        }, {
          key: "markedIndex",
          get: function get() {
            return this._markedIndex;
          }
        }, {
          key: "selectedItems",
          get: function get() {
            return this._selectionModel.value;
          }
        }, {
          key: "markedItem",
          get: function get() {
            return this._filteredItems[this._markedIndex];
          }
        }, {
          key: "noItemsToSelect",
          get: function get() {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
          }
        }, {
          key: "maxItemsSelected",
          get: function get() {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
          }
        }, {
          key: "lastSelectedItem",
          get: function get() {
            var i = this.selectedItems.length - 1;

            for (; i >= 0; i--) {
              var item = this.selectedItems[i];

              if (!item.disabled) {
                return item;
              }
            }

            return null;
          }
        }, {
          key: "setItems",
          value: function setItems(items) {
            var _this = this;

            this._items = items.map(function (item, index) {
              return _this.mapItem(item, index);
            });

            if (this._ngSelect.groupBy) {
              this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
              this._items = this._flatten(this._groups);
            } else {
              this._groups = new Map();

              this._groups.set(undefined, this._items);
            }

            this._filteredItems = _toConsumableArray(this._items);
          }
        }, {
          key: "select",
          value: function select(item) {
            if (item.selected || this.maxItemsSelected) {
              return;
            }

            var multiple = this._ngSelect.multiple;

            if (!multiple) {
              this.clearSelected();
            }

            this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

            if (this._ngSelect.hideSelected) {
              this._hideSelected(item);
            }
          }
        }, {
          key: "unselect",
          value: function unselect(item) {
            if (!item.selected) {
              return;
            }

            this._selectionModel.unselect(item, this._ngSelect.multiple);

            if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
              this._showSelected(item);
            }
          }
        }, {
          key: "findItem",
          value: function findItem(value) {
            var _this2 = this;

            var findBy;

            if (this._ngSelect.compareWith) {
              findBy = function findBy(item) {
                return _this2._ngSelect.compareWith(item.value, value);
              };
            } else if (this._ngSelect.bindValue) {
              findBy = function findBy(item) {
                return !item.children && _this2.resolveNested(item.value, _this2._ngSelect.bindValue) === value;
              };
            } else {
              findBy = function findBy(item) {
                return item.value === value || !item.children && item.label && item.label === _this2.resolveNested(value, _this2._ngSelect.bindLabel);
              };
            }

            return this._items.find(function (item) {
              return findBy(item);
            });
          }
        }, {
          key: "addItem",
          value: function addItem(item) {
            var option = this.mapItem(item, this._items.length);

            this._items.push(option);

            this._filteredItems.push(option);

            return option;
          }
        }, {
          key: "clearSelected",
          value: function clearSelected() {
            var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this._selectionModel.clear(keepDisabled);

            this._items.forEach(function (item) {
              item.selected = keepDisabled && item.selected && item.disabled;
              item.marked = false;
            });

            if (this._ngSelect.hideSelected) {
              this.resetFilteredItems();
            }
          }
        }, {
          key: "findByLabel",
          value: function findByLabel(term) {
            term = stripSpecialChars(term).toLocaleLowerCase();
            return this.filteredItems.find(function (item) {
              var label = stripSpecialChars(item.label).toLocaleLowerCase();
              return label.substr(0, term.length) === term;
            });
          }
        }, {
          key: "filter",
          value: function filter(term) {
            var _this3 = this;

            if (!term) {
              this.resetFilteredItems();
              return;
            }

            this._filteredItems = [];
            term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
            var match = this._ngSelect.searchFn || this._defaultSearchFn;
            var hideSelected = this._ngSelect.hideSelected;

            for (var _i = 0, _Array$from = Array.from(this._groups.keys()); _i < _Array$from.length; _i++) {
              var key = _Array$from[_i];
              var matchedItems = [];

              var _iterator = _createForOfIteratorHelper(this._groups.get(key)),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;

                  if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                  }

                  var searchItem = this._ngSelect.searchFn ? item.value : item;

                  if (match(term, searchItem)) {
                    matchedItems.push(item);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (matchedItems.length > 0) {
                (function () {
                  var _this3$_filteredItems;

                  var _matchedItems$slice = matchedItems.slice(-1),
                      _matchedItems$slice2 = _slicedToArray(_matchedItems$slice, 1),
                      last = _matchedItems$slice2[0];

                  if (last.parent) {
                    var head = _this3._items.find(function (x) {
                      return x === last.parent;
                    });

                    _this3._filteredItems.push(head);
                  }

                  (_this3$_filteredItems = _this3._filteredItems).push.apply(_this3$_filteredItems, matchedItems);
                })();
              }
            }
          }
        }, {
          key: "resetFilteredItems",
          value: function resetFilteredItems() {
            if (this._filteredItems.length === this._items.length) {
              return;
            }

            if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
              this._filteredItems = this._items.filter(function (x) {
                return !x.selected;
              });
            } else {
              this._filteredItems = this._items;
            }
          }
        }, {
          key: "unmarkItem",
          value: function unmarkItem() {
            this._markedIndex = -1;
          }
        }, {
          key: "markNextItem",
          value: function markNextItem() {
            this._stepToItem(+1);
          }
        }, {
          key: "markPreviousItem",
          value: function markPreviousItem() {
            this._stepToItem(-1);
          }
        }, {
          key: "markItem",
          value: function markItem(item) {
            this._markedIndex = this._filteredItems.indexOf(item);
          }
        }, {
          key: "markSelectedOrDefault",
          value: function markSelectedOrDefault(markDefault) {
            if (this._filteredItems.length === 0) {
              return;
            }

            var lastMarkedIndex = this._getLastMarkedIndex();

            if (lastMarkedIndex > -1) {
              this._markedIndex = lastMarkedIndex;
            } else {
              this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) {
                return !x.disabled;
              }) : -1;
            }
          }
        }, {
          key: "resolveNested",
          value: function resolveNested(option, key) {
            if (!isObject(option)) {
              return option;
            }

            if (key.indexOf('.') === -1) {
              return option[key];
            } else {
              var keys = key.split('.');
              var value = option;

              for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                  return null;
                }

                value = value[keys[i]];
              }

              return value;
            }
          }
        }, {
          key: "mapItem",
          value: function mapItem(item, index) {
            var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
            var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
            return {
              index: index,
              label: isDefined(label) ? label.toString() : '',
              value: value,
              disabled: item.disabled,
              htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
            };
          }
        }, {
          key: "mapSelectedItems",
          value: function mapSelectedItems() {
            var _this4 = this;

            var multiple = this._ngSelect.multiple;

            var _iterator2 = _createForOfIteratorHelper(this.selectedItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var selected = _step2.value;
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                var item = isDefined(value) ? this.findItem(value) : null;

                this._selectionModel.unselect(selected, multiple);

                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (this._ngSelect.hideSelected) {
              this._filteredItems = this.filteredItems.filter(function (x) {
                return _this4.selectedItems.indexOf(x) === -1;
              });
            }
          }
        }, {
          key: "_showSelected",
          value: function _showSelected(item) {
            this._filteredItems.push(item);

            if (item.parent) {
              var parent = item.parent;

              var parentExists = this._filteredItems.find(function (x) {
                return x === parent;
              });

              if (!parentExists) {
                this._filteredItems.push(parent);
              }
            } else if (item.children) {
              var _iterator3 = _createForOfIteratorHelper(item.children),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var child = _step3.value;
                  child.selected = false;

                  this._filteredItems.push(child);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            this._filteredItems = _toConsumableArray(this._filteredItems.sort(function (a, b) {
              return a.index - b.index;
            }));
          }
        }, {
          key: "_hideSelected",
          value: function _hideSelected(item) {
            this._filteredItems = this._filteredItems.filter(function (x) {
              return x !== item;
            });

            if (item.parent) {
              var children = item.parent.children;

              if (children.every(function (x) {
                return x.selected;
              })) {
                this._filteredItems = this._filteredItems.filter(function (x) {
                  return x !== item.parent;
                });
              }
            } else if (item.children) {
              this._filteredItems = this.filteredItems.filter(function (x) {
                return x.parent !== item;
              });
            }
          }
        }, {
          key: "_defaultSearchFn",
          value: function _defaultSearchFn(search, opt) {
            var label = stripSpecialChars(opt.label).toLocaleLowerCase();
            return label.indexOf(search) > -1;
          }
        }, {
          key: "_getNextItemIndex",
          value: function _getNextItemIndex(steps) {
            if (steps > 0) {
              return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
            }

            return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
          }
        }, {
          key: "_stepToItem",
          value: function _stepToItem(steps) {
            if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) {
              return x.disabled;
            })) {
              return;
            }

            this._markedIndex = this._getNextItemIndex(steps);

            if (this.markedItem.disabled) {
              this._stepToItem(steps);
            }
          }
        }, {
          key: "_getLastMarkedIndex",
          value: function _getLastMarkedIndex() {
            if (this._ngSelect.hideSelected) {
              return -1;
            }

            if (this._markedIndex > -1 && this.markedItem === undefined) {
              return -1;
            }

            var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

            if (this.lastSelectedItem && selectedIndex < 0) {
              return -1;
            }

            return Math.max(this.markedIndex, selectedIndex);
          }
        }, {
          key: "_groupBy",
          value: function _groupBy(items, prop) {
            var _this5 = this;

            var groups = new Map();

            if (items.length === 0) {
              return groups;
            } // Check if items are already grouped by given key.


            if (Array.isArray(items[0].value[prop])) {
              var _iterator4 = _createForOfIteratorHelper(items),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;
                  var children = (item.value[prop] || []).map(function (x, index) {
                    return _this5.mapItem(x, index);
                  });
                  groups.set(item, children);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              return groups;
            }

            var isFnKey = isFunction(this._ngSelect.groupBy);

            var keyFn = function keyFn(item) {
              var key = isFnKey ? prop(item.value) : item.value[prop];
              return isDefined(key) ? key : undefined;
            }; // Group items by key.


            var _iterator5 = _createForOfIteratorHelper(items),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _item = _step5.value;
                var key = keyFn(_item);
                var group = groups.get(key);

                if (group) {
                  group.push(_item);
                } else {
                  groups.set(key, [_item]);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return groups;
          }
        }, {
          key: "_flatten",
          value: function _flatten(groups) {
            var _this6 = this;

            var isGroupByFn = isFunction(this._ngSelect.groupBy);
            var items = [];

            var _loop = function _loop() {
              var key = _Array$from2[_i2];
              var i = items.length;

              if (key === undefined) {
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, _toConsumableArray(withoutGroup.map(function (x) {
                  x.index = i++;
                  return x;
                })));
                return "continue";
              }

              var isObjectKey = isObject(key);
              var parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !_this6._ngSelect.selectableGroup,
                htmlId: newId()
              };
              var groupKey = isGroupByFn ? _this6._ngSelect.bindLabel : _this6._ngSelect.groupBy;

              var groupValue = _this6._ngSelect.groupValue || function () {
                if (isObjectKey) {
                  return key.value;
                }

                return _defineProperty({}, groupKey, key);
              };

              var children = groups.get(key).map(function (x) {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
              });
              parent.children = children;
              parent.value = groupValue(key, children.map(function (x) {
                return x.value;
              }));
              items.push(parent);
              items.push.apply(items, _toConsumableArray(children));
            };

            for (var _i2 = 0, _Array$from2 = Array.from(groups.keys()); _i2 < _Array$from2.length; _i2++) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }

            return items;
          }
        }]);

        return ItemsList;
      }();

      var KeyCode;

      (function (KeyCode) {
        KeyCode[KeyCode["Tab"] = 9] = "Tab";
        KeyCode[KeyCode["Enter"] = 13] = "Enter";
        KeyCode[KeyCode["Esc"] = 27] = "Esc";
        KeyCode[KeyCode["Space"] = 32] = "Space";
        KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
        KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
        KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
      })(KeyCode || (KeyCode = {}));

      var NgDropdownPanelService = /*#__PURE__*/function () {
        function NgDropdownPanelService() {
          _classCallCheck(this, NgDropdownPanelService);

          this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
          };
        }

        _createClass(NgDropdownPanelService, [{
          key: "dimensions",
          get: function get() {
            return this._dimensions;
          }
        }, {
          key: "calculateItems",
          value: function calculateItems(scrollPos, itemsLength, buffer) {
            var d = this._dimensions;
            var scrollHeight = d.itemHeight * itemsLength;
            var scrollTop = Math.max(0, scrollPos);
            var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
            var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
            var maxStartEnd = end;
            var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
            var start = Math.min(maxStart, Math.floor(indexByScrollTop));
            var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
            topPadding = !isNaN(topPadding) ? topPadding : 0;
            start = !isNaN(start) ? start : -1;
            end = !isNaN(end) ? end : -1;
            start -= buffer;
            start = Math.max(0, start);
            end += buffer;
            end = Math.min(itemsLength, end);
            return {
              topPadding: topPadding,
              scrollHeight: scrollHeight,
              start: start,
              end: end
            };
          }
        }, {
          key: "setDimensions",
          value: function setDimensions(itemHeight, panelHeight) {
            var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
            this._dimensions = {
              itemHeight: itemHeight,
              panelHeight: panelHeight,
              itemsPerViewport: itemsPerViewport
            };
          }
        }, {
          key: "getScrollTo",
          value: function getScrollTo(itemTop, itemHeight, lastScroll) {
            var panelHeight = this.dimensions.panelHeight;
            var itemBottom = itemTop + itemHeight;
            var top = lastScroll;
            var bottom = top + panelHeight;

            if (panelHeight >= itemBottom && lastScroll === itemTop) {
              return null;
            }

            if (itemBottom > bottom) {
              return top + itemBottom - bottom;
            } else if (itemTop <= top) {
              return itemTop;
            }

            return null;
          }
        }]);

        return NgDropdownPanelService;
      }();

      NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
        return new (t || NgDropdownPanelService)();
      };

      NgDropdownPanelService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgDropdownPanelService,
        factory: NgDropdownPanelService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [];
        }, null);
      })();

      var TOP_CSS_CLASS = 'ng-select-top';
      var BOTTOM_CSS_CLASS = 'ng-select-bottom';
      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;

      var NgDropdownPanelComponent = /*#__PURE__*/function () {
        function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
          _classCallCheck(this, NgDropdownPanelComponent);

          this._renderer = _renderer;
          this._zone = _zone;
          this._panelService = _panelService;
          this._document = _document;
          this.items = [];
          this.position = 'auto';
          this.virtualScroll = false;
          this.filterValue = null;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this._scrollToEndFired = false;
          this._updateScrollHeight = false;
          this._lastScrollPosition = 0;
          this._dropdown = _elementRef.nativeElement;
        }

        _createClass(NgDropdownPanelComponent, [{
          key: "currentPosition",
          get: function get() {
            return this._currentPosition;
          }
        }, {
          key: "itemsLength",
          get: function get() {
            return this._itemsLength;
          },
          set: function set(value) {
            if (value !== this._itemsLength) {
              this._itemsLength = value;

              this._onItemsLengthChanged();
            }
          }
        }, {
          key: "_startOffset",
          get: function get() {
            if (this.markedItem) {
              var _this$_panelService$d = this._panelService.dimensions,
                  itemHeight = _this$_panelService$d.itemHeight,
                  panelHeight = _this$_panelService$d.panelHeight;
              var offset = this.markedItem.index * itemHeight;
              return panelHeight > offset ? 0 : offset;
            }

            return 0;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._select = this._dropdown.parentElement;
            this._virtualPadding = this.paddingElementRef.nativeElement;
            this._scrollablePanel = this.scrollElementRef.nativeElement;
            this._contentPanel = this.contentElementRef.nativeElement;

            this._handleScroll();

            this._handleOutsideClick();

            this._appendDropdown();

            this._setupMousedownListener();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.items) {
              var change = changes.items;

              this._onItemsChange(change.currentValue, change.firstChange);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();

            this._destroy$.unsubscribe();

            if (this.appendTo) {
              this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
            }
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(option) {
            var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!option) {
              return;
            }

            var index = this.items.indexOf(option);

            if (index < 0 || index >= this.itemsLength) {
              return;
            }

            var scrollTo;

            if (this.virtualScroll) {
              var itemHeight = this._panelService.dimensions.itemHeight;
              scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
            } else {
              var item = this._dropdown.querySelector("#".concat(option.htmlId));

              var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
              scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
            }

            if (isDefined(scrollTo)) {
              this._scrollablePanel.scrollTop = scrollTo;
            }
          }
        }, {
          key: "scrollToTag",
          value: function scrollToTag() {
            var panel = this._scrollablePanel;
            panel.scrollTop = panel.scrollHeight - panel.clientHeight;
          }
        }, {
          key: "adjustPosition",
          value: function adjustPosition() {
            this._updateYPosition();
          }
        }, {
          key: "_handleDropdownPosition",
          value: function _handleDropdownPosition() {
            this._currentPosition = this._calculateCurrentPosition(this._dropdown);

            if (this._currentPosition === 'top') {
              this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

              this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

              this._renderer.addClass(this._select, TOP_CSS_CLASS);

              this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
            } else {
              this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

              this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

              this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

              this._renderer.removeClass(this._select, TOP_CSS_CLASS);
            }

            if (this.appendTo) {
              this._updateYPosition();
            }

            this._dropdown.style.opacity = '1';
          }
        }, {
          key: "_handleScroll",
          value: function _handleScroll() {
            var _this7 = this;

            this._zone.runOutsideAngular(function () {
              (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this7.scrollElementRef.nativeElement, 'scroll').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this7._destroy$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(function (e) {
                var path = e.path || e.composedPath && e.composedPath();
                var scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;

                _this7._onContentScrolled(scrollTop);
              });
            });
          }
        }, {
          key: "_handleOutsideClick",
          value: function _handleOutsideClick() {
            var _this8 = this;

            if (!this._document) {
              return;
            }

            this._zone.runOutsideAngular(function () {
              (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this8._document, 'touchstart', {
                capture: true
              }), (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this8._document, 'mousedown', {
                capture: true
              })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this8._destroy$)).subscribe(function ($event) {
                return _this8._checkToClose($event);
              });
            });
          }
        }, {
          key: "_checkToClose",
          value: function _checkToClose($event) {
            var _this9 = this;

            if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
              return;
            }

            var path = $event.path || $event.composedPath && $event.composedPath();

            if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
              return;
            }

            this._zone.run(function () {
              return _this9.outsideClick.emit();
            });
          }
        }, {
          key: "_onItemsChange",
          value: function _onItemsChange(items, firstChange) {
            this.items = items || [];
            this._scrollToEndFired = false;
            this.itemsLength = items.length;

            if (this.virtualScroll) {
              this._updateItemsRange(firstChange);
            } else {
              this._setVirtualHeight();

              this._updateItems(firstChange);
            }
          }
        }, {
          key: "_updateItems",
          value: function _updateItems(firstChange) {
            var _this10 = this;

            this.update.emit(this.items);

            if (firstChange === false) {
              return;
            }

            this._zone.runOutsideAngular(function () {
              Promise.resolve().then(function () {
                var panelHeight = _this10._scrollablePanel.clientHeight;

                _this10._panelService.setDimensions(0, panelHeight);

                _this10._handleDropdownPosition();

                _this10.scrollTo(_this10.markedItem, firstChange);
              });
            });
          }
        }, {
          key: "_updateItemsRange",
          value: function _updateItemsRange(firstChange) {
            var _this11 = this;

            this._zone.runOutsideAngular(function () {
              _this11._measureDimensions().then(function () {
                if (firstChange) {
                  _this11._renderItemsRange(_this11._startOffset);

                  _this11._handleDropdownPosition();
                } else {
                  _this11._renderItemsRange();
                }
              });
            });
          }
        }, {
          key: "_onContentScrolled",
          value: function _onContentScrolled(scrollTop) {
            if (this.virtualScroll) {
              this._renderItemsRange(scrollTop);
            }

            this._lastScrollPosition = scrollTop;

            this._fireScrollToEnd(scrollTop);
          }
        }, {
          key: "_updateVirtualHeight",
          value: function _updateVirtualHeight(height) {
            if (this._updateScrollHeight) {
              this._virtualPadding.style.height = "".concat(height, "px");
              this._updateScrollHeight = false;
            }
          }
        }, {
          key: "_setVirtualHeight",
          value: function _setVirtualHeight() {
            if (!this._virtualPadding) {
              return;
            }

            this._virtualPadding.style.height = "0px";
          }
        }, {
          key: "_onItemsLengthChanged",
          value: function _onItemsLengthChanged() {
            this._updateScrollHeight = true;
          }
        }, {
          key: "_renderItemsRange",
          value: function _renderItemsRange() {
            var _this12 = this;

            var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (scrollTop && this._lastScrollPosition === scrollTop) {
              return;
            }

            scrollTop = scrollTop || this._scrollablePanel.scrollTop;

            var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

            this._updateVirtualHeight(range.scrollHeight);

            this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

            this._zone.run(function () {
              _this12.update.emit(_this12.items.slice(range.start, range.end));

              _this12.scroll.emit({
                start: range.start,
                end: range.end
              });
            });

            if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
              this._scrollablePanel.scrollTop = scrollTop;
              this._lastScrollPosition = scrollTop;
            }
          }
        }, {
          key: "_measureDimensions",
          value: function _measureDimensions() {
            var _this13 = this;

            if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
              return Promise.resolve(this._panelService.dimensions);
            }

            var _this$items = _slicedToArray(this.items, 1),
                first = _this$items[0];

            this.update.emit([first]);
            return Promise.resolve().then(function () {
              var option = _this13._dropdown.querySelector("#".concat(first.htmlId));

              var optionHeight = option.clientHeight;
              _this13._virtualPadding.style.height = "".concat(optionHeight * _this13.itemsLength, "px");
              var panelHeight = _this13._scrollablePanel.clientHeight;

              _this13._panelService.setDimensions(optionHeight, panelHeight);

              return _this13._panelService.dimensions;
            });
          }
        }, {
          key: "_fireScrollToEnd",
          value: function _fireScrollToEnd(scrollTop) {
            var _this14 = this;

            if (this._scrollToEndFired || scrollTop === 0) {
              return;
            }

            var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

            if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
              this._zone.run(function () {
                return _this14.scrollToEnd.emit();
              });

              this._scrollToEndFired = true;
            }
          }
        }, {
          key: "_calculateCurrentPosition",
          value: function _calculateCurrentPosition(dropdownEl) {
            if (this.position !== 'auto') {
              return this.position;
            }

            var selectRect = this._select.getBoundingClientRect();

            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var offsetTop = selectRect.top + window.pageYOffset;
            var height = selectRect.height;
            var dropdownHeight = dropdownEl.getBoundingClientRect().height;

            if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
              return 'top';
            } else {
              return 'bottom';
            }
          }
        }, {
          key: "_appendDropdown",
          value: function _appendDropdown() {
            if (!this.appendTo) {
              return;
            }

            this._parent = document.querySelector(this.appendTo);

            if (!this._parent) {
              throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
            }

            this._updateXPosition();

            this._parent.appendChild(this._dropdown);
          }
        }, {
          key: "_updateXPosition",
          value: function _updateXPosition() {
            var select = this._select.getBoundingClientRect();

            var parent = this._parent.getBoundingClientRect();

            var offsetLeft = select.left - parent.left;
            this._dropdown.style.left = offsetLeft + 'px';
            this._dropdown.style.width = select.width + 'px';
            this._dropdown.style.minWidth = select.width + 'px';
          }
        }, {
          key: "_updateYPosition",
          value: function _updateYPosition() {
            var select = this._select.getBoundingClientRect();

            var parent = this._parent.getBoundingClientRect();

            var delta = select.height;

            if (this._currentPosition === 'top') {
              var offsetBottom = parent.bottom - select.bottom;
              this._dropdown.style.bottom = offsetBottom + delta + 'px';
              this._dropdown.style.top = 'auto';
            } else if (this._currentPosition === 'bottom') {
              var offsetTop = select.top - parent.top;
              this._dropdown.style.top = offsetTop + delta + 'px';
              this._dropdown.style.bottom = 'auto';
            }
          }
        }, {
          key: "_setupMousedownListener",
          value: function _setupMousedownListener() {
            var _this15 = this;

            this._zone.runOutsideAngular(function () {
              (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this15._dropdown, 'mousedown').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this15._destroy$)).subscribe(function (event) {
                var target = event.target;

                if (target.tagName === 'INPUT') {
                  return;
                }

                event.preventDefault();
              });
            });
          }
        }]);

        return NgDropdownPanelComponent;
      }();

      NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
        return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
      };

      NgDropdownPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgDropdownPanelComponent,
        selectors: [["ng-dropdown-panel"]],
        viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
          }
        },
        inputs: {
          items: "items",
          position: "position",
          virtualScroll: "virtualScroll",
          filterValue: "filterValue",
          markedItem: "markedItem",
          appendTo: "appendTo",
          bufferAmount: "bufferAmount",
          headerTemplate: "headerTemplate",
          footerTemplate: "footerTemplate"
        },
        outputs: {
          update: "update",
          scroll: "scroll",
          scrollToEnd: "scrollToEnd",
          outsideClick: "outsideClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 9,
        vars: 6,
        consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
        template: function NgDropdownPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
        encapsulation: 2,
        changeDetection: 0
      });

      NgDropdownPanelComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: NgDropdownPanelService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
          }]
        }];
      };

      NgDropdownPanelComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        markedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        filterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            "static": true
          }]
        }],
        scrollElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['scroll', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            "static": true
          }]
        }],
        paddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['padding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            selector: 'ng-dropdown-panel',
            template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: NgDropdownPanelService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['content', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }],
          scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['scroll', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }],
          paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['padding', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }]
        });
      })();

      var NgOptionComponent = /*#__PURE__*/function () {
        function NgOptionComponent(elementRef) {
          _classCallCheck(this, NgOptionComponent);

          this.elementRef = elementRef;
          this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this._disabled = false;
        }

        _createClass(NgOptionComponent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = this._isDisabled(value);
          }
        }, {
          key: "label",
          get: function get() {
            return (this.elementRef.nativeElement.textContent || '').trim();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.disabled) {
              this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
              });
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.label !== this._previousLabel) {
              this._previousLabel = this.label;
              this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChange$.complete();
          }
        }, {
          key: "_isDisabled",
          value: function _isDisabled(value) {
            return value != null && "".concat(value) !== 'false';
          }
        }]);

        return NgOptionComponent;
      }();

      NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
        return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      NgOptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgOptionComponent,
        selectors: [["ng-option"]],
        inputs: {
          disabled: "disabled",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 1,
        vars: 0,
        template: function NgOptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NgOptionComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      NgOptionComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ng-option',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgSelectConfig = function _NgSelectConfig() {
        _classCallCheck(this, _NgSelectConfig);

        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
      };

      _NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
        return new (t || _NgSelectConfig)();
      };

      _NgSelectConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function NgSelectConfig_Factory() {
          return new _NgSelectConfig();
        },
        token: _NgSelectConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var _SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');

      var _NgSelectComponent = /*#__PURE__*/function () {
        function _NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
          var _this16 = this;

          _classCallCheck(this, _NgSelectComponent);

          this.classes = classes;
          this.autoFocus = autoFocus;
          this.config = config;
          this._cd = _cd;
          this._console = _console;
          this.markFirst = true;
          this.dropdownPosition = 'auto';
          this.loading = false;
          this.closeOnSelect = true;
          this.hideSelected = false;
          this.selectOnTab = false;
          this.bufferAmount = 4;
          this.selectableGroup = false;
          this.selectableGroupAsModel = true;
          this.searchFn = null;
          this.trackByFn = null;
          this.clearOnBackspace = true;
          this.labelForId = null;
          this.inputAttrs = {};
          this.readonly = false;
          this.searchWhileComposing = true;
          this.minTermLength = 0;
          this.editableSearchTerm = false;

          this.keyDownFn = function (_) {
            return true;
          };

          this.multiple = false;
          this.addTag = false;
          this.searchable = true;
          this.clearable = true;
          this.isOpen = false; // output events

          this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.viewPortItems = [];
          this.searchTerm = null;
          this.dropdownId = newId();
          this.escapeHTML = true;
          this.useDefaultClass = true;
          this._items = [];
          this._defaultLabel = 'label';
          this._pressedKeys = [];
          this._isComposing = false;
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

          this._onChange = function (_) {};

          this._onTouched = function () {};

          this.clearItem = function (item) {
            var option = _this16.selectedItems.find(function (x) {
              return x.value === item;
            });

            _this16.unselect(option);
          };

          this.trackByOption = function (_, item) {
            if (_this16.trackByFn) {
              return _this16.trackByFn(item.value);
            }

            return item;
          };

          this._mergeGlobalConfig(config);

          this.itemsList = new ItemsList(this, newSelectionModel());
          this.element = _elementRef.nativeElement;
        }

        _createClass(_NgSelectComponent, [{
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(value) {
            if (value === null) {
              value = [];
            }

            this._itemsAreUsed = true;
            this._items = value;
          }
        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            if (fn !== undefined && fn !== null && !isFunction(fn)) {
              throw Error('`compareWith` must be a function.');
            }

            this._compareWith = fn;
          }
        }, {
          key: "clearSearchOnAdd",
          get: function get() {
            if (isDefined(this._clearSearchOnAdd)) {
              return this._clearSearchOnAdd;
            } else if (isDefined(this.config.clearSearchOnAdd)) {
              return this.config.clearSearchOnAdd;
            }

            return this.closeOnSelect;
          },
          set: function set(value) {
            this._clearSearchOnAdd = value;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.readonly || this._disabled;
          }
        }, {
          key: "filtered",
          get: function get() {
            return !!this.searchTerm && this.searchable || this._isComposing;
          }
        }, {
          key: "_editableSearchTerm",
          get: function get() {
            return this.editableSearchTerm && !this.multiple;
          }
        }, {
          key: "selectedItems",
          get: function get() {
            return this.itemsList.selectedItems;
          }
        }, {
          key: "selectedValues",
          get: function get() {
            return this.selectedItems.map(function (x) {
              return x.value;
            });
          }
        }, {
          key: "hasValue",
          get: function get() {
            return this.selectedItems.length > 0;
          }
        }, {
          key: "currentPanelPosition",
          get: function get() {
            if (this.dropdownPanel) {
              return this.dropdownPanel.currentPosition;
            }

            return undefined;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._handleKeyPresses();

            this._setInputAttributes();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.multiple) {
              this.itemsList.clearSelected();
            }

            if (changes.items) {
              this._setItems(changes.items.currentValue || []);
            }

            if (changes.isOpen) {
              this._manualOpen = isDefined(changes.isOpen.currentValue);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this._itemsAreUsed) {
              this.escapeHTML = false;

              this._setItemsFromNgOptions();
            }

            if (isDefined(this.autoFocus)) {
              this.focus();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();
          }
        }, {
          key: "handleKeyDown",
          value: function handleKeyDown($event) {
            var keyCode = KeyCode[$event.which];

            if (keyCode) {
              if (this.keyDownFn($event) === false) {
                return;
              }

              this.handleKeyCode($event);
            } else if ($event.key && $event.key.length === 1) {
              this._keyPress$.next($event.key.toLocaleLowerCase());
            }
          }
        }, {
          key: "handleKeyCode",
          value: function handleKeyCode($event) {
            switch ($event.which) {
              case KeyCode.ArrowDown:
                this._handleArrowDown($event);

                break;

              case KeyCode.ArrowUp:
                this._handleArrowUp($event);

                break;

              case KeyCode.Space:
                this._handleSpace($event);

                break;

              case KeyCode.Enter:
                this._handleEnter($event);

                break;

              case KeyCode.Tab:
                this._handleTab($event);

                break;

              case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;

              case KeyCode.Backspace:
                this._handleBackspace();

                break;
            }
          }
        }, {
          key: "handleMousedown",
          value: function handleMousedown($event) {
            var target = $event.target;

            if (target.tagName !== 'INPUT') {
              $event.preventDefault();
            }

            if (target.classList.contains('ng-clear-wrapper')) {
              this.handleClearClick();
              return;
            }

            if (target.classList.contains('ng-arrow-wrapper')) {
              this.handleArrowClick();
              return;
            }

            if (target.classList.contains('ng-value-icon')) {
              return;
            }

            if (!this.focused) {
              this.focus();
            }

            if (this.searchable) {
              this.open();
            } else {
              this.toggle();
            }
          }
        }, {
          key: "handleArrowClick",
          value: function handleArrowClick() {
            if (this.isOpen) {
              this.close();
            } else {
              this.open();
            }
          }
        }, {
          key: "handleClearClick",
          value: function handleClearClick() {
            if (this.hasValue) {
              this.itemsList.clearSelected(true);

              this._updateNgModel();
            }

            this._clearSearch();

            this.focus();
            this.clearEvent.emit();

            this._onSelectionChanged();
          }
        }, {
          key: "clearModel",
          value: function clearModel() {
            if (!this.clearable) {
              return;
            }

            this.itemsList.clearSelected();

            this._updateNgModel();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.itemsList.clearSelected();

            this._handleWriteValue(value);

            this._cd.markForCheck();
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(state) {
            this._disabled = state;

            this._cd.markForCheck();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.isOpen) {
              this.open();
            } else {
              this.close();
            }
          }
        }, {
          key: "open",
          value: function open() {
            if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
              return;
            }

            if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
              return;
            }

            this.isOpen = true;
            this.itemsList.markSelectedOrDefault(this.markFirst);
            this.openEvent.emit();

            if (!this.searchTerm) {
              this.focus();
            }

            this.detectChanges();
          }
        }, {
          key: "close",
          value: function close() {
            if (!this.isOpen || this._manualOpen) {
              return;
            }

            this.isOpen = false;
            this._isComposing = false;

            if (!this._editableSearchTerm) {
              this._clearSearch();
            } else {
              this.itemsList.resetFilteredItems();
            }

            this.itemsList.unmarkItem();

            this._onTouched();

            this.closeEvent.emit();

            this._cd.markForCheck();
          }
        }, {
          key: "toggleItem",
          value: function toggleItem(item) {
            if (!item || item.disabled || this.disabled) {
              return;
            }

            if (this.multiple && item.selected) {
              this.unselect(item);
            } else {
              this.select(item);
            }

            if (this._editableSearchTerm) {
              this._setSearchTermFromItems();
            }

            this._onSelectionChanged();
          }
        }, {
          key: "select",
          value: function select(item) {
            if (!item.selected) {
              this.itemsList.select(item);

              if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
              }

              this._updateNgModel();

              if (this.multiple) {
                this.addEvent.emit(item.value);
              }
            }

            if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
              this.close();
            }
          }
        }, {
          key: "focus",
          value: function focus() {
            this.searchInput.nativeElement.focus();
          }
        }, {
          key: "blur",
          value: function blur() {
            this.searchInput.nativeElement.blur();
          }
        }, {
          key: "unselect",
          value: function unselect(item) {
            if (!item) {
              return;
            }

            this.itemsList.unselect(item);
            this.focus();

            this._updateNgModel();

            this.removeEvent.emit(item);
          }
        }, {
          key: "selectTag",
          value: function selectTag() {
            var _this17 = this;

            var tag;

            if (isFunction(this.addTag)) {
              tag = this.addTag(this.searchTerm);
            } else {
              tag = this._primitive ? this.searchTerm : _defineProperty({}, this.bindLabel, this.searchTerm);
            }

            var handleTag = function handleTag(item) {
              return _this17._isTypeahead || !_this17.isOpen ? _this17.itemsList.mapItem(item, null) : _this17.itemsList.addItem(item);
            };

            if (isPromise(tag)) {
              tag.then(function (item) {
                return _this17.select(handleTag(item));
              })["catch"](function () {});
            } else if (tag) {
              this.select(handleTag(tag));
            }
          }
        }, {
          key: "showClear",
          value: function showClear() {
            return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
          }
        }, {
          key: "showAddTag",
          get: function get() {
            if (!this._validTerm) {
              return false;
            }

            var term = this.searchTerm.toLowerCase().trim();
            return this.addTag && !this.itemsList.filteredItems.some(function (x) {
              return x.label.toLowerCase() === term;
            }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) {
              return x.label.toLowerCase() === term;
            })) && !this.loading;
          }
        }, {
          key: "showNoItemsFound",
          value: function showNoItemsFound() {
            var empty = this.itemsList.filteredItems.length === 0;
            return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
          }
        }, {
          key: "showTypeToSearch",
          value: function showTypeToSearch() {
            var empty = this.itemsList.filteredItems.length === 0;
            return empty && this._isTypeahead && !this._validTerm && !this.loading;
          }
        }, {
          key: "onCompositionStart",
          value: function onCompositionStart() {
            this._isComposing = true;
          }
        }, {
          key: "onCompositionEnd",
          value: function onCompositionEnd(term) {
            this._isComposing = false;

            if (this.searchWhileComposing) {
              return;
            }

            this.filter(term);
          }
        }, {
          key: "filter",
          value: function filter(term) {
            if (this._isComposing && !this.searchWhileComposing) {
              return;
            }

            this.searchTerm = term;

            if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
              this.typeahead.next(term);
            }

            if (!this._isTypeahead) {
              this.itemsList.filter(this.searchTerm);

              if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
              }
            }

            this.searchEvent.emit({
              term: term,
              items: this.itemsList.filteredItems.map(function (x) {
                return x.value;
              })
            });
            this.open();
          }
        }, {
          key: "onInputFocus",
          value: function onInputFocus($event) {
            if (this.focused) {
              return;
            }

            if (this._editableSearchTerm) {
              this._setSearchTermFromItems();
            }

            this.element.classList.add('ng-select-focused');
            this.focusEvent.emit($event);
            this.focused = true;
          }
        }, {
          key: "onInputBlur",
          value: function onInputBlur($event) {
            this.element.classList.remove('ng-select-focused');
            this.blurEvent.emit($event);

            if (!this.isOpen && !this.disabled) {
              this._onTouched();
            }

            if (this._editableSearchTerm) {
              this._setSearchTermFromItems();
            }

            this.focused = false;
          }
        }, {
          key: "onItemHover",
          value: function onItemHover(item) {
            if (item.disabled) {
              return;
            }

            this.itemsList.markItem(item);
          }
        }, {
          key: "detectChanges",
          value: function detectChanges() {
            if (!this._cd.destroyed) {
              this._cd.detectChanges();
            }
          }
        }, {
          key: "_setSearchTermFromItems",
          value: function _setSearchTermFromItems() {
            var selected = this.selectedItems && this.selectedItems[0];
            this.searchTerm = selected && selected.label || null;
          }
        }, {
          key: "_setItems",
          value: function _setItems(items) {
            var firstItem = items[0];
            this.bindLabel = this.bindLabel || this._defaultLabel;
            this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
            this.itemsList.setItems(items);

            if (items.length > 0 && this.hasValue) {
              this.itemsList.mapSelectedItems();
            }

            if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
              this.itemsList.filter(this.searchTerm);
            }

            if (this._isTypeahead || this.isOpen) {
              this.itemsList.markSelectedOrDefault(this.markFirst);
            }
          }
        }, {
          key: "_setItemsFromNgOptions",
          value: function _setItemsFromNgOptions() {
            var _this18 = this;

            var mapNgOptions = function mapNgOptions(options) {
              _this18.items = options.map(function (option) {
                return {
                  $ngOptionValue: option.value,
                  $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                  disabled: option.disabled
                };
              });

              _this18.itemsList.setItems(_this18.items);

              if (_this18.hasValue) {
                _this18.itemsList.mapSelectedItems();
              }

              _this18.detectChanges();
            };

            var handleOptionChange = function handleOptionChange() {
              var changedOrDestroyed = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(_this18.ngOptions.changes, _this18._destroy$);
              (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge).apply(void 0, _toConsumableArray(_this18.ngOptions.map(function (option) {
                return option.stateChange$;
              }))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed)).subscribe(function (option) {
                var item = _this18.itemsList.findItem(option.value);

                item.disabled = option.disabled;
                item.label = option.label || item.label;

                _this18._cd.detectChanges();
              });
            };

            this.ngOptions.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(function (options) {
              _this18.bindLabel = _this18._defaultLabel;
              mapNgOptions(options);
              handleOptionChange();
            });
          }
        }, {
          key: "_isValidWriteValue",
          value: function _isValidWriteValue(value) {
            var _this19 = this;

            if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
              return false;
            }

            var validateBinding = function validateBinding(item) {
              if (!isDefined(_this19.compareWith) && isObject(item) && _this19.bindValue) {
                _this19._console.warn("Setting object(".concat(JSON.stringify(item), ") as your model with bindValue is not allowed unless [compareWith] is used."));

                return false;
              }

              return true;
            };

            if (this.multiple) {
              if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');

                return false;
              }

              return value.every(function (item) {
                return validateBinding(item);
              });
            } else {
              return validateBinding(value);
            }
          }
        }, {
          key: "_handleWriteValue",
          value: function _handleWriteValue(ngModel) {
            var _this20 = this;

            if (!this._isValidWriteValue(ngModel)) {
              return;
            }

            var select = function select(val) {
              var item = _this20.itemsList.findItem(val);

              if (item) {
                _this20.itemsList.select(item);
              } else {
                var isValObject = isObject(val);
                var isPrimitive = !isValObject && !_this20.bindValue;

                if (isValObject || isPrimitive) {
                  _this20.itemsList.select(_this20.itemsList.mapItem(val, null));
                } else if (_this20.bindValue) {
                  var _item2;

                  item = (_item2 = {}, _defineProperty(_item2, _this20.bindLabel, null), _defineProperty(_item2, _this20.bindValue, val), _item2);

                  _this20.itemsList.select(_this20.itemsList.mapItem(item, null));
                }
              }
            };

            if (this.multiple) {
              ngModel.forEach(function (item) {
                return select(item);
              });
            } else {
              select(ngModel);
            }
          }
        }, {
          key: "_handleKeyPresses",
          value: function _handleKeyPresses() {
            var _this21 = this;

            if (this.searchable) {
              return;
            }

            this._keyPress$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (letter) {
              return _this21._pressedKeys.push(letter);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(function () {
              return _this21._pressedKeys.length > 0;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function () {
              return _this21._pressedKeys.join('');
            })).subscribe(function (term) {
              var item = _this21.itemsList.findByLabel(term);

              if (item) {
                if (_this21.isOpen) {
                  _this21.itemsList.markItem(item);

                  _this21._scrollToMarked();

                  _this21._cd.markForCheck();
                } else {
                  _this21.select(item);
                }
              }

              _this21._pressedKeys = [];
            });
          }
        }, {
          key: "_setInputAttributes",
          value: function _setInputAttributes() {
            var input = this.searchInput.nativeElement;
            var attributes = Object.assign({
              type: 'text',
              autocorrect: 'off',
              autocapitalize: 'off',
              autocomplete: this.labelForId ? 'off' : this.dropdownId
            }, this.inputAttrs);

            for (var _i3 = 0, _Object$keys = Object.keys(attributes); _i3 < _Object$keys.length; _i3++) {
              var key = _Object$keys[_i3];
              input.setAttribute(key, attributes[key]);
            }
          }
        }, {
          key: "_updateNgModel",
          value: function _updateNgModel() {
            var model = [];

            var _iterator6 = _createForOfIteratorHelper(this.selectedItems),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                if (this.bindValue) {
                  var value = null;

                  if (item.children) {
                    var groupKey = this.groupValue ? this.bindValue : this.groupBy;
                    value = item.value[groupKey || this.groupBy];
                  } else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                  }

                  model.push(value);
                } else {
                  model.push(item.value);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var selected = this.selectedItems.map(function (x) {
              return x.value;
            });

            if (this.multiple) {
              this._onChange(model);

              this.changeEvent.emit(selected);
            } else {
              this._onChange(isDefined(model[0]) ? model[0] : null);

              this.changeEvent.emit(selected[0]);
            }

            this._cd.markForCheck();
          }
        }, {
          key: "_clearSearch",
          value: function _clearSearch() {
            if (!this.searchTerm) {
              return;
            }

            this._changeSearch(null);

            this.itemsList.resetFilteredItems();
          }
        }, {
          key: "_changeSearch",
          value: function _changeSearch(searchTerm) {
            this.searchTerm = searchTerm;

            if (this._isTypeahead) {
              this.typeahead.next(searchTerm);
            }
          }
        }, {
          key: "_scrollToMarked",
          value: function _scrollToMarked() {
            if (!this.isOpen || !this.dropdownPanel) {
              return;
            }

            this.dropdownPanel.scrollTo(this.itemsList.markedItem);
          }
        }, {
          key: "_scrollToTag",
          value: function _scrollToTag() {
            if (!this.isOpen || !this.dropdownPanel) {
              return;
            }

            this.dropdownPanel.scrollToTag();
          }
        }, {
          key: "_onSelectionChanged",
          value: function _onSelectionChanged() {
            if (this.isOpen && this.multiple && this.appendTo) {
              // Make sure items are rendered.
              this._cd.detectChanges();

              this.dropdownPanel.adjustPosition();
            }
          }
        }, {
          key: "_handleTab",
          value: function _handleTab($event) {
            if (this.isOpen === false && !this.addTag) {
              return;
            }

            if (this.selectOnTab) {
              if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
              } else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
              } else {
                this.close();
              }
            } else {
              this.close();
            }
          }
        }, {
          key: "_handleEnter",
          value: function _handleEnter($event) {
            if (this.isOpen || this._manualOpen) {
              if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
              } else if (this.showAddTag) {
                this.selectTag();
              }
            } else if (this.openOnEnter) {
              this.open();
            } else {
              return;
            }

            $event.preventDefault();
          }
        }, {
          key: "_handleSpace",
          value: function _handleSpace($event) {
            if (this.isOpen || this._manualOpen) {
              return;
            }

            this.open();
            $event.preventDefault();
          }
        }, {
          key: "_handleArrowDown",
          value: function _handleArrowDown($event) {
            if (this._nextItemIsTag(+1)) {
              this.itemsList.unmarkItem();

              this._scrollToTag();
            } else {
              this.itemsList.markNextItem();

              this._scrollToMarked();
            }

            this.open();
            $event.preventDefault();
          }
        }, {
          key: "_handleArrowUp",
          value: function _handleArrowUp($event) {
            if (!this.isOpen) {
              return;
            }

            if (this._nextItemIsTag(-1)) {
              this.itemsList.unmarkItem();

              this._scrollToTag();
            } else {
              this.itemsList.markPreviousItem();

              this._scrollToMarked();
            }

            $event.preventDefault();
          }
        }, {
          key: "_nextItemIsTag",
          value: function _nextItemIsTag(nextStep) {
            var nextIndex = this.itemsList.markedIndex + nextStep;
            return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
          }
        }, {
          key: "_handleBackspace",
          value: function _handleBackspace() {
            if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
              return;
            }

            if (this.multiple) {
              this.unselect(this.itemsList.lastSelectedItem);
            } else {
              this.clearModel();
            }
          }
        }, {
          key: "_isTypeahead",
          get: function get() {
            return this.typeahead && this.typeahead.observers.length > 0;
          }
        }, {
          key: "_validTerm",
          get: function get() {
            var term = this.searchTerm && this.searchTerm.trim();
            return term && term.length >= this.minTermLength;
          }
        }, {
          key: "_mergeGlobalConfig",
          value: function _mergeGlobalConfig(config) {
            this.placeholder = this.placeholder || config.placeholder;
            this.notFoundText = this.notFoundText || config.notFoundText;
            this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
            this.addTagText = this.addTagText || config.addTagText;
            this.loadingText = this.loadingText || config.loadingText;
            this.clearAllText = this.clearAllText || config.clearAllText;
            this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
            this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            this.appendTo = this.appendTo || config.appendTo;
            this.bindValue = this.bindValue || config.bindValue;
            this.bindLabel = this.bindLabel || config.bindLabel;
            this.appearance = this.appearance || config.appearance;
          }
        }]);

        return _NgSelectComponent;
      }();

      _NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
        return new (t || _NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
      };

      _NgSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgSelectComponent,
        selectors: [["ng-select"]],
        contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
          }
        },
        viewQuery: function NgSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        hostVars: 20,
        hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
          }
        },
        inputs: {
          markFirst: "markFirst",
          dropdownPosition: "dropdownPosition",
          loading: "loading",
          closeOnSelect: "closeOnSelect",
          hideSelected: "hideSelected",
          selectOnTab: "selectOnTab",
          bufferAmount: "bufferAmount",
          selectableGroup: "selectableGroup",
          selectableGroupAsModel: "selectableGroupAsModel",
          searchFn: "searchFn",
          trackByFn: "trackByFn",
          clearOnBackspace: "clearOnBackspace",
          labelForId: "labelForId",
          inputAttrs: "inputAttrs",
          readonly: "readonly",
          searchWhileComposing: "searchWhileComposing",
          minTermLength: "minTermLength",
          editableSearchTerm: "editableSearchTerm",
          keyDownFn: "keyDownFn",
          multiple: "multiple",
          addTag: "addTag",
          searchable: "searchable",
          clearable: "clearable",
          isOpen: "isOpen",
          items: "items",
          compareWith: "compareWith",
          clearSearchOnAdd: "clearSearchOnAdd",
          bindLabel: "bindLabel",
          placeholder: "placeholder",
          notFoundText: "notFoundText",
          typeToSearchText: "typeToSearchText",
          addTagText: "addTagText",
          loadingText: "loadingText",
          clearAllText: "clearAllText",
          virtualScroll: "virtualScroll",
          openOnEnter: "openOnEnter",
          appendTo: "appendTo",
          bindValue: "bindValue",
          appearance: "appearance",
          maxSelectedItems: "maxSelectedItems",
          groupBy: "groupBy",
          groupValue: "groupValue",
          tabIndex: "tabIndex",
          typeahead: "typeahead"
        },
        outputs: {
          blurEvent: "blur",
          focusEvent: "focus",
          changeEvent: "change",
          openEvent: "open",
          closeEvent: "close",
          searchEvent: "search",
          clearEvent: "clear",
          addEvent: "add",
          removeEvent: "remove",
          scroll: "scroll",
          scrollToEnd: "scrollToEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return _NgSelectComponent;
          }),
          multi: true
        }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 14,
        vars: 19,
        consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
        template: function NgSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
              return ctx.handleMousedown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.filter(_r2.value);
            })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
              return ctx.onCompositionStart();
            })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.onCompositionEnd(_r2.value);
            })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
              return ctx.onInputFocus($event);
            })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
              return ctx.onInputBlur($event);
            })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:load8 .8s infinite linear;animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:bold;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _NgSelectComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['class']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['autofocus']
          }]
        }, {
          type: _NgSelectConfig
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_SELECTION_MODEL_FACTORY]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: ConsoleService
        }];
      };

      _NgSelectComponent.propDecorators = {
        bindLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bindValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        markFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        typeToSearchText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        addTagText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        loadingText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        clearAllText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dropdownPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        closeOnSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        hideSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectOnTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        openOnEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        maxSelectedItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectableGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectableGroupAsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        searchFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        trackByFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        clearOnBackspace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        labelForId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        inputAttrs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        searchWhileComposing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minTermLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        editableSearchTerm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        keyDownFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        typeahead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-typeahead']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-multiple']
        }],
        addTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-taggable']
        }],
        searchable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-searchable']
        }],
        clearable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-clearable']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-opened']
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        clearSearchOnAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        blurEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['blur']
        }],
        focusEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['focus']
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['change']
        }],
        openEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['open']
        }],
        closeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['close']
        }],
        searchEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['search']
        }],
        clearEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['clear']
        }],
        addEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['add']
        }],
        removeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['remove']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['scroll']
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['scrollToEnd']
        }],
        optionTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgOptionTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        optgroupTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgOptgroupTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        labelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        multiLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgMultiLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgNotFoundTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        typeToSearchTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgTypeToSearchTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        loadingTextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgLoadingTextTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        tagTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgTagTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        loadingSpinnerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgLoadingSpinnerTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        dropdownPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return NgDropdownPanelComponent;
          })]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['searchInput', {
            "static": true
          }]
        }],
        ngOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [NgOptionComponent, {
            descendants: true
          }]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-disabled']
        }],
        filtered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-filtered']
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['keydown', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ng-select',
            template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
              useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _NgSelectComponent;
              }),
              multi: true
            }, NgDropdownPanelService],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            host: {
              '[class.ng-select]': 'useDefaultClass',
              '[class.ng-select-single]': '!multiple'
            },
            styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:load8 .8s infinite linear;animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:bold;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['class']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['autofocus']
            }]
          }, {
            type: _NgSelectConfig
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_SELECTION_MODEL_FACTORY]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: ConsoleService
          }];
        }, {
          markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-multiple']
          }],
          addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-taggable']
          }],
          searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-searchable']
          }],
          clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-clearable']
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-opened']
          }],
          blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['blur']
          }],
          focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['focus']
          }],
          changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['change']
          }],
          openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['open']
          }],
          closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['close']
          }],
          searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['search']
          }],
          clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['clear']
          }],
          addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['add']
          }],
          removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['remove']
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scroll']
          }],
          scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scrollToEnd']
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-disabled']
          }],
          filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-filtered']
          }],
          handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
          }],
          bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-typeahead']
          }],
          optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptionTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptgroupTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLabelTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgMultiLabelTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgHeaderTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgFooterTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgNotFoundTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTypeToSearchTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingTextTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTagTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingSpinnerTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return NgDropdownPanelComponent;
            })]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['searchInput', {
              "static": true
            }]
          }],
          ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NgOptionComponent, {
              descendants: true
            }]
          }]
        });
      })();

      function DefaultSelectionModelFactory() {
        return new DefaultSelectionModel();
      }

      var DefaultSelectionModel = /*#__PURE__*/function () {
        function DefaultSelectionModel() {
          _classCallCheck(this, DefaultSelectionModel);

          this._selected = [];
        }

        _createClass(DefaultSelectionModel, [{
          key: "value",
          get: function get() {
            return this._selected;
          }
        }, {
          key: "select",
          value: function select(item, multiple, groupAsModel) {
            item.selected = true;

            if (!item.children || !multiple && groupAsModel) {
              this._selected.push(item);
            }

            if (multiple) {
              if (item.parent) {
                var childrenCount = item.parent.children.length;
                var selectedCount = item.parent.children.filter(function (x) {
                  return x.selected;
                }).length;
                item.parent.selected = childrenCount === selectedCount;
              } else if (item.children) {
                this._setChildrenSelectedState(item.children, true);

                this._removeChildren(item);

                if (groupAsModel && this._activeChildren(item)) {
                  this._selected = [].concat(_toConsumableArray(this._selected.filter(function (x) {
                    return x.parent !== item;
                  })), [item]);
                } else {
                  this._selected = [].concat(_toConsumableArray(this._selected), _toConsumableArray(item.children.filter(function (x) {
                    return !x.disabled;
                  })));
                }
              }
            }
          }
        }, {
          key: "unselect",
          value: function unselect(item, multiple) {
            this._selected = this._selected.filter(function (x) {
              return x !== item;
            });
            item.selected = false;

            if (multiple) {
              if (item.parent && item.parent.selected) {
                var _this$_selected;

                var children = item.parent.children;

                this._removeParent(item.parent);

                this._removeChildren(item.parent);

                (_this$_selected = this._selected).push.apply(_this$_selected, _toConsumableArray(children.filter(function (x) {
                  return x !== item && !x.disabled;
                })));

                item.parent.selected = false;
              } else if (item.children) {
                this._setChildrenSelectedState(item.children, false);

                this._removeChildren(item);
              }
            }
          }
        }, {
          key: "clear",
          value: function clear(keepDisabled) {
            this._selected = keepDisabled ? this._selected.filter(function (x) {
              return x.disabled;
            }) : [];
          }
        }, {
          key: "_setChildrenSelectedState",
          value: function _setChildrenSelectedState(children, selected) {
            var _iterator7 = _createForOfIteratorHelper(children),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var child = _step7.value;

                if (child.disabled) {
                  continue;
                }

                child.selected = selected;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "_removeChildren",
          value: function _removeChildren(parent) {
            this._selected = [].concat(_toConsumableArray(this._selected.filter(function (x) {
              return x.parent !== parent;
            })), _toConsumableArray(parent.children.filter(function (x) {
              return x.parent === parent && x.disabled && x.selected;
            })));
          }
        }, {
          key: "_removeParent",
          value: function _removeParent(parent) {
            this._selected = this._selected.filter(function (x) {
              return x !== parent;
            });
          }
        }, {
          key: "_activeChildren",
          value: function _activeChildren(item) {
            return item.children.every(function (x) {
              return !x.disabled || x.selected;
            });
          }
        }]);

        return DefaultSelectionModel;
      }();

      var ɵ0 = DefaultSelectionModelFactory;

      var _NgSelectModule = function _NgSelectModule() {
        _classCallCheck(this, _NgSelectModule);
      };

      _NgSelectModule.ɵfac = function NgSelectModule_Factory(t) {
        return new (t || _NgSelectModule)();
      };

      _NgSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgSelectModule
      });
      _NgSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: _SELECTION_MODEL_FACTORY,
          useValue: ɵ0
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [NgDropdownPanelComponent, NgOptionComponent, _NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
            exports: [_NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
            providers: [{
              provide: _SELECTION_MODEL_FACTORY,
              useValue: ɵ0
            }]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgSelectModule, {
          declarations: function declarations() {
            return [NgDropdownPanelComponent, NgOptionComponent, _NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule];
          },
          exports: function exports() {
            return [_NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
          }
        });
      })();
      /*
       * Public API Surface of ng-select
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-select-ng-select.js.map

      /***/

    },

    /***/
    2217:
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    46797:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "timer": function timer() {
          return (
            /* binding */
            _timer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      69165);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isNumeric */
      26561);
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isScheduler */
      54869);

      function _timer() {
        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        var period = -1;

        if ((0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if ((0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
          scheduler = periodOrScheduler;
        }

        if (!(0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          var due = (0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
          return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
          });
        });
      }

      function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);

        if (subscriber.closed) {
          return;
        } else if (period === -1) {
          return subscriber.complete();
        }

        state.index = index + 1;
        this.schedule(state, period);
      } //# sourceMappingURL=timer.js.map

      /***/

    },

    /***/
    49732:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "audit": function audit() {
          return (
            /* binding */
            _audit
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../innerSubscribe */
      85345);

      function _audit(durationSelector) {
        return function auditOperatorFunction(source) {
          return source.lift(new AuditOperator(durationSelector));
        };
      }

      var AuditOperator = /*#__PURE__*/function () {
        function AuditOperator(durationSelector) {
          _classCallCheck(this, AuditOperator);

          this.durationSelector = durationSelector;
        }

        _createClass(AuditOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
          }
        }]);

        return AuditOperator;
      }();

      var AuditSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP) {
        _inherits(AuditSubscriber, _innerSubscribe__WEBP);

        var _super = _createSuper(AuditSubscriber);

        function AuditSubscriber(destination, durationSelector) {
          var _this22;

          _classCallCheck(this, AuditSubscriber);

          _this22 = _super.call(this, destination);
          _this22.durationSelector = durationSelector;
          _this22.hasValue = false;
          return _this22;
        }

        _createClass(AuditSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.value = value;
            this.hasValue = true;

            if (!this.throttled) {
              var duration;

              try {
                var durationSelector = this.durationSelector;
                duration = durationSelector(value);
              } catch (err) {
                return this.destination.error(err);
              }

              var innerSubscription = (0, _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));

              if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
              } else {
                this.add(this.throttled = innerSubscription);
              }
            }
          }
        }, {
          key: "clearThrottle",
          value: function clearThrottle() {
            var value = this.value,
                hasValue = this.hasValue,
                throttled = this.throttled;

            if (throttled) {
              this.remove(throttled);
              this.throttled = undefined;
              throttled.unsubscribe();
            }

            if (hasValue) {
              this.value = undefined;
              this.hasValue = false;
              this.destination.next(value);
            }
          }
        }, {
          key: "notifyNext",
          value: function notifyNext() {
            this.clearThrottle();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {
            this.clearThrottle();
          }
        }]);

        return AuditSubscriber;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber); //# sourceMappingURL=audit.js.map

      /***/

    },

    /***/
    45697:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "auditTime": function auditTime() {
          return (
            /* binding */
            _auditTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./audit */
      49732);
      /* harmony import */


      var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../observable/timer */
      46797);

      function _auditTime(duration) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return (0, _audit__WEBPACK_IMPORTED_MODULE_1__.audit)(function () {
          return (0, _observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler);
        });
      } //# sourceMappingURL=auditTime.js.map

      /***/

    },

    /***/
    54395:
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "debounceTime": function debounceTime() {
          return (
            /* binding */
            _debounceTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscriber */
      77393);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);

      function _debounceTime(dueTime) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return function (source) {
          return source.lift(new DebounceTimeOperator(dueTime, scheduler));
        };
      }

      var DebounceTimeOperator = /*#__PURE__*/function () {
        function DebounceTimeOperator(dueTime, scheduler) {
          _classCallCheck(this, DebounceTimeOperator);

          this.dueTime = dueTime;
          this.scheduler = scheduler;
        }

        _createClass(DebounceTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
          }
        }]);

        return DebounceTimeOperator;
      }();

      var DebounceTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(DebounceTimeSubscriber, _Subscriber__WEBPACK_);

        var _super2 = _createSuper(DebounceTimeSubscriber);

        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
          var _this23;

          _classCallCheck(this, DebounceTimeSubscriber);

          _this23 = _super2.call(this, destination);
          _this23.dueTime = dueTime;
          _this23.scheduler = scheduler;
          _this23.debouncedSubscription = null;
          _this23.lastValue = null;
          _this23.hasValue = false;
          return _this23;
        }

        _createClass(DebounceTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.debouncedNext();
            this.destination.complete();
          }
        }, {
          key: "debouncedNext",
          value: function debouncedNext() {
            this.clearDebounce();

            if (this.hasValue) {
              var lastValue = this.lastValue;
              this.lastValue = null;
              this.hasValue = false;
              this.destination.next(lastValue);
            }
          }
        }, {
          key: "clearDebounce",
          value: function clearDebounce() {
            var debouncedSubscription = this.debouncedSubscription;

            if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              debouncedSubscription.unsubscribe();
              this.debouncedSubscription = null;
            }
          }
        }]);

        return DebounceTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      function dispatchNext(subscriber) {
        subscriber.debouncedNext();
      } //# sourceMappingURL=debounceTime.js.map

      /***/

    },

    /***/
    46782:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "takeUntil": function takeUntil() {
          return (
            /* binding */
            _takeUntil
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../innerSubscribe */
      85345);

      function _takeUntil(notifier) {
        return function (source) {
          return source.lift(new TakeUntilOperator(notifier));
        };
      }

      var TakeUntilOperator = /*#__PURE__*/function () {
        function TakeUntilOperator(notifier) {
          _classCallCheck(this, TakeUntilOperator);

          this.notifier = notifier;
        }

        _createClass(TakeUntilOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            var notifierSubscription = (0, _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

            if (notifierSubscription && !takeUntilSubscriber.seenValue) {
              takeUntilSubscriber.add(notifierSubscription);
              return source.subscribe(takeUntilSubscriber);
            }

            return takeUntilSubscriber;
          }
        }]);

        return TakeUntilOperator;
      }();

      var TakeUntilSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP2) {
        _inherits(TakeUntilSubscriber, _innerSubscribe__WEBP2);

        var _super3 = _createSuper(TakeUntilSubscriber);

        function TakeUntilSubscriber(destination) {
          var _this24;

          _classCallCheck(this, TakeUntilSubscriber);

          _this24 = _super3.call(this, destination);
          _this24.seenValue = false;
          return _this24;
        }

        _createClass(TakeUntilSubscriber, [{
          key: "notifyNext",
          value: function notifyNext() {
            this.seenValue = true;
            this.complete();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {}
        }]);

        return TakeUntilSubscriber;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber); //# sourceMappingURL=takeUntil.js.map

      /***/

    },

    /***/
    22901:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      10826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super4 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super4.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    27589:
    /*!*******************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationFrameAction": function AnimationFrameAction() {
          return (
            /* binding */
            _AnimationFrameAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      401);

      var _AnimationFrameAction = /*#__PURE__*/function (_AsyncAction__WEBPACK) {
        _inherits(_AnimationFrameAction, _AsyncAction__WEBPACK);

        var _super5 = _createSuper(_AnimationFrameAction);

        function _AnimationFrameAction(scheduler, work) {
          var _this25;

          _classCallCheck(this, _AnimationFrameAction);

          _this25 = _super5.call(this, scheduler, work);
          _this25.scheduler = scheduler;
          _this25.work = work;
          return _this25;
        }

        _createClass(_AnimationFrameAction, [{
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0) {
              return _get(_getPrototypeOf(_AnimationFrameAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
              return scheduler.flush(null);
            }));
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(_AnimationFrameAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
            }

            if (scheduler.actions.length === 0) {
              cancelAnimationFrame(id);
              scheduler.scheduled = undefined;
            }

            return undefined;
          }
        }]);

        return _AnimationFrameAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction); //# sourceMappingURL=AnimationFrameAction.js.map

      /***/

    },

    /***/
    28644:
    /*!**********************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationFrameScheduler": function AnimationFrameScheduler() {
          return (
            /* binding */
            _AnimationFrameScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _AnimationFrameScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP) {
        _inherits(_AnimationFrameScheduler, _AsyncScheduler__WEBP);

        var _super6 = _createSuper(_AnimationFrameScheduler);

        function _AnimationFrameScheduler() {
          _classCallCheck(this, _AnimationFrameScheduler);

          return _super6.apply(this, arguments);
        }

        _createClass(_AnimationFrameScheduler, [{
          key: "flush",
          value: function flush(action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (++index < count && (action = actions.shift()));

            this.active = false;

            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AnimationFrameScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler); //# sourceMappingURL=AnimationFrameScheduler.js.map

      /***/

    },

    /***/
    57339:
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsapAction": function AsapAction() {
          return (
            /* binding */
            _AsapAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/Immediate */
      66239);
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      401);

      var _AsapAction = /*#__PURE__*/function (_AsyncAction__WEBPACK2) {
        _inherits(_AsapAction, _AsyncAction__WEBPACK2);

        var _super7 = _createSuper(_AsapAction);

        function _AsapAction(scheduler, work) {
          var _this26;

          _classCallCheck(this, _AsapAction);

          _this26 = _super7.call(this, scheduler, work);
          _this26.scheduler = scheduler;
          _this26.work = work;
          return _this26;
        }

        _createClass(_AsapAction, [{
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0) {
              return _get(_getPrototypeOf(_AsapAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(_AsapAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
            }

            if (scheduler.actions.length === 0) {
              _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);

              scheduler.scheduled = undefined;
            }

            return undefined;
          }
        }]);

        return _AsapAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction); //# sourceMappingURL=AsapAction.js.map

      /***/

    },

    /***/
    75899:
    /*!************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsapScheduler": function AsapScheduler() {
          return (
            /* binding */
            _AsapScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _AsapScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP2) {
        _inherits(_AsapScheduler, _AsyncScheduler__WEBP2);

        var _super8 = _createSuper(_AsapScheduler);

        function _AsapScheduler() {
          _classCallCheck(this, _AsapScheduler);

          return _super8.apply(this, arguments);
        }

        _createClass(_AsapScheduler, [{
          key: "flush",
          value: function flush(action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (++index < count && (action = actions.shift()));

            this.active = false;

            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsapScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler); //# sourceMappingURL=AsapScheduler.js.map

      /***/

    },

    /***/
    401:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      22901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super9 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this27;

          _classCallCheck(this, _AsyncAction);

          _this27 = _super9.call(this, scheduler, work);
          _this27.scheduler = scheduler;
          _this27.work = work;
          _this27.pending = false;
          return _this27;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super10 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this28;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this28 = _super10.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this28)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this28.actions = [];
          _this28.active = false;
          _this28.scheduled = undefined;
          return _this28;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    54857:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "animationFrameScheduler": function animationFrameScheduler() {
          return (
            /* binding */
            _animationFrameScheduler
          );
        },

        /* harmony export */
        "animationFrame": function animationFrame() {
          return (
            /* binding */
            _animationFrame
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AnimationFrameAction */
      27589);
      /* harmony import */


      var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AnimationFrameScheduler */
      28644);

      var _animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);

      var _animationFrame = _animationFrameScheduler; //# sourceMappingURL=animationFrame.js.map

      /***/
    },

    /***/
    58571:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asapScheduler": function asapScheduler() {
          return (
            /* binding */
            _asapScheduler
          );
        },

        /* harmony export */
        "asap": function asap() {
          return (
            /* binding */
            _asap
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsapAction */
      57339);
      /* harmony import */


      var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsapScheduler */
      75899);

      var _asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);

      var _asap = _asapScheduler; //# sourceMappingURL=asap.js.map

      /***/
    },

    /***/
    33637:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      401);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    },

    /***/
    66239:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Immediate": function Immediate() {
          return (
            /* binding */
            _Immediate
          );
        },

        /* harmony export */
        "TestTools": function TestTools() {
          return (
            /* binding */
            _TestTools
          );
        }
        /* harmony export */

      });

      var nextHandle = 1;

      var RESOLVED = function () {
        return Promise.resolve();
      }();

      var activeHandles = {};

      function findAndClearHandle(handle) {
        if (handle in activeHandles) {
          delete activeHandles[handle];
          return true;
        }

        return false;
      }

      var _Immediate = {
        setImmediate: function setImmediate(cb) {
          var handle = nextHandle++;
          activeHandles[handle] = true;
          RESOLVED.then(function () {
            return findAndClearHandle(handle) && cb();
          });
          return handle;
        },
        clearImmediate: function clearImmediate(handle) {
          findAndClearHandle(handle);
        }
      };
      var _TestTools = {
        pending: function pending() {
          return Object.keys(activeHandles).length;
        }
      }; //# sourceMappingURL=Immediate.js.map

      /***/
    },

    /***/
    26561:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      59796);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      } //# sourceMappingURL=isNumeric.js.map

      /***/

    },

    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders() // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token); //   let httpOptions = {
            //     headers: new HttpHeaders({
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "*",
            //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //       'Authorization':userdetails.token,
            //       "Content-Type": "application/json"
            //     })
            // };

            var options = {
              headers: header,
              withCredentials: true
            };
            return this.http.get(url, {
              headers: header
            });
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;

            if (serviceName == '/user_get_otp' || serviceName == '/user_verify_otp' || serviceName == '/user_register' || serviceName == '/user_login') {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
              var options = {
                headers: headers,
                withCredentials: false
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: headers
              });
            } else {
              var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);

              var _options = {
                headers: _headers,
                withCredentials: true
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: _headers
              });
            }
          }
        }, {
          key: "postFormData",
          value: function postFormData(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = {
              'enctype': 'multipart/form-data;',
              'Content-Type': 'multipart/form-data;',
              'Accept': 'plain/text',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
              'Token': token
            }; // const headers = new HttpHeaders().set("Token", token );
            //  headers.set('Content-Type', 'multipart/form-data'); 

            var options = {
              headers: headers,
              withCredentials: true
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    42580:
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageRoutingModule": function Tab1PageRoutingModule() {
          return (
            /* binding */
            _Tab1PageRoutingModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
      }];

      var _Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      _Tab1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab1PageRoutingModule);
      /***/
    },

    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1-routing.module */
      42580);

      var _Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      _Tab1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
      })], _Tab1PageModule);
      /***/
    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab1.page.html */
      5683);
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page.scss */
      99474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(router, activatedRoute, http, route, popoverController) {
          var _this29 = this;

          _classCallCheck(this, Tab1Page);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.http = http;
          this.popoverController = popoverController;
          this.intervalId = 0;
          this.Counter = '';
          this.seconds = 11;
          this.hour = 1;
          this.city = "coimbatore";
          this.username = localStorage.getItem("userName");
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.slideName = 'Home';
          this.isvisible = false;
          this.popUpisvisible = false;
          this.productDetails = true;
          this.storedetailsVisible = false;
          this.noDataFound = false;
          this.ExpirynoDataFound = true;
          this.offerListVisible = true;
          this.getCategoryList = [];
          this.offerlist = [];
          this.offerView = [];
          this.storedetails = [];
          this.locationChangeVisible = false; //--------------- Ion slide option ----------//

          this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }
          };
          this.expiryofferlist = [];
          this.locationsList = [];
          route.params.subscribe(function (val) {
            _this29.offerList();

            _this29.locationList(); // this.expiryOfferList()

          });
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSelectCategory();
            this.offerList();
            this.start();
            console.log(this.userdetails);
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
            this.Counter = "$ ".concat(this.hour, " {this.seconds} ");
          }
        }, {
          key: "countDown",
          value: function countDown() {
            var _this30 = this;

            this.clearTimer();
            this.intervalId = window.setInterval(function () {
              _this30.seconds -= 1;

              if (_this30.seconds === 0) {
                _this30.Counter = 'Offers Ends..!';
              } else {
                if (_this30.seconds < 0) {
                  _this30.seconds = 60;
                } // reset


                _this30.Counter = "".concat(_this30.hour, ". ").concat(_this30.seconds, " Hrs");
              }
            }, 1000);
          }
        }, {
          key: "hidepopup",
          value: function hidepopup() {
            this.popUpisvisible = false;
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            this.popUpisvisible = true;
          } // ----------- spam report -----------//

        }, {
          key: "spam",
          value: function spam(val) {
            console.log(this.spamMsg);

            if (this.spamMsg == true) {
              this.spam_msg = "spam Msg";
            } else {
              this.spam_msg = "";
            }
          } // ----------- storeNA report -----------//

        }, {
          key: "storeNA",
          value: function storeNA(val) {
            if (this.store == true) {
              this.store = "store NA";
            } else {
              this.store = "";
            }
          } // ----------- OfferDenaid report -----------//

        }, {
          key: "OfferDenaid",
          value: function OfferDenaid(val) {
            if (this.store == true) {
              this.offer_denied = "offer Denaid";
            } else {
              this.offer_denied = "";
            }
          } // ----------- Seller report Api call -----------//

        }, {
          key: "reportSeller",
          value: function reportSeller() {
            var _this31 = this;

            var obj = {
              store_name: this.storeID,
              spam_msg: this.spam_msg,
              store: this.store,
              offer_denied: this.offer_denied,
              others: this.others
            };
            this.http.post('/seller_report', obj).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this31.others = '';
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Report Successfully'
                });
                _this31.popUpisvisible = false;
              }
            }, function (error) {
              console.log(error);
              var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: function didOpen(toast) {
                  toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer);
                  toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer);
                }
              });
              Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong'
              });
            });
          } //------------- Read one Offer(card) Api call ------------//

        }, {
          key: "singleCard",
          value: function singleCard(product) {
            var _this32 = this;

            this.deliveryAvilability = '';
            var o = product;
            this.isvisible = true;
            this.storedetailsVisible = false;
            this.productDetails = true;
            this.http.get('/readone_offer_user?o=' + o).subscribe(function (response) {
              if (response.success == "true") {
                _this32.storeTbid = response.records.tbid;
                _this32.storeLogo = response.records.store_logo;
                _this32.storeName = response.records.store_name;
                _this32.productName = response.records.product;
                _this32.productImage = response.records.product_image;
                _this32.description = response.records.description;
                _this32.offer = response.records.offer;
                _this32.totalPrice = response.records.total_cost;
                _this32.offerPrice = response.records.offer_price;
                _this32.offerTime = response.records.offer_time, _this32.unit = response.records.product_unit;
              }
            }, function (error) {
              console.log(error);
            });
          } //---------------Get Store Details  Api call -------------//

        }, {
          key: "storeDetails",
          value: function storeDetails(storename) {
            var _this33 = this;

            this.storedetailsVisible = true;
            this.productDetails = false;
            var obj = {
              store_name: storename
            };
            this.http.post('/store_details_user', obj).subscribe(function (response) {
              _this33.storedetails = response.records;
              console.log(_this33.storedetails);
              _this33.storeAddress = response.records.address_line_1 + " " + response.records.address_line_2 + " " + response.records.city + " : " + response.records.pincode + " " + response.records.state;
              _this33.websiteLink = response.records.website;
              _this33.whatsApp = response.records.whatsapp;
              _this33.contact = response.records.contact_number;
              _this33.instagram = response.records.instagram;
              _this33.storeID = response.records.tbid;
              _this33.storeLogo = response.records.store_logo;
              _this33.deliveryAvilability = response.records.delivery_availability;

              if (_this33.deliveryAvilability == 1 && _this33.deliveryAvilability == false && _this33.deliveryAvilability == "Available") {
                _this33.deliveryAvilability = false;
              } else {
                _this33.deliveryAvilability = true;
              }
            }, function (error) {
              console.log(error);
            });
          } //-------------- Navigate to dashboard ----------//

        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.storedetailsVisible = false;
            this.isvisible = false;
            this.productDetails = true;
          } //-------------- Navigate to searchPage ----------//

        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          } //-------------- Navigate to setalarmPage ----------//

        }, {
          key: "setalarm",
          value: function setalarm() {
            this.router.navigate(['/setalarm']);
          } //-------------- Navigate to notificationPage ----------//

        }, {
          key: "notification",
          value: function notification() {
            this.router.navigate(['/notification']);
          } //--------- Get User Selected store Category's------------//

        }, {
          key: "getSelectCategory",
          value: function getSelectCategory() {
            var _this34 = this;

            this.http.get('/store_category').subscribe(function (response) {
              _this34.getCategoryList = response.records;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          } //------------- get offer list -----------//

        }, {
          key: "offerList",
          value: function offerList() {
            var _this35 = this;

            var data = {
              city: this.city
            };
            this.http.post('/list_all_offer', data).subscribe(function (response) {
              _this35.offerlist = response.records;
              console.log(_this35.offerlist);

              if (response.message == "No offers found.") {
                _this35.noDataFound = true;
              } else {
                _this35.noDataFound = false;
              }
            }, function (error) {
              console.log(error);
              _this35.noDataFound = true;
            });
          } //------------- get offer list -----------//

        }, {
          key: "expiryOfferList",
          value: function expiryOfferList() {
            var _this36 = this;

            this.http.get('/list_all_offer').subscribe(function (response) {
              _this36.expiryofferlist = response.records;
              console.log(_this36.offerlist); // if(response.message == "No offers found."){
              //   this.noDataFound = true;
              // }else{
              //   this.noDataFound = false;
              // }
            }, function (error) {
              console.log(error); // this.noDataFound = true;
            });
          } //------------- click home slider ----------//

        }, {
          key: "clickSlideHome",
          value: function clickSlideHome() {
            this.offerlist = [];
            this.slideName = "Home";
            this.offerListVisible = true;
            this.noDataFound = false;
            this.isvisible = false;
            this.offerList();
          } //------------- click  slider to fetch data based on category ----------//

        }, {
          key: "clickSlide",
          value: function clickSlide(item) {
            var _this37 = this;

            console.log(item);
            this.isvisible = false;
            this.slideName = item;

            if (this.slideName == "Home") {
              this.offerListVisible = true;
              this.noDataFound = false;
              this.offerList();
            }

            var obj = {
              store_category: item,
              city: this.city
            };
            this.http.post('/list_offer_category', obj).subscribe(function (response) {
              if (response.success == "true") {
                _this37.offerlist = response.records;
                console.log(response);
                _this37.offerListVisible = true;
                _this37.noDataFound = false;
              } else {}
            }, function (error) {
              console.log(error);
              _this37.offerListVisible = false;
              _this37.noDataFound = true;
            });
          }
        }, {
          key: "locationList",
          value: function locationList() {
            var _this38 = this;

            this.http.get('/list_location').subscribe(function (response) {
              console.log(response);
              _this38.locationsList = response.records;
              console.log(response.records.city);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "changeLocation",
          value: function changeLocation() {
            var _this39 = this;

            console.log(this.city);

            if (this.city == "All") {
              this.http.get('/list_all_offer').subscribe(function (response) {
                _this39.offerlist = response.records;
                console.log(_this39.offerlist);

                if (response.message == "No offers found.") {
                  _this39.noDataFound = true;
                } else {
                  _this39.noDataFound = false;
                }
              }, function (error) {
                console.log(error);
                _this39.noDataFound = true;
              });
            }
          }
        }, {
          key: "locationChange",
          value: function locationChange() {
            this.locationChangeVisible = !this.locationChangeVisible;
          }
        }, {
          key: "testSlide",
          value: function testSlide() {
            this.router.navigate(['/slide-test']);
          }
        }]);

        return Tab1Page;
      }();

      _Tab1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
        }];
      };

      _Tab1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab1Page);
      /***/
    },

    /***/
    99474:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  border: 1px solid #FFFFFF;\n  border-radius: 3px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  margin-bottom: 20px;\n  margin-right: 4px;\n  cursor: pointer;\n}\n\n#social-media-icon-div {\n  border: 1px solid #FFFFFF;\n  border-radius: 8px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n}\n\np {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n#offer {\n  padding: 2px !important;\n  margin: 5px !important;\n}\n\n.report-seller-btn {\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: linear-gradient(to left, #f34f78 0%, #EB154B 100%);\n  color: #fff;\n  margin-left: 10%;\n}\n\n#product_img {\n  border: 1px solid #FFFFFF;\n  border-radius: 15%;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 85px;\n  height: 75px;\n}\n\n#share {\n  color: #fff !important;\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  margin-left: 5%;\n  background: #eb154b;\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n\n#heart {\n  margin-left: -10px !important;\n  border-radius: 50% !important;\n  height: 20px;\n  width: 20px;\n}\n\n.green {\n  color: #404040 !important;\n}\n\n.red {\n  color: red !important;\n  border-radius: 55%;\n  padding: 2px;\n}\n\n.btn-default {\n  color: white;\n  background-color: blue;\n}\n\n.btn-change {\n  color: Red;\n  background-color: white;\n}\n\nion-chip.active {\n  color: red !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\nion-slides {\n  height: 50px !important;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 15px;\n  background-color: #fff !important;\n}\n\n.featured-slide {\n  width: 50% !important;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.featured-slide .info {\n  margin: 50px !important;\n  margin-left: 0 !important;\n  margin-right: 0px !important;\n  font-size: 17px !important;\n  color: #6E7989;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.div-slides {\n  bottom: 0;\n  width: 100%;\n  display: block;\n  background-color: #e6e6e6;\n}\n\n.div-slides img {\n  margin: 10px;\n  margin-right: 2px !important;\n  border-radius: 75px;\n}\n\n.tam-title {\n  margin-top: -0.5%;\n  font-size: 80%;\n  font-weight: bold;\n  color: #6E7989;\n}\n\nion-slide {\n  margin-left: -20px !important;\n  margin-right: 23px !important;\n  border-radius: 50%;\n}\n\nion-badge {\n  z-index: 999 !important;\n}\n\n#slideItem.active {\n  color: #121212;\n  font-weight: 700;\n}\n\n.tam-title.active {\n  color: blue !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\n.pop-up-card {\n  box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.664);\n  position: absolute;\n  top: 35%;\n  z-index: 1;\n  left: 2%;\n  border-radius: 10px;\n  width: 95%;\n}\n\nion-label {\n  font-size: 10px !important;\n}\n\nion-checkbox {\n  margin: 10px;\n}\n\ninput {\n  border-radius: 3px;\n  width: 90%;\n}\n\n.submit-btn {\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: linear-gradient(to left, #f34f78 0%, #EB154B 100%);\n  margin: 5px;\n  color: #fff;\n}\n\nion-item {\n  --background:#fffff;\n  height: 35px;\n  width: 100%;\n  margin-left: 35%;\n  --box-shadow: rgba(172, 22, 22, 0.04) 0px 3px 5px !important;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0Msc0JBQUE7QUFDRDs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQU1BO0VBQ0MsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSEQ7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGRDs7QUFLQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUZGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0FBSEY7O0FBUUE7RUFFRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBTkY7O0FBVUE7RUFDRSxxQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSRjs7QUFVRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBZ0JBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7QUFkRjs7QUFlRTtFQUlJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBaEJOOztBQW1CQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWhCRjs7QUFtQkE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsdUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHNCQUFBO0VBQ0EsK0RBQUE7QUFoQkY7O0FBc0JBO0VBQ0Usa0RBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQW5CRjs7QUF1QkE7RUFDRSwwQkFBQTtBQXBCRjs7QUFzQkE7RUFDRSxZQUFBO0FBbkJGOztBQTBCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQXZCRjs7QUEyQkE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtBQTFCRjs7QUE2QkE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0REFBQTtBQTNCQTs7QUErQkE7RUFDRSwrQkFBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaENGOztBQWlDRTtFQUNJLGFBQUE7QUEvQk4iLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6NHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzb2NpYWwtbWVkaWEtaWNvbi1kaXZ7XG4gIGJvcmRlcjoxcHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2NjYztcbn1cbnB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4jb2ZmZXJ7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xufVxuXG4ucmVwb3J0LXNlbGxlci1idG57XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmMzRmNzhcbiAgMCUsICNFQjE1NEJcbiAgMTAwJSk7XG4gIGNvbG9yOiNmZmY7XG4gIG1hcmdpbi1sZWZ0OjEwJTtcbiAgXG59XG5cbiNwcm9kdWN0X2ltZ3tcbiAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIGJveC1zaGFkb3c6M3B4IDNweCAxNnB4IDRweCAjY2NjO1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0Ojc1cHg7XG59XG4jc2hhcmV7XG4gY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZG90IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBiYWNrZ3JvdW5kOnJnYigyMzUsIDIxLCA3NSk7XG4gIGNvbG9yOiNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OjNweCAzcHggMTZweCA0cHggI2NjYztcbiAgXG59XG5cblxuXG5cbiNoZWFydHtcbiBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcbiBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiBoZWlnaHQ6MjBweDtcbiB3aWR0aDogMjBweDtcbn1cbi5ncmVlbiB7XG4gIGNvbG9yOiAjNDA0MDQwICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQge1xuIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiBib3JkZXItcmFkaXVzOiA1NSU7XG4gcGFkZGluZzogMnB4O1xufVxuXG4uYnRuLWRlZmF1bHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5cbn1cblxuLmJ0bi1jaGFuZ2Uge1xuICBjb2xvcjogUmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNoaXAuYWN0aXZleyBcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NTVjNTlcbiAgMCUsICMxZDFmMWVcbiAgMTAwJSk7XG59XG5cbmlvbi1zbGlkZXMge1xuICBcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBcbn1cblxuLmZlYXR1cmVkLXNsaWRlIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAvLyBib3gtc2hhZG93OiAzcHggLTJweCAxMXB4IDNweCNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIC5pbmZvIHtcbiAgICBtYXJnaW46IDUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQgO1xuICAgIGNvbG9yOiAjNkU3OTg5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuXG5cbi8vIGlvbi1zbGlkZXN7XG4vLyAgIGhlaWdodDoxNTBweCAhaW1wb3J0YW50O1xuLy8gfVxuLmRpdi1zbGlkZXN7ICAgIFxuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlOyAgICBcbiAgLy8gaGVpZ2h0OiAxNjBweDtcbiAgZGlzcGxheTogYmxvY2s7ICAgICAgICBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgaW1ne1xuICAgICAgLy8gd2lkdGg6IDU1cHg7XG4gICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgbWFyZ2luOjEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNzVweCA7XG4gIH1cbn1cbi50YW0tdGl0bGV7XG4gIG1hcmdpbi10b3A6IC0wLjUlO1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNkU3OTg5O1xuICAvLyBtYXJnaW4tbGVmdDogLTc1cHggIWltcG9ydGFudDtcbn1cbmlvbi1zbGlkZXtcbiAgbWFyZ2luLWxlZnQ6LTIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OjIzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSAgXG5cbmlvbi1iYWRnZXtcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XG59XG5cbiNzbGlkZUl0ZW0uYWN0aXZle1xuICBjb2xvcjogIzEyMTIxMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRhbS10aXRsZS5hY3RpdmV7IFxuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NTVjNTlcbiAgMCUsICMxZDFmMWVcbiAgMTAwJSk7XG59XG5cbi8vUG9wLVVwLUNhcmRcbi5wb3AtdXAtY2FyZCB7XG4gIGJveC1zaGFkb3cgICA6IDJweCAycHggM3B4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42NjQpO1xuICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcbiAgdG9wICAgICAgICAgIDogMzUlO1xuICB6LWluZGV4ICAgICAgOiAxO1xuICBsZWZ0ICAgICAgICA6IDIlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogOTUlO1xufVxuXG5cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2hlY2tib3h7XG4gIG1hcmdpbjoxMHB4O1xufVxuLy8gLmNhcmR7XG4vLyAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbi8vICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcbi8vICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNmZmY7XG4vLyB9XG5pbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogOTAlO1xufVxuXG5cbi5zdWJtaXQtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZjM0Zjc4XG4gIDAlLCAjRUIxNTRCXG4gIDEwMCUpO1xuICBtYXJnaW46NXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWl0ZW17XG4tLWJhY2tncm91bmQ6I2ZmZmZmO1xuaGVpZ2h0OjM1cHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbi1sZWZ0OiAzNSU7XG4vLyBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbi0tYm94LXNoYWRvdzogcmdiYSgxNzIsIDIyLCAyMiwgMC4wNCkgMHB4IDNweCA1cHggIWltcG9ydGFudDtcbn1cblxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojRjRGN0ZBICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    5683:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n\n\n\n<ion-content color=\"light\" [ngStyle]=\"{'opacity':popUpisvisible ? '0.52' : '1' }\">\n\n  <div style=\"margin-top: -5%;\" class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <h2 class=\"mx-3\"><b>Hi {{username}}</b></h2>\n        </div>\n        <div style=\"margin-top: 5%;\" class=\"col-3 \">\n          <svg (click)=\"searchPage()\" style=\"margin-left: 5%;margin-top:10% !important;margin-right:25%\" width=\"25\"\n            height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\" />\n            <path\n              d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\"\n              stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\" />\n            <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n          </svg>\n\n\n        </div>\n        <p style=\"margin-left:8% !important;\">Welcome to 24hrs</p>\n      </div>\n\n\n    </div>\n  </div>\n  <!------------ Ion slides  ---------------->\n  <div class=\"div-slides ion-text-left\">\n    <ion-slides slidesPerView=\"3\" spaceBetween=\"1\" [options]=\"slideOpts\">\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'Home' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'Home' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Home</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'v' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Hello</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Test</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Health</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">One</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Two</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'v' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'Mobile' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Mobile</p>\n      </ion-slide>\n\n      <ion-slide slidesPerView=\"3\" *ngFor=\"let category of getCategoryList\" (mouseup)=\"clickSlide(category.tbid)\"\n        text-start>\n        <p [style.border-bottom]=\"slideName == category.tbid ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == category.tbid ? '#eb154b' : '#262525' \" class=\"tam-title ion-text-left\">\n          {{category.category}} </p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div style=\"margin-top: -7%;\" class=\"row\">\n    <div class=\"col-4 mt-2\">\n      <h6 style=\"color: #272A3F;margin-left:15%;\"> Live Offers</h6>\n    </div>\n\n    <!-----------   Location Dropdown    ---------------->\n    <div class=\"col-8 mt-2\">\n      <ion-item>\n        <svg style=\"margin: 5px;\" (click)=\"locationChange()\" width=\"16\" height=\"16\" fill=\"#eb154b\"\n          class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" />\n        </svg>\n        <ion-label style=\"font-size:13px !important;color: #121212;\">{{city}}</ion-label>\n        <ion-select (ionChange)=\"changeLocation()\" style=\"font-size: 10px;color:#F4F7FA\" [(ngModel)]=\"city\"\n          interface=\"popover\">\n          <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n          </ion-select-option>\n          <ion-select-option [value]=\"All\">All</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n\n<!------------Store Details Card  -------------->\n\n  <div class=\"container\">\n    <div class=\"row ion-text-center\">\n      <div class=\"container\">\n        <div *ngIf=\"isvisible\" class=\"col-12 card\">\n          <div class=\"row\">\n            <div class=\"col-10 ion-text-left\">\n              <div class=\"row\">\n                <!-- <div class=\"col-2\">\n                  <img style=\"margin: 5px;\" src=\"{{storeLogo}}\" height=\"20px\" width=\"25px\" alt=\"\">\n                </div> -->\n                <div class=\"col-8  mb-3 mt-1\">\n                  <p (click)=\"storeDetails(storeName)\" style=\"font-size: 18px;color: #404040;margin-left: 8px !important;\"><b>{{storeName}}</b>\n\n                  </p>\n                </div>\n                <div class=\"col-4 ion-text-right\">\n                  <div style=\"margin-left: 95% !important;\" *ngIf=\"productDetails\" class=\"mt-2\">\n    \n                    <!---------  Delivery icon ---------->\n    \n                    <svg   width=\"38\" height=\"20\" viewBox=\"0 0 38 30\" fill=\"none\">\n                      <path\n                        d=\"M6.65 0C5.07597 0 3.8 1.25918 3.8 2.8125V5.625H0.95C0.425303 5.625 0 6.04687 0 6.5625C0 7.07813 0.425303 7.5 0.95 7.5H16.15C16.6725 7.5 17.1 7.92187 17.1 8.4375C17.1 8.95313 16.6725 9.375 16.15 9.375H2.85C2.32512 9.375 1.9 9.79687 1.9 10.3125C1.9 10.8281 2.32512 11.25 2.85 11.25H14.25C14.7725 11.25 15.2 11.6719 15.2 12.1875C15.2 12.7031 14.7725 13.125 14.25 13.125H0.95C0.425303 13.125 0 13.5469 0 14.0625C0 14.5781 0.425303 15 0.95 15H12.35C12.8725 15 13.3 15.4219 13.3 15.9375C13.3 16.4531 12.8725 16.875 12.35 16.875H3.8V24.375C3.8 27.4805 6.29969 30 9.5 30C12.6469 30 15.2 27.4805 15.2 24.375H22.8C22.8 27.4805 25.2997 30 28.5 30C31.6469 30 34.2 27.4805 34.2 24.375H36.1C37.1509 24.375 38 23.5371 38 22.5C38 21.4629 37.1509 20.625 36.1 20.625V13.9043C36.1 12.9082 35.7022 11.9531 34.9897 11.25L30.4 6.7207C29.6341 6.01758 28.7197 5.625 27.7103 5.625H24.7V2.8125C24.7 1.25918 23.4234 0 21.85 0H6.65ZM32.3 13.9043V15H24.7V9.375H27.7103L32.3 13.9043ZM9.5 27.1875C7.92656 27.1875 6.65 25.9277 6.65 24.375C6.65 22.8223 7.92656 21.5625 9.5 21.5625C11.0734 21.5625 12.35 22.8223 12.35 24.375C12.35 25.9277 11.0734 27.1875 9.5 27.1875ZM31.35 24.375C31.35 25.9277 30.0734 27.1875 28.5 27.1875C26.9266 27.1875 25.65 25.9277 25.65 24.375C25.65 22.8223 26.9266 21.5625 28.5 21.5625C30.0734 21.5625 31.35 22.8223 31.35 24.375Z\"\n                        fill=\"#EB154B\" />\n                    </svg>\n                  </div>\n                  \n                  <ion-icon   (click)=\"navigateHome()\" *ngIf=\"storedetailsVisible\"\n                    style=\"margin:10px;cursor:pointer;color:#eb154b;margin-left: 125% !important;\" name=\"close\"></ion-icon>\n                </div>\n              </div>\n            </div>\n           \n\n\n            <!------------- Product details --------------->\n            <div *ngIf=\"productDetails\" class=\"row\">\n            \n              <div class=\"col-6\">\n                <img id=\"product_img\" height=\"75px\" width=\"95px\" style=\"margin-left:5px;border-radius: 5px;\"\n                  src=\"{{productImage}}\" alt=\"\">\n                <div class=\"row\">\n                  <div class=\"col-12 ion-text-center mt-3\">\n                    <p style=\"color: #404040;\">{{productName}}</p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-6\">\n                <div>\n                  <ion-badge class=\"badge ion-text-left\" id=\"kg\" slot=\"start\">{{offer}}{{unit}}\n                  </ion-badge>\n                </div>\n                <p><span id=\"offer\" style=\"font-size: smaller;color: #5F5F5F;text-decoration: line-through\">\n                    <i style=\"color:#EB154B\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                    {{totalPrice}}</span> <span style=\"margin: 0;padding:0;font-size:15px;\">{{offerPrice}}</span></p>\n                <p style=\"font-size: smaller;\">\n                  <svg style=\"margin-left: -3px;\" width=\"20\" height=\"18\" viewBox=\"0 0 29 29\" fill=\"none\">\n                    <path\n                      d=\"M8.49963 12.492L8.49859 12.5105C8.42789 13.7644 9.12154 14.9391 10.2662 15.5023L10.278 15.5081C10.6815 15.7035 11.0123 16.0258 11.221 16.4265L11.2257 16.4352C11.8025 17.5473 12.9954 18.2214 14.2672 18.1538L14.2865 18.1527C14.7477 18.1266 15.2055 18.247 15.5958 18.4974C16.6726 19.1795 18.0396 19.1795 19.1164 18.4974C19.5067 18.247 19.9645 18.1266 20.4257 18.1527L20.445 18.1538C21.7147 18.2219 22.9092 17.5473 23.4873 16.4334L23.4902 16.4273C23.6996 16.0255 24.0312 15.7027 24.4361 15.507L24.4455 15.5023C25.5902 14.9388 26.2841 13.7644 26.2131 12.5102L26.2121 12.4928C26.1886 12.0511 26.3096 11.614 26.5569 11.2492C27.2688 10.1979 27.2688 8.81162 26.5572 7.76004C26.3101 7.39552 26.1886 6.95861 26.2121 6.51696L26.2131 6.49847C26.2841 5.24429 25.5902 4.06988 24.4444 3.50618L24.434 3.5009C24.0312 3.30596 23.7012 2.98528 23.4922 2.58562L23.4862 2.57374C22.9092 1.46167 21.7147 0.787825 20.445 0.855183L20.4255 0.85624C19.9645 0.88239 19.5067 0.761938 19.1167 0.511525H19.1162C18.0393 -0.170508 16.6724 -0.170508 15.5955 0.511525C15.2052 0.761674 14.7474 0.882126 14.2862 0.855975L14.2669 0.854919C12.997 0.786768 11.8027 1.46141 11.226 2.57321L11.2215 2.5814C11.0126 2.9829 10.6815 3.30543 10.2774 3.50117L10.2665 3.50645C9.1218 4.06961 8.42789 5.24429 8.49885 6.49847L8.49989 6.5159C8.52337 6.95756 8.40233 7.39472 8.15503 7.75925C7.44312 8.81083 7.44312 10.1973 8.15503 11.2487C8.40207 11.6132 8.52337 12.0504 8.49963 12.492ZM9.03441 8.37366C9.41606 7.81102 9.60311 7.13639 9.56658 6.45488L9.56554 6.43639C9.52798 5.60538 9.98867 4.83353 10.7324 4.48037L10.7415 4.47588C11.3517 4.18003 11.8513 3.69294 12.1664 3.08698L12.1716 3.07694C12.5548 2.33785 13.3575 1.88986 14.21 1.93582L14.2288 1.93661C14.911 1.97544 15.5879 1.7974 16.165 1.42707C16.8936 0.965597 17.8181 0.965597 18.5467 1.42707C19.1238 1.79687 19.8007 1.97518 20.4826 1.93687L20.5014 1.93582C21.3581 1.89038 22.1569 2.33785 22.539 3.07483L22.5461 3.0883C22.8612 3.69347 23.3603 4.17976 23.9696 4.47535L23.9785 4.47984C24.734 4.85176 25.1926 5.61964 25.1464 6.43666L25.1454 6.45594C25.1089 7.13744 25.2962 7.81182 25.6778 8.37445C26.139 9.05569 26.1388 9.9538 25.6773 10.6348C25.2959 11.1977 25.1089 11.8723 25.1454 12.5538L25.1464 12.572C25.1926 13.3891 24.734 14.1572 23.9782 14.5294L23.9704 14.5331C23.3597 14.8295 22.8596 15.3171 22.5443 15.9241L22.5403 15.932C22.1569 16.6711 21.3555 17.1194 20.5017 17.0732L20.4831 17.0721C19.801 17.0335 19.1238 17.2118 18.5464 17.5819C17.8181 18.0431 16.8936 18.0431 16.1652 17.5819C15.6404 17.2451 15.0315 17.0665 14.4101 17.0671C14.3499 17.0671 14.2893 17.0687 14.2288 17.0721L14.21 17.0729C13.3687 17.127 12.5728 16.6812 12.1708 15.9307L12.1654 15.9204C11.8507 15.3155 11.352 14.8295 10.7428 14.5339L10.7329 14.5289C9.97719 14.1569 9.51858 13.3888 9.56502 12.572L9.56606 12.5528C9.60232 11.8713 9.41502 11.1966 9.03363 10.6342C8.57268 9.95301 8.57294 9.0549 9.03441 8.37419V8.37366Z\"\n                      fill=\"#EB154B\" />\n                    <path\n                      d=\"M13.9082 15.097C14.1584 15.2553 14.4879 15.1779 14.6441 14.9245L20.9731 4.65812C21.0764 4.49408 21.085 4.28646 20.9952 4.1145C20.9055 3.94228 20.7312 3.83239 20.5392 3.82631C20.3472 3.82024 20.1667 3.91903 20.0665 4.08518L13.7379 14.3516C13.5816 14.6052 13.6578 14.9388 13.9082 15.097Z\"\n                      fill=\"#EB154B\" />\n                    <path\n                      d=\"M14.4755 9.53113C15.7765 9.53113 16.8351 8.30891 16.8351 6.80669C16.8351 5.30447 15.7765 4.08252 14.4755 4.08252C13.1746 4.08252 12.1162 5.30447 12.1162 6.80669C12.1162 8.30891 13.1746 9.53113 14.4755 9.53113ZM14.4755 5.16448C15.1874 5.16448 15.7665 5.90119 15.7665 6.80669C15.7665 7.7122 15.1874 8.44917 14.4755 8.44917C13.7639 8.44917 13.1847 7.71193 13.1847 6.80669C13.1847 5.90145 13.7639 5.16448 14.4755 5.16448Z\"\n                      fill=\"#EB154B\" />\n                    <path\n                      d=\"M17.8765 12.2027C17.8765 13.7049 18.9348 14.9269 20.2358 14.9269C21.5367 14.9269 22.5953 13.7046 22.5953 12.2027C22.5953 10.701 21.537 9.47852 20.236 9.47852C18.9348 9.47852 17.8765 10.7002 17.8765 12.2027ZM21.5268 12.2027C21.5268 13.1082 20.9477 13.8449 20.2358 13.8449C19.5241 13.8449 18.945 13.1082 18.945 12.2027C18.945 11.2972 19.5241 10.5605 20.2358 10.5605C20.9477 10.5605 21.5268 11.2967 21.5268 12.2027Z\"\n                      fill=\"#EB154B\" />\n                    <path\n                      d=\"M28.6263 21.186C27.9188 19.9146 26.35 19.4304 25.0626 20.0861L20.8775 22.0883C20.2997 21.0003 19.1912 20.3077 17.9714 20.2728L14.108 20.165C13.4962 20.1473 12.896 19.9902 12.352 19.706L11.9589 19.4997C9.94606 18.4372 7.54686 18.4399 5.53609 19.5065L5.56061 18.6047C5.5687 18.306 5.33626 18.0571 5.04122 18.0489L0.804722 17.9309C0.50968 17.9227 0.264203 18.158 0.256116 18.4568L0.000204782 27.8708C-0.00788216 28.1696 0.224551 28.4184 0.519593 28.4266L4.75609 28.5447H4.77096C5.06026 28.5444 5.29687 28.3111 5.30496 28.0185L5.31696 27.5681L6.41756 26.9714C6.84956 26.736 7.35486 26.68 7.82677 26.8153L14.3988 28.6831C14.4103 28.6865 14.4218 28.6891 14.4335 28.6918C14.9086 28.7924 15.3927 28.8429 15.8782 28.8426C16.906 28.8431 17.9218 28.6189 18.856 28.1846C18.879 28.174 18.9011 28.1619 18.9223 28.1482L28.4513 21.9066C28.6889 21.7513 28.7656 21.4351 28.6263 21.186ZM1.08307 27.3597L1.3095 19.0276L4.47801 19.1158L4.25131 27.4482L1.08307 27.3597ZM18.3744 27.2178C17.2138 27.7482 15.9176 27.8946 14.6701 27.6362L8.11555 25.7737C7.37808 25.5624 6.58817 25.6501 5.9133 26.0175L5.35087 26.3224L5.50165 20.7824C7.28364 19.5821 9.56937 19.4587 11.4674 20.4601L11.8606 20.6664C12.5477 21.0256 13.3058 21.224 14.0787 21.2465L17.9422 21.3542C19.0274 21.3857 19.949 22.1681 20.1692 23.2448L14.4145 23.0844C14.1194 23.0762 13.874 23.3116 13.8659 23.6103C13.8578 23.9091 14.0902 24.1579 14.3853 24.1661L20.7361 24.3431H20.7512C21.0403 24.3428 21.2769 24.1096 21.285 23.8169C21.2915 23.5818 21.274 23.3465 21.2333 23.1151L25.5251 21.0613L25.5376 21.0552C26.1465 20.743 26.8829 20.8473 27.3835 21.3167L18.3744 27.2178Z\"\n                      fill=\"#EB154B\" />\n                  </svg>\n                  {{offer}}%\n                </p>\n\n                <p id=\"offer\" style=\"font-size: smaller;margin-left: 20%;\">\n                  <svg style=\"margin-left: 16%;\" width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\">\n                    <path\n                      d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n                      fill=\"#EB154B\" />\n                    <path\n                      d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n                      fill=\"#EB154B\" />\n                  </svg>\n                  {{Counter}}\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n          <!--------------- Store Details -------------------->\n          <div class=\"row\">\n\n            <div *ngIf=\"storedetailsVisible\">\n              <div class=\"col-12 ion-text-center\">\n                <img id=\"product_img\" style=\"margin: 5px;\" src=\"{{storeLogo}}\" height=\"75px\" width=\"75px\" alt=\"\">\n              </div>\n              <div class=\"container\">\n                <!-- <p>We have served quality products and reliable service @ fair prices</p> -->\n                <p style=\"font-size: 12px;\">\n                  <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n                    <path\n                      d=\"M17.3802 13.4026H12.1973C11.5029 14.5013 10.7411 15.5558 9.91615 16.5602C9.09125 15.5558 8.32941 14.5013 7.63503 13.4026H2.45214L0 19.8316H19.8323L17.3802 13.4026Z\"\n                      fill=\"#DFEEF4\" />\n                    <path\n                      d=\"M9.91611 0C8.51624 4.55814e-05 7.17371 0.556163 6.18385 1.54602C5.19399 2.53588 4.63788 3.87841 4.63783 5.27828C4.60689 10.3142 9.91611 16.5602 9.91611 16.5602C9.91611 16.5602 15.2253 10.3142 15.1944 5.27828C15.1943 3.87841 14.6382 2.53588 13.6484 1.54602C12.6585 0.556163 11.316 4.55814e-05 9.91611 0ZM9.91611 7.51781C9.47317 7.51781 9.04018 7.38647 8.67189 7.14038C8.3036 6.8943 8.01656 6.54453 7.84705 6.13531C7.67755 5.72609 7.6332 5.2758 7.71961 4.84137C7.80602 4.40694 8.01932 4.0079 8.33252 3.69469C8.64573 3.38149 9.04477 3.16819 9.4792 3.08178C9.91363 2.99537 10.3639 3.03972 10.7731 3.20922C11.1824 3.37873 11.5321 3.66578 11.7782 4.03406C12.0243 4.40235 12.1556 4.83534 12.1556 5.27828C12.1558 5.57241 12.0979 5.86368 11.9854 6.13545C11.8729 6.40721 11.7079 6.65414 11.4999 6.86212C11.292 7.0701 11.045 7.23506 10.7733 7.34757C10.5015 7.46008 10.2102 7.51793 9.91611 7.51781Z\"\n                      fill=\"#F45858\" />\n                    <path\n                      d=\"M17.9497 14.893L8.05316 18.413L4.19629 13.4028H7.63551C8.32972 14.5014 9.09144 15.5559 9.91629 16.5601C10.7411 15.5559 11.5029 14.5014 12.1971 13.4028H17.3808L17.9497 14.893Z\"\n                      fill=\"#F2DA30\" />\n                    <path d=\"M4.06543 19.8316L13.8616 16.347L16.5436 19.8316H4.06543Z\" fill=\"#3EA2E5\" />\n                  </svg>\n                  {{storeAddress}}\n                </p>\n              </div>\n\n            </div>\n            <div class=\"col-12 ion-text-left mt-2 mb-2\">\n              <p *ngIf=\"productDetails\" style=\"font-size:10px;margin-left:5% !important;\">\n                {{description}}</p>\n\n            </div>\n\n            <div class=\"col-6 mt-2 mb-2\">\n              <button (click)=\"showPopup()\" *ngIf=\"storedetailsVisible\" class=\"btn btn-sm report-seller-btn\"><svg\n                  width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\">\n                  <path\n                    d=\"M19.6812 14.4165L12.0367 1.17586C11.6116 0.439608 10.8502 0 9.99998 0C9.14979 0 8.38838 0.439608 7.96331 1.17586L0.318837 14.4165C-0.106279 15.1528 -0.106279 16.0319 0.318837 16.7682C0.743953 17.5045 1.50528 17.9441 2.35551 17.9441H17.6445C18.4946 17.9441 19.256 17.5045 19.6812 16.7683C20.1063 16.0319 20.1063 15.1528 19.6812 14.4165ZM18.6664 16.1824C18.4531 16.5519 18.0711 16.7724 17.6445 16.7724H2.35551C1.92887 16.7724 1.54684 16.5519 1.33356 16.1824C1.12028 15.813 1.12028 15.3719 1.33356 15.0024L8.97811 1.76175C9.19139 1.3923 9.57342 1.17175 10 1.17175C10.4266 1.17175 10.8087 1.3923 11.0219 1.76175L18.6664 15.0024C18.8797 15.3719 18.8797 15.813 18.6664 16.1824Z\"\n                    fill=\"white\" />\n                  <path d=\"M10.5858 5.84747H9.41406V11.7061H10.5858V5.84747Z\" fill=\"white\" />\n                  <path\n                    d=\"M9.99992 12.8779C9.56918 12.8779 9.21875 13.2283 9.21875 13.6591C9.21875 14.0898 9.56918 14.4402 9.99992 14.4402C10.4306 14.4402 10.7811 14.0898 10.7811 13.6591C10.7811 13.2283 10.4307 12.8779 9.99992 12.8779Z\"\n                    fill=\"white\" />\n                </svg>\n                Report Seller</button>\n            </div>\n            <div *ngIf=\"storedetailsVisible\" class=\"col-6 mt-2\">\n              <svg  style=\"margin-left: 50%;\" width=\"38\" height=\"25\" viewBox=\"0 0 38 30\" fill=\"none\">\n                <path\n                  d=\"M6.65 0C5.07597 0 3.8 1.25918 3.8 2.8125V5.625H0.95C0.425303 5.625 0 6.04687 0 6.5625C0 7.07813 0.425303 7.5 0.95 7.5H16.15C16.6725 7.5 17.1 7.92187 17.1 8.4375C17.1 8.95313 16.6725 9.375 16.15 9.375H2.85C2.32512 9.375 1.9 9.79687 1.9 10.3125C1.9 10.8281 2.32512 11.25 2.85 11.25H14.25C14.7725 11.25 15.2 11.6719 15.2 12.1875C15.2 12.7031 14.7725 13.125 14.25 13.125H0.95C0.425303 13.125 0 13.5469 0 14.0625C0 14.5781 0.425303 15 0.95 15H12.35C12.8725 15 13.3 15.4219 13.3 15.9375C13.3 16.4531 12.8725 16.875 12.35 16.875H3.8V24.375C3.8 27.4805 6.29969 30 9.5 30C12.6469 30 15.2 27.4805 15.2 24.375H22.8C22.8 27.4805 25.2997 30 28.5 30C31.6469 30 34.2 27.4805 34.2 24.375H36.1C37.1509 24.375 38 23.5371 38 22.5C38 21.4629 37.1509 20.625 36.1 20.625V13.9043C36.1 12.9082 35.7022 11.9531 34.9897 11.25L30.4 6.7207C29.6341 6.01758 28.7197 5.625 27.7103 5.625H24.7V2.8125C24.7 1.25918 23.4234 0 21.85 0H6.65ZM32.3 13.9043V15H24.7V9.375H27.7103L32.3 13.9043ZM9.5 27.1875C7.92656 27.1875 6.65 25.9277 6.65 24.375C6.65 22.8223 7.92656 21.5625 9.5 21.5625C11.0734 21.5625 12.35 22.8223 12.35 24.375C12.35 25.9277 11.0734 27.1875 9.5 27.1875ZM31.35 24.375C31.35 25.9277 30.0734 27.1875 28.5 27.1875C26.9266 27.1875 25.65 25.9277 25.65 24.375C25.65 22.8223 26.9266 21.5625 28.5 21.5625C30.0734 21.5625 31.35 22.8223 31.35 24.375Z\"\n                  fill=\"#EB154B\" />\n              </svg>\n            </div>\n\n          </div>\n\n          <!------------- Social icons ------------------>\n          <div id=\"social-media-icon-div\">\n            <div class=\"row\">\n\n              <!-------- contact --------->\n\n              <div class=\"col-3 mt-2\">\n                <a href=\"contact\">\n                  <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n                    <path\n                      d=\"M384 0H64C28.65 0 0 28.65 0 64V384C0 419.35 28.65 448 64 448H384C419.35 448 448 419.35 448 384V64C448 28.65 419.3 0 384 0ZM351.6 289.5L339.98 339.89C338.347 347.015 332.08 352 324.74 352C198.64 352 96.04 249.4 96.04 123.2C96.04 115.872 101.024 109.61 108.15 107.98L158.53 96.35C165.874 94.647 173.41 98.459 176.46 105.412L199.73 159.692C202.449 166.083 200.613 173.522 195.238 177.912L168.3 200C185.29 234.61 213.44 262.75 248.07 279.75L270.09 252.84C274.434 247.449 281.94 245.59 288.33 248.356L342.57 271.606C349.5 274.6 353.3 282.2 351.6 289.5Z\"\n                      fill=\"black\" />\n                  </svg>\n                </a>\n\n              </div>\n\n              <!----------- Whats app ------------>\n              <div class=\"col-3 mt-2 mb-2\">\n                <a href=\"{{whatsApp}}\">\n                  <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M36 0C16.119 0 0 16.119 0 36C0 42.7536 1.89702 49.0502 5.13281 54.4512L0.322266 72L18.2461 67.2949C23.4881 70.2752 29.5395 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM23.6777 19.207C24.2627 19.207 24.8638 19.2035 25.3828 19.2305C26.0248 19.2455 26.7236 19.2925 27.3926 20.7715C28.1876 22.5295 29.9186 26.9397 30.1406 27.3867C30.3626 27.8337 30.5199 28.3603 30.2109 28.9453C29.9169 29.5453 29.764 29.9085 29.332 30.4395C28.885 30.9555 28.3952 31.5963 27.9902 31.9863C27.5432 32.4333 27.0817 32.9235 27.5977 33.8145C28.1137 34.7055 29.9057 37.6264 32.5547 39.9844C35.9597 43.0264 38.8326 43.9612 39.7266 44.4082C40.6206 44.8552 41.1383 44.7855 41.6543 44.1855C42.1853 43.6005 43.8844 41.5932 44.4844 40.6992C45.0694 39.8052 45.6666 39.9599 46.4766 40.2539C47.2986 40.5479 51.6822 42.7073 52.5762 43.1543C53.4702 43.6013 54.0562 43.8225 54.2812 44.1855C54.5122 44.5605 54.5125 46.3457 53.7715 48.4277C53.0305 50.5067 49.3918 52.5172 47.7598 52.6582C46.1128 52.8112 44.5757 53.3985 37.0547 50.4375C27.9827 46.8645 22.2615 37.5727 21.8145 36.9727C21.3675 36.3877 18.1816 32.1417 18.1816 27.7617C18.1816 23.3667 20.486 21.2143 21.293 20.3203C22.115 19.4263 23.0777 19.207 23.6777 19.207Z\" fill=\"black\"/>\n                    </svg>\n                    \n\n                </a>\n\n              </div>\n\n\n\n              <!----------- Insta ------------>\n              <div class=\"col-3 mt-2\">\n                <a href=\"instagram\">\n                  <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M20.9941 0C9.41714 0 0 9.42586 0 21.0059V51.0059C0 62.5829 9.42586 72 21.0059 72H51.0059C62.5829 72 72 62.5741 72 50.9941V20.9941C72 9.41714 62.5741 0 50.9941 0H20.9941ZM57 12C58.656 12 60 13.344 60 15C60 16.656 58.656 18 57 18C55.344 18 54 16.656 54 15C54 13.344 55.344 12 57 12ZM36 18C45.927 18 54 26.073 54 36C54 45.927 45.927 54 36 54C26.073 54 18 45.927 18 36C18 26.073 26.073 18 36 18ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24V24Z\" fill=\"black\"/>\n                    </svg>\n                    \n\n                </a>\n              </div>\n\n              <!----------- Website------------>\n              <div class=\"col-3 mt-2\">\n                <a href=\"{{websiteLink}}\">\n                  <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n                    <path\n                      d=\"M308 224C308 243.425 306.95 262.15 305.113 280H142.888C141.05 262.15 139.213 243.425 139.213 224C139.213 204.575 141.05 185.85 142.888 168H305.113C306.95 185.85 308 204.575 308 224ZM440.912 168C445.55 185.938 448 204.662 448 224C448 243.338 445.55 262.062 440.912 280H333.2C335.037 261.975 336 242.463 336 224C336 204.75 335.037 186.025 333.2 168H440.912ZM431.725 140H329.613C320.863 84.1225 303.537 37.2925 281.225 7.38675C349.825 25.4538 405.475 75.1975 431.725 140ZM301.262 140H146.737C152.075 108.15 160.3 79.9575 170.362 57.1812C179.55 36.5225 189.787 21.5338 199.675 12.0838C209.475 2.78075 217.612 0 224 0C230.388 0 238.525 2.78075 248.325 12.0838C258.212 21.5338 268.45 36.5225 277.637 57.1812C287.7 79.9575 295.925 108.15 301.262 140ZM16.2838 140C42.5163 75.1975 98.175 25.4538 166.775 7.38675C144.463 37.2925 127.138 84.1225 118.388 140H16.2838ZM114.8 168C112.962 186.025 111.212 204.75 111.212 224C111.212 242.463 112.962 261.975 114.8 280H7.05687C2.45 262.062 0 243.338 0 224C0 204.662 2.45 185.938 7.05687 168H114.8ZM170.362 390.775C160.3 368.025 152.075 339.85 146.737 308H301.262C295.925 339.85 287.7 368.025 277.637 390.775C268.45 411.513 258.212 426.475 248.325 435.925C238.525 445.2 230.388 448 223.213 448C217.613 448 209.475 445.2 199.675 435.925C189.787 426.475 179.55 411.513 170.362 390.775ZM166.775 440.65C98.175 422.538 42.5163 372.837 16.2838 308H118.388C127.138 363.913 144.463 410.725 166.775 440.65ZM281.225 440.65C303.537 410.725 320.863 363.913 329.613 308H431.725C405.475 372.837 349.825 422.538 281.225 440.65Z\"\n                      fill=\"black\" />\n                  </svg>\n\n                </a>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <!--------------- Live offer card ------------------>\n      <div class=\"container\">\n\n\n        <div *ngIf=\"offerListVisible\" class=\"row mb-2\">\n          <div *ngFor=\"let offer of offerlist\" id=\"productCard\" class=\"col-6 ion-text-center\">\n            <div class=\"row mt-2\">\n              <!-- <div class=\"col-4\">\n                <img src=\"{{offer.store_logo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n              </div> -->\n              <div class=\"col-12 ion-text-left\">\n                <span style=\"font-size: 14px;color:#404040;\"><b>{{offer.store_name}} </b></span>\n\n              </div>\n              <div (click)=\"singleCard(offer.product)\" class=\"col-9 ion-text-left mt-2\">\n                <img id=\"product_img\" src=\"{{offer.product_image}}\" alt=\"\">\n              </div>\n\n              <div class=\"col-3 mt-2\">\n                <!-- <div>\n                  <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                  [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n                </div> -->\n                <div>\n                  <ion-badge style=\"margin-left: -5px;\" id=\"kg\">{{offer.offer}}{{offer.product_unit}}</ion-badge>\n                </div>\n              </div>\n\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left mt-1\">\n                <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{offer.product}}</b></p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n\n                <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                    <i style=\"color:#121212\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                    Rs.{{offer.total_cost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                    <b>{{offer.offer_price}}.00</b></span></p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left\">\n                <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                  <i style=\"color:#121212\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                  {{offer.other_offer}}\n                </p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n                <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                  <i style=\"color:#121212\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                  {{offer.offer_time}}\n                </p>\n              </div>\n              <!-- <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n                <div class=\"dot\">\n                  <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                    class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                    <path\n                      d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                  </svg>\n                </div>\n              </div> -->\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n  <!------------- live offers No data found Gif ------------------->\n  <div *ngIf=\"noDataFound\">\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\n  </div>\n\n  <div style=\"margin-top: -5%;\" class=\"row\">\n    <div class=\"col-12 mt-2\">\n      <h6 style=\"color: #272A3F;margin-left:5%;\"> Expired Offers</h6>\n    </div>\n\n    <!--------------- Expiry offer card ------------------>\n    <div class=\"container\">\n      <div *ngIf=\"offerListVisible\" class=\"row mb-2\">\n        <div *ngFor=\"let offer of expiryofferlist\" id=\"productCard\" class=\"col-6 ion-text-center\">\n          <div class=\"row mt-2\">\n            <!-- <div class=\"col-4\">\n              <img src=\"{{offer.store_logo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n            </div> -->\n            <div class=\"col-12 ion-text-left\">\n              <span style=\"font-size: 14px;color:#404040;\"><b>{{offer.store_name}} </b></span>\n\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-9 ion-text-left mt-2\">\n              <img id=\"product_img\" src=\"{{offer.product_image}}\" alt=\"\">\n            </div>\n\n            <div class=\"col-3 mt-2\">\n              <!-- <div>\n                <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n              </div> -->\n              <div>\n                <ion-badge style=\"margin-left: -5px;\" id=\"kg\">{{offer.offer}}{{offer.product_unit}}</ion-badge>\n              </div>\n            </div>\n\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left mt-1\">\n              <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{offer.product}}</b></p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n\n              <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                  Rs.{{offer.total_cost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                  <b>{{offer.offer_price}}.00</b></span></p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left\">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                {{offer.other_offer}}\n              </p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                {{offer.offer_time}}\n              </p>\n            </div>\n            <!-- <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n              <div class=\"dot\">\n                <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                  class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                  <path\n                    d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                </svg>\n              </div>\n            </div> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n  <!-- <button (click)=\"testSlide()\">click</button> -->\n\n  <!------------- Expiry No data found Gif ------------------->\n  <div *ngIf=\"ExpirynoDataFound\">\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\n  </div>\n\n\n  <!-- <button (click)=\"testSlide()\">Slide</button> -->\n</ion-content>\n\n<!----- Single product details card Pop-Up ----->\n<div @fadein *ngIf=\"popUpisvisible\" class=\"container\">\n  <div class=\"card pop-up-card \">\n    <div class=\"container\">\n      <div style=\"font-size: 13px;\" class=\"row\">\n        <div class=\"col-10\">\n          <h5>Report Seller</h5>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon (click)=\"hidepopup()\" style=\"margin:15px;cursor:pointer;color:#eb154b\" name=\"close\"></ion-icon>\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"spam()\" [(ngModel)]=\"spamMsg\"> Spam Msg\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"storeNA()\" [(ngModel)]=\"storeNa\"> store NA\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"OfferDenaid()\" [(ngModel)]=\"offerDenaid\"> Offer Denaid\n        </div>\n        <div class=\"col-12 ion-text-center mt-3\">\n          <p>Others:</p>\n        </div>\n        <div class=\"col-12 ion-text-center\">\n          <input [(ngModel)]=\"other\" type=\"text\">\n          <button (click)=\"reportSeller()\" class=\"btn btn-sm submit-btn\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map