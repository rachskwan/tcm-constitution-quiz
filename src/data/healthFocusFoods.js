// Health Focus Foods by Constitution
// Foods targeted for specific health goals

export const healthFocuses = {
  energy: {
    id: 'energy',
    name: 'Energy',
    icon: '⚡',
    description: 'Boost vitality and reduce fatigue',
    color: 'amber'
  },
  digestion: {
    id: 'digestion',
    name: 'Digestion',
    icon: '🌿',
    description: 'Support gut health and nutrient absorption',
    color: 'emerald'
  },
  sleep: {
    id: 'sleep',
    name: 'Sleep',
    icon: '🌙',
    description: 'Improve rest and relaxation',
    color: 'indigo'
  },
  immunity: {
    id: 'immunity',
    name: 'Immunity',
    icon: '🛡️',
    description: 'Strengthen your body\'s defenses',
    color: 'rose'
  }
};

// Food descriptions with TCM properties
export const foodDescriptions = {
  // Proteins
  'Chicken': { thermal: 'Warm', description: 'Tonifies Qi and blood, warms the middle burner. Excellent for building energy and recovery.' },
  'Chicken Soup': { thermal: 'Warm', description: 'Deeply nourishing broth that tonifies Qi and warms the body. Traditional healing food.' },
  'Duck': { thermal: 'Neutral', description: 'Nourishes Yin and clears heat. Good protein source that won\'t create excess heat.' },
  'Lamb': { thermal: 'Hot', description: 'Strongly tonifies Yang and warms the kidneys. Best in cold weather or for cold constitutions.' },
  'Beef': { thermal: 'Warm', description: 'Strengthens the spleen, tonifies Qi and blood. Good for building strength and muscle.' },
  'Pork': { thermal: 'Neutral', description: 'Nourishes Yin and moistens dryness. Gentler meat option for everyday consumption.' },
  'Fish': { thermal: 'Neutral', description: 'Light protein that strengthens the spleen. Easy to digest and nourishing.' },
  'Salmon': { thermal: 'Warm', description: 'Tonifies Qi and blood, rich in healthy fats. Supports brain and heart health.' },
  'Shrimp': { thermal: 'Warm', description: 'Tonifies kidney Yang and essence. Boosts vitality and reproductive health.' },
  'Oysters': { thermal: 'Cool', description: 'Nourishes Yin and calms the spirit. Rich in zinc and minerals.' },
  'Eggs': { thermal: 'Neutral', description: 'Nourishes blood and Yin, moistens dryness. Complete nutrition in a gentle package.' },
  'Tofu': { thermal: 'Cool', description: 'Clears heat, nourishes Yin. Plant protein that\'s easy to digest.' },
  'Venison': { thermal: 'Warm', description: 'Tonifies kidney Yang and strengthens bones. Lean warming protein.' },
  'Bone Broth': { thermal: 'Warm', description: 'Deeply nourishing, supports gut healing and builds essence. Foundation of healing.' },

  // Vegetables
  'Spinach': { thermal: 'Cool', description: 'Nourishes blood and moistens dryness. Rich in iron and vitamins.' },
  'Kale': { thermal: 'Warm', description: 'Eases digestion and clears stagnation. Nutrient-dense leafy green.' },
  'Broccoli': { thermal: 'Cool', description: 'Clears heat and brightens eyes. Supports liver detoxification.' },
  'Carrots': { thermal: 'Neutral', description: 'Strengthens spleen, benefits eyes. Sweet root that\'s easy to digest.' },
  'Sweet Potato': { thermal: 'Neutral', description: 'Tonifies spleen Qi and nourishes blood. Sustained energy without spikes.' },
  'Pumpkin': { thermal: 'Warm', description: 'Strengthens spleen, promotes digestion. Gentle sweetness that nourishes.' },
  'Squash': { thermal: 'Warm', description: 'Warms the middle, eases digestion. Comforting and nourishing.' },
  'Mushrooms': { thermal: 'Neutral', description: 'Tonifies Qi without creating heat. Adaptogenic and immune-supporting.' },
  'Ginger': { thermal: 'Hot', description: 'Warms the middle, expels cold. First defense against illness and digestive issues.' },
  'Garlic': { thermal: 'Hot', description: 'Warms and detoxifies, antimicrobial. Promotes circulation and immunity.' },
  'Onion': { thermal: 'Warm', description: 'Moves Qi and blood, expels cold. Foundational aromatic for cooking.' },
  'Leeks': { thermal: 'Warm', description: 'Warms kidney Yang, promotes circulation. Milder than garlic but similarly warming.' },
  'Celery': { thermal: 'Cool', description: 'Clears heat, calms liver. Natural diuretic that reduces dampness.' },
  'Asparagus': { thermal: 'Cool', description: 'Nourishes Yin, clears heat. Supports kidney health and fluid balance.' },
  'Cucumber': { thermal: 'Cool', description: 'Clears heat, generates fluids. Hydrating and refreshing.' },
  'Radish': { thermal: 'Cool', description: 'Promotes digestion, resolves phlegm. Moves stagnant Qi effectively.' },
  'White Radish': { thermal: 'Cool', description: 'Descends Qi, aids digestion. Classic remedy for food stagnation.' },
  'Turnips': { thermal: 'Neutral', description: 'Aids digestion and resolves dampness. Gentle root vegetable.' },
  'Beets': { thermal: 'Neutral', description: 'Nourishes blood, supports liver. Natural blood-builder.' },
  'Cabbage': { thermal: 'Neutral', description: 'Strengthens stomach, promotes healing. Good for digestive issues.' },
  'Lotus Root': { thermal: 'Cool', description: 'Clears heat, stops bleeding. Crunchy and cooling.' },
  'Chinese Yam': { thermal: 'Neutral', description: 'Tonifies spleen, lung, and kidney. Premier Qi-building food.' },
  'Bitter Melon': { thermal: 'Cold', description: 'Strongly clears heat and dampness. Powerful blood sugar support.' },
  'Winter Melon': { thermal: 'Cool', description: 'Clears heat, drains dampness. Excellent for fluid retention.' },
  'Eggplant': { thermal: 'Cool', description: 'Clears heat, moves blood. Good for circulation issues.' },
  'Scallions': { thermal: 'Warm', description: 'Releases exterior, expels cold. First defense when catching cold.' },
  'Chives': { thermal: 'Warm', description: 'Warms kidney Yang, promotes circulation. Mild and versatile.' },
  'Lettuce': { thermal: 'Cool', description: 'Clears heat, promotes sleep. Calming and hydrating.' },
  'Zucchini': { thermal: 'Cool', description: 'Clears heat, moistens. Light summer vegetable.' },
  'Chinese Cabbage': { thermal: 'Cool', description: 'Clears heat, promotes urination. Gentle detoxifier.' },
  'Cooked Vegetables': { thermal: 'Varies', description: 'Easier to digest than raw. Warming through cooking process.' },

  // Fruits
  'Apples': { thermal: 'Cool', description: 'Generates fluids, clears heat. Natural pectin supports digestion.' },
  'Pears': { thermal: 'Cool', description: 'Moistens lungs, clears heat. Classic fruit for dry coughs.' },
  'Oranges': { thermal: 'Cool', description: 'Generates fluids, resolves phlegm. Vitamin C and bioflavonoids.' },
  'Berries': { thermal: 'Cool', description: 'Rich in antioxidants, nourish blood. Support eye and brain health.' },
  'Grapes': { thermal: 'Neutral', description: 'Tonifies Qi and blood. Natural energy without excess.' },
  'Watermelon': { thermal: 'Cold', description: 'Strongly clears heat, generates fluids. Best for hot summer days.' },
  'Dates': { thermal: 'Warm', description: 'Tonifies Qi and blood. Natural sweetness that nourishes.' },
  'Red Dates': { thermal: 'Warm', description: 'Premier blood tonic, calms spirit. Used in many TCM formulas.' },
  'Goji Berries': { thermal: 'Neutral', description: 'Nourishes liver and kidney Yin, brightens eyes. Longevity superfood.' },
  'Longan': { thermal: 'Warm', description: 'Tonifies heart blood, calms spirit. Natural anxiety relief.' },
  'Lychee': { thermal: 'Warm', description: 'Nourishes blood, generates fluids. Sweet tropical treat.' },
  'Banana': { thermal: 'Cold', description: 'Clears heat, moistens intestines. Good for constipation but cold.' },
  'Papaya': { thermal: 'Neutral', description: 'Aids digestion, moistens lungs. Contains digestive enzymes.' },
  'Peaches': { thermal: 'Warm', description: 'Moves blood, moistens intestines. Gentle fruit for circulation.' },
  'Cherry': { thermal: 'Warm', description: 'Warms and nourishes blood. Natural source of melatonin.' },
  'Mulberries': { thermal: 'Cool', description: 'Nourishes blood and Yin. Supports hair health and sleep.' },
  'Tart Cherries': { thermal: 'Neutral', description: 'Natural melatonin source. Supports sleep and reduces inflammation.' },
  'Kiwi': { thermal: 'Cool', description: 'Clears heat, generates fluids. High in vitamin C.' },
  'Passion Fruit': { thermal: 'Cool', description: 'Calms spirit, clears heat. Natural relaxant.' },
  'Citrus': { thermal: 'Cool', description: 'Moves Qi, generates fluids. Uplifting and refreshing.' },
  'Lemon': { thermal: 'Cool', description: 'Clears heat, aids digestion. Alkalizing despite sour taste.' },
  'Cooked Apples': { thermal: 'Neutral', description: 'Gentler than raw, easier to digest. Warming when cooked.' },
  'Seasonal Fruits': { thermal: 'Varies', description: 'Eating in season aligns with natural rhythms.' },

  // Grains & Legumes
  'Rice': { thermal: 'Neutral', description: 'Tonifies Qi, strengthens spleen. Foundation grain of TCM diet.' },
  'Congee': { thermal: 'Neutral', description: 'Easiest food to digest. Healing food for illness recovery.' },
  'Rice Congee': { thermal: 'Neutral', description: 'Therapeutic porridge that rebuilds digestive strength.' },
  'Oats': { thermal: 'Warm', description: 'Strengthens spleen, calms nerves. Sustained energy release.' },
  'Barley': { thermal: 'Cool', description: 'Drains dampness, clears heat. Excellent for water retention.' },
  'Millet': { thermal: 'Cool', description: 'Strengthens spleen, clears heat. Light and easy to digest.' },
  'Quinoa': { thermal: 'Neutral', description: 'Complete protein grain. Strengthens without excess.' },
  'Buckwheat': { thermal: 'Cool', description: 'Clears heat, moves Qi. Good for circulation.' },
  'Whole Grains': { thermal: 'Varies', description: 'Sustained energy, fiber for gut health.' },
  'Black Beans': { thermal: 'Neutral', description: 'Tonifies kidney Yin. Supports reproductive health.' },
  'Mung Beans': { thermal: 'Cool', description: 'Clears heat, detoxifies. Classic summer cooling food.' },
  'Red Beans': { thermal: 'Neutral', description: 'Drains dampness, nourishes heart. Good for fluid balance.' },
  'Lentils': { thermal: 'Neutral', description: 'Tonifies Qi, easy to digest. Gentle legume option.' },
  'Chickpeas': { thermal: 'Neutral', description: 'Strengthens spleen and stomach. Versatile plant protein.' },
  'Beans': { thermal: 'Varies', description: 'Plant protein that builds Qi. Eat with grains for balance.' },
  "Job's Tears": { thermal: 'Cool', description: 'Strongly drains dampness. Premier food for water retention.' },
  'Corn': { thermal: 'Neutral', description: 'Drains dampness, supports digestion. Light summer grain.' },

  // Nuts & Seeds
  'Walnuts': { thermal: 'Warm', description: 'Tonifies kidney Yang, nourishes brain. Shape resembles brain it benefits.' },
  'Almonds': { thermal: 'Neutral', description: 'Moistens lungs, aids digestion. Gentle and nourishing.' },
  'Chestnuts': { thermal: 'Warm', description: 'Tonifies kidney Yang, strengthens legs. Warming winter nut.' },
  'Sesame': { thermal: 'Neutral', description: 'Moistens intestines, nourishes Yin. Supports hair and skin.' },
  'Black Sesame': { thermal: 'Neutral', description: 'Tonifies liver and kidney. Prevents premature graying.' },
  'Pine Nuts': { thermal: 'Warm', description: 'Moistens lungs and intestines. Gentle warming nut.' },
  'Lotus Seeds': { thermal: 'Neutral', description: 'Calms heart spirit, stops diarrhea. Premier sleep support.' },
  'Sunflower Seeds': { thermal: 'Neutral', description: 'Nourishes Yin, moistens intestines. Light snacking option.' },
  'Nuts': { thermal: 'Varies', description: 'Healthy fats for brain and hormones. Eat in moderation.' },
  'Seeds': { thermal: 'Varies', description: 'Concentrated nutrition and healthy fats.' },

  // Herbs & Spices
  'Cinnamon': { thermal: 'Hot', description: 'Warms kidney Yang, promotes circulation. Blood sugar support.' },
  'Turmeric': { thermal: 'Warm', description: 'Moves blood, reduces inflammation. Golden healing spice.' },
  'Fennel': { thermal: 'Warm', description: 'Warms middle, relieves bloating. Digestive comfort.' },
  'Mint': { thermal: 'Cool', description: 'Releases exterior, clears head. Refreshing and uplifting.' },
  'Basil': { thermal: 'Warm', description: 'Moves Qi, warms stomach. Aromatic digestive aid.' },
  'Rosemary': { thermal: 'Warm', description: 'Moves Qi and blood, clears head. Memory and circulation.' },
  'Cardamom': { thermal: 'Warm', description: 'Warms middle, transforms dampness. Aromatic digestive.' },
  'Star Anise': { thermal: 'Warm', description: 'Warms kidney, relieves pain. Warming spice for cold conditions.' },
  'Cloves': { thermal: 'Hot', description: 'Strongly warms middle, stops hiccups. Intense warming spice.' },
  'Black Pepper': { thermal: 'Hot', description: 'Warms middle, stimulates digestion. Universal spice.' },
  'Tangerine Peel': { thermal: 'Warm', description: 'Moves Qi, transforms phlegm. Classic digestive remedy.' },
  'Citrus Peel': { thermal: 'Warm', description: 'Moves Qi, aids digestion. Uplifting aromatic.' },
  'Nutmeg': { thermal: 'Warm', description: 'Warms middle, stops diarrhea. Use sparingly.' },
  'Caraway': { thermal: 'Warm', description: 'Warms middle, relieves bloating. Digestive comfort.' },
  'Saffron': { thermal: 'Neutral', description: 'Moves blood, calms spirit. Precious mood-lifting spice.' },
  'Astragalus': { thermal: 'Warm', description: 'Tonifies Qi, strengthens Wei Qi. Premier immune herb.' },

  // Teas & Beverages
  'Green Tea': { thermal: 'Cool', description: 'Clears heat, brightens mind. Antioxidant-rich and focusing.' },
  'Ginger Tea': { thermal: 'Hot', description: 'Warms middle, expels cold. First remedy for chills.' },
  'Chrysanthemum': { thermal: 'Cool', description: 'Clears liver heat, brightens eyes. Cooling flower tea.' },
  'Rose Tea': { thermal: 'Warm', description: 'Moves Qi and blood, uplifts mood. Emotional support tea.' },
  'Chamomile': { thermal: 'Cool', description: 'Calms spirit, aids sleep. Gentle relaxation.' },
  'Jasmine Tea': { thermal: 'Warm', description: 'Moves Qi, uplifts spirit. Aromatic and soothing.' },
  'Jasmine': { thermal: 'Warm', description: 'Opens heart, moves Qi. Fragrant and calming.' },
  'Lavender': { thermal: 'Cool', description: 'Calms spirit, relieves tension. Aromatic relaxant.' },
  'Lavender Tea': { thermal: 'Cool', description: 'Promotes relaxation and sleep. Gentle calming.' },
  'Passionflower': { thermal: 'Cool', description: 'Calms anxiety, promotes sleep. Natural sedative.' },
  'Lemon Balm': { thermal: 'Cool', description: 'Calms spirit, aids digestion. Gentle nervine.' },
  'Honeysuckle': { thermal: 'Cold', description: 'Clears heat-toxins, antiviral. Cooling flower.' },
  'Warm Milk': { thermal: 'Neutral', description: 'Calms spirit, promotes sleep. Comfort before bed.' },
  'Rice Milk': { thermal: 'Neutral', description: 'Non-dairy, easy to digest. Gentle alternative.' },
  'Coconut Water': { thermal: 'Cool', description: 'Clears heat, generates fluids. Natural hydration.' },
  'Warm Water': { thermal: 'Neutral', description: 'Supports digestion better than cold. TCM basic.' },

  // Others
  'Honey': { thermal: 'Neutral', description: 'Tonifies middle, moistens dryness. Natural sweetener that heals.' },
  'Seaweed': { thermal: 'Cold', description: 'Clears heat, softens hardness. Rich in trace minerals.' },
  'White Fungus': { thermal: 'Neutral', description: 'Moistens lungs and stomach. Beauty and longevity food.' },
  'Black Fungus': { thermal: 'Neutral', description: 'Nourishes blood, promotes circulation. Classic blood mover.' },
  'Lily Bulb': { thermal: 'Cool', description: 'Moistens lungs, calms spirit. Premier Yin sleep food.' },
  'Coconut': { thermal: 'Warm', description: 'Strengthens body, nourishes. Tropical energy source.' },
  'Hawthorn': { thermal: 'Warm', description: 'Moves blood, aids digestion. Heart and digestive support.' },
  'Vinegar': { thermal: 'Warm', description: 'Moves blood, aids digestion. Helps absorb minerals.' },
  'Brown Sugar': { thermal: 'Warm', description: 'Warms middle, nourishes blood. Better than white sugar.' },
  'Rock Sugar': { thermal: 'Neutral', description: 'Moistens lungs, generates fluids. Gentle sweetener.' },
  'Olive Oil': { thermal: 'Neutral', description: 'Moistens, nourishes. Healthy fat foundation.' },
  'Miso': { thermal: 'Warm', description: 'Aids digestion, provides probiotics. Fermented healing food.' },
  'Sauerkraut': { thermal: 'Neutral', description: 'Probiotic-rich, aids digestion. Fermented vegetable.' },
  'Yogurt': { thermal: 'Cool', description: 'Probiotics for gut health. Can be dampening for some.' },
  'Warm Soups': { thermal: 'Warm', description: 'Nourishing and easy to digest. Foundation of TCM eating.' },
  'Light Soups': { thermal: 'Neutral', description: 'Easy to digest, hydrating. Gentle nourishment.' },
  'Light Fish': { thermal: 'Neutral', description: 'Easy to digest protein. Light and nourishing.' },
  'Quality Proteins': { thermal: 'Varies', description: 'Essential for building and repair.' },
  'Variety of Vegetables': { thermal: 'Varies', description: 'Diverse colors provide diverse nutrients.' },
  'Colorful Vegetables': { thermal: 'Varies', description: 'Each color offers different antioxidants.' },
  'Fermented Foods': { thermal: 'Varies', description: 'Support gut microbiome health.' },
  'Fiber-Rich Vegetables': { thermal: 'Varies', description: 'Feed beneficial gut bacteria.' },
  'Magnesium Foods': { thermal: 'Varies', description: 'Relax muscles and nerves. Support sleep.' },
  'Complex Carbs': { thermal: 'Varies', description: 'Sustained energy and serotonin production.' },
  'Quercetin Foods': { thermal: 'Varies', description: 'Natural antihistamine support.' }
};

