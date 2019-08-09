import { EdituserComponent } from './../edituser/edituser.component';
import { AdduserComponent } from './../adduser/adduser.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';
import { UserlistService } from './userlist.service'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import{DeleteuserComponent} from '../deleteuser/deleteuser.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  userList: Array<any>;
  modalReference: any;
  constructor(private userservice: UserlistService, private modalService: NgbModal) { }
  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  ngAfterViewInit() {
    // let scripts = [];
    // if (!_window().isScriptLoadedUsermgmt) {
    //   scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
    // }
    // let that = this;
    // this._script.loadScripts('app-userlist',
    //   scripts).then(function () {
    //     _window().isScriptLoadedUsermgmt = true;
    //     that._script.loadScripts('app-userlist', ['assets/demo/default/custom/crud/datatables/basic/paginations.js']);
    //   });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ngOnInit() {
    // _window().my = _window().my || {};
    // _window().my.usermgmt = _window().my.usermgmt || {};
    // if (typeof (_window().isScriptLoadedUsermgmt) == "undefined") {
    //   _window().isScriptLoadedUsermgmt = false;
    // }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      processing: true,
    };
    this.getUsers();
  }


  getUsers() {
    // this.spinnerService.show();
    this.userservice.getAllUsers().subscribe((response: any) => {
      this.userList = response;
      this.dtOptions.pageLength = response.total;
      this.dtTrigger.next();
      console.log("this.restaurantList", response)
    })
  }
  adduser() {
    const modalRef = this.modalService.open(AdduserComponent);
  }
  edituser(user) {
 
    const modalRef = this.modalService.open(EdituserComponent);
    modalRef.componentInstance.id =user?user.id:"";
    modalRef.componentInstance.username =user?user.username:"";
    modalRef.componentInstance.website =user?user.website:"";
    modalRef.componentInstance.phone =user?user.phone:"";
    modalRef.componentInstance.email =user?user.email:"";
    modalRef.componentInstance.street =user?user.address.street:"";
    modalRef.componentInstance.suite =user?user.address.suite:"";
    modalRef.componentInstance.city =user?user.address.city:"";
    modalRef.componentInstance.zipcode =user?user.address.zipcode:"";
    modalRef.componentInstance.lat =user?user.address.geo.lat:"";
    modalRef.componentInstance.lng =user?user.address.geo.lng:"";
    modalRef.componentInstance.bs =user?user.company.bs:"";
    modalRef.componentInstance.catchPhrase =user?user.company.catchPhrase:"";
    modalRef.componentInstance.companyname =user?user.company.name:"";
    modalRef.componentInstance.name =user?user.name:"";
    
  }
  deleteuser(user) {
    const modalRef = this.modalService.open( DeleteuserComponent);
    modalRef.componentInstance.id =user?user.id:"";
    modalRef.componentInstance.username =user?user.username:"";
  }

}
