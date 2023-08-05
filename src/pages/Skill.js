import '../css/Skill.css';

export default function Skill() {
  return (
    <section className="skills" id='skill'>
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-row">

        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>80%</span></h3>
                <div className="bar"><span style={{width: '80%'}}></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>60%</span></h3>
                <div className="bar"><span style={{width: '60%'}}></span></div>
              </div>
              
              <div className="progress">
                <h3>Javascript <span>70%</span></h3>
                <div className="bar"><span style={{width: '70%'}}></span></div>
              </div>

              <div className="progress">
                <h3>PHP <span>65%</span></h3>
                <div className="bar"><span style={{width: '65%'}}></span></div>
              </div>

            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Web Development <span>65%</span></h3>
                <div className="bar"><span style={{width: '65%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Client Dealings <span>70%</span></h3>
                <div className="bar"><span style={{width: '70%'}}></span></div>
              </div>
              
              <div className="progress">
                <h3>API Integration <span>75%</span></h3>
                <div className="bar"><span style={{width: '75%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Database <span>65%</span></h3>
                <div className="bar"><span style={{width: '65%'}}></span></div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
