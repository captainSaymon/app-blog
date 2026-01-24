import { Routes } from '@angular/router';
import { BlogItemDetails } from './components/blog-item-details/blog-item-details';
import { BlogHome } from './components/blog-home/blog-home';


export const routes: Routes = [
   { path: '', component: BlogHome },
   { path: 'blog/detail/:id', component: BlogItemDetails },
];