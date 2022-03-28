package com.example.stockmngsystem.Service;
import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Model.Store;
import java.util.List;
import java.util.Optional;


public interface StoreService {

    public Store saveStore(Store item);
    public List<Store> getAllStore();

    public Optional<Store> getStore(int id);

    public String updateStore(int id, Store store);

    public String deleteStore(int id);
}
