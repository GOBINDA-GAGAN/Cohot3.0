import java.util.HashSet;

public class _83_Frequency_of_elements_in_array {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();
        int arr[] = { 1, 1, 6, 9, 2, 6, 2, 4, 4 };
        for (int i = 0; i < arr.length; i++) {
            if (set.contains(arr[i])) {
                set.remove(arr[i]);
            } else {
                set.add(arr[i]);
            }
        }
        System.out.println(set);

    }

}
