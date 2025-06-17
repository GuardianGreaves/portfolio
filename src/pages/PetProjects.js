import PetProject from "../components/petProject/PetProject";
import { petProjects } from "../helpers/petProjectsList";

const PetProjects = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Пет-проекты</h2>
                <ul className="projects">
                    {petProjects.map((project, index) => {
                        return (
                            <PetProject 
                                key={index} 
                                title={project.title}
                                description={project.description} 
                                img={project.img}
                                index={index} />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default PetProjects;