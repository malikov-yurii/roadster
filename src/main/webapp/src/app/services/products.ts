import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService, StoreHelper, SearchService } from './index';

@Injectable()
export class ProductService {

  private productsPath: string = 'product';

  constructor(
    private api: ApiService,
    private storeHelper: StoreHelper,
    private searchService: SearchService
  ) {}

  getAllProducts() {
    return this.api.get(`${this.productsPath}?pageNumber=0&pageCapacity=10000`)
      .do(({totalElements, elements}) => {
        elements.sort((a, b) => a.productId - b.productId);
        this.storeHelper.update(this.productsPath, elements);
      });
  }


  list(searchQuery: string = '', page: number = 1, length: number = 10) {
    let productResult = this.searchService.search(this.storeHelper.get(this.productsPath), searchQuery);

    let productResultPage = productResult.slice((page - 1) * length, page * length);

    return Observable.of({
      products: productResultPage,
      filtered: productResult.length
    });
  }

}
