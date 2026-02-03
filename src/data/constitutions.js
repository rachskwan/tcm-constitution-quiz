// TCM Body Constitution Data
// Based on the validated CCMQ (Constitution in Chinese Medicine Questionnaire)
// Updated with comprehensive TCM Constitution Database

// Constitutional icons as SVG paths
export const constitutionIcons = {
  qi_deficient: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z', // sun - energy
  yang_deficient: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z', // flame for warmth
  yin_deficient: 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z', // moon - cooling
  phlegm_dampness: 'M19.5 12c0 4.14-3.36 7.5-7.5 7.5S4.5 16.14 4.5 12 7.86 4.5 12 4.5c1.5 0 2.88.44 4.05 1.18m0 0l-2.55 2.55M16.05 5.68l2.55 2.55m0 0L21 5.82m-2.4 2.41l-2.55-2.55', // water droplet
  damp_heat: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636', // steam/heat
  blood_stasis: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12l2 2 4-4', // flowing circle
  qi_stagnation: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5', // blocked paths
  inherited_special: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', // shield
  balanced: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' // harmony
};

export const constitutions = {
  balanced: {
    id: 'balanced',
    name: 'Balanced',
    chinese: '平和质',
    pinyin: 'Píng Hé Zhì',
    emoji: '☯️',
    color: 'sage',
    gradient: 'from-sage to-sage-light',
    bgLight: 'bg-sage/5',
    headerBg: 'bg-sage',
    tagline: 'Harmony in motion',
    prevalence: 'Approximately 32-34% in general population',
    primaryOrgans: 'All organs in harmony',
    corePattern: 'Good energy, adaptable, resilient',
    description: "Ideal constitution with harmonious yin-yang balance, strong vitality, and good adaptability. You likely have abundant, stable energy, adapt well to changes, and recover quickly from illness. Focus on maintaining this balance with moderate, seasonal eating and lifestyle practices.",
    characteristics: [
      'Well-proportioned body, firm muscles',
      'Moist, lustrous skin with healthy complexion',
      'Abundant, stable energy throughout the day',
      'Sound sleep, wakes refreshed',
      'Normal appetite, regular bowel movements',
      'Tolerates both heat and cold well'
    ],
    tongueSign: 'Pale red, thin white coating',
    pulseSign: 'Moderate, harmonious pulse',
    strengths: [
      'Strong immunity and good recovery',
      'Stable emotions and optimistic outlook',
      'Adaptable to environment and seasonal changes',
      'Good stress resilience'
    ],
    watchOutFor: [
      'Taking good health for granted',
      'Excessive amounts of any extreme food',
      'Overly processed foods',
      'Ignoring early warning signs'
    ],
    diseaseRisk: 'Generally resistant to most diseases; rare illness occurrence',
    emotionalTendency: 'Emotionally stable; optimistic outlook; good mental resilience',
    beneficialFoods: 'Balanced variety of all food groups; seasonal eating; grains, vegetables, moderate protein',
    avoidFoods: 'Excessive amounts of any extreme food; overly processed foods',
    dietaryPrinciples: 'Eat according to seasons; moderate portions; regular meal times; balanced flavors',
    recommendedTeas: 'Chrysanthemum tea, goji berry tea, jujube tea',
    biomarkers: {
      primary: ['General Wellness Panel', 'Preventive Screening', 'CBC', 'Metabolic Panel'],
      immune: 'Normal IgA, IgG levels; balanced T-cell subsets; normal NK cell activity',
      metabolic: 'Normal lipid profile; normal glucose metabolism; healthy BMI',
      inflammatory: 'Low CRP; balanced cytokine profile; low TNF-α, IL-6',
      gutMicrobiome: 'Diverse microbiome; high Bifidobacterium and Lactobacillus; healthy Firmicutes/Bacteroidetes ratio',
      explanation: 'Even with balanced constitution, regular monitoring helps maintain your excellent baseline and catch any shifts early.'
    },
    bridgeMessage: "Your balanced constitution is wonderful! Regular wellness screening helps you maintain this harmony and catch any subtle shifts before they become patterns."
  },

  qi_deficient: {
    id: 'qi_deficient',
    name: 'Qi Deficiency',
    chinese: '气虚质',
    pinyin: 'Qì Xū Zhì',
    emoji: '🍃',
    color: 'earth',
    gradient: 'from-earth to-earth-light',
    bgLight: 'bg-earth/5',
    headerBg: 'bg-earth',
    tagline: 'Gentle energy that needs nurturing',
    prevalence: 'Approximately 12-13% in general population',
    primaryOrgans: 'Spleen, Lung',
    corePattern: 'Low energy, weak voice, catches illness easily',
    description: "Characterized by insufficient vital energy, weak immune function, and fatigue. Your body's vital energy (Qi) tends to run low, like a battery that drains faster than others. With the right nourishment and lifestyle, you can steadily build your energy reserves.",
    characteristics: [
      'Fatigue that comes easily, even without exertion',
      'Shortness of breath with light activity',
      'Spontaneous sweating without reason',
      'Tendency to catch colds or feel unwell',
      'Soft or weak voice',
      'Dizziness when standing up quickly',
      'Pale, enlarged tongue with tooth marks'
    ],
    tongueSign: 'Pale, enlarged with tooth marks; thin white coating',
    pulseSign: 'Weak, soft pulse',
    strengths: [
      'Often gentle, careful personality',
      'Good at conservation of energy',
      'Develops strong self-awareness',
      'Responds well to nourishing foods and rest'
    ],
    watchOutFor: [
      'Cold and raw foods (ice, cold drinks, excessive salads)',
      'Refrigerated foods and excessive fruits',
      'Overexertion and pushing through fatigue',
      'Skipping meals or eating irregularly'
    ],
    diseaseRisk: 'Respiratory infections; chronic fatigue; allergies; prolapse conditions; recurrent colds; immune deficiency',
    emotionalTendency: 'Tendency toward anxiety, timidity; easily worried; low confidence',
    beneficialFoods: 'Ginseng, astragalus, yam, sweet potato, chicken, beef, oats, millet, rice, dates, honey, mushrooms, squash, chestnuts, longan, lentils',
    avoidFoods: 'Cold and raw foods; ice; cold drinks; excessive salads; refrigerated foods; excessive fruits',
    dietaryPrinciples: 'Small, frequent meals; warm foods; easy to digest; chew thoroughly; avoid overeating',
    cookingMethods: 'Warm cooking methods: soups, stews, steaming, slow cooking; avoid raw',
    recommendedTeas: 'Astragalus tea, ginseng tea, jujube and ginger tea, licorice root tea',
    biomarkers: {
      primary: ['Ferritin', 'Vitamin B12', 'Hemoglobin', 'CBC Panel'],
      immune: 'Reduced IgA, IgG; decreased lymphocyte proliferation; reduced NK cell activity; weakened macrophage activity',
      metabolic: 'Reduced fatty acid metabolism; lower butanoate metabolism; altered lipid oxidation; may have lower γ-linolenic acid',
      inflammatory: 'Variable cytokine imbalance; may have altered NF-κB, JAK/STAT signaling',
      gutMicrobiome: 'Reduced Bifidobacterium, Bdellovibrio; lower probiotics; reduced short-chain fatty acids (SCFAs); decreased butyrate',
      genetic: 'Possible variations in immune-related genes; may show altered expression of CBL, DOK3, GRB2, LY6D, CSK',
      other: 'Low energy metabolism markers; reduced ATP production',
      explanation: 'Fatigue and weakness symptoms often correlate with anemia markers and B-vitamin deficiencies.'
    },
    bridgeMessage: "Your results suggest a Qi-Deficient pattern, often characterized by fatigue and low energy. A blood wellness panel can reveal if underlying factors like iron status (ferritin), B12, or thyroid markers may be contributing."
  },

  yang_deficient: {
    id: 'yang_deficient',
    name: 'Yang Deficiency',
    chinese: '阳虚质',
    pinyin: 'Yáng Xū Zhì',
    emoji: '❄️',
    color: 'slate-deep',
    gradient: 'from-slate-deep to-slate-deep/80',
    bgLight: 'bg-slate-deep/5',
    headerBg: 'bg-slate-deep',
    tagline: 'A body that craves warmth',
    prevalence: 'Approximately 9-10% in general population',
    primaryOrgans: 'Kidney, Spleen',
    corePattern: 'Cold intolerance, cold extremities, preference for warmth',
    description: "Characterized by cold intolerance, low metabolism, and warmth deficiency. Your body's warming energy (Yang) runs cool, like an internal furnace that needs extra fuel. Warming foods and practices can help stoke your inner fire.",
    characteristics: [
      'Cold hands and feet, even in warm weather',
      'Strong cold intolerance, needs more clothing than others',
      'Discomfort with cold weather, AC, or cold foods',
      'Loose stools or diarrhea after eating cold food',
      'Pain or discomfort in lower back or knees',
      'Frequent urination, especially at night',
      'Pale, puffy appearance; may have edema'
    ],
    tongueSign: 'Pale, enlarged, moist with white coating',
    pulseSign: 'Deep, slow, weak pulse',
    strengths: [
      'Often patient, calm demeanor',
      'Introspective nature',
      'Responds dramatically well to warming practices',
      'Can develop deep appreciation for seasonal living'
    ],
    watchOutFor: [
      'Cold foods and drinks; ice cream; raw vegetables',
      'Cold fruits (watermelon, banana)',
      'Dairy; seaweed; excessive salt; mung beans',
      'Air conditioning and cold environments'
    ],
    diseaseRisk: 'Hypothyroidism; osteoporosis; fluid retention; metabolic disorders; infertility; depression; joint pain',
    emotionalTendency: 'Depression tendency; apathy; low motivation; pessimism',
    beneficialFoods: 'Lamb, venison, shrimp, lobster, walnuts, cinnamon, ginger, black pepper, cloves, fennel, garlic, leeks, onions, chives, cardamom, star anise, chestnuts, cherries',
    avoidFoods: 'Cold foods and drinks; ice cream; raw vegetables; cold fruits; dairy; seaweed; excessive salt; mung beans; raw foods',
    dietaryPrinciples: 'Always eat warm; generous use of warming spices; avoid cold environments while eating; protect lower back',
    cookingMethods: 'Warming methods: roasting, grilling, baking, slow cooking with warming spices',
    recommendedTeas: 'Cinnamon tea, ginger tea, clove tea, fennel tea, Korean ginseng',
    biomarkers: {
      primary: ['TSH', 'Free T3', 'Free T4', 'Vitamin D (25-OH)', 'Morning Cortisol'],
      immune: 'Possible immune dysregulation; susceptibility to autoimmune patterns',
      metabolic: 'Elevated lactate; reduced VLDL/LDL; altered fatty acid metabolism; increased glucose; decreased butyrate, acetate; energy metabolism disorders',
      hormonal: 'Elevated TSH, reduced FT4; suppressed HPA axis (low ACTH, cortisol); elevated cAMP/cGMP ratio; downregulated thyroid hormone receptor β (TRβ)',
      inflammatory: 'Elevated IL-1β; immune dysfunction patterns',
      gutMicrobiome: 'Altered gut bacteria; reduced propionate; increased lactate in feces; intestinal dysbiosis',
      genetic: 'Downregulation of MTHFR gene; altered expression in thyroid hormone signaling pathway; FUT8, TAF1D, ZNF24, MAPK6, LEPROTL1',
      other: 'Low basal metabolic rate; cold extremity temperature',
      explanation: 'Research shows Yang deficiency correlates with thyroid function and vitamin D levels.'
    },
    bridgeMessage: "Your constitution suggests sensitivity to cold and low metabolic warmth. Research shows this pattern correlates with thyroid function and vitamin D levels."
  },

  yin_deficient: {
    id: 'yin_deficient',
    name: 'Yin Deficiency',
    chinese: '阴虚质',
    pinyin: 'Yīn Xū Zhì',
    emoji: '🔥',
    color: 'gold',
    gradient: 'from-gold to-gold-light',
    bgLight: 'bg-gold/5',
    headerBg: 'bg-gold',
    tagline: 'Running warm with inner heat',
    prevalence: 'Approximately 8-9% in general population',
    primaryOrgans: 'Kidney, Liver, Lung',
    corePattern: 'Heat sensations, dry skin/mouth, warm palms/soles',
    description: "Characterized by heat signs, dryness, and fluid deficiency. Your body's cooling, moistening energy (Yin) tends to run low. Nourishing, cooling foods can help restore your body's natural moisture and coolness.",
    characteristics: [
      'Hot palms, soles of feet, or chest (five-palm heat)',
      'Night sweats while sleeping',
      'Dry mouth or throat, especially at night',
      'Dry skin or lips lacking moisture',
      'Constipation with dry stools',
      'Flushed cheeks, especially in the afternoon',
      'Heat intolerance, prefers cool environments'
    ],
    tongueSign: 'Red, thin or peeled coating; little moisture',
    pulseSign: 'Thin, rapid pulse',
    strengths: [
      'Often creative, driven personality',
      'Quick thinking and energetic',
      'Good circulation and warmth',
      'Responds well to hydrating, nourishing practices'
    ],
    watchOutFor: [
      'Spicy foods; alcohol; coffee; fried foods',
      'Lamb and warming spices',
      'Excessive ginger, garlic, onions, hot peppers',
      'Late nights and overwork'
    ],
    diseaseRisk: 'Hyperthyroidism; diabetes; tuberculosis; chronic inflammation; autoimmune conditions; anxiety disorders',
    emotionalTendency: 'Irritability; impatience; easily agitated; emotional volatility',
    beneficialFoods: 'Pear, apple, watermelon, cucumber, tomato, spinach, duck, pork, tofu, mung beans, sesame seeds, honey, mulberries, eggs, milk, oysters, clams, seaweed',
    avoidFoods: 'Spicy foods; alcohol; coffee; fried foods; lamb; warming spices; excessive ginger; garlic; onions; hot peppers',
    dietaryPrinciples: 'Adequate fluids; avoid dry cooking methods; eat regular meals; avoid late-night eating; include moist foods',
    cookingMethods: 'Steaming, poaching, light cooking; cooling preparations; salads appropriate in summer',
    recommendedTeas: 'Chrysanthemum tea, lily bulb tea, dendrobium tea, American ginseng, pear juice',
    biomarkers: {
      primary: ['Cortisol patterns', 'hsCRP', 'Estrogen/Testosterone ratio', 'Thyroid panel'],
      immune: 'May show enhanced inflammatory response; potential autoimmune tendency',
      metabolic: 'Hyperactive metabolism; possible elevated blood sugar; altered glycerophospholipid metabolism',
      hormonal: 'HPA axis hyperactivity; elevated cortisol/testosterone ratio; may have elevated T3, T4; sympathetic hyperexcitability',
      inflammatory: 'Elevated TNF-α, IL-1β, IL-6; reduced IL-2; elevated CRP possible',
      gutMicrobiome: 'Altered microbiome composition',
      genetic: 'C7orf60, CFL2, CYTIP, GPR183, HIAT1, KLHL15, MAPK6, PTGS2 as potential biomarkers; altered methylation patterns',
      other: 'Signs of oxidative stress; increased internal heat markers',
      explanation: 'Heat and dryness symptoms are often associated with HPA axis patterns and hormonal balance.'
    },
    bridgeMessage: "Your Yin-Deficient pattern suggests your body runs warm and may lack adequate cooling fluids. Cortisol patterns, inflammatory markers, and hormone levels often reflect this constitution."
  },

  phlegm_dampness: {
    id: 'phlegm_dampness',
    name: 'Phlegm-Dampness',
    chinese: '痰湿质',
    pinyin: 'Tán Shī Zhì',
    emoji: '💧',
    color: 'sage',
    gradient: 'from-sage to-sage-light',
    bgLight: 'bg-sage/5',
    headerBg: 'bg-sage',
    tagline: 'A body that holds onto excess',
    prevalence: 'Approximately 8-9% in general population',
    primaryOrgans: 'Spleen, Lung',
    corePattern: 'Heaviness, oily skin, sluggish digestion, excess mucus',
    description: "Characterized by excessive body fluids, obesity tendency, and sluggish metabolism. Your body tends to accumulate dampness and phlegm. Light, easily digestible foods and regular movement can help your body process and release this excess.",
    characteristics: [
      'Soft, full, or flabby abdomen',
      'Oily skin, especially forehead',
      'Sticky or sweet taste in mouth',
      'Excessive phlegm, especially in throat',
      'Heavy feeling in body or limbs',
      'Excessive sweating when active',
      'Uncomfortable in humid or rainy weather'
    ],
    tongueSign: 'Enlarged with thick, greasy coating',
    pulseSign: 'Slippery, soft pulse',
    strengths: [
      'Often easygoing and patient',
      'Tolerant nature',
      'Good reserves and endurance when balanced',
      'Responds well to dietary changes'
    ],
    watchOutFor: [
      'Fatty and greasy foods; excessive dairy; sugar',
      'Sweet foods; alcohol; fried foods; peanuts',
      'Tropical fruits; excessive meat; banana',
      'Sedentary lifestyle'
    ],
    diseaseRisk: 'Metabolic syndrome; diabetes; cardiovascular disease; fatty liver; hypertension; obesity; sleep apnea',
    emotionalTendency: 'Lazy tendency; procrastination; mental fogginess; slow thinking',
    beneficialFoods: 'Barley, Job\'s tears (coix), corn, celery, lettuce, radish, mushrooms, seaweed, adzuki beans, white fish, chicken (skinless), green tea, lotus seed',
    avoidFoods: 'Fatty and greasy foods; excessive dairy; sugar; sweet foods; alcohol; fried foods; peanuts; tropical fruits; excessive meat; banana',
    dietaryPrinciples: 'Light meals; avoid excessive eating; reduce carbohydrates; minimize sweet flavor; exercise after meals',
    cookingMethods: 'Light cooking: steaming, broiling, grilling; minimal oil; avoid frying',
    recommendedTeas: 'Barley tea, Job\'s tears tea, poria tea, hawthorn tea, chen pi (citrus peel)',
    biomarkers: {
      primary: ['Lipid Panel (TC, LDL, TG, HDL)', 'Fasting Glucose', 'HbA1c', 'Uric Acid'],
      immune: 'Higher percentage of B cells and NKT cells; immune dysregulation associated with metabolic syndrome',
      metabolic: 'Elevated triglycerides; elevated LDL cholesterol; hyperglycemia; hyperlipidemia; elevated phosphatidylethanolamine; lipid metabolism dysregulation',
      hormonal: 'Possible insulin resistance markers; altered leptin/adiponectin',
      inflammatory: 'Pro-inflammatory state; elevated adipocyte-derived inflammation; systemic low-grade inflammation',
      gutMicrobiome: 'Altered Firmicutes/Bacteroidetes ratio; may show elevated arachidonic acid metabolism; LPS elevation possible; reduced beneficial bacteria',
      genetic: 'COPS8, GNPDA1, CD52, ARPC3 upregulated; GSPT2, CACNB2, FLJ20584, UXS1, IL21R, TNPO downregulated',
      other: 'Elevated visceral fat markers; metabolic syndrome panel abnormalities',
      explanation: 'Research shows Phlegm-Dampness constitution correlates with metabolic markers.'
    },
    bridgeMessage: "This constitution is associated with metabolic tendencies that often show up in lipid panels and blood sugar markers."
  },

  damp_heat: {
    id: 'damp_heat',
    name: 'Damp-Heat',
    chinese: '湿热质',
    pinyin: 'Shī Rè Zhì',
    emoji: '🌡️',
    color: 'earth',
    gradient: 'from-earth to-earth-light',
    bgLight: 'bg-earth/5',
    headerBg: 'bg-earth',
    tagline: 'Internal heat meeting stagnant moisture',
    prevalence: 'Approximately 6-7% in general population',
    primaryOrgans: 'Liver, Gallbladder, Spleen',
    corePattern: 'Greasy skin with breakouts, bitter taste, irritability',
    description: "Characterized by dampness combined with heat, oily skin, and inflammation tendency. Your body tends to generate both heat and dampness together. Cooling, draining foods can help clear this pattern.",
    characteristics: [
      'Oily skin or acne, especially face or back',
      'Bitter taste in mouth',
      'Bad breath or body odor',
      'Sticky, smelly, uncomfortable stools',
      'Yellow or dark urine',
      'Uncomfortable in hot and humid weather'
    ],
    tongueSign: 'Red with yellow, greasy coating',
    pulseSign: 'Slippery, rapid pulse',
    strengths: [
      'Often energetic when not symptomatic',
      'Strong digestive fire when balanced',
      'Responds quickly to dietary interventions'
    ],
    watchOutFor: [
      'Spicy foods; alcohol; fatty and greasy foods',
      'Lamb; beef; sugar; fried foods',
      'Hot peppers; excessive garlic; coffee; chocolate',
      'Hot and humid environments'
    ],
    diseaseRisk: 'Skin diseases; hepatitis; UTIs; gallbladder problems; inflammatory conditions; acne; eczema',
    emotionalTendency: 'Irritability; short temper; impatience; frustration',
    beneficialFoods: 'Mung beans, bitter melon, watermelon, cucumber, celery, cabbage, lettuce, dandelion greens, lotus root, winter melon, tofu, duck',
    avoidFoods: 'Spicy foods; alcohol; fatty and greasy foods; lamb; beef; sugar; fried foods; hot peppers; excessive garlic; coffee; chocolate',
    dietaryPrinciples: 'Light, cooling diet; avoid heavy meals especially at night; adequate water intake; regular bowel movements',
    cookingMethods: 'Light cooking: steaming, boiling; cooling preparations; raw salads in moderation',
    recommendedTeas: 'Chrysanthemum tea, dandelion tea, honeysuckle tea, green tea, lotus leaf tea',
    biomarkers: {
      primary: ['hsCRP', 'IL-6', 'Liver Enzymes (ALT, AST, GGT)', 'Uric Acid'],
      immune: 'Activated inflammatory immune response',
      metabolic: 'Elevated lipids; altered lipid metabolism; metabolic abnormalities similar to Phlegm-Dampness but with heat component',
      hormonal: 'Possible elevated stress hormones',
      inflammatory: 'Elevated inflammatory cytokines; higher CRP; signs of chronic inflammation',
      gutMicrobiome: 'Gut inflammation markers; may show pathogenic bacterial overgrowth',
      genetic: 'Similar patterns to Phlegm-Dampness with additional heat-related expression changes',
      other: 'Signs of oxidative stress combined with dampness markers',
      explanation: 'Damp-Heat patterns often show up in inflammatory markers and liver function tests.'
    },
    bridgeMessage: "Your Damp-Heat constitution often correlates with inflammatory markers and liver function. Our blood panel includes hsCRP and liver enzymes to help you understand and address this pattern."
  },

  blood_stasis: {
    id: 'blood_stasis',
    name: 'Blood Stasis',
    chinese: '血瘀质',
    pinyin: 'Xuè Yū Zhì',
    emoji: '🩸',
    color: 'slate-deep',
    gradient: 'from-slate-deep to-slate-deep/80',
    bgLight: 'bg-slate-deep/5',
    headerBg: 'bg-slate-deep',
    tagline: 'Circulation seeking flow',
    prevalence: 'Approximately 7-8% in general population',
    primaryOrgans: 'Liver, Heart',
    corePattern: 'Dark complexion, fixed pain, easy bruising',
    description: "Characterized by impaired blood circulation, dark complexion, and pain tendency. Your blood circulation tends to be sluggish. Foods and practices that invigorate blood flow can help restore healthy circulation.",
    characteristics: [
      'Dull, dark, or grayish facial complexion',
      'Dark spots, freckles, or pigmentation on skin',
      'Dark purple or dull colored lips',
      'Dark circles under eyes',
      'Easy bruising',
      'Fixed, stabbing pain in body',
      'Tendency to be forgetful'
    ],
    tongueSign: 'Purple/dark red, may have spots; sublingual veins engorged',
    pulseSign: 'Choppy or wiry pulse',
    strengths: [
      'Often resilient and determined personality',
      'Develops strong body awareness',
      'Responds well to movement and circulation practices',
      'Can achieve significant improvements with targeted approaches'
    ],
    watchOutFor: [
      'Excessive cold foods; congealing foods',
      'Excessive fatty foods and dairy',
      'Cold drinks; excessive raw foods',
      'Sedentary lifestyle and prolonged sitting'
    ],
    diseaseRisk: 'Cardiovascular disease; stroke; tumor risk; chronic pain; clotting disorders; angina; thrombosis',
    emotionalTendency: 'Tendency to hold grudges; difficulty letting go; forgetfulness',
    beneficialFoods: 'Turmeric, hawthorn, onions, garlic, vinegar, eggplant, kelp, crab, chives, peaches, chestnuts, brown sugar, dark leafy greens, beets, black fungus, salmon',
    avoidFoods: 'Excessive cold foods; congealing foods; excessive fatty foods; excessive dairy; cold drinks; excessive raw foods',
    dietaryPrinciples: 'Regular exercise essential; avoid prolonged sitting; warm foods preferred; moderate alcohol may help',
    cookingMethods: 'Warming methods preferred; stir-frying; adding circulation-promoting ingredients',
    recommendedTeas: 'Hawthorn tea, rose tea, safflower tea, turmeric tea, motherwort tea',
    biomarkers: {
      primary: ['Homocysteine', 'Fibrinogen', 'D-dimer', 'PT/INR', 'APTT'],
      immune: 'May show altered coagulation-related immune factors; complement activation (C3)',
      metabolic: 'May show altered hemorheological markers; lipid abnormalities',
      hormonal: 'Possible hormonal imbalances affecting circulation',
      inflammatory: 'Elevated D-dimer; elevated fibrinogen; possible elevated CRP; 5-HIAA and 4-acetamidobutanoate may be elevated',
      genetic: 'Coagulation factors F2, F8, F9 as potential biomarkers; altered miRNA profiles; FN1 expression changes',
      other: 'Abnormal coagulation (elevated PT, APTT); elevated fibrin; blood viscosity changes; urinary albumin may be elevated',
      explanation: 'Blood stasis patterns correlate with coagulation markers and cardiovascular indicators.'
    },
    bridgeMessage: "Your Blood Stasis pattern suggests circulation may benefit from support. Homocysteine, fibrinogen, and inflammatory markers often reflect this constitution."
  },

  qi_stagnation: {
    id: 'qi_stagnation',
    name: 'Qi Stagnation',
    chinese: '气郁质',
    pinyin: 'Qì Yù Zhì',
    emoji: '😔',
    color: 'sage',
    gradient: 'from-sage-dark to-sage',
    bgLight: 'bg-sage/5',
    headerBg: 'bg-sage-dark',
    tagline: 'Emotions seeking expression',
    prevalence: 'Approximately 8-9% in general population',
    primaryOrgans: 'Liver, Spleen',
    corePattern: 'Emotional sensitivity, sighing, chest/side tension',
    description: "Characterized by emotional constraint, mood fluctuations, and energy blockage. Your body's energy tends to get stuck or stagnant, often in response to emotions. Aromatic foods and practices that promote flow can help release this stagnation.",
    characteristics: [
      'Often feeling depressed, anxious, or emotionally low',
      'Sensation of something stuck in throat (plum-pit Qi)',
      'Frequent sighing',
      'Tightness or discomfort in chest or rib area',
      'Emotions easily affected by external events',
      'Difficulty sleeping due to worry or overthinking',
      'Feeling nervous or easily startled'
    ],
    tongueSign: 'Pink-red, thin coating; may be quivering',
    pulseSign: 'Wiry pulse',
    strengths: [
      'Often sensitive and creative',
      'Emotionally deep and empathetic',
      'Strong emotional intelligence when balanced',
      'Responds beautifully to stress-relief practices'
    ],
    watchOutFor: [
      'Coffee and alcohol',
      'Excessive sour foods; heavy greasy foods',
      'Eating when upset or stressed',
      'Suppressing emotions and isolation'
    ],
    diseaseRisk: 'Depression; anxiety disorders; insomnia; digestive disorders (IBS); breast lumps; thyroid nodules',
    emotionalTendency: 'Depression; anxiety; emotional sensitivity; easily hurt; tendency to worry and overthink',
    beneficialFoods: 'Citrus fruits, tangerine peel, radish, fennel, basil, mint, celery, bitter melon, plums, kumquat, jasmine, rose petals, buckwheat',
    avoidFoods: 'Coffee; alcohol; excessive sour foods; heavy greasy foods; avoid eating when upset',
    dietaryPrinciples: 'Regular meal times; pleasant eating environment; avoid eating when stressed; deep breathing before meals',
    cookingMethods: 'Aromatic cooking; light preparations; incorporate fragrant herbs',
    recommendedTeas: 'Rose tea, jasmine tea, orange peel tea, chamomile, lavender tea, mint tea, Buddha\'s hand',
    biomarkers: {
      primary: ['Cortisol (pattern)', 'DHEA-S', 'Liver Enzymes', 'Magnesium'],
      immune: 'Variable; may show stress-related immune changes',
      metabolic: 'Variable; stress-related metabolic changes',
      hormonal: 'Possible HPA axis dysregulation; elevated cortisol from chronic stress; thyroid irregularities possible',
      inflammatory: 'Variable; stress-related inflammation patterns',
      gutMicrobiome: 'Gut-brain axis disturbances; stress-related microbiome changes',
      genetic: 'Variable genetic susceptibility to mood disorders',
      other: 'Heart rate variability changes; elevated stress markers; possible liver enzyme fluctuations',
      explanation: 'Emotional and stress patterns correlate with HPA axis function and liver health. Magnesium status often plays a role.'
    },
    bridgeMessage: "Your Qi Stagnation pattern reflects how stress and emotions affect your body. Cortisol patterns, DHEA-S, and magnesium levels often provide insights."
  },

  inherited_special: {
    id: 'inherited_special',
    name: 'Inherited Special',
    chinese: '特禀质',
    pinyin: 'Tè Bǐng Zhì',
    emoji: '🌸',
    color: 'gold',
    gradient: 'from-gold to-gold-light',
    bgLight: 'bg-gold/5',
    headerBg: 'bg-gold',
    tagline: 'A sensitive system seeking balance',
    prevalence: 'Approximately 4-5% in general population',
    primaryOrgans: 'Lung, Kidney (congenital)',
    corePattern: 'Allergies, sensitivities, atopic conditions',
    description: "Characterized by allergic tendencies, inherited weaknesses, and hypersensitivity. Your constitution includes inherited sensitivities, making you more prone to allergies and reactions. Strengthening your defensive energy and identifying triggers can help you thrive.",
    characteristics: [
      'Allergies (hay fever, allergic rhinitis, asthma)',
      'Skin allergies or eczema, develops hives easily',
      'Allergic to certain medications',
      'Frequent sneezing, even without a cold',
      'Food allergies or intolerances',
      'Skin easily develops wheals, rashes, or purple spots',
      'Sensitive to seasonal changes, pollen, or environmental factors'
    ],
    tongueSign: 'Variable, often normal',
    pulseSign: 'Variable, may be thin',
    strengths: [
      'May have heightened awareness and sensitivity',
      'Develops strong self-knowledge about triggers',
      'Can thrive with personalized approaches'
    ],
    watchOutFor: [
      'Known allergens (individual specific)',
      'Common allergens: shellfish, peanuts, dairy, gluten, eggs',
      'Food additives and preservatives',
      'Environmental irritants and new products'
    ],
    diseaseRisk: 'Allergies; asthma; eczema; hay fever; drug reactions; food intolerances; autoimmune conditions',
    emotionalTendency: 'May have anxiety related to health; hypersensitivity',
    beneficialFoods: 'Hypoallergenic foods: rice, lamb, well-cooked vegetables, mild fruits, bone broth; identify individual safe foods',
    avoidFoods: 'Known allergens (individual); common allergens: shellfish, peanuts, dairy, gluten, eggs; food additives; preservatives',
    dietaryPrinciples: 'Food diary essential; elimination diets helpful; careful introduction of new foods; organic when possible',
    cookingMethods: 'Well-cooked foods; avoid raw; simple preparations',
    recommendedTeas: 'Gentle teas: mild chrysanthemum, honey water, mild herbal teas based on individual tolerance',
    biomarkers: {
      primary: ['IgE (total and specific)', 'Eosinophil Count', 'Histamine Levels', 'Food Sensitivity Panel'],
      immune: 'Elevated IgE; abnormal immune response to allergens; hypersensitive immune reactions',
      metabolic: 'Variable based on allergic state',
      hormonal: 'Variable; may show stress response patterns',
      inflammatory: 'Elevated histamine; eosinophilia; elevated inflammatory markers during allergic episodes',
      gutMicrobiome: 'May show altered microbiome associated with allergic conditions',
      genetic: 'Genetic predisposition to allergies; HLA variants; immune-related SNPs',
      other: 'Skin prick test positive; elevated specific IgE antibodies',
      explanation: 'Allergic patterns are directly measurable through immune markers. IgE and eosinophils reflect allergic tendency.'
    },
    bridgeMessage: "Your Inherited Special constitution means your immune system may be more reactive. Total IgE, eosinophil count, and specific sensitivity testing can help identify triggers."
  }
};

