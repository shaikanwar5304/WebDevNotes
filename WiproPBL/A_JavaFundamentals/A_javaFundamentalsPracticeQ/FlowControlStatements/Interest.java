public class Interest {
    public static void main(String[] args) {
        if(args[0].equals("Female")){
            if(Integer.parseInt(args[1])<58){
                System.out.println("8.2%");
            }else{
                System.out.println(9.2);
            }
        }else{
            if((Integer.parseInt(args[1])>58)){
                System.out.println(10.5);
            }else{
                System.out.println(8.4);
            }
        }
    }
}
