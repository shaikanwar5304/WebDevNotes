// Write a java program that will return the first half of the string, if the length of the
// string is even. Tt should return null for odd length string.

// Example1)

// i/p: Tomcat

// o/p:Tom

// Example2)

// i/p:Apron

// o/p null
public class D_Halflength {
    public static void main(String[] args) {
        String s1="Tomcat";
        String s2="Apron";
        if(s2.length()%2==0){
            System.out.println(s2.substring(0, s1.length()/2));
        }else System.out.println("null");//null
    }
}
