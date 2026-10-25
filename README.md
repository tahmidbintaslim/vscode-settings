# vscode-settings

My Visual Studio Code user configuration: settings, one keybinding,
snippets and extension lists, kept in `.vscode/`. It started from
[Anthony Fu's vscode-settings](https://github.com/antfu/vscode-settings)
and was then changed for my own setup.

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

Before reusing `settings.json`:

- Install FiraCode Nerd Font (or change `editor.fontFamily` and
  `terminal.integrated.fontFamily`).
- Remove or replace `remote.SSH.remotePlatform`, which lists my SSH hosts,
  and the `sync.*` keys, which point at my Settings Sync gist.

## Status

Personal configuration, edited by hand. There is no build, install
script or tests.

## License

MIT, see [LICENSE](./LICENSE). The license file keeps the copyright
notice from Anthony Fu's original repository.
