import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdduserComponent,
    DeleteuserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdduserComponent, DeleteuserComponent, EdituserComponent]
})
export class AppModule { }
