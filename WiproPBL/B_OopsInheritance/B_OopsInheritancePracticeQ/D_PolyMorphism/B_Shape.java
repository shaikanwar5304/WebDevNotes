class Shape{
    void draw(){
        System.out.println("drawing");
    }
    void erase(){
        System.out.println("erasing");
    }
}
class Triangle extends Shape{
    void draw(){
        System.out.println("drawing triangle");
    }
    void erase(){
        System.out.println("erasing triangle");
    }
}

class Circle extends Shape{
    void draw(){
        System.out.println("drawing circle");
    }
    void erase(){
        System.out.println("erasing circle");
    }
}
public class B_Shape {
    public static void main(String[] args) {
        Shape s=new Shape();
        Triangle t=new Triangle();
        Circle c=new Circle();
        s.draw();//drawing
        s.erase();//erasing
        t.draw();//drawing triangle
        t.erase();//erasing triangle
        c.draw();//drawing circle
        c.erase();//erasing circle
    }
}
