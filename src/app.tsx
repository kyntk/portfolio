import { useState } from 'preact/hooks'
import { Link, Route, Routes } from 'react-router-dom'

interface Props {
  isClient: boolean
  url: URL
  router: {
    routes: {
      name: string
      path: string
      component: any
    }[]
  }
  request: any
}

export function App({ isClient, url, router, request }: Props) {
  const baseUrl = isClient ? '' : url.origin
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello ViteSSR + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <nav>
          <ul>
            {router.routes.map(({ name, path }) => {
              return (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      <Routes>
        {router.routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component route={route} baseUrl={baseUrl} />}
            />
          )
        })}
      </Routes>
    </div>
  )
}
