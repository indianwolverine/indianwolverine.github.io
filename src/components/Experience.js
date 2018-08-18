import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <Collapsible accordion className="collapsible">
          <CollapsibleItem
            className="ci"
            header="Machine Learning Internship | Dec 2017 - Current"
            icon="build"
          >
            Working in a research lab at Vanderbilt to develop a machine
            learning algorithm designed to classify bladder tumors.
          </CollapsibleItem>
          <CollapsibleItem
            header="Social Welfare Research Apprenticeship | Sep 2017 - Current"
            icon="healing"
            className="ci"
          >
            Evaluated a set of domestic violence mobile applications using
            cluster analysis to identify optimal practical interventions
            <p>
              Currently collaborating with a start-up to design a chat-bot to
              serve as an effective intervention
            </p>
          </CollapsibleItem>
          <CollapsibleItem
            header="DiversaTech Technology and Marketing Consultant | Sep 2017 – Current"
            icon="whatshot"
            className="ci"
          >
            Designed the UI of a mobile app for the healthcare startup, Skylar
            Technologies, while streamlining their marketing strategy towards
            seniors
          </CollapsibleItem>
          <CollapsibleItem
            header="Nashville Mayor's Office Internship | Jan 2017 - Aug 2017"
            icon="textsms"
            className="ci"
          >
            Worked on the implementation of a web and mobile based
            <a
              target="_blank"
              href="https://hub.nashville.gov/s/?language=en_US"
            >
              {' '}
              311 application
            </a>{' '}
            for the City of Nashville, while advising the marketing team
          </CollapsibleItem>
          <CollapsibleItem
            header="Civil Engineering Research Internship | Jan 2016 - Sep 2016"
            icon="toys"
            className="ci"
          >
            Conducted a research project investigating the effects of
            nanoparticles in enhancing the strength of concrete and cementitious
            materials.{' '}
            <p>
              Study was{' '}
              <a
                target="_blank"
                href="https://www.youngscientistjournal.org/article/bulk-mechanical-characterization-of-nanoparticle-concrete-equivalent-mortars"
              >
                published
              </a>{' '}
              in the 2017 edition of the peer-reviewed scientific journal, Young
              Scientist.{' '}
            </p>
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default Experience;
