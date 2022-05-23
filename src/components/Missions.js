import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const arrayMissions = missions.map((mission) => {
      const { name, year, country, destination } = mission;
      return (
        <MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      );
    });
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="mission-cards">
          { arrayMissions }
        </div>
      </div>
    );
  }
}

export default Missions;
