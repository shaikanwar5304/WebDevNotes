//checked exception:
//checked exception are the exceptions that are checked at compile time. 
//i.e I/O exceptions, SQL exceptions, etc. checked exceptions are checked at compile-time.
//unchecked exception:
//it could have been avoided by the programmer
//unchecked exceptions are not checked at compile time.
//i.e ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, etc.(runtime exceptions)

// Checked Exceptions (will be raised at compile time it self)

// ClassNotFoundException
// IOException
// InterruptedException
// SQLException
// IllegalAccessException

// Unchecked Exceptions (will be raised at runtime)

// NullPointerException
// ArrayIndexOutOfBoundsException
// NumberFormatException
// ClassCastException
// NegativeArraySizeException n 

// java.lang.Object
//     └── java.lang.Throwable
//         ├── java.lang.Exception
//         │   ├── java.io.IOException
//         │   │   ├── java.io.FileNotFoundException
//         │   │   └── java.io.EOFException
//         │   ├── java.lang.ClassNotFoundException
//         │   ├── java.lang.IllegalArgumentException
//         │   ├── java.lang.NullPointerException
//         │   ├── java.lang.ArrayIndexOutOfBoundsException
//         │   ├── java.lang.ArithmeticException
//         │   ├── java.lang.ClassCastException
//         │   ├── java.sql.SQLException
//         │   └── java.lang.RuntimeException
//         │       ├── java.lang.NumberFormatException
//         │       └── java.lang.IndexOutOfBoundsException
//         └── java.lang.Error
//             ├── java.lang.OutOfMemoryError
//             ├── java.lang.StackOverflowError
//             └── java.lang.InternalError