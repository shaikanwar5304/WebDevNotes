//throws is used to indicate the potential threat by the method
//not necessarily thrown by it

import java.io.FileNotFoundException;

public class A_throws {
	public static void main(String[] args) {
		try {
			throwOne();//inside throwOne method
		}catch (Exception e) {
			System.out.println(e);//java.io.FileNotFoundException
		}
	}
	//static void throwOne() {//ERror unhandled exception
	static void throwOne()  throws FileNotFoundException, Exception{
		System.out.println("inside throwOne method");
		throw new FileNotFoundException();
	}
}
