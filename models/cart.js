module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    this.reduceByOne = function(id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    // this.updateQty = function(id, newQty) {
    //     if(this.items[id].qty < newQty) {
    //         for(var i=0; i < newQty; i++) {
    //             this.items[id].qty--;
    //             this.items[id].price -= this.items[id].item.price;
    //             this.totalQty--;
    //             this.totalPrice -= this.items[id].item.price;
    //         }
    //     }else {
    //         var storedItem = this.items[id];
    //         storedItem.qty = newQty;
    //         storedItem.price = storedItem.item.price * newQty;
    //         this.totalQty + newQty;
    //         this.totalPrice += storedItem.item.price;
    //     }

        
    //     this.items[id].price -= this.items[id].item.price;
    //     this.totalQty--;
    //     this.totalPrice -= this.items[id].item.price;

    //     if (this.items[id].qty <= 0) {
    //         delete this.items[id];
    //     }
    // };

    this.removeAll = function() {
        for(var i=0; i < this.items.length; i++) {
            this.totalQty -= this.items[i].qty;
            this.totalPrice -= this.items[i].price;
            delete this.items[i];
        }
    };

    

    this.removeItem = function(id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};