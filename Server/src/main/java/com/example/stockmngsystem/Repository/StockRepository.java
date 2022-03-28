package com.example.stockmngsystem.Repository;

import com.example.stockmngsystem.Model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Integer> {
}
