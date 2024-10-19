import { Routes } from '@angular/router';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: AuthButtonComponent},
    {path: 'heroes', component: UserProfileComponent},
];
