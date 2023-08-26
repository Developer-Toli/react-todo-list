export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface EditState {
  editing: boolean;
  editId: string | undefined;
}

export interface FilterValues {
  all: string;
  done: string;
  undone: string;
}

export interface ThemeValues {
  dark: string;
  light: string;
}

export interface Colors {
  red: ThemeValues;
  green: ThemeValues;
  blue: ThemeValues;
  yellow: ThemeValues;
}

export type KeyOfColors = keyof Colors;

export interface SettingsState {
  downloadType?: string;
  theme?: string;
  color?: string;
  multiColor?: string;
}

export interface DownloadTypes {
  json: string;
  csv: string;
  txt: string;
}

export type KeyOfDownloadTypes = keyof DownloadTypes;
