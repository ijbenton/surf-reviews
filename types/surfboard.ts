import {
  performanceApproach,
  performanceSkillLevel,
  reviewSkillLevels,
  shapeEntryRocker,
  shapeExitRocker,
  shapeNose,
  shapeRails,
  shapeTailWidth,
  waveBreak,
  wavePower,
  waveSize,
} from '../constants/surfboard';

export type Dimension = {
  height: string;
  width: string;
  thickness: string;
  volume: number | null;
};

export type Wave = {
  size: Array<typeof waveSize[number] | null>;
  break: Array<typeof waveBreak[number] | null>;
  power: Array<typeof wavePower[number] | null>;
};

export type Shape = {
  rails: Array<typeof shapeRails[number] | null>;
  nose: Array<typeof shapeNose[number] | null>;
  tailWidth: Array<typeof shapeTailWidth[number] | null>;
  entryRocker: Array<typeof shapeEntryRocker[number] | null>;
  exitRocker: Array<typeof shapeExitRocker[number] | null>;
};

export type Performance = {
  approach: Array<typeof performanceApproach[number] | null>;
  skillLevel: Array<typeof performanceSkillLevel[number] | null>;
};

export type Review = {
  description: string;
  name: string;
  date: Date;
  age: number | null;
  weight: number | null;
  height: string;
  skill: typeof reviewSkillLevels[number];
  dimension: Dimension;
  rating: Rating;
};

export type Rating = {
  speed: number;
  turning: number;
  userFriendly: number;
  paddling: number;
  quality: number;
  overall: number;
};

export type Surfboard = {
  slug: string;
  shaperUrl: string;
  description: string;
  brand: string;
  category: string;
  model: string;
  price: number;
  images: string[];
  dimensions: Dimension[];
  wave: Wave;
  performance: Performance;
  shape: Shape;
  reviews: Review[];
};
