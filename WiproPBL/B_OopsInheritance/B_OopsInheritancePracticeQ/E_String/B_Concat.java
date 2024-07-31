// Write a java program that will concatenate 2 strings and return the result. The result
// should be in lowercase.

// Note: If the concatenation creates a double-char, then one of the characters need to be
// omitted.

// Example)

// i/p:Sachin, Tendulkar

// o/pisachin tendulkar

// Example2)

// i/p:Mark, kate

// o/p:markate


public class B_Concat {
    public static void main(String[] args) {
        String s1=args[0];
        String s2=args[1];
        s1=s1.toLowerCase();
        s2=s2.toLowerCase();
        if(s1.charAt(s1.length()-1)==s2.charAt(0)){
            System.out.println(s1+s2.substring(1));
        }
        else System.out.println(s1+s2);
    }
}
//mark kata
//markata