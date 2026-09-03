import { GameItem, UpcomingGame } from '../types';

export const STUDIO_INFO = {
  name: 'Fun Wave Games',
  email: 'funwaveg@gmail.com',
  tagline: 'Crafting vibrant, addictive mobile gaming experiences for Amazon Appstore and beyond.',
  description: 'Fun Wave Games is an independent solo game development studio dedicated to creating satisfying casual puzzles, explosive arcade demolition simulators, and engaging brain games.',
  amazonStoreUrl: 'https://www.amazon.com/s?i=mobile-apps&rh=p_4%3AFun+Wave+Games',
  logoUrl: '/images/fun_wave_logo_1788370404513.jpg',
  establishedYear: '2025',
};

export const FEATURED_GAMES: GameItem[] = [
  {
    id: 'color-puzzle',
    title: 'Fun Wave Games - Color Puzzle',
    shortTitle: 'Color Puzzle',
    tagline: 'Satisfying color sorting logic puzzle with vibrant liquid physics',
    category: 'Puzzle / Casual',
    amazonUrl: 'https://www.amazon.com/Fun-Wave-Games-Color-Puzzle/dp/B0GG7GMPFW/ref=sr_1_5?dib=eyJ2IjoiMSJ9.lch_wRQgxNzvlqCtVBlUqKywm9caPH5jcdgFZDnPZZnGjHj071QN20LucGBJIEps.rjovKiyCbEJPptlhT2AfzS6wQGcidvHZ25YcL9NYLHo&dib_tag=se&qid=1788370207&refinements=p_4%3AFun+Wave+Games&s=mobile-apps&search-type=ss&sr=1-5',
    imageUrl: '/src/assets/images/color_puzzle_cover_1788370419033.jpg',
    description: 'Immerse yourself in a relaxing yet challenging color sorting experience. Pour, match, and organize vibrant hues into test tubes to solve hundreds of engaging levels.',
    longDescription: 'Color Puzzle by Fun Wave Games brings the most gratifying brain training directly to your mobile device or Fire tablet. Test your wits as you pour luminous liquids from tube to tube until all matching colors unite. With intuitive one-touch mechanics, calming audio cues, and progressive difficulty, Color Puzzle provides the perfect balance of relaxation and mental stimulation.',
    highlights: [
      'Hundreds of unique, handcrafted logic levels',
      'Mesmerizing liquid animations & glowing color palettes',
      'No time limits - play at your own relaxing pace',
      'Optimized performance for Amazon Fire tablets & Android devices',
      'Smooth one-finger touch controls'
    ],
    platform: 'Amazon Fire OS / Android',
    status: 'available',
    releaseYear: '2026',
    ageRating: 'Everyone / All Ages',
    price: 'Free to Play',
    developer: 'Fun Wave Games',
  },
  {
    id: 'monster-truck-destruction',
    title: 'Monster Truck Destruction Demolition Derby',
    shortTitle: 'Monster Truck Demolition',
    tagline: 'High-octane demolition derby combat with heavy-duty metal crunching mayhem',
    category: 'Action / Racing / Simulation',
    amazonUrl: 'https://www.amazon.com/Monster-Truck-Destruction-Demolition-Derby/dp/B0G2CZ399Z/ref=sr_1_6?dib=eyJ2IjoiMSJ9.lch_wRQgxNzvlqCtVBlUqKywm9caPH5jcdgFZDnPZZnGjHj071QN20LucGBJIEps.rjovKiyCbEJPptlhT2AfzS6wQGcidvHZ25YcL9NYLHo&dib_tag=se&qid=1788370207&refinements=p_4%3AFun+Wave+Games&s=mobile-apps&search-type=ss&sr=1-6',
    imageUrl: '/src/assets/images/truck_demolition_1788370437931.jpg',
    description: 'Get behind the wheel of unstoppable monster trucks in fierce demolition derbies! Crush junk cars, perform daring arena jumps, and be the last truck standing.',
    longDescription: 'Monster Truck Destruction Demolition Derby puts you right into the dirt arena where only the toughest trucks survive! Feel the roar of V8 engines as you smash through rival vehicles, pulverize obstacles, and execute gravity-defying ramp jumps. Featuring realistic vehicular deformation, explosive crash physics, and intuitive arcade steering, this demolition derby delivers non-stop thrills for automotive mayhem fans.',
    highlights: [
      'Realistic vehicular collision damage & dent physics',
      'Intense arena derby combat with AI competitor trucks',
      'Ramps, scrap heaps, and interactive arena destruction zones',
      'High frame rate optimization for Amazon Fire and mobile devices',
      'Responsive touch steering and boost controls'
    ],
    platform: 'Amazon Fire OS / Android',
    status: 'available',
    releaseYear: '2026',
    ageRating: 'Everyone 10+',
    price: 'Free to Play',
    developer: 'Fun Wave Games',
  },
  {
    id: 'block-blast-classic',
    title: 'Block Blast Classic Puzzle Game',
    shortTitle: 'Block Blast Classic',
    tagline: 'Classic jewel block grid puzzle with dazzling combo blasts and endless scoring',
    category: 'Puzzle / Arcade',
    amazonUrl: 'https://www.amazon.com/Block-Blast-Classic-Puzzle-Game/dp/B0HG4QHR8Y/ref=sr_1_7?dib=eyJ2IjoiMSJ9.lch_wRQgxNzvlqCtVBlUqKywm9caPH5jcdgFZDnPZZnGjHj071QN20LucGBJIEps.rjovKiyCbEJPptlhT2AfzS6wQGcidvHZ25YcL9NYLHo&dib_tag=se&qid=1788370207&refinements=p_4%3AFun+Wave+Games&s=mobile-apps&search-type=ss&sr=1-7',
    imageUrl: '/src/assets/images/block_blast_cover_1788370454936.jpg',
    description: 'Place polyomino block pieces into the 8x8 grid, clear full rows and columns, and trigger explosive combo chains to set unbeatable high scores.',
    longDescription: 'Block Blast Classic Puzzle Game is the quintessential block placement puzzle experience, blending simple rules with deep strategic mastery. Arrange varied jewel tile shapes onto the grid to clear horizontal or vertical lines. Chain multiple clearances simultaneously to unleash electrifying combo multipliers. Completely offline-friendly, it is your ideal companion for quick gaming breaks or marathon puzzle sessions.',
    highlights: [
      'Addictive 8x8 grid block placement & line clear mechanics',
      'Sensational combo multipliers and sparkling blast animations',
      'No Wi-Fi required: completely playable offline anywhere',
      'Crisp audio effects with tactile haptic response feel',
      'Lightweight download with instant startup'
    ],
    platform: 'Amazon Fire OS / Android',
    status: 'available',
    releaseYear: '2026',
    ageRating: 'Everyone / All Ages',
    price: 'Free to Play',
    developer: 'Fun Wave Games',
  },
];

