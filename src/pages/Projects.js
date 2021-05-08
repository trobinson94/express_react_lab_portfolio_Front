import { useState, useEffect } from "react";

function Projects (props) {
    // Create state to hold projects
    const [projects, setProjects] = useState(null);

    // Create function to make API call
    const getProjectsData = async () => {
        // Make API call and get response 
        const response = await fetch (props.URL + "projects");
        // Turn response into JS object
        const data = await response.json();
        // Set the projects state to the data
        setProjects(data);
    };

    // Make an initial call for the data inside a useEffect so it only happens once on component load
    useEffect(() => getProjectsData(), []);

    // Define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div className="project-card">
            <h1>{project.name}</h1>
            <img src={project.image} />
            <br></br>
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ));
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects

