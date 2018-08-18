import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Collapsible accordion className="collapsible">
          <CollapsibleItem
            header="react native"
            icon="smartphone"
            className="ci"
          >
            This{' '}
            <a
              target="_blank"
              href="https://github.com/indianwolverine/react-native"
            >
              repo
            </a>{' '}
            contains code for my mobile app practice projects created using the
            react-native framework, compatible with xcode and the android sdk.
          </CollapsibleItem>
          <CollapsibleItem
            header="exponent"
            icon="keyboard_arrow_up"
            className="ci"
          >
            This{' '}
            <a
              target="_blank"
              href="https://github.com/indianwolverine/exponent"
            >
              repo
            </a>{' '}
            contains code for my mobile app practice projects created using the
            interface created by the exponent team.
          </CollapsibleItem>
          <CollapsibleItem
            header="express authentication"
            icon="security"
            className="ci"
          >
            This{' '}
            <a
              target="_blank"
              href="https://github.com/indianwolverine/react-native"
            >
              repo
            </a>{' '}
            contains all the code necessary to use an express.js back-end for
            authentication on a web app
          </CollapsibleItem>
          <CollapsibleItem header="rosalind" icon="memory" className="ci">
            <a
              target="_blank"
              href="https://github.com/indianwolverine/rosalind"
            >
              Solutions
            </a>{' '}
            to computational biology problems from the rosalind platform. May
            come in handy for biological research
          </CollapsibleItem>
          <CollapsibleItem
            header="research publication"
            icon="edit"
            className="ci"
          >
            Study on enhancing concrete strength with the addition of
            nanoparticles{' '}
            <a
              target="_blank"
              href="https://www.youngscientistjournal.org/article/bulk-mechanical-characterization-of-nanoparticle-concrete-equivalent-mortars"
            >
              published
            </a>{' '}
            in the 2017 edition of the peer-reviewed scientific journal, Young
            Scientist{' '}
          </CollapsibleItem>
          <CollapsibleItem header="youtube clone" icon="cast" className="ci">
            <a
              target="_blank"
              href="https://github.com/indianwolverine/youtube-clone"
            >
              Clone
            </a>{' '}
            of the popular video website, Youtube, made using the react.js
            framework
          </CollapsibleItem>
          <CollapsibleItem header="personal website" icon="code" className="ci">
            This{' '}
            <a target="_blank" href="/">
              website
            </a>! Feel free to use any of the{' '}
            <a
              target="_blank"
              href="https://github.com/indianwolverine/indianwolverine.github.io/tree/master/aditya-srivastava"
            >
              source code
            </a>{' '}
            for your own personal projects (with proper attribution of course)!
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default Projects;