// Constitution Relationships - How constitutions interact and transform
export const constitutionRelationships = {
  qi_deficient: {
    commonCombinations: ['yang_deficient', 'phlegm_dampness', 'blood_stasis'],
    transformationRisk: 'May progress to Yang Deficiency if untreated; Qi deficiency leads to dampness accumulation',
    sharedMechanisms: 'Spleen weakness; Reduced metabolic function; Immune dysfunction',
    differentialPoints: 'Qi deficiency: primarily fatigue and weakness; Yang deficiency adds cold signs; Blood stasis adds circulation issues'
  },
  yang_deficient: {
    commonCombinations: ['qi_deficient', 'phlegm_dampness'],
    transformationRisk: 'Often develops from long-term Qi deficiency; Can lead to dampness accumulation',
    sharedMechanisms: 'HPA axis suppression; Metabolic slowdown; Thyroid involvement',
    differentialPoints: 'Yang deficiency: prominent cold signs, edema; Qi deficiency: mainly fatigue without strong cold signs'
  },
  yin_deficient: {
    commonCombinations: ['damp_heat', 'qi_stagnation'],
    transformationRisk: 'May develop heat signs; Long-term can damage Yang; Can combine with Qi stagnation',
    sharedMechanisms: 'HPA hyperactivity; Sympathetic dominance; Fluid depletion',
    differentialPoints: 'Yin deficiency: dryness, heat signs; Damp-heat: heat with dampness signs; Qi stagnation: emotional component'
  },
  phlegm_dampness: {
    commonCombinations: ['qi_deficient', 'damp_heat', 'blood_stasis'],
    transformationRisk: 'Can transform to damp-heat; Long-term leads to blood stasis; Associated with Qi deficiency',
    sharedMechanisms: 'Lipid metabolism dysfunction; Microbiome alterations; Spleen weakness',
    differentialPoints: 'Phlegm-dampness: heavy, sluggish, obese; Damp-heat: adds heat signs, skin issues; Blood stasis: adds pain, dark complexion'
  },
  damp_heat: {
    commonCombinations: ['phlegm_dampness', 'yin_deficient'],
    transformationRisk: 'May consume Yin over time; Can progress from phlegm-dampness',
    sharedMechanisms: 'Inflammatory state; Lipid abnormalities; Gut inflammation',
    differentialPoints: 'Damp-heat: inflammation, skin issues, irritability; Phlegm-dampness: more sluggish without heat; Yin deficiency: more dryness'
  },
  blood_stasis: {
    commonCombinations: ['qi_deficient', 'qi_stagnation', 'yang_deficient'],
    transformationRisk: 'Often secondary to other constitutions; Qi stagnation leads to blood stasis; Cold congeals blood',
    sharedMechanisms: 'Coagulation abnormalities; Circulation dysfunction; Pain syndromes',
    differentialPoints: 'Blood stasis: fixed pain, dark complexion, purple tongue; Qi stagnation: more emotional, less fixed physical signs'
  },
  qi_stagnation: {
    commonCombinations: ['blood_stasis', 'yin_deficient', 'phlegm_dampness'],
    transformationRisk: 'Long-term leads to blood stasis; Can generate heat (damaging Yin); Causes phlegm nodules',
    sharedMechanisms: 'Liver Qi dysfunction; Stress response; Emotional-physical link',
    differentialPoints: 'Qi stagnation: emotional, variable symptoms; Blood stasis: more physical, fixed; Phlegm: accumulates into masses'
  },
  inherited_special: {
    commonCombinations: ['any_based_on_individual'],
    transformationRisk: 'Allergic constitution may worsen with other imbalances',
    sharedMechanisms: 'Immune hypersensitivity; Genetic predisposition; Environmental reactivity',
    differentialPoints: 'Special: allergic/inherited component; Others: acquired patterns'
  }
};

