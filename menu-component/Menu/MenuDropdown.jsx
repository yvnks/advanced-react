import React from 'react';

export default function MenuDropdown({ children, open, toggle }) {
  console.log('Menu Dropdown:', open);
  console.log('Menu Dropdown:', toggle);
  return (
    open && (
      <div className='menu-dropdown'>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            open,
            toggle,
          });
        })}
      </div>
    )
  );
}
