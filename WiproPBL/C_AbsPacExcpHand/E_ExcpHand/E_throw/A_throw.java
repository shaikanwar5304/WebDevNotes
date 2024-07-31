//userdefined exception is used when we want to have exception for our use
// ex: if we want to raise exception for those who enter age above 18 the we write our own exception

import java.io.IOException;

class MyException extends Exception{
    MyException(){
        System.out.println("this is user defined Exception");
    }
    @Override//it forces the below method to override (iske bina bhi kaam chalega) 
    //if the overriding is not possible then it rises the exception
    public String toString() {
        return "MyException";
    }
    // @Override
    // public void myName(){//error as it not override any method
    //     System.out.println("myName method");
    // }
}


public class A_throw {
    public static void main(String[] args) {
        int age=10;
        try{
            if(age<18){
                throw new MyException();
            }
        }
        //catching via checked exception
        //as it checks within compile time so it is detects earlier
        //catch(IOException e){System.out.println("IOException");}//Error: IOException is not thrown
        
        //via unchecked Exception
        catch(NumberFormatException e){
            System.out.println("NumberFormatException");
            System.out.println(e);
        }
        catch (Exception e){
            System.out.println("Exception");//Exception
            System.out.println(e);//MyException
        }
    }
}