// Evidence Levels for different types of TCM claims
// Based on systematic review of research literature
export const evidenceLevels = {
  ratings: {
    strong: {
      stars: 4,
      label: 'Strong Evidence',
      icon: '⭐⭐⭐⭐',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Multiple replicated studies; validated methodology; large samples; mechanistic understanding'
    },
    moderate: {
      stars: 3,
      label: 'Moderate Evidence',
      icon: '⭐⭐⭐',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      description: 'Some supporting studies; smaller samples or limited replication; correlational evidence'
    },
    traditional: {
      stars: 2,
      label: 'Traditional Theory',
      icon: '⭐⭐',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: 'Based on classical TCM theory; limited or no modern clinical validation; plausible but unproven'
    },
    weak: {
      stars: 1,
      label: 'Limited Evidence',
      icon: '⭐',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: 'Insufficient evidence; major research gap; requires further study'
    },
    gap: {
      stars: 0,
      label: 'Research Gap',
      icon: '❓',
      color: 'text-gray-500',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      description: 'No direct studies found; cannot make evidence-based recommendations'
    }
  },

  // Evidence levels by claim type
  claimTypes: {
    biomarkers: {
      phlegm_dampness: 'strong', // Li et al. 2022; Wang et al. 2022; Multiple replication studies
      qi_deficient: 'moderate',
      yang_deficient: 'moderate',
      yin_deficient: 'moderate',
      blood_stasis: 'moderate',
      damp_heat: 'moderate',
      qi_stagnation: 'moderate',
      inherited_special: 'moderate',
      balanced: 'moderate'
    },
    diseaseRisk: {
      phlegm_dampness: 'strong', // Multiple epidemiological studies; n=21,948+
      qi_deficient: 'moderate',
      yang_deficient: 'moderate',
      blood_stasis: 'moderate',
      qi_stagnation: 'moderate',
      damp_heat: 'moderate',
      yin_deficient: 'moderate',
      inherited_special: 'moderate',
      balanced: 'strong'
    },
    foodRecommendations: 'traditional', // Based on classical TCM texts; no RCTs testing thermal nature
    foodToBiomarker: 'gap', // No direct RCTs found - HIGH PRIORITY research gap
    seasonalEating: 'traditional', // Traditional theory only; no controlled studies
    assessment: 'strong' // CCMQ validated; Cronbach's α >0.6; multi-country validation
  },

  // Specific disclaimers for different sections
  disclaimers: {
    biomarkers: 'Biomarker associations are based on correlational research. Individual results may vary. Consult healthcare providers for medical decisions.',
    foodRecommendations: 'Food recommendations are based on traditional TCM theory and have not been validated in clinical trials. Individual responses may vary.',
    diseaseRisk: 'Disease risk associations are correlational, not causal. Many factors influence health outcomes. This is not a medical diagnosis.',
    general: 'TCM constitution assessment is for educational purposes. It does not replace professional medical advice, diagnosis, or treatment.',
    foodToBiomarker: 'Direct effects of constitution-specific diets on biomarkers have not been established in clinical research. This is an active area of study.'
  }
};

