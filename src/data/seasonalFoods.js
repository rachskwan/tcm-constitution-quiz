// TCM Seasonal Food Database
// Foods mapped to each constitution and season based on TCM food therapy principles
// Data from comprehensive TCM food database

// Food thermal properties reference
export const foodProperties = {
  hot: { name: 'Hot', chinese: '热', effect: 'Strongly warms, disperses cold', examples: ['Lamb', 'Dried ginger', 'Cinnamon', 'Chili', 'Black pepper'], bestFor: ['Yang Deficient (especially winter)'] },
  warm: { name: 'Warm', chinese: '温', effect: 'Gently warms, improves circulation', examples: ['Chicken', 'Beef', 'Oats', 'Cherries', 'Walnuts', 'Dates'], bestFor: ['Qi Deficient', 'Yang Deficient'] },
  neutral: { name: 'Neutral', chinese: '平', effect: 'Balanced, nourishing, harmonizing', examples: ['Rice', 'Potatoes', 'Carrots', 'Eggs', 'Pork'], bestFor: ['All constitutions', 'Balanced'] },
  cool: { name: 'Cool', chinese: '凉', effect: 'Gently clears heat, moistens', examples: ['Apples', 'Pears', 'Tofu', 'Wheat', 'Mung beans'], bestFor: ['Yin Deficient', 'Damp-Heat'] },
  cold: { name: 'Cold', chinese: '寒', effect: 'Strongly clears heat, detoxifies', examples: ['Watermelon', 'Cucumber', 'Bitter melon', 'Crab'], bestFor: ['Damp-Heat', 'Yin Deficient (summer only)'] }
};

// General seasonal guidance
export const seasonalGuidance = {
  spring: {
    focus: 'Support liver, promote Yang Qi rising',
    universalFoods: ['Green vegetables', 'Mild warming foods', 'Gentle detox foods'],
    universalAvoid: ['Excessive sour foods', 'Too much raw food']
  },
  summer: {
    focus: 'Clear heat, protect from overheating',
    universalFoods: ['Cooling foods', 'Light meals', 'Hydrating foods'],
    universalAvoid: ['Excessive cold/ice', 'Heavy greasy foods']
  },
  autumn: {
    focus: 'Moisten dryness, prepare for winter',
    universalFoods: ['Moistening foods', 'Seasonal fruits (cooked)', 'Nourishing foods'],
    universalAvoid: ['Excessive spicy foods', 'Very dry foods']
  },
  winter: {
    focus: 'Store essence, warm Yang Qi',
    universalFoods: ['Warming foods', 'Nourishing soups', 'Kidney-tonifying foods'],
    universalAvoid: ['Raw/cold foods', 'Excessive cooling foods']
  }
};

// Constitution-specific food principles
export const constitutionPrinciples = {
  qi_deficient: {
    principle: 'Sweet, warm, easily digestible foods',
    avoid: 'Raw, cold, hard-to-digest foods'
  },
  yang_deficient: {
    principle: 'Hot/warm foods, avoid cold',
    avoid: 'All cold and raw foods'
  },
  yin_deficient: {
    principle: 'Cool, moistening foods',
    avoid: 'Spicy, drying, heating foods'
  },
  phlegm_dampness: {
    principle: 'Light, drain dampness, small portions',
    avoid: 'Dairy, fried, greasy, sweet foods'
  },
  damp_heat: {
    principle: 'Cool, bitter, clear heat and dampness',
    avoid: 'Alcohol, fried, tropical fruits, spicy'
  },
  blood_stasis: {
    principle: 'Move blood, promote circulation',
    avoid: 'Excessive cold, very fatty foods'
  },
  qi_stagnation: {
    principle: 'Aromatic, regulate Qi flow',
    avoid: 'Coffee (if anxious), excessive alcohol'
  },
  inherited_special: {
    principle: 'Identify triggers, strengthen defensive Qi',
    avoid: 'Individual allergens, processed foods'
  },
  balanced: {
    principle: 'Moderate, seasonal eating',
    avoid: 'Extremes in diet or lifestyle'
  }
};

