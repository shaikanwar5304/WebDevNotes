public class A_Final {

final double pi;
public A_Final ()

{pi = 3.14;}

public A_Final (double pi)

{

this.pi = pi; }
public static void main(String[] args) {
A_Final ob = new A_Final (22./7.);
System.out.println (ob.pi);//3.142857142857143
System.out.println((double) 22/7);//3.142857142857143
A_Final ob1 = new A_Final ();
System.out.println (ob1.pi);//3.14
A_Final ob2= new A_Final( 22./7.);
System.out.println (ob2.pi);//3.142857142857143
//ob2.pi = 3.14159;//The final field A_Final.pi cannot be assigned

}

}