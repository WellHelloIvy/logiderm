from faker import Faker
fake = Faker()

active_ingredients_list = ['glycolic acid', 'lactic acid', 'mandelic acid', 'salicylic acid', 'bentaine salicylate', 'azelaic acid', 'benzoyl perozide', 'niacinamide', 'retinol', 'adapalene', 'tretinoin', 'Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate', 'Manuka honey', 'Acacia honey', 'Kanuka honey', 'royal jelly', 'propolis', 'tea tree oil', 'hyalauronic acid', 'ceramide', 'squalene', 'squalane', 'snail mucin', 'Centella Asiatica', 'Madecassoside', 'Licorice Extract', 'Urea', 'Arbutin', 'Benzoyl Peroxide', 'Beta-Glucan', 'Ubiquinone/CoQ10', 'Kojic Acid', 'Sulfur', 'Tea Tree Oil', 'Ginseng Extract']

inactive_ingredients_list = ['WATER', 'SODIUM LAUROYL SARCOSINATE', 'COCAMIDOPROPYL HYDROXYSULTAINE', 'TAURATE', 'PEG-150', 'PENTAERYTHRITYL TETRASTEARATE', 'CALCIUM GLUCONATE', 'TRIETHYL CITRATE', 'SODIUM BENZOATE', 'SODIUM HYDROXIDE', 'SODIUM LAUROYL LACTYLATE', 'CHOLESTEROL', 'TETRASODIUM EDTA', 'CAPRYLYL GLYCOL', 'TRISODIUM ETHYLENEDIAMINE DISUCCINATE', 'XANTHAN GUM', 'HECTORITE', 'PHYTOSPHINGOSINE', 'BENZOIC ACID', 'GLYCERIN', 'NIACINAMIDE', 'GLUCONOLACTONE', 'SODIUM METHYL COCOYL', 'CERAMIDE NP', 'CERAMIDE AP', 'CERAMIDE EOP', 'CARBOMER', 'CALCIUM GLUCONATE', 'TRIETHYL CITRATE', 'SODIUM BENZOATE', 'SODIUM HYDROXIDE', 'SODIUM LAUROYL LACTYLATE', 'CHOLESTEROL', 'TETRASODIUM EDTA', 'CAPRYLYL GLYCOL', 'HYDROLYZED HYALURONIC ACID', 'TRISODIUM ETHYLENEDIAMINE DISUCCINATE', 'XANTHAN GUM', 'HECTORITE', 'PHYTOSPHINGOSINE', 'BENZOIC ACID', 'DIMETHICONE/VINYL', 'DIMETHICONE', 'CROSSPOLYMER', 'CYCLOPENTASILOXANE', 'GLYCERYL STEARATE SE', 'CETYL ALCOHOL', 'DIMETHICONE', 'SACCHARIDE ISOMERATE', 'STEARIC ACID', 'PALMITIC ACID', 'GLYCINE SOJA STEROLS / SOYBEAN STEROLS', 'ALLANTOIN', 'CETEARYL ALCOHOL', 'BEHENTRIMONIUM METHOSULFATE', 'SODIUM HYDROXIDE', 'MYRISTIC ACID', 'SODIUM LAUROYL LACTYLATE', 'SODIUM BENZOATE', 'SODIUM CITRATE', 'SODIUM HYALURONATE', 'PHENOXYETHANOL', 'TOCOPHEROL', 'TRIPEPTIDE-1', 'LAURETH-9', 'CITRIC ACID', 'CAPROOYL TETRAPEPTIDE-3', 'BIOSACCHARIDE GUM-1', 'PHYTOSPHINGOSINE', 'XANTHAN GUM', 'DEXTRAN', 'ETHYLHEXYLGLYCERIN', 'BUTYLENE GLYCOL']


concerns:

1:"dryness" = ['niacinamide', 'Manuka honey', 'Acacia honey', 'Kanuka honey', 'royal jelly', 'propolis','hyalauronic acid','squalene', 'squalane','snail mucin','Urea','Beta-Glucan', 'Ginseng Extract', ],
2:"dullness"= ['niacinamide', 'retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate','Licorice Extract'],
3:"uneven_texture" = ['glycolic acid', 'lactic acid', 'mandelic acid', 'retinol', 'tretinoin',],
4:"redness" = ['azelaic acid', 'niacinamide','squalene', 'squalane','Beta-Glucan',],
5:"fine_lines"= ['glycolic acid', 'lactic acid', 'mandelic acid', 'retinol', 'tretinoin','hyalauronic acid','Centella Asiatica', 'Madecassoside',],
6:"pores"= ['salicylic acid', 'bentaine salicylate','niacinamide', 'retinol', 'tretinoin',],
7:"anti_aging"= ['niacinamide', 'retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate', 'Ubiquinone/CoQ10', 'Ginseng Extract', ],
8:"oiliness"= ['salicylic acid', 'bentaine salicylate', 'niacinamide','retinol', 'tretinoin','Sulfur'],
9:"acne"= ['glycolic acid', 'lactic acid', 'mandelic acid', 'salicylic acid', 'bentaine salicylate','azelaic acid','benzoyl perozide', 'retinol', 'tretinoin', 'adapalene', 'Manuka honey', 'Acacia honey', 'Kanuka honey', 'royal jelly', 'propolis','tea tree oil','Centella Asiatica','Madecassoside','Benzoyl Peroxide','Kojic Acid', 'Tea Tree Oil',],
10:"hyperpigmentation"= ['glycolic acid', 'lactic acid', 'mandelic acid', 'azelaic acid', 'niacinamide','retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate','snail mucin','Licorice Extract', 'Arbutin','Kojic Acid' 'Ginseng Extract', ],
11:"dark_circles"= ['niacinamide', 'retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate',],
12:"scarring"= ['Centella Asiatica', 'Madecassoside','Kojic Acid'],
13:"blackheads"= ['salicylic acid', 'bentaine salicylate', 'retinol', 'tretinoin',],


