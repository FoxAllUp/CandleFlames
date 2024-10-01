const physicalProps = [

    // Cylindrical Candles
    { type: 'C1', baseAreaMm2: 45, heightMm: 65, weightG: 95, burnTimeHours: '-'},
    { type: 'C3', baseAreaMm2: 40, heightMm: 80, weightG: 85, burnTimeHours: '-'},
    { type: 'C5', baseAreaMm2: 65, heightMm: 50, weightG: 150, burnTimeHours: 10},
    { type: 'C10', baseAreaMm2: 65, heightMm: 100, weightG: 300, burnTimeHours: 20},
    { type: 'C15', baseAreaMm2: 65, heightMm: 150, weightG: 450, burnTimeHours: 30},
    { type: 'C19', baseAreaMm2: 40, heightMm: 170, weightG: 170, burnTimeHours: '-'},
    { type: 'C17', baseAreaMm2: 65, heightMm: 170, weightG: 510, burnTimeHours: 35},
    { type: 'C20', baseAreaMm2: 65, heightMm: 200, weightG: 600, burnTimeHours: 40},
    { type: 'C25', baseAreaMm2: 65, heightMm: 250, weightG: 750, burnTimeHours: 50},
    { type: 'C30', baseAreaMm2: 65, heightMm: 300, weightG: 900, burnTimeHours: 60},
    { type: 'C-advent', baseAreaMm2: 40, heightMm: 50-64-77-90, weightG: 410, burnTimeHours: '-'},

    //Triangular Prism Candles
    { type: 'D10', baseAreaMm2: '∆ 60x60', heightMm: 100, weightG: 280, burnTimeHours: 20},
    { type: 'D15', baseAreaMm2: '∆ 60x60', heightMm: 150, weightG: 420, burnTimeHours: 30},
    { type: 'D20', baseAreaMm2: '∆ 60x60', heightMm: 200, weightG: 560, burnTimeHours: 40},
    { type: 'D25', baseAreaMm2: '∆ 60x60', heightMm: 250, weightG: 700, burnTimeHours: 50},
    { type: 'D35', baseAreaMm2: '∆ 60x60', heightMm: 350, weightG: 980, burnTimeHours: 70},

    // Pyramid Candles
    { type: 'P10', baseAreaMm2: '□ 70x70', heightMm: 100, weightG: 156, burnTimeHours: '-'},
    { type: 'P15', baseAreaMm2: '□ 90x90', heightMm: 150, weightG: 340, burnTimeHours: '-'},
    { type: 'P20', baseAreaMm2: '□ 100x100', heightMm: 200, weightG: 550, burnTimeHours: '-'},
    { type: 'C5', baseAreaMm2: '□ 70x70', heightMm: 50, weightG: 150, burnTimeHours: '-'},

    // Square Prism Candles
    { type: 'V5', baseAreaMm2: '□ 60x60', heightMm: 50, weightG: 140, burnTimeHours: 10},
    { type: 'V10', baseAreaMm2: '□ 60x60', heightMm: 100, weightG: 280, burnTimeHours: 20},
    { type: 'V15', baseAreaMm2: '□ 60x60', heightMm: 150, weightG: 420, burnTimeHours: 30},
    { type: 'V20', baseAreaMm2: '□ 60x60', heightMm: 200, weightG: 560, burnTimeHours: 40},
    { type: 'V25', baseAreaMm2: '□ 60x60', heightMm: 250, weightG: 700, burnTimeHours: 50},
    { type: 'V35', baseAreaMm2: '□ 60x60', heightMm: 350, weightG: 980, burnTimeHours: 70},

    // Spherical Candles
    { type: 'K6', baseAreaMm2: 60, heightMm: 60, weightG: 120, burnTimeHours: '-'},
    { type: 'K8', baseAreaMm2: 80, heightMm: 80, weightG: 200, burnTimeHours: '-'},
    { type: 'K10', baseAreaMm2: 100, heightMm: 100, weightG: 475, burnTimeHours: '-'},
    { type: 'K15', baseAreaMm2: 150, heightMm: 150, weightG: 1340, burnTimeHours: '-'},

    // Special Candles
    { type: 'X5', baseAreaMm2: 80, heightMm: 80, weightG: 335, burnTimeHours: 'R_20'},
    { type: 'X10', baseAreaMm2: 100, heightMm: 100, weightG: 590, burnTimeHours: 'R_25'},
    { type: 'K10', baseAreaMm2: 100, heightMm: 100, weightG: 475, burnTimeHours: '-'},
    { type: 'K15', baseAreaMm2: 150, heightMm: 150, weightG: 1340, burnTimeHours: '-'},
    { type: '3B10', baseAreaMm2: 150, heightMm: 100, weightG: 1350, burnTimeHours: 30},
  ];
  
  export { physicalProps };