import * as React from 'react';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

export default function Loading() {
  return (
   <Stack spacing={2} sx={{ flex: 1 }}>
      <LinearProgress size="sm" />
   </Stack>
  );
}