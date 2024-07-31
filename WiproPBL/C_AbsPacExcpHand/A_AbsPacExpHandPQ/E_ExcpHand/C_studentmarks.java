import java.util.*;
class student{
    String name;
    int maths;
    int English;
    int Physics;
    int total;
}
public class C_studentmarks {
    public static void main(String[] args) {

        Scanner sc= new Scanner(System.in);
        student[] arr=new student[2];

        for (int i=0;i<2;i++){
            student s= new student();
            System.out.print("Enter the name of student: ");
            s.name= sc.next();
            String sub[]={"maths","english","physics"};
            int marks[]=new int[3];
            int mark=0;
            s.total=0;
            for (int j=0;j<3;j++)
            {
                boolean flag=true;
                while(flag)
                {
                    try{
                        System.out.println("Enter "+sub[j]+" marks: "); 
                        mark=sc.nextInt();
                        flag=false;
                    }
                    catch(Exception e){
                        System.out.println(e);
                        System.out.println("wrong input");
                        flag=true;
                    }
                }
                s.total+=mark;
                marks[j]=mark;
            }
            s.maths=marks[0];
            s.Physics=marks[1];
            s.English=marks[2];
            arr[i]=s;
        }
        System.out.print("the average of their marks: ");
        double sum =(double) arr[0].total+arr[1].total;
        System.out.println(sum/2);
        
    }
}
