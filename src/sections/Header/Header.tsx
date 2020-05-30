import React from 'react';

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className="header">
    <h1>{title}</h1>
  </div>
);

interface HeaderProps {
  title: string;
}
