import { Routes } from '@angular/router';
import { Blog } from './components/blog/blog';
import { BlogItemDetails } from './components/blog-item-details/blog-item-details';


export const routes: Routes = [
   { path: '', component: Blog },
   { path: 'blog/detail/:id', component: BlogItemDetails },
];