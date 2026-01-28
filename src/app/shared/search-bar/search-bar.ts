import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TextFormatDirective } from '../../directives/text-format';


@Component({
 selector: 'search-bar',
 standalone: true,
 imports: [FormsModule, TextFormatDirective, CommonModule],
 templateUrl: './search-bar.html',
 styleUrl: './search-bar.scss'
})
export class SearchBar implements OnInit {
  public filterText: string = '';
  showSearchBar = false;
  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.filterText = params['name'];
    this.name.emit(this.filterText);
  });
  }

  toggleSearch() {
    this.showSearchBar = !this.showSearchBar;
  }

  sendFilter(): void {
    this.router.navigate(['/blog'], {
      queryParams: { name: this.filterText?.toLowerCase() }
    });
    this.name.emit(this.filterText);
  }
}
