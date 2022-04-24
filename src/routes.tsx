import { createElement } from 'preact'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.jsx')

// Follow `react-router-config` route structure
export const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
  let component: any = null

  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    // Async components
    component: (props: any) => {
      if (!component) {
        const loadingComponent = pages[path]().then((result) => {
          component = result.default
        })

        // Suspense will re-render when component is ready
        throw loadingComponent
      }

      return createElement('div', props, component)
    },
  }
})
