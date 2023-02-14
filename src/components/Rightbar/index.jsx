import { Box } from '@mui/material'
import LatestConversations from '/src/components/LatestConversations/index'
import LatestPhotos from '/src/components/LatestPhotos/index'
import OnlineFriends from '/src/components/OnlineFriends/index'

const Rightbar = () => {
	return (
		<Box
			flex={2}
			p={2}
			sx={{ display: { xs: 'none', md: 'block' } }}
		>
			<Box
				position='fixed'
				width={300}
			>
				<OnlineFriends />
				<LatestPhotos />
				<LatestConversations />
			</Box>
		</Box>
	)
}
export default Rightbar
