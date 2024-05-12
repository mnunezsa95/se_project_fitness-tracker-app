import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { validateModalComponent } from "../validation/propTypes";

const Modal = ({ openModal, handleCloseModal }) => {
  Modal.propTypes = validateModalComponent;
  const theme = useTheme();

  return (
    <div>
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth>
        <DialogTitle style={{ fontFamily: theme.palette.typography }}>
          Sign up
          <IconButton style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export { Modal };
