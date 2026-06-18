public class _73_Count_vowels_and_consonants {
    public static void main(String[] args) {
        int countVowels=0;
        int consonant=0;
        String s1="AEIOU" ; // v:2 c:s1.length-v2 = 5-2 =3;
        for (int i = 0; i < s1.length(); i++) {
            if(s1.charAt(i)=='A'||s1.charAt(i)=='E'||s1.charAt(i)=='O'||s1.charAt(i)=='I'|| s1.charAt(i)=='U'){
                countVowels=countVowels+1;
            }
        }

        consonant=s1.length()-countVowels;
        System.out.println("V:"+countVowels+","+"C:"+consonant);
    }
    
}
