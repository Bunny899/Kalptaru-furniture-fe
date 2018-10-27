import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { ProductComponent } from './product/product.component';
const arr:Routes=[
    {path:'',component:LoginComponent},
    {path:'workersignup',component:WorkerSignupComponent},
    {path:'product',component:ProductComponent}
];

export const routing=RouterModule.forRoot(arr);
