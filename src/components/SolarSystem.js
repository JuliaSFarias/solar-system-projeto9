import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    // percorre planets e cria um novo componente a cada iteração, retornando uma lista de componetes (PlanetCard)
    const arrayPlanets = planets.map((planet) => {
      const { name, image } = planet;
      return (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      );
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planet-cards">
          { arrayPlanets }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
