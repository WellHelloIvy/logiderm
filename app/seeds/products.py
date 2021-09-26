from app.models import db, Product
import random
from random import seed, randint

def seed_products():

    brand_names = ['Glow Recipe', 'SEPHORA COLLECTION', 'Supergoop!', 'Youth To The People', 'Peace Out', 'First Aid Beauty', 'Farmacy', 'Tatcha', 'Skinfix', 'Topical', 'Dr. Dennis Gross Skincare', 'Drunk Elephant', 'fresh', 'Summer Fridays', 'The INKEY List', 'Fenty Skin', 'KORRES', 'OLEHENRIKSEN', 'Caudalie', 'Biossance', 'Nécessair', 'Origins', 'Tower 28 Beaut', 'iNNBEAUTY PROJEC', 'Kosa', 'FARSÁL', 'Wishful', 'EADE', 'REN Clean Skincare', 'belif', 'MILK MAKEUP', 'Josie Maran', 'Guerlain', 'Wander Beauty']

    product_names = ['the honey mist', 'radiance', 'azure vie', 'gently nourish', 'skinfood', 'fragrant', 'the ultimate', 'moisture collective', 'the cool', 'peach please', 'blushup', 'the glossy', 'blendish', 'vanity lab', 'treatment serum', 'dew drops', 'glass skin kit', 'clean skin gel', 'hydrator glow', 'cleanse + purify', 'target serum', 'triple lipid peptide', 'intense repair cream', 'fresh-day serum', 'all-in-one face oil' 'superfood unity exfoliant', 'protective primer', 'toner serum']

    active_ingredients_list = ['glycolic acid', 'lactic acid', 'mandelic acid', 'salicylic acid', 'bentaine salicylate', 'azelaic acid', 'benzoyl perozide', 'niacinamide', 'retinol', 'adapalene', 'tretinoin', 'Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate', 'Manuka honey', 'Acacia honey', 'Kanuka honey', 'royal jelly', 'propolis', 'tea tree oil', 'hyalauronic acid', 'ceramide', 'squalene', 'squalane', 'snail mucin', 'Centella Asiatica', 'Madecassoside', 'Licorice Extract', 'Urea', 'Arbutin', 'Benzoyl Peroxide', 'Beta-Glucan', 'Ubiquinone/CoQ10', 'Kojic Acid', 'Sulfur', 'Tea Tree Oil', 'Ginseng Extract']

    inactive_ingredients_list = ['WATER', 'SODIUM LAUROYL SARCOSINATE', 'COCAMIDOPROPYL HYDROXYSULTAINE', 'TAURATE', 'PEG-150', 'PENTAERYTHRITYL TETRASTEARATE', 'CALCIUM GLUCONATE', 'TRIETHYL CITRATE', 'SODIUM BENZOATE', 'SODIUM HYDROXIDE', 'SODIUM LAUROYL LACTYLATE', 'CHOLESTEROL', 'TETRASODIUM EDTA', 'CAPRYLYL GLYCOL', 'TRISODIUM ETHYLENEDIAMINE DISUCCINATE', 'XANTHAN GUM', 'HECTORITE', 'PHYTOSPHINGOSINE', 'BENZOIC ACID', 'GLYCERIN', 'NIACINAMIDE', 'GLUCONOLACTONE', 'SODIUM METHYL COCOYL', 'CERAMIDE NP', 'CERAMIDE AP', 'CERAMIDE EOP', 'CARBOMER', 'CALCIUM GLUCONATE', 'TRIETHYL CITRATE', 'SODIUM BENZOATE', 'SODIUM HYDROXIDE', 'SODIUM LAUROYL LACTYLATE', 'CHOLESTEROL', 'TETRASODIUM EDTA', 'CAPRYLYL GLYCOL', 'HYDROLYZED HYALURONIC ACID', 'TRISODIUM ETHYLENEDIAMINE DISUCCINATE', 'XANTHAN GUM', 'HECTORITE', 'PHYTOSPHINGOSINE', 'BENZOIC ACID', 'DIMETHICONE/VINYL', 'DIMETHICONE', 'CROSSPOLYMER', 'CYCLOPENTASILOXANE', 'GLYCERYL STEARATE SE', 'CETYL ALCOHOL', 'DIMETHICONE', 'SACCHARIDE ISOMERATE', 'STEARIC ACID', 'PALMITIC ACID', 'GLYCINE SOJA STEROLS / SOYBEAN STEROLS', 'ALLANTOIN', 'CETEARYL ALCOHOL', 'BEHENTRIMONIUM METHOSULFATE', 'SODIUM HYDROXIDE', 'MYRISTIC ACID', 'SODIUM LAUROYL LACTYLATE', 'SODIUM BENZOATE', 'SODIUM CITRATE', 'SODIUM HYALURONATE', 'PHENOXYETHANOL', 'TOCOPHEROL', 'TRIPEPTIDE-1', 'LAURETH-9', 'CITRIC ACID', 'CAPROOYL TETRAPEPTIDE-3', 'BIOSACCHARIDE GUM-1', 'PHYTOSPHINGOSINE', 'XANTHAN GUM', 'DEXTRAN', 'ETHYLHEXYLGLYCERIN', 'BUTYLENE GLYCOL']

    for i in range(60):
        ingredients = ['water/aqua']
        active = random.choice(active_ingredients_list)
        inactive = random.choices(inactive_ingredients_list, k=11)
        product_name = random.choice(product_names)
        brand_name = random.choice(brand_names)

        ingredients.append(active)
        ingredients.extend(inactive)

        value = randint(1,4)
        product = Product(
            category_id=f'{value}', name=f'{product_name}', brand=f'{brand_name}', price=f'{randint(1000, 10000)}', ingredients=' '.join(ingredients)
        )
        db.session.add(product)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
