//Week 3 worksheet for linkedlist and iterator
import java.io.*;
import java.util.*;
interface CSE12List<E>{
    public void insert(int index, E element);
    public void print();
    //other functions such as remove, find, etc are omitted
} 
class FriendList<E> implements CSE12List<E>{
    //Inner class that is a node
    class Node{
        E data;
        Node next;
        public Node(){
            data = null;
            next = null;
        }
        public Node(E data, Node before){
            if(before != null){
                this.data = data; //assign data to the node
                this.next = before.next; //link to the element behind
                before.next = this; //link from before 
            }
        }
        public Node Next(){
            return next;
        }
    }
    class FriendListIterator implements Iterator {

        private int index;
        private Node left;
        private Node right;
        private boolean canRemove;
        //constructor for the iterator
        public FriendListIterator() {

            left = head;
            right = head.Next();
            index = 0;
            canRemove = false;
            
        }

        //override next method
        public boolean hasNext() {
            return index < size;
        }

        //next method
        public E next() {
            E result = null;
            if (size == 0){
                return null;
            }
            if (((String)right.data).startsWith("a")){
                result = right.data;
            }
            if (right.next != null){
                left = left.Next();
                right = right.Next(); //각각 바꿔줌
                canRemove = true; //왜냐면 next를 한번 호출하면 remove를 할 수 있기 때문에 true로 바꿔줌
                index++; //index를 증가시켜줌
            }
            return result;
        }
    }
    //isntance variables
    private Node head;
    private Node tail;
    private int size;
    
    //constructor for FriendList
    public FriendList() {
        head = new Node(); //points to sentinel Node or dummy Node
        tail = new Node(); //points to sentinel Node or dummy Node
        head.next = tail; //head points to tail
        size = 0;
    }
    
    //insert method
    public void insert(int index, E element){
        if (index < 0 || index > size){
            return;
        }
        if (element == null){
            return;
        }
        //loop through
        Node curr = head; //creates curr to start from the beginning
        for (int i = 0; i < index; i++){ //loop through until index, we can actually make a separate method for this
            curr = curr.Next(); //curr is now the next node
        }
        Node newNode = new Node(element, curr); //create a new node at the index with the element
        size++;
    }
    //print method
    public void print(){
        if (size == 0){
            return;
        }
        Node curr = head;
        for (int i = 0; i < size; i++){
            curr = curr.Next();
            if (curr!= null){
                System.out.println(curr+" "+curr.data+" "+curr.Next());
            }
        }
    }

    //iterator method that returns an iterator
    public Iterator<E> iterator() {
        return new FriendListIterator();
    }
}

public class LLIterator {
    public static void main(String[] args) {
        FriendList<String> myfriends = new FriendList<String>();

        myfriends.insert(0, "alice");
        myfriends.insert(1, "bob");
        myfriends.insert(2, "abigail");
        myfriends.insert(3, "charlie");
        
        //print entire list
        myfriends.print();
        
        //use iterator to specially print
        for (Iterator<String> it1 = myfriends.iterator(); it1.hasNext();) {

            String s = it1.next();
            if (s != null)
                System.out.println(s);
        }
    }
}
