import "./style.css";
import giHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={giHubIcon} alt=""/>
            GitHub repo
        </a>
    );
}


export default BtnGitHub;