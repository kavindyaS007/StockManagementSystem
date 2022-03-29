package com.example.stockmngsystem.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Store {

    @Column(name="store_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnore
    @OneToMany(mappedBy = "store" , cascade = CascadeType.ALL)
    private List<Stock> stocks;

    @Column(name="store_location", length=50, nullable=false)
    private String location;

    @Column(name="store_capacity", nullable=false)
    private int capacity;

    public int getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public List<Stock> getStocks() {
        return stocks;
    }

    public void setStocks(List<Stock> stocks) {
        this.stocks = stocks;
    }

    public int getCurrentStorageUse(){
        int sum = 0;
        for(Stock st : this.stocks){
            sum += st.getCount();
        }
        return sum;
    }
}
