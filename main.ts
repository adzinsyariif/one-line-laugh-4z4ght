// One Line, One Laugh — entry program.
// Writes a single funny line to /output/entry.txt, deterministically:
// the same fixed string on every run, so two runs write identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I whispered a secret to my smart speaker. My ads now know things my therapist doesn't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
