import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'preact/hooks'
import { getUserPublicArticles } from '../lib/qiita/api'
import { ArticleCard } from './ArticleCard'

type Article = {
  title: string
  tags: { name: string }[]
  createdAt: string
  url: string
  id: string
}[]

export const Qiita = () => {
  const [articles, setArticles] = useState<Article>([])
  useEffect(() => {
    getUserPublicArticles().then((response) => {
      setArticles(response)
    })
  }, [])
  return (
    <Box mt={4}>
      <Typography variant='h5' component='h2'>
        Qiita
      </Typography>
      <Grid container spacing={2} maxWidth='100%' sx={{ mt: 0.5 }}>
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
    </Box>
  )
}
