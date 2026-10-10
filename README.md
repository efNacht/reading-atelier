# IELTS Preparation

An interactive IELTS Academic Reading and Writing learning app with Russian explanations. Built with React, Vite and Lucide; deployed on Vercel.

## Learning experience

- Twenty original passages, 136 questions, seven task types, six technique lessons with interactive mini challenges.
- Three-step Reading coach: choose an anchor, select exact evidence, compare meaning and scope. Every authored question includes grounded paraphrases and missing-fact guidance.
- Guided mode with keyword anchors and three progressive hints; independent practice; timed sessions with answers hidden until completion.
- Verbatim evidence highlighting and explanations for every question, including the difference between contradiction and missing information.
- Click any word or select a phrase to save context/translation, or highlight it in the passage. Highlights and answers are isolated by practice mode.
- Vocabulary review with increasing intervals, browser speech synthesis and CSV export for Anki.
- Attempts, accuracy by question type and an error journal with direct retries.
- Private imports: pasted text, TXT, HTML, a ZIP containing `Reading Passage.html` files, or structured JSON with verified quotes and explanations.
- Browser-local storage and portable JSON backup/restore. Vocabulary can optionally sync to a private Vercel Blob store for one user, authenticated by a personal access key; only the hash is held on the server. The browser keeps the key in the current tab session. Reading attempts, imported passages and Writing drafts remain local. There are no analytics. External fonts and official resource links use third-party servers.

## Writing

- 32 original tasks: 24 Task 2 essays across six instruction families and eight Task 1 tasks with charts, tables, process diagrams and before/after maps.
- Clickable prompt constraints, editable plans, timed drafting, word counter, browser autosave and four-criteria self-review.
- Ten interactive lessons comparing weaker and stronger responses, with official source links.
- JSON draft backups and TXT exports with the prompt/data/plan/essay for tutor feedback. No fabricated automated Band scores.
- Writing loads separately to keep the Reading entry page smaller.
- A separate bank of flexible Task 1/2 outlines, paragraph skeletons and topic ideas links directly to practice.

## Mobile and practice bank

- Installable PWA with home-screen icons, bottom navigation, touch-friendly sentence selection and a separate timer that continues between sections.
- Offline shell and previously visited modules are cached; cloud API responses and access keys are never cached by the service worker.
- Official task samples and answer keys remain on publisher sites. Forum techniques are identified as candidate experience, not scoring rules.
- Starter vocabulary cards can be added to the personal bank with context.

## Vocabulary sync

`api/vocabulary.js` requires `BLOB_READ_WRITE_TOKEN` and `IELTS_SYNC_KEY_HASH` (SHA-256 of the personal key). Connect the same private Blob store to all deployments used for sync. The UI asks for the key on each device; it is not included in the public bundle or repository.

The private JSON record uses ETag conditional writes and merges timestamped edits/deletion tombstones, retaining local changes when offline. Only vocabulary, translation, context and repetition dates sync. Keep a JSON backup; this is a personal single-user app, not a multi-user account system.


## Content

The built-in passages and studies are **original fictional exercises**, clearly labelled in the product. They are short technique sessions, not complete official exams, and results are not converted to IELTS Band scores. Links to IELTS, British Council, IDP and Cambridge are provided for official full practice. Private downloaded materials are not bundled or published.

A passage-only import supports reading/highlighting/vocabulary; questions and answer keys are not inferred. Add a JSON file to get interactive questions. Download an example JSON template in the import dialog.

JSON fields: `title`, `minutes`, `paragraphs` (1–26 strings), `questions` (up to 100). Each question needs `type`, `prompt`, `answer`, zero-based `paragraph`, a verbatim `evidence` substring in that paragraph, and Russian `explanation`. Optional: `anchors`, `hint`, `options`, `limit`, `alternatives`. Types: `tfng`, `ynng`, `completion`, `matching`, `heading`, `features`, `mc`. Multiple-choice/heading/features require `options` containing `answer`. Matching answers use paragraph letters. Questions are validated structurally, not semantically adjudicated.

## Development

```sh
npm ci
npm run dev
npm test
npm run build
```

The tests verify all question evidence/answers, teaching annotations, selection matching, import validation, Writing counters, timer arithmetic, prompt annotations and draft backups. Browser checks cover guided feedback, mode separation, timer pause, persistence, vocabulary, real ZIP import, interactive lessons and responsive layouts.

## Deployment

Vite output is `dist`. Vercel detects the framework automatically. GitHub is the source of truth; connected pushes deploy automatically.

Design direction inspired by the user's Feedbautom reference: warm rose backgrounds, outlined cards, generous spacing and restrained editorial type.
