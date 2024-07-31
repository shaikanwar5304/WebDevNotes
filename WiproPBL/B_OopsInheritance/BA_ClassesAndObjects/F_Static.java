class ParentClass {
    public static void parentStatic(){
        System.out.println("parentStatic method");
    }
    public void parentInstanceMethod() {
        System.out.println("This is an instance method in the parent class.");
    }
}

class F_Static extends ParentClass {
    int instanceVar = 10;

    public void myInstanceMethod() {
        System.out.println("This is an instance method in the child class.");
    }

    public static void myStaticMethod() {
        System.out.println("This is a static method in the child class.");

        // Trying to use 'this' in a static context (will cause an error)
        // System.out.println(this.instanceVar); // Error: non-static variable this
        // cannot be referenced from a static context

        // Trying to use 'super' in a static context (will cause an error)
        // super.parentInstanceMethod(); // Error: non-static variable super cannot be
        // referenced from a static context
    }

    public static void main(String[] args) {
        // Accessing the static method using the class name
        F_Static.myStaticMethod();//this is an static method in the child class
        F_Static.parentStatic();//parentStatic method
        //System.out.println(F_Static.instanceVar);//only static are accessable
    }
}