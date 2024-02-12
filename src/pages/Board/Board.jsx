import Container from '@mui/material/Container';
import AppBar from '../AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '100vh',
      }}
    >
      {/* AppBar */}
      <AppBar />

      {/* Board Bar */}
      <BoardBar />

      {/* Board Content */}
      <BoardContent />
    </Container>
  );
}

export default Board;
