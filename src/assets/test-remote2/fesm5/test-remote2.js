import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestRemote2Service = /** @class */ (function () {
    function TestRemote2Service() {
    }
    TestRemote2Service.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TestRemote2Service.ctorParameters = function () { return []; };
    /** @nocollapse */ TestRemote2Service.ngInjectableDef = defineInjectable({ factory: function TestRemote2Service_Factory() { return new TestRemote2Service(); }, token: TestRemote2Service, providedIn: "root" });
    return TestRemote2Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestRemote2Component = /** @class */ (function () {
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
        { type: Component, args: [{
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
var TestRemote2Module = /** @class */ (function () {
    function TestRemote2Module() {
    }
    TestRemote2Module.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule
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

export { TestRemote2Service, TestRemote2Component, TestRemote2Module };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90ZXN0LXJlbW90ZTIvbGliL3Rlc3QtcmVtb3RlMi5zZXJ2aWNlLnRzIiwibmc6Ly90ZXN0LXJlbW90ZTIvbGliL3Rlc3QtcmVtb3RlMi5jb21wb25lbnQudHMiLCJuZzovL3Rlc3QtcmVtb3RlMi9saWIvdGVzdC1yZW1vdGUyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0LXJlbW90ZTInLFxuICB0ZW1wbGF0ZTogYFxuICAgIGNvbnRlbnQgbGliLXRlc3QtcmVtb3RlMlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvbG9jYWwnXVwiPlxuICAgICAgbG9hZCBsb2NhbFxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMSddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAxXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUyJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDJcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTMnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgM1xuICAgIDwvYT5cbiAgICA8aHIvPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUZXN0UmVtb3RlMkNvbXBvbmVudCB9IGZyb20gJy4vdGVzdC1yZW1vdGUyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGVzdFJlbW90ZTJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGVzdFJlbW90ZTJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NkJBSkQ7Ozs7Ozs7QUNBQTtJQTRCRTtLQUFpQjs7OztJQUVqQix1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsNlhBbUJUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7OytCQXpCRDs7Ozs7OztBQ0FBOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDOzs0QkFYRDs7Ozs7Ozs7Ozs7Ozs7OyJ9