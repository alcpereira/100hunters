# Overview

This project aims to create a Kanban board tailored specifically for managing the job hunt process after completing the 100 Devs program. The Kanban board will provide a visual representation of the job search pipeline, allowing users to track their progress, manage tasks efficiently, and stay organized throughout the job hunt journey.

# Features

- **Customizable Columns:** The Kanban board will consist of customizable columns representing different stages of the job search process, such as "Applied", "Interview Scheduled", "Offer Received", etc. Users can add, remove, or modify columns based on their needs.

- **Task Management:** Users can create tasks/cards within each column to represent job applications, networking opportunities, follow-ups, or any other relevant activities. These cards can include details such as company name, job title, application status, contact information, and deadlines.

- **Drag-and-Drop Functionality:** The board will support drag-and-drop functionality, allowing users to easily move cards between columns to reflect changes in the status of their job search activities. For example, moving a card from "Applied" to "Interview Scheduled" when a job interview is confirmed.

- **Deadline Reminders:** The board will provide the option to set deadlines for tasks, with optional reminders to ensure users stay on track and meet important application deadlines.

# Technologies used

- **Language:** TypeScript
- **Framework:** Remix (React.js) with Vite and Express
- **Frontend libraries:** Tailwind CSS, Storybook
- **Database:** Turso with libSQL (in memory, and hosted as a service)
- **Testing:** Vitest, React Testing Library, and Playwright

# Folder structure

```
├── app
│   ├── components
│   ├── db
│   └── routes
│       └── board
├── build
├── coverage
├── docs
├── public
└── utils
    ├── mermaid
    └── seed
```

# Contribute

Contributions to the project are welcome! If you'd like to contribute, please follow these guidelines:

[Contributing guide](CONTRIBUTING.md)

# License

This project is licensed under the MIT License
