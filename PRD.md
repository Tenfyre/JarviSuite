# JarviSuite Product Requirements Document (PRD)

---

## 1. Overview

**Product Name:** JarviSuite

**Purpose:**

A cross-platform, markdown-native AI assistant that unifies tasks, automation, messaging, and workflows with persistent memory, voice/text input, and deep contextual awareness.

**Target Users:** Tech professionals, ADHD/neurodivergent users, remote workers, and power users seeking seamless productivity and automation.

---

## 2. Goals and Objectives

* Deliver an always-available assistant across phone, watch, and desktop platforms.
* Enable task and note capture via voice and text with markdown-native storage.
* Provide automation of workflows including email, calendar, and browser actions.
* Support smart task management with context-aware notifications and reminders.
* Allow reading and replying to messages within the app.
* Maintain persistent memory to retain context across sessions and devices.
* Ensure strong security and privacy controls.

---

## 3. Features and Requirements

| ID     | Feature                      | Description                                                             | Priority | Acceptance Criteria                                                  |
| ------ | ---------------------------- | ----------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| PRD-F1 | Cross-platform support       | Runs on iOS, watchOS, Android, Windows, and macOS                       | High     | App installs and functions on all supported platforms                |
| PRD-F2 | Markdown-native data storage | Notes, tasks, logs, conversations saved as markdown files locally       | High     | All user data accessible as editable markdown files                  |
| PRD-F3 | Voice and text command input | Accept commands via voice and text on all devices                       | High     | Voice commands transcribed with >90% accuracy, text input works      |
| PRD-F4 | Workflow automation          | Integrates with email, calendar, and browser APIs to automate tasks     | High     | Users can create, edit, and execute automation workflows             |
| PRD-F5 | Smart task management        | Intelligent reminders and notifications based on context and priority   | High     | Notifications trigger at appropriate times, users can snooze/dismiss |
| PRD-F6 | Messaging integration        | Read and reply to SMS, iMessage, or equivalent messaging platforms      | Medium   | Messages synced and reply functionality available                    |
| PRD-F7 | Persistent memory & context  | Conversation history and context maintained across sessions and devices | High     | Context preserved for at least 7 days, synced across devices         |

---

## 4. Non-Functional Requirements

| ID     | Requirement | Description                                        | Priority |
| ------ | ----------- | -------------------------------------------------- | -------- |
| PRD-N1 | Security    | End-to-end encryption of user data                 | High     |
| PRD-N2 | Privacy     | User data remains local unless explicitly shared   | High     |
| PRD-N3 | Performance | Voice recognition latency < 1 second               | Medium   |
| PRD-N4 | Usability   | Intuitive voice UX and markdown editing interfaces | High     |

---

## 5. User Stories

### 5.1 Task & Note Capture

| ID     | User Role   | Story                                                                  | Acceptance Criteria                                                                      |
| ------ | ----------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| US-TS1 | Techie User | As a user, I want to capture quick tasks or notes by voice on my watch | Voice input transcribed accurately and saved as markdown notes accessible on all devices |
| US-TS2 | Techie User | As a user, I want to edit and tag my notes in markdown format          | Notes editable in markdown with tagging support, synced across devices                   |
| US-TS3 | ADHD User   | As a user, I want smart reminders based on context                     | Reminders trigger based on time/location, with options to snooze or dismiss              |

### 5.2 Workflow Automation

| ID     | User Role     | Story                                                               | Acceptance Criteria                                                              |
| ------ | ------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| US-WF1 | Remote Worker | As a user, I want to automate email follow-ups using voice commands | Voice command triggers creation and sending of email follow-ups                  |
| US-WF2 | Power User    | As a user, I want to create browser automation tasks                | UI supports creating and testing browser automation rules saved in markdown logs |

### 5.3 Messaging & Conversation

| ID      | User Role    | Story                                                               | Acceptance Criteria                                                              |
| ------- | ------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| US-MSG1 | General User | As a user, I want to read and reply to SMS within JarviSuite        | Messages are synced, and replies can be sent without leaving the app             |
| US-MSG2 | Power User   | As a user, I want conversation history saved in markdown for review | All conversations archived as markdown, accessible through the app or filesystem |

### 5.4 Cross-Device Sync & Memory

| ID       | User Role  | Story                                                                     | Acceptance Criteria                                                         |
| -------- | ---------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| US-SYNC1 | Power User | As a user, I want session context and tasks synced across devices         | Changes on one device appear in near real-time on others, with no data loss |
| US-SYNC2 | ADHD User  | As a user, I want persistent memory so the assistant remembers past tasks | Context preserved for 7+ days allowing smooth continuation of workflows     |

---

## 6. Wireframes

### 6.1 Main Dashboard (Phone/Desktop)

* **Header:** Search bar, voice trigger button (microphone icon)
* **Content Area:**

  * Markdown-rendered list of tasks and notes, grouped by date or tag
  * Floating action button (“+”) for new note/task
* **Footer Tabs:** Tasks | Notes | Automation | Messages

---

### 6.2 Voice Command Screen (Watch/iOS)

* Central large circular mic button
* Real-time transcription above button
* “Save” and “Cancel” buttons below
* Quick preset commands shortcuts (e.g., “Add task,” “Send email”)

---

### 6.3 Task/Note Detail Screen

* Markdown editor with toggle for live preview
* Formatting toolbar (bold, italics, headers, checkboxes)
* Sidebar with AI-generated smart suggestions/snippets
* Task controls: tagging, priority, reminders

---

### 6.4 Automation Workflow Setup

* List of connected services (Email, Calendar, Browser) with status
* Drag-and-drop workflow editor: triggers, conditions, actions
* Markdown preview panel logging workflow steps
* Buttons: Test | Enable/Disable | Save

---

### 6.5 Messages Screen

* Contact list with avatars and unread indicators
* Chat window supporting markdown input
* Voice-to-text input button and quick reply options

---

## 7. Technology Stack Recommendations

| Layer              | Suggested Technologies                                                                 |
| ------------------ | -------------------------------------------------------------------------------------- |
| Frontend (Mobile)  | Swift + SwiftUI (iOS/watchOS), Kotlin + Jetpack (Android)                              |
| Frontend (Desktop) | Electron or React + Tauri                                                              |
| Backend            | Node.js or Python (FastAPI)                                                            |
| AI/LLM             | OpenAI API, LMStudio, or Qwen Code (local/offline options)                             |
| Storage            | Markdown files stored locally, with optional cloud sync (iCloud, OneDrive)             |
| Automation APIs    | Microsoft Graph, Google Calendar/Email APIs, Puppeteer/Selenium for browser automation |
| Voice UX           | Apple Speech framework, Google Speech-to-Text                                          |
| Security           | End-to-end encryption, OAuth 2.0 for service integrations                              |

---

## 8. Constraints & Assumptions

* Offline AI capabilities limited on watch devices
* Third-party API dependencies require user authentication
* User consent required for messaging integration

---

## 9. Success Metrics

* 30-day user retention > 30%
* Task completion rate improved by 20% for early adopters
* Voice command recognition accuracy > 90%
* Positive user feedback on automation ease and markdown integration
