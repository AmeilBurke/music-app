import React from 'react';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Text>hello</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
