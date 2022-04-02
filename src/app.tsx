import { Container } from '@mui/material'
import { Profile } from './components/Profile'
import { Qiita } from './components/Qiita'
import { Work } from './components/Work'

export function App() {
  return (
    <Container maxWidth='md'>
      <Profile />
      <Work />
      <Qiita />
    </Container>
  )
}
