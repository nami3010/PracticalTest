import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  @Input() id;
  @Input() username;
  constructor(public activeModal: NgbActiveModal, public toastr: ToastrManager) { }

  ngOnInit() {
  }
  delete() {
    fetch('https://jsonplaceholder.typicode.com/posts/{{this.id}}', {
      method: 'DELETE'
    })
    this.toastr.successToastr("user deleted successfully")
    this.activeModal.dismiss();
  }
  cancle() {
    this.activeModal.dismiss();
  }
}
