import { SearchProductResult, SearchResult, NutriScoreResult, EcoScoreResult, AdditivesResult, AllergenResult, MultiAllergenResult, QuestionsResult, InsightsResult } from './types.js';
/**
 * Flexible product lookup - accepts either barcode or product name
 */
export declare function findProduct(nameOrBarcode: string): Promise<any>;
/**
 * Map raw product data to SearchProductResult
 */
export declare function mapToSearchProduct(p: any): SearchProductResult;
/**
 * Search products by category using the Open Food Facts facets API
 */
export declare function searchByCategory(category: string, page: number, pageSize: number): Promise<SearchResult>;
/**
 * Search products by brand using the Open Food Facts facets API
 */
export declare function searchByBrand(brand: string, page: number, pageSize: number): Promise<SearchResult>;
/**
 * Advanced search using Search-a-licious API with multiple filters
 */
export declare function advancedSearch(params: {
    query?: string;
    category?: string;
    brand?: string;
    nutriscoreGrade?: string;
    ecoscoreGrade?: string;
    novaGroup?: string;
    allergenFree?: string;
    labels?: string;
    countries?: string;
    sortBy?: string;
    page: number;
    pageSize: number;
}): Promise<SearchResult>;
/**
 * Fallback to standard search API
 */
export declare function fallbackSearch(params: {
    query?: string;
    page: number;
    pageSize: number;
}): Promise<SearchResult>;
/**
 * Autocomplete for taxonomy fields using Search-a-licious
 */
export declare function getAutocomplete(query: string, taxonomyType: string, lang: string, limit: number): Promise<any>;
/**
 * Get Nutri-Score for a product
 */
export declare function getNutriScore(product: any): NutriScoreResult;
/**
 * Get Eco-Score for a product
 */
export declare function getEcoScore(product: any): EcoScoreResult;
/**
 * Get additives information for a product
 */
export declare function getAdditivesInfo(product: any): AdditivesResult;
/**
 * Check if a product contains a specific allergen
 */
export declare function checkAllergen(product: any, allergen: string): AllergenResult;
/**
 * Check multiple allergens at once
 */
export declare function checkMultipleAllergens(product: any, allergens: string[]): MultiAllergenResult;
/**
 * Get AI-generated questions about products from Robotoff
 */
export declare function getQuestions(params: {
    barcode?: string;
    insightType?: string;
    lang?: string;
    count?: number;
}): Promise<QuestionsResult>;
/**
 * Get AI-generated insights about products from Robotoff
 */
export declare function getInsights(params: {
    barcode?: string;
    insightType?: string;
    country?: string;
    count?: number;
    page?: number;
}): Promise<InsightsResult>;
/**
 * Get product questions by barcode
 */
export declare function getProductQuestions(barcode: string, lang?: string): Promise<QuestionsResult>;
