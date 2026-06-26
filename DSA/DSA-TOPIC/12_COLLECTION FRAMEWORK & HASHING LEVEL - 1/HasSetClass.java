import java.util.HashSet;

public class HasSetClass {
    public static void main(String[] args) {
        HashSet<Integer> set1 = new HashSet<>();

        // add
        set1.add(3);
        set1.add(20);
        set1.add(3);
        set1.add(2);
        set1.add(4);
        set1.add(13);
        set1.add(10);
        set1.add(20);
        System.out.println(set1);
        // size
        System.out.println("size:" + set1.size());
        // contains
        System.out.println("is 5:" + set1.contains(5));
        System.out.println("is 20:" + set1.contains(20));
        // remove
        boolean isRemove = set1.remove(90);
        System.out.println("remove:" + isRemove);

        //clear
        set1.clear();
        System.out.println(set1);

        // lop
        // for(int i:set1){
        // System.out.println(i);
        // }
    }

}
