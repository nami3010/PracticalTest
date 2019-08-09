import { UserlistService } from './../userlist/userlist.service';

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  companyList: Array<any>;
  userForm: FormGroup;

  loading = false;
  submitted = false;
  constructor(public toastr: ToastrManager, private userservice: UserlistService, public activeModal: NgbActiveModal, private _formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.buildCompanyForm();
  }

  get f() {
    return this.userForm.controls;
  }

  buildCompanyForm() {

    this.userForm = this._formBuilder.group({
      id: ['', [Validators.required]],
      city: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]],
      street: ['', [Validators.required]],
      suite: ['', [Validators.required]],
      zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]{1,7}$/)]],
      bs: ['', [Validators.required]],
      catchPhrace: ['', [Validators.required]],
      companyname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]],
      username: ['', [Validators.required]],
      website: ['', [Validators.required]],
    });

  }
  addCompany() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    else {
      var addObj = {

        email: this.userForm.controls['email'].value,
        id: this.userForm.controls['id'].value,
        name: this.userForm.controls['name'].value,
        phone: this.userForm.controls['phone'].value,
        username: this.userForm.controls['username'].value,
        website: this.userForm.controls['website'].value,
        address: {
          street: this.userForm.controls['street'].value,
          suite: this.userForm.controls['suite'].value,
          city: this.userForm.controls['city'].value,
          zipcode: this.userForm.controls['zipcode'].value,
          geo: {
            lat: this.userForm.controls['lat'].value,
            lng: this.userForm.controls['lng'].value,
          }
        },
        company: {
          bs: this.userForm.controls['bs'].value,
          catchPhrace: this.userForm.controls['catchPhrace'].value,
          name: this.userForm.controls['name'].value,
        }

      }
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          addObj
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
    }
    this.toastr.successToastr("User Added Successfully")
    this.activeModal.dismiss();
  }
}


