import './styles/OrdersList.css';

function OrdersList(props) {
    return (
        <div className="orderslist">
            <h4>Orders:</h4>
            <div className='orders'>
                {/* {props.items.map(({name,quantity,pricePS}) => {
                return(<p>{quantity}x {name} = €{pricePS*quantity}</p>);
                })} */}
                {
                    props.orders.map((
                        { id, items, totalPrice }
                    ) => {
                        return (
                            <div className="order">
                                <h5>Order {id}</h5>
                                {items.map(({name, quantity, pricePS}) => {
                                    return(<p>{quantity}x {name} = {quantity}x{pricePS} = €{pricePS*quantity}</p>)
                                })}
                                <p>
                                    Subotal: €{totalPrice}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default OrdersList;