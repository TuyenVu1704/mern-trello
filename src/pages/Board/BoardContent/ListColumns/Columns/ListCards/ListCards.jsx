import Box from '@mui/material/Box';
import Cards from './Cards/Cards';

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.columnHeaderHeight
          } - ${theme.trello.columnFooterHeight})`,

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#bdc3c7',
          borderRadius: 8,
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'blue',
        },
      }}
    >
      {cards?.map((card) => {
        return <Cards key={card._id} card={card} />;
      })}
    </Box>
  );
}

export default ListCards;
