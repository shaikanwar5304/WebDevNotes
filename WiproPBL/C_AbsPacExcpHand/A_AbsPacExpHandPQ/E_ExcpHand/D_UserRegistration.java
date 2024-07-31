class InvalidCountryException extends Exception{
    InvalidCountryException(){
        super();
    }
    InvalidCountryException(String s){
        super(s);
    }
}
public class D_UserRegistration {
    public static void main(String[] args) {
        try{
            System.out.println(registerUser("anwar", "India"));//Registration successful
        }catch(InvalidCountryException e){
            System.out.println(e);
        }
        try {
            System.out.println(registerUser("anwar", "China"));
        } catch (InvalidCountryException e) {
            System.out.println(e);//InvalidCountryException: User outside India can't register
        }
    }
    static String registerUser(String name,String country) throws InvalidCountryException{
        if(country.toLowerCase().equals("india")){
            return "Registration successful";
        }else{
            throw new InvalidCountryException("User outside India can't register");
        }
    }
}
