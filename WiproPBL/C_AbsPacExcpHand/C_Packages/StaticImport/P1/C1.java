package StaticImport.P1;

public class C1 {
    public static void staticMethod() {
        System.out.println("This is a static method in C1.");
    }
    public void instanceMethod() {
        System.out.println("This is an instance method in C1.");
    }
    public static void main(String[] args) {
        System.out.println("This is the main method in C1.");
    }
    public static void callMain(){
        String[] args = new String[0];
        main(args);
    }
}
