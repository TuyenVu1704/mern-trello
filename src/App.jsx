
import {
  useColorScheme,
} from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';
import  FormControl  from '@mui/material/FormControl';
import  InputLabel  from '@mui/material/InputLabel';
import  Select  from '@mui/material/Select';
import  MenuItem  from '@mui/material/MenuItem';
import  Container  from '@mui/material/Container';
function ModeSelectTheme() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const seletedMode = event.target.value
    setMode(seletedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <Box sx={
            {
            display: 'flex', 
            alignItems: 'center', 
            gap: 1
            }
            }> 
            <LightModeIcon/> Light
          </Box> 
        </MenuItem>
        <MenuItem value={'dark'}> 
        <Box sx={
            {
            display: 'flex', 
            alignItems: 'center', 
            gap: 1
            }
            }> 
        <DarkModeIcon/> Dark
          </Box> 
        </MenuItem>
        <MenuItem value={'system'}> 
        <Box sx={
            {
            display: 'flex', 
            alignItems: 'center', 
            gap: 1
            }
          }> 
        <SettingsBrightnessIcon/> System
          </Box> 
        </MenuItem>
      </Select>
    </FormControl>
  );
}


function App() {
  return (
    <Container 
      disableGutters
      maxWidth={false}
      sx={{ 
        height: '100vh',
       
        }}>
        <Box 
          sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.trello.appBarHeight ,
            display: 'flex',
            alignItems: 'center'
          }}>
          <ModeSelectTheme/>
        </Box>
        <Box
          sx={{
            backgroundColor: 'primary.dark',
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight ,
            display: 'flex',
            alignItems: 'center'
          }}
        >

          Board Bar
          
        </Box>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Board Content
        </Box>
      
    </Container>
  );
}

export default App;
