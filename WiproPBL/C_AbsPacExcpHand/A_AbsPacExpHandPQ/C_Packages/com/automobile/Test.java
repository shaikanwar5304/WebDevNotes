package com.automobile;
import com.automobile.twowheeler.*;
import com.automobile.fourwheeler.*;
public class Test {
    public static void main(String[] args) {
        Vehicle veh1;
        Vehicle veh2;
        veh1=new Hero();//
        Honda hon=new Honda();
        //System.out.println(veh1.getSpeed());//superclass won't have subclass specific properties
        System.out.println(veh1.getModelName());//splender
        System.out.println(hon.getSpeed());//0
        Ford Ford1= new Ford();
        Logan Logan1= new Logan();
        System.out.println(Ford1.tempControl(34));//34
        System.out.println(Logan1.gps("23"));//23
    }
}