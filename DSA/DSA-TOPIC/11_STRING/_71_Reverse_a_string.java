import java.util.Arrays;

public class _71_Reverse_a_string {

    public static void main(String[] args) {
        String s1 = "HEllO";
        reverse1(s1);
        String s2= "Gobinda";
        reverse2(s2);
        String s3="Alok";
        reverse3(s3);
        String s4="Alok30";
        reverse3(s4);

    }

    public static void reverse1(String s1) {
        char c1[] = s1.toCharArray();
        int start = 0;
        int end = s1.length() - 1;
        while (start < end) {
            char temp = c1[start];
            c1[start] = c1[end];
            c1[end] = temp;
            start++;
            end--;

        }
        System.out.println(new String(c1));
    }

    public static void reverse2(String s1) {
        String Orginal = s1;
        String reveString = "";
        for (int i = Orginal.length() - 1; i >= 0; i--) {
            reveString = reveString + Orginal.charAt(i);
        }
        System.out.println(reveString);

    }

    //string bulder firstest way
    public static void reverse3(String s3){
        String Orginal=s3;
        String reveString= new StringBuilder(Orginal).reverse().toString();
        System.out.println(reveString);
    }
    //threed shefty
    public static void reverse4(String s4){
        String Orginal=s4;
        String reveString= new StringBuffer(Orginal).reverse().toString();
        System.out.println(reveString);
    }

}