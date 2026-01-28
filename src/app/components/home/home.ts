import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home { }
