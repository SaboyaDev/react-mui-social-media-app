import RightbarTitle from '/src/components/RightbarTitle/index'
import { useState, useEffect } from 'react'
import { randomImages } from '/src/utilities/randomImage'
import { ImageList, ImageListItem } from '@mui/material'
import { Box } from '@mui/system'

const LatestPhotos = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		randomImages().then(data => {
			if (Array.isArray(data)) {
				setImages(data)
			}
		})
	}, [])

	return (
		<Box sx={{ marginBottom: '2rem' }}>
			<RightbarTitle title='Latest Photos' />
			<ImageList
				cols={3}
				rowHeight={100}
				gap={5}
			>
				{images.map(image => (
					<ImageListItem key={image.id}>
						<img
							src={image.urls.regular}
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	)
}
export default LatestPhotos
