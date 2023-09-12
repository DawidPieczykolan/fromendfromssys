import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  // Utwórz stan dla aktualnej daty i godziny
  const [currentDate, setCurrentDate] = React.useState(new Date());

  // Użyj efektu, aby zaktualizować datę i godzinę co sekundę
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    // Wyczyść interwał, gdy komponent jest usuwany
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="dynamic">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fromsys v.1.0 alfa test
          </Typography>
          <Typography variant="h6" component="div">
            {`${currentDate.toLocaleTimeString()} ${currentDate.toLocaleDateString()}`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
