import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote2Service {
    constructor() { }
}
TestRemote2Service.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TestRemote2Service.ctorParameters = () => [];
/** @nocollapse */ TestRemote2Service.ngInjectableDef = defineInjectable({ factory: function TestRemote2Service_Factory() { return new TestRemote2Service(); }, token: TestRemote2Service, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote2Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestRemote2Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-test-remote2',
                template: `
    content lib-test-remote2
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
TestRemote2Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestRemote2Module {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TestRemote2Service, TestRemote2Component, TestRemote2Module };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1yZW1vdGUyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90ZXN0LXJlbW90ZTIvbGliL3Rlc3QtcmVtb3RlMi5zZXJ2aWNlLnRzIiwibmc6Ly90ZXN0LXJlbW90ZTIvbGliL3Rlc3QtcmVtb3RlMi5jb21wb25lbnQudHMiLCJuZzovL3Rlc3QtcmVtb3RlMi9saWIvdGVzdC1yZW1vdGUyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10ZXN0LXJlbW90ZTInLFxuICB0ZW1wbGF0ZTogYFxuICAgIGNvbnRlbnQgbGliLXRlc3QtcmVtb3RlMlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvbG9jYWwnXVwiPlxuICAgICAgbG9hZCBsb2NhbFxuICAgIDwvYT5cbiAgICA8aHIvPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Rlc3QtcmVtb3RlMSddXCI+XG4gICAgICBsb2FkIHJlbW90ZSAxXG4gICAgPC9hPlxuICAgIDxoci8+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvdGVzdC1yZW1vdGUyJ11cIj5cbiAgICAgIGxvYWQgcmVtb3RlIDJcbiAgICA8L2E+XG4gICAgPGhyLz5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy90ZXN0LXJlbW90ZTMnXVwiPlxuICAgICAgbG9hZCByZW1vdGUgM1xuICAgIDwvYT5cbiAgICA8aHIvPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUZXN0UmVtb3RlMkNvbXBvbmVudCB9IGZyb20gJy4vdGVzdC1yZW1vdGUyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGVzdFJlbW90ZTJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGVzdFJlbW90ZTJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RSZW1vdGUyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBNEJFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ3pCRDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7Ozs7Ozs7Ozs7Ozs7OyJ9