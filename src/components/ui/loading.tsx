import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  /** The accessibility label for screen readers (defaults to "Loading") */
  ariaLabel?: string;
}

const Loading = ({ 
  size = 'md', 
  className, 
  text, 
  ariaLabel = "Loading" 
}: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div 
      className={cn('flex items-center justify-center gap-2 sm:gap-3', className)}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <Loader2 
        className={cn('animate-spin text-primary', sizeClasses[size])} 
        aria-hidden="true"
      />
      {text && (
        <span className="text-sm text-muted-foreground font-medium">
          {text}
        </span>
      )}
      {!text && (
        <span className="sr-only">{ariaLabel}</span>
      )}
    </div>
  );
};

export default Loading; 