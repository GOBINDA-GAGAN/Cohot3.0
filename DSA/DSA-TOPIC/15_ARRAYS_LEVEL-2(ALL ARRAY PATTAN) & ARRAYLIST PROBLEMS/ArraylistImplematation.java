import java.util.Arrays;

class ArraylistImplematation {
    int arr[];
    int size;
    int capacity;

    public ArraylistImplematation(int capacity) {
        this.arr = new int[capacity];
        this.size = 0;
        this.capacity = capacity;

    }

    void add(int data) {
        if (size == arr.length) {
            grow();
        }
        arr[size] = data;
        size++;

    }

    void grow() {
        int newCapacity = arr.length + (arr.length / 2);
        int newArray[];
        newArray = new int[newCapacity];

        for (int i = 0; i < arr.length; i++) {
            newArray[i] = arr[i];
        }
        arr = newArray;
    }

    void print() {

        System.out.print("[");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + ",");
        }
        System.out.print("]");
    }

    void addAtIndex(int data, int index) throws Exception {
        if (index < 0 || index > size) {
            throw new Exception("Array out of bount excption");
        }
        if (size == arr.length)
            grow();

        for (int i = size; i > index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = data;
        size++;
    }

    public static void main(String[] args) throws Exception {

        ArraylistImplematation list = new ArraylistImplematation(10);

    
        list.addAtIndex(13, 0);

        list.print();

    }
}