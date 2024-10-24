import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductServiceService } from './services/product-service.service';
import { Product } from './model';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCounterComponent } from './components/product-counter/product-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductFormComponent, ProductCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductServiceService]
})
export class AppComponent implements OnInit {
  productList = signal<Product[]>([]);
  productService = inject(ProductServiceService);
  cantProducts = signal(0);

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.productList.set(products) 
    this.cantProducts.set(products.length);
  }

  onProductAdded(event: Product) {
    const products = this.productList();
    products.push(event);
    const count = this.cantProducts();

    this.productList.set([...products]);
    this.cantProducts.set(count + 1);
  }

}