// Condensed CCMQ Quiz Questions - 30 questions for accurate constitution assessment
// Based on Wang Qi's Constitution in Chinese Medicine Questionnaire
export const quizQuestions = [
  // BALANCED CONSTITUTION - 3 questions (reverse-scored: higher = more balanced)
  { id: 1, constitution: 'balanced', text: 'Do you feel energetic and full of vitality?', category: 'Energy', reverseScored: true },
  { id: 2, constitution: 'balanced', text: 'Do you easily adapt to changes in the natural and social environment?', category: 'Adaptability', reverseScored: true },
  { id: 3, constitution: 'balanced', text: 'Do you rarely get sick or catch colds?', category: 'Immunity', reverseScored: true },

  // QI DEFICIENCY - 4 questions
  { id: 4, constitution: 'qi_deficient', text: 'Do you feel fatigued or lack energy easily?', category: 'Energy' },
  { id: 5, constitution: 'qi_deficient', text: 'Do you experience shortness of breath or feel breathless during light activity?', category: 'Energy' },
  { id: 6, constitution: 'qi_deficient', text: 'Do you sweat spontaneously without exertion or reason?', category: 'Body' },
  { id: 7, constitution: 'qi_deficient', text: 'Do you catch colds or flu easily?', category: 'Immunity' },

  // YANG DEFICIENCY - 3 questions
  { id: 8, constitution: 'yang_deficient', text: 'Do you feel cold easily, especially in your hands, feet, back or abdomen?', category: 'Temperature' },
  { id: 9, constitution: 'yang_deficient', text: 'Are you intolerant of cold weather, air conditioning, or cold foods?', category: 'Temperature' },
  { id: 10, constitution: 'yang_deficient', text: 'Do you experience loose stools or diarrhea after eating cold food?', category: 'Digestion' },

  // YIN DEFICIENCY - 4 questions
  { id: 11, constitution: 'yin_deficient', text: 'Do you feel hot in your palms, soles of feet, or chest (five-palm heat)?', category: 'Temperature' },
  { id: 12, constitution: 'yin_deficient', text: 'Do you experience night sweats while sleeping?', category: 'Temperature' },
  { id: 13, constitution: 'yin_deficient', text: 'Do you have dry mouth or throat, especially at night?', category: 'Hydration' },
  { id: 14, constitution: 'yin_deficient', text: 'Do you tend toward constipation with dry stools?', category: 'Digestion' },

  // PHLEGM-DAMPNESS - 3 questions
  { id: 15, constitution: 'phlegm_dampness', text: 'Is your abdomen soft, full, or flabby?', category: 'Body' },
  { id: 16, constitution: 'phlegm_dampness', text: 'Do you produce a lot of phlegm, especially in the throat?', category: 'Respiratory' },
  { id: 17, constitution: 'phlegm_dampness', text: 'Do you feel heavy in your body or limbs?', category: 'Body' },

  // DAMP-HEAT - 3 questions
  { id: 18, constitution: 'damp_heat', text: 'Do you have oily skin or acne, especially on your face or back?', category: 'Skin' },
  { id: 19, constitution: 'damp_heat', text: 'Do you experience a bitter taste in your mouth?', category: 'Digestion' },
  { id: 20, constitution: 'damp_heat', text: 'Is your stool sticky, smelly, or uncomfortable to pass?', category: 'Digestion' },

  // BLOOD STASIS - 3 questions
  { id: 21, constitution: 'blood_stasis', text: 'Is your facial complexion dull, dark, or grayish?', category: 'Skin' },
  { id: 22, constitution: 'blood_stasis', text: 'Are your lips dark purple or dull in color?', category: 'Skin' },
  { id: 23, constitution: 'blood_stasis', text: 'Do you bruise easily?', category: 'Circulation' },

  // QI STAGNATION - 4 questions
  { id: 24, constitution: 'qi_stagnation', text: 'Do you often feel depressed, anxious, or emotionally low?', category: 'Mood' },
  { id: 25, constitution: 'qi_stagnation', text: 'Do you sigh frequently?', category: 'Mood' },
  { id: 26, constitution: 'qi_stagnation', text: 'Do you feel tightness or discomfort in your chest or rib area?', category: 'Body' },
  { id: 27, constitution: 'qi_stagnation', text: 'Do you have difficulty sleeping due to worry or overthinking?', category: 'Sleep' },

  // INHERITED SPECIAL - 3 questions
  { id: 28, constitution: 'inherited_special', text: 'Do you have allergies (hay fever, allergic rhinitis, asthma)?', category: 'Immunity' },
  { id: 29, constitution: 'inherited_special', text: 'Do you have skin allergies or eczema, or develop hives easily?', category: 'Skin' },
  { id: 30, constitution: 'inherited_special', text: 'Do you have food allergies or intolerances?', category: 'Digestion' }
];

