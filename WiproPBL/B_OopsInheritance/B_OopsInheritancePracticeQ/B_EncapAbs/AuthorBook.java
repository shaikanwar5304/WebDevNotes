class Author{
    private String name;
    private String email;
    private char gender;
    Author(String a,String b,char c){
        this.name=a;
        this.email=b;
        this.gender=c;
        System.out.println("Author constructor");
    }
    void getDetailsAuthor(){
        System.out.println("Author name : "+this.name);
        System.out.println("Author email: "+this.email);
        System.out.println("Author : "+this.gender);
    }
}
class AuthorBook extends Author{
    private String name;
    private double price;
    private int qtyInStock;
    AuthorBook(String bookName,double price,int Stock,String AuthorName,String email,char gender){
        super(AuthorName,email,gender);
        this.name=bookName;
        this.price=price;
        this.qtyInStock=Stock;
        System.out.println("Book constructor");
    }
    void getDetailsBook(){
        System.out.println("Book name : "+this.name);
        System.out.println("Book price: "+this.price);
        System.out.println("qtyInStock: "+this.qtyInStock);
    }
    public static void main(String[] args) {
        AuthorBook book= new AuthorBook("Deep work",10,1000,"David Miller","davidmiller@gmail.com",'M');
        book.getDetailsBook();
        book.getDetailsAuthor();
    }
}
/*
 * Author constructor
 * Book constructor
 * Book name : Deep work
 * Book price: 10.0
 * qtyInStock: 1000
 * Author name : David Miller
 * Author email: davidmiller@gmail.com
 * Author : M
 */