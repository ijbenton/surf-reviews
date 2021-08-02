export const brands = [
  'Pyzel',
  'Album',
  'Haydenshapes',
  'JS Industries',
  'Panda',
  'Sharp Eye',
  'SMTH',
  'Superbrand',
  'T. Patterson',
  'Chemistry',
  'Chilli',
  'DHD',
  'Channel Islands',
  'Lost',
  'Rusty',
  'Slater Designs',
  'Firewire',
  'Aipa',
  'MF Softboards',
] as const;

export const categories = [
  'Shortboard / Performance',
  'Small Wave / Performance',
  'Retro / Classic',
  'Step Up',
  'Big Wave / Gun',
  'Soft Top',
  'Hybrid',
  'Twin Fin',
  'Single Fin',
  'Longboard',
  'Mid Length',
  'Grom',
  'Big Guy',
] as const;

export const waveSize = ['knee', 'head', 'double+'] as const;
export const waveBreak = ['point', 'reef', 'beachbreak'] as const;
export const wavePower = [
  'weak/mushy',
  'medium/steep',
  'strong/barrels',
] as const;
export const shapeRails = ['thin', 'medium', 'full'] as const;
export const shapeNose = ['pointed', 'hybrid', 'round'] as const;
export const shapeTailWidth = ['narrow', 'medium', 'wide'] as const;
export const shapeEntryRocker = ['relaxed', 'medium', 'aggresive'] as const;
export const shapeExitRocker = ['relaxed', 'medium', 'aggresive'] as const;
export const performanceApproach = [
  'vertical/pocket',
  'power/carving',
  'cruisy/positional',
] as const;
export const performanceSkillLevel = [
  'novice',
  'intermediate',
  'expert',
] as const;
export const reviewSkillLevels = [
  'beginner',
  'intermediate',
  'advanced',
  'pro',
] as const;

export interface DimensionObj {
  height: string;
  width: string;
  thickness: string;
  volume: number | null;
}

export interface WaveObj {
  size: Array<typeof waveSize[number] | null>;
  break: Array<typeof waveBreak[number] | null>;
  power: Array<typeof wavePower[number] | null>;
}

export interface ShapeObj {
  rails: Array<typeof shapeRails[number] | null>;
  nose: Array<typeof shapeNose[number] | null>;
  tailWidth: Array<typeof shapeTailWidth[number] | null>;
  entryRocker: Array<typeof shapeEntryRocker[number] | null>;
  exitRocker: Array<typeof shapeExitRocker[number] | null>;
}

export interface PerformanceObj {
  approach: Array<typeof performanceApproach[number] | null>;
  skillLevel: Array<typeof performanceSkillLevel[number] | null>;
}

export interface ReviewObj {
  description: string;
  name: string;
  date: Date;
  age: number | null;
  weight: number | null;
  height: string;
  skill: typeof reviewSkillLevels[number];
  dimension: DimensionObj;
  rating: RatingObj;
}

export interface RatingObj {
  speed: number;
  turning: number;
  userFriendly: number;
  paddling: number;
  quality: number;
  overall: number;
}

export interface Surfboard {
  slug: string;
  shaperUrl: string;
  description: string;
  brand: string;
  category: string;
  model: string;
  price: number;
  images: string[];
  dimensions: DimensionObj[];
  wave: WaveObj;
  performance: PerformanceObj;
  shape: ShapeObj;
  reviews: ReviewObj[];
}

export const surfboards: Surfboard[] = [
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
  {
    shaperUrl: 'https://www.pyzelsurfboards.com/?page=surfboard-details&id=957',
    description:
      "The famous Pyzel ghost. Made for the almighty JJF for doing absolutely mental turns on big ass waves. You'll likely surf nowhere near him, but it's totally worth buying!",
    slug: 'pyzel-ghost',
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    model: 'Ghost',
    price: 75000,
    images: [
      'https://img.shaperbuddy.com/img/18/surfboards/20307942245d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/13725898905d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/21402613485d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/14746605185d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/16195413415d48.jpg',
      'https://img.shaperbuddy.com/img/18/surfboards/54948523560160.jpg',
    ],
    dimensions: [
      {
        height: `5'8"`,
        width: `18 3/4`,
        thickness: `2 5/16`,
        volume: 24.7,
      },
      {
        height: `5'9"`,
        width: `18 7/8`,
        thickness: `2 3/8`,
        volume: 26.0,
      },
      {
        height: `5'10"`,
        width: `19`,
        thickness: `2 7/16`,
        volume: 27.2,
      },
    ],
    wave: {
      size: [null, 'head', 'double+'],
      break: ['point', 'reef', 'beachbreak'],
      power: [null, 'medium/steep', 'strong/barrels'],
    },
    performance: {
      approach: ['vertical/pocket', 'power/carving', null],
      skillLevel: [null, 'intermediate', 'expert'],
    },
    shape: {
      rails: ['thin', null, null],
      nose: ['pointed', null, null],
      tailWidth: ['narrow', null, null],
      entryRocker: ['relaxed', 'medium', null],
      exitRocker: [null, null, 'aggresive'],
    },
    reviews: [
      {
        name: 'Ian Benton',
        age: 26,
        height: `5'9"`,
        weight: 155,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 5,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
      {
        name: 'Ian Benton',
        age: 29,
        height: `5'11"`,
        weight: 176,
        skill: 'advanced',
        date: new Date('08/20/1994'),
        description:
          'My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. My favorite board ever. Works greate when the waves are pumping. ',
        dimension: {
          height: `5'9"`,
          thickness: '2 3/8',
          width: '18 7/8',
          volume: 26.0,
        },
        rating: {
          paddling: 5,
          quality: 5,
          speed: 5,
          userFriendly: 4,
          turning: 5,
          overall: 4,
        },
      },
    ],
  },
];
