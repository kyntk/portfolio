import {
  Card,
  CardActionArea,
  CardContent,
  Link,
  Typography,
} from '@mui/material'

interface Props {
  title: string
  tags: { name: string }[]
  createdAt: string
  url: string
}

const formatter = new Intl.DateTimeFormat([], {
  dateStyle: 'short',
})

export const ArticleCard = (props: Props) => {
  console.log(props)
  const { title, tags, createdAt, url } = props
  const displayCreatedAt = formatter.format(new Date(createdAt))

  return (
    <Card sx={{ minWidth: 275 }} variant='outlined'>
      <CardActionArea>
        <Link href={url} underline='none' color='inherit'>
          <CardContent>
            <Typography variant='h3' sx={{ mb: 0.5 }}>
              {title}
            </Typography>
            <Typography color='text.secondary' component='div' sx={{ mb: 1 }}>
              {displayCreatedAt}
            </Typography>
            {tags.map((tag) => (
              <Typography variant='body2' component='span' sx={{ mr: 0.5 }}>
                {tag.name}
              </Typography>
            ))}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}
