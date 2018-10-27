import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
const arr:Routes=[
    {path:'',component:LoginComponent},
    {path:'workersignup',component:WorkerSignupComponent}
];

export const routing=RouterModule.forRoot(arr);