// Answer options for Likert scale
export const answerOptions = [
  { value: 1, label: 'Never' },
  { value: 2, label: 'Rarely' },
  { value: 3, label: 'Sometimes' },
  { value: 4, label: 'Often' },
  { value: 5, label: 'Always' }
];

// Calculate constitution scores from answers
export function calculateConstitution(answers) {
  const scores = {};
  let balancedScore = { total: 0, count: 0, average: 0 };

  // Initialize scores for each constitution (excluding balanced)
  Object.keys(constitutions).forEach(key => {
    if (key !== 'balanced') {
      scores[key] = { total: 0, count: 0, average: 0 };
    }
  });

  // Calculate scores from quiz answers
  quizQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer) {
      if (question.constitution === 'balanced') {
        // Balanced questions are reverse-scored for comparison
        // Higher answers mean more balanced
        balancedScore.total += answer;
        balancedScore.count += 1;
      } else if (scores[question.constitution]) {
        scores[question.constitution].total += answer;
        scores[question.constitution].count += 1;
      }
    }
  });

  // Calculate averages for imbalanced constitutions
  Object.keys(scores).forEach(key => {
    if (scores[key].count > 0) {
      scores[key].average = scores[key].total / scores[key].count;
    }
  });

  // Calculate balanced average
  if (balancedScore.count > 0) {
    balancedScore.average = balancedScore.total / balancedScore.count;
  }

  // Determine primary and secondary constitutions
  const sortedScores = Object.entries(scores)
    .map(([key, data]) => ({ id: key, ...data }))
    .sort((a, b) => b.average - a.average);

  // CCMQ Scoring Criteria:
  // Primary constitution: average >= 3.5 (answers mostly "Often" or "Always")
  // Strong tendency: average 3.0-3.49 (answers lean toward "Sometimes" to "Often")
  // Mild tendency: average 2.5-2.99 (some presence of pattern)
  // Balanced: No imbalanced score >= 3.0 AND balanced questions average >= 3.5

  const primary = sortedScores.filter(s => s.average >= 3.5);
  const strongTendencies = sortedScores.filter(s => s.average >= 3.0 && s.average < 3.5);
  const mildTendencies = sortedScores.filter(s => s.average >= 2.5 && s.average < 3.0);

  // Combine tendencies with strength indicator
  const tendencies = [
    ...strongTendencies.map(s => ({ ...s, strength: 'strong' })),
    ...mildTendencies.map(s => ({ ...s, strength: 'mild' }))
  ];

  // Check if person is primarily balanced
  const hasSignificantImbalance = sortedScores.some(s => s.average >= 3.0);
  const isBalanced = !hasSignificantImbalance && balancedScore.average >= 3.5;

  if (isBalanced) {
    return {
      primary: [constitutions.balanced],
      tendencies: tendencies.slice(0, 4).map(s => ({
        ...constitutions[s.id],
        strength: s.strength,
        score: s.average
      })),
      scores: sortedScores,
      balancedScore: balancedScore
    };
  }

  // If no primary but has tendencies, use the strongest tendency as primary
  if (primary.length === 0 && tendencies.length > 0) {
    return {
      primary: [constitutions[tendencies[0].id]],
      tendencies: tendencies.slice(1).map(s => ({
        ...constitutions[s.id],
        strength: s.strength,
        score: s.average
      })),
      scores: sortedScores,
      balancedScore: balancedScore
    };
  }

  // If no primary and no tendencies, classify as Balanced
  if (primary.length === 0 && tendencies.length === 0) {
    return {
      primary: [constitutions.balanced],
      tendencies: [],
      scores: sortedScores,
      balancedScore: balancedScore
    };
  }

  return {
    primary: primary.map(s => constitutions[s.id]),
    tendencies: tendencies.map(s => ({
      ...constitutions[s.id],
      strength: s.strength,
      score: s.average
    })),
    scores: sortedScores,
    balancedScore: balancedScore
  };
}

export function getConstitution(id) {
  return constitutions[id];
}

export function getAllConstitutions() {
  return Object.values(constitutions);
}
