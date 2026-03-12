/**
 * Resource registry for consumer-friendly MCP resources
 */
/**
 * Resource descriptor interface
 */
export interface ResourceDescriptor {
    uri: string;
    name: string;
    description: string;
    mimeType?: string;
}
/**
 * List of available consumer-friendly resources
 */
export declare const availableResources: ResourceDescriptor[];
/**
 * Route a resource request to the appropriate handler
 */
export declare function routeResourceRequest(uri: string): Promise<{
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
} | {
    contents: {
        uri: string;
        text: string;
        isError: boolean;
    }[];
}>;
