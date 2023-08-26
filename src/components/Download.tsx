import React from 'react';

type DownloadProps = {
  downloadType: string | undefined;
  onDownloadChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Download({ downloadType, onDownloadChange }: DownloadProps) {
  return (
    <div>
      <label htmlFor="app_download_selector">Татаж авах</label>
      <select value={downloadType} onChange={onDownloadChange} id="app_download_selector" className="app_download_selector">
        <option value="">Татаж авах</option>
        <option value="json">JSON</option>
        <option value="csv">CSV</option>
        <option value="text">Text</option>
      </select>
    </div>
  );
}
