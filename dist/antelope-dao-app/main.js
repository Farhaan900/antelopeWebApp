(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\web development\Angular Js Projects\antelopeWebApp\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, consts: [["id", "about", 1, "about-component"], ["about", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: [".about-component[_ngcontent-%COMP%]{\r\n    \r\n    margin: 8rem 3rem 0 3rem;\r\n    background: url();\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWNvbXBvbmVudHtcclxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXHJcbiAgICBtYXJnaW46IDhyZW0gM3JlbSAwIDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoKTtcclxufVxyXG4iXX0= */"], data: { animation: [
            // the fade-in/fade-out animation.
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('simpleFadeAnimation', [
                // the "in" style determines the "resting" state of the element when it is visible.
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('* => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                // fade in when created. this could also be written as transition('void => *')
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
                ]),
                // fade out when destroyed. this could also be written as transition('void => *')
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
            ])
        ] } });


/***/ }),

/***/ "8J0c":
/*!******************************************************!*\
  !*** ./src/app/ruler-token/ruler-token.component.ts ***!
  \******************************************************/
/*! exports provided: RulerTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulerTokenComponent", function() { return RulerTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RulerTokenComponent {
    constructor() { }
    ngOnInit() {
    }
}
RulerTokenComponent.ɵfac = function RulerTokenComponent_Factory(t) { return new (t || RulerTokenComponent)(); };
RulerTokenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulerTokenComponent, selectors: [["app-ruler-token"]], decls: 30, vars: 0, consts: [["id", "ruler-token", 1, "ruler-token-container"], ["rulerToken", ""], [1, "title"], [1, "cards-container"], [1, "card", "card-1"], [1, "image-container"], ["src", "assets/images/trade-origin.png", "alt", "", 1, "card-icon"], [1, "card-title"], [1, "card-body"], [1, "card", "card-2"], ["src", "assets/images/liquidity.svg", "alt", "", 1, "card-icon"], [1, "card", "card-3"], ["src", "assets/images/service.svg", "alt", "", 1, "card-icon"]], template: function RulerTokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Antelope Ecosystem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trade Originators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Small, medium, and large enterprises can leverage the Antelope protocol to raise capital for trades, borrow collateral for loans, issue tokenized invoices, and access a diverse range of logistic services. The platform connects enterprises with suppliers, financiers, and service providers, boosting their potential for growth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Liquidity Providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Yield Farmers can participate in decentralized trade financing to generate stable and short-term returns by investing in assets with tangible value in the real world. Additionally, they gain access to derivatives and tokenized risk exposures, specially designed to suit the trade and logistics sector. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Service Institutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Institutional entities and crypto-based companies can offer financial and non-financial services on Antelope, such as insurance and investment opportunities, entitling them to promising revenue shares through transaction fees and rewards. Service Institutions are essential to the ecosystem, forwarding its vision and broadening its scope. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ruler-token-container[_ngcontent-%COMP%] {\r\n    margin: 8rem 3rem 8rem 3rem;\r\n\r\n}\r\n  \r\n.title[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 48px;\r\n    line-height: 58px;\r\n    \r\n\r\n    text-align: center;\r\n\r\n    color: #3E4751;\r\n\r\n}\r\n  \r\n.cards-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 5rem 0 0 0;\r\n}\r\n  \r\n.card[_ngcontent-%COMP%]{\r\n    width: 24%;\r\n    \r\n    background: #FBFBFD;\r\n    box-shadow: 10px 10px 20px rgba(62, 71, 81, 0.3);\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2.5rem 1.5rem 2.5rem 1.5rem;\r\n}\r\n  \r\n.card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{\r\n    height: 117px;\r\n}\r\n  \r\n.card.card-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 114px;\r\n    height: 117px;\r\n}\r\n  \r\n.card.card-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 114px;\r\n    height: 86px;\r\n}\r\n  \r\n.card.card-3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 83px;\r\n    height: 85px;\r\n}\r\n  \r\n.card-title[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 36px;\r\n    line-height: 145%;\r\n    \r\n\r\n    text-align: center;\r\n    letter-spacing: 0.015em;\r\n\r\n    color: #FE815F;\r\n    padding: 0 0 1.5rem 0;\r\n}\r\n  \r\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    line-height: 145%;\r\n    \r\n\r\n    text-align: justify;\r\n    padding: 0 1rem 0 1rem;    \r\n    color: #3E4751;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVyLXRva2VuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUE0Qjs7SUFFNUIsa0JBQWtCOztJQUVsQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZOztJQUVaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQiIsImZpbGUiOiJydWxlci10b2tlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJ1bGVyLXRva2VuLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhyZW0gM3JlbSA4cmVtIDNyZW07XHJcblxyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgY29sb3I6ICMzRTQ3NTE7XHJcblxyXG59XHJcblxyXG4uY2FyZHMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDVyZW0gMCAwIDA7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIC8qIGhlaWdodDogNTA2cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZEO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSg2MiwgNzEsIDgxLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSAxLjVyZW0gMi41cmVtIDEuNXJlbTtcclxufVxyXG4uY2FyZCAuaW1hZ2UtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMTdweDtcclxufVxyXG4uY2FyZC5jYXJkLTIgaW1ne1xyXG4gICAgd2lkdGg6IDExNHB4O1xyXG4gICAgaGVpZ2h0OiAxMTdweDtcclxufVxyXG4uY2FyZC5jYXJkLTEgaW1ne1xyXG4gICAgd2lkdGg6IDExNHB4O1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG59XHJcbi5jYXJkLmNhcmQtMyBpbWd7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIGhlaWdodDogODVweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNDUlO1xyXG4gICAgLyogb3IgNTJweCAqL1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xyXG5cclxuICAgIGNvbG9yOiAjRkU4MTVGO1xyXG4gICAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xyXG59XHJcbi5jYXJkLWJvZHkgcHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0NSU7XHJcbiAgICAvKiBvciAyNnB4ICovXHJcblxyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07ICAgIFxyXG4gICAgY29sb3I6ICMzRTQ3NTE7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");



class HomeComponent {
    constructor() {
        this.waitlistEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
    }
    ngOnInit() {
    }
    registerForWaitlist(formData) {
        console.log(formData.value);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [[1, "home-container"], [1, "center"], [1, "head-1", "header-item"], [1, "head-2", "header-item"], [1, "description", "header-item"], [1, "waitlist"], ["type", "email", "id", "email", "placeholder", "satoshi@btc.com", "autocomplete", "off"], [1, "btn", "btn-light"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "A Decentralized Solution for");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "End-to-End Supply Chain Management & Trade Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Streamline the purchase-to-pay process with integrated trade financing, real-time shipment tracking, secure document sharing, and seamless buyer-seller interactions. Generate stable DeFi returns with real-world assets, tokenized risks, and crypto-based derivatives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Join Our Waitlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["@font-face {\r\n    font-family: Lucida-Grande;\r\n    src: url('LucidaGrande.ttf');\r\n}\r\n.home-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: calc(100vh - 120px);\r\n    margin: 0 3rem 0 3rem;\r\n}\r\n.home-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0 4rem;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    flex-direction: column;\r\n}\r\n.home-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 40px;\r\n    line-height: 58px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n.home-container[_ngcontent-%COMP%]   .waitlist[_ngcontent-%COMP%]{\r\n    margin : 4rem 0 0 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.home-container[_ngcontent-%COMP%]   .waitlist[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border : none;\r\n    outline: none;\r\n    background: #FDFCFB;\r\n    box-shadow: -5px -5px 20px 3px rgba(255, 255, 255, 0.8), 7px 6px 20px rgba(62, 71, 81, 0.13), inset 6px 7px 22px rgba(0, 0, 0, 0.03);\r\n    border-radius: 20px;\r\n    padding: .25rem 7rem;\r\n    font-style: normal;\r\n    font-size: 1rem;\r\n    line-height: 145%;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0.015em;\r\n\r\n    \r\n\r\n    margin-right: 1.2rem;\r\n\r\n}\r\n.home-container[_ngcontent-%COMP%]   .waitlist[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\r\n    color: rgba(62, 71, 81, 0.3);\r\n}\r\n.home-container[_ngcontent-%COMP%]   .waitlist[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n}\r\n.home-container[_ngcontent-%COMP%]   .waitlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: #F88340;\r\n    border-radius: 1.2rem;\r\n    padding: 0.3rem 1.5rem;\r\n    font-size: 0.8rem;\r\n    line-height: 145%;\r\n    \r\n\r\n    text-align: center;\r\n    letter-spacing: 0.015em;\r\n\r\n    color: #FFFFFF;\r\n    transition: 0.5s;\r\n\r\n}\r\n.home-container[_ngcontent-%COMP%]   .waitlist[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{\r\n    transform: scale(0.8);\r\n}\r\n.home-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .head-1[_ngcontent-%COMP%]{\r\n    color: #3E4751;\r\n}\r\n.home-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .head-2[_ngcontent-%COMP%]{\r\n    color: #FE815F;\r\n    margin-bottom: 1.25rem;\r\n}\r\n.home-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{\r\n    font-family: Lucida-Grande;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    \r\n\r\n    text-align: center;\r\n    letter-spacing: 0.01em;\r\n\r\n    \r\n\r\n    color: #263238;\r\n\r\n    opacity: 0.8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiw0QkFBNkM7QUFDakQ7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvSUFBb0k7SUFDcEksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkIsa0NBQWtDOztJQUVsQyxvQkFBb0I7O0FBRXhCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsdUJBQXVCOztJQUV2QixjQUFjO0lBQ2QsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLHNCQUFzQjs7SUFFdEIsbUJBQW1COztJQUVuQixjQUFjOztJQUVkLFlBQVk7QUFDaEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTHVjaWRhLUdyYW5kZTtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9MdWNpZGFHcmFuZGUudHRmKTtcclxufVxyXG4uaG9tZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcclxuICAgIG1hcmdpbjogMCAzcmVtIDAgM3JlbTtcclxufVxyXG4uaG9tZS1jb250YWluZXIgLmNlbnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uaG9tZS1jb250YWluZXIgLmNlbnRlciBoMXtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNThweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaG9tZS1jb250YWluZXIgLndhaXRsaXN0e1xyXG4gICAgbWFyZ2luIDogNHJlbSAwIDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIG1hcmdpbjogMXJlbTsgKi9cclxufVxyXG4uaG9tZS1jb250YWluZXIgLndhaXRsaXN0IGlucHV0e1xyXG4gICAgYm9yZGVyIDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkRGQ0ZCO1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgN3B4IDZweCAyMHB4IHJnYmEoNjIsIDcxLCA4MSwgMC4xMyksIGluc2V0IDZweCA3cHggMjJweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSA3cmVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0NSU7XHJcbiAgICAvKiBvciAyM3B4ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcclxuXHJcbiAgICAvKiBjb2xvcjogcmdiYSg2MiwgNzEsIDgxLCAwLjMpOyAqL1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG5cclxufVxyXG4uaG9tZS1jb250YWluZXIgLndhaXRsaXN0IGlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiByZ2JhKDYyLCA3MSwgODEsIDAuMyk7XHJcbn1cclxuLmhvbWUtY29udGFpbmVyIC53YWl0bGlzdCBpbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaG9tZS1jb250YWluZXIgLndhaXRsaXN0IGJ1dHRvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjg4MzQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0NSU7XHJcbiAgICAvKiBvciAyM3B4ICovXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1ZW07XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxufVxyXG4uaG9tZS1jb250YWluZXIgLndhaXRsaXN0IGJ1dHRvbjphY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciAuY2VudGVyIC5oZWFkLTF7XHJcbiAgICBjb2xvcjogIzNFNDc1MTtcclxufVxyXG4uaG9tZS1jb250YWluZXIgLmNlbnRlciAuaGVhZC0ye1xyXG4gICAgY29sb3I6ICNGRTgxNUY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG59XHJcbi5ob21lLWNvbnRhaW5lciAuY2VudGVyIC5kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEtR3JhbmRlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgLyogb3IgMTUwJSAqL1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblxyXG4gICAgLyog4peHIExpZ2h0IC8gRGFyayAqL1xyXG5cclxuICAgIGNvbG9yOiAjMjYzMjM4O1xyXG5cclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "SkAG":
/*!******************************************************!*\
  !*** ./src/app/engineering/engineering.component.ts ***!
  \******************************************************/
