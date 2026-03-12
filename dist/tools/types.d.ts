export interface SearchProductResult {
    id: string;
    name: string;
    brand: string;
    barcode: string;
    imageUrl: string;
    nutriScore: string;
    ecoScore: string;
    novaGroup: number;
    categories: string;
}
export interface SearchResult {
    products: SearchProductResult[];
    count: number;
    page: number;
    pageSize: number;
    pageCount: number;
}
export interface NutriScoreResult {
    barcode: string;
    productName: string;
    brand: string;
    nutriScoreGrade: string;
    nutriScoreScore: number | null;
    explanation: string;
}
export interface EcoScoreResult {
    barcode: string;
    productName: string;
    brand: string;
    ecoScoreGrade: string;
    ecoScoreScore: number | null;
    packaging: string;
    origins: string;
    explanation: string;
}
export interface AdditivesResult {
    barcode: string;
    productName: string;
    additives: Array<{
        tag: string;
        name: string;
    }>;
    count: number;
    novaGroup: number;
    novaExplanation: string;
}
export interface AllergenResult {
    barcode: string;
    productName: string;
    allergenFound: boolean;
    allergenChecked: string;
    allAllergens: string[];
    allergensTags: string[];
    traces: string[];
}
export interface MultiAllergenResult {
    barcode: string;
    productName: string;
    checkResults: Array<{
        allergen: string;
        found: boolean;
        inTraces: boolean;
    }>;
    safeToConsume: boolean;
    allAllergens: string[];
    traces: string[];
}
export interface RobotoffQuestion {
    barcode: string;
    type: string;
    value: string;
    question: string;
    insightId: string;
    insightType: string;
    imageUrl: string;
}
export interface RobotoffInsight {
    id: string;
    barcode: string;
    type: string;
    value: string;
    valueTag: string;
    confidence: number;
    latestEvent: string;
    predictor: string;
}
export interface QuestionsResult {
    status: string;
    questions: RobotoffQuestion[];
    count: number;
}
export interface InsightsResult {
    status: string;
    insights: RobotoffInsight[];
    count: number;
}
export interface PriceResult {
    productCode: string;
    price: number;
    currency: string;
    locationName: string;
    locationId: number;
    date: string;
    proofId: number;
}
export interface PricesSearchResult {
    prices: PriceResult[];
    count: number;
    page: number;
    pageSize: number;
}
export declare const BASE_URL = "https://world.openfoodfacts.org";
export declare const SEARCH_API_URL = "https://search.openfoodfacts.org";
export declare const ROBOTOFF_URL = "https://robotoff.openfoodfacts.org/api/v1";
export declare const PRICES_URL = "https://prices.openfoodfacts.org/api/v1";
export declare const NUTRI_SCORE_EXPLANATIONS: Record<string, string>;
export declare const ECO_SCORE_EXPLANATIONS: Record<string, string>;
export declare const NOVA_EXPLANATIONS: Record<number, string>;
export declare const INSIGHT_TYPES: {
    type: string;
    description: string;
}[];
