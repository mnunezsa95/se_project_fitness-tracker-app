import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { validateModalComponent } from "../validation/propTypes";
import { RegisterForm } from "./RegisterForm";

const Modal = ({ openModal, handleCloseModal }) => {
  Modal.propTypes = validateModalComponent;
  const theme = useTheme();

  return (
    <Dialog open={openModal} onClose={handleCloseModal} fullWidth>
      <DialogTitle
        style={{
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.primary.main, // Use primary color for text
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Sign up for a free account
        <IconButton onClick={handleCloseModal} color="primary">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <RegisterForm />
    </Dialog>
  );
};

export { Modal };
