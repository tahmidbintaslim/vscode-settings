// Parses VS Code JSON-with-comments files and fails on syntax errors.
const fs = require('fs');
const { parse, printParseErrorCode } = require('jsonc-parser');
let failed = false;
for (const f of process.argv.slice(2)) {
  const errors = [];
  parse(fs.readFileSync(f, 'utf8'), errors, { allowTrailingComma: true });
  for (const e of errors) { failed = true; console.error(`${f}: ${printParseErrorCode(e.error)} at offset ${e.offset}`); }
  if (!errors.length) console.log(`${f}: ok`);
}
process.exit(failed ? 1 : 0);
