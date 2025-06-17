import { NavLink } from "react-router-dom";
import "./style.css";

const PetProject = ({title, img, index}) => {
    return ( 
        <NavLink to={'/petProject/' + index}>
            <li className="project">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
}
 
export default PetProject;