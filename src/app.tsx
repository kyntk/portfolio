import { Container, Grid } from '@mui/material'
import { useEffect, useState } from 'preact/hooks'
import { ArticleCard } from './components/ArticleCard'
import { Profile } from './components/Profile'
import { getUserPublicArticles } from './lib/qiita/api'

type Article = {
  title: string
  tags: { name: string }[]
  createdAt: string
  url: string
  id: string
}[]

export function App() {
  const [articles, setArticles] = useState<Article>([])
  useEffect(() => {
    getUserPublicArticles().then((response) => {
      setArticles(response)
    })
  }, [])

  return (
    <Container maxWidth='md'>
      <Profile />
      <Grid container spacing={2} maxWidth='100%'>
        {articles.map((article) => (
          <Grid item width='100%'>
            <ArticleCard
              key={article.id}
              title={article.title}
              tags={article.tags}
              createdAt={article.createdAt}
              url={article.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