// Seasonal food recommendations by constitution
export const seasonalFoods = {
  qi_deficient: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Chicken', property: 'Warm', benefit: 'Tonifies Qi', category: 'Protein', note: 'Make into soup for easier digestion' },
          { name: 'Chinese Yam', property: 'Neutral', benefit: 'Strengthens spleen Qi', category: 'Vegetable', note: 'Especially good for digestion' },
          { name: 'Red Dates', property: 'Warm', benefit: 'Nourishes blood and Qi', category: 'Fruit', note: 'Can be cooked in porridge' },
          { name: 'Honey', property: 'Neutral', benefit: 'Moistens and tonifies', category: 'Sweetener', note: 'Use in warm water' },
          { name: 'Rice Porridge', property: 'Neutral', benefit: 'Easy to digest, strengthens spleen', category: 'Grain', note: 'Base for other ingredients' },
          { name: 'Spring Onions', property: 'Warm', benefit: 'Promotes Yang Qi', category: 'Vegetable', note: 'Good for seasonal transition' }
        ],
        minimize: [
          { name: 'Sour Foods', property: 'Varies', reason: 'Contracts Qi excessively', examples: 'Plums, vinegar, sour pickles' }
        ],
        tea: 'Astragalus and red date tea'
      },
      summer: {
        emphasize: [
          { name: 'Mung Bean Soup', property: 'Cool', benefit: 'Clears heat gently', category: 'Legume', note: 'Room temperature, not iced' },
          { name: 'Lotus Seed', property: 'Neutral', benefit: 'Calms spirit, strengthens spleen', category: 'Seed', note: 'Good for hot weather' },
          { name: 'Lily Bulb', property: 'Cool', benefit: 'Moistens lungs, calms mind', category: 'Vegetable', note: 'Helps with summer heat' },
          { name: 'Duck', property: 'Cool', benefit: 'Nourishes Yin without heating', category: 'Protein', note: 'Better than chicken in heat' },
          { name: 'Congee', property: 'Neutral', benefit: 'Easy digestion, hydrating', category: 'Grain', note: 'Light summer meals' }
        ],
        minimize: [
          { name: 'Iced Drinks', property: 'Cold', reason: 'Damages spleen Yang', examples: 'Ice water, iced coffee' },
          { name: 'Raw Foods', property: 'Cold', reason: 'Difficult to digest', examples: 'Salads, raw vegetables' }
        ],
        tea: 'Chrysanthemum with goji berries'
      },
      autumn: {
        emphasize: [
          { name: 'Pears (cooked)', property: 'Cool', benefit: 'Moistens lungs, prevents dryness', category: 'Fruit', note: 'Cook to reduce coldness' },
          { name: 'Sweet Potato', property: 'Neutral', benefit: 'Strengthens spleen, moistens intestines', category: 'Vegetable', note: 'Natural sweetness beneficial' },
          { name: 'Pumpkin', property: 'Warm', benefit: 'Tonifies middle Jiao', category: 'Vegetable', note: 'Seasonal and nourishing' },
          { name: 'White Fungus', property: 'Neutral', benefit: 'Moistens lungs and skin', category: 'Mushroom', note: 'Good for autumn dryness' },
          { name: 'Almonds', property: 'Neutral', benefit: 'Moistens lungs, stops cough', category: 'Nut', note: 'Sweet almonds, not bitter' }
        ],
        minimize: [
          { name: 'Spicy Foods', property: 'Hot', reason: 'Too dispersing in dry season', examples: 'Chili, excessive ginger' },
          { name: 'Very Dry Foods', property: 'Varies', reason: 'Worsens autumn dryness', examples: 'Crackers, roasted nuts' }
        ],
        tea: 'Pear and honey tea'
      },
      winter: {
        emphasize: [
          { name: 'Lamb', property: 'Hot', benefit: 'Strongly warms Yang Qi', category: 'Protein', note: 'Best warming protein' },
          { name: 'Beef', property: 'Warm', benefit: 'Strengthens Qi and blood', category: 'Protein', note: 'Gentle warming' },
          { name: 'Chicken Broth', property: 'Warm', benefit: 'Deeply nourishing', category: 'Soup', note: 'Slow-cooked is best' },
          { name: 'Ginger', property: 'Hot', benefit: 'Warms middle Jiao', category: 'Spice', note: 'Fresh or dried' },
          { name: 'Cinnamon', property: 'Hot', benefit: 'Warms kidney Yang', category: 'Spice', note: 'Small amounts' },
          { name: 'Walnuts', property: 'Warm', benefit: 'Tonifies kidney Yang', category: 'Nut', note: 'Good winter snack' },
          { name: 'Chestnuts', property: 'Warm', benefit: 'Strengthens kidney and spleen', category: 'Nut', note: 'Roasted or cooked' }
        ],
        minimize: [
          { name: 'Raw Vegetables', property: 'Cold', reason: 'Too cooling in winter', examples: 'Salads, raw greens' },
          { name: 'Cold Salads', property: 'Cold', reason: 'Damages digestive fire', examples: 'Any uncooked cold dishes' }
        ],
        tea: 'Ginger and date tea'
      }
    }
  },

  yang_deficient: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Leeks', property: 'Warm', benefit: 'Tonifies kidney Yang', category: 'Vegetable', note: 'Warming spring vegetable' },
          { name: 'Chives', property: 'Warm', benefit: 'Warms kidney and stomach', category: 'Vegetable', note: 'Similar to leeks but milder' },
          { name: 'Ginger Tea', property: 'Hot', benefit: 'Warms whole body', category: 'Beverage', note: 'Fresh ginger slices in hot water' },
          { name: 'Warm Congee', property: 'Warm', benefit: 'Gentle warming, easy digestion', category: 'Grain', note: 'Never cold or room temp' },
          { name: 'Fennel', property: 'Warm', benefit: 'Warms kidney and stomach', category: 'Spice', note: 'Bulb or seeds' }
        ],
        minimize: [
          { name: 'Raw Sprouts', property: 'Cold', reason: 'Too cooling for Yang deficiency', examples: 'Bean sprouts, alfalfa' },
          { name: 'Cold Salads', property: 'Cold', reason: 'Damages Yang Qi', examples: 'Any cold raw dishes' }
        ],
        tea: 'Cinnamon and ginger tea'
      },
      summer: {
        emphasize: [
          { name: 'Ginger (moderate)', property: 'Hot', benefit: 'Maintains internal warmth', category: 'Spice', note: 'Less than other seasons' },
          { name: 'Cinnamon (small amounts)', property: 'Hot', benefit: 'Prevents over-cooling', category: 'Spice', note: 'Very small amounts in summer' },
          { name: 'Warm Soups', property: 'Warm', benefit: 'Maintains digestive warmth', category: 'Soup', note: 'Not scalding hot' },
          { name: 'Cooked Vegetables', property: 'Warm', benefit: 'Easier digestion than raw', category: 'Vegetable', note: 'Light cooking methods' }
        ],
        minimize: [
          { name: 'Ice Cream', property: 'Cold', reason: 'Severely damages Yang', examples: 'Worst for these tendencies' },
          { name: 'Iced Drinks', property: 'Cold', reason: 'Injures spleen and kidney Yang', examples: 'Room temperature minimum' },
          { name: 'Watermelon', property: 'Cold', reason: 'Too cooling for Yang deficient', examples: 'Very small amounts only' }
        ],
        tea: 'Warm ginger tea (even in summer)'
      },
      autumn: {
        emphasize: [
          { name: 'Lamb Stew', property: 'Hot', benefit: 'Prepares body for winter', category: 'Protein', note: 'Perfect autumn food' },
          { name: 'Pumpkin', property: 'Warm', benefit: 'Seasonal warming food', category: 'Vegetable', note: 'Naturally sweet and warming' },
          { name: 'Star Anise', property: 'Hot', benefit: 'Strongly warming spice', category: 'Spice', note: 'Use in cooking' },
          { name: 'Cardamom', property: 'Warm', benefit: 'Warms stomach, promotes digestion', category: 'Spice', note: 'Aromatic and warming' }
        ],
        minimize: [
          { name: 'Persimmons', property: 'Cold', reason: 'Too cooling for autumn', examples: 'Despite being seasonal' },
          { name: 'Pears (raw)', property: 'Cool', reason: 'Too cooling and moistening', examples: 'Cook if consuming' },
          { name: 'Crab', property: 'Cold', reason: 'Very cooling seafood', examples: 'Especially raw preparations' }
        ],
        tea: 'Cardamom and cinnamon tea'
      },
      winter: {
        emphasize: [
          { name: 'Lamb Hotpot', property: 'Hot', benefit: 'Maximum warming effect', category: 'Protein', note: 'Best winter meal' },
          { name: 'Venison', property: 'Hot', benefit: 'Strongly tonifies kidney Yang', category: 'Protein', note: 'If available' },
          { name: 'Bone Broth', property: 'Warm', benefit: 'Deep nourishment', category: 'Soup', note: 'Long-cooked for maximum nutrition' },
          { name: 'Cloves', property: 'Hot', benefit: 'Powerful warming spice', category: 'Spice', note: 'Small amounts' },
          { name: 'Black Pepper', property: 'Hot', benefit: 'Warms kidney and stomach', category: 'Spice', note: 'Freshly ground' }
        ],
        minimize: [
          { name: 'All Raw/Cold Foods', property: 'Cold', reason: 'Severely damages Yang in winter', examples: 'Avoid completely' }
        ],
        tea: 'Strong ginger with brown sugar'
      }
    }
  },

  yin_deficient: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Spinach', property: 'Cool', benefit: 'Nourishes blood and Yin', category: 'Vegetable', note: 'Rich in nutrients' },
          { name: 'Asparagus', property: 'Cool', benefit: 'Clears heat, moistens dryness', category: 'Vegetable', note: 'Seasonal spring vegetable' },
          { name: 'Pears', property: 'Cool', benefit: 'Moistens lungs and throat', category: 'Fruit', note: 'Can eat raw in spring' },
          { name: 'Tofu', property: 'Cool', benefit: 'Nourishes Yin, clears heat', category: 'Protein', note: 'Gentle protein source' },
          { name: 'Black Sesame', property: 'Neutral', benefit: 'Nourishes kidney Yin', category: 'Seed', note: 'Can make into paste' },
          { name: 'Duck Eggs', property: 'Cool', benefit: 'More Yin-nourishing than chicken eggs', category: 'Protein', note: 'If available' }
        ],
        minimize: [
          { name: 'Lamb', property: 'Hot', reason: 'Too heating for Yin deficiency', examples: 'Use fish instead' },
          { name: 'Chili', property: 'Hot', reason: 'Damages Yin with heat and dryness', examples: 'Very drying' },
          { name: 'Excessive Ginger', property: 'Hot', reason: 'Too drying and heating', examples: 'Small amounts only' }
        ],
        tea: 'Chrysanthemum and goji tea'
      },
      summer: {
        emphasize: [
          { name: 'Watermelon', property: 'Cold', benefit: 'Clears heat, generates fluids', category: 'Fruit', note: 'Perfect for Yin deficient in summer' },
          { name: 'Cucumber', property: 'Cool', benefit: 'Clears heat, moistens', category: 'Vegetable', note: 'High water content' },
          { name: 'Mung Beans', property: 'Cool', benefit: 'Clears heat, detoxifies', category: 'Legume', note: 'Make into soup' },
          { name: 'Lily Bulb', property: 'Cool', benefit: 'Nourishes lung Yin', category: 'Vegetable', note: 'Calming and moistening' },
          { name: 'White Fungus', property: 'Neutral', benefit: 'Moistens lungs and skin', category: 'Mushroom', note: 'Makes skin smooth' },
          { name: 'Coconut Water', property: 'Cool', benefit: 'Generates fluids, clears heat', category: 'Beverage', note: 'Natural electrolytes' }
        ],
        minimize: [
          { name: 'Grilled Meats', property: 'Hot', reason: 'Too heating and drying', examples: 'BBQ, charred foods' },
          { name: 'Spicy Food', property: 'Hot', reason: 'Increases internal heat', examples: 'Hot sauce, chilies' }
        ],
        tea: 'Mint and honeysuckle tea'
      },
      autumn: {
        emphasize: [
          { name: 'Pears', property: 'Cool', benefit: 'Moistens autumn dryness', category: 'Fruit', note: 'Essential for autumn' },
          { name: 'Duck', property: 'Cool', benefit: 'Nourishes Yin without being too cold', category: 'Protein', note: 'Better than chicken' },
          { name: 'Lotus Root', property: 'Cool', benefit: 'Clears heat, stops bleeding', category: 'Vegetable', note: 'Good for autumn dryness' }
        ],
        minimize: [
          { name: 'Dry Roasted Foods', property: 'Hot', reason: 'Increases dryness', examples: 'Roasted nuts, crackers' },
          { name: 'Alcohol', property: 'Hot', reason: 'Very drying and heating', examples: 'Especially hard liquor' }
        ],
        tea: 'Pear and lily bulb tea'
      },
      winter: {
        emphasize: [
          { name: 'Black Sesame', property: 'Neutral', benefit: 'Nourishes kidney Yin', category: 'Seed', note: 'Make into black sesame soup' },
          { name: 'Oysters', property: 'Cool', benefit: 'Nourishes Yin and essence', category: 'Seafood', note: 'Rich in minerals' },
          { name: 'Bone Marrow', property: 'Neutral', benefit: 'Nourishes essence and marrow', category: 'Protein', note: 'Deep nourishment' },
          { name: 'Eggs', property: 'Neutral', benefit: 'Nourishes Yin and blood', category: 'Protein', note: 'Gentle protein' },
          { name: 'Seaweed', property: 'Cool', benefit: 'Nourishes kidney Yin', category: 'Vegetable', note: 'Rich in minerals' },
          { name: 'Pork', property: 'Neutral', benefit: 'Less heating than lamb/beef', category: 'Protein', note: 'More moistening' }
        ],
        minimize: [
          { name: 'Heavy Spices', property: 'Hot', reason: 'Too drying in winter', examples: 'Cinnamon, cloves in excess' },
          { name: 'Excessive Meat', property: 'Varies', reason: 'Can create internal heat', examples: 'Large quantities of red meat' }
        ],
        tea: 'Goji and chrysanthemum tea'
      }
    }
  },

  phlegm_dampness: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Barley', property: 'Cool', benefit: 'Drains dampness, promotes urination', category: 'Grain', note: 'Pearl barley' },
          { name: "Job's Tears", property: 'Cool', benefit: 'Strengthens spleen, drains dampness', category: 'Grain', note: 'Chinese pearl barley' },
          { name: 'Celery', property: 'Cool', benefit: 'Clears heat, reduces phlegm', category: 'Vegetable', note: 'Natural diuretic' },
          { name: 'Radish', property: 'Cool', benefit: 'Resolves phlegm, promotes digestion', category: 'Vegetable', note: 'White or red' },
          { name: 'Mushrooms', property: 'Neutral', benefit: 'Strengthens spleen without creating dampness', category: 'Mushroom', note: 'Shiitake, button' },
          { name: 'Green Tea', property: 'Cool', benefit: 'Clears heat, transforms phlegm', category: 'Beverage', note: 'Not too strong' }
        ],
        minimize: [
          { name: 'Cheese', property: 'Neutral', reason: 'Creates phlegm and dampness', examples: 'Very phlegm-forming' },
          { name: 'Cream', property: 'Neutral', reason: 'Heavy and dampness-producing', examples: 'Difficult to digest' },
          { name: 'Fried Foods', property: 'Hot', reason: 'Creates internal dampness and heat', examples: 'Greasy, hard to digest' }
        ],
        tea: 'Barley tea'
      },
      summer: {
        emphasize: [
          { name: 'Winter Melon', property: 'Cool', benefit: 'Clears heat, drains dampness', category: 'Vegetable', note: 'Perfect summer food' },
          { name: 'Corn Silk Tea', property: 'Cool', benefit: 'Diuretic, drains dampness', category: 'Beverage', note: 'Make tea from corn silk' },
          { name: 'Bitter Melon', property: 'Cold', benefit: 'Clears heat, dries dampness', category: 'Vegetable', note: 'Acquired taste but effective' },
          { name: 'Seaweed', property: 'Cool', benefit: 'Transforms phlegm, softens hardness', category: 'Vegetable', note: 'Kelp, nori' }
        ],
        minimize: [
          { name: 'Ice Cream', property: 'Cold', reason: 'Creates dampness and phlegm', examples: 'Worst for these tendencies' },
          { name: 'Sugary Drinks', property: 'Neutral', reason: 'Creates dampness', examples: 'Soda, fruit juices' }
        ],
        tea: 'Lotus leaf tea'
      },
      autumn: {
        emphasize: [
          { name: 'White Radish', property: 'Cool', benefit: 'Resolves phlegm, promotes digestion', category: 'Vegetable', note: 'Seasonal root vegetable' },
          { name: 'Tangerine Peel', property: 'Warm', benefit: 'Regulates Qi, transforms phlegm', category: 'Spice', note: 'Dried citrus peel' },
          { name: 'Small Portions', property: 'N/A', benefit: 'Prevents overloading spleen', category: 'Habit', note: 'Eat less at each meal' }
        ],
        minimize: [
          { name: 'Nuts', property: 'Warm', reason: 'Too oily and rich', examples: 'Walnuts, almonds in excess' },
          { name: 'Heavy Oils', property: 'Neutral', reason: 'Creates more dampness', examples: 'Excessive cooking oil' },
          { name: 'Pork', property: 'Neutral', reason: 'Too rich and dampness-producing', examples: 'Choose lighter proteins' }
        ],
        tea: 'Chen pi (tangerine peel) tea'
      },
      winter: {
        emphasize: [
          { name: 'Ginger-Scallion Broth', property: 'Warm', benefit: 'Warms without being too rich', category: 'Soup', note: 'Light warming soup' },
          { name: 'Turnips', property: 'Cool', benefit: 'Promotes digestion, resolves phlegm', category: 'Vegetable', note: 'White turnips' },
          { name: 'Light Fish', property: 'Neutral', benefit: 'Protein without excessive richness', category: 'Protein', note: 'White fish, not salmon' }
        ],
        minimize: [
          { name: 'Fatty Meats', property: 'Warm', reason: 'Too rich, creates dampness', examples: 'Lamb, beef with visible fat' },
          { name: 'Pastries', property: 'Neutral', reason: 'Sweet and greasy', examples: 'Cakes, cookies, donuts' },
          { name: 'Dairy', property: 'Neutral', reason: 'Phlegm and dampness forming', examples: 'Milk, cheese, butter' }
        ],
        tea: 'Ginger and barley tea'
      }
    }
  },

  damp_heat: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Mung Beans', property: 'Cool', benefit: 'Clears heat, drains dampness', category: 'Legume', note: 'Classic damp-heat food' },
          { name: 'Bitter Melon', property: 'Cold', benefit: 'Clears heat, dries dampness', category: 'Vegetable', note: 'Bitter = heat clearing' },
          { name: 'Lotus Leaf', property: 'Cool', benefit: 'Clears heat, promotes weight loss', category: 'Herb', note: 'Make into tea' },
          { name: 'Chrysanthemum Tea', property: 'Cool', benefit: 'Clears liver heat, brightens eyes', category: 'Beverage', note: 'Light and cooling' }
        ],
        minimize: [
          { name: 'Alcohol', property: 'Hot', reason: 'Creates heat and dampness', examples: 'Especially beer' },
          { name: 'Fried Foods', property: 'Hot', reason: 'Creates damp-heat', examples: 'Deep fried anything' }
        ],
        tea: 'Chrysanthemum tea'
      },
      summer: {
        emphasize: [
          { name: 'Cucumber', property: 'Cool', benefit: 'Clears heat, reduces swelling', category: 'Vegetable', note: 'High water content' },
          { name: 'Celery', property: 'Cool', benefit: 'Clears heat, lowers blood pressure', category: 'Vegetable', note: 'Natural coolant' },
          { name: 'Winter Melon', property: 'Cool', benefit: 'Drains dampness, clears heat', category: 'Vegetable', note: 'Summer cooling food' }
        ],
        minimize: [
          { name: 'Shellfish', property: 'Varies', reason: 'Can worsen damp-heat conditions', examples: 'Shrimp, lobster, crab' },
          { name: 'Mango', property: 'Warm', reason: 'Creates dampness and heat', examples: 'Tropical fruits generally' },
          { name: 'Pineapple', property: 'Warm', reason: 'Too heating and sweet', examples: 'High sugar content' }
        ],
        tea: 'Honeysuckle tea'
      },
      autumn: {
        emphasize: [
          { name: "Job's Tears", property: 'Cool', benefit: 'Drains dampness without being too cold', category: 'Grain', note: 'Autumn transitional food' }
        ],
        minimize: [
          { name: 'Heavy Spices', property: 'Hot', reason: 'Increases internal heat', examples: 'Cayenne, excessive garlic' }
        ],
        tea: 'Barley and chrysanthemum tea'
      },
      winter: {
        emphasize: [
          { name: 'Light Soups', property: 'Neutral', benefit: 'Nourishing without creating heat', category: 'Soup', note: 'Clear broths' },
          { name: 'Tofu', property: 'Cool', benefit: 'Cooling protein', category: 'Protein', note: 'Gentle on system' }
        ],
        minimize: [
          { name: 'Lamb', property: 'Hot', reason: 'Too heating', examples: 'Choose lighter proteins' },
          { name: 'Spicy Hotpot', property: 'Hot', reason: 'Worsens damp-heat', examples: 'Avoid Sichuan style' }
        ],
        tea: 'Pu-erh tea'
      }
    }
  },

  blood_stasis: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Hawthorn', property: 'Warm', benefit: 'Moves blood, aids digestion', category: 'Fruit', note: 'Classic blood-moving food' },
          { name: 'Turmeric', property: 'Warm', benefit: 'Invigorates blood, reduces inflammation', category: 'Spice', note: 'Anti-inflammatory' }
        ],
        minimize: [
          { name: 'Excessive Cold Foods', property: 'Cold', reason: 'Slows circulation', examples: 'Ice, frozen foods' }
        ],
        tea: 'Hawthorn and rose tea'
      },
      summer: {
        emphasize: [
          { name: 'Eggplant', property: 'Cool', benefit: 'Moves blood, clears heat', category: 'Vegetable', note: 'Purple skin especially' },
          { name: 'Dark Leafy Greens', property: 'Cool', benefit: 'Nourishes blood, moves stagnation', category: 'Vegetable', note: 'Spinach, kale' }
        ],
        minimize: [
          { name: 'Overly Fatty Foods', property: 'Varies', reason: 'Slows circulation', examples: 'Heavy, greasy meals' }
        ],
        tea: 'Rose and safflower tea'
      },
      autumn: {
        emphasize: [
          { name: 'Vinegar', property: 'Warm', benefit: 'Moves blood, aids digestion', category: 'Condiment', note: 'Apple cider vinegar' },
          { name: 'Brown Sugar', property: 'Warm', benefit: 'Warms and moves blood', category: 'Sweetener', note: 'Better than white sugar' }
        ],
        minimize: [],
        tea: 'Ginger and hawthorn tea'
      },
      winter: {
        emphasize: [
          { name: 'Black Fungus', property: 'Neutral', benefit: 'Nourishes blood, prevents clotting', category: 'Mushroom', note: 'Wood ear mushroom' },
          { name: 'Onions', property: 'Warm', benefit: 'Moves Qi and blood', category: 'Vegetable', note: 'Red or yellow' },
          { name: 'Garlic', property: 'Hot', benefit: 'Moves blood, antimicrobial', category: 'Vegetable', note: 'Fresh or cooked' }
        ],
        minimize: [
          { name: 'All Cold Foods', property: 'Cold', reason: 'Constricts blood vessels', examples: 'Ice, cold drinks' }
        ],
        tea: 'Cinnamon and ginger tea'
      }
    }
  },

  qi_stagnation: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Citrus Peel', property: 'Warm', benefit: 'Regulates Qi, lifts mood', category: 'Spice', note: 'Orange, tangerine peel' },
          { name: 'Rose Tea', property: 'Warm', benefit: 'Soothes liver Qi, calms emotions', category: 'Beverage', note: 'Rose buds or petals' }
        ],
        minimize: [
          { name: 'Coffee', property: 'Neutral', reason: 'Can worsen anxiety and agitation', examples: 'Especially if prone to anxiety' }
        ],
        tea: 'Rose tea'
      },
      summer: {
        emphasize: [
          { name: 'Jasmine Tea', property: 'Cool', benefit: 'Regulates Qi, refreshing', category: 'Beverage', note: 'Light and fragrant' },
          { name: 'Buckwheat', property: 'Cool', benefit: 'Moves Qi, strengthens blood vessels', category: 'Grain', note: 'Good for circulation' }
        ],
        minimize: [
          { name: 'Excessive Alcohol', property: 'Hot', reason: 'Initially moves Qi but then stagnates', examples: 'Moderate amounts only' }
        ],
        tea: 'Jasmine tea'
      },
      autumn: {
        emphasize: [
          { name: 'Radish', property: 'Cool', benefit: 'Promotes Qi movement, aids digestion', category: 'Vegetable', note: 'White or red radish' }
        ],
        minimize: [
          { name: 'Overly Sweet Foods', property: 'Varies', reason: 'Creates dampness, slows Qi', examples: 'Candy, desserts' }
        ],
        tea: 'Osmanthus tea'
      },
      winter: {
        emphasize: [
          { name: 'Fennel', property: 'Warm', benefit: 'Warms kidney, regulates Qi', category: 'Spice', note: 'Seeds or bulb' },
          { name: 'Mint', property: 'Cool', benefit: 'Soothes liver, promotes Qi flow', category: 'Herb', note: 'Fresh or dried' }
        ],
        minimize: [],
        tea: 'Chen pi and rose tea'
      }
    }
  },

  inherited_special: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Chinese Yam', property: 'Neutral', benefit: 'Strengthens defensive Qi', category: 'Vegetable', note: 'Generally well-tolerated' }
        ],
        minimize: [
          { name: 'Common Allergens', property: 'Varies', reason: 'Individual trigger foods', examples: 'Nuts, shellfish, eggs, wheat' }
        ],
        tea: 'Astragalus tea (if tolerated)'
      },
      summer: {
        emphasize: [
          { name: 'Lotus Seeds', property: 'Neutral', benefit: 'Calms spirit, strengthens spleen', category: 'Seed', note: 'Gentle and nourishing' }
        ],
        minimize: [
          { name: 'Dairy Products', property: 'Neutral', reason: 'Common trigger for many', examples: 'Milk, cheese (if sensitive)' }
        ],
        tea: 'Chamomile tea (if tolerated)'
      },
      autumn: {
        emphasize: [
          { name: 'Glutinous Rice', property: 'Warm', benefit: 'Strengthens spleen, easy to digest', category: 'Grain', note: 'Sticky rice' }
        ],
        minimize: [
          { name: 'Processed Foods', property: 'Varies', reason: 'Additives can trigger reactions', examples: 'Preservatives, artificial colors' }
        ],
        tea: 'Ginger tea (warming, low allergen)'
      },
      winter: {
        emphasize: [
          { name: 'Astragalus Tea', property: 'Warm', benefit: 'Boosts immune function', category: 'Herb', note: 'If no herb allergies' }
        ],
        minimize: [],
        tea: 'Ginger and date tea'
      }
    }
  },

  balanced: {
    seasons: {
      spring: {
        emphasize: [
          { name: 'Fresh Spring Vegetables', property: 'Varies', benefit: 'Seasonal and liver-supporting', category: 'Vegetable', note: 'Variety is key' },
          { name: 'Sprouts', property: 'Cool', benefit: 'New growth energy', category: 'Vegetable', note: 'Bean sprouts, alfalfa' },
          { name: 'Light Proteins', property: 'Neutral', benefit: 'Balanced nourishment', category: 'Protein', note: 'Eggs, fish, tofu' }
        ],
        minimize: [
          { name: 'Excessive Heavy Foods', property: 'Varies', reason: 'Can create stagnation', examples: 'Too much meat, fried foods' }
        ],
        tea: 'Light green tea'
      },
      summer: {
        emphasize: [
          { name: 'Summer Fruits', property: 'Cool', benefit: 'Seasonal cooling', category: 'Fruit', note: 'Watermelon, berries' },
          { name: 'Light Salads', property: 'Cool', benefit: 'Refreshing', category: 'Vegetable', note: 'Fresh vegetables' },
          { name: 'Variety of Vegetables', property: 'Varies', benefit: 'Balanced nutrition', category: 'Vegetable', note: 'Seasonal choices' }
        ],
        minimize: [
          { name: 'Excessive Ice', property: 'Cold', reason: 'Can damage digestion', examples: 'Too many iced drinks' }
        ],
        tea: 'Chrysanthemum or mint tea'
      },
      autumn: {
        emphasize: [
          { name: 'Root Vegetables', property: 'Neutral', benefit: 'Grounding for season', category: 'Vegetable', note: 'Carrots, beets, potatoes' },
          { name: 'Pears and Apples', property: 'Cool', benefit: 'Moistening for dry air', category: 'Fruit', note: 'Seasonal fruits' },
          { name: 'Whole Grains', property: 'Neutral', benefit: 'Nourishing', category: 'Grain', note: 'Brown rice, oats' },
          { name: 'Warm Soups', property: 'Warm', benefit: 'Preparing for winter', category: 'Soup', note: 'Light broths' }
        ],
        minimize: [
          { name: 'Excessive Spicy Foods', property: 'Hot', reason: 'Can create dryness', examples: 'Heavy use of chilies' }
        ],
        tea: 'Honey and pear tea'
      },
      winter: {
        emphasize: [
          { name: 'Warming Stews', property: 'Warm', benefit: 'Nourishing warmth', category: 'Soup', note: 'Slow-cooked dishes' },
          { name: 'Root Vegetables', property: 'Neutral', benefit: 'Storage vegetables', category: 'Vegetable', note: 'Seasonal roots' },
          { name: 'Beans and Legumes', property: 'Neutral', benefit: 'Kidney nourishing', category: 'Legume', note: 'Black beans, kidney beans' },
          { name: 'Moderate Warming Spices', property: 'Warm', benefit: 'Keep warmth', category: 'Spice', note: 'Ginger, cinnamon' }
        ],
        minimize: [
          { name: 'Excessive Cold Raw Foods', property: 'Cold', reason: 'Can tax digestion in cold weather', examples: 'Raw salads, cold smoothies' }
        ],
        tea: 'Ginger or cinnamon tea'
      }
    }
  }
};

