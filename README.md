# Reading Atelier

A calm, responsive IELTS Academic Reading practice app with Russian explanations. Built with React, Vite and Lucide; deployed on Vercel.

## Learning experience

- Eight original passages, 64 questions, seven task types, six technique lessons with interactive mini challenges.
- Guided mode with keyword anchors and three progressive hints; independent practice; timed sessions with answers hidden until completion.
- Verbatim evidence highlighting and explanations for every question, including the difference between contradiction and missing information.
- Click any word or select a phrase to save context/translation, or highlight it in the passage. Highlights and answers are isolated by practice mode.
- Vocabulary review with increasing intervals, browser speech synthesis and CSV export for Anki.
- Attempts, accuracy by question type and an error journal with direct retries.
- Private imports: pasted text, TXT, HTML, a ZIP containing `Reading Passage.html` files, or structured JSON with verified quotes and explanations.
- Browser-local storage and portable JSON backup/restore. There is no login, cloud sync, analytics or server-side learning-data collection. External fonts and official resource links use third-party servers.

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

The tests verify all question evidence/answers and import validation. Browser checks cover guided feedback, mode separation, timer pause, persistence, vocabulary, real ZIP import, interactive lessons and responsive layouts.

## Deployment

Vite output is `dist`. Vercel detects the framework automatically. GitHub is the source of truth; connected pushes deploy automatically.

Design direction inspired by the user's Feedbautom reference: warm rose backgrounds, outlined cards, generous spacing and restrained editorial type.
