# Instructions for Claude

## When asked to "test this project" on a pull request

1. Install dependencies: `cd backend && npm install`, then `cd frontend && npm install`.
2. Backend: start it with `node server.js &` from `backend/` and check `POST /api/payment`
   with `curl` against every row of the API table in README.md, plus edge cases
   (empty body, missing `amount`, `null`, very large numbers, `"1e3"`, `" 5 "`, `"05"`, numbers sent as JSON numbers instead of strings).
3. Frontend: run `npm run build` in `frontend/` and report any build errors or warnings.
4. Review the PR diff for bugs it introduces or breaks.
5. Do not commit or push anything unless the comment explicitly asks for it.

## Reporting

- Post an inline review comment on the exact line for each issue found in the PR's changed files.
- Finish with a summary comment: a table of every test case (input, expected, actual, pass/fail)
  and a list of issues found, most severe first. If everything passes, say so plainly.