/*! exports provided: EngineeringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineeringComponent", function() { return EngineeringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EngineeringComponent {
    constructor() { }
    ngOnInit() {
    }
}
EngineeringComponent.ɵfac = function EngineeringComponent_Factory(t) { return new (t || EngineeringComponent)(); };
EngineeringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineeringComponent, selectors: [["app-engineering"]], decls: 32, vars: 0, consts: [["id", "engineering", 1, "engineering-component-container"], [1, "engg-with-container"], [1, "title"], ["animateOnScroll", "", "animationName", "animated fadeInRightBig", 1, "images-container"], ["href", "https://centrifuge.io", "target", "_blank"], [1, "image-frame"], ["src", "assets/images/Centrifuge.png"], ["href", "https://aragon.org", "target", "_blank"], ["src", "assets/images/Aragon.png"], ["href", "https://chain.link", "target", "_blank"], ["src", "assets/images/Chainlink.png"], ["href", "https://www.openlaw.io", "target", "_blank"], ["src", "assets/images/Openlaw.png"], [1, "partners-container"], ["animateOnScroll", "", "animationName", "animated fadeInLeftBig", 1, "images-container"], ["href", "https://cargox.io", "target", "_blank"], ["src", "assets/images/CargoX logo.png"], ["href", "https://arvaloo.com", "target", "_blank"], ["src", "assets/images/arvaloo_logo.png"], ["href", "https://visesaenergy.com", "target", "_blank"], ["src", "assets/images/energy_logo.png"]], template: function EngineeringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ENGINEERED WITH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " OUR PARTNERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".engineering-component-container[_ngcontent-%COMP%]{\r\n    margin: 8rem 3rem 8rem 3rem;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 48px;\r\n    line-height: 58px;\r\n    \r\n\r\n    text-align: center;\r\n\r\n    color: #3E4751;\r\n\r\n    margin: 0 0 4rem 0;\r\n}\r\n\r\n.images-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 0 0 6rem 0;\r\n}\r\n\r\n.image-frame[_ngcontent-%COMP%] {\r\n    background: #FBFBFD;\r\n    box-shadow: -10px -10px 20px #FFFFFF, 10px 10px 20px rgba(62, 71, 81, 0.3);\r\n    border-radius: 10px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 300px;\r\n    height : 120px;\r\n    display: flex;\r\n}\r\n\r\n.image-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 231px;\r\n    height: 70ox;\r\n}\r\n\r\n.partners-container[_ngcontent-%COMP%], .images-container[_ngcontent-%COMP%]{\r\n    justify-content: space-around\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZWVyaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCOztJQUU1QixrQkFBa0I7O0lBRWxCLGNBQWM7O0lBRWQsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDBFQUEwRTtJQUMxRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoiZW5naW5lZXJpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmdpbmVlcmluZy1jb21wb25lbnQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA4cmVtIDNyZW0gOHJlbSAzcmVtO1xyXG59XHJcblxyXG4udGl0bGUgaDF7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgY29sb3I6ICMzRTQ3NTE7XHJcblxyXG4gICAgbWFyZ2luOiAwIDAgNHJlbSAwO1xyXG59XHJcbi5pbWFnZXMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCA2cmVtIDA7XHJcbn1cclxuLmltYWdlLWZyYW1lIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkQ7XHJcbiAgICBib3gtc2hhZG93OiAtMTBweCAtMTBweCAyMHB4ICNGRkZGRkYsIDEwcHggMTBweCAyMHB4IHJnYmEoNjIsIDcxLCA4MSwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQgOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltYWdlLWZyYW1lIGltZ3tcclxuICAgIHdpZHRoOiAyMzFweDtcclxuICAgIGhlaWdodDogNzBveDtcclxufVxyXG5cclxuLnBhcnRuZXJzLWNvbnRhaW5lciAsIC5pbWFnZXMtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var skrollr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skrollr */ "W70P");
/* harmony import */ var skrollr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skrollr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _ruler_token_ruler_token_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ruler-token/ruler-token.component */ "8J0c");
/* harmony import */ var _engineering_engineering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engineering/engineering.component */ "SkAG");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./community/community.component */ "nacR");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");









