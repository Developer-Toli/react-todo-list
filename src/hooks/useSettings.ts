import { storage } from '../storage';
import { KeyOfColors, KeyOfDownloadTypes, SettingsState, Todo } from '../types';
import { colors } from '../utils';
import { downloadTodoList } from '../utils/download';

import React, { useCallback, useEffect, useState } from 'react';

export function useSettings(todoList: Todo[]) {
  const [settings, setSettings] = useState<SettingsState>({
    downloadType: '',
    theme: storage.theme ?? 'system',
    color: storage.color ?? 'green',
    multiColor: storage.multiColor ?? ''
  });

  const html = document.documentElement;
  const windowMatchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');

  const setSettingsState = (state: SettingsState) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...state }));
  };

  const onThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value ?? '');
    setColor(settings.color as KeyOfColors);
  };

  const onColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      storage.remove('multiColor');
      setColor(storage.color as KeyOfColors);
      setSettingsState({ multiColor: '', color: storage.color ?? '' });
    } else {
      setColor(e.target.value as KeyOfColors);
    }
  };

  const onMultiColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiColor(e.target.value);
  };

  const getTheme = useCallback(
    (theme: string) => {
      if (theme === 'system' && windowMatchMediaDark.matches) {
        return 'dark';
      }
      return theme === 'dark' ? 'dark' : 'light';
    },
    [windowMatchMediaDark.matches]
  );

  const setColor = useCallback(
    (colorValue: KeyOfColors) => {
      storage.color = colorValue;
      setSettingsState({ color: colorValue });
      const theme = getTheme(settings.theme ?? '');
      const color = colors[colorValue][theme];
      html.style.setProperty('--app-color', color);
    },
    [getTheme, html.style, settings.theme]
  );

  const setMultiColor = useCallback(
    (multiColor: string) => {
      setSettingsState({ multiColor });
      html.style.setProperty('--app-color', multiColor);
      storage.multiColor = multiColor;
    },
    [html.style]
  );

  const setTheme = useCallback(
    (theme: string) => {
      storage.theme = theme;
      html.setAttribute('data-theme', getTheme(theme));
      setSettingsState({ theme });
    },
    [getTheme, html]
  );

  const windowMatchMediaDarkChange = useCallback(() => {
    if (settings.theme === 'system') {
      setTheme(settings.theme);
      setColor(settings.color as KeyOfColors);
    }
  }, [setColor, setTheme, settings.color, settings.theme]);

  useEffect(() => {
    setTheme(settings.theme ?? '');
  }, [setTheme, settings.theme]);

  useEffect(() => {
    if (settings.multiColor !== '') {
      setMultiColor(settings.multiColor ?? '');
    } else {
      setColor(settings.color as KeyOfColors);
    }
  }, [setColor, setMultiColor, settings.color, settings.multiColor]);

  useEffect(() => {
    windowMatchMediaDark.addEventListener('change', windowMatchMediaDarkChange);
    return () => {
      // component unmount function
      windowMatchMediaDark.removeEventListener('change', windowMatchMediaDarkChange);
    };
  }, [windowMatchMediaDark, windowMatchMediaDarkChange]);

  const onDownloadChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const downloadType = e.target.value as KeyOfDownloadTypes;
    setSettingsState({ downloadType });
    if (todoList.length === 0) {
      alert('Хийх зүйлс алга байна!');
      return;
    }
    if (e.target.value === '') {
      alert('Та татаж авах файлын төрлөө сонгоно уу!');
      return;
    }
    await downloadTodoList(downloadType, todoList);
    setSettingsState({ downloadType: '' });
  };

  return { settings, onThemeChange, onColorChange, onMultiColorChange, onDownloadChange };
}
