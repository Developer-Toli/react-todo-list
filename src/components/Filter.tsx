import clsx from 'clsx';
import React from 'react';
import { filterValues } from '../utils';

type FilterProps = {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

//  arrow function
export const Filter = ({ filterValue, setFilterValue }: FilterProps) => {
  return (
    <div className="app_filter">
      {Object.entries(filterValues).map(([key, value]) => (
        <button key={key} className={clsx(key === filterValue && 'active')} onClick={() => setFilterValue(key)}>
          {value}
        </button>
      ))}
    </div>
  );
};
