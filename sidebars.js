/**
 * Creating a sidebar enables you to:
- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mcdSidebar:{
    'Margaret Catter Dev': [
      'margaretCatterDevelopment/index-mcd',
      {
        type:'category',
        label:'Neo Cities Chronicles',
        items: [
          'margaretCatterDevelopment/tabletopRoleplayingGames/neoCitiesChronicles/magicalGirlsAndMecha',
          'margaretCatterDevelopment/tabletopRoleplayingGames/neoCitiesChronicles/neoCitiesChroniclesTRPG',
          'margaretCatterDevelopment/tabletopRoleplayingGames/neoCitiesChronicles/magicalGirlsMechaRising',
        ]
      },
      {
        type:'category',
        label:"High Metropoly's",
        items: [
        'margaretCatterDevelopment/tabletopRoleplayingGames/highMetropolys/highMetropolys',
        'margaretCatterDevelopment/tabletopRoleplayingGames/highMetropolys/ascentOfCrystalTower',
        'margaretCatterDevelopment/tabletopRoleplayingGames/highMetropolys/theEmpireOfUnsheathedKnives',
        'margaretCatterDevelopment/tabletopRoleplayingGames/highMetropolys/thoseBrokenBelovedThing',
      ]
      },
      {
        type:'category',
        label:'Visual Novels',
        items: [
          'margaretCatterDevelopment/visualNovels/hurricaneLikeMe',
          'margaretCatterDevelopment/visualNovels/allTheFacesOfDanteHall',
          'margaretCatterDevelopment/visualNovels/lookMaWeMadeIt',
          'margaretCatterDevelopment/visualNovels/magicalSpaceAdventures',
        ]
      },
      'margaretCatterDevelopment/tabletopRoleplayingGames/standAloneGames/checkYesRomeo',
      'margaretCatterDevelopment/tabletopRoleplayingGames/standAloneGames/hotOffThePress',
      'margaretCatterDevelopment/tabletopRoleplayingGames/microGames/index',
  ],
  },
  iaSidebar:{
    'Ionie Annette': [
      'ionieAnnette/PitchesPlease',
      {
        type: 'category',
        label: 'The Galaxy Is Limitless', 
        items: [
          'ionieAnnette/theGalaxyIsLimitless/theGalaxyIsLimitless',
          'ionieAnnette/theGalaxyIsLimitless/aKingForMyKingdom',
          'ionieAnnette/theGalaxyIsLimitless/thisOldBlackMagic',
        ]
      },
      'ionieAnnette/ChasingTheBeginningofHappyness',
      'ionieAnnette/TheseKidsWillWearCrowns',
      'ionieAnnette/BurnOutTheSun',
      'ionieAnnette/EightKingdoms',
      'ionieAnnette/ProjectMiaHamm',
    ]
  },
  commmonSidebar: [
    {
      type: 'autogenerated',
      dirName: '.',
    },
  ],
};

  // By default, Docusaurus generates a sidebar from the docs folder structure
  /* mySidebar: [
    {
      type: 'autogenerated', 
      dirName: '.',
    },
    // {
    //   type: 'link',
    //   label: 'Ionie-Annette',
    //   href: 'src/pages/Ionie-Annette', 
    // },
  ],
*/
  
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};*/

export default sidebars;
