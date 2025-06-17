import {useParams} from "react-router-dom";

import {petProjects} from "./../helpers/petProjectsList";
import BtnGitHub from "./../components/bntGitHub/BtnGitHub";


const PetProject = () => {
    const {id} = useParams();
    const petProject = petProjects[id];
    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{petProject.title}</h1>
                    
                    <img src={petProject.imgBig} alt={petProject.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p><span className="project-details__desc--accent">Описание:</span> {petProject.description}</p>
                        <br/>
                        <p><span className="project-details__desc--accent">Цель:</span> {petProject.target}</p>
                        <br/>
                        <p><span className="project-details__desc--accent">Навыки:</span> {petProject.skills}</p>
                    </div>

                    {petProject.gitHubLink && (
                        <BtnGitHub link="https://github.com/"/>
                    )}

                </div>
            </div>
        </main>
    );
}
 
export default PetProject;