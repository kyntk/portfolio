import { useEffect, useState } from 'preact/hooks'
import { ArticleCard } from './components/ArticleCard'
import { getUserPublicArticles } from './lib/qiita/api'

type Article = {
  title: string
  tags: { name: string }[]
  createdAt: string
  url: string
}[]

export function App() {
  const [articles, setArticles] = useState<Article>([])
  useEffect(() => {
    getUserPublicArticles().then((response) => {
      setArticles(response)
    })
  }, [])

  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          title={article.title}
          tags={article.tags}
          createdAt={article.createdAt}
          url={article.url}
        />
      ))}
    </>
  )
}
