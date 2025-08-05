# JarviSuite Web App Product Requirements Document (Next.js Based)

---

## 1. Overview

**Product Name:** JarviSuite Web App
**Platform:** Next.js (React Framework)
**Purpose:**
A cross-platform AI productivity assistant web application, focusing on markdown-native note-taking, task management, automation, messaging, and persistent contextual memory. This document outlines the specific features and implementation requirements for the Next.js web version.

---

## 2. Goals & Objectives

* Deliver a performant, responsive web-based productivity assistant.
* Support markdown-native input and storage of tasks, notes, and logs.
* Enable workflow automation via API integrations.
* Facilitate cross-device sync and persistent memory.
* Include voice and text command interfaces.
* Ensure strong privacy, security, and offline functionality.

---

## 3. Features & Functional Requirements

### 3.1. Authentication & User Setup

* OAuth2.0 with support for Google and Apple sign-in
* Initial onboarding flow to set up preferences, connect services (email, calendar, cloud storage)

### 3.2. Main Dashboard

**Location:** `/dashboard`

* **Header:**

  * Search bar
  * Voice command mic button
* **Content Sections:**

  * Markdown-rendered task & note list
  * Grouped by tags or creation date
  * Floating action button to create new task/note
* **Footer Navigation Tabs:**

  * Tasks | Notes | Automation | Messages

### 3.3. Markdown Note/Task Editor

**Location:** `/editor/[id]`

* Rich markdown editor with live preview toggle
* Formatting toolbar: headings, bold, italics, checkboxes
* Metadata sidebar: tags, reminders, AI-generated suggestions
* Autosave and sync across tabs

### 3.4. Smart Task Manager

**Location:** `/tasks`

* Task list view (grouped by priority, context, or due date)
* Add/edit tasks with:

  * Context-aware reminder options (time, location)
  * Priority tags and task categorization
* Snooze, dismiss, or mark complete

### 3.5. Voice/Text Command Interface

* Global mic trigger
* Real-time transcription using browser-based or cloud ASR
* Fallback to text input
* Natural language parsing for commands like:

  * "Remind me to call John at 4 PM"
  * "Send follow-up email to team"

### 3.6. Workflow Automation

**Location:** `/automation`

* Connect services: Gmail, Outlook, Calendar, Browser (via Plasmo extension)
* Visual builder (drag-and-drop):

  * Trigger > Condition > Action
* Markdown preview of created workflows
* Enable/disable workflows
* Logs of executed automations

### 3.7. Messaging Interface

**Location:** `/messages`

* Contact list view with unread indicators
* Markdown-based chat view
* Voice input and quick replies
* Sync with SMS/iMessage via native integration (if linked)

### 3.8. Persistent Memory & Context

* Maintain session memory and historical context
* Store conversations, tasks, and interactions in local markdown files
* Synchronize memory across devices via optional iCloud/OneDrive API

### 3.9. Cross-Platform Sync

* Real-time sync of tasks/notes using WebSockets or polling
* Background sync using Service Workers for offline capture
* Conflict resolution based on latest modified timestamp

### 3.10. Settings & Preferences

**Location:** `/settings`

* Connected accounts (email, calendar, cloud storage)
* Voice settings (provider, language, hotword detection)
* Data management (export, delete, sync toggle)
* Privacy: local-only storage option

---

## 4. Non-Functional Requirements

| Requirement         | Description                                       |
| ------------------- | ------------------------------------------------- |
| **Performance**     | App loads in < 2s, responsive across breakpoints  |
| **Security**        | End-to-end encryption, secure OAuth flows         |
| **Offline Support** | Service workers cache recent notes/tasks          |
| **Scalability**     | Server-side rendering + ISR via Next.js for speed |
| **Privacy**         | All data stays local unless sync is enabled       |

---

## 5. Technical Stack

| Layer              | Technology                                                |
| ------------------ | --------------------------------------------------------- |
| Frontend Framework | Next.js (App Router), React 18                            |
| Styling            | Tailwind CSS, Radix UI, Shadcn UI                         |
| Markdown Editor    | `react-markdown`, `remark`, `rehype` plugins              |
| Voice Input        | Web Speech API (fallback to Google/Apple)                 |
| Backend API        | Node.js (Next.js API routes or FastAPI server)            |
| Automation         | Puppeteer/Selenium, Google & Microsoft APIs               |
| Sync               | WebSockets / LocalStorage / IndexedDB / OneDrive SDK      |
| Storage            | Markdown files (File System Access API, local/cloud sync) |

---

## 6. Success Metrics

* 30-day retention > 35%
* > 90% accuracy for voice transcription
* Task sync latency < 500ms
* Workflow execution success rate > 95%
* User satisfaction (CSAT) > 4.5/5

---

## 7. Constraints & Assumptions

* Some automation features depend on user permissions and OAuth scopes
* Offline AI assistance limited unless local LLM is configured
* Messaging integrations may require companion mobile app for full sync

---

## 8. Future Enhancements (Post-MVP)

* Real-time collaborative notes
* Chrome Plasmo extension full sync
* Hotword detection for voice commands
* AI agent persona customization
* In-browser training/fine-tuning for on-device models
