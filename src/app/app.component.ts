import { Component,DoCheck } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router,Route, Event, NavigationStart, NavigationEnd, NavigationCancel,ActivatedRoute, NavigationError } from '@angular/router';
import { Observable } from 'rxjs';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import {  Output, EventEmitter, OnInit, HostListener } from '@angular/core';
// import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  // animations: [
  //   fadeInOut,
  //   trigger('rotate', [
  //     transition(':enter', [
  //       animate('1000ms', 
  //         keyframes([
  //           style({transform: 'rotate(0deg)', offset: '0'}),
  //           style({transform: 'rotate(2turn)', offset: '1'})
  //         ])
  //       )
  //     ]),
  //   ])
  // ]
})
export class AppComponent implements DoCheck , OnInit {
  title = 'ng crm';
  user: any = null;
  // isMobile: boolean;
  mode = "side"
  uiContent = "content"
  progrssBarClass = "progress-bar";
  isloading = true;
   isadmin=false;
   isuser=false;
  isMenuVisible=false;
  

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }


  constructor(
    // private loadingBar: SlimLoadingBarService,
    private route: Router,
    // public AuthService: AuthService,
    private breakpointObserver: BreakpointObserver
    
  )
   {
    console.log(" constructor")

    this.isloading = true;

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      console.log(result)
      if (result.matches) {
        // this.activateHandsetLayout();
        // this.isMobile = true;
        this.mode = "over"
        this.uiContent = "mobile-content"
      }
      else {
        // this.isMobile = false;
        this.mode = "side"
        this.uiContent = "content"
      }
    });

    // this.route.events.subscribe((event: Event) => {
    //   this.navigationInterceptor(event);
    // })
    //   ;
  }

  ngOnChanges() {
    console.log(" ngOnChanges")
  
  }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData): string {
    return this.route.url.includes(data.routeLink) ? 'active' : '';
  }
  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
  // logout(): void {
  //   // localStorage.removeItem('currentUser');
  //   this.AuthService.logout()
  //   this.route.navigate(['login']);
  // }



  // isAuth(isAuth?: any) {
  //   if (isAuth) {
  //     this.user = this.authService.getUser()
  //     // this.user = JSON.parse(localStorage.getItem(APP_USER_PROFILE)) || <User>{};
  //   }
  // }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this. progrssBarClass = "progress-bar";
      this.isloading = true;
    }
    if (event instanceof NavigationEnd) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }
    if (event instanceof NavigationCancel) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }
    if (event instanceof NavigationError) {
      this. progrssBarClass = "progress-bar-hidden";
      this.isloading = false;
    }

  }


  // ngOnDestroy() {
  //   this.breakpointObserver.ngOnDestroy()
  //   this.authService.logout()
  //   //   this.router.events
  //   // this.breakpoint.
  // }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }

 
}
