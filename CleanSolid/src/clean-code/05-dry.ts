
type Size = ''|'S'|'M'|'L';
class Product {
    constructor(
        public name: string= '',
        public price: number= 0,
        public size: Size = '',
    ){}

    toString() {
        if(!this.isProductReady()) return;
        return  `${this.name} (${this.price}), ${this.size}`;
    }

    isProductReady(): boolean {
        for (const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if( (<string>this[key]).length <= 0 ) throw Error(`${ key } is empty`);
                break;
                case 'number': 
                if( (<number>this[key]) < 0 ) throw Error(`${ key } is zero`);
                break;
                default:
                    throw Error(`${ typeof this[key ]} is  not valid`)
            }
            
        }
        return true;
    }
}

(() => {
    const bluePants = new Product("Camisa",2,'M');
    console.log(bluePants.toString());
})();