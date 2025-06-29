import { useNavigate } from "react-router";
import './styles/GoBackButton.css';


function GoBackButton(props) {
    let navigate = useNavigate();

    let position = props.position ? props.position : [10,10];

    return (
        <div className="gobackbutton" onClick={() => navigate(-1)} style={{ left: position[0], top: position[1] }}>
            {"<"}
        </div>
    )
}

export default GoBackButton;