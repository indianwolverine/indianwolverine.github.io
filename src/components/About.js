import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';
import Aditya from '../img/aditya2.png';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Card
          header={<CardTitle reveal image={Aditya} waves="light" />}
          title="Hi, I'm Aditya!"
          reveal={
            <div>
              <hr />
              <p id="card-by">I am a student at UC Berkeley!</p>
              <span id="about-card">
                <p>
                  When not studying for{' '}
                  <span className="italic">Computer Science</span> and{' '}
                  <span className="italic">Molecular and Cell Biology</span>{' '}
                  midterms, I like to{' '}
                  <a target="_blank" href="https://github.com/indianwolverine">
                    code
                  </a>, read the{' '}
                  <a href="https://www.newyorker.com/magazine" target="_blank">
                    New Yorker
                  </a>, play cricket and quiz bowl, and hike the Berkeley hills.
                </p>
                <p>
                  If you are interested in working on a project with me,
                  starting a dialogue about material under{' '}
                  <span className="italic">Currently</span>, or just want to
                  hang out (or recruit me for a job), head over to{' '}
                  <span className="italic">Contact Me</span>.
                </p>
              </span>
            </div>
          }
        />
      </div>
    );
  }
}

export default About;
