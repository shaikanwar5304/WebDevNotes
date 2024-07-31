//class abstract myClass{} //illegal
abstract class Figure {
    double dim1;
    double dim2;
    Figure(double a, double b) {
        dim1 = a;
        dim2 = b;
    }
    abstract double area();
}
class Rectangle extends Figure {
    Rectangle(double a, double b) {
        super(a, b);
    }
    double area() {
        System.out.println("Inside Area for Rectangle.");
        return dim1 * dim2;
    }
}
public class B_Figure{
    public static void main(String args[]) {
        // Figure f = new Figure(10, 10); // illegal now
        Rectangle r = new Rectangle(9, 5);
        Figure figref;
        figref = r;// super class reference can refer to subclass object
        System.out.println("Area is " + figref.area());
        //Inside Area for Rectangle.
        //Area is 45.0
    }
}