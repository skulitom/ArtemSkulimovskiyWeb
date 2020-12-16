import React from 'react';
import AboutMe from './AboutMe';
import ProjectExperience from './ProjectExperience';

const HomePage = () => {
   return <>
      <div className="title">
         <h1>Artem Skulimovskiy</h1>
      </div>
      <AboutMe />
      <ProjectExperience />
   </>
}

export default HomePage;