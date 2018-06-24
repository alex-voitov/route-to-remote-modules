(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('test-remote3', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['test-remote3'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote3Service = (function () {
        function TestRemote3Service() {
        }
        TestRemote3Service.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TestRemote3Service.ctorParameters = function () { return []; };
        /** @nocollapse */ TestRemote3Service.ngInjectableDef = i0.defineInjectable({ factory: function TestRemote3Service_Factory() { return new TestRemote3Service(); }, token: TestRemote3Service, providedIn: "root" });
        return TestRemote3Service;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote3Component = (function () {
        function TestRemote3Component() {
        }
        /**
         * @return {?}
         */
        TestRemote3Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestRemote3Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-test-remote3',
                        template: "\n    content lib-test-remote3\n    <hr/>\n    <a [routerLink]=\"['/local']\">\n      load local\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote1']\">\n      load remote 1\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote2']\">\n      load remote 2\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote3']\">\n      load remote 3\n    </a>\n    <hr/>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TestRemote3Component.ctorParameters = function () { return []; };
        return TestRemote3Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote3Module = (function () {
        function TestRemote3Module() {
        }
        TestRemote3Module.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule
                        ],
                        declarations: [TestRemote3Component],
                        exports: [TestRemote3Component]
                    },] },
        ];
        return TestRemote3Module;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TestRemote3Service = TestRemote3Service;
    exports.TestRemote3Component = TestRemote3Component;
    exports.TestRemote3Module = TestRemote3Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdGVzdC1yZW1vdGUzL2xpYi90ZXN0LXJlbW90ZTMuc2VydmljZS50cyIsIm5nOi8vdGVzdC1yZW1vdGUzL2xpYi90ZXN0LXJlbW90ZTMuY29tcG9uZW50LnRzIiwibmc6Ly90ZXN0LXJlbW90ZTMvbGliL3Rlc3QtcmVtb3RlMy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlM1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGVzdC1yZW1vdGUzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICBjb250ZW50IGxpYi10ZXN0LXJlbW90ZTNcbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2xvY2FsJ11cIj5cbiAgICAgIGxvYWQgbG9jYWxcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTEnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgMVxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMiddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAyXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUzJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDNcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlM0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGVzdFJlbW90ZTNDb21wb25lbnQgfSBmcm9tICcuL3Rlc3QtcmVtb3RlMy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rlc3RSZW1vdGUzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Rlc3RSZW1vdGUzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlM01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O2lDQUpEOzs7Ozs7O0FDQUE7UUE0QkU7U0FBaUI7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2FBQ0M7O29CQTdCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSw2WEFtQlQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7bUNBekJEOzs7Ozs7O0FDQUE7Ozs7b0JBS0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDaEM7O2dDQVhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9