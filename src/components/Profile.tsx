import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Avatar, Box, Link, Typography } from '@mui/material'

export const Profile = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Avatar
        alt='kyntk'
        src='/static/images/icon.png'
        sx={{ width: 60, height: 60 }}
      />
      <Box ml={2}>
        <Typography variant='h4' component='h1'>
          kyntk
        </Typography>
        <Typography variant='body1' mt={1}>
          QiitaでWebエンジニアをしています /
          Qiitaのユーザー体験にフォーカスしたCX向上グループ / React / TypeScript
          / Rails / 名前の読み方は（きゅんく）です
        </Typography>
        <Box mt={1}>
          <Link href='https://qiita.com/kyntk' color='inherit'>
            <Avatar
              alt='Qiita'
              src='/static/images/qiita.png'
              sx={{ width: 22, height: 22, display: 'inline-block', mr: 0.5 }}
            />
          </Link>
          <Link href='https://github.com/kyntk/' color='inherit'>
            <GitHubIcon sx={{ color: '#171515', mr: 0.5 }} />
          </Link>
          <Link href='https://twitter.com/kyntk_1128' color='inherit'>
            <TwitterIcon sx={{ color: '#379BF0', mr: 0.5 }} />
          </Link>
          <Link href='https://www.facebook.com/KanekoYuto' color='inherit'>
            <FacebookIcon sx={{ color: '#2E77F2', mr: 0.5 }} />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
