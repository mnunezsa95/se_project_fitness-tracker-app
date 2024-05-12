import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Modal } from "./Modal";

const LoginButton = ({ handleOpenModal, handleCloseModal, openModal }) => {
  const theme = useTheme();
  return (
    <IconButton onClick={handleOpenModal}>
      {/* <IconButton> */}
      <LoginIcon
        style={{
          fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
        }}
      ></LoginIcon>
      <Modal openModal={openModal} handleCloseModal={handleCloseModal} />
    </IconButton>
  );
};

export default LoginButton;
