import java.util.ArrayList;

public class ArrayListClass {
    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>();

        // add()
        list.add(10);
        list.add(20);
        list.add(30);

        // add(index, element)
        list.add(1, 15);

        System.out.println("After add: " + list);

        // get()
        System.out.println("get(2): " + list.get(2));

        // set()
        list.set(1, 100);
        System.out.println("After set: " + list);

        // contains()
        System.out.println("contains(30): " + list.contains(30));

        // indexOf()
        System.out.println("indexOf(30): " + list.indexOf(30));

        // lastIndexOf()
        list.add(30);
        System.out.println("lastIndexOf(30): " + list.lastIndexOf(30));

        // size()
        System.out.println("size(): " + list.size());

        // remove(index)
        list.remove(0);
        System.out.println("After remove(index): " + list);

        // remove(Object)
        list.remove(Integer.valueOf(30));
        System.out.println("After remove(Object): " + list);

        // forEach()
        System.out.print("forEach(): ");
        list.forEach(x -> System.out.print(x + " "));
        System.out.println();

        // clone()
        ArrayList<Integer> copy =
                (ArrayList<Integer>) list.clone();
        System.out.println("Cloned List: " + copy);

        // toArray()
        Integer[] arr = list.toArray(new Integer[0]);
        System.out.print("Array: ");
        for (Integer num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();

        // isEmpty()
        System.out.println("isEmpty(): " + list.isEmpty());

        // clear()
        list.clear();
        System.out.println("After clear(): " + list);

        // isEmpty() after clear
        System.out.println("isEmpty(): " + list.isEmpty());
    }
}