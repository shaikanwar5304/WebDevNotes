// Create an abstract class Compartment to represent a rail coach. Provide an abstract
// function notice in this class.

// public abstract String notice();

// Derive FirstClass, Ladies, General, Luggage classes from the compartment class. Override
// the notice function in each of them to print notice message that is suitable to the
// specific type of compartment.

// Create a class TestCompartment.Write main function to do the following:

// Declare an array of Compartment of size 10.

// Create a compartment of a type as decided by a randomly generated integer in the range 1
// to 4.

// Check the polymorphic behavior of the notice method.

// [i.e based on the random number genererated, the first compartment can be Luggage, the
// second one could be Ladies and so on..]

abstract class Compartment{
    public abstract String notice();
}
class FirstClass extends Compartment{
    public String notice(){
        return "First Class Compartment";
    }
}
class Ladies extends Compartment{
    public String notice(){
        return "Ladies Compartment";
    }
}
class General extends Compartment{
    public String notice(){
        return "General Compartment";
    }
}
class Luggage extends Compartment{
    public String notice(){
        return "Luggage Compartment";
    }
}
public class TestCompartment{
    public static void main(String[] args) {
        Compartment[] arr=new Compartment[10];
        for(int i=0;i<10;i++){
            int random=(int)(Math.random()*4)+1;
            if(random==1){
                arr[i]=new FirstClass();
            }
            else if(random==2){
                arr[i]=new Ladies();
            }
            else if(random==3){
                arr[i]=new General();
            }
            else{
                arr[i]=new Luggage();
            }
            System.out.println(arr[i].notice());
        }
    }
}
// First Class Compartment
// First Class Compartment
// First Class Compartment
// First Class Compartment
// Luggage Compartment
// First Class Compartment
// Luggage Compartment
// Luggage Compartment
// First Class Compartment
// General Compartment