package com.example.stockmngsystem.Controller;


import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/items")
@CrossOrigin
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping("/add")
    public String add(@RequestBody Item item){

        System.out.println("working add store item");
        itemService.saveItem(item);
        return "New item is added";
    }

    @GetMapping("/getAll")
    public List<Item> list(){
        System.out.println("working get all store items");
        return itemService.getAllStoreItems();

    }
    //localhost:8080/store/add/
    // { name : some name}


    //localhost:8080/store/10
    @GetMapping("/{id}")
    public Optional<Item> getItem(@PathVariable int id){
        return itemService.getItem(id);
    }

    @PutMapping("/edit/{id}")
    public String edit(@PathVariable int id, @RequestBody Item item){
        itemService.updateItem(id, item);
        return "Item is updated";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        itemService.deleteItem(id);
        return "Item deleted";
    }

}
