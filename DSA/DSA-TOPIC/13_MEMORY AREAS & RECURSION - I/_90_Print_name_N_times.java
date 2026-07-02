public class _90_Print_name_N_times {
    public static void main(String[] args) {

        int n = 1;
        printN(n);

    }

    static void printN(int n) {

        if (n == 0) {
            // System.out.println("Please pass a valid value of n:" + n);
            return;
        }
        System.out.println("Hello world:" + n);
        printN(n - 1);
    }
}