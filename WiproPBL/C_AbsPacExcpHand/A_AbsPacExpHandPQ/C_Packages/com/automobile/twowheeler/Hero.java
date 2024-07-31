package com.automobile.twowheeler;
import com.automobile.Vehicle;
public class Hero extends Vehicle{
    int speed;
    public String getModelName(){
        return "Splender";
    }
    public String getRegistrationNumber(){
        return "AP 5030";
    }
    public String getOwnerName(){
        return "John";
    }
    public int getSpeed(){
        return this.speed;
    }
    public void radio(){
        System.out.println("playing radio");
    }

}
