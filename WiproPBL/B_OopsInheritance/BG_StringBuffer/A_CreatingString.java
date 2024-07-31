public class A_CreatingString {
    public static void main(String[] args) {
        //string is immutable
        String s1="Hello";

        char ch[]={'j','a','v','a'};
        String s2=new String(ch);

        String s3=new String("Hello Java");
        String s4= "Hello "+ "Java";
        System.out.println(s1);//Hello
        System.out.println(s1.length());//5
        System.out.println(s1.charAt(0));//H
        System.out.println(s2);//java
        System.out.println(s3);//Hello Java
        System.out.println(s4);//Hello Java

        String s5;
        s5=45+" Rohit Sharma";//String + any type = String
        System.out.println(s5);//45 Rohit Sharma
    }
}