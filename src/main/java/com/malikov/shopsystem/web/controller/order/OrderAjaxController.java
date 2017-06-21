package com.malikov.shopsystem.web.controller.order;

import com.malikov.shopsystem.model.OrderItem;
import com.malikov.shopsystem.model.OrderStatus;
import com.malikov.shopsystem.model.PaymentType;
import com.malikov.shopsystem.service.CustomerService;
import com.malikov.shopsystem.service.OrderItemService;
import com.malikov.shopsystem.service.OrderService;
import com.malikov.shopsystem.service.UserService;
import com.malikov.shopsystem.to.CustomerAutocompleteTo;
import com.malikov.shopsystem.to.OrderItemAutocompleteTo;
import com.malikov.shopsystem.to.OrderTo;
import com.malikov.shopsystem.util.OrderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/ajax/profile/orders")
public class OrderAjaxController extends AbstractOrderController {

    private static final Logger LOG = LoggerFactory.getLogger(OrderAjaxController.class);

    @Autowired
    CustomerService customerService;

    @Autowired
    OrderService orderService;

    @Autowired
    UserService userService;

    @Autowired
    private OrderItemService orderItemService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ModelMap getOrderTablePage(@RequestParam("start") int start, @RequestParam("length") int length) {
        ModelMap modelMap = new ModelMap("recordsTotal", orderService.getTotalQuantity());
        modelMap.addAttribute("data", orderService.getPage(start, length).stream()
                .map(OrderUtil::asTo).collect(Collectors.toList()));
        return modelMap;
    }

    @GetMapping(value = "/{id}")
    public OrderTo get(@PathVariable("id") Long orderId) {
        return OrderUtil.asTo(orderService.get(orderId));
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        orderService.delete(id);
        LOG.info("delete order {}", id);
    }

    @PostMapping
    public Long create() {
        return orderService.create().getId();
    }


    // TODO: Old name update-order-item-after-order-item-name-autocomplete
    @PutMapping(value = "{itemId}")
    public Integer updateOrderItem(@PathVariable("itemId") Long itemId
            , @RequestParam("price") int price
            , @RequestParam("productId") Long productId
            , @RequestParam("productVariationId") Long productVariationId
            , @RequestParam("orderItemName") String orderItemName
    ) {
        return super.updateOrderItemPriceProductIdProductVariationId(itemId, price, productId, productVariationId, orderItemName);
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

    @PostMapping(value = "/{id}/add-order-item")
    public Long addOrderItem(@PathVariable("id") Long orderId) {
        OrderItem orderItem = orderItemService.save(new OrderItem(orderService.get(orderId),
                null, "", 0, 1));
        LOG.info("create new {}", orderItem);
        return orderItem.getId();
    }

    @PostMapping(value = "/{id}/persist-customer-from-order")
    public void persistCustomerFromOrder(@PathVariable("id") Long orderId) {
        super.persistCustomerFromOrder(orderId);
    }

    @PostMapping(value = "/{id}/update-status")
    public void updateOrderStatus(@PathVariable("id") Long orderId, @RequestParam("status") OrderStatus status) {
        super.updateOrderStatus(orderId, status);
    }

    @PostMapping(value = "/{id}/update-comment")
    public void updateOrderStatus(@PathVariable("id") Long orderId, @RequestParam("comment") String comment) {
        super.updateOrderComment(orderId, comment);
    }

    @PostMapping(value = "/{id}/update-payment-type")
    public void updateOrderPaymentType(@PathVariable("id") Long orderId, @RequestParam("payment-type") PaymentType paymentType) {
        super.updateOrderPaymentType(orderId, paymentType);
    }

    @PostMapping(value = "/{id}/update-first-name")
    public void updateFirstName(@PathVariable("id") Long orderId, @RequestParam("first-name") String firstName) {
        super.updateFirstName(orderId, firstName);
    }

    @PostMapping(value = "/{id}/update-last-name")
    public void updateLastName(@PathVariable("id") Long orderId, @RequestParam("last-name") String lastName) {
        super.updateLastName(orderId, lastName);
    }

    @PostMapping(value = "/{id}/update-phone-number")
    public void updatePhoneNumber(@PathVariable("id") Long orderId, @RequestParam("phone-number") String phoneNumber) {
        super.updatePhoneNumber(orderId, phoneNumber);
    }

    @PostMapping(value = "/{id}/set-customer-for-order-by-customer-id")
    public void setCustomerForOrder(@PathVariable("id") Long orderId,
                                    @RequestParam("customerId") Long customerId
    ) {
        super.setCustomerForOrder(orderId, customerId);
    }

    @PostMapping(value = "/{id}/update-city")
    public void updateCity(@PathVariable("id") Long orderId, @RequestParam("city") String city) {
        super.updateCity(orderId, city);
    }

    @PostMapping(value = "/{id}/update-post-office")
    public void updatePostOffice(@PathVariable("id") Long orderId, @RequestParam("post-office") String postOffice) {
        super.updatePostOffice(orderId, postOffice);
    }

    @PostMapping(value = "/{id}/update-total-sum")
    public void updateTotalSum(@PathVariable("id") Long orderId, @RequestParam("total-sum") Integer totalSum) {
        super.updateTotalSum(orderId, totalSum);
    }

    @DeleteMapping(value = "/order-item/{orderItemId}")
    public void deleteOrderItem(@PathVariable("orderItemId") Long orderItemId) {
        super.deleteOrderItem(orderItemId);
    }

}
