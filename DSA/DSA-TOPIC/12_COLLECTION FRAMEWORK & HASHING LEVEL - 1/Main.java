import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
     List<String> c = new ArrayList<String>();
        c.add("Oslo");
        c.add("Paris");
        c.add("Rome");
        int index = c.indexOf("Paris");
        c.add(index, "London");
        System.out.println(c);
    }
    
}