class AppComponent {
    constructor() {
        this.title = 'antelope-dao-app';
    }
    ngOnInit() {
        var s = skrollr__WEBPACK_IMPORTED_MODULE_0__["init"]();
        if (s.isMobile()) {
            s.destroy();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-ruler-token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-community");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _ruler_token_ruler_token_component__WEBPACK_IMPORTED_MODULE_4__["RulerTokenComponent"], _engineering_engineering_component__WEBPACK_IMPORTED_MODULE_5__["EngineeringComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], _community_community_component__WEBPACK_IMPORTED_MODULE_7__["CommunityComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto', sans-serif;\r\n    overflow: hidden;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: auto;\r\n    max-width: 1440px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "TKFu":
/*!******************************************************************!*\
  !*** ./src/app/transactions-test/transactions-test.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionsTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsTestComponent", function() { return TransactionsTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TransactionsTestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransactionsTestComponent.ɵfac = function TransactionsTestComponent_Factory(t) { return new (t || TransactionsTestComponent)(); };
TransactionsTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsTestComponent, selectors: [["app-transactions-test"]], decls: 65, vars: 0, consts: [[1, "container"], [1, "jumbotron"], [1, "display-3"], [1, "lead"], [1, "row", "p-5"], [1, "col-12", "col-md-6", "col-lg-4"], ["animateOnScroll", "", "animationName", "animated fadeInDown", 1, "card"], [1, "card-block"], [1, "card-title"], [1, "card-text"], ["animateOnScroll", "", "animationName", "animated fadeInDown", 1, "card", "animated-delay-1"], ["animateOnScroll", "", "animationName", "animated fadeInDown", 1, "card", "animated-delay-2"], ["animateOnScroll", "", "animationName", "animated fadeInLeft", 1, "col"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary"], ["animateOnScroll", "", "animationName", "animated fadeInRight", 1, "col"], [1, "col"], [1, "row"], [1, "col-md-12", "col-lg-6", "p-3"], ["src", "../assets/sunset.jpg", "animateOnScroll", "", "animationName", "animated zoomInDown", 1, "img-fluid", "rounded", "float-left"], ["src", "../assets/tiger.jpg", "animateOnScroll", "", "animationName", "animated zoomInDown", 1, "img-fluid", "rounded", "float-left"], ["src", "../assets/mountains.jpg", "animateOnScroll", "", "animationName", "animated zoomInDown", 1, "img-fluid", "rounded", "float-left"]], template: function TransactionsTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ng2-animate-on-scroll example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scroll down for a few examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cards that ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "... fade in at ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "... different times.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Divs containing other elements like buttons or forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit feugiat, venenatis turpis id, pharetra felis. Cras mollis vitae orci eget volutpat. Proin dapibus massa vitae lacus maximus, vitae cursus diam sodales. Curabitur laoreet nunc sit amet est sagittis rutrum. Nulla at ante sed elit scelerisque vestibulum. Vivamus commodo mauris ante, quis varius ante dictum vel. Mauris in est volutpat, auctor diam ut, pretium est. Suspendisse ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sections of text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit feugiat, venenatis turpis id, pharetra felis. Cras mollis vitae orci eget volutpat. Proin dapibus massa vitae lacus maximus, vitae cursus diam sodales. Curabitur laoreet nunc sit amet est sagittis rutrum. Nulla at ante sed elit scelerisque vestibulum. Vivamus commodo mauris ante, quis varius ante dictum vel. Mauris in est volutpat, auctor diam ut, pretium est. Suspendisse ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMtdGVzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _transactions_test_transactions_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transactions-test/transactions-test.component */ "TKFu");
/* harmony import */ var _ruler_token_ruler_token_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ruler-token/ruler-token.component */ "8J0c");
/* harmony import */ var _engineering_engineering_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engineering/engineering.component */ "SkAG");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./community/community.component */ "nacR");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./social-links/social-links.component */ "ZhMB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
                { path: 'ruler-token', component: _ruler_token_ruler_token_component__WEBPACK_IMPORTED_MODULE_12__["RulerTokenComponent"] },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _transactions_test_transactions_test_component__WEBPACK_IMPORTED_MODULE_11__["TransactionsTestComponent"],
        _ruler_token_ruler_token_component__WEBPACK_IMPORTED_MODULE_12__["RulerTokenComponent"],
        _engineering_engineering_component__WEBPACK_IMPORTED_MODULE_13__["EngineeringComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"],
        _community_community_component__WEBPACK_IMPORTED_MODULE_15__["CommunityComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_17__["SocialLinksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();


/***/ }),

