package com.example.stockmngsystem.Repository;

import com.example.stockmngsystem.Model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository  extends JpaRepository<Item, Integer> {
}
