package com.example.stockmngsystem.Service;

import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Repository.ItemRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;
    @Override
    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> getAllStoreItems() {
        return itemRepository.findAll();
    }

    @Override
    public Optional<Item> getItem(int id) {
        return itemRepository.findById(id);
    }

    @Override
    public String updateItem(int id, Item item) {
        if (itemRepository.existsById(id)){
            Item tempItem = itemRepository.getById(id);
            tempItem.setItemName(item.getItemName());
            itemRepository.save(tempItem);
            return "success";
        }
        return "fail";
    }

    @Override
    public String deleteItem(int id) {
        itemRepository.deleteById(id);
        return "Item deleted";
    }
}
