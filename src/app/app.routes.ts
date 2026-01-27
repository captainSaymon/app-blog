import { Routes } from '@angular/router';
import { BlogItemDetails } from './components/blog-item-details/blog-item-details';
import { BlogHome } from './components/blog-home/blog-home';
import { Home } from './components/home/home';


export const routes: Routes = [
   { path: '', component: Home },
   { path: '', component: BlogHome },
   { path: 'blog/detail/:id', component: BlogItemDetails },
];