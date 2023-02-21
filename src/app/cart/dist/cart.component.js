"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.products = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getProducts()
            .subscribe(function (res) {
            _this.products = res;
            _this.grandTotal = _this.cartService.getTotalPrice();
        });
    };
    CartComponent.prototype.removeItem = function (item) {
        this.cartService.removeCartItem(item);
    };
    CartComponent.prototype.emptycart = function () {
        this.cartService.removeAllCart();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;

//# sourceMappingURL=cart.component.js.map
