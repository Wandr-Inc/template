import Post from '@/interfaces/post'

export default interface User {
  display_name: string
  display_picture: string
  posts: Post[]
}
