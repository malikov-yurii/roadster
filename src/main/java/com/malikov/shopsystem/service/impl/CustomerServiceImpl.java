package com.malikov.shopsystem.service.impl;

import com.malikov.shopsystem.model.Customer;
import com.malikov.shopsystem.repository.CustomerRepository;
import com.malikov.shopsystem.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

import static com.malikov.shopsystem.util.ValidationUtil.*;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repository;

    @Override
    public Customer create(Customer customer) {
        return repository.save(customer);
    }

    @Override
    public void update(Customer customer) {
        checkNotFoundById(repository.save(customer), customer.getId());
    }

    @Override
    public Customer get(Long id) {
        return checkNotFoundById(repository.get(id), id);
    }

    @Override
    public List<Customer> getAll() {
        return repository.getAll();
    }

    @Override
    public void delete(Long id) {
        checkNotFoundById(repository.delete(id), id);
    }

    @Override
    public Collection<Customer> getByName(String name) {
        return repository.getByName(name);
    }

    @Override
    public Collection<Customer> getByLastName(String lastName) {
        return repository.getByLastName(lastName);
    }

    @Override
    public Collection<Customer> getByFirstNameMask(String firstNameMask) {
        return repository.getByFirstNameMask(firstNameMask);
    }

    @Override
    public Collection<Customer> getByLastNameMask(String lastNameMask) {
        return repository.getByLastNameMask(lastNameMask);
    }

    @Override
    public Collection<Customer> getByPhoneNumberMask(String phoneNumberMask) {
        return repository.getByPhoneNumberMask(phoneNumberMask);
    }

    @Override
    public Collection<Customer> getByCityMask(String cityMask) {
        return repository.getByCityMask(cityMask);
    }

    @Override
    public Collection<Customer> getByCity(String city) {
        return repository.getByCity(city);
    }

    @Override
    public Customer getByEmail(String email) {
        return checkNotFound(repository.getByEmail(email), "not found by email=" + email);
    }

    @Override
    public Customer getByPhoneNumber(String phoneNumber) {
        return checkNotFound(repository.getByPhoneNumber(phoneNumber), "not found by phone number=" + phoneNumber);
    }

}