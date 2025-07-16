# Contributing to Zava AI

We welcome and appreciate contributions from the community to help us build **The Decentralized Proactive Intelligence Layer**! Whether you're a developer, researcher, designer, or simply a passionate Web3 enthusiast, your input is valuable.

Please read this guide to understand how you can contribute effectively.

## 🤝 Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) (if you create one; otherwise, please be respectful, inclusive, and constructive in all interactions).

## 🐞 How to Report Bugs

If you find a bug, please help us by reporting it:

1. Check the [issue tracker](https://github.com/your-username/Zava-AI/issues) to see if the bug has already been reported.
2. If not, open a new issue using our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).
3. Provide a clear and concise description of the bug, steps to reproduce it, expected behavior, and your environment details.

## ✨ How to Propose Features

Have an idea to improve Zava AI? We'd love to hear it!

1. Check the [issue tracker](https://github.com/your-username/Zava-AI/issues) for similar proposals.
2. If it's a new idea, open a new issue using our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).
3. Clearly describe the feature, its motivation, and its potential impact on users.

## 🚀 How to Submit Code (Pull Requests)

We follow a standard Git workflow for contributions.

**1. Fork the Repository:**

- Fork the `Zava-AI` repository to your GitHub account.

**2. Clone Your Fork:**

```bash
git clone https://github.com/YourUsername/Zava-AI.git
cd Zava-AI
```

(Replace `YourUsername` with your GitHub username)

**3. Create a New Branch:**

- Create a new branch for your feature or bug fix. Use descriptive names (e.g., `feature/add-nft-analytics`, `bugfix/fix-liquidation-alert`).

```bash
git checkout -b your-new-branch-name
```

**4. Make Your Changes:**

- Implement your changes, ensuring you follow our coding style guidelines (linters and formatters will help).
- Write tests for new features or bug fixes.

**5. Test Your Changes:**

- Run local tests for contracts:
  ```bash
  cd contracts && yarn test
  ```
- And for the DApp:
  ```bash
  cd dapp && yarn test
  ```

**6. Committ Your Changes:**

- Write clear, concise commit messages. Follow Conventional Commits guidelines if possible (e.g., `feat: add new DeFi optimizer module`, `fix: correct token allowance bug`).

```bash
git add .
git commit -m "feat: your descriptive commit message"
```

**7. Push Your Branch:**

```bash
git push origin your-new-branch-name
```

**8. Create a Pull Request (PR):**

- Go to the Zava-AI repository on GitHub.
- You'll see a prompt to create a PR from your new branch.
- Fill out the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE/pull_request.md) thoroughly.
- Link to any relevant issues.

**9. Review Process:**

- Your PR will be reviewed by the core team. Be prepared to address comments and make further changes.
- Once approved, your changes will be merged into the main or develop branch.
