const linkedList = () => {
    let head = null;
    let length = 0;

    //adds new node containing value to end of linked list
    const append = (value) => {
        const newNode = node(value, null);

        if (head === null) {
            head = newNode;
        } else {
            let currentNode = head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        length++;
    };
    // adds new node containing value to the start of linked list
    const prepend = (value) => {
        const newNode = node(value, head);
        head = newNode;
        length++;
    };

    // returns the size/length of linked list
    const size = () => {
        console.log(length);
        return length;
    };

    //returns the head of linked list
    const getHead = () => {
        console.log(head);
        return head;
    };

    //inside fn - checks if list is empty
    const emptyList = (node = head) => {
        if (node == null) {
            console.log('The list is empty');
            return True;
        }
        return false;
    };

    // returns the tail of linked list
    const getTail = () => {
        let currentNode = head;
        if (emptyList()) return;
        while (currentNode !== null) {
            if (currentNode.next == null) {
                console.log(`The tail node is ${currentNode.value}`);
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
    };

    // at(index) returns the node at the given index
    const at = (index) => {
        let currentNode = head;
        if (emptyList()) return;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
            if (currentNode == null) {
                console.log(`There is no element at the index of ${index}!`);
                return;
            }
        }
        console.log(currentNode.value);
        return;
    };

    // removes the last element from the list
    const pop = () => {
        let currentNode = head;
        if (emptyList()) return;
        if (currentNode.next == null) {
            head = null;
        }
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        const lastNode = currentNode;
        currentNode = head;
        while (currentNode.next !== lastNode) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        length--;
    };

    // returns true if the passed in value is in the list and otherwise returns false.
    const contains = (val) => {
        let currentNode = head;
        if (emptyList()) return;
        while (currentNode !== null) {
            if (currentNode.value == val) {
                console.log('True');
                return true;
            }
            currentNode = currentNode.next;
        }
        console.log('False');
        return false;
    };

    // returns the index of the node containing value, or null if not found.
    const find = (val) => {
        let count = 0;
        let currentNode = head;
        while (currentNode !== null) {
            if (currentNode.value == val) {
                console.log(`The element ${val} is at index ${count}`);
                return count;
            }
            count++;
            currentNode = currentNode.next;
        }
        console.log(`${val} is not an element`);
        return -1;
    };

    // represents your LinkedList objects as strings
    const toString = () => {
        let currentNode = head;
        if (emptyList()) return;
        let str = '';
        do {
            str += ` ${currentNode.value} ->`;
            currentNode = currentNode.next;
        } while (currentNode !== null);
        console.log(str.slice(0, -2));
        return str.slice(0, -2);
    };

    // inserts node of passed in value at passed in index
    const insertAt = (val, index) => {
        let prevNode = head;
        if (emptyList()) return;
        if (index > length - 1) {
            console.log(`index ${index} doesn't exist`);
            return;
        }
        if (index == 0) {
            prepend(val);
        } else {
            for (let j = 1; j < index; j++) {
                prevNode = prevNode.next;
            }
            const nextNode = prevNode.next;
            newNode = node(val, nextNode);
            prevNode.next = newNode;
            length++;
        }
    };

    //removes node at given index;
    const removeAt = (index) => {
        if (emptyList()) return;
        if (index > length - 1) {
            console.log(`index ${index} doesn't exist`);
            return;
        }

        let prevNode = head;
        if (index == 0) {
            head = head.next;
        } else {
            for (let j = 1; j < index; j++) {
                prevNode = prevNode.next;
            }
            prevNode.next = prevNode.next.next;
        }
        length--;
    };

    return {
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
};

const node = (value, next) => {
    return { value, next };
};