// Get food description
export function getFoodDescription(foodName) {
  if (foodDescriptions[foodName]) return foodDescriptions[foodName];

  // Try partial match
  for (const [key, desc] of Object.entries(foodDescriptions)) {
    if (foodName.toLowerCase().includes(key.toLowerCase()) ||
        key.toLowerCase().includes(foodName.toLowerCase())) {
      return desc;
    }
  }

  return { thermal: 'Neutral', description: 'A nourishing food to support your constitution.' };
}

// Food icons mapping
export const foodIcons = {
  // Proteins
  'Chicken': '🍗', 'Duck': '🦆', 'Lamb': '🍖', 'Beef': '🥩', 'Pork': '🥓',
  'Fish': '🐟', 'Salmon': '🐟', 'Shrimp': '🦐', 'Oysters': '🦪', 'Eggs': '🥚',
  'Tofu': '🧈', 'Venison': '🦌',

  // Vegetables
  'Spinach': '🥬', 'Kale': '🥬', 'Broccoli': '🥦', 'Carrots': '🥕', 'Sweet Potato': '🍠',
  'Pumpkin': '🎃', 'Squash': '🎃', 'Mushrooms': '🍄', 'Ginger': '🫚', 'Garlic': '🧄',
  'Onion': '🧅', 'Leeks': '🧅', 'Celery': '🥬', 'Asparagus': '🥦', 'Cucumber': '🥒',
  'Radish': '🥕', 'Turnips': '🥕', 'Beets': '🥕', 'Cabbage': '🥬', 'Lotus Root': '🥔',
  'Chinese Yam': '🍠', 'Bitter Melon': '🥒', 'Winter Melon': '🍈', 'Eggplant': '🍆',

  // Fruits
  'Apples': '🍎', 'Pears': '🍐', 'Oranges': '🍊', 'Berries': '🫐', 'Grapes': '🍇',
  'Watermelon': '🍉', 'Dates': '🫘', 'Red Dates': '🫘', 'Goji Berries': '🔴',
  'Longan': '🟤', 'Lychee': '🔴', 'Banana': '🍌', 'Papaya': '🥭',

  // Grains & Legumes
  'Rice': '🍚', 'Oats': '🌾', 'Barley': '🌾', 'Millet': '🌾', 'Quinoa': '🌾',
  'Black Beans': '🫘', 'Mung Beans': '🫘', 'Red Beans': '🫘', 'Lentils': '🫘',
  'Chickpeas': '🫘', "Job's Tears": '🌾',

  // Nuts & Seeds
  'Walnuts': '🥜', 'Almonds': '🌰', 'Chestnuts': '🌰', 'Sesame': '⚪',
  'Black Sesame': '⚫', 'Pine Nuts': '🌰', 'Lotus Seeds': '⚪', 'Sunflower Seeds': '🌻',

  // Herbs & Spices
  'Cinnamon': '🟤', 'Turmeric': '🟡', 'Fennel': '🌿', 'Mint': '🌿',
  'Basil': '🌿', 'Rosemary': '🌿', 'Cardamom': '🟤', 'Star Anise': '⭐',
  'Cloves': '🟤', 'Black Pepper': '⚫',

  // Others
  'Honey': '🍯', 'Bone Broth': '🍲', 'Congee': '🍚', 'Green Tea': '🍵',
  'Ginger Tea': '🫚', 'Chrysanthemum': '🌼', 'Rose Tea': '🌹', 'Seaweed': '🥬',
  'White Fungus': '🍄', 'Black Fungus': '🍄', 'Lily Bulb': '🌸', 'Coconut': '🥥'
};

