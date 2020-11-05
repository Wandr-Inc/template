interface post {
  thumbnail: string
}
  
interface user {
	display_name: string,
	display_picture: string,
	posts?: Array<post>
}

export {
	post,
	user
}