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
    archetype: 'The Thermostat',
    archetypeTitle: 'The Regulator',
    archetypeInsight: 'Others feel steadier around you—even if you don\'t notice it.',
    quietClue: "My body feels boring—in a good way.",
    layeredExpression: {
      systemTends: 'steady energy, easy recovery, and emotional resilience',
      underPressure: 'temporary Qi Stagnation (tension, sighing) that resolves quickly',
      whenUnsupported: 'gradual Qi Deficiency if rest and nourishment are neglected long-term'
    },
    modes: {
      baseline: { name: 'Responsive', description: 'Adaptable, even-keeled, naturally regulates' },
      strain: { name: 'Mirroring', description: 'Temporarily takes on others\' patterns under prolonged stress' },
      recovery: { name: 'Anchored', description: 'Returns to baseline quickly, becomes the steady presence others orient around' }
    },
    behavioralTells: [
      'Rarely needs caffeine or avoids it intentionally',
      'Can skip a meal or sleep poorly and still function',
      'Doesn\'t ruminate much after conflict',
      'Others vent to them without planning to'
    ],
    phenotypicTendencies: [
      'Body temperature feels "neutral" to others',
      'Minimal seasonal symptom swings',
      'Skin heals cleanly, scars lightly',
      'Menstrual cycles (if applicable) are predictable'
    ],
    bodyReactions: [
      'Stress response ramps up only as much as needed',
      'Immune symptoms appear briefly, then disappear',
      'Appetite returns naturally after illness'
    ],
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
    bridgeMessage: "Your balanced tendencies are wonderful! Regular wellness screening helps you maintain this harmony and catch any subtle shifts before they become patterns.",
    seasonalAdvice: "You adapt well to all seasons. Simply follow nature: lighter foods and more activity in spring/summer, warming foods and more rest in autumn/winter.",
    lifestyleGuidance: "Maintain your balance with moderate, consistent exercise — walking, tai chi, swimming. Prioritize regular sleep and wake times. Practice gratitude or brief meditation. Your constitution is a gift; the goal is preservation."
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
    archetype: 'The Candle',
    archetypeTitle: 'The Giver',
    archetypeInsight: 'You show up quietly and consistently, but burnout comes easily.',
    quietClue: "I'm not sick—I'm just wiped.",
    layeredExpression: {
      systemTends: 'fatigue, weak immunity, and spontaneous sweating',
      underPressure: 'Yang Deficiency (cold extremities, low motivation) or Phlegm-Dampness (heaviness, brain fog)',
      whenUnsupported: 'Blood Stasis (poor circulation, lingering symptoms) as energy fails to move blood'
    },
    modes: {
      baseline: { name: 'Quiet Giver', description: 'Gentle, steady, knows their limits intuitively' },
      strain: { name: 'Flickering Flame', description: 'Brain fog, emotional flatness, cancels plans, gets sick easily' },
      recovery: { name: 'Steady Glow', description: 'Energy becomes predictable, confidence improves, can do more without overextending' }
    },
    behavioralTells: [
      'Plans rest around obligations, not vice versa',
      'Cancels plans at the last minute due to fatigue',
      'Gets overwhelmed by multi-step tasks',
      'Feels guilty resting but can\'t push through'
    ],
    phenotypicTendencies: [
      'Voice trails off at the end of sentences',
      'Dark under-eye shadows without insomnia',
      'Gets winded climbing stairs',
      'Hands may tremble when tired or hungry'
    ],
    bodyReactions: [
      'Stress → heaviness rather than anxiety',
      'Illness starts mild but lingers',
      'Exercise initially helps, then exhausts for days'
    ],
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
    bridgeMessage: "Your results suggest Qi-Deficient tendencies, often characterized by fatigue and low energy. A blood wellness panel can reveal if underlying factors like iron status (ferritin), B12, or thyroid markers may be contributing.",
    seasonalAdvice: "Spring and autumn transitions are your vulnerable periods. Bundle up, avoid wind exposure, and increase warming foods during these times. Summer heat can also deplete you — stay hydrated with warm (not iced) water.",
    lifestyleGuidance: "Gentle, consistent movement is key — tai chi, qigong, or slow walks. Avoid intense exercise that leaves you drained. Prioritize 7–9 hours of sleep. Avoid overwork and learn to say no. Breathing exercises (abdominal breathing for 5 min daily) directly build Qi."
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
    archetype: 'The Ember',
    archetypeTitle: 'The Quiet Endurer',
    archetypeInsight: 'You have depth and loyalty, but momentum takes effort.',
    quietClue: "I don't feel driven—I feel depleted of warmth.",
    layeredExpression: {
      systemTends: 'cold intolerance, low metabolism, and fluid retention',
      underPressure: 'Qi Deficiency (exhaustion, weak voice) or Phlegm-Dampness (puffiness, foggy thinking)',
      whenUnsupported: 'Blood Stasis (poor circulation, fixed cold pain) as cold congeals the blood over time'
    },
    modes: {
      baseline: { name: 'Slow Burn', description: 'Grounded, enduring, patient, moves at their own pace' },
      strain: { name: 'Dimming', description: 'Cold, disengaged, heavy, motivation drops' },
      recovery: { name: 'Warm Ember', description: 'Inner warmth returns, motivation stabilizes, feels more present' }
    },
    behavioralTells: [
      'Moves slowly in the morning, clearer at night',
      'Loves hot showers, blankets, soups',
      'Dreads winter more than others',
      'Feels emotionally muted under stress'
    ],
    phenotypicTendencies: [
      'Cold lower back, knees, or abdomen',
      'Swelling around ankles or eyes',
      'Pale tongue, slow digestion',
      'Weight gain without increased intake'
    ],
    bodyReactions: [
      'Cold weather worsens everything',
      'Stress → shutdown, not agitation',
      'Libido and motivation drop together'
    ],
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
    bridgeMessage: "Your tendencies suggest sensitivity to cold and low metabolic warmth. Research shows these patterns correlate with thyroid function and vitamin D levels.",
    seasonalAdvice: "Winter is your hardest season. Prepare early in autumn with warming foods and layered clothing. Avoid swimming in cold water. Summer is your healing season — use it to gently rebuild Yang reserves.",
    lifestyleGuidance: "Keep your lower back, abdomen, and feet warm — these are Yang reservoirs. Moxibustion is highly beneficial for you. Moderate sun exposure (morning sunlight) supports Yang. Exercise regularly but don't exhaust yourself — brisk walking, gentle jogging. Warm foot soaks before bed with ginger slices."
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
    archetype: 'The Lightning',
    archetypeTitle: 'The Spark',
    archetypeInsight: 'Your mind and body move fast, sometimes faster than recovery.',
    quietClue: "I'm exhausted—but I can't stop.",
    layeredExpression: {
      systemTends: 'heat signs, dryness, and restless energy that doesn\'t restore',
      underPressure: 'Qi Stagnation (irritability, chest tightness) or Damp-Heat (inflammation, skin flares)',
      whenUnsupported: 'progressive Yang Deficiency as internal heat burns through reserves'
    },
    modes: {
      baseline: { name: 'Bright Spark', description: 'Sharp, driven, creative, quick-thinking' },
      strain: { name: 'Overheating', description: 'Wired but tired, irritable, sleepless, can\'t slow down' },
      recovery: { name: 'Focused Fire', description: 'Sustained energy, calmer intensity, creativity flows without burnout' }
    },
    behavioralTells: [
      'Gets second wind late at night',
      'Overworks despite knowing better',
      'Feels tired but restless',
      'Finds silence uncomfortable'
    ],
    phenotypicTendencies: [
      'Warm palms and soles at night',
      'Red tongue tip, flushed cheeks',
      'Thirst in small sips',
      'Muscle tightness without bulk'
    ],
    bodyReactions: [
      'Stress → insomnia, irritability',
      'Illness brings heat, not chills',
      'Rest feels unsatisfying unless prolonged'
    ],
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
    bridgeMessage: "Your Yin-Deficient tendencies suggest your body may run warm and lack adequate cooling fluids. Cortisol patterns, inflammatory markers, and hormone levels often reflect these patterns.",
    seasonalAdvice: "Autumn dryness and summer heat are your biggest challenges. In autumn, increase moistening foods and protect your lungs. In summer, avoid prolonged sun exposure and stay well-hydrated with room-temperature water.",
    lifestyleGuidance: "Avoid staying up late — Yin regenerates between 11 PM and 3 AM. Practice calming exercises: yoga, swimming, walking by water. Avoid saunas, hot yoga, and intense cardio that causes excessive sweating. Keep your environment humidified. Meditation and slow breathing help settle internal heat."
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
    archetype: 'The Fog',
    archetypeTitle: 'The Absorber',
    archetypeInsight: 'You take in more than you realize—emotions, environments, stress.',
    quietClue: "I feel weighed down—not tired, not sad.",
    layeredExpression: {
      systemTends: 'heaviness, sluggish metabolism, and accumulation of excess',
      underPressure: 'Qi Deficiency (fatigue, weak digestion) or Damp-Heat (skin issues, irritability)',
      whenUnsupported: 'Blood Stasis (poor circulation, fixed masses) as dampness congeals over time'
    },
    modes: {
      baseline: { name: 'Soft Landing', description: 'Calm, comfort-seeking, reflective, absorbs stress well' },
      strain: { name: 'Heavy Fog', description: 'Sluggish, mentally clouded, avoidant, hard to initiate' },
      recovery: { name: 'Clearing Mist', description: 'Clearer thinking, lighter body, more mobile and motivated' }
    },
    behavioralTells: [
      'Procrastination tied to mental heaviness, not fear',
      'Feels best after movement but resists starting',
      'Comfort eating when stressed',
      'Avoids humid or rainy days if possible'
    ],
    phenotypicTendencies: [
      'Bloating after small meals',
      'Brain fog after carbs',
      'Mucus without infection',
      'Sweet or bland taste preference'
    ],
    bodyReactions: [
      'Stress → lethargy, zoning out',
      'Illness feels "thick" and slow',
      'Symptoms worsen when sedentary'
    ],
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
    bridgeMessage: "These tendencies are associated with metabolic patterns that often show up in lipid panels and blood sugar markers.",
    seasonalAdvice: "Late summer (humid season) and rainy periods are your worst times. Use dehumidifiers indoors, avoid sitting on damp ground, and increase aromatic, damp-resolving foods like ginger and citrus peel during these periods.",
    lifestyleGuidance: "Movement is your medicine — you benefit most from vigorous exercise that induces sweating: running, cycling, HIIT, dance. Avoid damp environments and air-dry thoroughly after showering. Dry-brushing the skin helps stimulate circulation. Don't nap excessively; stay active during the day."
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
    archetype: 'The Geyser',
    archetypeTitle: 'The Reactor',
    archetypeInsight: 'Intensity is your strength—and your warning signal.',
    quietClue: "It builds until I snap.",
    layeredExpression: {
      systemTends: 'inflammation, oily skin, and intense reactions that resolve fast',
      underPressure: 'Phlegm-Dampness (heaviness, sluggishness) or Yin Deficiency (dryness, heat intensifies)',
      whenUnsupported: 'Yin Deficiency as prolonged heat consumes your cooling fluids'
    },
    modes: {
      baseline: { name: 'Contained Fire', description: 'Passionate, intense, powerful energy held in reserve' },
      strain: { name: 'Erupting', description: 'Reactive, inflamed, explosive, skin flares, temper spikes' },
      recovery: { name: 'Directed Heat', description: 'Powerful but controlled, decisive, intensity becomes productive' }
    },
    behavioralTells: [
      'Holds it together publicly, vents privately',
      'Feels trapped easily',
      'Quick to anger when overheated or hungry',
      'Strong sense of injustice'
    ],
    phenotypicTendencies: [
      'Red, inflamed skin flares',
      'Strong-smelling sweat',
      'Bitter mouth taste',
      'Heat intolerance'
    ],
    bodyReactions: [
      'Stress → inflammation, eruptions',
      'Illness comes on fast and intense',
      'Symptoms improve quickly once released'
    ],
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
    bridgeMessage: "Damp-Heat tendencies often correlate with inflammatory markers and liver function. Our blood panel includes hsCRP and liver enzymes to help you understand and address these patterns.",
    seasonalAdvice: "Summer and humid climates are your biggest triggers. During hot, humid weather, increase cooling foods, stay hydrated, and shower promptly after sweating. Autumn's dryness actually helps you — embrace it.",
    lifestyleGuidance: "Regular vigorous exercise to sweat out damp-heat — swimming, running, and cycling are excellent. Keep your living space cool and well-ventilated. Wear breathable natural fabrics. Avoid staying up late (generates internal heat). Limit stress and anger — practice cooling breathwork."
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
    archetype: 'The Glacier',
    archetypeTitle: 'The Holder',
    archetypeInsight: 'Your body remembers what your mind has moved past.',
    quietClue: "This has been here a long time.",
    layeredExpression: {
      systemTends: 'poor circulation, fixed pain, and slow-moving symptoms',
      underPressure: 'Qi Stagnation (emotional tension, moving pain) or Qi Deficiency (exhaustion makes circulation worse)',
      whenUnsupported: 'Yang Deficiency as cold congeals blood further, deepening stagnation'
    },
    modes: {
      baseline: { name: 'Still Waters', description: 'Stoic, steady, enduring, holds things together' },
      strain: { name: 'Frozen', description: 'Pain-bound, emotionally sealed, stuck in old patterns' },
      recovery: { name: 'Thawing', description: 'Softer, more flexible, emotions flow, presence returns' }
    },
    behavioralTells: [
      'Remembers injuries and losses vividly',
      'High pain tolerance, low complaint rate',
      'Resists abrupt changes',
      'Feels emotionally "contained"'
    ],
    phenotypicTendencies: [
      'Old scars that ache',
      'Fixed pain points',
      'Darker pigmentation in lips or under eyes',
      'Menstrual clots or chronic cramps'
    ],
    bodyReactions: [
      'Stress → pain localization',
      'Healing is slow but steady',
      'Symptoms persist once established'
    ],
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
    bridgeMessage: "Blood Stasis tendencies suggest circulation may benefit from support. Homocysteine, fibrinogen, and inflammatory markers often reflect these patterns.",
    seasonalAdvice: "Cold winter months worsen blood stasis as vessels constrict. Keep warm, stay active indoors, and increase warming circulatory foods. Spring is your best season for rejuvenation — use it to establish movement routines.",
    lifestyleGuidance: "Movement is essential — walking, dancing, stretching, yoga. Anything that gets blood flowing regularly. Avoid sitting or standing in one position for long periods. Gua sha and cupping are particularly beneficial for you. Warm baths with Epsom salt or aromatic herbs. Emotional stagnation worsens blood stasis — express your feelings."
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
    archetype: 'The Knot',
    archetypeTitle: 'The Tense Thinker',
    archetypeInsight: 'Stress lives in the in-between spaces of your life.',
    quietClue: "I just need things to move.",
    layeredExpression: {
      systemTends: 'tension, mood swings, and symptoms that move around the body',
      underPressure: 'Blood Stasis (fixed pain, darker complexion) or Yin Deficiency (heat signs from prolonged frustration)',
      whenUnsupported: 'Phlegm nodules (lumps, masses) as stagnant Qi generates phlegm over time'
    },
    modes: {
      baseline: { name: 'Coiled Spring', description: 'Thoughtful, alert, restrained, holds tension productively' },
      strain: { name: 'Wound Tight', description: 'Tense, ruminative, irritable, chest tightness, sighing' },
      recovery: { name: 'Unwinding', description: 'Fluid, expressive, relieved, movement and emotion flow freely' }
    },
    behavioralTells: [
      'Sighs unconsciously',
      'Jaw clenching, shoulder tension',
      'Mood improves immediately with movement',
      'Feels stuck rather than weak'
    ],
    phenotypicTendencies: [
      'IBS-like digestion',
      'PMS or headaches before stressors',
      'Neck and upper back tension',
      'Variable appetite'
    ],
    bodyReactions: [
      'Stress → tightness, bloating',
      'Relief after crying, stretching, walking',
      'Symptoms migrate rather than disappear'
    ],
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
    bridgeMessage: "Qi Stagnation tendencies reflect how stress and emotions may affect your body. Cortisol patterns, DHEA-S, and magnesium levels often provide insights.",
    seasonalAdvice: "Spring is both your best and most volatile season — Liver Qi naturally rises, which can either free stagnation or cause emotional turbulence. Channel spring energy into new projects and outdoor activity. Autumn's inward energy can make stagnation worse — stay social and active.",
    lifestyleGuidance: "Emotional expression is your medicine. Journal, talk to friends, seek therapy if needed. Vigorous exercise that involves the whole body — running, martial arts, dance, boxing — physically moves stuck Qi. Sing, chant, or practice breathwork to open the throat and chest. Spend time in nature. Create routines but leave room for spontaneity."
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
    archetype: 'The Antenna',
    archetypeTitle: 'The Sensor',
    archetypeInsight: 'You notice subtle shifts long before others do.',
    quietClue: "My body reacts before I decide.",
    layeredExpression: {
      systemTends: 'hypersensitivity, allergic responses, and environmental reactivity',
      underPressure: 'any pattern can amplify—your sensitivity makes you a mirror for imbalance',
      whenUnsupported: 'Qi Deficiency (weakened protective energy) or Yin Deficiency (dryness worsens skin/respiratory issues)'
    },
    modes: {
      baseline: { name: 'Tuned In', description: 'Perceptive, attuned, careful, reads environments accurately' },
      strain: { name: 'Overloaded', description: 'Overstimulated, reactive, allergies flare, needs to withdraw' },
      recovery: { name: 'Clear Signal', description: 'Sensitivity becomes insight, selective about what to let in, boundaries strengthen' }
    },
    behavioralTells: [
      'Notices lighting, sound, smells immediately',
      'Avoids crowded environments',
      'Reads ingredient labels carefully',
      'Feels "off" before others notice issues'
    ],
    phenotypicTendencies: [
      'Eczema, allergies, asthma',
      'Food sensitivities',
      'Thin margin between fine and overwhelmed',
      'Highly variable energy'
    ],
    bodyReactions: [
      'Stress → hypersensitivity',
      'Immune responses are fast and dramatic',
      'Symptoms appear early, resolve slowly'
    ],
    prevalence: 'Approximately 4-5% in general population',
    primaryOrgans: 'Lung, Kidney (congenital)',
    corePattern: 'Allergies, sensitivities, atopic conditions',
    description: "Characterized by allergic tendencies, inherited weaknesses, and hypersensitivity. These tendencies include inherited sensitivities that may make you more prone to allergies and reactions. Strengthening your defensive energy and identifying triggers can help you thrive.",
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
    bridgeMessage: "Inherited Special tendencies suggest your immune system may be more reactive. Total IgE, eosinophil count, and specific sensitivity testing can help identify triggers.",
    seasonalAdvice: "Spring (pollen) and autumn (dust, mold, dryness) are typically your hardest seasons. Pre-treat: start immune-supporting herbs and acupuncture 2–4 weeks before your known difficult season begins.",
    lifestyleGuidance: "Know your triggers and plan around them. Strengthen your Wei Qi (defensive energy) through regular moderate exercise and adequate sleep. Nasal rinsing with saline during allergy season. Acupuncture can be very effective for modulating immune hypersensitivity. Build resilience gradually rather than avoiding everything — work with a practitioner."
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

