# Sprint 3 - Movie Data Testing

## 📄 Description

Small JavaScript utility library to work with a dataset of 200+ movies. It offers pure functions to filter, sort, average scores, and convert durations, plus a Jest test suite that validates each exercise.

![Tests passed](/src/assets/demo-tests.webp "Tests passed")


## 📁 Project Structure

```
s3-testing/
├── src/
│   ├── data.js          # Movie dataset
│   └── films.js         # Transformation and calculation helpers
├── tests/
│   └── films.spec.js    # Unit tests with Jest
├── index.html
├── package.json
└── test-results.html    # HTML report from Jest
```

## 💻 Technologies

- JavaScript (ES6+)
- Node.js and npm
- Jest 29.x (tests, JUnit and HTML reporters)

## 📋 Requirements

- Node.js 16+ and npm
- Terminal with zsh or bash

## 🛠️ Installation

```bash
git clone <repo-url>
cd s3-testing
npm install
```

## ▶️ Run

- Run all tests: `npm test`
- Watch mode: `npm run test:watch`
- Reports are generated automatically in `junit.xml` and `test-results.html`

## ✨ Features

- List all directors (`getAllDirectors`)
- Filter movies by director and compute their average score (`getMoviesFromDirector`, `moviesAverageOfDirector`)
- Sort titles alphabetically and limit to the first 20 (`orderAlphabetically`)
- Sort movies by year with title tiebreak (`orderByYear`)
- Average scores by genre with two decimals (`moviesAverageByCategory`)
- Convert durations like `2h 22min` to total minutes (`hoursToMinutes`)
- Get the best movie of a given year (`bestFilmOfYear`)

## 🧠 Learnings

- Pure, non-mutating array utilities
- Unit testing with Jest, assertions, and JUnit/HTML reporters
- Handling large datasets with array methods (`map`, `filter`, `reduce`, `sort`)
- Data conversion and normalization (hours and minutes to numeric format)

## 🤝 Contributions

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-improvement`
3. Apply changes and add tests when relevant
4. Write descriptive commits: `git commit -m "feat: describe the improvement"`
5. Push the branch: `git push origin feature/my-improvement`
6. Open a pull request