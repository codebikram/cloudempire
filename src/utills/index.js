import { useEffect } from "react";

export const useChangeTitle = (content) => {
  useEffect(() => {
    document.title = content + "cloudempire.tech";
  }, [content]);
};
