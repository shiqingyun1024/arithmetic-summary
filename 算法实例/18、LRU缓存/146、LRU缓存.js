class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = new Map(); // 用于快速查找
        this.head = new Node(); // 链表头节点，不存储数据
        this.tail = new Node(); // 链表尾节点，不存储数据
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key) {
        if (this.hash.has(key)) {
            const node = this.hash.get(key);
            this.moveToHead(node); // 将访问的节点移到链表头部
            return node.value;
        }
        return -1;
    }
    put(key, value) {
        if (this.hash.has(key)) {
            const node = this.hash.get(key);
            node.value = value; // 更新值
            this.moveToHead(node); // 移到头部
        } else {
            const newNode = new Node(key, value);
            this.hash.set(key, newNode);
            this.addToHead(newNode); // 插入到头部
            if (this.hash.size > this.capacity) {
                // 超出容量，删除尾部节点
                const removedNode = this.removeTail();
                this.hash.delete(removedNode.key);
            }
        }
    }
    // 移动到头部
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
    // 添加到头部
    addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
    // 移除节点
    removeNode(node) {
        // 使用双列表的删除方法
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    // 
    removeTail() {
        const removedNode = this.tail.prev;
        this.removeNode(removedNode);
        return removedNode;
    }
}
