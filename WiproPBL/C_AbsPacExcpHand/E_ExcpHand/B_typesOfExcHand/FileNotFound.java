import java.io.FileInputStream;

public class FileNotFound {
    public static void main(String[] args) {
        try{
            FileInputStream fx =new FileInputStream("A.txt");
            System.out.println(fx.read());//65 (first character of A.txt i.e A)
            System.out.println(fx.read());//98 (second character of A.txt i.e b)
            fx.read();
            fx.read();
            System.out.println(fx.read());//-1 (end of file)
        }catch (Exception e){
            System.out.println(e);
        }
        try{
            FileInputStream fx = new FileInputStream("file.txt");
        }catch(Exception e){
            System.out.println(e);//java.io.FileNotFoundException: file.txt (The system cannot find the file specified)
        }
    }
}