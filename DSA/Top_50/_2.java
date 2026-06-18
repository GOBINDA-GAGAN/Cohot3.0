public class _2 {
    public static void main(String[] args) {
        int arr[] = { 1,1,1,1,1 };

        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            for (int j = 0; j <= i; j++) {

                sum = sum + arr[j];
                System.out.print(arr[j]);
            }
            System.out.print("-> sum:"+sum);
            System.out.println();

        }

    }
}