export const UPCOMING_GAMES: UpcomingGame[] = [
  {
    id: 'turbo-circuit-demolition',
    title: 'Turbo Circuit Demolition',
    category: 'Racing & Destruction',
    tagline: 'Track-based high-speed destruction derby racing',
    description: 'Combining speedway sprint racing with contact combat. Customize race cars with reinforced bumpers and nitro thrusters.',
    expectedYear: 'Coming Soon',
    stage: 'In Active Development',
    tags: ['Racing', 'Multi-Track', 'Customization'],
  },
  {
    id: 'hex-color-cascade',
    title: 'Hex Color Cascade',
    category: 'Hexagonal Brain Puzzle',
    tagline: 'Rotational 3D hex block matching and color chaining',
    description: 'A revolutionary twist on casual sorting, introducing hexagonal boards, rotating stacks, and chain reaction cascades.',
    expectedYear: 'Coming Soon',
    stage: 'Prototyping & Level Design',
    tags: ['Hex Puzzle', 'Casual', 'Brain Gym'],
  },
  {
    id: 'pixel-dungeon-runner',
    title: 'Pixel Dungeon Runner',
    category: 'Retro Arcade Roguelite',
    tagline: 'Fast-paced isometric dungeon obstacle runner',
    description: 'Dodge deadly dungeon traps, gather ancient relics, and beat increasingly frantic obstacle courses.',
    expectedYear: 'Coming Soon',
    stage: 'Concept Art & Mechanics',
    tags: ['Arcade', 'Action', 'Solo Indie'],
  }
];
