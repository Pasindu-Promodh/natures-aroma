import { useTranslation } from 'react-i18next';
import { Typography, Box, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" gutterBottom>
            {t('contact.title')}
          </Typography>
          <img src="https://placehold.co/600x400?text=Contact+Us&font=poppins" alt="Contact Us" style={{ width: '100%', borderRadius: '8px'}} />
          <form noValidate autoComplete="off">
            <TextField fullWidth label={t('contact.name')} variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label={t('contact.email')} variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label={t('contact.message')} variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
            <Button variant="contained" color="primary">
              {t('contact.submit')}
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;