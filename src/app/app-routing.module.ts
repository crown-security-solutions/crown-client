import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { CallReportingComponent } from './call-reporting/call-reporting.component';
import { SiteComponent } from './site/site.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { AdhocNewUserComponent } from './adhoc-new-user/adhoc-new-user.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'call-reporting',
		component: CallReportingComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'view-report',
		component: ViewReportComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'adhoc-new-users',
		component: AdhocNewUserComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'users',
		component: UserComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'sites',
		component: SiteComponent,
		canActivate: [AuthGuard]
	},
	// otherwise redirect to home
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
