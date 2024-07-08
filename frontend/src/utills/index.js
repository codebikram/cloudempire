import { useEffect } from 'react';

export const useChangeTitle = (content) => {
  useEffect(() => {
    document.title = content + 'cloudempire.tech';
  }, [content]);
};

export const dateFormat = (date) => {
  const d = new Date(date);
  return d.toDateString();
};
