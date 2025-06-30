import './styles/OrdersList.css';

function OrdersList(props) {
    return (
        <div className="orderslist">
            <h4>Orders:</h4>
            <div className='orders'>
                {props.items.map(({name,quantity,pricePS}) => {
                return(<p>{quantity}x {name} = €{pricePS*quantity}</p>);
                })}
            </div>
        </div>
    );
}

export default OrdersList;