import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote1Service {
    constructor() { }
}
TestRemote1Service.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TestRemote1Service.ctorParameters = () => [];
/** @nocollapse */ TestRemote1Service.ngInjectableDef = defineInjectable({ factory: function TestRemote1Service_Factory() { return new TestRemote1Service(); }, token: TestRemote1Service, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote1Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestRemote1Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-test-remote1',
                template: `
    content lib-test-remote1

    <hr/>
    <a [routerLink]="['/local']">
      load local
    </a>
    <hr/>
    <a [routerLink]="['/test-remote1']">
      load remote 1
    </a>
    <hr/>
    <a [routerLink]="['/test-remote2']">
      load remote 2
    </a>
    <hr/>
    <a [routerLink]="['/test-remote3']">
      load remote 3
    </a>
    <hr/>
  `,
                styles: []
            },] },
];
/** @nocollapse */
TestRemote1Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote1Module {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TestRemote1Service, TestRemote1Component, TestRemote1Module };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUxLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90ZXN0LXJlbW90ZTEvbGliL3Rlc3QtcmVtb3RlMS5zZXJ2aWNlLnRzIiwibmc6Ly90ZXN0LXJlbW90ZTEvbGliL3Rlc3QtcmVtb3RlMS5jb21wb25lbnQudHMiLCJuZzovL3Rlc3QtcmVtb3RlMS9saWIvdGVzdC1yZW1vdGUxLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUxU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0LXJlbW90ZTEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIGNvbnRlbnQgbGliLXRlc3QtcmVtb3RlMVxuXG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy9sb2NhbCddXCI+XG4gICAgICBsb2FkIGxvY2FsXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUxJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDFcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTInXVwiPlxuICAgICAgbG9hZCByZW1vdGUgMlxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMyddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAzXG4gICAgPC9hPlxuICAgIDxoci8+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdFJlbW90ZTFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRlc3RSZW1vdGUxQ29tcG9uZW50IH0gZnJvbSAnLi90ZXN0LXJlbW90ZTEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUZXN0UmVtb3RlMUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUZXN0UmVtb3RlMUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGVzdFJlbW90ZTFNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUE2QkUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQzFCRDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7Ozs7Ozs7Ozs7Ozs7OyJ9