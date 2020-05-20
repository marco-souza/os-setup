// OS Setup
import * as log from "https://deno.land/std@0.51.0/log/mod.ts";

import { runFromFile } from "./engine.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
  },

  loggers: {
    default: {
      level: "INFO",
      handlers: ["console"],
    },
  },
});

const main = async () => {
  // TODO: Create CLI
  runFromFile();
};

if (import.meta.main) {
  main();
}
