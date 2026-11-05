# Project instructions

## Public release notes

- Keep changelog entries brief and focused on user-visible outcomes. Describe maintenance work in general terms.
- Keep detailed operational and security verification records in the private portfolio development documentation, outside this public repository and the published application.
- Preserve meaningful accessibility limitations; do not imply security or conformance guarantees.

## Shared website shell

- The canonical a11y-copilot website UI, including the shared header and footer, is maintained in the sibling portfolio repository `deresjot-web/source`.
- Never fix a shared header or footer only in this standalone repository or only on the Copilot page. Apply global shell changes to every public page in `deresjot-web`, extend its all-routes Playwright contract test, and then import the verified UI with `A11Y_COPILOT_PORTFOLIO_SOURCE=... npm run sync:app`.
- Preserve the project-specific “Quellcode auf GitHub” link as an explicit Copilot extension; global profile, legal, release, and back-to-top elements must remain consistent with the portfolio shell.
- After synchronization, run the standalone build and inspect the generated application before committing.
