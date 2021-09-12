
/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`); // Почему иначе не удается??? Просто value не работает.
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!"); 
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return result;
  },
};

// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).removeLink(0).finishChain());