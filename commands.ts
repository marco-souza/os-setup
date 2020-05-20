// OS Setup
import * as log from "https://deno.land/std@0.51.0/log/mod.ts";
import * as path from "https://deno.land/std@0.51.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const logger = log.getLogger("commands")

export const clone = async (
  repo: string,
  pathDest: string
) => {
  log.info(`Cloning repo ${repo} to ${pathDest}`)
  const cloneProcess = Deno.run({
    cmd: ["git", "clone", repo, pathDest]
  })
  const { success } = await cloneProcess.status()
  success && log.info(`Done`)
}

export const mkdir = async (pathDest: string) => {
  log.info(`Creating dir ${pathDest}.`)
  const mkdirProcess = Deno.run({
    cmd: ["mkdir", "-p", pathDest]
  })
  const { success } = await mkdirProcess.status()
  success && log.info(`Done`)
}

export const pip = async (...listPkgs: string[]) => {
  log.info(`Installing pip packages...`)
  const pipInstallProcess = Deno.run({
    cmd: ["pip", "install", ...listPkgs]
  })
  const { success } = await pipInstallProcess.status()
  success && log.info(`Done`)
}
