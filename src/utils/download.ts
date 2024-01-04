import { KeyOfDownloadTypes, Todo } from '../types';

type FileTypes = Record<KeyOfDownloadTypes, globalThis.FilePickerAcceptType[]>;

const fileTypes: FileTypes = {
  json: [
    {
      description: 'JSON file',
      accept: { 'application/json': '.json' }
    }
  ],
  csv: [
    {
      description: 'CSV file',
      accept: { 'text/csv': '.csv' }
    }
  ],
  txt: [
    {
      description: 'Text file',
      accept: { 'text/plain': '.txt' }
    }
  ]
};

function formatCSV(todoList: Todo[]) {
  let csvString = 'Id,Done,Text\n';
  todoList.forEach((todo) => {
    const line = [todo.id, todo.done, todo.text].join(',');
    csvString += line + '\n';
  });
  return csvString;
}

export async function downloadTodoList(downloadType: KeyOfDownloadTypes, todoList: Todo[]) {
  const jsonData = JSON.stringify(todoList, null, 2);
  const data = {
    json: jsonData,
    csv: formatCSV(todoList),
    txt: jsonData
  };
  try {
    const filePicker = await window.showSaveFilePicker({
      suggestedName: 'TodoList',
      types: fileTypes[downloadType]
    });
    const writeableStream = await filePicker.createWritable();
    await writeableStream.write(data[downloadType]);
    await writeableStream.close();
  } catch (err) {
    const { message } = err as Error;
    // android ois-iin hutuchuuded
    if (message.startsWith('window.showSaveFilePicker')) {
      alert('Таны хөтөч энэ үйлдлийг дэмжихгүй байна. Sorry 😥');
    }
  }
}
