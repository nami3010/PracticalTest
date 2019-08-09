import { UserlistComponent } from './userlist/userlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
// {path: 'login', loadChildren: './auth/auth.module#AuthModule'},
	{
		path: 'userlist',
		component: UserlistComponent,
		
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes,{useHash:true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }