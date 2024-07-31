public class CharCase {
    public static void main(String[] args) {
        char c='F';
        if(c<='Z'){
            System.out.println(c+"->"+(char)(c+32));
        }else{
            System.out.println(c+"->"+(char)(c-32));
        }
    }
}
