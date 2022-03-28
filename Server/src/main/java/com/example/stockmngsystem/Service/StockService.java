package com.example.stockmngsystem.Service;

import com.example.stockmngsystem.Model.Stock;

import java.util.List;

public interface StockService {
    public Stock saveStock(Stock stock);
    public List<Stock> getAllStocks();

    public String updateItem(int id, Stock stock);

    public String deleteItem(int id);
}
