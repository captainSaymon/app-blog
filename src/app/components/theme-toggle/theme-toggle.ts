import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.scss']
})
export class ThemeToggle {

  constructor(private themeService: ThemeService) {}

  get darkMode$() {
    return this.themeService.darkMode$;
  }

  toggle(): void {
    this.themeService.toggleTheme();
  }
}

