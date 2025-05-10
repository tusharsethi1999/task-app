# Task Manager Application

A modern, full-stack task management application built with React and NestJS.

## Overview

This Task Manager application allows users to efficiently create, organize, and track their tasks. It features user authentication, task management with due dates, and a clean, responsive UI.

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **React Router** for navigation
- **Axios** for API communication
- **date-fns** for date manipulation

### Backend
- **NestJS** - A progressive Node.js framework
- **JWT** authentication
- RESTful API architecture

## Features

- 🔒 **Secure Authentication**: User login with JWT token authorization
- ✅ **Task Management**: Create, view, and mark tasks as complete
- 📅 **Due Dates**: Set and track deadlines for your tasks
- 🛡️ **Protected Routes**: Secure access to authenticated content
- 💾 **Persistent Storage**: Data is saved between sessions

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- Bun or npm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:tusharsethi1999/task-app.git
   cd task-app
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

### Building for Production

```bash
bun build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
bun preview
```

## Project Structure

```
task-app/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable UI components
│   ├── models/         # TypeScript interfaces and classes
│   ├── pages/          # Page components
│   ├── providers/      # Providers
│   ├── setup/          # Configuration files
│   └── styles/         # CSS files
├── public/             # Public static assets
├── README.md           # Project documentation
└── package.json        # Project dependencies and scripts
```

## API Integration

The frontend communicates with the NestJS backend through RESTful API endpoints:

- **Authentication**: `/api/auth/login`
- **User Profile**: `/api/user/profile`
- **Tasks**: `/api/task`

## Development

### Available Scripts

- `bun dev`: Start development server
- `bun build`: Build for production
- `bun lint`: Run ESLint
- `bun preview`: Preview production build
- `bun format`: Format code with Prettier
- `bun format:check`: Check code formatting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
