(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('test-remote2', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['test-remote2'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote2Service = (function () {
        function TestRemote2Service() {
        }
        TestRemote2Service.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TestRemote2Service.ctorParameters = function () { return []; };
        /** @nocollapse */ TestRemote2Service.ngInjectableDef = i0.defineInjectable({ factory: function TestRemote2Service_Factory() { return new TestRemote2Service(); }, token: TestRemote2Service, providedIn: "root" });
        return TestRemote2Service;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote2Component = (function () {
        function TestRemote2Component() {
        }
        /**
         * @return {?}
         */
        TestRemote2Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestRemote2Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-test-remote2',
                        template: "\n    content lib-test-remote2\n    <hr/>\n    <a [routerLink]=\"['/local']\">\n      load local\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote1']\">\n      load remote 1\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote2']\">\n      load remote 2\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote3']\">\n      load remote 3\n    </a>\n    <hr/>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TestRemote2Component.ctorParameters = function () { return []; };
        return TestRemote2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote2Module = (function () {
        function TestRemote2Module() {
        }
        TestRemote2Module.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule
                        ],
                        declarations: [TestRemote2Component],
                        exports: [TestRemote2Component]
                    },] },
        ];
        return TestRemote2Module;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TestRemote2Service = TestRemote2Service;
    exports.TestRemote2Component = TestRemote2Component;
    exports.TestRemote2Module = TestRemote2Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdGVzdC1yZW1vdGUyL2xpYi90ZXN0LXJlbW90ZTIuc2VydmljZS50cyIsIm5nOi8vdGVzdC1yZW1vdGUyL2xpYi90ZXN0LXJlbW90ZTIuY29tcG9uZW50LnRzIiwibmc6Ly90ZXN0LXJlbW90ZTIvbGliL3Rlc3QtcmVtb3RlMi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlMlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGVzdC1yZW1vdGUyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICBjb250ZW50IGxpYi10ZXN0LXJlbW90ZTJcbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2xvY2FsJ11cIj5cbiAgICAgIGxvYWQgbG9jYWxcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTEnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgMVxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMiddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAyXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUzJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDNcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGVzdFJlbW90ZTJDb21wb25lbnQgfSBmcm9tICcuL3Rlc3QtcmVtb3RlMi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rlc3RSZW1vdGUyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Rlc3RSZW1vdGUyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlMk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O2lDQUpEOzs7Ozs7O0FDQUE7UUE0QkU7U0FBaUI7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2FBQ0M7O29CQTdCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSw2WEFtQlQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7bUNBekJEOzs7Ozs7O0FDQUE7Ozs7b0JBS0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDaEM7O2dDQVhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9