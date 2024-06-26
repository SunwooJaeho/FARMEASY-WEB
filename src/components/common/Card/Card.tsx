import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`w-full grid border shadow-sm rounded-xl ${className}`}>
      {children}
    </div>
  );
};
