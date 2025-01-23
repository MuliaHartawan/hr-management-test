<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">HR Management Dashboard</h1> 
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This project focuses on building a web application that supports the concept of microservices, where users can perform WFH attendance with login, time recording, and photo upload as proof of work features. In addition, this application also provides a monitoring module for HRD admins, allowing efficient management of employee data through CRUD features and control over submitted attendance data. This project was designed using Node.js with Express.js framework for the backend, as well as React.js for the frontend, with a focus on good database structure, optimal API integration, and responsive user interface components.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project leverages modern web development tools and libraries to ensure a seamless and efficient development process. Below is a list of the major frameworks and libraries used:

[![Vite][Vite]][Vite-url] - A lightning-fast frontend tool for building modern web applications.

[![React][React.js]][React-url] - A popular JavaScript library for building user interfaces.

[![TanStack Query][TanStack]][TanStack-url] - (Tanstack Query) A powerful data-fetching library that simplifies server-state management in React applications. It enables efficient fetching, caching, synchronization, and updating of remote data with minimal boilerplate code.

[![Tanstack Router][Tanstack-router]][Tanstack-router-url]: (Tanstack Router) A type-safe, flexible, and framework-agnostic router for managing application navigation. It supports dynamic routing, nested routes, and parallel routes while ensuring maintainability for large-scale projects.

## Project Structure

```
├── src
│   ├── app
│   │   ├── app.tsx
│   │   ├── _components
│   │   ├── _context
│   │   ├── _hooks
│   │   ├── _providers
│   │   ├── router.tsx
│   │   └── routes
│   │       ├── (authenticated)
│   │       │   ├── (module-name)
│   │       │   │   ├── -components
│   │       │   │   ├── -hooks
│   │       │   │   ├── index.tsx
│   │       │   │   ├── (path-name)
│   │       │   │       └── index.tsx
│   │       ├── denied.tsx
│   │       ├── not-found.tsx
│   │       ├── (public)
│   │       │   └── (module-name)
│   │       │       └── (path-name)
│   │       │           ├── -components
│   │       │           ├── -hooks
│   │       │           ├── index.tsx
│   │       └── __root.tsx
│   ├── assets
│   ├── common
│   ├── index.css
│   ├── libs
│   ├── main.tsx
│   ├── routeTree.gen.ts
│   ├── types
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Key Directory

- `src/` : The main directory containing all the source files for the application.
  - `app/` : Contains all core application files, such as main components, contexts, hooks, providers, and routing configurations.
    - `app.tsx` : The main application file, likely using React.
    - `_components/` : A folder for global or shared components used across the application.
    - `_contexts/` : Contains files for the Context API, typically used for global state management.
    - `_hooks/` : Custom hooks used globally within the application.
    - `_providers/` : Includes providers for global dependencies, such as theme providers, state management providers, etc.
    - `router.tsx` : The routing configuration file, likely using TanStack Router, where routes and their hierarchy are defined.
    - `routes/` : The main folder for all application routes, grouped by type (e.g., authenticated, public):
      - `__root.tsx` : The root route file for the application.
      - `(authenticated)` : Contains routes that require authentication.
        - `(module-name)` : A folder for each module within the application, such as `attendances`, `history`, etc.
          - `-components/` : Contains components specific to the module.
          - `-hooks/` : Contains custom hooks specific to the module.
          - `index.tsx` : The main route file for the module.
          - `(path-name)` : A folder for each path within the module, such as `clock_in`, `history`, etc.
            - `-hooks/` : Contains custom hooks specific to the path.
            - `index.tsx` : The main route file for the path.
      - `(public)` : Contains routes that do not require authentication.
        - `(module-name)` : A folder for each module within the application, such as `attendances`, `history`, etc.
          - `-components/` : Contains components specific to the module.
          - `index.tsx` : The main route file for the module.
        - `(path-name)` : A folder for each path within the module, such as `clock_in`, `history`, etc.
          - `-hooks/` : Contains custom hooks specific to the path.
          - `index.tsx` : The main route file for the path.
      - `denied.tsx` : The route file for the denied page.
      - `not-found.tsx` : The route file for the not found page.
  - `main.tsx` : The main entry point for the application.
  - `routeTree.gen.ts` : A generated file containing the route tree for the application.
  - `common/` : A folder for common utility functions, types, and other shared code.
  - `index.css` : A CSS file for the application.
  - `libs/` : A folder for external libraries used in the application.
  - `types/` : Contains type definitions for various components, hooks, and other types used throughout the application.
  - `vite.config.ts` : The Vite configuration file for the application.
  - `README.md` : A README file for the application, likely using the Markdown format.

### Modules Structure

Each module should be encapsulated within its own folder, denoted by brackets (e.g., (module-name)), and organized with specific subdirectories:

Module Folder Structure

- `(module-name)/` : The root directory for a specific module.

  - `_components/` : Contains components specific to the module. These components are self-contained and are reused within the module.

  - `_hooks/` : Contains custom hooks that are specific to the module. These hooks manage local logic or shared functionality within the module.

  - `path/` : Contains the page components for the module, adhering to [Tanstack Router][TanStack-router-url] conventions. Each folder under path corresponds to a defined route within the module.

  - `index.tsx` : The main page for the path, serving as the entry point for this route.

  - `(sub-path-name)/` : Nested sub-paths or child routes within the module. These folders can have their own index.tsx files to define specific sub-pages.

## Learn More

- [Vite Documentation][Vite-url]
- [React Documentation][React-url]
- [React Query Documentation][TanStack-url]
- [React Router Documentation][TanStack-router-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TanStack]: https://img.shields.io/badge/-React%20Query-FF4154?style=plastic&logo=react%20query&logoColor=white
[TanStack-url]: https://tanstack.com/query/v4/docs/react/overview
[Tanstack-Router]: https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router
[Tanstack-router-url]: https://tanstack.com/router/latest/docs/framework/react/overview
