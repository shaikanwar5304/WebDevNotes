import java.util.Scanner;
public class ColorCode {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter a colorCode: ");
        char c=sc.next().charAt(0);
        switch (c) {
            case 'R':case 'r':
            System.out.println("REd");
            break;
            case 'W':case 'w':
            System.out.println("White");
            break;
            case 'G':case 'g':
            System.out.println("Green");
            break;
            case 'Y' :case 'y':
            System.out.println("yellow");
            break;
            case 'O':case 'o':
            System.out.println("Orange");
            break;
            default:
            System.out.println("invalid color code");
            break;
        }
    }
}
