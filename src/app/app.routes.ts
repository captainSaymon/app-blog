import { Routes } from '@angular/router';
import { BlogItemDetails } from './components/blog-item-details/blog-item-details';
import { BlogHome } from './components/blog-home/blog-home';
import { Home } from './components/home/home';
import { authGuard } from './services/auth.guard';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';


export const routes: Routes = [
   { path: '', component: Home },
   { path: 'login', component: Login },
   { path: 'signup', component: Signup },
   { 
      path: 'blog', 
      component: BlogHome,
	   canActivate: [authGuard] 
   },
   { path: 'blog/detail/:id', component: BlogItemDetails },
];