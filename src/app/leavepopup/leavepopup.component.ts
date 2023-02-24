import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../leave/auth.services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-leavepopup',
  templateUrl: './leavepopup.component.html',
  styleUrls: ['./leavepopup.component.css']
})
export class LeavepopupComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<LeavepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.service.getuserrole().subscribe(res => {
      this.rolelist = res;
    });
    
    

  }
  ngOnInit(): void {
    if (this.data.usercode != '' && this.data.usercode != null) {
      this.loaduserdata(this.data.usercode);
    }
  }
  rolelist: any;
  editdata: any;

  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    fromdate: this.builder.control(''),
    todate: this.builder.control(''),
    email: this.builder.control(''),
    reason: this.builder.control(''),
  
    role: this.builder.control('', Validators.required),
    // isactive: this.builder.control(false)
  });

  loaduserdata(code: any) {
    this.service.GetUserbyCode(code).subscribe(res => {
      this.editdata = res;
      console.log(this.editdata);
      this.registerform.setValue({
        id: this.editdata.id, 
        name: this.editdata.name,
        fromdate: this.editdata.fromdate,
         email: this.editdata.email,
          reason: this.editdata.reason,
        role: this.editdata.role,
        todate: this.editdata.todate,
       
        //  isactive: this.editdata.isactive,
      });
    });
  }
  UpdateUser() {
    this.service.updateuser(this.registerform.value.id, this.registerform.value).subscribe(res => {
      this.toastr.success('Updated successfully.');
      this.dialogref.close();
    });
  }

}
