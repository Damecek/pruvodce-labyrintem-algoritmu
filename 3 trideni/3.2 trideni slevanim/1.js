class LinkedList {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
    
    toString() {
        return `${this.value} -> ${this.next}`;
    }
    
    get length() {
        return this.next ? 1 + this.next.length : 1;
    }
}

function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }
    let left = list;
    let right = list;
    let prev = list;
    for (let i = 0; i < list.length / 2; i++) {
        prev = right;
        right = right.next;
    }
    prev.next = null;
    left = mergeSort(left);
    right = mergeSort(right);
    let result = new LinkedList(null, null);
    let head = result;
    while(left && right) {
        if (left.value <= right.value) {
            result.next = left;
            left = left.next;
        } else {
            result.next = right;
            right = right.next;
        }
        result = result.next;
    }
    if (left) {
        result.next = left;
    }
    if (right) {
        result.next = right;
    }
    return head.next;
}


console.log(mergeSort(new LinkedList(3, new LinkedList(5, new LinkedList(1, null)))).toString());