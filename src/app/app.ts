import { Component, signal } from '@angular/core';
import { BlogHome } from "./components/blog-home/blog-home";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-blog');
}
