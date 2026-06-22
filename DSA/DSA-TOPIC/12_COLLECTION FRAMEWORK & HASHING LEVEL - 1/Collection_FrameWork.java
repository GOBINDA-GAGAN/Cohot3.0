import java.util.ArrayList;

public class Collection_FrameWork {
 
    public static void main(String[] args) {
        //Arrylist
        ArrayList<Integer> list=new ArrayList<>();
        list.add(3);
        list.add(5);
        list.add(4);
        list.add(8);
        System.out.println(list);
        System.out.println(list.get(0));
        list.add(0,8);
        System.out.println(list);
        list.remove(3);
        

        
    }
 }
  
  