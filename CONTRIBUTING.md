# Contributing to JarviSuite

## Purpose

The `CONTRIBUTING.md` file sets clear expectations for how to propose changes, explains the Commons Clause commercial-use restriction, and requires contributors to agree to a Contributor License Agreement (CLA).

* GitHub Docs: [https://docs.github.com/en/contributing-to-open-source](https://docs.github.com/en/contributing-to-open-source)
* Commons Clause License: [https://commonsclause.com/](https://commonsclause.com/)

## Key Sections

This file covers:

* **Reporting Issues and Feature Requests**
* **Branching and Pull Request Workflow**
* **Coding Standards and Commit Message Format**
* **Contributor License Agreement (CLA) Requirement**
* **License Acknowledgment**

## 1. Reporting Issues and Feature Requests

* Search existing issues before opening a new one.
* Use clear titles and descriptions, including logs or screenshots when applicable.

## 2. Development Workflow

1. Fork the repository and create a topic branch:

   ```bash
   git checkout -b feature/foo
   ```
2. Write tests for your changes.
3. Ensure all existing tests pass:

   ```bash
   npm test
   ```
4. Submit a pull request against the `main` branch.

## 3. Coding Standards and Commit Message Format

* Follow the project’s style guide (e.g., linting rules).
* Write descriptive commit messages using this format:

  ```text
  <type>(<scope>): <short summary>

  <detailed description>
  ```

  **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

## 4. Contributor License Agreement (CLA)

All contributors must sign the CLA before their pull request can be merged.

* You grant Tenfyre the right to relicense and commercialize your contributions.
* See [CLA.md](CLA.md) for details; the CLA is required to enforce the Commons Clause restriction.

## 5. License Acknowledgment

By contributing, you confirm that:

* Your work is covered under **Apache License 2.0** with the **Commons Clause** restriction.
* You have read and agree to the license terms:

  * Apache 2.0: [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
  * Commons Clause v1.0: [https://commonsclause.com/](https://commonsclause.com/)

---

Thank you for helping make JarviSuite better! 🚀
