package com.automobile.fourwheeler;
import com.automobile.*;
public class Logan extends Vehicle {
    private int speed;
    private String location;
    public String getModelName(){
        return "Logan";
    }
    public String getRegistrationNumber(){
        return "AP 5032";
    }
    public String getOwnerName(){
        return "John Doe";
    }
    public int getSpeed(){
        return this.speed;
    }
    public int gps(String location){
       this.location=location;
       return Integer.parseInt(location);
    }
}
