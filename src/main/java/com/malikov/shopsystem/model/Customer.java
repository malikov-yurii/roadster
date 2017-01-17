package com.malikov.shopsystem.model;

import javax.persistence.*;
import java.util.Objects;

@NamedQueries({
        @NamedQuery(name = Customer.DELETE, query = "DELETE FROM Customer c WHERE c.id=:id"),
        @NamedQuery(name = Customer.BY_NAME, query = "SELECT c FROM Customer c WHERE c.name=:name"),
        @NamedQuery(name = Customer.BY_LAST_NAME, query = "SELECT c FROM Customer c WHERE c.lastName=:lastName"),
        @NamedQuery(name = Customer.BY_CITY, query = "SELECT c FROM Customer c WHERE c.city=:city"),
        @NamedQuery(name = Customer.BY_EMAIL, query = "SELECT c FROM Customer c WHERE c.email=:email"),
        @NamedQuery(name = Customer.BY_PHONE, query = "SELECT c FROM Customer c WHERE c.phoneNumber=:phoneNumber"),
        @NamedQuery(name = Customer.ALL_SORTED, query = "SELECT c FROM Customer c ORDER BY c.lastName"),
})
@Entity
@Table(name = "customers", uniqueConstraints = {
        @UniqueConstraint(columnNames = "phone_number", name = "customers_phone_number_idx"),
        @UniqueConstraint(columnNames = "email", name = "customers_email_idx")
})
public class Customer extends NamedEntity {

    public static final String DELETE = "Customer.delete";
    public static final String ALL_SORTED = "Customer.getAllSorted";
    public static final String BY_EMAIL = "Customer.getByEmail";
    public static final String BY_PHONE = "Customer.getByPhone";
    public static final String BY_NAME = "Customer.getByName";
    public static final String BY_LAST_NAME = "Customer.getByLastName";
    public static final String BY_CITY = "Customer.getByCity";

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone_number", unique = true)
    private String phoneNumber;

    @Column(name = "city")
    private String city;

    @Column(name = "nova_poshta")
    private String novaPoshta;

    @Column(name = "email", unique = true)
    private String email;

    public Customer() {
    }

    public Customer(Integer id, String name, String lastName, String phoneNumber, String city, String novaPoshta, String email) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.novaPoshta = novaPoshta;
        this.email = email;
    }

    public Customer(String name, String lastName, String phoneNumber, String city, String novaPoshta, String email) {
        this(null, name, lastName, phoneNumber, city, novaPoshta, email);
    }

    public Customer(Customer c) {
        this(c.getId(), c.getName(), c.getLastName(), c.getPhoneNumber(), c.getCity(), c.getNovaPoshta(), c.getEmail());
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getNovaPoshta() {
        return novaPoshta;
    }

    public void setNovaPoshta(String novaPoshta) {
        this.novaPoshta = novaPoshta;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Customer)) return false;
        if (!super.equals(o)) return false;
        Customer customer = (Customer) o;
        return Objects.equals(lastName, customer.lastName) &&
                Objects.equals(phoneNumber, customer.phoneNumber) &&
                Objects.equals(city, customer.city) &&
                Objects.equals(novaPoshta, customer.novaPoshta) &&
                Objects.equals(email, customer.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), lastName, phoneNumber, city, novaPoshta, email);
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", city='" + city + '\'' +
                ", novaPoshta='" + novaPoshta + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

}