/***/ "ZhMB":
/*!********************************************************!*\
  !*** ./src/app/social-links/social-links.component.ts ***!
  \********************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");


function SocialLinksComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialLinksComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Operations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialLinksComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Integration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SocialLinksComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.spacing);
    }
}
SocialLinksComponent.ɵfac = function SocialLinksComponent_Factory(t) { return new (t || SocialLinksComponent)(); };
SocialLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialLinksComponent, selectors: [["app-social-links"]], inputs: { spacing: "spacing" }, decls: 31, vars: 2, consts: [[1, "images-container", "legacy-problems"], [1, "title"], [1, "section-content"], [1, "tabs-container"], ["mat-tab-label", "", "class", "tab-title", 3, "color", "backgroundColor"], [1, "tab-content", "tab-1"], [1, "desc"], [1, "image"], ["src", "assets/images/SVG/access.png", "alt", ""], ["mat-tab-label", ""], [1, "tab-content", "tab-2"], ["src", "assets/images/SVG/ship.svg", "alt", ""], ["src", "assets/images/integration.png", "alt", ""], [1, "tab-title"]], template: function SocialLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Legacy Problems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SocialLinksComponent_ng_template_8_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Traditional financial institutions raise entry barriers for SMEs and limit their access to trade capital with complicated onboarding, exclusive regulations, and exorbitant costs. DeFi alternatives are challenging for traders and investors due to information constraints, steep learning curves, and the lack of user-friendly integrated solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SocialLinksComponent_ng_template_16_Template, 3, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Enterprises face severe accountability crises while conducting domestic and international trades, due to inadequate solutions for shipment tracking and supply chain monitoring. The consequent lack of transparency results in performance bottlenecks, manipulation risks, inefficient resource allocation, quality compromises, revenue loss, and non-optimal ROIs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SocialLinksComponent_ng_template_24_Template, 3, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " The fragmented trade and supply chain ecosystem compels stakeholders to use different solutions for different needs and complicates business processes with diverse reference frameworks, silos, and low interoperability. The absence of frictionless integrations between conventional and crypto-based finance is an additional hindrance to cross-border trading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("backgroundColor", ctx.bgColor);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabLabel"]], styles: [".legacy-problems[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    margin: 3rem 8rem 3rem 8rem;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    margin: 0 0 3.5rem 0;\r\n}\r\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 48px;\r\n    line-height: 58px;\r\n    \r\n    color: #3E4751;\r\n}\r\n.section-content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.tabs-container[_ngcontent-%COMP%]{\r\n    width: 1157px;\r\n    \r\n    background: #FBFBFD;\r\n    box-shadow: -10px -10px 20px #FFFFFF, 10px 10px 20px rgba(62, 71, 81, 0.3);\r\n    border-radius: 20px;    \r\n    padding: 5rem 4.3rem; \r\n}\r\n.tabs-container[_ngcontent-%COMP%]   .tab-title[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 36px;\r\n    line-height: 43px;\r\n\r\n    color: #3E4751;\r\n}\r\n.tab-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.tab-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n}\r\n.tab-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    line-height: 35px;\r\n    letter-spacing: 0.015em;\r\n\r\n    color: #3E4751;\r\n}\r\n.tab-content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n.tab-content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.tab-group[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{\r\n    color : #f00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBFQUEwRTtJQUMxRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7O0lBRXZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNvY2lhbC1saW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sZWdhY3ktcHJvYmxlbXMge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogM3JlbSA4cmVtIDNyZW0gOHJlbTtcclxufVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luOiAwIDAgMy41cmVtIDA7XHJcbn1cclxuXHJcbi50aXRsZSBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNThweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBjb2xvcjogIzNFNDc1MTtcclxufVxyXG4uc2VjdGlvbi1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRhYnMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDExNTdweDtcclxuICAgIC8qIGhlaWdodDogNTA2cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZEO1xyXG4gICAgYm94LXNoYWRvdzogLTEwcHggLTEwcHggMjBweCAjRkZGRkZGLCAxMHB4IDEwcHggMjBweCByZ2JhKDYyLCA3MSwgODEsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICBcclxuICAgIHBhZGRpbmc6IDVyZW0gNC4zcmVtOyBcclxufVxyXG4udGFicy1jb250YWluZXIgLnRhYi10aXRsZXtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDNweDtcclxuXHJcbiAgICBjb2xvcjogIzNFNDc1MTtcclxufVxyXG4udGFiLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYi1jb250ZW50IC5kZXNje1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4udGFiLWNvbnRlbnQgLmRlc2MgcHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcclxuXHJcbiAgICBjb2xvcjogIzNFNDc1MTtcclxufVxyXG4udGFiLWNvbnRlbnQgLmltYWdle1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnRhYi1jb250ZW50IC5pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYi1ncm91cCAudGFiIC5sYWJlbHtcclxuICAgIGNvbG9yIDogI2YwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 0, consts: [[1, "header"], [1, "logo"], ["src", "assets/images/SVG/logo.png"], [1, "navbar-container"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".header[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n    padding: 2rem 2rem 0 2rem;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    width: 207px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .header[_ngcontent-%COMP%] {\r\n        height: 120px;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n    .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        height: 60px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICAvKiBoZWlnaHQ6IDE4MHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAwIDJyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG4gICAgLyogaGVpZ2h0OiA1OHB4OyAqL1xyXG4gICAgd2lkdGg6IDIwN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5sb2dvIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 44, vars: 0, consts: [[1, "footer-component-wrapper"], [1, "divider"], [1, "body"], [1, "site-map"], ["href", "javascript:void(0)"], [1, "social-icons"], [1, "title"], [1, "icons"], ["src", "assets/images/SVG/facebook.svg", "alt", "facebook"], ["src", "assets/images/SVG/instagram.svg", "alt", "instagram"], ["src", "assets/images/SVG/twitter.svg", "alt", "twitter"], ["src", "assets/images/SVG/youtube.svg", "alt", "youtube"], ["src", "assets/images/SVG/reddit 2.png", "alt", "reddit"], [1, "community"], ["src", "assets/images/SVG/discord.svg", "alt", "discord"], ["src", "assets/images/SVG/telegram 3d 4.png", "alt", "telegram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tokenomics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Learn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Community ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Foundation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Follow us on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Join our Community ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-component-wrapper[_ngcontent-%COMP%]{\r\n    margin: 8rem 3rem 2rem 3rem;\r\n}\r\n\r\n.divider[_ngcontent-%COMP%]{\r\n    background: #FBFBFD;\r\n    height: 1px;\r\n    \r\n    box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.45), 4px 4px 8px rgba(0, 0, 0, 0.25);\r\n    transform: rotate(0.04deg);\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n\r\n.site-map[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.site-map[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    line-height: 180%;\r\n    \r\n\r\n    text-align: justify;\r\n    letter-spacing: 0.015em;\r\n    color: #3E4751;\r\n    padding: 0.3rem 1.2rem 0.3rem 1.2rem;\r\n}\r\n\r\n.site-map[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: #FBFBFD;\r\n    box-shadow: inset -10px -10px 20px #FFFFFF, inset 10px 10px 20px rgba(62, 71, 81, 0.1);\r\n    border-radius: 40px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    line-height: 180%;\r\n    \r\n\r\n    text-align: justify;\r\n    letter-spacing: 0.015em;\r\n\r\n    color: #3E4751;\r\n    padding-left: 1rem;\r\n}\r\n\r\n\r\n\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background: #FBFBFD;\r\n    box-shadow: inset -10px -10px 20px #FFFFFF, inset 10px 10px 20px rgba(62, 71, 81, 0.1);\r\n    border-radius: 50%;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 2rem;\r\n    height: 2rem;\r\n    \r\n    margin-right: 1rem;\r\n}\r\n\r\n.community[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 2.5rem;\r\n    margin-right: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isb0ZBQW9GO0lBQ3BGLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNGQUFzRjtJQUN0RixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTs7SUFFWixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUNBOztHQUVHOztBQUNIO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0ZBQXNGO0lBQ3RGLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbXBvbmVudC13cmFwcGVye1xyXG4gICAgbWFyZ2luOiA4cmVtIDNyZW0gMnJlbSAzcmVtO1xyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkQ7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNGQkZCRkQ7ICovXHJcbiAgICBib3gtc2hhZG93OiAtNHB4IC00cHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjA0ZGVnKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uc2l0ZS1tYXAgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2l0ZS1tYXAgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4MCU7XHJcbiAgICAvKiBvciA0M3B4ICovXHJcblxyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xyXG4gICAgY29sb3I6ICMzRTQ3NTE7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS4ycmVtIDAuM3JlbSAxLjJyZW07XHJcbn1cclxuLnNpdGUtbWFwIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZEO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMjBweCAjRkZGRkZGLCBpbnNldCAxMHB4IDEwcHggMjBweCByZ2JhKDYyLCA3MSwgODEsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbi50aXRsZSBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTgwJTtcclxuICAgIC8qIG9yIDQzcHggKi9cclxuXHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1ZW07XHJcblxyXG4gICAgY29sb3I6ICMzRTQ3NTE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuLyogLmljb25ze1xyXG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG59ICovXHJcbi5pY29ucyBpbWd7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5pY29ucyBpbWc6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZEO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMjBweCAjRkZGRkZGLCBpbnNldCAxMHB4IDEwcHggMjBweCByZ2JhKDYyLCA3MSwgODEsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNvY2lhbC1pY29ucyBpbWd7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5jb21tdW5pdHkgaW1ne1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToElement(element) {
        console.log("scrolling to - ");
        let el = document.getElementById(element);
        console.log(el);
        el === null || el === void 0 ? void 0 : el.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 0, consts: [["id", "myTopnav", 1, "topnav"], ["routerLink", "/first-component", "routerLinkActive", "active", 1, "active"], ["routerLinkActive", "active", 3, "click"], ["href", "javascript:void(0);", "onclick", "myFunction()", 1, "language"], ["src", "assets/images/SVG/language-icon.png"], ["href", "javascript:void(0);", "onclick", "myFunction()", 1, "burger"], ["src", "assets/images/SVG/burger-icon.svg"], ["href", "javascript:void(0);", "onclick", "myFunction()", 1, "icon"], [1, "fa", "fa-bars"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_3_listener() { return ctx.scrollToElement("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() { return ctx.scrollToElement("community"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".topnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #3E4751;\r\n    outline: none;\r\n    font-weight: 400;\r\n    float: left;\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    margin-right: 30px;\r\n    padding: 0.3rem 1.2rem 0.3rem 1.2rem;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #F88340;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    color: #F88340;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 17px;\r\n    height: 17px;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 36px;\r\n    height: 13px;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 920px) {\r\n    .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\r\n        display: none;\r\n    }\r\n    .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\r\n        float: right;\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 920px) {\r\n    .topnav.responsive[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n    .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n    }\r\n    .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        float: none;\r\n        display: block;\r\n        text-align: left;\r\n    }\r\n    .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\r\n        background-color: rgb(239 235 227);\r\n    }\r\n    .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtJQUNWO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSTt1QkFDZTtJQUNuQjtBQUNKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICAgIGNvbG9yOiAjM0U0NzUxO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDEuMnJlbSAwLjNyZW0gMS4ycmVtO1xyXG59XHJcblxyXG4udG9wbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGODgzNDA7XHJcbn1cclxuLnRvcG5hdiBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjRjg4MzQwO1xyXG59XHJcbi50b3BuYXYgLmxhbmd1YWdlIGltZ3tcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG59XHJcbi50b3BuYXYgLmxhbmd1YWdlIGltZzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4udG9wbmF2IC5idXJnZXIgaW1ne1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuLnRvcG5hdiAuYnVyZ2VyIGltZzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4udG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgICAudG9wbmF2IGE6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2IGEuaWNvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSBhOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDIzNSAyMjcpO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIGE6aG92ZXIge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZWIyN2Q7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TeamComponent {
    constructor() {
        this.teamMembers = new Array();
        this.carouselWidth = 900;
        this.teamMembers = [
            {
                imageName: "ravi1.png",
                name: "Ravi",
                position: "CEO, Founder"
            },
            {
                imageName: "dheeraj.png",
                name: "Dheeraj Kumar",
                position: "CBDO, Co-Founder"
            },
            {
                imageName: "chakradhar.png",
                name: "Chakradhar",
                position: "COO, Co-Founder"
            },
            {
                imageName: "edward.png",
                name: "Edward Ryall",
                position: "CFO / Mentor"
            },
            {
                imageName: "ravi1.png",
                name: "Ravi",
                position: "CEO, Founder"
            },
            {
                imageName: "ravi1.png",
                name: "Ravi",
                position: "CEO, Founder"
            }
        ];
    }
    ngOnInit() {
        this.resizecarousel();
    }
    onResize(event) {
        console.log(window.innerWidth);
        this.resizecarousel();
    }
    resizecarousel() {
        if (window.innerWidth < 500) {
            this.carouselWidth = 200;
        }
        else if (window.innerWidth < 700) {
            this.carouselWidth = 470;
        }
        else if (window.innerWidth < 1000) {
            this.carouselWidth = 670;
        }
        else if (window.innerWidth >= 1000) {
            this.carouselWidth = 900;
        }
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], hostBindings: function TeamComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function TeamComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 67, vars: 12, consts: [["id", "team", 1, "team-component-container"], [1, "guild-container"], [1, "title"], [1, "team-container"], [1, "team-card"], [1, "img-outer-circle"], [1, "img-inner-circle"], [3, "src"], [1, "team-name"], [1, "team-position"], [1, "advisors-container"], [1, "advisors-box"], [1, "advisor"], ["src", "assets/images/laurent.png"], [1, "advisor-details"], [1, "divider"], ["src", "assets/images/rajsekhar1.png"], [1, "image-container"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " THE GUILD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ADVISORS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Laurent Fedi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Senior Legal Advisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "International Maritime Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Raj Sekhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sustainable Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Supply Chain Advisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.teamMembers[0].imageName, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[0].position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.teamMembers[1].imageName, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[1].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[1].position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.teamMembers[2].imageName, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[2].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[2].position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.teamMembers[3].imageName, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[3].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teamMembers[3].position);
    } }, styles: [".team-component-container[_ngcontent-%COMP%]{\r\n    margin: 8rem 3rem 8rem 3rem;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 48px;\r\n    line-height: 58px;\r\n    \r\n\r\n    text-align: center;\r\n\r\n    color: #3E4751;\r\n    margin: 0 0 5rem 0;\r\n}\r\n.team-container[_ngcontent-%COMP%]{\r\n    width: 1157px;\r\n    max-height: 506px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background: #FBFBFD;\r\n    box-shadow: 10px 10px 20px rgba(62, 71, 81, 0.3);\r\n    padding: 5rem 0 8rem 0;\r\n    \r\n    margin: 0 0 8rem 0;\r\n}\r\n.img-outer-circle[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 187px;\r\n    width: 187px;\r\n    border-radius: 50%;\r\n    background: #FBFBFD;\r\n    margin: 0 0 2.5rem 0;\r\n    box-shadow: -11.6015px -11.6015px 23.203px #FFFFFF, 11.6015px 11.6015px 23.203px #F3F3F3, inset -9.28119px -9.28119px 18.5624px #FFFFFF, inset 9.28119px 9.28119px 18.5624px #E0E1E3;\r\n}\r\n.img-inner-circle[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    height: 155px;\r\n    width: 155px;\r\n    background: #FBFBFD;\r\n    box-shadow: -8.90253px -8.90253px 17.8051px #FFFFFF, 8.90253px 8.90253px 17.8051px #DADADA;\r\n}\r\n.team-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.team-name[_ngcontent-%COMP%], .team-position[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    \r\n    line-height: 145%;\r\n    \r\n\r\n    letter-spacing: 0.015em;\r\n\r\n}\r\n.team-name[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: #FE815F;\r\n}\r\n.team-position[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    color: #3E4751;\r\n}\r\n.advisors-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    margin: 0 0 8rem 0;\r\n}\r\n.advisors-box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    max-width: 1157px;\r\n    height: 408px;\r\n    background: #FBFBFD;\r\n    box-shadow:10px 10px 20px rgba(62, 71, 81, 0.3);\r\n    padding: 0 6.5rem 0 6.5rem;\r\n}\r\n.advisor[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.advisor-details[_ngcontent-%COMP%]{\r\n    margin-left: 0.5rem;\r\n}\r\n.advisor[_ngcontent-%COMP%]   .advisor-details[_ngcontent-%COMP%]   .team-name[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n.advisor[_ngcontent-%COMP%]   .advisor-details[_ngcontent-%COMP%]   .team-position[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    font-size: 20px;\r\n}\r\n.advisors-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.divider[_ngcontent-%COMP%]{\r\n    width: 4px;\r\n    height: 365px;\r\n    background-color:  #F88340;\r\n    box-shadow: inset -10px -10px 20px #FFFFFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCOztJQUU1QixrQkFBa0I7O0lBRWxCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9MQUFvTDtBQUN4TDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBGQUEwRjtBQUM5RjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCLGlCQUFpQjtJQUNqQixZQUFZOztJQUVaLHVCQUF1Qjs7QUFFM0I7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDBDQUEwQztBQUM5QyIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1jb21wb25lbnQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA4cmVtIDNyZW0gOHJlbSAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50aXRsZSBoMXtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU4cHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogIzNFNDc1MTtcclxuICAgIG1hcmdpbjogMCAwIDVyZW0gMDtcclxufVxyXG4udGVhbS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTE1N3B4O1xyXG4gICAgbWF4LWhlaWdodDogNTA2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZEO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSg2MiwgNzEsIDgxLCAwLjMpO1xyXG4gICAgcGFkZGluZzogNXJlbSAwIDhyZW0gMDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbiAgICBtYXJnaW46IDAgMCA4cmVtIDA7XHJcbn1cclxuLmltZy1vdXRlci1jaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxODdweDtcclxuICAgIHdpZHRoOiAxODdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkQ7XHJcbiAgICBtYXJnaW46IDAgMCAyLjVyZW0gMDtcclxuICAgIGJveC1zaGFkb3c6IC0xMS42MDE1cHggLTExLjYwMTVweCAyMy4yMDNweCAjRkZGRkZGLCAxMS42MDE1cHggMTEuNjAxNXB4IDIzLjIwM3B4ICNGM0YzRjMsIGluc2V0IC05LjI4MTE5cHggLTkuMjgxMTlweCAxOC41NjI0cHggI0ZGRkZGRiwgaW5zZXQgOS4yODExOXB4IDkuMjgxMTlweCAxOC41NjI0cHggI0UwRTFFMztcclxufVxyXG4uaW1nLWlubmVyLWNpcmNsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICB3aWR0aDogMTU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZEO1xyXG4gICAgYm94LXNoYWRvdzogLTguOTAyNTNweCAtOC45MDI1M3B4IDE3LjgwNTFweCAjRkZGRkZGLCA4LjkwMjUzcHggOC45MDI1M3B4IDE3LjgwNTFweCAjREFEQURBO1xyXG59XHJcbi50ZWFtLWNhcmQgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRlYW0tbmFtZSwudGVhbS1wb3NpdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbiAgICBsaW5lLWhlaWdodDogMTQ1JTtcclxuICAgIC8qIG9yIDQ0cHggKi9cclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcclxuXHJcbn1cclxuXHJcbi50ZWFtLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI0ZFODE1RjtcclxufVxyXG5cclxuLnRlYW0tcG9zaXRpb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzNFNDc1MTtcclxufVxyXG5cclxuXHJcbi5hZHZpc29ycy1jb250YWluZXIgLnRpdGxle1xyXG4gICAgbWFyZ2luOiAwIDAgOHJlbSAwO1xyXG59XHJcbi5hZHZpc29ycy1ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMTU3cHg7XHJcbiAgICBoZWlnaHQ6IDQwOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGRDtcclxuICAgIGJveC1zaGFkb3c6MTBweCAxMHB4IDIwcHggcmdiYSg2MiwgNzEsIDgxLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMCA2LjVyZW0gMCA2LjVyZW07XHJcbn1cclxuLmFkdmlzb3J7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWR2aXNvci1kZXRhaWxze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG4uYWR2aXNvciAuYWR2aXNvci1kZXRhaWxzIC50ZWFtLW5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5hZHZpc29yIC5hZHZpc29yLWRldGFpbHMgLnRlYW0tcG9zaXRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hZHZpc29ycy1ib3ggaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpdmlkZXJ7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAzNjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRjg4MzQwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTEwcHggLTEwcHggMjBweCAjRkZGRkZGO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "nacR":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommunityComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommunityComponent.ɵfac = function CommunityComponent_Factory(t) { return new (t || CommunityComponent)(); };
CommunityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommunityComponent, selectors: [["app-community"]], decls: 10, vars: 0, consts: [["id", "community", 1, "community-component-container"], [1, "news-letter-container"], [1, "news-letter"], [1, "info"], ["src", "assets/images/SVG/mail.svg", "alt", ""], [1, "button"]], template: function CommunityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Subscribe to our Newsletter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".community-component-container[_ngcontent-%COMP%]{\r\n    margin: 16rem 3rem 16rem 3rem;\r\n}\r\n\r\n.news-letter-container[_ngcontent-%COMP%]{\r\n    background: url('newsletter-background.svg') no-repeat center;\r\n    background-size: contain;\r\n    height: 335px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 0 0 6.5rem;\r\n}\r\n\r\n.news-letter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.news-letter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 48px;\r\n    line-height: 58px;\r\n    \r\n\r\n    text-align: center;\r\n\r\n    color: #FFFFFF;\r\n    margin: 0 .5rem 0 0;\r\n}\r\n\r\n.news-letter[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    border : none;   \r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    \r\n    padding: 1rem 6.5rem 1rem 6.5rem;\r\n    margin: 1rem 0 0 0;\r\n    text-align: center;\r\n\r\n    color: #FFFFFF;\r\n\r\n    background: #F88340;\r\n    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.13), 10px 10px 20px rgba(62, 71, 81, 0.26);\r\n    border-radius: 10px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.news-letter[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{\r\n    transform: scale(0.8);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkRBQWlGO0lBQ2pGLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZCQUE2Qjs7SUFFN0Isa0JBQWtCOztJQUVsQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQixjQUFjOztJQUVkLG1CQUFtQjtJQUNuQiw2RkFBNkY7SUFDN0YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJjb21tdW5pdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tdW5pdHktY29tcG9uZW50LWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMTZyZW0gM3JlbSAxNnJlbSAzcmVtO1xyXG59XHJcblxyXG4ubmV3cy1sZXR0ZXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzbGV0dGVyLWJhY2tncm91bmQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDMzNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA2LjVyZW07XHJcbn1cclxuLm5ld3MtbGV0dGVyIC5pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5ld3MtbGV0dGVyIC5pbmZvIHNwYW57XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG4gICAgLyogaWRlbnRpY2FsICB0byBib3ggaGVpZ2h0ICovXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAwIC41cmVtIDAgMDtcclxufVxyXG4ubmV3cy1sZXR0ZXIgLmJ1dHRvbiBidXR0b257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyIDogbm9uZTsgICBcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgcGFkZGluZzogMXJlbSA2LjVyZW0gMXJlbSA2LjVyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0Y4ODM0MDtcclxuICAgIGJveC1zaGFkb3c6IC0xMHB4IC0xMHB4IDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKSwgMTBweCAxMHB4IDIwcHggcmdiYSg2MiwgNzEsIDgxLCAwLjI2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ubmV3cy1sZXR0ZXIgLmJ1dHRvbiBidXR0b246YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map