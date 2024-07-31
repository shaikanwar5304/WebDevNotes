class A_Box{
    private int a;
    private int b;
    private int c;
    A_Box(int a,int b,int c){
        this.a=a;
        this.b=b;
        this.c=c;
        System.out.println("box dimensions initialized :"+a+" "+b+" "+c);
    }
    int volume(){
        return this.a*this.b*this.c;
    }
    public static void main(String[] args) {
        A_Box newBox=new A_Box(2,3,5);
        System.out.println(newBox.volume());//30
    }
}