// 18-Question TCM Constitution Assessment
// Based on Wang Qi's Nine Constitution Framework with specific option scoring
export const quizQuestions = [
  {
    id: 1,
    category: "Energy",
    text: "How would you describe your energy levels on most days?",
    icon: "⚡",
    options: [
      { text: "Steady and reliable throughout the day", scores: { balanced: 3 } },
      { text: "I tire easily and need frequent rest", scores: { qi_deficient: 3 } },
      { text: "Low energy with a persistent feeling of heaviness", scores: { phlegm_dampness: 3 } },
      { text: "Wired but tired — restless energy I can't channel", scores: { yin_deficient: 2, qi_stagnation: 1 } },
    ],
  },
  {
    id: 2,
    category: "Temperature",
    text: "How do you relate to temperature?",
    icon: "🌡️",
    options: [
      { text: "I'm comfortable in most environments", scores: { balanced: 3 } },
      { text: "I feel cold easily, especially hands and feet", scores: { yang_deficient: 3 } },
      { text: "I often feel warm, especially at night", scores: { yin_deficient: 3 } },
      { text: "I feel hot and heavy, especially in humid weather", scores: { damp_heat: 3 } },
    ],
  },
  {
    id: 3,
    category: "Digestion",
    text: "What best describes your digestion?",
    icon: "🍽️",
    options: [
      { text: "Regular and comfortable — rarely an issue", scores: { balanced: 3 } },
      { text: "Bloating and loose stools, especially after eating", scores: { qi_deficient: 2, phlegm_dampness: 1 } },
      { text: "Irregular — alternates with my mood or stress levels", scores: { qi_stagnation: 3 } },
      { text: "Acid reflux, burning sensation, or urgent stools", scores: { damp_heat: 3 } },
    ],
  },
  {
    id: 4,
    category: "Sleep",
    text: "How is your sleep quality?",
    icon: "🌙",
    options: [
      { text: "I fall asleep easily and wake refreshed", scores: { balanced: 3 } },
      { text: "I sleep a lot but still feel tired", scores: { qi_deficient: 2, phlegm_dampness: 1 } },
      { text: "I have trouble falling or staying asleep, vivid dreams", scores: { yin_deficient: 3 } },
      { text: "My mind races at night; I can't switch off", scores: { qi_stagnation: 3 } },
    ],
  },
  {
    id: 5,
    category: "Emotions",
    text: "What emotional pattern do you most identify with?",
    icon: "🫀",
    options: [
      { text: "Generally even-keeled and optimistic", scores: { balanced: 3 } },
      { text: "I worry a lot and overthink things", scores: { qi_deficient: 1, qi_stagnation: 2 } },
      { text: "I get frustrated or irritable easily", scores: { qi_stagnation: 2, damp_heat: 1 } },
      { text: "I feel low, melancholic, or emotionally flat", scores: { qi_stagnation: 2, blood_stasis: 1 } },
    ],
  },
  {
    id: 6,
    category: "Skin",
    text: "How would you describe your skin?",
    icon: "✨",
    options: [
      { text: "Smooth, well-moisturized, even-toned", scores: { balanced: 3 } },
      { text: "Dry, flaky, or dull", scores: { yin_deficient: 2, blood_stasis: 1 } },
      { text: "Oily, prone to acne or breakouts", scores: { damp_heat: 2, phlegm_dampness: 1 } },
      { text: "Easily irritated, rashes, or allergic reactions", scores: { inherited_special: 3 } },
    ],
  },
  {
    id: 7,
    category: "Body Shape",
    text: "Which best describes your body tendency?",
    icon: "🧍",
    options: [
      { text: "Proportionate, maintain weight easily", scores: { balanced: 3 } },
      { text: "Thin, struggle to gain weight or muscle", scores: { yin_deficient: 2, qi_deficient: 1 } },
      { text: "Gain weight easily, especially around the middle", scores: { phlegm_dampness: 3 } },
      { text: "Sturdy build but feel stiff or tight often", scores: { blood_stasis: 2, qi_stagnation: 1 } },
    ],
  },
  {
    id: 8,
    category: "Immunity",
    text: "How often do you get sick?",
    icon: "🛡️",
    options: [
      { text: "Rarely — maybe once a year", scores: { balanced: 3 } },
      { text: "Frequently — I catch every cold going around", scores: { qi_deficient: 3 } },
      { text: "Allergies or sensitivities more than infections", scores: { inherited_special: 3 } },
      { text: "Rarely sick but when I am, it lingers for weeks", scores: { yang_deficient: 2, blood_stasis: 1 } },
    ],
  },
  {
    id: 9,
    category: "Thirst",
    text: "How do you experience thirst?",
    icon: "🥤",
    options: [
      { text: "Normal — I drink when thirsty and feel satisfied", scores: { balanced: 3 } },
      { text: "Rarely thirsty, prefer warm or hot drinks", scores: { yang_deficient: 3 } },
      { text: "Often thirsty, prefer cold drinks", scores: { yin_deficient: 2, damp_heat: 1 } },
      { text: "Thirsty but drinking doesn't seem to help, dry mouth", scores: { blood_stasis: 2, yin_deficient: 1 } },
    ],
  },
  {
    id: 10,
    category: "Complexion",
    text: "What does your face tend to look like?",
    icon: "🪞",
    options: [
      { text: "Rosy, healthy glow", scores: { balanced: 3 } },
      { text: "Pale or sallow", scores: { qi_deficient: 2, yang_deficient: 1 } },
      { text: "Flushed cheeks, especially in the afternoon", scores: { yin_deficient: 3 } },
      { text: "Dark spots, dark circles, or dull/dusky tone", scores: { blood_stasis: 3 } },
    ],
  },
  {
    id: 11,
    category: "Sweat",
    text: "How do you sweat?",
    icon: "💦",
    options: [
      { text: "Normally — with exercise or heat", scores: { balanced: 3 } },
      { text: "I sweat easily, even without exertion", scores: { qi_deficient: 3 } },
      { text: "Night sweats, or sweating from palms/soles", scores: { yin_deficient: 3 } },
      { text: "Sticky, heavy sweat with a strong smell", scores: { damp_heat: 2, phlegm_dampness: 1 } },
    ],
  },
  {
    id: 12,
    category: "Pain",
    text: "Do you experience recurring pain or discomfort?",
    icon: "🩹",
    options: [
      { text: "Rarely — I'm generally pain-free", scores: { balanced: 3 } },
      { text: "Cold-related pain — lower back, knees, or abdomen in winter", scores: { yang_deficient: 3 } },
      { text: "Fixed, sharp pain that doesn't move (e.g., menstrual cramps)", scores: { blood_stasis: 3 } },
      { text: "Migrating tightness or distension — ribs, chest, or throat", scores: { qi_stagnation: 3 } },
    ],
  },
  {
    id: 13,
    category: "Breath & Voice",
    text: "How about your breath and voice?",
    icon: "🗣️",
    options: [
      { text: "Clear voice, fresh breath, no issues", scores: { balanced: 3 } },
      { text: "Soft or weak voice, shortness of breath easily", scores: { qi_deficient: 3 } },
      { text: "Dry throat, sometimes hoarse", scores: { yin_deficient: 3 } },
      { text: "Bad breath or a bitter/metallic taste", scores: { damp_heat: 3 } },
    ],
  },
  {
    id: 14,
    category: "Stress Response",
    text: "When you're under stress, what happens in your body?",
    icon: "😤",
    options: [
      { text: "I manage it well — some tension but it passes", scores: { balanced: 3 } },
      { text: "My stomach knots up, I lose appetite or get nauseous", scores: { qi_stagnation: 3 } },
      { text: "I break out in rashes, hives, or my allergies flare", scores: { inherited_special: 2, damp_heat: 1 } },
      { text: "I feel exhausted and want to collapse", scores: { qi_deficient: 2, yang_deficient: 1 } },
    ],
  },
  {
    id: 15,
    category: "Morning State",
    text: "How do you typically feel when you wake up?",
    icon: "🌅",
    options: [
      { text: "Refreshed and ready to go", scores: { balanced: 3 } },
      { text: "Groggy, heavy, takes a long time to get moving", scores: { phlegm_dampness: 3 } },
      { text: "Dry mouth and throat, sometimes with night sweat residue", scores: { yin_deficient: 3 } },
      { text: "Cold, stiff, and needing warmth to loosen up", scores: { yang_deficient: 2, blood_stasis: 1 } },
    ],
  },
  {
    id: 16,
    category: "Tongue",
    text: "Look at your tongue in a mirror right now. What do you see?",
    icon: "👅",
    options: [
      { text: "Pink with a thin white coating", scores: { balanced: 3 } },
      { text: "Pale and puffy with scalloped edges (teeth marks)", scores: { qi_deficient: 2, yang_deficient: 1 } },
      { text: "Red with little or no coating, possibly cracked", scores: { yin_deficient: 3 } },
      { text: "Thick, yellow or greasy coating", scores: { damp_heat: 2, phlegm_dampness: 1 } },
    ],
  },
  {
    id: 17,
    category: "Seasonal Sensitivity",
    text: "Which season do you dread the most?",
    icon: "🍂",
    options: [
      { text: "No strong preference — I adapt to each", scores: { balanced: 3 } },
      { text: "Winter — the cold makes everything worse", scores: { yang_deficient: 3 } },
      { text: "Summer — the heat and humidity drain me", scores: { yin_deficient: 1, damp_heat: 2 } },
      { text: "Spring — allergies and mood swings hit hard", scores: { inherited_special: 1, qi_stagnation: 2 } },
    ],
  },
  {
    id: 18,
    category: "Circulation",
    text: "How is your circulation?",
    icon: "❤️‍🔥",
    options: [
      { text: "Good — warm extremities, healthy color", scores: { balanced: 3 } },
      { text: "Poor — cold fingers/toes even in warm rooms", scores: { yang_deficient: 2, blood_stasis: 1 } },
      { text: "I bruise very easily or have visible veins/spider veins", scores: { blood_stasis: 3 } },
      { text: "Numbness or tingling in extremities", scores: { blood_stasis: 2, qi_deficient: 1 } },
    ],
  },
  {
    id: 19,
    category: "Appetite",
    text: "How would you describe your appetite?",
    icon: "🍜",
    options: [
      { text: "Consistent and satisfied after meals", scores: { balanced: 3 } },
      { text: "Poor appetite, food doesn't appeal to me", scores: { qi_deficient: 2, phlegm_dampness: 1 } },
      { text: "Strong appetite but I feel heavy or sluggish after eating", scores: { phlegm_dampness: 2, damp_heat: 1 } },
      { text: "Hungry often but eating doesn't satisfy me for long", scores: { yin_deficient: 2, damp_heat: 1 } },
    ],
  },
  {
    id: 20,
    category: "Mental Clarity",
    text: "How is your mental clarity and focus?",
    icon: "🧠",
    options: [
      { text: "Clear and sharp — I can concentrate well", scores: { balanced: 3 } },
      { text: "Foggy or muddled, especially after meals", scores: { phlegm_dampness: 3 } },
      { text: "Racing thoughts, hard to focus on one thing", scores: { qi_stagnation: 2, yin_deficient: 1 } },
      { text: "Forgetful and easily mentally fatigued", scores: { qi_deficient: 2, blood_stasis: 1 } },
    ],
  },
  {
    id: 21,
    category: "Sensitivities",
    text: "How sensitive are you to medications, foods, or environments?",
    icon: "⚠️",
    options: [
      { text: "I tolerate most things without issue", scores: { balanced: 3 } },
      { text: "I react strongly to medications — need lower doses", scores: { inherited_special: 3 } },
      { text: "Certain foods cause immediate digestive upset", scores: { inherited_special: 2, qi_deficient: 1 } },
      { text: "Sensitive to smells, chemicals, or environmental changes", scores: { inherited_special: 2, qi_stagnation: 1 } },
    ],
  },
  {
    id: 22,
    category: "Urination",
    text: "What best describes your urination patterns?",
    icon: "💧",
    options: [
      { text: "Normal frequency and color", scores: { balanced: 3 } },
      { text: "Frequent, clear, or copious urination", scores: { yang_deficient: 3 } },
      { text: "Dark, scanty, or burning sensation", scores: { damp_heat: 2, yin_deficient: 1 } },
      { text: "Difficulty starting or dribbling", scores: { qi_deficient: 2, blood_stasis: 1 } },
    ],
  },
  {
    id: 23,
    category: "Recovery",
    text: "How do you recover from illness or exertion?",
    icon: "🔄",
    options: [
      { text: "Quickly — I bounce back within a day or two", scores: { balanced: 3 } },
      { text: "Slowly — I need extra rest and feel drained for a while", scores: { qi_deficient: 2, yang_deficient: 1 } },
      { text: "Lingering symptoms that seem to move around or return", scores: { blood_stasis: 2, qi_stagnation: 1 } },
      { text: "I recover but am left with residual phlegm or congestion", scores: { phlegm_dampness: 3 } },
    ],
  },
];

