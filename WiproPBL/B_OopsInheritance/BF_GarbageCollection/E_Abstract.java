abstract class Al {
//abstract final void ml(); Error: abstract requires method overriding while final is to avoid method overriding
}

abstract class A2 extends Al{
abstract void m2();//need to be overridden in the subclass
}

class E_Abstract extends A2{
void m2(){}//overridden method (compulsory)
public static void main(String[] args) {

System.out.println("Executed Successfully");

}
}