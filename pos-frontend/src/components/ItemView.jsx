import './styles/ItemView.css';

function ItemView(props) {
    let items = props.items;
    return (
        <div className="itemview">
            {items.map((
                { name, price, id }, key
            ) => {
                return (
                    <div className="item" id={"item" + key}>
                        <h4>{name}</h4>
                        <h6>€{price}</h6>
                    </div>
                );
            })}
        </div>
    )

}

export default ItemView;