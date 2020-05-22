import React from 'react';

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer>&copy; {year} Oscar Villalta</footer>
    </>
  );
};
