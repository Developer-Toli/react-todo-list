import { ChangeEvent } from 'react';

type ThemeProps = {
  theme: string | undefined;
  onThemeChange: (_e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Theme({ theme, onThemeChange }: ThemeProps) {
  return (
    <div>
      <label htmlFor="app_theme_switcher">Загвар</label>
      <select value={theme} onChange={onThemeChange} id="app_theme_switcher" className="app_theme_switcher">
        <option value="system">Систем горим</option>
        <option value="light">Өдрийн горим</option>
        <option value="dark">Шөнийн горим</option>
      </select>
    </div>
  );
}
