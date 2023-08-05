import '../css/Project.css';

export default function Project() {
  return (
    <section className="project" id='project'>
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="project-row">
        <div className="project-column">

          <div className="project-box">
            <div className="project-content">
              <div className="content">
                <h3><i className='bx bx-cog'>&nbsp;</i>The Rethink Academy</h3>
                <p>Developed Course module and dashboard.
                  Wrote reports and had meetings with the management and client to provide
                  updates on project progress.
                  Zoom Integration with the Application.
                  Developed custom APIs that can be integrated into the application.</p>
              </div>
            </div>

            <div className="project-content">
              <div className="content">
                <h3><i className='bx bx-cog'>&nbsp;</i>Excellenc3</h3>
                <p>Created several application in the tool Like Project management tool, Store
                management application, Sample Tracking and Traceablility system and Electrower.
                Created Dashboard for all the application mentioned.
                Maintainence and Management of the applications.</p>
              </div>
            </div>

            <div className="project-content">
              <div className="content">
                <h3><i className='bx bx-cog'>&nbsp;</i>Salesforce and Hubspot Integration</h3>
                <p>Integrated APIs to connect the applications with the backend. Integrated Salesforce and HubSpot APIs to connect with the application.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
