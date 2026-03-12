import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export * from './types.js';
export * from './helpers.js';
/**
 * Register all MCP tools with the server
 */
export declare function registerTools(server: McpServer): void;
