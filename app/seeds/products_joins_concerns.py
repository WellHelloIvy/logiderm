from app.models import db
from app.models.product import products_joins_concerns, Product


def seed_products_joins_concerns():
    products = Product.query.all();
    
    dryness = ['niacinamide', 'Manuka honey', 'Acacia honey', 'Kanuka honey', 'royal jelly', 'propolis','hyalauronic acid','squalene', 'squalane','snail mucin','Urea','Beta-Glucan', 'Ginseng Extract']

    dullness = ['niacinamide', 'retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate','Licorice Extract']

    texture = ['glycolic acid', 'lactic acid', 'mandelic acid', 'retinol', 'tretinoin']

    redness = ['azelaic acid', 'niacinamide','squalene', 'squalane','Beta-Glucan',]

    fine_lines = ['glycolic acid', 'lactic acid', 'mandelic acid', 'retinol', 'tretinoin','hyalauronic acid','Centella Asiatica', 'Madecassoside']

    pores= ['salicylic acid', 'bentaine salicylate','niacinamide', 'retinol', 'tretinoin']

    anti_aging = ['niacinamide', 'retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate', 'Ubiquinone/CoQ10', 'Ginseng Extract']

    oiliness = ['salicylic acid', 'bentaine salicylate', 'niacinamide','retinol', 'tretinoin','Sulfur']

    acne = ['glycolic acid', 'lactic acid', 'mandelic acid', 'salicylic acid', 'bentaine salicylate','azelaic acid','benzoyl perozide', 'retinol', 'tretinoin', 'adapalene', 'Manuka honey', 'Acacia honey', 'Kanuka honey', 'royal jelly', 'propolis','tea tree oil','Centella Asiatica','Madecassoside','Benzoyl Peroxide','Kojic Acid', 'Tea Tree Oil']

    hyperpigmentation = ['glycolic acid', 'lactic acid', 'mandelic acid', 'azelaic acid', 'niacinamide','retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate','snail mucin','Licorice Extract', 'Arbutin','Kojic Acid' 'Ginseng Extract']

    dark_circles= ['niacinamide', 'retinol', 'tretinoin','Ascorbic Acid', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', 'Sodium Ascorbate', 'Calcium Ascorbate', 'Ascorbyl Palmitate']

    scarring = ['Centella Asiatica', 'Madecassoside','Kojic Acid']

    blackheads = ['salicylic acid', 'bentaine salicylate', 'retinol', 'tretinoin']

    concern_ingredients = []

    concern_ingredients.append(dryness)
    concern_ingredients.append(dullness)
    concern_ingredients.append(texture)
    concern_ingredients.append(redness)
    concern_ingredients.append(fine_lines)
    concern_ingredients.append(pores)
    concern_ingredients.append(anti_aging)
    concern_ingredients.append(oiliness)
    concern_ingredients.append(acne)
    concern_ingredients.append(hyperpigmentation)
    concern_ingredients.append(dark_circles)
    concern_ingredients.append(scarring)
    concern_ingredients.append(blackheads)

    for product in products:
        ingredientsString = product.ingredients
        ingredientList = ingredientsString.split(' ')
        active = ingredientList[1]

        for i in range(len(concern_ingredients)):
            if active in concern_ingredients[i]:
                db.session.execute(products_joins_concerns.insert().values(product_id = product.id, concern_id = i + 1 ))

    db.session.commit()


def undo_seed_products_joins_concerns():
    db.session.execute('TRUNCATE products_joins_concerns RESTART IDENTITY CASCADE;')
    db.session.commit()
