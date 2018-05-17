
// maybe makes it a little more interesting
const msgProcessor = (firstWord, args) => ( (args && args.length > 0) ? firstWord += " " + args.join(" ") : firstWord )

const errorMsg = origin => `Some error from '${origin}', unsure how to catch error properly :(`



export default class Worker {

  constructor(){
    this.sayHello = this.sayHello.bind(this);
    this.sayMeh = this.sayHello.bind(this);
    this.onmessage = this.onmessage.bind(this);
    this.onerror = this.onerror.bind(this);
  }

  sayHello(args) {
    console.log('sayHello')
    if ( Math.random() < 1/3 ) throw errorMsg('hello')
    this.postMessage({message: msgProcessor("Hello", args)});
  }

  sayMeh(args){
    console.log('sayMeh')
    if ( Math.random() < 1/3 ) throw errorMsg('meh')
    this.postMessage({message: msgProcessor("Meh", args)});
  }

  onerror(event){ throw event.data.message }

  onmessage(event){
    const {method, args} = event.data;
    switch (method){
      case 'hello':
        return this.sayHello(args);
      case 'meh':
      default:
        this.sayMeh(args);
    }
  }
}
