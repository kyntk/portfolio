import Button from '@mui/material/Button'
import { Logo } from './logo'

export function App() {
  return (
    <>
      <Logo />
      <Button variant='contained'>Hello World</Button>
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class='link'
          href='https://preactjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
