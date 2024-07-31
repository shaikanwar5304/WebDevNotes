package MethodOverRestriction;

public class A {
    
    protected void display(){
        System.out.println("I'm inside A");
    }
    private void display1(){
        System.out.println("I'm inside A");
    }
    private void show(){
        System.out.println("this is show method inside A");
    }
    protected void show2(){
        System.out.println("this is show2 method inside A");
    }
    public static void main(){
        restriction obj=new restriction();
        obj.display();
        //obj.show(10);
    }
}