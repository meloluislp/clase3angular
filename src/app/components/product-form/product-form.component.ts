import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent { 

  @Output() productAdded = new EventEmitter<Product>();
  name: string = '';
  price: number = 0;
  description: string = '';

  addProduct() {
    
    const product: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.name,
      price: this.price,
      description: this.description
    };
    this.productAdded.emit(product);
  }
}
