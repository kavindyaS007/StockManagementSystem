package com.example.stockmngsystem.Service;
import com.example.stockmngsystem.Model.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {

    public Item saveItem(Item item);
    public List<Item> getAllStoreItems();

    public Optional<Item> getItem(int id);

    public String updateItem(int id, Item item);

    public String deleteItem(int id);
}
