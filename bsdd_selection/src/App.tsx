import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../common/src/theme';
import React from 'react';
import { HomePage } from './pages/Home.page';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}
