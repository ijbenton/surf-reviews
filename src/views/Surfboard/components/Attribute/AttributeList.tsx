import React from 'react';
import {
  performanceApproach,
  performanceSkillLevel,
  shapeEntryRocker,
  shapeExitRocker,
  shapeNose,
  shapeRails,
  shapeTailWidth,
  waveBreak,
  wavePower,
  waveSize,
} from '../../../../../constants/surfboard';
import { Surfboard } from '../../../../../types/surfboard';
import AttributeBar from './AttributeBar';

type AttributeListProps = {
  item: Surfboard;
};

const AttributeList = ({ item }: AttributeListProps) => {
  return (
    <div>
      <h2 className='text-center text-xl font-semibold'>WAVE</h2>
      <AttributeBar data={item.wave.size} attributes={waveSize} title='size' />
      <AttributeBar
        data={item.wave.break}
        attributes={waveBreak}
        title='break'
      />
      <AttributeBar
        data={item.wave.power}
        attributes={wavePower}
        title='power'
      />
      <h2 className='text-center text-xl font-semibold pt-3'>PERFORMANCE</h2>
      <AttributeBar
        data={item.performance.approach}
        attributes={performanceApproach}
        title='approach'
      />
      <AttributeBar
        data={item.performance.skillLevel}
        attributes={performanceSkillLevel}
        title='skill level'
      />
      <h2 className='text-center text-xl font-semibold pt-3'>SHAPE</h2>
      <AttributeBar
        data={item.shape.rails}
        attributes={shapeRails}
        title='rails'
      />
      <AttributeBar
        data={item.shape.nose}
        attributes={shapeNose}
        title='nose'
      />
      <AttributeBar
        data={item.shape.tailWidth}
        attributes={shapeTailWidth}
        title='tail width'
      />
      <AttributeBar
        data={item.shape.entryRocker}
        attributes={shapeEntryRocker}
        title='entry rocker'
      />
      <AttributeBar
        data={item.shape.exitRocker}
        attributes={shapeExitRocker}
        title='exit rocker'
      />
    </div>
  );
};

export default AttributeList;
