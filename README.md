# QAtalog

> Test management and bug tracking for small QA teams.

**Status:** work in progress

## About

QAtalog helps a QA team keep projects, test cases, test runs and bug reports in one place, with a dashboard that shows how a release is doing. It is built as a full-stack TypeScript project with authentication, roles, a relational database and automated tests.

## Features

- [ ] Authentication with roles (admin, tester)
- [ ] Projects
- [ ] Test cases with steps and expected results
- [ ] Test runs with pass / fail / blocked results
- [ ] Bug reports linked to test results
- [ ] Dashboard with pass rate and open bugs by severity
- [ ] Automated tests (unit and end-to-end) and CI
- [ ] Live demo with a demo account

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js (App Router), React, TypeScript |
| Database | PostgreSQL, Prisma |
| Authentication | Auth.js |
| Validation | Zod |
| Testing | Vitest, React Testing Library, Playwright |
| CI/CD | GitHub Actions, Vercel |

## Getting started

### Prerequisites

- Node.js (LTS)
- A PostgreSQL database

### Installation

```bash
git clone https://github.com/DianaDaraban/qatalog.git
cd qatalog
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in the values:

```
DATABASE_URL=
AUTH_SECRET=
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

_To be added._

## Roadmap

- Screenshots on bug reports
- Comments on bugs
- CSV export
- AI-assisted bug report triage

## Author

Diana Dărăban — [GitHub](https://github.com/DianaDaraban) · [Portfolio](https://dianadaraban.netlify.app/)