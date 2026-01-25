import type { Middleware } from "@raptor/framework";

import StaticHandler from "./static-handler.ts";

const handler = new StaticHandler();

/**
 * A convenient helper function for the static file handler package.
 */
export default handler.handle as Middleware;
