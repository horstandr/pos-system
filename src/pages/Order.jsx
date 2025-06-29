import ItemView from "../components/ItemView";
import Info from "../data/Info";
import StoreItems from '../data/StoreItems';

function Order() {
    return (
        <div className="order">
            <h1>Order {Info.globalOrders.length + 1}</h1>
            <ItemView items={StoreItems} />
        </div>
    );
}

export default Order;