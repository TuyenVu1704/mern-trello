import ListColumns from './ListColumns/ListColumns';
import Box from '@mui/material/Box';

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#636e72' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        p: '10px',
      }}
    >
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
