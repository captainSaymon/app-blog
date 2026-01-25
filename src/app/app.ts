import { Component, signal } from '@angular/core';
import { Blog } from './components/blog/blog';
import { BlogHome } from "./components/blog-home/blog-home";

@Component({
  selector: 'app-root',
  imports: [Blog, BlogHome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-blog');
}
