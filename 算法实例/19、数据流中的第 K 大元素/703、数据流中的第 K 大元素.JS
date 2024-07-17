class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    extractMin() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(index) {
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();
        nums.forEach(num => this.minHeap.insert(num));
        while (this.minHeap.heap.length > k) {
            this.minHeap.extractMin();
        }
    }

    add(val) {
        if (this.minHeap.heap.length < this.k) {
            this.minHeap.insert(val);
        } else if (val > this.minHeap.heap[0]) {
            this.minHeap.extractMin();
            this.minHeap.insert(val);
        }
        return this.minHeap.heap[0];
    }
}
