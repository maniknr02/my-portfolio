import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Stack,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useForm, useFormState, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactDialog: React.FC<ContactDialogProps> = ({ open, onClose }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const { errors } = useFormState({ control });
  const [snackbar, setSnackbar] = React.useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        PUBLIC_KEY
      );
      setSnackbar({ open: true, message: "Message sent successfully 🎉", severity: "success" });
      reset();
      onClose();
    } catch (error) {
      console.error("Email send failed:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 700 }}>Send me a message 💬</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Name"
                    fullWidth
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Email"
                    fullWidth
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "Message cannot be empty",
                  minLength: { value: 10, message: "Minimum 10 characters" },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    fullWidth
                    multiline
                    minRows={3}
                    variant="outlined"
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                )}
              />

              <DialogActions sx={{ px: 0, pb: 1 }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ borderRadius: 2, px: 3 }}
                  startIcon={isSubmitting ? <CircularProgress size={18} /> : null}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </DialogActions>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactDialog;
