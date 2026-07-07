# Prompt Master 17
## Repository Structure Rules

Version: 1.0

RULE-002

Only ONE canonical file is allowed for each core filename.

Allowed:

package.json
package-lock.json
index.html
vite.config.ts
README.md
tsconfig.json

Allowed directories:

src/
public/
.github/
supabase/
docs/

Forbidden duplicate filenames:

package.jsonpackage.json
package copy.json
package (1).json

index copy.html
index (1).html

README (1).md
README copy.md

vite.config copy.ts

Policy

Canonical file always wins.

Duplicate names must never become the canonical version.

Temporary files must not exist in repository root.

Build artifacts must never exist in repository root.

END RULE-002
