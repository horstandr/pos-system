import { useParams } from "react-router";
import Info from '../data/Info';
import OrdersList from "../components/OrdersList";

function Table() {
    let params = useParams();
    let tableNo = params.tableNo;

    let table = Info.tables[tableNo];

    return (
        <div className="table">
            <h1>{table.name}</h1>
            <OrdersList items={table.items} />
            <h4>Total: €{table.totalPrice}</h4>
        </div>
    );
}

export default Table;