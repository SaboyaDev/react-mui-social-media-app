import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox } from '@mui/material'

const Post = ({ imageUrl }) => {
	return (
		<Card sx={{ margin: { xs: '.5rem', sm: '3rem' } }}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: red[500] }}
						aria-label='user'
						src={imageUrl}
					/>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				component='img'
				height='400rem'
				image={imageUrl}
				alt='Paella dish'
				sx={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
			/>
			<CardContent>
				<Typography
					variant='body2'
					color='text.secondary'
				>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	)
}
export default Post
