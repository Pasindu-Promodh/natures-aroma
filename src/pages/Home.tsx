import { useTranslation } from 'react-i18next';
import { Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <img src="https://placehold.co/800x400?text=Nature+Landscape&font=lato" alt="Nature Landscape" style={{ width: '100%', borderRadius: '8px' }} />
          <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
            {t('home.title')}
          </Typography>
          <Typography variant="body1">
            {t('home.description')}
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Home;