package com.rmondal.lostAndFoundBackend.repository;

import com.rmondal.lostAndFoundBackend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}
