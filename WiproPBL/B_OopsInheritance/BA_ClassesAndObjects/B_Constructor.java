class Sample{
    private int id;
    protected int salary;
    public int age;
    Sample(){
        System.out.println("Sample() Constructor");
        id=101;
    }
    Sample(int n){
        System.out.println("Sample(int n) Constructor");
        id=n;
    }
}
class B_Constructor{
    public static void main(String[] args) {
        Sample SampleObj=new Sample();//Sample() Constructor
        Sample SampleObj2=new Sample(102);//Sample(int n) Constructor
        //System.out.println(SampleObj.id);//private variables are not accessable
        System.out.println(SampleObj.salary);//0
        System.out.println(SampleObj.age);//0
    }
}
