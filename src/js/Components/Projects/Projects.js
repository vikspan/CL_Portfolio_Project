import React, { useEffect, useState } from "react";
import "./_projects.scss";
import Project from "./Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const api = process.env.API_ENDPOINT;
  const apiKey = process.env.API_KEY;

  const getProjects = () => {
    fetch(api, {
      headers: {
        "X-SILO-KEY": apiKey
      }
    })
      .then(response => response.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="projects row">
      {
        projects.map((project, i) => (
          <div key={i} className="col-4">
            <Project project={project} />
          </div>
        ))
      }
    </div>
  )
}

export default Projects;