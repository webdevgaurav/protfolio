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
                <p>- Integrated the Zoom API into our project, empowering us to incorporate robust video conferencing capabilities seamlessly. This integration enhances our project's functionality by allowing users to initiate and join Zoom meetings directly from our platform.</p>
                <p>- Developed various features within the project, notably including the Notes, Consolidated Training Module, and Homework Module. These additions enhance the platform's functionality by providing users with comprehensive tools to manage their training and educational needs.</p>
                <p>- Responsible for software maintenance across the code base.</p>
              </div>
            </div>

            <div className="project-content">
              <div className="content">
                <h3><i className='bx bx-cog'>&nbsp;</i>Excellenc3</h3>
                <p>- Excellenc³ is a no-code platform that can be easily learnt in a few hours to build, deploy and manage software applications critical to achieving business goals such as improving supply-chain efficiency, customer experience, productivity.</p>
                <p>- Developed various application using this platform like Traceability system, healthcare and medicine management system, Sales management system like RFXTech, Electrower, wowcv.</p>
                <p>- Developed a comprehensive dashboard, providing users with a centralized interface to access and visualize key data, metrics, and insights, enhancing data-driven decision-making and user experience.</p>
                <p>- Successfully integrated the Keap API, enhancing our project's capabilities by seamlessly connecting with Keap's features and data, improving automation and customer relationship management.</p>
              </div>
            </div>

            <div className="project-content">
              <div className="content">
                <h3><i className='bx bx-cog'>&nbsp;</i>PlaybookAI</h3>
                <p>- Successfully integrated Salesforce and HubSpot into our project, streamlining data flow and enhancing capabilities. This integration improved customer relationship management, data synchronization, and workflow efficiency, driving business growth and enhancing user experiences.</p>
              </div>
            </div>

            <div className="project-content">
              <div className="content">
                <h3><i className='bx bx-cog'>&nbsp;</i>Radiant</h3>
                <p>- Successfully integrated PayPal into our project, streamlining payment processing and enhancing user convenience. This integration enabled seamless transactions, providing customers with secure and efficient payment options.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
