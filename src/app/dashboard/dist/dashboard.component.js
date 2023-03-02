"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * Angular  decorators and services
 */
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
/**
 * App Component
 * Top Level Component
 */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver) {
        // this.mediaQueryList = mediaMatcher.matchMedia('(min-width: 640px)');
        // this.mediaQueryMin = mediaMatcher.matchMedia('(min-width: 960px)');
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.colNum = 4;
        this.rowHeight = '120px';
        this.chartColNum = 2;
        this.chartRowHeight = '450px';
        this.cardClass = 'dash-card';
        this.mediaQueryList = null;
        this.mediaQueryMin = null;
        this.isMobile = false;
        this.chartColspan = 1;
        this.infoBoxes = [
            {
                bgClass: "user-registration",
                icon: "account_circle",
                title: "User Registrations",
                subtitle: "68"
            },
            {
                bgClass: "new-order",
                icon: "add_shopping_cart",
                title: "New Orders",
                subtitle: "49"
            },
            {
                bgClass: "bounce-rate",
                icon: "assessment",
                title: "Bounce Rate",
                subtitle: "36%  "
            },
            {
                bgClass: "membership",
                icon: "card_membership",
                title: "Unique Visitors",
                subtitle: "32"
            }
        ];
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        this.lineChartOptions = {};
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        breakpointObserver.observe([
            layout_1.Breakpoints.HandsetLandscape,
            layout_1.Breakpoints.HandsetPortrait
        ]).subscribe(function (result) {
            _this.onScreensizeChange();
        });
    }
    DashboardComponent.prototype.randomizeType = function () {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    };
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onScreensizeChange = function () {
        // debugger
        var isLess600 = this.breakpointObserver.isMatched('(max-width: 599px)');
        var isLess1000 = this.breakpointObserver.isMatched('(max-width: 959px)');
        console.log(" isLess600  " + isLess600 + " \n        isLess1000 " + isLess1000 + "  ");
        if (isLess1000) {
            if (isLess600) {
                // this.fieldColspan = 12;
                this.colNum = 1;
                this.chartColNum = 1;
                this.chartColspan = 1;
            }
            else {
                this.colNum = 2;
                this.chartColNum = 1;
                this.chartColspan = 2;
            }
        }
        else {
            this.colNum = 4;
            this.chartColNum = 2;
            this.chartColspan = 2;
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            // encapsulation: ViewEncapsulation.None,
            styleUrls: ['./dashboard.component.scss'],
            templateUrl: './dashboard.component.html'
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=dashboard.component.js.map
