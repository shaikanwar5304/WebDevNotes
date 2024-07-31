// Given a string, return a new string made of 'n' copies of the first 2 chars of the
// original string where 'n' is the length of the string.

// Examplel

// Wipro

// WiWiWiWiwi
public class C_NCopies {
    public static void main(String[] args) {
        String s="Wipro";
        StringBuffer s2=new StringBuffer();
        String TwoChars=s.substring(0,2);
        for (int i = 0; i < s.length(); i++) {
            s2.append(TwoChars);
        }
        System.out.println(s2);//WiWiWiWiWi
    }
}
