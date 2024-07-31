// Given 2 strings, a and b, return a new string of the form short+long+short, with the
// shorter string on the outside and the longer string on the inside.

// The strings will not be the same length, but they may be empty (length @).

// If input is "hi" and "hello", then output will be "hihellohi®.
public class F_ShortLong {
    public static void main(String[] args) {
        String s1="short";
        String s2= "looooong";
        if(s1.length()>s2.length()){
            System.out.println(s1+s2+s1);//looooongshortlooooong
        }else{
            System.out.println(s2+s1+s2);
        }
    }
}
