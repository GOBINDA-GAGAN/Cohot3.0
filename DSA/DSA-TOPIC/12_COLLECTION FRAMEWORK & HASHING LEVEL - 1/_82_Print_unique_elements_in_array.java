import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class _82_Print_unique_elements_in_array {
    public static void main(String[] args) {
        int nums[] = { 1, 2, 2, 3, 4, 4 };
        ArrayList<Integer> result = uniqueElement(nums);
        System.out.println(result);
    }

    public static void question1(int nums[]) {
        HashSet<Integer> set = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }
        System.out.println(set);
    }

    public static ArrayList<Integer> uniqueElement(int nums[]) {
        HashMap<Integer, Integer> map = new HashMap<>();
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], 0);
        }

        for (int key : map.keySet()) {
            for (int i = 0; i < nums.length; i++) {

                if (key == nums[i]) {
                    map.put(key, map.getOrDefault(key, 0) + 1);
                }
            }

        }

        for (int key : map.keySet()) {
            if (map.get(key) == 1) {
                list.add(key);

            }

        }
        return list;
    }
}
