import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
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
    <Box>
      <Typography variant='h5' component='h2'>
        Qiita
      </Typography>
      <Stack spacing={2} sx={{ mt: 0.5 }}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            tags={article.tags}
            createdAt={article.createdAt}
            url={article.url}
          />
        ))}
      </Stack>
    </Box>
  )
}
