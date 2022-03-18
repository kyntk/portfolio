import Button from '@mui/material/Button'
import { getUserArticles } from './lib/qiita/api'
import { Logo } from './logo'

export function App() {
  getUserArticles().then((response) => {
    console.log('api', response)
  })
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
