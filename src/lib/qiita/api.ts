import camelCase from 'camelcase-keys'
import { Qiita } from './Qiita'

interface User {
  description: string | null
  facebook_id: string | null
  followees_count: number
  followers_count: number
  github_login_name: string | null
  id: string
  items_count: number
  linkedin_id: string | null
  location: string | null
  name: string | null
  organization: string | null
  permanent_id: number
  profile_image_url: string
  team_only: boolean
  twitter_screen_name: string | null
  website_url: string | null
  image_monthly_upload_limit: number
  image_monthly_upload_remaining: number
}

interface Article {
  rendered_body: string
  body: string
  coediting: boolean
  comments_count: number
  created_at: string
  group: null
  id: string
  likes_count: number
  private: boolean
  tags: { name: string; versions: string[] }[]
  title: string
  updated_at: string
  url: string
  user: User
  page_views_count: string | null
}

const api = new Qiita({ token: import.meta.env.VITE_QIITA_API_TOKEN as string })

export async function getUser() {
  const body = await api.get<User>('/authenticated_user')
  return camelCase(body)
}

export async function getUserArticles() {
  const body = await api.get<Article[]>(
    '/authenticated_user/items?per_page=100'
  )
  return camelCase(body, { deep: true })
}
