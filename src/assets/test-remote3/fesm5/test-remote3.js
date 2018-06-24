import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestRemote3Service = /** @class */ (function () {
    function TestRemote3Service() {
    }
    TestRemote3Service.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TestRemote3Service.ctorParameters = function () { return []; };
    /** @nocollapse */ TestRemote3Service.ngInjectableDef = defineInjectable({ factory: function TestRemote3Service_Factory() { return new TestRemote3Service(); }, token: TestRemote3Service, providedIn: "root" });
    return TestRemote3Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestRemote3Component = /** @class */ (function () {
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
        { type: Component, args: [{
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
var TestRemote3Module = /** @class */ (function () {
    function TestRemote3Module() {
    }
    TestRemote3Module.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule
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

export { TestRemote3Service, TestRemote3Component, TestRemote3Module };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90ZXN0LXJlbW90ZTMvbGliL3Rlc3QtcmVtb3RlMy5zZXJ2aWNlLnRzIiwibmc6Ly90ZXN0LXJlbW90ZTMvbGliL3Rlc3QtcmVtb3RlMy5jb21wb25lbnQudHMiLCJuZzovL3Rlc3QtcmVtb3RlMy9saWIvdGVzdC1yZW1vdGUzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0LXJlbW90ZTMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIGNvbnRlbnQgbGliLXRlc3QtcmVtb3RlM1xuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvbG9jYWwnXVwiPlxuICAgICAgbG9hZCBsb2NhbFxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMSddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAxXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUyJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDJcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTMnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgM1xuICAgIDwvYT5cbiAgICA8aHIvPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUZXN0UmVtb3RlM0NvbXBvbmVudCB9IGZyb20gJy4vdGVzdC1yZW1vdGUzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGVzdFJlbW90ZTNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGVzdFJlbW90ZTNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NkJBSkQ7Ozs7Ozs7QUNBQTtJQTRCRTtLQUFpQjs7OztJQUVqQix1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsNlhBbUJUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7OytCQXpCRDs7Ozs7OztBQ0FBOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDOzs0QkFYRDs7Ozs7Ozs7Ozs7Ozs7OyJ9