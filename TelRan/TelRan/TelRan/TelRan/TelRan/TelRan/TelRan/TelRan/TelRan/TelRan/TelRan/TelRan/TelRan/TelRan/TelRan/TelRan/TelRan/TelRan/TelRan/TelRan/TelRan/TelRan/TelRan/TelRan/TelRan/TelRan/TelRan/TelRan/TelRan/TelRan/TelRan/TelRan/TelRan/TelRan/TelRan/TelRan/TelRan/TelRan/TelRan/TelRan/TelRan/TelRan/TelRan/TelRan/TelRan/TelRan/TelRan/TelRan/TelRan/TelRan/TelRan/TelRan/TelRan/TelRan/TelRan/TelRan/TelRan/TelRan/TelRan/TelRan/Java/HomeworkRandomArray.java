import java.util.Random;

//Create an array of 15 random integers from the range [0;9]. 
//Count how many even elements are in the array and print this number to the screen on a separate line

public class HomeworkRandomArray
 {
  public static void main(String[] args)
  {
    int[] arr = new int[15];
    Random rand = new Random();

    // fill the array with random integers
    for (int i = 0; i < arr.length; i++) {
      arr[i] = rand.nextInt(10); // generates a random integer from 0 to 9
    }

    // count the number of even elements in the array
    int count = 0;
    for (int i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 == 0) 
      {
        count++;
      }
    }

    // print the count to the screen
    System.out.println("Number of even elements: " + count);
  }
}
