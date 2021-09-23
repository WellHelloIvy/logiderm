from app.models import db, Product

def seed_products():
    prod1 = Product(
        category_id=1, name='Hydrating Facial Cleanser', brand='Cerave', price='1699', ingredients='AQUA / WATER / EAU, GLYCERIN, CETEARYL ALCOHOL, PEG-40 STEARATE, STEARYL ALCOHOL, POTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, GLYCERYL STEARATE, BEHENTRIMONIUM METHOSULFATE, SODIUM LAUROYL LACTYLATE, SODIUM HYALURONATE, CHOLESTEROL, PHENOXYETHANOL, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, TOCOPHEROL, PHYTOSPHINGOSINE, XANTHAN GUM,'
        )

    prod2 = Product(
        category_id=1, name='Acne Control Cleanser', brand='Cerave', price='1699', ingredients='WATER, SODIUM LAUROYL SARCOSINATE, COCAMIDOPROPYL HYDROXYSULTAINE, GLYCERIN, NIACINAMIDE, GLUCONOLACTONE, SODIUM METHYL COCOYL TAURATE, PEG-150 PENTAERYTHRITYL TETRASTEARATE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, CALCIUM GLUCONATE, TRIETHYL CITRATE, SODIUM BENZOATE, SODIUM HYDROXIDE, SODIUM LAUROYL LACTYLATE, CHOLESTEROL, TETRASODIUM EDTA, CAPRYLYL GLYCOL, HYDROLYZED HYALURONIC ACID, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, XANTHAN GUM, HECTORITE, PHYTOSPHINGOSINE, BENZOIC ACID'
        )

    prod3 = Product(
        category_id=2, name='Skin Soak', brand='Versed', price='1799', ingredients='Water, Hydrogenated Polyisobutene, Glycerin, 1,2-Hexanediol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glyceryl Stearate, PEG-100 Stearate, Squalane, Palmaria Palmata Extract, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Tocopheryl Acetate, Phenoxyethanol, Polysorbate 60, Sorbitan Isostearate, Cetyl Alcohol, Trisodium Ethylenediamine Disuccinate'
        )

    prod4 = Product(
        category_id=3, name='Press Restart', brand='Versed', price='2199', ingredients='WaterHelianthus Annuus (Sunflower) Seed OilSodium Acrylate/Sodium Acryloyldimethyl Taurate CopolymerRetinolBakuchiolCrithmum Maritimum ExtractGlycerinPaeonia Suffruticosa ExtractButyrospermum Parkii (Shea) ButterHydroxypropyl CyclodextrinSodium HyaluronateCarica Papaya ExtractXylitylglucosideAnhydroxylitolXylitolHippophae Rhamnoides OilTocopheryl AcetateOpuntia Conccinellifera Fruit ExtractRosa Canina Seed OilChamomilla Recutita (Matricaria) ExtractAloe Barbadensis Leaf JuiceChlorophyllCaprylic/Capric TriglycerideHydrogenated Vegetable OilNylon-12IsohexadecanePolysorbate 80TrehaloseLeuconostoc/Radish Root Ferment FiltratePhenoxyethanolEthylhexylglycerin'
        )

    prod5 = Product(
        category_id=4, name='PLAY Everyday Lotion SPF 50 with Sunflower Extract', brand='Supergoop', price='3200', ingredients='Avobenzone (3%), Homosalate (10%), Octisalate (5%), Octocrylene (7.5%), Water, Acrylates Copolymer, Diisopropyl Sebacate, Glycerin, Isodecyl Neopentanoate, Isododecane, Lauryl Lactate, Cetyl Alcohol, Potassium Cetyl Phosphate, Brassica Campestris/Aleurites Fordi Oil Copolymer, Oryza Sativa (Rice) Bran Extract, Cetearyl Olivate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Hydroxyacetophenone, Sorbitan Olivate, Diethylhexyl Syringylidenemalonate, Aniba Rosaeodora (Rosewood) Wood Oil, Chlorphenesin, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Limon (Lemon) Peel Oil, Ethylhexylglycerin, Eucalyptus Globulus Leaf Oil, Ocimum Basilicum (Basil) Flower/Leaf Extract, Pelargonium Graveolens Flower Oil, Pogostemon Cablin Oil, Pentylene Glycol, 1,2-Hexanediol, Caprylyl Glycol, Xanthan Gum, Helianthus Annuus (Sunflower) Extract, Behenic Acid, Cetyl Behenate, Isostearyl Isostearate, Trisodium Ethylenediamine Disuccinate, Tocopherol, Allantoin, Rosmarinus Officinalis (Rosemary) Leaf Extract, Caprylic/Capric Triglyceride, Dexpanthenol, Pentasodium Triphosphate, Citric Acid'
        )

    db.session.add(prod1)
    db.session.add(prod2)
    db.session.add(prod3)
    db.session.add(prod4)
    db.session.add(prod5)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
