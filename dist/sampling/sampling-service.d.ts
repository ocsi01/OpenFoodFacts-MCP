/**
 * MCP Sampling Service
 *
 * Provides AI completion capabilities via connected LLM clients.
 * Used for product analysis, comparisons, and recipe suggestions.
 */
import { CreateMessageResult } from "@modelcontextprotocol/sdk/types.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export interface SamplingRequest {
    messages: Array<{
        role: "user" | "assistant";
        content: {
            type: "text" | "image";
            text?: string;
            data?: string;
            mimeType?: string;
        };
    }>;
    modelPreferences?: {
        hints?: Array<{
            name?: string;
        }>;
        costPriority?: number;
        speedPriority?: number;
        intelligencePriority?: number;
    };
    systemPrompt?: string;
    includeContext?: "none" | "thisServer" | "allServers";
    temperature?: number;
    maxTokens: number;
    stopSequences?: string[];
    metadata?: Record<string, unknown>;
}
/**
 * Request a completion from an LLM via the connected client
 */
export declare function requestSampling(mcpServer: McpServer, request: SamplingRequest): Promise<CreateMessageResult>;
/**
 * Extract text from a sampling response
 */
export declare function getResponseText(response: CreateMessageResult): string;
/**
 * Creates a recipe suggestion request for a product
 */
export declare function createRecipeSuggestionRequest(productData: any): SamplingRequest;
