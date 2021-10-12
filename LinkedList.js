class LinkedList {
    constructor(){
        this.head = null 
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index){
        if (index < 0 || index >= this.length){
            return null} 

        let current = this.head // start off with the current value being the head
        for(let i = 0; i < index; i++){
            current = current.next // set the current value to the next value
        }
        return current
    }

    insertAtIndex(index, value){
        if (index = 0 ){return this.insertAtHead(value)} 

        let prev = this.getByIndex(index - 1)
        if (prev == null) return null
        
        prev.next = new LinkedListNode(value, prev.next)
        
    }


    print() {
        let output = ""
        let current = this.head
        while(current){
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class LinkedListNode {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

LinkedList.fromValues = function(...values) {
    const ll = new LinkedList()
    for (let i = values.length-1; i >= 0; i--){
        ll.insertAtHead(values[i])
    }
    return ll
}

module.exports = LinkedList