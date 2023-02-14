import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography,
} from '@mui/material'

const Tweets = ({ imageUrl }) => {
	return (
		<ListItem alignItems='flex-start'>
			<ListItemAvatar>
				<Avatar
					alt='Remy Sharp'
					src={imageUrl}
				/>
			</ListItemAvatar>
			<ListItemText
				primary='Brunch this weekend?'
				secondary={
					<>
						<Typography
							sx={{ display: 'inline' }}
							component='span'
							variant='body2'
							color='text.primary'
						>
							Ali Connors
						</Typography>
						{" — I'll be in your neighborhood doing errands this…"}
					</>
				}
			/>
		</ListItem>
	)
}
export default Tweets
