import java.io.*;
import java.util.*;

public class PropertiesTest {
  public static void main(String args[]) {
    Properties properties = new Properties();

    // Read input from stdin
    try {
      properties.load(System.in);
    } catch (IOException e) {
      e.printStackTrace();
      System.exit(1);
    }

    // Print name value pairs to stdout
    System.out.print(properties);
  }
}
