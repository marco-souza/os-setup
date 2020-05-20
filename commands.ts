// OS Setup
import * as log from "https://deno.land/std@0.51.0/log/mod.ts";
import * as path from "https://deno.land/std@0.51.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const logger = log.getLogger("commands");

export const clone = async (
  repo: string,
  pathDest: string,
) => {
  const cloneProcess = Deno.run({
    cmd: ["git", "clone", repo, pathDest],
  });
  await cloneProcess.status();
};

export const mkdir = async (pathDest: string) => {
  log.info(`Creating dir ${pathDest}.`);
  const mkdirProcess = Deno.run({
    cmd: ["mkdir", "-p", pathDest],
  });
  await mkdirProcess.status();
};

export const pip = async (...listPkgs: string[]) => {
  log.info(`Installing pip packages...`);
  const pipInstallProcess = Deno.run({
    cmd: ["pip", "install", ...listPkgs],
  });
  await pipInstallProcess.status();
};
