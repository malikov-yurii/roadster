package com.malikov.shopsystem.service;

import com.malikov.shopsystem.model.Product;
import com.malikov.shopsystem.dto.ProductDto;

import java.util.List;

public interface ProductService {

    Product get(Long id);

    void delete(Long id);

    void update(Product product);

    void enableUnlimited(Long id, boolean unlimited);

    void enableHasVariations(Long id, boolean hasVariations);

    List<Product> getByProductNameMask(String productNameMask);

    List<ProductDto> getPage(int pageNumber, int pageCapacity);

    //Collection<Product> getByCategoryId(Long categoryId);
    //Collection<Product> getAllQuantityLessThan(int quantity);
    //Product create(Product product);
}
