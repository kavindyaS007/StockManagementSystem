package com.example.stockmngsystem.Service;

import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Model.Stock;
import com.example.stockmngsystem.Repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    @Override
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    @Override
    public String updateItem(int id, Stock stock) {
        if (stockRepository.existsById(id)){
            Stock tempStock = stockRepository.getById(id);
            tempStock.setItem(stock.getItem());
            tempStock.setStore(stock.getStore());
            tempStock.setDate(stock.getDate());
            tempStock.setCount(stock.getCount());
            stockRepository.save(tempStock);
            return "success";
        }
        return "fail";
    }

    @Override
    public String deleteItem(int id) {
        stockRepository.deleteById(id);
        return "Stock deleted";
    }
}
