import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent { 
  @Input() product: Product | undefined;
}
