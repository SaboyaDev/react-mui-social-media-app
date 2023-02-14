import { useState, useEffect } from 'react'
import RightbarTitle from '/src/components/RightbarTitle/index'
import Tweets from '/src/components/Tweets/index'
import { List } from '@mui/material'
import { randomImages } from '/src/utilities/randomImage'

const LatestConversations = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		randomImages().then(data => {
			if (Array.isArray(data)) {
				setImages(data)
			}
		})
	}, [])

	return (
		<>
			<RightbarTitle title='Latest Conversations' />
			<List>
				{images.map(image => (
					<Tweets
						key={image.id}
						imageUrl={image.urls.regular}
					/>
				))}
			</List>
		</>
	)
}
export default LatestConversations
