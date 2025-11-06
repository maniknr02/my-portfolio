import React, { useState } from "react";
import { Typography, Button, Stack } from "@mui/material";
import { ContactContainer } from "./styles/StyledComponents";
import ContactDialog from "./ContactDialog";

const Contact: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <ContactContainer id="contact" sx={{ py: 12, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        I’m open to new opportunities and collaborations. Let’s connect!
      </Typography>
      <Stack direction="row" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDialogOpen(true)}
          sx={{ borderRadius: 2, px: 3 }}
        >
          Say Hello
        </Button>
      </Stack>

      <ContactDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </ContactContainer>
  );
};

export default Contact;
