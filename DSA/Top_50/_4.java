
public class _4 {

    public static void main(String[] args) {
        int accounts[][] = {{2,8,7},{7,1,3},{1,9,5}} ;
        int maxValue=Integer.MIN_VALUE;

        for (int i = 0; i < accounts.length; i++) {
            int sum=0;
            for (int j = 0; j < accounts[i].length; j++) {
                sum=sum+accounts[i][j];
                System.out.println("sum:"+sum);
                maxValue=Math.max(maxValue, sum);
                
            }
            System.out.println();
            
            System.out.println(maxValue);
            System.out.println('c'-'a');
        }
    }
}