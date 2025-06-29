const Info = {
    restaurantName: 'Fish man',
    tables: [
        {
            name: 'Table 1',
            index: 0,
            items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
            totalPrice: 50 //* pricePS means price Per Serving.
        },
        {
            name: 'Table 2',
            index: 1,
            items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
            totalPrice: 50 //* pricePS means price Per Serving.
        },
        {
            name: 'Table 3',
            index: 2,
            items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
            totalPrice: 50 //* pricePS means price Per Serving.
        },
        {
            name: 'Table 4',
            index: 3,
            items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
            totalPrice: 50 //* pricePS means price Per Serving.
        },
        {
            name: 'Table 5',
            index: 4,
            items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
            totalPrice: 50 //* pricePS means price Per Serving.
        }
    ],
    paymentTypes: ['Cash', 'Visa', 'MasterCard'],
    globalOrders: [
        {items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}], totalPrice: 50} //* pricePS means price Per Serving.
    ],
    totalProfit: 158392,
    dailyProfit: 50
}

export default Info;