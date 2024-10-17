import React from 'react';
import './styles.scss';

interface LoadingIndicatorProps {
  size?: 'small' | 'medium' | 'large';
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ size = 'medium' }) => {
  return (
    <div className={`loading-indicator loading-indicator--${size}`}>
      <div className="loading-indicator__spinner"></div>
    </div>
  );
};

export default LoadingIndicator;