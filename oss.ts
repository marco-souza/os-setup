// OS Setup
import * as yaml from 'https://deno.land/std@0.51.0/encoding/yaml.ts'
import * as log from "https://deno.land/std@0.51.0/log/mod.ts";
import { readFileStr } from 'https://deno.land/std@0.51.0/fs/mod.ts';

import { clone, mkdir, pip } from "./commands.ts";

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
})

const logger = log.getLogger()

const main = async () => {
  // TODO: Create CLI
  const text = await readFileStr('setup.yml');
  const setupConfig = await yaml.parse(text)

  logger.info(`yaml setup ${JSON.stringify(setupConfig, null, 2)}`)
}


if (import.meta.main) {
  main()
}