// Get icon for a food (with fallback)
export function getFoodIcon(foodName) {
  // Try exact match first
  if (foodIcons[foodName]) return foodIcons[foodName];

  // Try partial match
  for (const [key, icon] of Object.entries(foodIcons)) {
    if (foodName.toLowerCase().includes(key.toLowerCase()) ||
        key.toLowerCase().includes(foodName.toLowerCase())) {
      return icon;
    }
  }

  // Default fallback
  return '🍽️';
}

// Health focus foods by constitution
export const healthFocusFoods = {
  qi_deficient: {
    energy: {
      top5: [
        { name: 'Chicken Soup', reason: 'Deeply tonifies Qi and warms the body' },
        { name: 'Chinese Yam', reason: 'Strengthens spleen Qi, the root of energy production' },
        { name: 'Red Dates', reason: 'Nourishes blood and Qi together' },
        { name: 'Oats', reason: 'Sustained energy release, easy to digest' },
        { name: 'Goji Berries', reason: 'Tonifies Qi while nourishing Yin' }
      ],
      minimize5: [
        { name: 'Raw Salads', reason: 'Requires too much digestive energy' },
        { name: 'Iced Drinks', reason: 'Damages spleen Yang, blocks Qi production' },
        { name: 'Coffee', reason: 'Borrows energy, leads to further depletion' },
        { name: 'Sugar', reason: 'Quick spike then crash, weakens spleen' },
        { name: 'Heavy Fried Foods', reason: 'Overwhelms digestion, creates stagnation' }
      ],
      allFoods: ['Chicken', 'Chinese Yam', 'Red Dates', 'Oats', 'Goji Berries', 'Rice', 'Sweet Potato', 'Pumpkin', 'Honey', 'Beef', 'Eggs', 'Mushrooms', 'Carrots', 'Chestnuts', 'Millet', 'Longan', 'Bone Broth', 'Ginger'],
      recipe: {
        name: 'Qi-Boosting Congee',
        ingredients: ['1 cup rice', '8 cups water', '6 red dates', '1 small Chinese yam (cubed)', 'handful goji berries'],
        instructions: 'Simmer rice in water for 1 hour. Add yam and dates in last 20 minutes. Top with goji berries. Eat warm for breakfast.'
      }
    },
    digestion: {
      top5: [
        { name: 'Rice Congee', reason: 'Easiest food to digest, rebuilds digestive strength' },
        { name: 'Ginger', reason: 'Warms stomach, promotes digestive fire' },
        { name: 'Chinese Yam', reason: 'Directly strengthens spleen function' },
        { name: 'Pumpkin', reason: 'Gentle sweetness nourishes spleen without overwhelming' },
        { name: 'Fennel', reason: 'Reduces bloating, warms digestive tract' }
      ],
      minimize5: [
        { name: 'Dairy', reason: 'Creates dampness, hard to process' },
        { name: 'Raw Vegetables', reason: 'Requires strong digestive fire to break down' },
        { name: 'Cold Foods', reason: 'Extinguishes digestive fire' },
        { name: 'Greasy Foods', reason: 'Overwhelms weak digestion' },
        { name: 'Excessive Fiber', reason: 'Can strain weak digestive system' }
      ],
      allFoods: ['Rice', 'Congee', 'Ginger', 'Chinese Yam', 'Pumpkin', 'Fennel', 'Carrots', 'Sweet Potato', 'Chicken', 'Fish', 'Honey', 'Oats', 'Millet', 'Lotus Seeds', 'Tangerine Peel', 'Cardamom', 'Cinnamon', 'Bone Broth'],
      recipe: {
        name: 'Digestive Harmony Soup',
        ingredients: ['1 cup cubed pumpkin', '1 small Chinese yam', '2 slices ginger', '4 cups chicken broth', 'pinch of salt'],
        instructions: 'Simmer all ingredients until vegetables are soft (about 25 minutes). Blend if desired. Eat warm before or with meals.'
      }
    },
    sleep: {
      top5: [
        { name: 'Lotus Seeds', reason: 'Calms the heart spirit, promotes peaceful sleep' },
        { name: 'Longan', reason: 'Nourishes heart blood, reduces anxiety' },
        { name: 'Lily Bulb', reason: 'Moistens lungs, calms restless mind' },
        { name: 'Red Dates', reason: 'Nourishes blood, settles the spirit' },
        { name: 'Chamomile', reason: 'Gentle calming without depleting Qi' }
      ],
      minimize5: [
        { name: 'Coffee', reason: 'Stimulates and depletes, disrupts sleep cycle' },
        { name: 'Alcohol', reason: 'Disrupts deep sleep phases' },
        { name: 'Heavy Meals Late', reason: 'Digestive work prevents rest' },
        { name: 'Chocolate', reason: 'Contains stimulants that affect sleep' },
        { name: 'Spicy Foods', reason: 'Creates heat that disturbs sleep' }
      ],
      allFoods: ['Lotus Seeds', 'Longan', 'Lily Bulb', 'Red Dates', 'Chamomile', 'Honey', 'Milk (warm)', 'Oats', 'Banana', 'Almonds', 'Walnuts', 'Millet', 'Lettuce', 'Cherry', 'Passion Fruit', 'Lavender Tea'],
      recipe: {
        name: 'Sweet Dreams Tea',
        ingredients: ['5 lotus seeds', '3 longan fruits', '2 red dates', '1 tbsp dried lily bulb', '3 cups water'],
        instructions: 'Simmer all ingredients for 20 minutes. Strain and add honey to taste. Drink 1 hour before bed.'
      }
    },
    immunity: {
      top5: [
        { name: 'Astragalus', reason: 'Powerfully tonifies Wei Qi (defensive energy)' },
        { name: 'Mushrooms', reason: 'Adaptogenic, strengthens immune response' },
        { name: 'Chicken Soup', reason: 'Traditional immune tonic, easy to absorb' },
        { name: 'Ginger', reason: 'Warms and protects against external pathogens' },
        { name: 'Sweet Potato', reason: 'Strengthens spleen, foundation of immunity' }
      ],
      minimize5: [
        { name: 'Sugar', reason: 'Suppresses immune function for hours' },
        { name: 'Cold Foods', reason: 'Weakens defensive Qi' },
        { name: 'Processed Foods', reason: 'Depletes nutrients needed for immunity' },
        { name: 'Alcohol', reason: 'Impairs immune cell function' },
        { name: 'Raw Foods', reason: 'Taxes digestion, root of immune strength' }
      ],
      allFoods: ['Astragalus', 'Mushrooms', 'Chicken', 'Ginger', 'Sweet Potato', 'Garlic', 'Onion', 'Bone Broth', 'Goji Berries', 'Red Dates', 'Citrus', 'Pumpkin', 'Carrots', 'Spinach', 'Broccoli', 'Green Tea', 'Honey', 'Turmeric'],
      recipe: {
        name: 'Immune Shield Soup',
        ingredients: ['1 whole chicken', '10 slices astragalus root', '6 red dates', '1 inch ginger', '8 cups water'],
        instructions: 'Simmer chicken with all ingredients for 2-3 hours on low heat. Season with salt. Drink broth daily during cold season.'
      }
    }
  },

  yang_deficient: {
    energy: {
      top5: [
        { name: 'Lamb', reason: 'Strongest Yang-tonifying meat, deeply warming' },
        { name: 'Cinnamon', reason: 'Ignites kidney fire, boosts metabolism' },
        { name: 'Walnuts', reason: 'Tonifies kidney Yang, brain fuel' },
        { name: 'Ginger', reason: 'Warms entire body, activates circulation' },
        { name: 'Leeks', reason: 'Warming vegetable that tonifies Yang' }
      ],
      minimize5: [
        { name: 'Cold Drinks', reason: 'Directly depletes Yang fire' },
        { name: 'Raw Foods', reason: 'Body expends Yang to warm them' },
        { name: 'Watermelon', reason: 'Very cold nature, damages kidney Yang' },
        { name: 'Banana', reason: 'Cold fruit that weakens digestion' },
        { name: 'Ice Cream', reason: 'Worst food for Yang deficiency' }
      ],
      allFoods: ['Lamb', 'Cinnamon', 'Walnuts', 'Ginger', 'Leeks', 'Beef', 'Venison', 'Shrimp', 'Chestnuts', 'Black Pepper', 'Cloves', 'Star Anise', 'Fennel', 'Chives', 'Garlic', 'Onion', 'Bone Broth', 'Red Dates'],
      recipe: {
        name: 'Yang-Warming Lamb Stew',
        ingredients: ['500g lamb', '3 slices ginger', '2 sticks cinnamon', '1 star anise', '5 red dates', 'handful goji berries'],
        instructions: 'Brown lamb, add spices and water to cover. Simmer 2 hours until tender. Add goji berries last 10 minutes. Perfect for cold days.'
      }
    },
    digestion: {
      top5: [
        { name: 'Ginger', reason: 'Warms stomach fire, promotes movement' },
        { name: 'Fennel', reason: 'Dispels cold from intestines, reduces bloating' },
        { name: 'Cinnamon', reason: 'Warms spleen and kidney, aids absorption' },
        { name: 'Warm Congee', reason: 'Easy to digest, maintains warmth' },
        { name: 'Black Pepper', reason: 'Stimulates digestive fire' }
      ],
      minimize5: [
        { name: 'Salads', reason: 'Cold nature extinguishes digestive fire' },
        { name: 'Smoothies', reason: 'Too cold for Yang-deficient digestion' },
        { name: 'Yogurt', reason: 'Cold and damp, slows digestion' },
        { name: 'Cucumber', reason: 'Cooling vegetable, weakens stomach' },
        { name: 'Tofu', reason: 'Cool nature unless cooked with warming spices' }
      ],
      allFoods: ['Ginger', 'Fennel', 'Cinnamon', 'Congee', 'Black Pepper', 'Cardamom', 'Cloves', 'Warm Soups', 'Cooked Vegetables', 'Lamb', 'Chicken', 'Rice', 'Oats', 'Sweet Potato', 'Pumpkin', 'Leeks', 'Onion', 'Garlic'],
      recipe: {
        name: 'Warming Digestive Tea',
        ingredients: ['3 slices fresh ginger', '1 cinnamon stick', '3 cardamom pods', '1 tsp fennel seeds', '2 cups water'],
        instructions: 'Simmer all ingredients for 15 minutes. Strain and sip warm after meals to aid digestion.'
      }
    },
    sleep: {
      top5: [
        { name: 'Warm Milk', reason: 'Warming, calming, promotes relaxation' },
        { name: 'Cinnamon', reason: 'Warms kidney, settles the spirit' },
        { name: 'Walnuts', reason: 'Nourishes brain, calms mind' },
        { name: 'Longan', reason: 'Warms heart blood, reduces anxiety' },
        { name: 'Goji Berries', reason: 'Nourishes Yin within Yang, balances' }
      ],
      minimize5: [
        { name: 'Cold Drinks', reason: 'Shocks system, prevents relaxation' },
        { name: 'Raw Fruits', reason: 'Cold nature disturbs Yang at night' },
        { name: 'Heavy Late Meals', reason: 'Body works instead of resting' },
        { name: 'Stimulants', reason: 'Further depletes Yang reserves' },
        { name: 'Alcohol', reason: 'Disrupts sleep despite initial warmth' }
      ],
      allFoods: ['Warm Milk', 'Cinnamon', 'Walnuts', 'Longan', 'Goji Berries', 'Honey', 'Red Dates', 'Oats (warm)', 'Chamomile', 'Lotus Seeds', 'Nutmeg', 'Cardamom'],
      recipe: {
        name: 'Golden Sleep Milk',
        ingredients: ['1 cup milk', '1/4 tsp cinnamon', 'pinch nutmeg', '1 tsp honey', '3 goji berries'],
        instructions: 'Warm milk with spices (do not boil). Add honey and goji berries. Drink 30 minutes before bed.'
      }
    },
    immunity: {
      top5: [
        { name: 'Ginger', reason: 'First defense against cold invasion' },
        { name: 'Lamb', reason: 'Builds Yang Qi, strengthens defense' },
        { name: 'Garlic', reason: 'Warming antimicrobial, boosts immunity' },
        { name: 'Scallions', reason: 'Releases exterior, prevents illness taking hold' },
        { name: 'Cinnamon', reason: 'Warms and protects kidney Yang' }
      ],
      minimize5: [
        { name: 'Cold Foods', reason: 'Weakens Wei Qi protective layer' },
        { name: 'Raw Foods', reason: 'Depletes Yang needed for immune function' },
        { name: 'Dairy', reason: 'Creates phlegm, burden on defense' },
        { name: 'Excessive Sweets', reason: 'Dampens Yang fire' },
        { name: 'Iced Beverages', reason: 'Shocks and weakens immune response' }
      ],
      allFoods: ['Ginger', 'Lamb', 'Garlic', 'Scallions', 'Cinnamon', 'Black Pepper', 'Onion', 'Leeks', 'Bone Broth', 'Chicken', 'Mushrooms', 'Astragalus', 'Walnuts', 'Chestnuts', 'Red Dates', 'Warm Soups'],
      recipe: {
        name: 'Cold-Fighter Broth',
        ingredients: ['4 cups bone broth', '1 inch ginger (sliced)', '4 cloves garlic', '2 scallions', 'pinch black pepper'],
        instructions: 'Simmer broth with ginger and garlic 15 minutes. Add scallions last minute. Drink at first sign of cold.'
      }
    }
  },

  yin_deficient: {
    energy: {
      top5: [
        { name: 'Black Sesame', reason: 'Nourishes Yin without depleting, sustainable energy' },
        { name: 'Eggs', reason: 'Gentle nourishment, builds blood and Yin' },
        { name: 'Duck', reason: 'Protein that nourishes without heating' },
        { name: 'Goji Berries', reason: 'Tonifies Yin and blood, gentle energy' },
        { name: 'Pears', reason: 'Moistens and nourishes, cooling energy' }
      ],
      minimize5: [
        { name: 'Coffee', reason: 'Burns up Yin fluids, creates false energy' },
        { name: 'Spicy Foods', reason: 'Dries out Yin reserves' },
        { name: 'Alcohol', reason: 'Extremely Yin-depleting' },
        { name: 'Lamb', reason: 'Too heating, damages Yin' },
        { name: 'Deep-Fried Foods', reason: 'Creates heat and dryness' }
      ],
      allFoods: ['Black Sesame', 'Eggs', 'Duck', 'Goji Berries', 'Pears', 'Tofu', 'Fish', 'Oysters', 'Seaweed', 'White Fungus', 'Lily Bulb', 'Honey', 'Coconut', 'Almonds', 'Spinach', 'Asparagus', 'Mung Beans'],
      recipe: {
        name: 'Yin-Nourishing Smoothie Bowl',
        ingredients: ['1 pear', '1 tbsp black sesame', '1/2 cup coconut milk', 'handful goji berries', '1 tsp honey'],
        instructions: 'Blend pear with coconut milk. Pour into bowl, top with sesame, goji, and honey. Eat at room temperature.'
      }
    },
    digestion: {
      top5: [
        { name: 'Pears', reason: 'Moistens digestive tract without being cold' },
        { name: 'Honey', reason: 'Lubricates intestines, gentle sweetness' },
        { name: 'White Fungus', reason: 'Deeply moistening, soothes gut lining' },
        { name: 'Congee', reason: 'Easy to digest, provides fluids' },
        { name: 'Tofu', reason: 'Gentle protein, cooling yet nourishing' }
      ],
      minimize5: [
        { name: 'Spicy Foods', reason: 'Dries out digestive fluids' },
        { name: 'Alcohol', reason: 'Severely drying to gut lining' },
        { name: 'Coffee', reason: 'Dehydrates digestive system' },
        { name: 'Dry Roasted Foods', reason: 'Absorbs moisture from body' },
        { name: 'Excessive Meat', reason: 'Hard to digest, creates heat' }
      ],
      allFoods: ['Pears', 'Honey', 'White Fungus', 'Congee', 'Tofu', 'Cucumber', 'Spinach', 'Fish', 'Eggs', 'Almonds', 'Sesame', 'Lily Bulb', 'Lotus Root', 'Apple', 'Papaya', 'Coconut Water'],
      recipe: {
        name: 'Moistening Pear Dessert',
        ingredients: ['2 Asian pears', '10g white fungus (soaked)', '1 tbsp goji berries', '2 tbsp rock sugar', '4 cups water'],
        instructions: 'Core pears, stuff with fungus. Steam with water and sugar for 45 minutes. Serve warm with cooking liquid.'
      }
    },
    sleep: {
      top5: [
        { name: 'Lily Bulb', reason: 'Classic Yin-sleep herb, calms heart fire' },
        { name: 'White Fungus', reason: 'Deeply nourishing, promotes peaceful rest' },
        { name: 'Lotus Seeds', reason: 'Calms spirit, nourishes heart Yin' },
        { name: 'Mulberries', reason: 'Nourishes blood and Yin for sleep' },
        { name: 'Chrysanthemum', reason: 'Clears heat that disturbs sleep' }
      ],
      minimize5: [
        { name: 'Spicy Foods', reason: 'Creates heat that prevents sleep' },
        { name: 'Coffee', reason: 'Overstimulates, burns Yin' },
        { name: 'Alcohol', reason: 'Disrupts deep Yin-restorative sleep' },
        { name: 'Chocolate', reason: 'Stimulating, creates night heat' },
        { name: 'Heavy Meats', reason: 'Creates heat during digestion' }
      ],
      allFoods: ['Lily Bulb', 'White Fungus', 'Lotus Seeds', 'Mulberries', 'Chrysanthemum', 'Goji Berries', 'Honey', 'Pears', 'Coconut', 'Almonds', 'Chamomile', 'Lavender', 'Passionflower'],
      recipe: {
        name: 'Yin Sleep Soup',
        ingredients: ['10g lily bulb', '10g lotus seeds', '5g white fungus', '1 tbsp goji berries', '3 cups water', 'rock sugar'],
        instructions: 'Soak all ingredients 30 minutes. Simmer 40 minutes until soft. Sweeten lightly. Eat 2 hours before bed.'
      }
    },
    immunity: {
      top5: [
        { name: 'Goji Berries', reason: 'Nourishes Yin while strengthening defense' },
        { name: 'White Fungus', reason: 'Moistens lungs, first line of defense' },
        { name: 'Pears', reason: 'Protects respiratory system' },
        { name: 'Duck', reason: 'Nourishing protein without creating heat' },
        { name: 'Seaweed', reason: 'Mineral-rich, supports fluid immunity' }
      ],
      minimize5: [
        { name: 'Spicy Foods', reason: 'Depletes protective Yin layer' },
        { name: 'Alcohol', reason: 'Severely weakens Yin immunity' },
        { name: 'Coffee', reason: 'Dehydrates protective fluids' },
        { name: 'Lamb', reason: 'Too heating, damages Yin defense' },
        { name: 'Fried Foods', reason: 'Creates heat and inflammation' }
      ],
      allFoods: ['Goji Berries', 'White Fungus', 'Pears', 'Duck', 'Seaweed', 'Mushrooms', 'Lily Bulb', 'Honey', 'Fish', 'Eggs', 'Tofu', 'Spinach', 'Asparagus', 'Green Tea', 'Chrysanthemum', 'Lemon'],
      recipe: {
        name: 'Lung-Moistening Soup',
        ingredients: ['1 Asian pear', '10g white fungus', '10g lily bulb', '1 tbsp goji berries', '4 cups water'],
        instructions: 'Soak fungus until soft. Simmer all ingredients 45 minutes. Drink warm, especially in dry seasons.'
      }
    }
  },

  phlegm_dampness: {
    energy: {
      top5: [
        { name: 'Barley', reason: 'Drains dampness that blocks energy flow' },
        { name: 'Green Tea', reason: 'Transforms phlegm, clears mind fog' },
        { name: 'Radish', reason: 'Resolves phlegm, promotes circulation' },
        { name: 'Mushrooms', reason: 'Light energy without creating dampness' },
        { name: 'Corn', reason: 'Drains fluid retention, light energy' }
      ],
      minimize5: [
        { name: 'Dairy', reason: 'Creates thick phlegm, blocks Qi' },
        { name: 'Sugar', reason: 'Generates dampness that weighs down' },
        { name: 'Fried Foods', reason: 'Creates damp-heat stagnation' },
        { name: 'Banana', reason: 'Very damp-producing fruit' },
        { name: 'Excessive Bread', reason: 'Creates dampness and bloating' }
      ],
      allFoods: ['Barley', 'Green Tea', 'Radish', 'Mushrooms', 'Corn', "Job's Tears", 'Celery', 'Seaweed', 'Fish', 'Chicken', 'Mung Beans', 'Winter Melon', 'Asparagus', 'Lettuce', 'Cucumber', 'Ginger', 'Garlic'],
      recipe: {
        name: 'Dampness-Draining Barley Water',
        ingredients: ['1 cup pearl barley', '8 cups water', '1 inch ginger', 'squeeze of lemon'],
        instructions: 'Simmer barley in water for 1 hour. Strain, add ginger and lemon. Drink throughout the day.'
      }
    },
    digestion: {
      top5: [
        { name: "Job's Tears", reason: 'Best grain for draining digestive dampness' },
        { name: 'White Radish', reason: 'Promotes digestion, resolves food stagnation' },
        { name: 'Tangerine Peel', reason: 'Dries dampness, moves digestive Qi' },
        { name: 'Ginger', reason: 'Transforms cold-damp, warms digestion' },
        { name: 'Celery', reason: 'Diuretic, clears digestive dampness' }
      ],
      minimize5: [
        { name: 'Dairy', reason: 'Major dampness producer in gut' },
        { name: 'Cheese', reason: 'Concentrated dampness and phlegm' },
        { name: 'Ice Cream', reason: 'Cold plus damp, worst combination' },
        { name: 'Bread', reason: 'Creates bloating and dampness' },
        { name: 'Pasta', reason: 'Gluten creates dampness in many' }
      ],
      allFoods: ["Job's Tears", 'White Radish', 'Tangerine Peel', 'Ginger', 'Celery', 'Barley', 'Mushrooms', 'Seaweed', 'Mung Beans', 'Bitter Melon', 'Winter Melon', 'Fish', 'Chicken', 'Rice (small portions)', 'Green Tea'],
      recipe: {
        name: 'Digestive Clearing Soup',
        ingredients: ["1/2 cup Job's tears", '1 white radish', '1 inch ginger', 'dried tangerine peel', '6 cups water'],
        instructions: 'Simmer all ingredients 45 minutes. Eat as a meal replacement to clear digestive dampness.'
      }
    },
    sleep: {
      top5: [
        { name: 'Barley', reason: 'Clears dampness that causes heavy sleep' },
        { name: 'Lotus Seeds', reason: 'Calms spirit without adding dampness' },
        { name: 'Mung Beans', reason: 'Clears heat-damp that disturbs sleep' },
        { name: 'Chamomile', reason: 'Drying yet calming herb' },
        { name: 'Jasmine Tea', reason: 'Moves Qi, light and calming' }
      ],
      minimize5: [
        { name: 'Dairy', reason: 'Creates phlegm that disturbs breathing' },
        { name: 'Heavy Dinners', reason: 'Overwhelms digestion, poor sleep' },
        { name: 'Sweets', reason: 'Creates dampness, restless sleep' },
        { name: 'Alcohol', reason: 'Adds heat to dampness' },
        { name: 'Cheese', reason: 'Phlegm accumulation disturbs sleep' }
      ],
      allFoods: ['Barley', 'Lotus Seeds', 'Mung Beans', 'Chamomile', 'Jasmine Tea', 'Light Fish', 'Celery', 'Cucumber', 'Radish', 'Seaweed', 'Green Tea (early)', 'Rice (small portion)'],
      recipe: {
        name: 'Light Evening Soup',
        ingredients: ['1/2 cup barley', '10 lotus seeds', '4 cups water', 'pinch of salt'],
        instructions: 'Simmer 40 minutes until soft. Eat as light dinner to promote clear, refreshing sleep.'
      }
    },
    immunity: {
      top5: [
        { name: 'Mushrooms', reason: 'Immune-boosting without creating dampness' },
        { name: 'Garlic', reason: 'Transforms phlegm, antimicrobial' },
        { name: 'Onion', reason: 'Resolves phlegm, strengthens lungs' },
        { name: 'Seaweed', reason: 'Transforms phlegm, mineral support' },
        { name: 'Radish', reason: 'Clears phlegm from respiratory system' }
      ],
      minimize5: [
        { name: 'Dairy', reason: 'Creates mucus that harbors pathogens' },
        { name: 'Sugar', reason: 'Feeds pathogens, creates dampness' },
        { name: 'Fried Foods', reason: 'Weakens spleen immunity' },
        { name: 'Processed Foods', reason: 'Creates toxic dampness' },
        { name: 'Cold Drinks', reason: 'Damages digestive immunity' }
      ],
      allFoods: ['Mushrooms', 'Garlic', 'Onion', 'Seaweed', 'Radish', 'Ginger', 'Green Tea', 'Fish', 'Chicken', 'Barley', "Job's Tears", 'Celery', 'Broccoli', 'Citrus Peel'],
      recipe: {
        name: 'Phlegm-Clearing Immune Soup',
        ingredients: ['Mixed mushrooms', '4 cloves garlic', '1 onion', '1 radish', '6 cups vegetable broth', 'ginger'],
        instructions: 'Sauté garlic and onion, add broth and vegetables. Simmer 30 minutes. Eat regularly during cold season.'
      }
    }
  },

  damp_heat: {
    energy: {
      top5: [
        { name: 'Mung Beans', reason: 'Clears damp-heat that blocks energy' },
        { name: 'Cucumber', reason: 'Cooling without creating dampness' },
        { name: 'Barley', reason: 'Drains heat and dampness together' },
        { name: 'Bitter Melon', reason: 'Clears heat, promotes clarity' },
        { name: 'Green Tea', reason: 'Clears head, promotes alertness' }
      ],
      minimize5: [
        { name: 'Alcohol', reason: 'Creates intense damp-heat' },
        { name: 'Fried Foods', reason: 'Major damp-heat producer' },
        { name: 'Spicy Foods', reason: 'Adds heat to existing dampness' },
        { name: 'Red Meat', reason: 'Too heating for this constitution' },
        { name: 'Mango', reason: 'Creates damp-heat' }
      ],
      allFoods: ['Mung Beans', 'Cucumber', 'Barley', 'Bitter Melon', 'Green Tea', 'Celery', 'Lotus Root', 'Watermelon', 'Winter Melon', 'Tofu', 'Fish', 'Seaweed', 'Chrysanthemum', 'Pears'],
      recipe: {
        name: 'Cooling Mung Bean Soup',
        ingredients: ['1 cup mung beans', '8 cups water', 'rock sugar to taste', 'handful lotus seeds'],
        instructions: 'Simmer mung beans until soft (about 1 hour). Add sugar and lotus seeds. Serve at room temperature.'
      }
    },
    digestion: {
      top5: [
        { name: 'Bitter Melon', reason: 'Clears digestive heat and dampness' },
        { name: 'Winter Melon', reason: 'Drains dampness, cools heat' },
        { name: 'Mung Beans', reason: 'Detoxifies digestive tract' },
        { name: 'Celery', reason: 'Clears liver heat affecting digestion' },
        { name: 'Cucumber', reason: 'Cooling, promotes fluid balance' }
      ],
      minimize5: [
        { name: 'Alcohol', reason: 'Creates digestive damp-heat' },
        { name: 'Spicy Foods', reason: 'Irritates and heats gut' },
        { name: 'Fried Foods', reason: 'Creates sticky damp-heat' },
        { name: 'Lamb', reason: 'Too heating for digestion' },
        { name: 'Shellfish', reason: 'Can worsen damp-heat' }
      ],
      allFoods: ['Bitter Melon', 'Winter Melon', 'Mung Beans', 'Celery', 'Cucumber', 'Barley', 'Tofu', 'Fish', 'Seaweed', 'Lotus Root', 'Chinese Cabbage', 'Radish', 'Green Tea', 'Chrysanthemum'],
      recipe: {
        name: 'Heat-Clearing Winter Melon Soup',
        ingredients: ['500g winter melon', "1/4 cup Job's tears", '6 cups water', 'small dried shrimp (optional)', 'ginger slice'],
        instructions: 'Simmer all ingredients 30 minutes. Season lightly. Eat as main course to clear digestive heat.'
      }
    },
    sleep: {
      top5: [
        { name: 'Chrysanthemum', reason: 'Clears heat that disturbs sleep' },
        { name: 'Mung Beans', reason: 'Clears heat from heart' },
        { name: 'Lotus Seeds', reason: 'Calms while clearing heat' },
        { name: 'Pears', reason: 'Cooling and calming' },
        { name: 'Lily Bulb', reason: 'Clears heart heat for sleep' }
      ],
      minimize5: [
        { name: 'Alcohol', reason: 'Creates restless, hot sleep' },
        { name: 'Spicy Dinners', reason: 'Heat disturbs sleep' },
        { name: 'Coffee', reason: 'Adds heat to system' },
        { name: 'Heavy Meats', reason: 'Creates digestive heat at night' },
        { name: 'Chocolate', reason: 'Stimulating and heating' }
      ],
      allFoods: ['Chrysanthemum', 'Mung Beans', 'Lotus Seeds', 'Pears', 'Lily Bulb', 'Cucumber', 'Watermelon', 'Celery', 'White Fungus', 'Chamomile', 'Mint Tea'],
      recipe: {
        name: 'Cooling Sleep Tea',
        ingredients: ['5 chrysanthemum flowers', '10 lotus seeds', '1 tbsp goji berries', '3 cups water'],
        instructions: 'Simmer lotus seeds 20 minutes, add chrysanthemum and goji last 5 minutes. Drink 2 hours before bed.'
      }
    },
    immunity: {
      top5: [
        { name: 'Mung Beans', reason: 'Detoxifying, clears pathogenic heat' },
        { name: 'Chrysanthemum', reason: 'Clears heat, brightens eyes' },
        { name: 'Bitter Melon', reason: 'Strong antimicrobial cooling' },
        { name: 'Green Tea', reason: 'Antioxidant, clears heat-toxins' },
        { name: 'Seaweed', reason: 'Detoxifying, mineral support' }
      ],
      minimize5: [
        { name: 'Alcohol', reason: 'Weakens heat-clearing immunity' },
        { name: 'Sugar', reason: 'Feeds heat-pathogens' },
        { name: 'Fried Foods', reason: 'Creates toxic heat' },
        { name: 'Shellfish', reason: 'Can trigger damp-heat flares' },
        { name: 'Tropical Fruits', reason: 'Too damp and heating' }
      ],
      allFoods: ['Mung Beans', 'Chrysanthemum', 'Bitter Melon', 'Green Tea', 'Seaweed', 'Cucumber', 'Celery', 'Tofu', 'Fish', 'Barley', 'Winter Melon', 'Lotus Root', 'Honeysuckle'],
      recipe: {
        name: 'Detox Cooling Broth',
        ingredients: ['1/2 cup mung beans', 'handful dried chrysanthemum', 'piece of seaweed', '6 cups water'],
        instructions: 'Simmer mung beans 45 minutes. Add chrysanthemum and seaweed last 10 minutes. Drink as cleansing broth.'
      }
    }
  },

  blood_stasis: {
    energy: {
      top5: [
        { name: 'Hawthorn', reason: 'Moves blood, improves circulation for energy' },
        { name: 'Turmeric', reason: 'Anti-inflammatory, promotes flow' },
        { name: 'Black Fungus', reason: 'Classic blood-moving food' },
        { name: 'Onion', reason: 'Promotes Qi and blood circulation' },
        { name: 'Vinegar', reason: 'Moves stagnant blood' }
      ],
      minimize5: [
        { name: 'Cold Foods', reason: 'Constricts blood vessels' },
        { name: 'Fatty Meats', reason: 'Slows circulation' },
        { name: 'Excessive Salt', reason: 'Can worsen stasis' },
        { name: 'Ice', reason: 'Freezes blood movement' },
        { name: 'Heavy Cream', reason: 'Thickens blood' }
      ],
      allFoods: ['Hawthorn', 'Turmeric', 'Black Fungus', 'Onion', 'Vinegar', 'Garlic', 'Ginger', 'Eggplant', 'Peaches', 'Chestnuts', 'Red Wine (small)', 'Brown Sugar', 'Saffron', 'Rose Tea'],
      recipe: {
        name: 'Blood-Moving Tea',
        ingredients: ['5 dried hawthorn berries', '3 rose buds', '2 slices ginger', '1 tsp brown sugar', '2 cups water'],
        instructions: 'Simmer all ingredients 15 minutes. Drink warm to promote circulation and energy.'
      }
    },
    digestion: {
      top5: [
        { name: 'Hawthorn', reason: 'Moves food stagnation, aids digestion' },
        { name: 'Vinegar', reason: 'Promotes digestive circulation' },
        { name: 'Radish', reason: 'Moves Qi to support blood flow' },
        { name: 'Ginger', reason: 'Warms and circulates digestive blood' },
        { name: 'Tangerine Peel', reason: 'Moves digestive Qi and blood' }
      ],
      minimize5: [
        { name: 'Cold Foods', reason: 'Slows digestive circulation' },
        { name: 'Greasy Foods', reason: 'Creates stagnation' },
        { name: 'Excessive Dairy', reason: 'Slows blood flow' },
        { name: 'Frozen Foods', reason: 'Shocks digestive circulation' },
        { name: 'Heavy Meals', reason: 'Overwhelms circulatory digestion' }
      ],
      allFoods: ['Hawthorn', 'Vinegar', 'Radish', 'Ginger', 'Tangerine Peel', 'Garlic', 'Onion', 'Black Fungus', 'Turmeric', 'Brown Sugar', 'Warm Soups', 'Fish', 'Chicken'],
      recipe: {
        name: 'Digestive Circulation Soup',
        ingredients: ['5 hawthorn berries', '1 radish', '3 slices ginger', 'piece of tangerine peel', '4 cups broth'],
        instructions: 'Simmer all ingredients 30 minutes. Drink after heavy meals to promote digestion.'
      }
    },
    sleep: {
      top5: [
        { name: 'Longan', reason: 'Nourishes heart blood for calm sleep' },
        { name: 'Rose Tea', reason: 'Moves Qi-blood, calms spirit' },
        { name: 'Red Dates', reason: 'Nourishes blood, promotes rest' },
        { name: 'Saffron', reason: 'Moves blood, calms mind' },
        { name: 'Goji Berries', reason: 'Nourishes while gently moving' }
      ],
      minimize5: [
        { name: 'Caffeine', reason: 'Constricts blood vessels' },
        { name: 'Cold Drinks', reason: 'Impedes nighttime circulation' },
        { name: 'Heavy Dinners', reason: 'Blood stuck in digestion' },
        { name: 'Alcohol', reason: 'Initially moves then stagnates' },
        { name: 'Excessive Salt', reason: 'Can affect circulation' }
      ],
      allFoods: ['Longan', 'Rose Tea', 'Red Dates', 'Saffron', 'Goji Berries', 'Chamomile', 'Warm Milk', 'Walnuts', 'Black Sesame', 'Honey'],
      recipe: {
        name: 'Heart-Calming Night Tea',
        ingredients: ['5 longan', '3 red dates', '3 rose buds', 'pinch of saffron (optional)', '2 cups water'],
        instructions: 'Simmer 15 minutes, strain. Add honey if desired. Drink 1 hour before bed.'
      }
    },
    immunity: {
      top5: [
        { name: 'Turmeric', reason: 'Anti-inflammatory immune support' },
        { name: 'Garlic', reason: 'Moves blood, antimicrobial' },
        { name: 'Ginger', reason: 'Warms and circulates protective Qi' },
        { name: 'Black Fungus', reason: 'Supports blood and immunity' },
        { name: 'Onion', reason: 'Promotes circulation, antimicrobial' }
      ],
      minimize5: [
        { name: 'Cold Foods', reason: 'Impairs immune circulation' },
        { name: 'Fatty Foods', reason: 'Blocks immune blood flow' },
        { name: 'Processed Foods', reason: 'Creates inflammatory stasis' },
        { name: 'Excessive Dairy', reason: 'Slows immune response' },
        { name: 'Ice', reason: 'Freezes protective circulation' }
      ],
      allFoods: ['Turmeric', 'Garlic', 'Ginger', 'Black Fungus', 'Onion', 'Mushrooms', 'Fish', 'Chicken', 'Hawthorn', 'Vinegar', 'Citrus', 'Green Tea', 'Seaweed'],
      recipe: {
        name: 'Circulation Immune Boost',
        ingredients: ['1 inch turmeric', '4 cloves garlic', '1 inch ginger', '1 onion', '6 cups bone broth'],
        instructions: 'Simmer all ingredients 30 minutes. Strain and drink warm daily for immune support.'
      }
    }
  },

  qi_stagnation: {
    energy: {
      top5: [
        { name: 'Citrus Peel', reason: 'Moves stuck Qi, lifts mood and energy' },
        { name: 'Rose Tea', reason: 'Soothes liver Qi, releases tension' },
        { name: 'Jasmine', reason: 'Aromatic Qi mover, uplifting' },
        { name: 'Radish', reason: 'Promotes Qi flow through body' },
        { name: 'Mint', reason: 'Releases constrained energy' }
      ],
      minimize5: [
        { name: 'Coffee', reason: 'Tightens Qi further when anxious' },
        { name: 'Alcohol', reason: 'Temporarily moves then stagnates more' },
        { name: 'Heavy Foods', reason: 'Weighs down stuck Qi' },
        { name: 'Fatty Foods', reason: 'Creates more stagnation' },
        { name: 'Too Much Sweets', reason: 'Creates dampness blocking Qi' }
      ],
      allFoods: ['Citrus Peel', 'Rose Tea', 'Jasmine', 'Radish', 'Mint', 'Fennel', 'Orange', 'Tangerine', 'Celery', 'Buckwheat', 'Asparagus', 'Onion', 'Garlic', 'Turmeric', 'Green Tea'],
      recipe: {
        name: 'Qi-Moving Morning Tea',
        ingredients: ['Dried tangerine peel', '3 rose buds', 'Fresh mint leaves', '2 cups hot water'],
        instructions: 'Steep all ingredients 5 minutes. Drink in morning to start day with flowing Qi.'
      }
    },
    digestion: {
      top5: [
        { name: 'Radish', reason: 'Best food for moving digestive Qi' },
        { name: 'Tangerine Peel', reason: 'Classic digestive Qi mover' },
        { name: 'Fennel', reason: 'Relaxes digestive tension' },
        { name: 'Ginger', reason: 'Warms and moves stuck digestion' },
        { name: 'Mint', reason: 'Releases digestive constraint' }
      ],
      minimize5: [
        { name: 'Eating When Upset', reason: 'Emotions stagnate digestive Qi' },
        { name: 'Large Meals', reason: 'Overwhelms stressed digestion' },
        { name: 'Cold Foods', reason: 'Contracts already tight Qi' },
        { name: 'Greasy Foods', reason: 'Creates physical stagnation' },
        { name: 'Rushed Eating', reason: 'Prevents proper Qi flow' }
      ],
      allFoods: ['Radish', 'Tangerine Peel', 'Fennel', 'Ginger', 'Mint', 'Caraway', 'Cardamom', 'Orange', 'Celery', 'Asparagus', 'Light Soups', 'Fish', 'Chicken'],
      recipe: {
        name: 'Digestive Harmony Tea',
        ingredients: ['1 tsp fennel seeds', 'Dried tangerine peel', '2 slices ginger', '2 cups water'],
        instructions: 'Simmer 10 minutes, strain. Drink before or after meals when digestion feels stuck.'
      }
    },
    sleep: {
      top5: [
        { name: 'Rose Tea', reason: 'Soothes liver Qi, calms emotions' },
        { name: 'Chamomile', reason: 'Relaxes tension, promotes sleep' },
        { name: 'Lavender', reason: 'Calms anxious Qi stagnation' },
        { name: 'Jasmine', reason: 'Gently moves Qi, peaceful sleep' },
        { name: 'Lotus Seeds', reason: 'Calms heart without stagnating' }
      ],
      minimize5: [
        { name: 'Coffee', reason: 'Tightens Qi, prevents relaxation' },
        { name: 'Alcohol', reason: 'Disturbs liver Qi at night' },
        { name: 'Work Before Bed', reason: 'Mental Qi stagnation' },
        { name: 'Heavy Dinners', reason: 'Physical stagnation disturbs sleep' },
        { name: 'Stimulating Media', reason: 'Stagnates mind Qi' }
      ],
      allFoods: ['Rose Tea', 'Chamomile', 'Lavender', 'Jasmine', 'Lotus Seeds', 'Passionflower', 'Lemon Balm', 'Warm Milk', 'Honey', 'Walnuts'],
      recipe: {
        name: 'Peaceful Mind Tea',
        ingredients: ['3 rose buds', '1 tsp chamomile', '1 tsp lavender', '2 cups water'],
        instructions: 'Steep 5 minutes, strain. Drink 1 hour before bed while doing calming activities.'
      }
    },
    immunity: {
      top5: [
        { name: 'Citrus', reason: 'Vitamin C plus Qi-moving' },
        { name: 'Mushrooms', reason: 'Adaptogenic immune support' },
        { name: 'Garlic', reason: 'Moves Qi, antimicrobial' },
        { name: 'Ginger', reason: 'Warms and circulates Wei Qi' },
        { name: 'Green Tea', reason: 'Antioxidant, moves stagnation' }
      ],
      minimize5: [
        { name: 'Stress Eating', reason: 'Stagnation weakens immunity' },
        { name: 'Alcohol', reason: 'Stagnates protective Qi' },
        { name: 'Processed Foods', reason: 'Blocks natural Qi flow' },
        { name: 'Excessive Dairy', reason: 'Creates stagnant phlegm' },
        { name: 'Irregular Meals', reason: 'Disrupts immune Qi rhythm' }
      ],
      allFoods: ['Citrus', 'Mushrooms', 'Garlic', 'Ginger', 'Green Tea', 'Onion', 'Radish', 'Fennel', 'Turmeric', 'Broccoli', 'Cabbage', 'Fish', 'Chicken'],
      recipe: {
        name: 'Immune Flow Soup',
        ingredients: ['Mixed mushrooms', '3 cloves garlic', '1 inch ginger', 'squeeze of lemon', '4 cups broth'],
        instructions: 'Simmer mushrooms, garlic, ginger in broth 20 minutes. Add lemon before serving. Drink when feeling run down.'
      }
    }
  },

  inherited_special: {
    energy: {
      top5: [
        { name: 'Rice', reason: 'Hypoallergenic, stable energy source' },
        { name: 'Sweet Potato', reason: 'Low-allergen, nourishing' },
        { name: 'Chicken', reason: 'Usually well-tolerated protein' },
        { name: 'Carrots', reason: 'Gentle, easily digested' },
        { name: 'Squash', reason: 'Low-allergen vegetable' }
      ],
      minimize5: [
        { name: 'Known Triggers', reason: 'Avoid all personal allergens' },
        { name: 'New Foods', reason: 'Introduce slowly, test carefully' },
        { name: 'Processed Foods', reason: 'Hidden allergens and additives' },
        { name: 'Common Allergens', reason: 'Nuts, shellfish, eggs if sensitive' },
        { name: 'Histamine Foods', reason: 'If histamine-sensitive' }
      ],
      allFoods: ['Rice', 'Sweet Potato', 'Chicken', 'Carrots', 'Squash', 'Zucchini', 'Pears', 'Apples (cooked)', 'Lamb', 'Fish (if tolerated)', 'Quinoa', 'Millet', 'Bone Broth', 'Ginger', 'Turmeric'],
      recipe: {
        name: 'Gentle Energy Bowl',
        ingredients: ['1 cup rice', 'Roasted sweet potato', 'Steamed carrots', 'Shredded chicken', 'Drizzle of olive oil'],
        instructions: 'Combine cooked ingredients in bowl. Season with salt and herbs you tolerate. Simple, nourishing, safe.'
      }
    },
    digestion: {
      top5: [
        { name: 'Rice Congee', reason: 'Most gentle on sensitive digestion' },
        { name: 'Bone Broth', reason: 'Healing for gut lining' },
        { name: 'Cooked Vegetables', reason: 'Easier than raw to digest' },
        { name: 'Ginger', reason: 'Calms digestive reactions' },
        { name: 'Pears (cooked)', reason: 'Gentle, low-allergen fruit' }
      ],
      minimize5: [
        { name: 'Personal Triggers', reason: 'Known allergens cause inflammation' },
        { name: 'Raw Foods', reason: 'Harder on sensitive gut' },
        { name: 'Dairy', reason: 'Common trigger for many' },
        { name: 'Gluten', reason: 'Test for sensitivity' },
        { name: 'Fermented Foods', reason: 'Can trigger histamine reactions' }
      ],
      allFoods: ['Rice', 'Congee', 'Bone Broth', 'Cooked Vegetables', 'Ginger', 'Pears', 'Chicken', 'Fish', 'Squash', 'Carrots', 'Zucchini', 'Sweet Potato', 'Millet', 'Quinoa'],
      recipe: {
        name: 'Healing Gut Congee',
        ingredients: ['1/2 cup rice', '6 cups bone broth', '2 slices ginger', 'shredded chicken', 'salt'],
        instructions: 'Simmer rice in broth 1-2 hours until creamy. Add ginger and chicken. Easy, healing meal.'
      }
    },
    sleep: {
      top5: [
        { name: 'Chamomile', reason: 'Usually well-tolerated calming herb' },
        { name: 'Warm Rice Milk', reason: 'Non-dairy, gentle' },
        { name: 'Cooked Apples', reason: 'Low-allergen, calming' },
        { name: 'Oats (if tolerated)', reason: 'Calming, promotes sleep' },
        { name: 'Honey (if tolerated)', reason: 'Gentle sweetness for sleep' }
      ],
      minimize5: [
        { name: 'Known Triggers', reason: 'Reactions disturb sleep' },
        { name: 'New Foods at Night', reason: 'Reactions can occur' },
        { name: 'Dairy (if sensitive)', reason: 'Common sleep disruptor' },
        { name: 'Histamine Foods', reason: 'Can cause nighttime reactions' },
        { name: 'Processed Foods', reason: 'Hidden triggers' }
      ],
      allFoods: ['Chamomile', 'Rice Milk', 'Cooked Apples', 'Oats', 'Honey', 'Pears', 'Millet', 'Sweet Potato', 'Warm Water', 'Ginger Tea'],
      recipe: {
        name: 'Safe Sleep Tea',
        ingredients: ['1 tsp chamomile', '1 cup hot water', '1 tsp honey (if tolerated)'],
        instructions: 'Steep chamomile 5 minutes, add honey. Simple, gentle, usually well-tolerated.'
      }
    },
    immunity: {
      top5: [
        { name: 'Bone Broth', reason: 'Gut healing strengthens immunity' },
        { name: 'Ginger', reason: 'Anti-inflammatory, usually safe' },
        { name: 'Turmeric', reason: 'Calms immune overreaction' },
        { name: 'Vegetables (cooked)', reason: 'Nutrients without triggers' },
        { name: 'Quercetin Foods', reason: 'Natural antihistamine (apples, onions)' }
      ],
      minimize5: [
        { name: 'Known Allergens', reason: 'Trigger immune chaos' },
        { name: 'Processed Foods', reason: 'Additives trigger reactions' },
        { name: 'High-Histamine', reason: 'If histamine-sensitive' },
        { name: 'Untested Supplements', reason: 'Can contain allergens' },
        { name: 'Restaurant Foods', reason: 'Cross-contamination risk' }
      ],
      allFoods: ['Bone Broth', 'Ginger', 'Turmeric', 'Cooked Vegetables', 'Apples', 'Onions', 'Chicken', 'Fish', 'Rice', 'Sweet Potato', 'Carrots', 'Squash', 'Olive Oil', 'Green Tea'],
      recipe: {
        name: 'Immune-Calming Broth',
        ingredients: ['4 cups bone broth', '1 inch turmeric', '1 inch ginger', 'pinch black pepper', 'cooked vegetables'],
        instructions: 'Simmer broth with turmeric and ginger 15 minutes. Add vegetables. Drink daily for balanced immunity.'
      }
    }
  },

  balanced: {
    energy: {
      top5: [
        { name: 'Whole Grains', reason: 'Sustained energy release' },
        { name: 'Variety of Vegetables', reason: 'Complete nutrition' },
        { name: 'Quality Proteins', reason: 'Balanced fuel source' },
        { name: 'Seasonal Fruits', reason: 'Natural energy, vitamins' },
        { name: 'Nuts & Seeds', reason: 'Healthy fats for brain' }
      ],
      minimize5: [
        { name: 'Processed Foods', reason: 'Disrupts natural balance' },
        { name: 'Excessive Sugar', reason: 'Energy spikes and crashes' },
        { name: 'Extreme Diets', reason: 'Can shift you out of balance' },
        { name: 'Excessive Caffeine', reason: 'Borrows energy' },
        { name: 'Overeating', reason: 'Overwhelms balanced digestion' }
      ],
      allFoods: ['Rice', 'Oats', 'Quinoa', 'Vegetables', 'Fruits', 'Chicken', 'Fish', 'Eggs', 'Tofu', 'Beans', 'Nuts', 'Seeds', 'Olive Oil', 'Green Tea', 'Honey', 'Mushrooms'],
      recipe: {
        name: 'Balanced Energy Bowl',
        ingredients: ['Cooked grain of choice', 'Variety of roasted vegetables', 'Protein of choice', 'Seeds', 'Simple dressing'],
        instructions: 'Combine all elements in bowl. Aim for color variety. Season simply. Eat mindfully.'
      }
    },
    digestion: {
      top5: [
        { name: 'Fermented Foods', reason: 'Probiotic support' },
        { name: 'Fiber-Rich Vegetables', reason: 'Feeds good bacteria' },
        { name: 'Ginger', reason: 'Universal digestive aid' },
        { name: 'Whole Grains', reason: 'Feeds gut microbiome' },
        { name: 'Bone Broth', reason: 'Gut lining support' }
      ],
      minimize5: [
        { name: 'Processed Foods', reason: 'Disrupts gut balance' },
        { name: 'Excessive Sugar', reason: 'Feeds bad bacteria' },
        { name: 'Artificial Sweeteners', reason: 'Damages microbiome' },
        { name: 'Rushed Eating', reason: 'Impairs digestion' },
        { name: 'Overeating', reason: 'Overwhelms system' }
      ],
      allFoods: ['Fermented Foods', 'Vegetables', 'Ginger', 'Whole Grains', 'Bone Broth', 'Yogurt', 'Miso', 'Sauerkraut', 'Garlic', 'Onion', 'Apples', 'Oats', 'Fish', 'Beans'],
      recipe: {
        name: 'Gut-Happy Miso Soup',
        ingredients: ['4 cups dashi or vegetable broth', '2 tbsp miso paste', 'Tofu cubes', 'Seaweed', 'Green onion'],
        instructions: 'Heat broth (don\'t boil), whisk in miso. Add tofu and seaweed. Simple, probiotic-friendly.'
      }
    },
    sleep: {
      top5: [
        { name: 'Chamomile', reason: 'Gentle, time-tested' },
        { name: 'Tart Cherries', reason: 'Natural melatonin' },
        { name: 'Magnesium Foods', reason: 'Relaxes muscles and mind' },
        { name: 'Complex Carbs', reason: 'Promotes serotonin' },
        { name: 'Warm Milk', reason: 'Tryptophan and comfort' }
      ],
      minimize5: [
        { name: 'Caffeine After 2pm', reason: 'Disrupts sleep cycle' },
        { name: 'Alcohol', reason: 'Reduces sleep quality' },
        { name: 'Heavy Late Meals', reason: 'Body works instead of rests' },
        { name: 'Excessive Sugar', reason: 'Can cause nighttime waking' },
        { name: 'Spicy Foods', reason: 'Can cause discomfort' }
      ],
      allFoods: ['Chamomile', 'Tart Cherries', 'Almonds', 'Walnuts', 'Banana', 'Oats', 'Milk', 'Honey', 'Turkey', 'Kiwi', 'Lettuce', 'Passionflower', 'Lavender'],
      recipe: {
        name: 'Sleep-Well Smoothie',
        ingredients: ['1 banana', '1/2 cup tart cherry juice', '1/4 cup oats', '1 tbsp almond butter', 'milk of choice'],
        instructions: 'Blend all ingredients. Drink 2 hours before bed for natural melatonin and tryptophan boost.'
      }
    },
    immunity: {
      top5: [
        { name: 'Colorful Vegetables', reason: 'Diverse antioxidants' },
        { name: 'Citrus Fruits', reason: 'Vitamin C support' },
        { name: 'Garlic', reason: 'Natural antimicrobial' },
        { name: 'Mushrooms', reason: 'Beta-glucan immune support' },
        { name: 'Green Tea', reason: 'Polyphenol protection' }
      ],
      minimize5: [
        { name: 'Processed Foods', reason: 'Inflammatory' },
        { name: 'Excessive Sugar', reason: 'Suppresses immune cells' },
        { name: 'Excessive Alcohol', reason: 'Weakens defenses' },
        { name: 'Poor Sleep', reason: 'Crucial for immunity' },
        { name: 'Chronic Stress', reason: 'Immune suppression' }
      ],
      allFoods: ['Vegetables', 'Citrus', 'Garlic', 'Mushrooms', 'Green Tea', 'Ginger', 'Turmeric', 'Yogurt', 'Berries', 'Spinach', 'Broccoli', 'Fish', 'Nuts', 'Seeds', 'Olive Oil', 'Honey'],
      recipe: {
        name: 'Immunity Rainbow Bowl',
        ingredients: ['Mixed greens', 'Roasted rainbow vegetables', 'Grilled chicken or fish', 'Seeds', 'Lemon-turmeric dressing'],
        instructions: 'Arrange colorful vegetables over greens. Add protein and seeds. Drizzle with anti-inflammatory dressing.'
      }
    }
  }
};

