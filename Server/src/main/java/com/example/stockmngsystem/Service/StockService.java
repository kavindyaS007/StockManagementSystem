package com.example.stockmngsystem.Service;

import com.example.stockmngsystem.Model.Stock;

import java.util.List;

public interface StockService {
    public String saveStock(Stock stock);
    public List<Stock> getAllStocks();

    public String updateStock(int id, Stock stock);

    public String deleteStock(int id);
}
