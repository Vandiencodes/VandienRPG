import React, { useEffect, useContext, useState } from 'react';
import GameContext from './GameContext';
import Person from './Person';
import utils from './utils';
import GameMap from './img/GameMap.jpg';
import { spawnMonsters } from './Monsters';

const mapWidth = 600;
const mapHeight = 800;

const OverworldMap = () => {
  const { setMonsters } = useContext(GameContext);

  // Hero and image data
  const hero = new Person({
    isPlayerControlled: true,
    x: utils.withGrid(5),
    y: utils.withGrid(6),
  });

  const lowerSrc = "./img/GameMap.jpg";

  useEffect(() => {
    // Define the number of monsters and locations
    const numberOfMonsters = 10;
    const locations = Array.from({ length: 10 }, () => ({
      x: Math.random() * mapWidth,
      y: Math.random() * mapHeight,
    }));

    // Spawn monsters
    const newMonsters = spawnMonsters(numberOfMonsters, locations);

    // Update the monsters state using setMonsters from GameContext
    setMonsters(newMonsters);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMonsters]);

  return (
    <div>
      {/* Your OverworldMap JSX content */}
    </div>
  );
};

export default OverworldMap;
