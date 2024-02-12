import Box from '@mui/material/Box';
import Columns from './Columns/Columns';
import Button from '@mui/material/Button';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        // Cho thanh Scoll bar margin 16px
        '&::-webkit-scrollbar-track': {
          m: 2,
        },
      }}
    >
      {/* Column 1*/}
      <Columns />
      <Columns />

      {/* Button Add Column*/}

      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d',
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1,
          }}
        >
          Add new Column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
