public class FindCharacter {
    public static void main(String[] args) {
        char c='^';
        if (c<='9'&&c>='0'){
            System.out.println("Digit");
        }
        else if((c>=65 &&c<='Z')||(c>='a'&&c<='z')){
            System.out.println("Alphabet");
        }else{
            System.out.println("Special character");
        }
    }
}
