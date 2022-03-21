import { Card, CardContent, Link, Typography } from '@mui/material'

interface Props {
  title: string
  tags: { name: string }[]
  createdAt: string
  url: string
}

export const ArticleCard = (props: Props) => {
  console.log(props)
  const { title, tags, createdAt, url } = props
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>{title}</Typography>
        {tags.map((tag) => (
          <Typography>{tag.name}</Typography>
        ))}
        <Typography>{createdAt}</Typography>
        <Link href={url}>Read</Link>
      </CardContent>
    </Card>
  )
}
