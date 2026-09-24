import java.util.ArrayList;
import java.util.List;

class TreeNode{
    int val;
    List<TreeNode> child;
    TreeNode( int value ){
        this.val = value;
        this.child = new ArrayList<>();

    }
    public void add(TreeNode l){
        child.add(l);
    }
}
public class tree {
    public static void main(String[] args) {
        TreeNode n1 = new TreeNode(10);
        TreeNode n2 = new TreeNode(20);
        TreeNode n3 = new TreeNode(30);
        TreeNode n4 = new TreeNode(40);
        TreeNode n5 = new TreeNode(50);
        TreeNode n6 = new TreeNode(60);
        TreeNode n7 = new TreeNode(70);
        TreeNode n8 = new TreeNode(80);
        TreeNode n9 = new TreeNode(90);
        n1.child.add(n2);
        n1.child.add(n3);
        n2.child.add(n4);
        n2.child.add(n5);
        n4.child.add(n6);
        n4.child.add(n7);
        n6.child.add(n8);
        n6.child.add(n9);

    }
}

//binary tree is a hierarchy structure where data is stored in a hierarchical manner. 
// It is a non-linear data structure where each node has at most two children 
// eg -Bank