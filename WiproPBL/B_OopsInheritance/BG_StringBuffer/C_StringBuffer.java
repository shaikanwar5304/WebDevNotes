public class C_StringBuffer {
    public static void main(String[] args) {
        //StringBuffer is mutable
        StringBuffer sb1=new StringBuffer("Hello");//by using String
        StringBuffer sb2=new StringBuffer(10);//by using capacity
        StringBuffer sb3=new StringBuffer();//default capacity is 16
        //capacity increases as size increases (old capacity*2+2) 
        System.out.println(sb1);//Hello
        System.out.println(sb1.length());//5
        System.out.println(sb1.capacity());//21
        System.out.println(sb2.capacity());//10
        System.out.println(sb3.capacity());//16
        System.out.println(sb2.length());//0
        System.out.println(sb3.length());//0

        sb1.append(" Java");
        System.out.println(sb1);//Hello Java
        System.out.println(sb1.length());//10
        System.out.println(sb1.capacity());//21

        //insert
        sb1.insert(5,"_");
        System.out.println(sb1);//Hello_ Java

        //delete
        sb2=new StringBuffer("0123456789");
        sb2.delete(3,7);
        System.out.println(sb2);//012789

        //replace   
        sb3=new StringBuffer("0123456789");
        sb3.replace(3,8,"abc");
        System.out.println(sb3);//012abc89

        //substring
        sb1=new StringBuffer("0123456789");
        System.out.println(sb1.substring(3));//3456789
        System.out.println(sb1.substring(3,7));//3456

        //reverse
        sb1=new StringBuffer("0123456789");
        System.out.println(sb1.reverse());//0987654321
        System.out.println(sb1);//9876543210

        //charAt
        sb1=new StringBuffer("0123456789");
        System.out.println(sb1.charAt(3));//3

        //setCharAt
        sb1=new StringBuffer("0123456789");
        sb1.setCharAt(3,'a');
        System.out.println(sb1);//012a456789

        //deleteCharAt
        sb1=new StringBuffer("0123456789");
        sb1.deleteCharAt(3);
        System.out.println(sb1);//012456789

        


    }
}