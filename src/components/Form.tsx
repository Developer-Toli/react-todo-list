import React from 'react';

type FormProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onFormSubmit: (_e: React.FormEvent<HTMLFormElement>) => void;
};

export function Form({ text, setText, onFormSubmit }: FormProps) {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={text}
        aria-label="What is your mind? Type new todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="app_input"
        placeholder="Юу хийх гэж байна даа?"
        autoComplete="off"
      />
    </form>
  );
}
