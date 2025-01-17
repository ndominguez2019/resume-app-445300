import React from 'react';
import './ProjectWidgetContainer.css';

const ProjectWidgetContainer = () => {
  return (
    <div className="project-widget-container">
      <div className="project-widget">
        <div className="top-cell"></div>
        <div className="project-data-grid">
          <div className="project-data-cell">Cell 1</div>
          <div className="project-data-cell">Cell 2</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWidgetContainer;