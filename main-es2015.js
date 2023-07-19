(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<mat-toolbar *ngIf=\"!openedSidenav\">\n\n    <mat-toolbar-row>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <img [src]=\"store.cvData.profile.photo\" alt=\"cv-photo-ico\" class=\"cv-photo-ico\">\n        </button>\n        <mat-menu #menu=\"matMenu\">\n        </mat-menu>\n        <!-- <span class=\"txt-toolbar\">{{store.cvData.profile.firstname}} {{store.cvData.profile.lastname}}</span> -->\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"bottom-right\" *ngFor=\"let item of this.store.cvData.social\">\n            <a [href]=\"item.link\" class=\"social\" target=\"_blank\">\n                <fa-icon [icon]=\"item.icon\" class=\"fa-lg toolbar-icon\"> </fa-icon>\n            </a>\n        </div>\n        \n\n    </mat-toolbar-row>\n    \n    \n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [opened]=\"openedSidenav\" class=\"sidenav\" [fixedInViewport]=\"true\">\n        <div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center center\" class=\"container\">\n            <!-- content here -->\n            <div fxLayout=\" wrap\">\n                <div fxFlex=\"25\" fxLayout=\"column\" style=\"padding: 5px;\">\n                    <img [src]=\"store.cvData.profile.photo\" alt=\"cv-photo\" class=\"cv-photo\">\n                </div>\n\n            </div>\n            <!--  SOCIAL -->\n            <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0.5vw\" fxLayoutGap.xs=\"1vw\">\n                <div class=\"bottom-right\" *ngFor=\"let item of this.store.cvData.social\">\n                    <a [href]=\"item.link\" class=\"social\">\n                        <fa-icon [icon]=\"item.icon\" class=\"fa-lg\"> </fa-icon>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n        <!-- ABOUT  -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-about></app-about>\n        </div>\n        \n        <!-- projects -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-project></app-project>\n        </div>\n\n        <!-- EXPERIENCES -->\n<!--        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-experiences></app-experiences>\n        </div>-->\n        \n\n        <!-- EDUCATION -->\n<!--        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-education></app-education>\n        </div>-->\n\n\n        <!-- SKILLS -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-skills></app-skills>\n        </div>\n\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{this.store.cvData.profile.firstname}}\n    <span class=\"text-primary\">{{this.store.cvData.profile.lastname}}</span>\n</h1>\n\n<h2 class=\"text-primary\">\n    {{this.store.cvData.profile.title}}\n</h2>\n\n<div class=\"text-secondary sub-h\">\n    {{this.store.cvData.profile.city}} {{this.store.cvData.profile.phone}}\n    <a [href]=\"this.store.cvData.profile.mail\" class='text-primary'> {{this.store.cvData.profile.mail}}</a>\n</div>\n\n\n<p>\n    {{this.store.cvData.profile.summary}}\n</p>\n\n<span style=\"display: flex; flex-direction: row; justify-content: flex-start;\" >\n    <div *ngFor=\"let temp of store.cvData.profile.tags\" style=\"margin-right: 20px;\" >\n        {{temp}}\n    </div>\n</span> \n\n<!-- <div class=\"bottom-right\" *ngFor=\"let item of this.store.cvData.social\">\n    <a [href]=\"item.link\">\n        <fa-icon [icon]=\"item.icon\" class=\"fa-3x\"></fa-icon>\n    </a>\n</div> -->\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <!-- material cntent here -->\n            <h1>\n                EDUCATION\n            </h1>\n            <mat-card *ngFor=\"let ex of store.cvData.educations\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\"></div>\n                    <mat-card-title>{{ex.university}}</mat-card-title>\n                    <mat-card-subtitle>\n                        {{ex.degree}}\n\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n\n                    <p class=\"p-list\"> {{ex.title}}</p>\n                    <p class=\"p-list\">\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        {{ex.city}}\n                    </p>\n                    \n\n\n\n                </mat-card-content>\n                <mat-card-actions>\n\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n    </div>\n\n    <div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/experiences/experiences.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/experiences/experiences.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <h1>\n                EXPERIENCES\n            </h1>\n            <mat-card *ngFor=\"let ex of store.cvData.experiences\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\">\n                    </div>\n                    <mat-card-title>{{ex.title}}</mat-card-title>\n                    <mat-card-subtitle>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"home icon\">home</mat-icon>\n\n                        {{ex.location}}\n                        ({{ex.company}})\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                    \n                        <!-- <mat-list-item  *ngFor=\"let task of ex.description\"> - {{task}}</mat-list-item> -->\n\n                        <p *ngFor=\"let task of ex.description\" class=\"p-list\"> ➡️ {{task}}</p>\n                        \n                        \n\n                    \n                    \n                </mat-card-content>\n                <mat-card-actions>\n\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/project/project.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/project/project.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <h1>\n                Projects\n            </h1>\n            <mat-card *ngFor=\"let temp of store.cvData.projects\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <mat-card-title>{{temp.project_name}}</mat-card-title>\n                    <mat-card-subtitle>\n                        <span *ngIf=\"temp.demo_site\">\n                            <mat-icon aria-hidden=\"false\" aria-label=\"home icon\" style=\"margin-left:10px\" fontIcon=\"home\">home</mat-icon>\n                            <a href=\"{{temp.demo_site}}\" class=\"text-primary\" style=\"margin-left:3px\" >Live demo</a>\n                        </span>\n                        <span  *ngIf=\"temp.repository\" >\n                            <mat-icon aria-hidden=\"false\" aria-label=\"star icon\" style=\"margin-left:10px\" >star</mat-icon>\n                            <a href=\"{{temp.repository}}\" class=\"text-primary\" style=\"margin-left:3px\" >Repository</a>\n                        </span>\n\n                    </mat-card-subtitle>\n                </mat-card-header>\n                \n                <mat-card-content>\n                    \n                <!-- <mat-list-item  *ngFor=\"let task of ex.description\"> - {{task}}</mat-list-item> -->\n\n                <p *ngFor=\"let line of temp.description\" class=\"p-list\"> ➡️ {{line}}</p>\n                    \n                </mat-card-content>\n                \n                <mat-card-actions>\n\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n<h1>\n    SKIILS\n</h1>\n\n\n<div fxLayout=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.xs=\"2dpx\" fxLayoutAlign=\"center center\" >\n    <mat-card *ngFor=\"let item of store.cvData.skills\" class=\"logo-card\">\n        <fa-icon [icon]=\"item.icon\" class=\"fa-3x \" title=\"{{item.name}}\" ></fa-icon>\n    </mat-card>\n        \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/data/perso.json */ "./src/assets/data/perso.json");
var _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/perso.json */ "./src/assets/data/perso.json", 1);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AppComponent = class AppComponent {
    constructor(store, titleService) {
        this.store = store;
        this.titleService = titleService;
        this.title = 'cv-app';
        this.openedSidenav = false;
        this.store.cvData = _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__;
        this.titleService.setTitle('| CV | ' + _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__.profile.lastname);
    }
    ngOnInit(e) {
        this.onResize(e);
    }
    onResize(event) {
        let width;
        if (event != undefined) {
            width = event.target.innerWidth;
        }
        else {
            width = document.body.clientWidth;
        }
        console.log(width);
        if (width >= 720) {
            this.openedSidenav = true;
        }
        else {
            this.openedSidenav = false;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/experiences/experiences.component */ "./src/app/components/experiences/experiences.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_10__["ExperiencesComponent"],
            _components_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
            _components_project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");



let AboutComponent = class AboutComponent {
    constructor(store) {
        this.store = store;
        console.log(this.store.cvData);
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/education/education.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");



let EducationComponent = class EducationComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
};
EducationComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html"),
        styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/components/education/education.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], EducationComponent);



/***/ }),

