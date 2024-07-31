class TestEmployee{
    public static void main(String[] args) {
        Employee myEmp=new Employee("John",96000.50,2022,"9652332669");
        System.out.println(myEmp.name);//John
        System.out.println(myEmp.salary);//0.0
        //System.out.println(Employee.year);//non static variable 
    }
}