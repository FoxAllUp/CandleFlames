document.addEventListener('DOMContentLoaded', () => {
  const products = {
    cube:[
      { id: 1, name: 'Cube Dark Blue Candle', shape: 'cube', color: 'dark_blue' },
      { id: 2, name: 'Cube Peach Candle', shape: 'cube', color: 'peach' },
      { id: 3, name: 'Cube Pink Candle', shape: 'cube', color: 'pink' }
    ],

    cylindrical:[
      { id: 4, name: 'Cylindrical Burgundy Candle', shape: 'cylindrical', color: 'burgundy' },
      { id: 5, name: 'Cylindrical Cognac Candle', shape: 'cylindrical', color: 'cognac' },
      { id: 6, name: 'Cylindrical Creamy Peach Candle', shape: 'cylindrical', color: 'creamy_peach' },
      { id: 7, name: 'Cylindrical Ice Blue Candle', shape: 'cylindrical', color: 'ice_blue' },
      { id: 8, name: 'Cylindrical Light Blue Candle', shape: 'cylindrical', color: 'light_blue' },
      { id: 9, name: 'Cylindrical Mint Candle', shape: 'cylindrical', color: 'mint' },
      { id: 10, name: 'Cylindrical Orange Candle', shape: 'cylindrical', color: 'orange' },
      { id: 11, name: 'Cylindrical Peach Candle', shape: 'cylindrical', color: 'peach' },
      { id: 12, name: 'Cylindrical Pink Candle', shape: 'cylindrical', color: 'pink' },
      { id: 13, name: 'Cylindrical Purple Candle', shape: 'cylindrical', color: 'purple' },
      { id: 14, name: 'Cylindrical Red Special Candle', shape: 'cylindrical', color: 'red_special' },
      { id: 15, name: 'Cylindrical Red Candle', shape: 'cylindrical', color: 'red' },
      { id: 16, name: 'Cylindrical White Candle', shape: 'cylindrical', color: 'white' },
      { id: 17, name: 'Cylindrical Wine Candle', shape: 'cylindrical', color: 'wine' },
      { id: 18, name: 'Cylindrical Yellow Candle', shape: 'cylindrical', color: 'yellow' }
    ],

    pyramid:[
      { id: 19, name: 'Pyramid Blue Candle', shape: 'pyramid', color: 'blue' },
      { id: 20, name: 'Pyramid Burgundy Candle', shape: 'pyramid', color: 'burgundy' },
      { id: 21, name: 'Pyramid Cognac Candle', shape: 'pyramid', color: 'cognac' },
      { id: 22, name: 'Pyramid Dark Blue Candle', shape: 'pyramid', color: 'dark_blue' },
      { id: 23, name: 'Pyramid Green Candle', shape: 'pyramid', color: 'green' },
      { id: 24, name: 'Pyramid Orange Candle', shape: 'pyramid', color: 'orange' },
      { id: 25, name: 'Pyramid Peach Candle', shape: 'pyramid', color: 'peach' },
      { id: 26, name: 'Pyramid Pink Candle', shape: 'pyramid', color: 'pink' },
      { id: 27, name: 'Pyramid Purple Candle', shape: 'pyramid', color: 'purple' },
      { id: 28, name: 'Pyramid Red Candle', shape: 'pyramid', color: 'red' },
      { id: 29, name: 'Pyramid Turquoise Candle', shape: 'pyramid', color: 'turquoise' },
      { id: 30, name: 'Pyramid White Candle', shape: 'pyramid', color: 'white' },
      { id: 31, name: 'Pyramid Wine Candle', shape: 'pyramid', color: 'wine' },
      { id: 32, name: 'Pyramid Yellow Candle', shape: 'pyramid', color: 'yellow' }
    ],

    special:[
      { id: 33, name: 'Special Apple Green Candle', shape: 'special', color: 'apple_green' },
      { id: 34, name: 'Special Blue Candle', shape: 'special', color: 'blue' },
      { id: 35, name: 'Special Burgundy Candle', shape: 'special', color: 'burgundy' },
      { id: 36, name: 'Special Cognac Candle', shape: 'special', color: 'cognac' },
      { id: 37, name: 'Special Dark Blue Candle', shape: 'special', color: 'dark_blue' },
      { id: 38, name: 'Special Orange Candle', shape: 'special', color: 'orange' },
      { id: 39, name: 'Special Peach Candle', shape: 'special', color: 'peach' },
      { id: 40, name: 'Special Pink Candle', shape: 'special', color: 'pink' },
      { id: 41, name: 'Special Purple Candle', shape: 'special', color: 'purple' },
      { id: 42, name: 'Special Red Candle', shape: 'special', color: 'red' },
      { id: 43, name: 'Special Turquoise Candle', shape: 'special', color: 'turquoise' },
      { id: 44, name: 'Special White Candle', shape: 'special', color: 'white' }
    ],

    spherical:[
      { id: 45, name: 'Spherical Burgundy Candle', shape: 'spherical', color: 'burgundy' },
      { id: 46, name: 'Spherical Cognac Candle', shape: 'spherical', color: 'cognac' },
      { id: 47, name: 'Spherical Dark Blue Candle', shape: 'spherical', color: 'dark_blue' },
      { id: 48, name: 'Spherical Orange Candle', shape: 'spherical', color: 'orange' },
      { id: 49, name: 'Spherical Pastel Blue Candle', shape: 'spherical', color: 'pastel_blue' },
      { id: 50, name: 'Spherical Peach Candle', shape: 'spherical', color: 'peach' },
      { id: 51, name: 'Spherical Purple Candle', shape: 'spherical', color: 'purple' },
      { id: 52, name: 'Spherical White Candle', shape: 'spherical', color: 'white' },
      { id: 53, name: 'Spherical Yellow Candle', shape: 'spherical', color: 'yellow' }
    ],

    square_based:[
      { id: 54, name: 'Square Prism Blue Candle', shape: 'square_prism', color: 'blue' },
      { id: 55, name: 'Square Prism Burgundy Candle', shape: 'square_prism', color: 'burgundy' },
      { id: 56, name: 'Square Prism Cognac Candle', shape: 'square_prism', color: 'cognac' },
      { id: 57, name: 'Square Prism Dark Blue Candle', shape: 'square_prism', color: 'dark_blue' },
      { id: 58, name: 'Square Prism Green Candle', shape: 'square_prism', color: 'green' },
      { id: 59, name: 'Square Prism Orange Candle', shape: 'square_prism', color: 'orange' },
      { id: 60, name: 'Square Prism Peach Candle', shape: 'square_prism', color: 'peach' },
      { id: 61, name: 'Square Prism Pink Candle', shape: 'square_prism', color: 'pink' },
      { id: 62, name: 'Square Prism Purple Candle', shape: 'square_prism', color: 'purple' },
      { id: 63, name: 'Square Prism Red Candle', shape: 'square_prism', color: 'red' },
      { id: 64, name: 'Square Prism Turquoise Candle', shape: 'square_prism', color: 'turquoise' },
      { id: 65, name: 'Square Prism White Candle', shape: 'square_prism', color: 'white' },
      { id: 66, name: 'Square Prism Yellow Candle', shape: 'square_prism', color: 'yellow' }
    ],

    triangular_based:[
      { id: 67, name: 'Triangular Prism Blue Candle', shape: 'triangular_prism', color: 'blue' },
      { id: 68, name: 'Triangular Prism Burgundy Candle', shape: 'triangular_prism', color: 'burgundy' },
      { id: 69, name: 'Triangular Prism Cognac Candle', shape: 'triangular_prism', color: 'cognac' },
      { id: 70, name: 'Triangular Prism Green Candle', shape: 'triangular_prism', color: 'green' },
      { id: 71, name: 'Triangular Prism Orange Candle', shape: 'triangular_prism', color: 'orange' },
      { id: 72, name: 'Triangular Prism Peach Candle', shape: 'triangular_prism', color: 'peach' },
      { id: 73, name: 'Triangular Prism Purple Candle', shape: 'triangular_prism', color: 'purple' },
      { id: 74, name: 'Triangular Prism Red Candle', shape: 'triangular_prism', color: 'red' },
      { id: 75, name: 'Triangular Prism Turquoise Candle', shape: 'triangular_prism', color: 'turquoise' },
      { id: 76, name: 'Triangular Prism White Candle', shape: 'triangular_prism', color: 'white' },
      { id: 77, name: 'Triangular Prism Yellow Candle', shape: 'triangular_prism', color: 'yellow' }
    ]

    /* square_steps:[
      { id: 78, name: 'Square Prism Steps Red Candle', shape: 'square_prism_steps', color: 'red' }
    ] */
  };

  const physicalProps = {
    // Cylindrical Candles
    cylindrical: [
        { type: 'C1', baseAreaMm2: 45, heightMm: 65, weightG: 95, burnTimeHours: '-' },
        { type: 'C3', baseAreaMm2: 40, heightMm: 80, weightG: 85, burnTimeHours: '-' },
        { type: 'C5', baseAreaMm2: 65, heightMm: 50, weightG: 150, burnTimeHours: 10 },
        { type: 'C10', baseAreaMm2: 65, heightMm: 100, weightG: 300, burnTimeHours: 20 },
        { type: 'C15', baseAreaMm2: 65, heightMm: 150, weightG: 450, burnTimeHours: 30 },
        { type: 'C19', baseAreaMm2: 40, heightMm: 170, weightG: 170, burnTimeHours: '-' },
        { type: 'C17', baseAreaMm2: 65, heightMm: 170, weightG: 510, burnTimeHours: 35 },
        { type: 'C20', baseAreaMm2: 65, heightMm: 200, weightG: 600, burnTimeHours: 40 },
        { type: 'C25', baseAreaMm2: 65, heightMm: 250, weightG: 750, burnTimeHours: 50 },
        { type: 'C30', baseAreaMm2: 65, heightMm: 300, weightG: 900, burnTimeHours: 60 }
    ], 

    // Triangular Prism Candles
    triangular_prism: [
        { type: 'D10', baseAreaMm2: '∆ 60x60', heightMm: 100, weightG: 280, burnTimeHours: 20 },
        { type: 'D15', baseAreaMm2: '∆ 60x60', heightMm: 150, weightG: 420, burnTimeHours: 30 },
        { type: 'D20', baseAreaMm2: '∆ 60x60', heightMm: 200, weightG: 560, burnTimeHours: 40 },
        { type: 'D25', baseAreaMm2: '∆ 60x60', heightMm: 250, weightG: 700, burnTimeHours: 50 },
        { type: 'D35', baseAreaMm2: '∆ 60x60', heightMm: 350, weightG: 980, burnTimeHours: 70 }
    ],

    // Pyramid Candles
    pyramid: [
        { type: 'P10', baseAreaMm2: '□ 70x70', heightMm: 100, weightG: 156, burnTimeHours: '-' },
        { type: 'P15', baseAreaMm2: '□ 90x90', heightMm: 150, weightG: 340, burnTimeHours: '-' },
        { type: 'P20', baseAreaMm2: '□ 100x100', heightMm: 200, weightG: 550, burnTimeHours: '-' }
    ],

    // Square Prism Candles
    square_prism: [
        { type: 'V5', baseAreaMm2: '□ 60x60', heightMm: 50, weightG: 140, burnTimeHours: 10 },
        { type: 'V10', baseAreaMm2: '□ 60x60', heightMm: 100, weightG: 280, burnTimeHours: 20 },
        { type: 'V15', baseAreaMm2: '□ 60x60', heightMm: 150, weightG: 420, burnTimeHours: 30 },
        { type: 'V20', baseAreaMm2: '□ 60x60', heightMm: 200, weightG: 560, burnTimeHours: 40 },
        { type: 'V25', baseAreaMm2: '□ 60x60', heightMm: 250, weightG: 700, burnTimeHours: 50 },
        { type: 'V35', baseAreaMm2: '□ 60x60', heightMm: 350, weightG: 980, burnTimeHours: 70 }
    ],

    // Spherical Candles
    spherical: [
        { type: 'K6', baseAreaMm2: 60, heightMm: 60, weightG: 120, burnTimeHours: '-' },
        { type: 'K8', baseAreaMm2: 80, heightMm: 80, weightG: 200, burnTimeHours: '-' },
        { type: 'K10', baseAreaMm2: 100, heightMm: 100, weightG: 475, burnTimeHours: '-' },
        { type: 'K15', baseAreaMm2: 150, heightMm: 150, weightG: 1340, burnTimeHours: '-' }
    ],

    // Special Candles
    special: [
        { type: 'X5', baseAreaMm2: 80, heightMm: 80, weightG: 335, burnTimeHours: 'R_20' },
        { type: 'X10', baseAreaMm2: 100, heightMm: 100, weightG: 590, burnTimeHours: 'R_25' },
        { type: '3B10', baseAreaMm2: 150, heightMm: 100, weightG: 1350, burnTimeHours: 30 }
    ],

    //Advent Candles
    advent: [
        { type: 'C-advent', baseAreaMm2: 40, heightMm: '50-64-77-90', weightG: 410, burnTimeHours: '-' }
    ]
};

  const productsContainer = document.getElementById('productsContainer');

  // Function to render only categories
  function renderCategories() {
    productsContainer.innerHTML = '';
    
    Object.keys(physicalProps).forEach((category) => {
      const categoryData = physicalProps[category];
  
      // Create a link element for each category
      const categoryElement = document.createElement('a');
      categoryElement.href = `./product.html?category=${category}`;
      categoryElement.classList.add('category-card', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-1');
      //categoryElement.style.display = 'block';
      categoryElement.style.margin = '20px';
      //categoryElement.style.position = 'relative';
      //categoryElement.style.textAlign = 'center';
      categoryElement.style.width = '100%';
      //categoryElement.style.height = '100%';
  
      // Category name
      const categoryName = document.createElement('h3');
      categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categoryElement.appendChild(categoryName);
  
      // Initial random image
      const imgElement = document.createElement('img');
      imgElement.src = getRandomProductImage(categoryData);
      imgElement.alt = `${category} candle image`;
      imgElement.classList.add('category-image');
      imgElement.style.width = '100%';
      //imgElement.style.height = '100%';
      categoryElement.appendChild(imgElement);
  
      // Change image on hover
      categoryElement.addEventListener('mouseenter', () => {
        const intervalId = setInterval(() => {
          imgElement.src = getRandomProductImage(categoryData);
        }, 750); // Change image every 750ms
        categoryElement.addEventListener('mouseleave', () => {
          clearInterval(intervalId);
        });
      });
  
      productsContainer.appendChild(categoryElement);
    });
  }
  
  // Function to get a random product image from a category
   function getRandomProductImage(categoryData) {
    const randomCategory = categoryData[Math.floor(Math.random() * categoryData.length)];
    const randomType = categoryData[randomCategory][Math.floor(Math.random() * categoryData[randomCategory].length)];
    const randomUnit = categoryData[randomCategory][randomType][Math.floor(Math.random() * categoryData[randomCategory][randomType].length)];
    console.log(`Searching for file: ./src/assets/images/products/candles/${categoryData}/${randomType}/${randomUnit}.jpg`);
    return `./src/assets/images/products/candles/${categoryData}/${randomType}/${randomUnit}.jpg`;
  } 
  
  // Call renderCategories to initialize the category list
  renderCategories();
});
