// 难度：中等

// 题目：
// 请你设计并实现一个满足 LRU(最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：

// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 - 1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key - value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 示例：
// 输入
// [“LRUCache”, “put”, “put”, “get”, “put”, “get”, “put”, “get”, “get”, “get”]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1); // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2); // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1); // 返回 -1 (未找到)
// lRUCache.get(3); // 返回 3
// lRUCache.get(4); // 返回 4

// 提示：
// 1 <= capacity <= 3000
// 0 <= key <= 10000
// 0 <= value <= 105
// 最多调用 2 * 105 次 get 和 put

// 解题思路：
// 要实现LRU缓存，我们可以使用哈希表（在JavaScript中是对象或Map）和双向链表来完成。双向链表用于存储缓存项，确保插入、删除操作的高效性，而哈希表用于快速查找缓存项在链表中的位置。

// 1、数据结构选择：

// 哈希表：快速查找键值对，时间复杂度O(1) 。
// 双向链表：快速在头部添加和尾部删除元素，符合LRU特性。
// 2、实现逻辑：

// get(key)操作：如果key存在于哈希表中，将对应节点移到链表头部，并返回其值；否则返回 - 1。
// put(key, value)操作：如果key已存在，更新其值并移到链表头部；如果key不存在且缓存已满，删除链表尾部节点（即最久未使用的项），然后在链表头部插入新的key - value对。
// JavaScript实现：

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
// 这段代码首先定义了一个Node类来表示缓存中的每一个键值对，包含了指向前后节点的指针。LRUCache类则实现了LRU缓存的所有功能，包括使用哈希表快速查找，以及通过双向链表来维护元素的使用顺序。get和put方法均能在平均时间复杂度O(1)内完成操作。