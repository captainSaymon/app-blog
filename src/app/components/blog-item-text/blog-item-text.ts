import { Component, Input } from '@angular/core';
import { SummaryPipe } from '../../pipes/summary-pipe';

@Component({
  selector: 'blog-item-text',
  imports: [SummaryPipe],
  templateUrl: './blog-item-text.html',
  styleUrl: './blog-item-text.scss',
})
export class BlogItemText {
  @Input() text?: string;
}
