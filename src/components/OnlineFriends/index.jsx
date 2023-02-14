import { Box } from '@mui/material'
import GroupAvatar from '/src/components/GroupAvatar/index'
import RightbarTitle from '/src/components/RightbarTitle/index'

const OnlineFriends = () => {
	return (
		<Box sx={{ marginBottom: '2rem' }}>
			<RightbarTitle title='Online Friends' />
			<GroupAvatar />
		</Box>
	)
}
export default OnlineFriends
