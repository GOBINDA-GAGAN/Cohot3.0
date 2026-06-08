// ! _118_Move Zero
//? PATTEN->TWO-POINTER
// Input:[2,3,0,2,10,0];
// Output:[2,3,2,10,0,0];

import java.util.Arrays;

class _118 {
    public static void main(String[] args) {
        int arr[] = { 2, 3, 0, 2, 10, 0 };
        bruteforce(arr, arr.length);// TC=O{N} Sc=O(N)
        System.out.println(Arrays.toString(arr));
        System.out.println("---------------------");
        optimal(arr, arr.length);
        System.out.println(Arrays.toString(arr)); // TC=O{N} Sc=O(1);

    }

    static void bruteforce(int arr[], int n) {
        // step1:Create a new array size n
        // ArrayList<Integer> arr2 = new ArrayList<>();
        int arr2[] = new int[n];
        int j = 0;
        // Step2:push all nonzero
        for (int i = 0; i < n; i++) {
            if (arr[i] != 0) {
                arr2[j] = arr[i];
                j++;
            }

        }
        // Step3:copy form arr2 to orginal array
        for (int i = 0; i < n; i++) {
            arr[i] = arr2[i];

        }
    }

    static void optimal(int arr[], int n) {
        int left = 0;
        for (int right = 0; right < n; right++) {
            if (arr[right] != 0) {
                int temp = arr[right];
                arr[right] = arr[left];
                arr[left] = temp;
                left++;
            }
        }

    }
}