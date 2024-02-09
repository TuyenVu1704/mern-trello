import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "../AppBar";
import BoardBar from "./BoardBar";

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
      }}
    >
      {/* AppBar */}
      <AppBar />

      {/* Board Bar */}
      <BoardBar />

      {/* Board Detail */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default Board;
