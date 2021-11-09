const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《Uninx编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《深入理解计算机原理》',
                date: '2019-9',
                price: 120.00,
                count: 1
            }
        ]
    },
    methods: {
        colLength() {
            return Object.getOwnPropertyNames(this.books).length - 1
        },
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        total() {
            //let result = 0;
            //for (let book of this.books) {
            //    result += book.price * book.count
            //}
            //return result
            return this.books.reduce(function(pre, book) {
                return pre + book.price * book.count
            }, 0)
        },
    },
    filters: {
        showPrice(price) {
            return "¥"+price.toFixed(2)
        }
    }

})