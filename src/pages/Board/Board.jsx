import Container from '@mui/material/Container';
import AppBar from '../AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
import { mockData } from '~/apis/mock-data';
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
      <BoardBar board={mockData?.board} />

      {/* Board Content */}
      <BoardContent board={mockData?.board} />
    </Container>
  );
}

export default Board;
