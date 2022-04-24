import { Container, Stack } from '@mui/material'
import { Profile } from '../components/Profile'
import { Qiita } from '../components/Qiita'
import { Work } from '../components/Work'

export const Home = () => {
  return (
    <Container maxWidth='md'>
      <Stack spacing={4}>
        <Profile />
        <Work />
        <Qiita />
      </Stack>
    </Container>
  )
}
