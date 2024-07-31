class AgeException extends Exception{
    AgeException(String s){
        super(s);
    }
}
public class E_Age {
    public static void main(String[] args) {
        try{
            if(Integer.parseInt(args[0])>=18&&Integer.parseInt(args[0])<=60){
                System.out.println("valid input");
            }else{
                throw new AgeException("invalid age");
            }
        }catch(Exception e){
            System.out.println(e);
        }
    }
}
// javac E_Age.java&&
// java E_Age 5 AgeException:
// invalid age

// javac E_Age.java&&
// java E_Age 5f 
// java.lang.NumberFormatException: For input string: "5f"
