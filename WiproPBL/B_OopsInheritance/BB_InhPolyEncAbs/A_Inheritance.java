//inheritance is child class acquiring properties of parent class 
class Product{
    int pid;
    String name;
    int price;
    Product(){
        System.out.println("Product obj Constructed");
    }
    void getDetails(){
        System.out.println(pid+" "+name+" "+price);
    }
    void setProductDetails(int pid,String name,int price){
        this.pid=pid;
        this.name=name;
        this.price=price;
    }
}

class SmartPhone extends Product{
    String os;
    int ram;
    SmartPhone(){
        System.out.println("SmartPhone obj Constructed");
    }

    void getDetails(){//method overriding : the method of child class given more priority incase of same name
        System.out.println(pid+" "+name+" "+price+" " +os+" "+ram);
    }
    void getDetailsSuperClass(){
        super.getDetails();//getDetails of product
    }
    void setProductDetails(int pid,String name,int price, String os,int ram){
        this.pid=pid;
        this.name=name;
        this.price=price;
        this.os=os;
        this.ram=ram;
    }
}

public class A_Inheritance {
    public static void main(String[] args) {
        Product productObj=new Product();//Product obj Constructed
        productObj.getDetails();//0 null 0
        productObj.setProductDetails(100, "bag", 2000);
        productObj.getDetails();//100 bag 2000
        SmartPhone smartPhoneObj=new SmartPhone();
        //Product obj Constructed
        //SmartPhone obj Constructed

        smartPhoneObj.setProductDetails(101, "Redmi", 15000,"Android",8);
        smartPhoneObj.getDetails();//101 Redmi 15000 Android 8
        smartPhoneObj.getDetailsSuperClass();//101 Redmi 15000
    }
}