import { Component, signal } from '@angular/core';
import { BlogHome } from "./components/blog-home/blog-home";

@Component({
  selector: 'app-root',
  imports: [BlogHome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-blog');
}
