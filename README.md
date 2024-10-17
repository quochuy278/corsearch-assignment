# User Dashboard Feature

This feature provides a responsive dashboard that displays a list of users fetched from a REST API, with filtering and sorting capabilities. It's designed to be a part of a larger project, emphasizing scalability and separation of concerns.

## Features

- Fetch and display user data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Filter users by name (and optionally by other fields)
- Sort users by name or email, with ascending/descending toggle
- Responsive design for mobile, tablet, and desktop
- Clean, maintainable, and well-structured code

## Tech Stack

- React 18+ with TypeScript
- Axios for API calls
- React Query for server state management
- Zustand for client state management
- CSS Modules with Sass for styling

## Development Features

- Leverages Create React App's built-in features, including React Error Overlay for improved error reporting during development

## Project Structure

```
src/
├── features/
│   └── userDashboard/
│       ├── components/
│       │   └── index.ts
│       ├── hooks/
│       │   └── index.ts
│       ├── utils/
│       │   └── index.ts
│       ├── types.ts
│       ├── api.ts
│       ├── store.ts
│       └── index.ts
├── pages/
│   ├── HomePage/
│   │   ├── HomePage.tsx
│   │   ├── HomePage.module.scss
│   │   └── index.ts
│   ├── UserDashboardPage/
│   │   ├── UserDashboardPage.tsx
│   │   ├── UserDashboardPage.module.scss
│   │   └── index.ts
│   └── index.ts
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   │   └── variables.scss
│   └── utils/
├── routes.tsx
├── AppRouter.tsx
└── App.tsx
```

Note: This structure uses index files for each subdirectory. You can expand this structure as your feature grows, creating individual files for components, hooks, etc., as needed.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/quochuy278/corsearch-assignment.git
   cd corsearch-assignment
   ```

2. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Open the `.env` file and fill in the necessary variables:
   ```
   REACT_APP_API_URL=https://jsonplaceholder.typicode.com
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Feature Details

### API Integration
- The `api.ts` file contains functions for fetching user data from the JSONPlaceholder API.
- We use Axios for making HTTP requests and React Query for managing server state.

### State Management
- Zustand is used for managing client-side state, with the store defined in `store.ts`.
- This approach allows for easy scaling and potential integration with other features.

### Components
- All components are functional and use React hooks.
- Components like UserCard, UserList, FilterInput, and SortButton can be defined in the `components/index.ts` file or split into separate files as the feature grows.

### Styling
- We use CSS Modules with Sass for component-specific styles.
- Global styles and variables are kept in the `shared/styles` directory.

### Utils and Hooks
- Custom hooks and utility functions are defined in their respective index files.
- As the feature grows, you can split these into individual files for better organization.

## Best Practices

- We follow functional programming principles, utilizing array methods like `map`, `filter`, and `reduce`.
- The code is structured for scalability, allowing easy integration of new features or modifications.
- We use TypeScript for type safety and improved developer experience.

## Testing

To run the test suite:
```
npm test
```
We use Jest and React Testing Library for unit and integration tests.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.