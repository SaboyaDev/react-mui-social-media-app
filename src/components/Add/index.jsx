import { useState } from 'react'
import {
	Box,
	Fab,
	Tooltip,
	Modal,
	styled,
	Typography,
	TextField,
	ButtonGroup,
	Button,
} from '@mui/material'
import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from '@mui/icons-material'
import ProfileAvatar from '/src/components/ProfileAvatar'
import { Stack } from '@mui/system'

const Add = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const StyledModal = styled(Modal)({
		display: 'grid',
		placeItems: 'center',
	})

	const StyledBox = {
		width: 460,
		padding: 5,
		borderRadius: 5,
		bgcolor: 'background.default',
	}

	const UserBox = styled(Box)({
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		marginBottom: '20px',
	})

	const StyledFab = styled(Fab)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' && '#fff',
		color: theme.palette.mode === 'dark' && theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.mode === 'dark' && 'darkgray',
			color:
				theme.palette.mode === 'dark' && theme.palette.primary.contrastText,
		},
	}))

	return (
		<>
			<Tooltip
				sx={{
					position: 'fixed',
					bottom: 20,
					left: { xs: 'calc(50% - 25px)', md: 20 },
				}}
			>
				<StyledFab
					onClick={handleOpen}
					color='primary'
				>
					<AddIcon />
				</StyledFab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={handleClose}
			>
				<Box sx={StyledBox}>
					<Typography
						variant='h6'
						color='gray'
						textAlign='center'
						mb={2}
					>
						Create Post
					</Typography>
					<UserBox>
						<ProfileAvatar />
						<Typography>Jose Luis</Typography>
					</UserBox>
					<TextField
						fullWidth
						id='stanwdard-basic'
						label={`What's on your mind?`}
						variant='standard'
						multiline
						rows={3}
					/>
					<Stack
						direction='row'
						gap={1}
						mt={2}
						mb={3}
					>
						<EmojiEmotions color='primary' />
						<Image color='secondary' />
						<VideoCameraBack color='success' />
						<PersonAdd color='error' />
					</Stack>
					<ButtonGroup
						fullWidth
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button>Post</Button>
						<Button sx={{ width: '100px' }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	)
}
export default Add
