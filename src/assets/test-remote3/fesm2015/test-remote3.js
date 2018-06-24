import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote3Service {
    constructor() { }
}
TestRemote3Service.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TestRemote3Service.ctorParameters = () => [];
/** @nocollapse */ TestRemote3Service.ngInjectableDef = defineInjectable({ factory: function TestRemote3Service_Factory() { return new TestRemote3Service(); }, token: TestRemote3Service, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote3Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestRemote3Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-test-remote3',
                template: `
    content lib-test-remote3
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
TestRemote3Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote3Module {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TestRemote3Service, TestRemote3Component, TestRemote3Module };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90ZXN0LXJlbW90ZTMvbGliL3Rlc3QtcmVtb3RlMy5zZXJ2aWNlLnRzIiwibmc6Ly90ZXN0LXJlbW90ZTMvbGliL3Rlc3QtcmVtb3RlMy5jb21wb25lbnQudHMiLCJuZzovL3Rlc3QtcmVtb3RlMy9saWIvdGVzdC1yZW1vdGUzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0LXJlbW90ZTMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIGNvbnRlbnQgbGliLXRlc3QtcmVtb3RlM1xuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvbG9jYWwnXVwiPlxuICAgICAgbG9hZCBsb2NhbFxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMSddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAxXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUyJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDJcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTMnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgM1xuICAgIDwvYT5cbiAgICA8aHIvPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUZXN0UmVtb3RlM0NvbXBvbmVudCB9IGZyb20gJy4vdGVzdC1yZW1vdGUzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGVzdFJlbW90ZTNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGVzdFJlbW90ZTNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBNEJFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ3pCRDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7Ozs7Ozs7Ozs7Ozs7OyJ9