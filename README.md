# Todoist API Node.js Integration

This Node.js project demonstrates integration with the Todoist API. It includes functionality to retrieve projects, tasks, create new tasks, and mark tasks as completed using the Todoist API.

## Features

- Fetch all projects associated with the user's Todoist account.
- Retrieve tasks for a specified project.
- Create new tasks in a specified project.
- Mark tasks as completed.

## Getting Started

### Prerequisites

- Node.js
- npm (Node.js package manager)
- A Todoist account with an API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adanzweig/nodejs-todoist.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nodejs-todoist
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the project root directory.
2. Add your Todoist API key to the `.env` file:
   ```env
   API_KEY=your_api_key_here
   ```

### Usage

Run the script using Node.js:

```bash
node index.js
```

## Code Overview

### `index.js`

- The main script file where Todoist API integration is implemented.
- Includes functions to interact with different aspects of the Todoist API such as projects and tasks.

## Contributing

Contributions to enhance the functionality or improve the codebase are welcome. Please follow the standard GitHub pull request process to submit your changes.
