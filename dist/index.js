import { startServer } from "./server.js";
import { logger } from "./transport/transports.js";
startServer().catch((error) => {
    logger.error("Failed to start MCP server:", error);
    process.exit(1);
});
