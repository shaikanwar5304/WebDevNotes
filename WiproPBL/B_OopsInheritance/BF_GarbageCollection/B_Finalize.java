public class B_Finalize {
    static int count = 0;
    B_Finalize(){
        count++;
    }
    public static void main(String[] args) {
        B_Finalize obj1 = new B_Finalize();
        B_Finalize obj2 = new B_Finalize();
        B_Finalize obj3 = new B_Finalize();
        System.out.println("Number of objects created: "+B_Finalize.count);//3
        Runtime r = Runtime.getRuntime();
        obj1 = null;
        obj2 = null;
        obj3 = null;
        r.gc();//garbage collector calls finalize method after each object is destroyed
        System.out.println("Number of objects created after garbage collection: "+B_Finalize.count);//3
        //count is not reduced to 0 because of unpredictable behaviour of garbage collector
        //the order of execution of finalize method is not guaranteed
    }
    protected void finalize(){//finalize method is called by garbage collector before destroying the object
        B_Finalize.count--;
        System.out.println("no of objects left: "+B_Finalize.count);
        /*
            no of objects left: 2
            no of objects left: 1
            no of objects left: 0
         */
    }
}
//exection 2:
/*
 *  Number of objects created: 3
 *  no of objects left: 2
 *  no of objects left: 1
 *  Number of objects created after garbage collection: 3
 *  no of objects left: 0
 */
//exection 3:
// Number of objects created: 3
// Number of objects created after garbage collection: 3
// no of objects left: 2
// no of objects left: 1