// Celebrity constitutions (fun feature)
export const celebrityConstitutions = {
  qi_deficient: ['Emma Watson', 'Keanu Reeves', 'Zendaya'],
  yang_deficient: ['Taylor Swift', 'Ed Sheeran', 'Billie Eilish'],
  yin_deficient: ['Lady Gaga', 'Beyoncé', 'Bruno Mars'],
  phlegm_dampness: ['Adele', 'Jack Black', 'Rebel Wilson'],
  damp_heat: ['Dwayne Johnson', 'Jennifer Lopez', 'Chris Hemsworth'],
  blood_stasis: ['Johnny Depp', 'Helena Bonham Carter', 'Tim Burton'],
  qi_stagnation: ['Elon Musk', 'Simone Biles', 'Emma Stone'],
  inherited_special: ['Selena Gomez', 'Zooey Deschanel', 'Hailey Bieber'],
  balanced: ['Jennifer Aniston', 'Will Smith', 'Tom Hanks']
};

// Get health focus foods for a constitution
export function getHealthFocusFoods(constitutionId, focusId) {
  const constitutionFoods = healthFocusFoods[constitutionId];
  if (!constitutionFoods) return healthFocusFoods.balanced[focusId];
  return constitutionFoods[focusId] || healthFocusFoods.balanced[focusId];
}
