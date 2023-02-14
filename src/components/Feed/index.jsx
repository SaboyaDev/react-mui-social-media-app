import { useState, useEffect } from 'react'
import Post from '/src/components/Post/index'
import { Box } from '@mui/material'
import { randomImages } from '/src/utilities/randomImage'

const Feed = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		randomImages().then(data => {
			if (Array.isArray(data)) {
				setImages(data)
			}
		})
	}, [])

	return (
		<Box
			flex={4}
			p={2}
		>
			{images.map(image => (
				<Post
					key={image.id}
					imageUrl={image.urls.regular}
				/>
			))}
		</Box>
	)
}
export default Feed
