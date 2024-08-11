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

export const useEscapeKeyHandler = (isSideBarOpen, isLoginModalOpen, isRegisterModalOpen, toggleSideBar, handleCloseModal) => {
  useEffect(() => {
    if (!isSideBarOpen && !isLoginModalOpen && !isRegisterModalOpen) return;

    const handleEscClose = (evt) => {
      if (isSideBarOpen && evt.key === "Escape") {
        toggleSideBar();
      } else if ((isLoginModalOpen || isRegisterModalOpen) && evt.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isSideBarOpen, isLoginModalOpen, isRegisterModalOpen, toggleSideBar, handleCloseModal]);
};
