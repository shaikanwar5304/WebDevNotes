import java.io.IOException;
import java.io.FileNotFoundException;
import java.sql.SQLException;
//this rule won't apply for unchecked exceptions
public class B_overriding extends parent {

	// void method1() throws SQLException{//the overriding method should not throw
	// the sibling Exception class (parallel)
	// void method1() throws Exception{}//it should not throw the parent class
	void method1() throws IOException {
		// throw new SQLException();//not compatable
		throw new IOException();
	}

	// void method1() throws FileNotFoundException{
	// //throw new SQLException();
	// throw new FileNotFoundException();

	// }
	// this is also correct |^|

	void method2() throws IOException {
		throw new FileNotFoundException();
	}

	public static void main(String[] args) {

	}

}

class parent {
	void method1() throws IOException {
		throw new IOException();
	}

	void method2() throws Exception {
		throw new SQLException();
	}
}