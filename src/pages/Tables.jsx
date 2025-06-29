import '../styles/Tables.css';
import Info from '../data/Info';
import OrdersList from '../components/OrdersList';

import { useNavigate } from 'react-router';

function Tables() {
  let navigate = useNavigate();

  return (
    <div className="Tables">
      <div className="table-container">
          {Info.tables.map(
            (
              { name, orders, totalPrice }, index
            ) => {
              return (
                <>
                  <div className='table' id={ 'table' + index } onClick={() => navigate("/tables/" + index)}>
                    <h3>{name}</h3>
                    <OrdersList orders={orders} />
                    <h4>Total: €{totalPrice}</h4>
                  </div>
                </>
              )
            }
          )}
      </div>
    </div>
  );
}

export default Tables;