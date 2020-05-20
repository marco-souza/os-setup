import * as yaml from "https://deno.land/std@0.51.0/encoding/yaml.ts";
import * as log from "https://deno.land/std@0.51.0/log/mod.ts";
import { readFileStr } from "https://deno.land/std@0.51.0/fs/mod.ts";

import { clone, mkdir, pip } from "./commands.ts";

const logger = log.getLogger("engine");

interface CloneConfig {
  name?: string,
  repo: string,
  path: string,
}

interface SetupConfig {
  variables: {
    [prop: string]: string
  }
  system_install: string[]
  sh: string[]
  clone: CloneConfig[]
  mkdir: string[]
  copy: {
    dest: string,
    files: string[]
  }
  pip: string[]
  exec: string[]
}

export const runFromFile = async (file: string = "setup.yml") => {
  const text = await readFileStr(file);
  const setupConfig = await yaml.parse(text) as SetupConfig;

  Object.keys(setupConfig.variables)
    .map(async (value: string) => {
      Deno.env.set(value, setupConfig.variables[value])
    })

  for (const configKey of Object.keys(setupConfig)) {
    switch (configKey) {
      case "clone":
        setupConfig.clone.map(value => {
          log.info(value.name || `Cloning ${value.repo} to ${value.path}`)
          clone(value.repo, value.path)
        })
        break
    }
  }
};
