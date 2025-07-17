import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
    selector: 'product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductComponent]
})
export class ProductListComponent {

}
