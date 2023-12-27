export interface PostProps {
	authorId: number
	authorAvatarUrl?: string | undefined
	imageUrl?: string | undefined
	content: string
	publishDate?: Date | null | undefined
	controls?: boolean | undefined
	id: number
	full?: boolean | undefined
	title?: string | undefined
	restore?: boolean | undefined
	likes?: number | undefined
}