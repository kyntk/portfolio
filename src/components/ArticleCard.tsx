import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

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
    <CardActionArea component='a' href={url}>
      <Card variant='outlined'>
        <CardContent>
          <Typography
            variant='h6'
            component='h3'
            sx={{ mb: 0.5, wordBreak: 'break-word', wordWrap: 'break-word' }}
          >
            {title}
          </Typography>
          <Typography color='text.secondary' component='div' sx={{ mb: 1 }}>
            {displayCreatedAt}
          </Typography>
          {tags.map((tag) => (
            <Typography
              variant='body2'
              component='span'
              sx={{ mr: 0.5, wordBreak: 'break-word', wordWrap: 'break-word' }}
            >
              {tag.name}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
