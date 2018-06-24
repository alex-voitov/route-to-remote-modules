(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('test-remote1', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['test-remote1'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote1Service = (function () {
        function TestRemote1Service() {
        }
        TestRemote1Service.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TestRemote1Service.ctorParameters = function () { return []; };
        /** @nocollapse */ TestRemote1Service.ngInjectableDef = i0.defineInjectable({ factory: function TestRemote1Service_Factory() { return new TestRemote1Service(); }, token: TestRemote1Service, providedIn: "root" });
        return TestRemote1Service;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote1Component = (function () {
        function TestRemote1Component() {
        }
        /**
         * @return {?}
         */
        TestRemote1Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestRemote1Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-test-remote1',
                        template: "\n    content lib-test-remote1\n\n    <hr/>\n    <a [routerLink]=\"['/local']\">\n      load local\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote1']\">\n      load remote 1\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote2']\">\n      load remote 2\n    </a>\n    <hr/>\n    <a [routerLink]=\"['/test-remote3']\">\n      load remote 3\n    </a>\n    <hr/>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TestRemote1Component.ctorParameters = function () { return []; };
        return TestRemote1Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestRemote1Module = (function () {
        function TestRemote1Module() {
        }
        TestRemote1Module.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule
                        ],
                        declarations: [TestRemote1Component],
                        exports: [TestRemote1Component]
                    },] },
        ];
        return TestRemote1Module;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TestRemote1Service = TestRemote1Service;
    exports.TestRemote1Component = TestRemote1Component;
    exports.TestRemote1Module = TestRemote1Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUxLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdGVzdC1yZW1vdGUxL2xpYi90ZXN0LXJlbW90ZTEuc2VydmljZS50cyIsIm5nOi8vdGVzdC1yZW1vdGUxL2xpYi90ZXN0LXJlbW90ZTEuY29tcG9uZW50LnRzIiwibmc6Ly90ZXN0LXJlbW90ZTEvbGliL3Rlc3QtcmVtb3RlMS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUZXN0UmVtb3RlMVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGVzdC1yZW1vdGUxJyxcbiAgdGVtcGxhdGU6IGBcbiAgICBjb250ZW50IGxpYi10ZXN0LXJlbW90ZTFcblxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvbG9jYWwnXVwiPlxuICAgICAgbG9hZCBsb2NhbFxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMSddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAxXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUyJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDJcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTMnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgM1xuICAgIDwvYT5cbiAgICA8aHIvPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUZXN0UmVtb3RlMUNvbXBvbmVudCB9IGZyb20gJy4vdGVzdC1yZW1vdGUxLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGVzdFJlbW90ZTFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGVzdFJlbW90ZTFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUxTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7aUNBSkQ7Ozs7Ozs7QUNBQTtRQTZCRTtTQUFpQjs7OztRQUVqQix1Q0FBUTs7O1lBQVI7YUFDQzs7b0JBOUJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLCtYQW9CVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzttQ0ExQkQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7d0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNoQzs7Z0NBWEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=