# Contributing

This repository is my personal VS Code setup, so pull requests that only
change a preference (a theme, a font, a formatter choice) are unlikely to
be merged. Fork it and make it yours instead.

Fixes are welcome:

- a setting that VS Code reports as unknown or deprecated,
- a snippet that no longer works,
- a claim in the README that does not match the files.

## How to propose a change

1. Open an issue with the [bug report](https://github.com/tahmidbintaslim/vscode-settings/issues/new?template=bug_report.yml) or [feature request](https://github.com/tahmidbintaslim/vscode-settings/issues/new?template=feature_request.yml) form.
2. Keep a pull request to one change, and update the README if the change affects what it describes.
3. Check that the files still parse. CI runs the same check:

   ```sh
   npm install --no-save jsonc-parser@3
   node .github/scripts/check-jsonc.js .vscode/*.json .vscode/*.code-snippets
   ```

4. Never commit tokens, gist IDs you do not own, or private host names.

## Contact

Questions that do not fit an issue can go to tahmidbintaslimrafi@gmail.com. Security problems, such as a leaked secret, go through [SECURITY.md](SECURITY.md).
