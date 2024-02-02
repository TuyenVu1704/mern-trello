import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';
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

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeSelectTheme/>
        <hr/>
      <ModeToggle />
        <hr></hr>

      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default App;
