import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './styles.scss';

interface CustomError {
  message?: string;
  statusText?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as CustomError;
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "This page doesn't exist!";
    } else {
      errorMessage = error.statusText || 'An error occurred';
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops!</h1>
      <p className="error-page__message">Sorry, an unexpected error has occurred.</p>
      <p className="error-page__details">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export default ErrorPage;