// Get current season based on date
export function getCurrentSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}

// Get food recommendations for a constitution and season
export function getSeasonalRecommendations(constitutionId, season = null) {
  const currentSeason = season || getCurrentSeason();
  const constitutionFoods = seasonalFoods[constitutionId];

  if (!constitutionFoods) {
    return {
      principle: constitutionPrinciples.balanced.principle,
      season: currentSeason,
      ...seasonalFoods.balanced.seasons[currentSeason]
    };
  }

  return {
    principle: constitutionPrinciples[constitutionId]?.principle || '',
    avoid: constitutionPrinciples[constitutionId]?.avoid || '',
    season: currentSeason,
    ...constitutionFoods.seasons[currentSeason]
  };
}

export function getAllSeasons() {
  return ['spring', 'summer', 'autumn', 'winter'];
}

export function getSeasonEmoji(season) {
  const emojis = {
    spring: '🌸',
    summer: '☀️',
    autumn: '🍂',
    winter: '❄️'
  };
  return emojis[season] || '🌿';
}

export function getSeasonName(season) {
  return season.charAt(0).toUpperCase() + season.slice(1);
}

export function getPropertyColor(property) {
  const colors = {
    'Hot': 'text-red-600 bg-red-50',
    'Warm': 'text-orange-600 bg-orange-50',
    'Neutral': 'text-gray-600 bg-gray-50',
    'Cool': 'text-blue-600 bg-blue-50',
    'Cold': 'text-indigo-600 bg-indigo-50'
  };
  return colors[property] || 'text-gray-600 bg-gray-50';
}
