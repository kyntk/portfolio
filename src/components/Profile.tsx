import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Avatar, Box, Typography } from '@mui/material'

export const Profile = () => {
  return (
    <Box sx={{ display: 'flex' }} m={4}>
      <Avatar
        alt='kyntk'
        src='/static/images/icon.png'
        sx={{ width: 60, height: 60 }}
      />
      <Box ml={2}>
        <Typography variant='h4' component='h2'>
          kyntk
        </Typography>
        <Typography variant='body1' mt={1}>
          QiitaでWebエンジニアをしています /
          Qiitaのユーザー体験にフォーカスしたCX向上グループ / React / TypeScript
          / Rails / 名前の読み方は（きゅんく）です
        </Typography>
        <TwitterIcon />
        <FacebookIcon />
      </Box>
    </Box>
  )
}
