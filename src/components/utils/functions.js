import { useEffect } from "react";

export const formatWords = (sentence) => {
  if (!sentence) return "";

  const commonWords = new Set(["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "is", "with"]);

  return sentence
    .split(" ")
    .map((word, index) => {
      if (index === 0 || index === sentence.split(" ").length - 1 || !commonWords.has(word.toLowerCase())) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
};

export const useEscapeKeyHandler = (modals) => {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        Object.keys(modals).forEach((modalKey) => {
          if (modals[modalKey].isOpen) {
            modals[modalKey].handleCloseModal();
          }
        });
      }
    };

    const handleClickOutside = (evt) => {
      Object.keys(modals).forEach((modalKey) => {
        const modalElement = modals[modalKey].modalRef?.current;
        if (modals[modalKey].isOpen && modalElement && !modalElement.contains(evt.target)) {
          modals[modalKey].handleCloseModal();
        }
      });
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modals]);
};
