import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

import { MatDialog } from '@angular/material/dialog';
import { CustomerformComponent } from '../customerform/customerform.component';
import { CoreService } from '../core.service';
import { EmployeeService } from '../services/customer.services';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {

  constructor(
    private service: AuthService,
    private toastr:ToastrService,
    private router: Router,
    // private _dialog: MatDialog,
    // private _empService: EmployeeService,
    // private _coreService: CoreService
    ) {
   
    this.SetAccesspermission();

  }
  customerlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  accessdata: any;
  haveedit = false;
  haveadd = false;
  havedelete = false;

  ngAfterViewInit(): void {

  }
  LoadCustomer() {
    this.service.GetAllCustomer().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  SetAccesspermission() {
    this.service.Getaccessbyrole(this.service.getrole(), 'customer').subscribe(res => {
      this.accessdata = res;
      //console.log(this.accessdata);

      if(this.accessdata.length>0){
        this.haveadd=this.accessdata[0].haveadd;
        this.haveedit=this.accessdata[0].haveedit;
        this.havedelete=this.accessdata[0].havedelete;
        this.LoadCustomer();
      }else{
        alert('you are not authorized to access.');
        this.router.navigate(['']);
      }

    });
  }
  displayedColumns: string[] = ['id',
  'customerName',
  'mobile',
  'email',
  'adress',
  'type',
  'status',
  'action',];
  
  updatecustomer(code: any) {

    if(this.haveedit){
       this.toastr.success('Success')
    }else{
      this.toastr.warning("You don't have access for Edit")
    }

  }
  removecustomer(code: any) {
    if(this.havedelete){
      this.toastr.success('Success')
   }else{
     this.toastr.warning("You don't have access for Delete")
   }
  }
  addcustomer() {
    if(this.haveadd){
      this.toastr.success('Success')
   }else{
     this.toastr.warning("You don't have access for Create")
   }
  }

  // ngOnInit(): void {
  //   this.getEmployeeList();
  // }
  // openAddEditEmpForm() {
  //   const dialogRef = this._dialog.open(CustomerformComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getEmployeeList();
  //       }
  //     },
  //   });
  // }

  // getEmployeeList() {
  //   this._empService.getEmployeeList().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: console.log,
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // deleteEmployee(id: number) {
  //   this._empService.deleteEmployee(id).subscribe({
  //     next: (res) => {
  //       this._coreService.openSnackBar('Employee deleted!', 'done');
  //       this.getEmployeeList();
  //     },
  //     error: console.log,
  //   });
  // }

  // openEditForm(data: any) {
  //   const dialogRef = this._dialog.open(CustomerformComponent, {
  //     data,
  //   });

  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getEmployeeList();
  //       }
  //     },
  //   });
  // }
}
