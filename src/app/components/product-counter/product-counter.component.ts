import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-counter.component.html',
  styleUrl: './product-counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCounterComponent {
  @Input() cantProducts: number = 0;
 }
