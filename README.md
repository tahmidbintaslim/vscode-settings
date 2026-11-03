<div align="center">

# vscode-settings

My VS Code user settings, keybinding, snippets and extension lists, ready to copy into your own setup.

[![CI](https://github.com/tahmidbintaslim/vscode-settings/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tahmidbintaslim/vscode-settings/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/github/license/tahmidbintaslim/vscode-settings)](./LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/tahmidbintaslim/vscode-settings/main)](https://github.com/tahmidbintaslim/vscode-settings/commits/main)
[![GitHub stars](https://img.shields.io/github/stars/tahmidbintaslim/vscode-settings?style=flat)](https://github.com/tahmidbintaslim/vscode-settings/stargazers)

</div>

My Visual Studio Code user configuration: settings, one keybinding,
snippets and extension lists, kept in `.vscode/`. It started from
[Anthony Fu's vscode-settings](https://github.com/antfu/vscode-settings)
and was then changed for my own setup.

## Quick start

Read [Before reusing `settings.json`](#before-reusing-settingsjson)
first: the file points at my font, SSH hosts and Settings Sync gist.
Then, on Linux (see [How to use it](#how-to-use-it) for the macOS and
Windows folders), back up your own files and run:

```sh
git clone https://github.com/tahmidbintaslim/vscode-settings.git
cd vscode-settings
cp .vscode/settings.json .vscode/keybindings.json ~/.config/Code/User/
mkdir -p ~/.config/Code/User/snippets
cp .vscode/global.code-snippets ~/.config/Code/User/snippets/
xargs -n 1 code --install-extension < .vscode/extensions.txt
```

## Contents

- [Quick start](#quick-start)
- [What's in it](#whats-in-it)
- [How to use it](#how-to-use-it)
- [Status and known limitations](#status-and-known-limitations)
- [Contributing](#contributing)
- [License](#license)

## What's in it

| File | Contents |
| --- | --- |
| [`.vscode/settings.json`](./.vscode/settings.json) | User settings: FiraCode Nerd Font with ligatures, the built-in Abyss color theme, Prettier as the default formatter with format on save, ESLint fixes and organize imports on save, gruvbox-style terminal colors, Shopify Theme Check for Liquid files, GitHub Copilot options, Remote SSH hosts and Settings Sync options |
| [`.vscode/keybindings.json`](./.vscode/keybindings.json) | One binding: `cmd+y` runs Git: Push |
| [`.vscode/global.code-snippets`](./.vscode/global.code-snippets) | Snippets for JS/TS imports and exports, a Vue `<script setup>` block, `shallowRef`, `computed`, `watchEffect`, in-source Vitest blocks and a Markdown API table |
| [`.vscode/extensions.json`](./.vscode/extensions.json) | Recommended extensions carried over from Anthony Fu's settings (Vitesse theme, Carbon product icons, ESLint, Vue, Copilot, GitLens and others) |
| [`.vscode/extensions.txt`](./.vscode/extensions.txt) | The extensions I have installed, one ID per line (Prettier, ESLint, Python and Jupyter, Docker, Remote SSH/WSL/Containers, Shopify and Ruby LSP, Vim and others) |

The two extension lists do not match each other: `extensions.txt` is
what I actually use, and `settings.json` relies on extensions from it
(Prettier, Shopify Theme Check) that `extensions.json` does not list. The
`sync.*` keys in `settings.json` are options of the third-party Settings
Sync extension (`shan.code-settings-sync`), which is in neither list.

## How to use it

Copy the files you want into your VS Code user folder:

- macOS: `~/Library/Application Support/Code/User/`
- Linux: `~/.config/Code/User/`
- Windows: `%APPDATA%\Code\User\`

`settings.json` and `keybindings.json` go in that folder, and
`global.code-snippets` goes in its `snippets/` subfolder. `extensions.json`
has no effect there: VS Code reads it only as a workspace file, and offers
its recommendations when this repository is the open folder. To install the
extensions from `extensions.txt` with the `code` command line tool:

```sh
xargs -n 1 code --install-extension < .vscode/extensions.txt
```

### Before reusing `settings.json`


- Install FiraCode Nerd Font (or change `editor.fontFamily` and
  `terminal.integrated.fontFamily`).
- Remove or replace `remote.SSH.remotePlatform`, which lists my SSH hosts,
  and the `sync.*` keys, which point at my Settings Sync gist.

## Status and known limitations

Personal configuration, edited by hand. There is no build, install
script or tests. CI (`.github/workflows/ci.yml`) only checks that the
files in `.vscode/` parse as JSON with comments.

- The two extension lists do not match (see [What's in it](#whats-in-it)).
- `settings.json` carries my own SSH hosts and Settings Sync gist, which
  you need to remove or replace.
- The one keybinding uses `cmd`, the macOS modifier key.
- Copying the files replaces your own `settings.json` and
  `keybindings.json`; nothing merges them.

## Contributing

This is a personal setup, so changes to my preferences are unlikely to
be merged. Fixes are welcome: a broken setting, a wrong claim in this
README, or a snippet that no longer works. See
[CONTRIBUTING.md](./CONTRIBUTING.md), and report security problems, such
as a leaked secret, through [SECURITY.md](./SECURITY.md).

## License

MIT, see [LICENSE](./LICENSE). The license file keeps the copyright
notice from Anthony Fu's original repository.
