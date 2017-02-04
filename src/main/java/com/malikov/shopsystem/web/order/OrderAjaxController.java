package com.malikov.shopsystem.web.order;

import com.malikov.shopsystem.model.Order;
import com.malikov.shopsystem.model.OrderStatus;
import com.malikov.shopsystem.model.PaymentType;
import com.malikov.shopsystem.service.CustomerService;
import com.malikov.shopsystem.service.UserService;
import com.malikov.shopsystem.to.CustomerAutocompleteTo;
import com.malikov.shopsystem.to.OrderItemAutocompleteTo;
import com.malikov.shopsystem.to.OrderTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/ajax/profile/orders")
public class OrderAjaxController extends AbstractOrderController {

    @Autowired
    CustomerService customerService;

    @Autowired
    UserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<OrderTo> getAll() {
        return super.getAll();
    }

    @GetMapping(value = "/{id}")
    public OrderTo get(@PathVariable("id") int id) {
        return super.getOrderTo(id);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) {
        super.delete(id);
    }

    @PostMapping
    public ResponseEntity<String> create(@Valid OrderTo orderTo, BindingResult result, HttpEntity<String> httpEntity) {
        String json = httpEntity.getBody();
        if (result.hasErrors()) {
            StringBuilder sb = new StringBuilder();
            result.getFieldErrors().forEach(fe -> sb.append(fe.getField()).append(" ").append(fe.getDefaultMessage()).append("<br>"));
            return new ResponseEntity<>(sb.toString(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Order newOrder = new Order(customerService.getByPhoneNumber(orderTo.getPhoneNumber()),
                userService.getByLogin(SecurityContextHolder.getContext().getAuthentication().getName()),
                orderTo.getPaymentType(),
                orderTo.getStatus(),
                null);

        super.create(newOrder);

        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @PostMapping
//    public ResponseEntity<String> updateOrCreate(@Valid OrderTo orderTo, BindingResult result, HttpEntity<String> httpEntity) {
//        String json = httpEntity.getBody();
//        if (result.hasErrors()) {
//            StringBuilder sb = new StringBuilder();
//            result.getFieldErrors().forEach(fe -> sb.append(fe.getField()).append(" ").append(fe.getDefaultMessage()).append("<br>"));
//            return new ResponseEntity<>(sb.toString(), HttpStatus.UNPROCESSABLE_ENTITY);
//        }
//        if (orderTo.isNew()) {
//            super.create(OrderUtil.createNewFromTo(orderTo));
//        } else {
//            Order order = super.getOrder(orderTo.getId());
//            super.update(OrderUtil.updateFromTo(order, orderTo), orderTo.getId());
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @PostMapping(value = "{itemId}/change-name")
    public void changeName(@PathVariable("itemId") int itemId, @RequestParam("name") String name) {
        super.changeOrderItemProductName(itemId, name);
    }

    @PostMapping(value = "{itemId}/change-price")
    public void changePrice(@PathVariable("itemId") int itemId, @RequestParam("price") int price) {
        super.changeOrderItemProductPrice(itemId, price);
    }

    @PostMapping(value = "{itemId}/change-quantity")
    public void changeQuantity(@PathVariable("itemId") int itemId, @RequestParam("quantity") int quantity) {
        super.changeOrderItemProductQuantity(itemId, quantity);
    }

    @PostMapping(value = "/autocomplete-first-name", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomerAutocompleteTo> autocompleteFirstName(@RequestParam("term") String firstNameMask) {
        return super.getCustomerAutocompleteTosByFirstNameMask(firstNameMask);
    }

    @PostMapping(value = "/autocomplete-last-name", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomerAutocompleteTo> autocompleteLastName(@RequestParam("term") String lastNameMask) {
        return super.getCustomerAutocompleteTosByLastNameMask(lastNameMask);
    }

    @PostMapping(value = "/autocomplete-phone-number", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomerAutocompleteTo> autocompletePhoneNumber(@RequestParam("term") String phoneNumberMask) {
        return super.getCustomerAutocompleteTosByPhoneNumberMask(phoneNumberMask);
    }

    @PostMapping(value = "/autocomplete-city", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomerAutocompleteTo> autocompleteCity(@RequestParam("term") String cityMask) {
        return super.getCustomerAutocompleteTosByCityMask(cityMask);
    }

    @PostMapping(value = "/autocomplete-payment-type", produces = MediaType.APPLICATION_JSON_VALUE)
    public PaymentType[] autocompletePaymentType() {
        return super.getPaymentTypeAutocomplete();
    }

    @PostMapping(value = "/autocomplete-status", produces = MediaType.APPLICATION_JSON_VALUE)
    public OrderStatus[] autocompleteOrderStatus() {
        return super.getOrderStatusAutocomplete();
    }

    @PostMapping(value = "/autocomplete-order-item-name", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<OrderItemAutocompleteTo> autocompleteOrderItemName(@RequestParam("term") String productNameMask) {
        return super.getOrderItemAutocompleteTosByProductMask(productNameMask);
    }

    @PostMapping(value = "/{id}/add-order-item", produces = MediaType.APPLICATION_JSON_VALUE)
    public void addOrderItem(@PathVariable("id") int orderId) {
        super.addOrderItem(orderId);
    }
}
