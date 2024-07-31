// Given a string and an integer n, print a new string made of n repetitions of the last n
// characters of the string.

// You may assume that n is between @ and the length of the string, inclusive.

// Examplel)

// i/p:wipro,3

// o/D Proproprc)
public class J_LastNChar {
    public static void main(String[] args) {
        String s="Wipro";
        int n=5;//WiproWiproWiproWiproWipro
        n=0;//
        n=3;//propropro
        String reqString=s.substring(s.length()-n);
        reqString=reqString.repeat(n);
        System.out.println(reqString);
    }
}
