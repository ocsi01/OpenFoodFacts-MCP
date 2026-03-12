/**
 * Consumer-friendly static resources for Open Food Facts MCP
 * These resources provide helpful guides and references for everyday use
 */
/**
 * Handle requests for static resources
 */
export declare function handleStaticResource(uri: string): {
    contents: {
        uri: "openfoodfacts://help";
        text: string;
        mimeType: string;
    }[];
} | {
    contents: {
        uri: "openfoodfacts://nutriscore-guide";
        text: string;
        mimeType: string;
    }[];
} | {
    contents: {
        uri: "openfoodfacts://ecoscore-guide";
        text: string;
        mimeType: string;
    }[];
} | {
    contents: {
        uri: "openfoodfacts://allergens-list";
        text: string;
        mimeType: string;
    }[];
} | {
    contents: {
        uri: "openfoodfacts://additives-guide";
        text: string;
        mimeType: string;
    }[];
} | {
    contents: {
        uri: "openfoodfacts://nova-guide";
        text: string;
        mimeType: string;
    }[];
};
