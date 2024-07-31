import java.io.*;

class Plane {

public Plane() throws IOException, RuntimeException {
System.out.println("Plane") ;
}

}

class Jet  extends Plane  { // Jet should handle the checked exceptions of the super class constructor
    // Jet() throws SQLException{//ERror

    // Jet() throws Exception {
    //     super();
    // }
    //correct

    //or
    Jet() throws IOException {
        super();
    }
    //correct as it handles the checked exception

    //or
    // Jet() throws RuntimeException {
    //     super();
    // }
    //wrong as it only handles the unchecked exception which is not needed
}

public class Tester {
public static void main(String args[]) throws IOException {
new Plane () ;
    }
}