/***/ "./src/app/components/experiences/experiences.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/experiences/experiences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");



let ExperiencesComponent = class ExperiencesComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
};
ExperiencesComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experiences',
        template: __webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/experiences/experiences.component.html"),
        styles: [__webpack_require__(/*! ./experiences.component.scss */ "./src/app/components/experiences/experiences.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], ExperiencesComponent);



/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");



let ProjectComponent = class ProjectComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
};
ProjectComponent.ctorParameters = () => [
    { type: src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/project/project.component.html"),
        styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], ProjectComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-card {\n  width: 14vw;\n  text-align: center;\n}\n\nfa-icon:hover {\n  color: black;\n}\n\nfa-icon:hover:after {\n  content: attr(title);\n  font-size: 20px;\n  color: #18b4fe;\n  position: relative;\n  left: 15px;\n  top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvRDpcXFpTIFdvcmtzcGFjZVxcaHRtbFxcY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1jYXJkIHtcbiAgICB3aWR0aDogMTR2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG5mYS1pY29uOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmZhLWljb246aG92ZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIodGl0bGUpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmdiKDI0LCAxODAsIDI1NCkgO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHRvcDotMzBweFxufVxuXG4iLCIubG9nby1jYXJkIHtcbiAgd2lkdGg6IDE0dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZmEtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuZmEtaWNvbjpob3ZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIodGl0bGUpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMThiNGZlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogLTMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");








let SkillsComponent = class SkillsComponent {
    constructor(library, faConfig, store) {
        this.store = store;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fab"]);
        faConfig.defaultPrefix = 'far';
    }
    ngOnInit() {
    }
};
SkillsComponent.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"] },
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaConfig"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"] }
];
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/skills/skills.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaConfig"],
        _services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]])
], SkillsComponent);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreService = class StoreService {
    constructor() {
        this.cvData = {};
    }
};
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StoreService);



