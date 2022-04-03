import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'

export const Work = () => {
  return (
    <Box>
      <Typography variant='h5' component='h2'>
        Work
      </Typography>
      <Table>
        <TableBody>
          <TableRow sx={{ verticalAlign: 'top' }}>
            <TableCell
              sx={{ border: 'none', pt: 0.5, pb: 0.5, width: '150px' }}
            >
              2021.9 〜
            </TableCell>
            <TableCell sx={{ border: 'none', pt: 0.5, pb: 0.5 }}>
              Qiita Inc. / Web Engineer
            </TableCell>
          </TableRow>
          <TableRow sx={{ verticalAlign: 'top' }}>
            <TableCell
              sx={{ border: 'none', pt: 0.5, pb: 0.5, width: '150px' }}
            >
              2017.4 〜 2021.8
            </TableCell>
            <TableCell sx={{ border: 'none', pt: 0.5, pb: 0.5 }}>
              Ateam Lifestyle Inc. / Web Engineer and Assistant Manager
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
