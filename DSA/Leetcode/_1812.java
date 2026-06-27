public class _1812{
    public static void main(String[] args) {
        
        String s1="h3";
        char c1=s1.charAt(0);
        int number=c1;
        char c2=s1.charAt(1);
        int number2=Character.getNumericValue(c2);
        int ans=number+number2;
        if(ans%2==0){
            System.out.println("black");
        }
        else{
            System.out.println("white");
        }

        
    }
}