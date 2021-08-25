import React from 'react';
import { Button, createTheme } from '@material-ui/core';


function App() {
  return (
    <div>
      <ThemeProvider>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
