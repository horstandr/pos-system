import { Link } from "react-router";

import Info from "../data/Info";
import NumberPresent from "../components/NumberPresent";
import '../styles/Admin.css';

function Admin() {
return (
<div className="admin-panel">
    <h1>{Info.restaurantName}: Admin Panel</h1>
    <div className="profits">
        <NumberPresent amount={Info.dailyProfit} description="Today's profit" />
        <NumberPresent amount={Info.totalProfit} description="All time profit" />
    </div>
    <h1>Tables</h1>
    <div className="tables">
        {Info.tables.map(({name}) => {return(<div className="table">{name}</div>);})}
    </div>
</div>
);
}

export default Admin;