package com.malikov.shopsystem.service;

import com.malikov.shopsystem.dto.CustomerAutocompleteDto;
import com.malikov.shopsystem.dto.CustomerDto;
import com.malikov.shopsystem.model.Customer;
import com.malikov.shopsystem.model.Order;
import com.malikov.shopsystem.repository.CustomerRepository;
import com.malikov.shopsystem.repository.OrderRepository;
import com.malikov.shopsystem.util.CustomerConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.malikov.shopsystem.util.CustomerConverter.CustomerAutocompleteDtoListOf;
import static com.malikov.shopsystem.util.CustomerConverter.updateFromTo;
import static com.malikov.shopsystem.util.ValidationUtil.*;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private OrderRepository orderRepository;


    public Customer create(CustomerDto customerDto) {
        checkIsNew(customerDto, "customer must be new");
        return customerRepository.save(CustomerConverter.createNewFromTo(customerDto));
    }

    public void update(CustomerDto customerDto) {
        checkIsNotNew(customerDto, "customer must not be new");
        Customer customer = customerRepository.findOne(customerDto.getId());
        customerRepository.save(updateFromTo(customer, customerDto));
    }

    public CustomerDto get(Long id) {
        return CustomerConverter.asDto(checkNotFoundById(customerRepository.findOne(id), id));
    }

    public void delete(Long id) {
        customerRepository.delete(id);
    }

    public List<CustomerAutocompleteDto> getByLastNameMask(String lastNameMask) {
        return CustomerAutocompleteDtoListOf(
                customerRepository.getByLastNameLike("%" + lastNameMask + "%"));
    }

    public List<CustomerAutocompleteDto> getByPhoneNumberMask(String phoneNumberMask) {
        return CustomerAutocompleteDtoListOf(
                customerRepository.getByPhoneNumberLike("%" + phoneNumberMask + "%"));
    }

    public List<CustomerAutocompleteDto> getByCityMask(String cityMask) {
        return CustomerAutocompleteDtoListOf(customerRepository.getByCityLike("%" + cityMask + "%"));
    }

    public Customer persistCustomerFromOrder(Long orderId) {
        Order order = orderRepository.findOne(orderId);
        if (order.getCustomer() != null) {
            checkIsNew(order.getCustomer(), "Customer is not new");
        }
        order.setCustomer(customerRepository.save(
                new Customer(order.getCustomerFirstName()
                        , order.getCustomerLastName()
                        , order.getCustomerPhoneNumber()
                        , order.getDestinationCity()
                        , order.getDestinationPostOffice()
                        , null
                        , null)));
        return orderRepository.save(order).getCustomer();
    }

    public Page<CustomerDto> getPage(int pageNumber, int pageCapacity) {
        Page<Customer> page = customerRepository.findAll(new PageRequest(pageNumber, pageCapacity));
        return new PageImpl<>(
                page.getContent().stream()
                        .map(CustomerConverter::asDto)
                        .collect(Collectors.toList()),
                null,
                page.getTotalElements());
    }

}
