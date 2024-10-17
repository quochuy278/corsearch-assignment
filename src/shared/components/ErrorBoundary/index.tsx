import React, { useState, useEffect, ReactNode } from "react";
import "./styles.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorInfo {
  componentStack: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
  fallback,
}) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      setHasError(true);
      setError(error.error);
      setErrorInfo({ componentStack: error.error.stack || "" });
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return (
      <div className="error-boundary">
        <h1 className="error-boundary__title">Something went wrong.</h1>
        <p className="error-boundary__message">
          We're sorry — we're working on getting this fixed as soon as we can.
        </p>
        {error && errorInfo && (
          <details className="error-boundary__details">
            <summary>Error Details</summary>
            <pre>{error.toString()}</pre>
            <pre>{errorInfo.componentStack}</pre>
          </details>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
