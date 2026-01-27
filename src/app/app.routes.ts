import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
 
export const routes: Routes = [
  {
	path: '',
	loadComponent: () => import('./components/home/home')
  	.then(m => m.Home)
  },
  {
	path: 'blog',
	loadComponent: () => import('./components/blog-home/blog-home')
  	.then(m => m.BlogHome),
	canActivate: [authGuard]
  },
  {
	path: 'blog/detail/:id',
	loadComponent: () => import('./components/blog-item-details/blog-item-details')
  	.then(m => m.BlogItemDetails)
  },
  {
	path: 'login',
	loadComponent: () => import('./components/login/login')
  	.then(m => m.Login)
  },
  {
	path: 'signup',
	loadComponent: () => import('./components/signup/signup')
  	.then(m => m.Signup)
  }
];
