package com.example.stockmngsystem.Model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Stock {

    @Column(name = "stock_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne()
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    @ManyToOne()
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;

    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "stock_date", nullable = false)
    private Date date;

    @Column(name = "count", nullable = false)
    private  int count;

    public int getId() {
        return id;
    }

    public Item getItem() {
        return item;
    }

    public Store getStore() {
        return store;
    }

    public Date getDate() {
        return date;
    }

    public int getCount() {
        return count;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
