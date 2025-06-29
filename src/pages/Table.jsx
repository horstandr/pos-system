import { useParams } from "react-router";
import Info from '../data/Info';
import OrdersList from "../components/OrdersList";
import GoBackButton from "../components/GoBackButton";

function Table() {
    let params = useParams();
    let tableNo = params.tableNo;

    let table = Info.tables[tableNo];

    return (
        <>
        <GoBackButton />
        <div className="table">
            <h1>{table.name}</h1>
            <OrdersList orders={table.orders} />
            <h4>Total: €{table.totalPrice}</h4>
        </div>
        </>
    );
}

export default Table;