/***/ }),

/***/ "./src/assets/data/perso.json":
/*!************************************!*\
  !*** ./src/assets/data/perso.json ***!
  \************************************/
/*! exports provided: profile, social, projects, experiences, educations, skills, default */
/***/ (function(module) {

module.exports = {"profile":{"firstname":"Bourne","lastname":" Wang ","title":"Software Developer, Bachelor of Computer Science","photo":"./assets/img/photo.jpg","city":"Hong Kong, China","phone":"","mail":"  CB44606@gmail.com","summary":"","tags":["#Technical Talent","#Project Management Professional( PMP )","#OO Analysis & Design","#Full-Stack","#Customer Satisfaction-Oriented"]},"social":[{"name":"twitter","link":"https://twitter.com/Bourne314","icon":["fab","twitter"]},{"name":"github","link":"https://github.com/BourneSuper/","icon":["fab","github"]}],"projects":[{"project_name":"Chat Bot","demo_site":"https://chatbot.bournesuper.online/","repository":"","description":["A chat bot with ChatGPT inside it. It can talk like human about everything."]},{"project_name":"Admin Management","demo_site":"https://adminmanagement.bournesuper.online/","repository":"","description":["Admin Management is a Laravel administrative interface builder that lets you create CRUD backends with minimal code. ","It provides user, role, and permission management, as well as scheduling for recurring tasks. ","With Admin Management, you can easily build powerful and customizable admin management websites. "]},{"project_name":"Air Work","demo_site":"http://54.248.251.156:8023/","repository":"https://airwork.bournesuper.online/","description":["Air Work is a agile board for work, task management, team collaboration, process display. ","When condition is fulfilled,action(place an order or notifiction) will be triggered."]},{"project_name":"Bit Trigger","demo_site":"https://youtu.be/Dvk7ECgom5g","repository":"","description":["Bit Trigger is a finance software which helps user place orders on complicated index condition in a easy way. ","It provides user, role, and permission management, as well as scheduling for recurring tasks. ","With Admin Management, you can easily build powerful and customizable admin management websites. "]},{"project_name":"Matrix","demo_site":"","repository":"https://github.com/BourneSuper/Matrix","description":["Matrix is a PHP extension. It can do parallel computing based on CUDA.","Why should we use GPU to do cumputation ? Because it can run 1000+ times faster than CPU when solve a parallel computation. ","What's more, neural network of AI are full of computation of matrix , so it can be helpful."]},{"project_name":"FrontRe","demo_site":"","repository":"https://github.com/BourneSuper/FrontRe","description":["FrontRe is a light-weighted PHP framework. It can autoload PHP classes and resolve web requests.","Small but integrated, efficient. "]}],"experiences":[{"company":"INRA","picture":"https://pbs.twimg.com/media/EG2Q85EXYAY3OhC.png","location":"Avignon, France","title":"Design and developement engineer","period":"SEP 2017 - FEB 2019","description":["Design and development of  new features around the UrbanSIMUL project.","Development of methods for the integration of external data. ","Creation of APIs and services for data consumption."]},{"company":"INRA","picture":"https://pbs.twimg.com/media/EG2Q85EXYAY3OhC.png","location":"Avignon, France","title":"Internship","period":"MAR 2017 - AUG 2017","description":["Development of an automated method for the identification of artificial surfaces from the VHRS satellite images."]},{"company":"LYDEC","picture":"","location":"Casablanca, Morocco","title":"Internship","period":"FEB 2016 - AUG 2016","description":["Implementation of  a semi-automatic process for the control and verification of the consistency of geographic power grid's data."]}],"educations":[{"title":"Master's degree of geomatics in environment and planning (SIGMA) ","city":"Toulouse, France","degree":"Master","period":"2016 - 2017","university":"Toulouse II university (Jean Jaurès)","picture":""},{"title":"Master's degree in geographic systems and territorial management (SIGGT)","city":"Casablanca, Morocco","degree":"Master","period":"2014 - 2016","university":"Hassan II university of Casablanca","picture":""},{"title":"bachelor's degree in mathematics and applications (SMA)","city":"Casablanca, Morocco","degree":"Bachelor","period":"2009 - 2013","university":" Hassan II university of Casablanca","picture":""}],"skills":[{"name":"PHP","icon":["fab","php"]},{"name":"Angular","icon":["fab","angular"]},{"name":"HTML","icon":["fab","html5"]},{"name":"CSS","icon":["fab","css3-alt"]},{"name":"Javascript","icon":["fab","js"]},{"name":"Database","icon":["fas","database"]},{"name":"Python","icon":["fab","python"]},{"name":"NodeJS","icon":["fab","node-js"]},{"name":"Git","icon":["fab","git-alt"]},{"name":"Linux","icon":["fab","linux"]}]};

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ZS Workspace\html\cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map