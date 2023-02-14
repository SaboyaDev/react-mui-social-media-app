import { Avatar, AvatarGroup } from '@mui/material'
import { useState, useEffect } from 'react'
import { randomImages } from '/src/utilities/randomImage'

const GroupAvatar = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		randomImages().then(data => {
			if (Array.isArray(data)) {
				setImages(data)
			}
		})
	}, [])

	return (
		<AvatarGroup
			max={7}
			sx={{ marginTop: '1rem' }}
		>
			{images.map(image => (
				<Avatar
					key={image.id}
					src={image.urls.regular}
				/>
			))}
		</AvatarGroup>
	)
}
export default GroupAvatar
