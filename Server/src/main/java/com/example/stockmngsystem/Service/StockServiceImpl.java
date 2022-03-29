package com.example.stockmngsystem.Service;

import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Model.Stock;
import com.example.stockmngsystem.Model.Store;
import com.example.stockmngsystem.Repository.StockRepository;
import com.example.stockmngsystem.Repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private StoreRepository storeRepository;

    @Override
    public String saveStock(Stock stock) {
        Store ownedStore = storeRepository.getById(stock.getStore().getId());
        System.out.println("Store capacity :" + ownedStore.getCapacity());
        System.out.println("Stocks by Store :" + ownedStore.getStocks());
        System.out.println("Stocks Usage :" + ownedStore.getCurrentStorageUse());
        if(ownedStore.getCapacity() > ownedStore.getCurrentStorageUse() + stock.getCount()){
            stockRepository.save(stock);
            return "successfully added stock";
        }
        else{
            return "failed to add, capacity limit reached.";
        }
    }



    @Override
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    @Override
    public String updateStock(int id, Stock stock) {
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
    public String deleteStock(int id) {
        stockRepository.deleteById(id);
        return "Stock deleted";
    }
}
