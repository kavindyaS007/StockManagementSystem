package com.example.stockmngsystem.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
@Entity
public class Store {

    @Column(name="store_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

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
}
