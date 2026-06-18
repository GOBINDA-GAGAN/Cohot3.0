public class _72_Palindromn_using_method {

    public static void main(String[] args) {
        String s1 = "MADAM";
        System.out.println(paildrom1(s1));
        

    }

    public static boolean paildrom1(String s1) {
        int start = 0;
        int end = s1.length() - 1;
        while (start < end) {
            if (s1.charAt(start) != s1.charAt(end)) {
                return false;

            }
            start++;
            end--;

        }
        return true;

    }
}
