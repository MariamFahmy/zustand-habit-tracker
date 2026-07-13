import './App.css'
import useHabitStore from "./store/store.ts";
import { Box, Container, Typography } from "@mui/material"

function App() {
  const store = useHabitStore();
  console.log(store)

  return <Container>
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">Habit Tracker</Typography>
    </Box>
  </Container>
}

export default App
