interface Array<T> {
    removeItem(item: any): void;
}

Object.defineProperties(Array.prototype, {
    removeItem: {
        configurable: false,
        writable: false,
        enumerable: false,
        value(item: any) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === item) {
                    this.splice(i, 1);
                    break;
                }
            }
        },
    },
});
