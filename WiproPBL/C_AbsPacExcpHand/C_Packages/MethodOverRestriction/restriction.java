package MethodOverRestriction;

public class restriction extends A{
    //void display(){ }// access modifier is more restrictive than the parent class
    public void display(){ System.out.println("display inside restriction");}// access modifier is less restrictive than the parent class so allowed
    public  void display1(){ System.out.println("display1 inside restriction");}
    private void show(int a){
        System.out.println(a);
    }
    //void show2(){}// access modifier is more restrictive than the parent class
    void show2(int a){System.out.println(a);}//this is likely a different method so allowed
    public static void main(String[] args) {
        restriction myObj=new restriction();
        myObj.display();//display inside restriction
        myObj.display1();//display1 inside restriction
        myObj.show(10);//10
    }
}