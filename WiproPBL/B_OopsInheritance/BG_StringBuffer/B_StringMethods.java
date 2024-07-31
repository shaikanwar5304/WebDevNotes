public class B_StringMethods {
    public static void main(String[] args) {
        String s1="Hello";
        String s2="hello";
        String s3="Hello";
        //both s1 and s3 are pointing to the same object
        String s4=new String("Hello");//we are creating a new object

        System.out.println(s1.equals(s2));//false
        System.out.println(s1.equalsIgnoreCase(s2));//true

        System.out.println(s1.equals(s3));//true
        System.out.println(s1==s3);//true

        System.out.println(s1.equals(s4));//true
        System.out.println(s1==s4);//false
        System.out.println();
        //equals compares the content of the string
        //== compares the reference of the string

        //startsWith (checks the beginning of the string)
        System.out.println("January".startsWith("Jan"));//true
        System.out.println("January".startsWith("jan"));//false
        System.out.println("January".startsWith("an",1));//true
        System.out.println();

        //endsWith (checks the end of the string)
        System.out.println("January".endsWith("ary"));//true
        System.out.println("January".endsWith("Ary"));//false
        System.out.println();

        //compareTo (lexicographic difference)
        System.out.println("January".compareTo("January"));//0 (both are same)
        System.out.println("apple".compareTo("ball"));//-1 (a - b = -1)
        System.out.println("ball".compareTo("apple"));//1 (b - a = 1)
        System.out.println("apple".compareTo("aPp"));//32 (p - P = 32)
        System.out.println();

        //compareToIgnoreCase (ignores the case)
        System.out.println("apples".compareToIgnoreCase("aPp"));//3 "les".length() = 3 
        System.out.println("aPp".compareToIgnoreCase("apples"));//-3 "les".length() = 3
        System.out.println("apple".compareToIgnoreCase("Cat"));//-2 (a - c or A - C = -2)
        System.out.println("Cat".compareToIgnoreCase("apple"));//2
        System.out.println();

        //indexOf (searches from the beginning of the string)
        System.out.println("January".indexOf('a'));//1
        System.out.println("January".indexOf('a',2));//4 (search from index 2) 
        System.out.println("January".indexOf("ua"));//3
        System.out.println("abcabc".indexOf("abc",2));//3 (search from index 2)
        System.out.println("abcabc".indexOf("abc",4));//-1 
        System.out.println();

        //lastIndexOf (searches from the end of the string)
        System.out.println("January".lastIndexOf('a'));//6
        System.out.println("January".lastIndexOf('a',2));//1 ("Jan") starting to index 2
        System.out.println("January".lastIndexOf("ua"));//3
        System.out.println();

        //substring (returns the substring of the string)
        System.out.println("0123456789".substring(3));//3456789
        System.out.println("0123456789".substring(3,6));//345
        System.out.println();

        //concat (concatenates the string)
        System.out.println("Hello".concat(" Java"));//Hello Java
        String s5="Hello";
        s5=s5.concat(" Java").concat(" Programming");
        System.out.println(s5);//Hello Java Programming
        System.out.println();
        
        //replace (replaces the character or string with another character or string)
        System.out.println("Hello".replace('l','w'));//Hewwo
        System.out.println("Hello".replace("llo","w"));//Hew
        System.out.println("Hello".replace("asdfs","w"));//Hello
        System.out.println();

        //trim (removes the leading and trailing spaces)
        System.out.println("  Hello  ".trim());//Hello
        System.out.println("  Hello".trim());//Hello
        System.out.println("Hello".trim());//Hello
        System.out.println();

        //valueOf (converts the given type to string)
        int a=10;
        String s6=String.valueOf(a);
        System.out.println(s6 +" "+s6.getClass());//10 class java.lang.String
        boolean b=true;
        String s7=String.valueOf(b);
        System.out.println(s7 +" "+s7.getClass());//true class java.lang.String
        System.out.println("string".getClass());//class java.lang.String
        System.out.println();

        //toLowerCase (converts the string to lower case)
        System.out.println("Hello@123".toLowerCase());//hello@123
        System.out.println();

        //toUpperCase (converts the string to upper case)
        System.out.println("Hello@123".toUpperCase());//HELLO@123
        System.out.println();

        //split (splits the string based on the given regular expression)
        String s8="Hello Java Programming";
        String[] s9=s8.split(" ");
        for (String s:s9){
            System.out.println(s);//Hello Java Programming
        }
        System.out.println();

        //join (joins the string with the given delimiter)
        String s10=String.join(" ","Hello","Java","Programming");
        System.out.println(s10);//Hello Java Programming
        System.out.println();
    }
}
