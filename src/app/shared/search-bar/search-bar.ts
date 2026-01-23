import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";


@Component({
 selector: 'search-bar',
 standalone: true,
 imports: [FormsModule],
 templateUrl: './search-bar.html',
 styleUrl: './search-bar.scss'
})
export class SearchBar implements OnInit {
 public filterText: string = '';

 @Output() name = new EventEmitter<string>();

 constructor() {
 }

 ngOnInit(): void {
 }

 sendFilter(): void {
   this.name.emit(this.filterText);
 }
}
