# OS Setup

OS setup, is an effort to easily load personal configs in fresh installed systems.

The main objective is to support the bellow systems:

- Mac OS
- Arch Linux
- Ubuntu (18.08)

Note this is a **personal project**, but may be extended for your custom use case.

## How it works

This project runs on top of **Deno**, an new and secure runtime for JavaScript and TypeScript. More details here: <https://deno.land/>.

The script will setup your bash configuration using your custom repository. It'll also install some programs and to your system. You can specify a `setup.yml` file to customize your choices. Check `setup.yml` of this project to see an example.

### Install

It will load your `zshrc` or `bashrc` config from your github repo.

To install this project you ran just run:

```sh
deno install oss https://raw.githubusercontent.com/marco-souza/os-setup/master/oss.ts
```

After this you will have a `oss` cli tool to configure your system.

### Usage

If you have a repo with your system config, you can just run:

```sh
oss -u https://github.com/marco-souza/zshrc -p setup.yml
```

You can type `oss --help` to see mode details about the usage.
