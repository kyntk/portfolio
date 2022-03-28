import { Grid } from '@mui/material'
import { useEffect, useState } from 'preact/hooks'
import { ArticleCard } from './components/ArticleCard'
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
    <Grid container spacing={2} justifyContent='center'>
      {articles.map((article) => (
        <Grid item xs={12} sm={8} key={article.id}>
          <ArticleCard
            title={article.title}
            tags={article.tags}
            createdAt={article.createdAt}
            url={article.url}
          />
        </Grid>
      ))}
    </Grid>
  )
}
