import './styles/NumberPresent.css';

function NumberPresent(props) {
    return (
        <div className="number-presentation">
            <h1 className="numberpresent-h1">€{props.amount}</h1>
            <h3 className="numberpresent-h3">{props.description}</h3>
        </div>
    );
}

export default NumberPresent;