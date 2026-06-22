import java.util.HashMap;

public class HasmapClass {
    
    public static void main(String[] args) {
        HashMap<Integer,String> map= new HashMap<>();
        map.put(1,"one");
        map.put(2,"two");
        map.put(1,"three");
        map.put(null,"nullvalue");
        map.put(null,"anothervalue");
        System.out.println(map.get(1)+ map.get(null));
    
    }
}
