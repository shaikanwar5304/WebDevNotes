package com.automobile.fourwheeler;
import com.automobile.*;
public class Ford extends Vehicle {
    private int speed;
    private int temp;
    public String getModelName(){
        return "Logan";
    }
    public String getRegistrationNumber(){
        return "AP 5033";
    }
    public String getOwnerName(){
        return "Mohammad Amir";
    }
    public int getSpeed(){
        return this.speed;
    }
    public int tempControl(int temp){
       this.temp=temp;
       return temp;
    }
}