// Calculate constitution scores from answers
// answers: object where keys are question IDs and values are selected option indices
export function calculateConstitution(answers) {
  // Initialize scores for each constitution
  const scores = {};
  Object.keys(constitutions).forEach(key => {
    scores[key] = 0;
  });

  // Calculate scores from quiz answers
  quizQuestions.forEach(question => {
    const selectedOptionIndex = answers[question.id];
    if (selectedOptionIndex !== undefined && question.options[selectedOptionIndex]) {
      const option = question.options[selectedOptionIndex];
      // Add scores for each constitution mentioned in this option
      Object.entries(option.scores).forEach(([constitutionKey, scoreValue]) => {
        if (scores[constitutionKey] !== undefined) {
          scores[constitutionKey] += scoreValue;
        }
      });
    }
  });

  // Get the maximum score achieved by any constitution
  const maxScoreAchieved = Math.max(...Object.values(scores), 1);

  // Theoretical maximum: 18 questions * 3 points = 54
  const theoreticalMax = quizQuestions.length * 3;

  // Convert to sorted array with id and total
  // Normalize to 0-5 scale based on the highest score achieved (not theoretical max)
  // This ensures the chart has good visual volume
  const sortedScores = Object.entries(scores)
    .filter(([_, total]) => total > 0)
    .map(([id, total]) => ({
      id,
      total,
      // Scale so highest scorer gets ~4.5, others proportionally
      average: (total / maxScoreAchieved) * 4.5
    }))
    .sort((a, b) => b.total - a.total);

  // maxScore for relative comparisons (highest achieved)
  const maxScore = sortedScores[0]?.total || 1;

  // Determine primary constitution
  const balancedScore = scores.balanced || 0;
  const imbalancedScores = sortedScores.filter(s => s.id !== 'balanced');
  const highestImbalanceScore = imbalancedScores[0]?.total || 0;

  // For balanced classification, no tendency should exceed 2 points on the spider diagram (0-5 scale)
  // The spider chart normalizes: average = (total / maxScoreAchieved) * 4.5
  // If balanced is highest, maxScoreAchieved = balancedScore
  // For imbalance to show <= 2 on chart: (imbalance / balancedScore) * 4.5 <= 2
  // So: imbalance <= balancedScore * (2 / 4.5) = balancedScore * 0.444
  const maxImbalanceForBalanced = balancedScore * (2 / 4.5);

  // Someone is ONLY balanced if:
  // 1. Balanced score is the highest
  // 2. All imbalance tendencies would show <= 2 on the spider diagram
  const isBalanced =
    balancedScore > highestImbalanceScore && // Balanced must be strictly highest
    highestImbalanceScore <= maxImbalanceForBalanced; // No tendency exceeds 2 on spider chart

  if (isBalanced) {
    // Filter out balanced from tendencies
    const tendencies = sortedScores
      .filter(s => s.id !== 'balanced' && s.total > 0)
      .slice(0, 4)
      .map(s => ({
        ...constitutions[s.id],
        strength: s.total >= maxScore * 0.7 ? 'strong' : 'mild',
        score: s.total
      }));

    return {
      primary: [constitutions.balanced],
      tendencies,
      scores: sortedScores,
      rawScores: scores,
      maxScore,
      theoreticalMax
    };
  }

  // Otherwise, highest IMBALANCE scorer is primary (not balanced, even if balanced scored highest)
  const primaryScore = imbalancedScores[0];
  const primary = primaryScore ? [constitutions[primaryScore.id]] : [constitutions.balanced];

  // Tendencies are the other imbalance scorers (excluding primary)
  const tendencies = imbalancedScores
    .slice(1)
    .filter(s => s.total > 0)
    .slice(0, 4)
    .map(s => ({
      ...constitutions[s.id],
      strength: s.total >= maxScore * 0.7 ? 'strong' : 'mild',
      score: s.total
    }));

  return {
    primary,
    tendencies,
    scores: sortedScores,
    rawScores: scores,
    maxScore,
    theoreticalMax
  };
}

export function getConstitution(id) {
  return constitutions[id];
}

export function getAllConstitutions() {
  return Object.values(constitutions);
}
