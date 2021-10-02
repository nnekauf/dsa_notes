const { expect } = require('@jest/globals')
const { describe } = require('yargs')
const LinkedList = require('./LinkedList')

describe("#insertAtHead", () => {
    test(" it adds the element to the beginning of the list", () =>{
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})