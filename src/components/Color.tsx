import React from 'react';

type ColorProps = {
  color: string | undefined;
  multiColor: string | undefined;
  onColorChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
  onMultiColorChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Color({ color, multiColor, onColorChange, onMultiColorChange }: ColorProps) {
  return (
    <div>
      <label htmlFor="app_color_picker">Өнгө</label>
      <select value={color} onChange={onColorChange} id="app_color_picker" className="app_color_picker">
        <option value="">Default</option>
        <option value="red">Улаан</option>
        <option value="green">Ногоон</option>
        <option value="blue">Цэнхэр</option>
        <option value="yellow">Шар</option>
      </select>
      <input type="color" id="color" value={multiColor} onChange={onMultiColorChange} />
    </div>
  );
}
