import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestRemote1Service = /** @class */ (function () {
    function TestRemote1Service() {
    }
    TestRemote1Service.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TestRemote1Service.ctorParameters = function () { return []; };
    /** @nocollapse */ TestRemote1Service.ngInjectableDef = defineInjectable({ factory: function TestRemote1Service_Factory() { return new TestRemote1Service(); }, token: TestRemote1Service, providedIn: "root" });
    return TestRemote1Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestRemote1Component = /** @class */ (function () {
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
        { type: Component, args: [{
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
var TestRemote1Module = /** @class */ (function () {
    function TestRemote1Module() {
    }
    TestRemote1Module.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule
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

export { TestRemote1Service, TestRemote1Component, TestRemote1Module };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUxLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90ZXN0LXJlbW90ZTEvbGliL3Rlc3QtcmVtb3RlMS5zZXJ2aWNlLnRzIiwibmc6Ly90ZXN0LXJlbW90ZTEvbGliL3Rlc3QtcmVtb3RlMS5jb21wb25lbnQudHMiLCJuZzovL3Rlc3QtcmVtb3RlMS9saWIvdGVzdC1yZW1vdGUxLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUxU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0LXJlbW90ZTEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIGNvbnRlbnQgbGliLXRlc3QtcmVtb3RlMVxuXG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy9sb2NhbCddXCI+XG4gICAgICBsb2FkIGxvY2FsXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUxJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDFcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTInXVwiPlxuICAgICAgbG9hZCByZW1vdGUgMlxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMyddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAzXG4gICAgPC9hPlxuICAgIDxoci8+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdFJlbW90ZTFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRlc3RSZW1vdGUxQ29tcG9uZW50IH0gZnJvbSAnLi90ZXN0LXJlbW90ZTEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUZXN0UmVtb3RlMUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUZXN0UmVtb3RlMUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGVzdFJlbW90ZTFNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFKRDs7Ozs7OztBQ0FBO0lBNkJFO0tBQWlCOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtLQUNDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwrWEFvQlQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7K0JBMUJEOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7OzRCQVhEOzs7Ozs7Ozs7Ozs7Ozs7In0=