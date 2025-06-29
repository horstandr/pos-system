const Info = {
    restaurantName: 'De Jasmijn',
    tables: [
        {
            name: 'Tafel 1',
            index: 0,
            orders: [
                {
                    id: "001",
                    madeAt: Date(20402405),
                    items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
                    totalPrice: 50 //* pricePS means price Per Serving.
                }
            ],
            totalPrice: 50
        },
        {
            name: 'Table 2',
            index: 1,
            orders: [
                {
                    id: "092",
                    madeAt: Date(20402405),
                    items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
                    totalPrice: 50 //* pricePS means price Per Serving.
                }
            ],
            totalPrice: 50
        },
        {
            name: 'Table 3',
            index: 2,
            orders: [
                {
                    id: "036",
                    madeAt: Date(20402405),
                    items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
                    totalPrice: 50 //* pricePS means price Per Serving.
                }
            ],
            totalPrice: 50
        },
        {
            name: 'Table 4',
            index: 3,
            orders: [
                {
                    id: "047",
                    madeAt: Date(20402405),
                    items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
                    totalPrice: 50 //* pricePS means price Per Serving.
                }
            ],
            totalPrice: 50
        },
        {
            name: 'Table 5',
            index: 4,
            orders: [
                {
                    id: "090",
                    madeAt: Date(20402405),
                    items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
                    totalPrice: 50 //* pricePS means price Per Serving.
                }
            ],
            totalPrice: 50
        },
        {
            name: 'Table 6',
            index: 5,
            orders: [
                {
                    id: "023",
                    madeAt: Date(20402405),
                    items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}],
                    totalPrice: 50 //* pricePS means price Per Serving.
                }
            ],
            totalPrice: 50
        },
    ],
    paymentTypes: ['Cash', 'Visa', 'MasterCard'],
    globalOrders: [
        {
            id: "284",
            madeAt: Date(1),
            items: [{name: 'Spinach', quantity: 1, pricePS: 10}, {name: 'Burger', quantity: 2, pricePS: 20}], 
            totalPrice: 50
        }
    ],
    totalProfit: 158392,
    dailyProfit: 50
}

export default Info;