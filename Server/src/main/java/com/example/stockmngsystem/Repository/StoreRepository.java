package com.example.stockmngsystem.Repository;

import com.example.stockmngsystem.Model.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{
}
