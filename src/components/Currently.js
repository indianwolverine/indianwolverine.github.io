import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class Currently extends React.Component {
  render() {
    return (
      <div className="currently">
        <h5>
          This page is a showcase of items I find interesting at the moment. Use
          it as a source of inspiration.
        </h5>
        <Collapsible accordion className="collapsible">
          <CollapsibleItem
            className="ci"
            header="The Captive Mind"
            icon="class"
          >
            A{' '}
            <a
              href="https://en.wikipedia.org/wiki/The_Captive_Mind"
              target="_blank"
            >
              novel
            </a>{' '}
            by the Polish poet Czeslaw Milosz. Explores the psychological
            effects of the Soviet regime on the mind of the common people.
          </CollapsibleItem>
          <CollapsibleItem
            className="ci"
            header="Indie Rock Road Trip"
            icon="headset"
          >
            Check out this{' '}
            <a
              target="_blank"
              href="https://open.spotify.com/user/spotify/playlist/37i9dQZF1DWUoqEG4WY6ce"
            >
              playlist
            </a>{' '}
            on Spotify
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default Currently;
