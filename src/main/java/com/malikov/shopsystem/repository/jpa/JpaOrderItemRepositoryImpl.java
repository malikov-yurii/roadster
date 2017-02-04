package com.malikov.shopsystem.repository.jpa;

import com.malikov.shopsystem.model.OrderItem;
import com.malikov.shopsystem.repository.OrderItemRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional(readOnly = true)
public class JpaOrderItemRepositoryImpl implements OrderItemRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public OrderItem save(OrderItem orderItem) {
        if (orderItem.isNew()) {
            em.persist(orderItem);
            return orderItem;
        } else {
            return em.merge(orderItem);
        }
    }

    @Override
    @Transactional
    public boolean delete(int id) {
        return em.createNamedQuery(OrderItem.DELETE).setParameter("id", id).executeUpdate() != 0;
    }

    @Override
    public OrderItem get(int id) {
        return em.find(OrderItem.class, id);
    }

    @Override
    public List<OrderItem> getAll() {
        return em.createNamedQuery(OrderItem.ALL, OrderItem.class).getResultList();
    }



    //    @Override
//    public Collection<OrderItemExtended> getByCustomerId(int customerId) {
//        return em.createNamedQuery(OrderItemExtended.BY_CUSTOMER_ID, OrderItemExtended.class)
//                .setParameter("customerId", customerId).getResultList();
//    }

//    @Override
//    public Collection<OrderItemExtended> getByProductId(int productId) {
//        return em.createNamedQuery(OrderItemExtended.BY_PRODUCT_ID, OrderItemExtended.class)
//                .setParameter("productId", productId).getResultList();
//    }
}
