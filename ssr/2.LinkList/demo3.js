import Node from './node'
export default class LinkedList {
	constructor() {
		this._length = 0;
		this._head = null;
	}
 
	/**
	 * [在链表结尾插入]
	 * @param  {[*]} val [要插入的节点]
	 * @return {[type]}     [description]
	 */
	append(val) {
		let node = new Node(val);
		
		if (!this._head) {
			this._head = node;
		}else {
			let current = this._head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this._length++;
	}
 
	/**
	 * [在指定位置前插入]
	 * @param  {[Number]} position [插入的位置]
	 * @param  {[*]} val      [要插入的节点]
	 * @return {[type]}          [description]
	 */
	insert(position,val) {
		if (position >= 0 && position <=_length) {
			let node = new Node(val);
			let current = this._head;
			let index = 0;
			let pre = null;
			if(position === 0) {
				node.next = this._head;
				this._head = node;
			}else {
				while (index++ < position) {
					pre = current;
					current = current.next;
				}
				pre.next = node;
				node.next = current;
			}
			this._length++;
		}
	}
	/**
	 * [移除第一个找到的值]
	 * @param  {[*]} val [要移除的值]
	 * @return {[type]}     [description]
	 */
	remove(val) {
		let current = this._head;
		let pre = null;
		if (val === this._head.value) {
			this._head = current.next;
		}else{
			while(current.next && current.value !== val) {
				pre = current;
				current = current.next;
			}
			pre.next = current.next;
			this._length--;
		}
	}
	/**
	 * [查找指定值的位置]
	 * @param  {[*]} val  [要查找的值]
	 * @return {[Number]} [位置]
	 */
	indexOf(val) {
		let current = this._head;
		let index = 0;
		while(current.next && current.value !== val) {
			current = current.next;
			index++;
		}
		return index;
	}
	/**
	 * [获取链表的值]
	 * @return {[Array]} [链表值组成的数组]
	 */
	values() {
		let current = this._head;
		let values_arr = new Array();
		while(current.next) {
			values_arr.push(current.value);
			current = current.next;
		}
		values_arr.push(current.value);
		return values_arr;
	}
	/**
	 * [链表是否为空]
	 * @return {Boolean} [description]
	 */
	isEmpty() {
		return this._length === 0;
	}
	/**
	 * [链表长度]
	 * @return {[Number]} [链表的长度]
	 */
	size() {
		return this._length;
	}
}