/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeInBetween = function(list1, a, b, list2) {
    let array1 = list1;
    for (let i = 0; i < a - 1; i++) {
        array1 = array1.next;
    }
    let array2 = array1.next;
    for (let i = 0; i < b - a + 1; i++)
        array2 = array2.next;
    array1.next = list2;
    while (list2.next)
        list2 = list2.next;
    list2.next = array2;
    
    return list1;
};