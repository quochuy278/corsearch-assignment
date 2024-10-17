/**
 * @file index.ts
 * @description This file serves as a central export point for all shared components.
 * Components in this directory should be reusable across multiple features of the application.
 * Import specific components here and export them to make them available throughout the app.
 *
 * Example usage:
 * import { Button, Modal } from '@/shared/components';
 */

// Example exports (uncomment and modify as needed):
// export { default as Button } from './Button';
// export { default as Modal } from './Modal';
// export { default as Card } from './Card';

import Container from "./Container";
import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";
import LoadingIndicator from "./LoadingIndicator";

export { Header, Container, ErrorBoundary, LoadingIndicator };
