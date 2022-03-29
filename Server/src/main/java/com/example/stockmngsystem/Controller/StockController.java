package com.example.stockmngsystem.Controller;


import com.example.stockmngsystem.Model.Item;
import com.example.stockmngsystem.Model.Stock;
import com.example.stockmngsystem.Service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stocks")
@CrossOrigin
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping("/add")
    public String addStock(@RequestBody Stock stock){
        //System.out.println("working, stock updated");
        stockService.saveStock(stock);
        return "Stock updated.";
    }

    @GetMapping("/getAll")
    public List<Stock> list(){
        System.out.println("working, get all stocks");
        return stockService.getAllStocks();
    }

    @PutMapping("/edit/{id}")
    public String edit(@PathVariable int id, @RequestBody Stock stock){
        stockService.updateStock(id, stock);
        return "stock is updated";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        stockService.deleteStock(id);
        return "Stock deleted";
    }
}
