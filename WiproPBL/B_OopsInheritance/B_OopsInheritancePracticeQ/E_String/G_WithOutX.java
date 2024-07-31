// Given a string, if the first or last chars are 'x', return the string without those 'x'
// chars, otherwise return the string unchanged.

// If the input is "xHix", then output is "Hi".

// If the input is "America", then the output is "America".
public class G_WithOutX {
    public static void main(String[] args) {
        String s="Xtra";
        if(s.charAt(0)=='x' || s.charAt(0)=='X'){
            s=s.substring(1);
        }
        if(s.charAt(s.length()-1)=='x' || s.charAt(0)=='X'){
            s=s.substring(0,s.length()-1);
        }
        System.out.println(s);//tra
    }
}
