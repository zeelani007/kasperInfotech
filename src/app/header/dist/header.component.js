"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cartService) {
        this.cartService = cartService;
        this.totalItem = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getProducts()
            .subscribe(function (res) {
            _this.totalItem = res.length;
        });
        {
            this.cartService.getProducts()
                .subscribe(function (res) {
                _this.totalItem = res.length;
            });
        }
    };
    HeaderComponent.prototype.search = function (event) {
        this.searchTerm = event.target.value;
        console.log(this.searchTerm);
        this.cartService.search.next(this.searchTerm);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=header.component.js.map
