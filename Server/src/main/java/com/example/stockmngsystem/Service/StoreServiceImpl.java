package com.example.stockmngsystem.Service;

import com.example.stockmngsystem.Model.Store;
import com.example.stockmngsystem.Repository.StoreRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreRepository storeRepository;

    @Override
    public Store saveStore(Store store) {
        return storeRepository.save(store);
    }

    @Override
    public List<Store> getAllStore() {
        return storeRepository.findAll();
    }

    @Override
    public Optional<Store> getStore(int id) {
        return storeRepository.findById(id);
    }

    @Override
    public String updateStore(int id, Store store) {
        if (storeRepository.existsById(id)){
            Store tempStore = storeRepository.getById(id);
            tempStore.setLocation(store.getLocation());
            tempStore.setCapacity(store.getCapacity());
            storeRepository.save(tempStore);
            return "Store updated";
        }
        return "update fail";
    }

    @Override
    public String deleteStore(int id) {
        storeRepository.deleteById(id);
        return "Store deleted";
    }

}
