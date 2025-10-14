import { useTranslation } from 'react-i18next';
import { Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <img src="https://placehold.co/600x200?text=About+Us&font=roboto" alt="About Us" style={{ width: '100%', borderRadius: '8px'}} />
          <Typography variant="h3" gutterBottom>
            {t('about.title')}
          </Typography>
          <Typography variant="body1">
            {t('about.description')}
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default About;