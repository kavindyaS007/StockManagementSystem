package com.example.stockmngsystem.Controller;

import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Model.Store;
import com.example.stockmngsystem.Service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/stores")
@CrossOrigin
public class StoreController {

    @Autowired
    private StoreService storeService;

    @PostMapping("/add")
    public String addStore(@RequestBody Store store){
        System.out.println("working add store");
        storeService.saveStore(store);
        return "New store added";
    }

    @GetMapping("/getAll")
    public List<Store> list(){
        System.out.println("working get all stores");
        return storeService.getAllStore();
    }

    @GetMapping("/{id}")
    public Optional<Store> getStore(@PathVariable int id){
        return storeService.getStore(id);
    }

    @PutMapping("/edit/{id}")
    public String edit(@PathVariable int id, @RequestBody Store store){
        storeService.updateStore(id, store);
        return "Store is updated";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        storeService.deleteStore(id);
        return "Store deleted";
    }
}
