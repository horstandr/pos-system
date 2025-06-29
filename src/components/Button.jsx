import { useNavigate } from "react-router";

import './styles/Button.css';

function Button(props) {
    let navigate = useNavigate();

    return (
        <div className="button" onClick={() => navigate(props.to)}>
            <p>{props.children}</p>
        </div>
    );
}

export default Button;