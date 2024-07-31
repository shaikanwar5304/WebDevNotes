class Employee extends Person{
    double salary;
    int year;
    String insuranceNumber;
    Employee(String name,double salary,int year,String insuranceNumber){
        super(name);
        salary=salary;
        this.year=year;
        this.insuranceNumber=insuranceNumber;
    }
}