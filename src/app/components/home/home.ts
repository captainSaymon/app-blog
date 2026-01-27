import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { }
