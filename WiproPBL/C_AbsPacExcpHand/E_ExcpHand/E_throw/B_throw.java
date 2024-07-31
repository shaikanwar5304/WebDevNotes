class InvalidInputException extends Exception {
    InvalidInputException(String s) {
        super(s);//passing the error msg to Exception
    }
}

class Input {
    void method() throws InvalidInputException {
        throw new InvalidInputException("Invalid Input");
    }
}

public class B_throw {
public static void main (String[] args) {
try {
new Input ().method() ; // whats happening here?
}
catch (InvalidInputException iie) {
System.out.println(iie.getMessage());//Invalid Input
iie.printStackTrace();//explains the path that triggered the exception
// InvalidInputException: Invalid Input
//         at Input.method(B_throw.java:9)
//         at B_throw.main(B_throw.java:16)
}
}
}