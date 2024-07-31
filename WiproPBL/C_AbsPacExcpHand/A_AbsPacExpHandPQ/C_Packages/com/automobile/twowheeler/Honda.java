package com.automobile.twowheeler;
import com.automobile.Vehicle;
public class Honda extends Vehicle{
    int speed;
    public String getModelName(){
        return "Shine";
    }
    public String getRegistrationNumber(){
        return "AP 5031";
    }
    public String getOwnerName(){
        return "Amir";
    }
    public int getSpeed(){
        return this.speed;
    }
    public void cdPlayer(){
        System.out.println("playing cdPlayer");
    }
}
