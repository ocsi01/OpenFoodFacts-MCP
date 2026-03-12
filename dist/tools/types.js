// Constants
export const BASE_URL = 'https://world.openfoodfacts.org';
export const SEARCH_API_URL = 'https://search.openfoodfacts.org';
export const ROBOTOFF_URL = 'https://robotoff.openfoodfacts.org/api/v1';
export const PRICES_URL = 'https://prices.openfoodfacts.org/api/v1';
// Grade explanation mappings
export const NUTRI_SCORE_EXPLANATIONS = {
    'a': 'Excellent nutritional quality - This is a very healthy choice!',
    'b': 'Good nutritional quality - A healthy option.',
    'c': 'Average nutritional quality - Consume in moderation.',
    'd': 'Poor nutritional quality - Consider healthier alternatives.',
    'e': 'Very poor nutritional quality - Best to avoid or consume rarely.',
    'unknown': 'Nutri-Score not available for this product.'
};
export const ECO_SCORE_EXPLANATIONS = {
    'a': 'Very low environmental impact - Excellent eco choice!',
    'b': 'Low environmental impact - Good for the planet.',
    'c': 'Moderate environmental impact - Consider the environment.',
    'd': 'High environmental impact - Consider eco-friendlier options.',
    'e': 'Very high environmental impact - Significant environmental footprint.',
    'unknown': 'Eco-Score not available for this product.'
};
export const NOVA_EXPLANATIONS = {
    1: 'Unprocessed or minimally processed foods',
    2: 'Processed culinary ingredients',
    3: 'Processed foods',
    4: 'Ultra-processed foods - contains industrial additives'
};
export const INSIGHT_TYPES = [
    { type: 'label', description: 'Detected product labels (organic, fair-trade, etc.)' },
    { type: 'category', description: 'Product category suggestions' },
    { type: 'product_weight', description: 'Detected product weight/quantity' },
    { type: 'brand', description: 'Brand name detection' },
    { type: 'expiration_date', description: 'Expiration date detection from images' },
    { type: 'packaging', description: 'Packaging material and type' },
    { type: 'store', description: 'Store/retailer information' },
    { type: 'nutrient', description: 'Nutritional value detection' },
    { type: 'ingredient_spellcheck', description: 'Ingredient spellings corrections' },
    { type: 'nutrition_image', description: 'Nutrition table image detection' }
];
