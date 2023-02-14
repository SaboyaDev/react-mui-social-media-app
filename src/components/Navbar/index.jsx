import {
	Terminal as TerminalIcon,
	Mail as MailIcon,
	Notifications,
} from '@mui/icons-material'
import {
	AppBar,
	Badge,
	Box,
	InputBase,
	styled,
	Toolbar,
	Typography,
	Container,
} from '@mui/material'

import AccountMenu from '/src/components/AccountMenu/index'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	paddingBlock: '.8rem',
})

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
	paddingBlock: '.1rem',
}))

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}))

const BadgeContainer = styled(Badge)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
})

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}))

const Navbar = () => {
	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<StyledToolbar>
					<Typography
						variant='h6'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						SaboyaDev
					</Typography>
					<TerminalIcon
						sx={{
							display: { xs: 'block', sm: 'none' },
							width: '35px',
							height: '35px',
						}}
					/>
					<Search>
						<InputBase placeholder='Search...' />
					</Search>
					<Icons>
						<BadgeContainer
							badgeContent={4}
							color='error'
						>
							<MailIcon />
						</BadgeContainer>
						<BadgeContainer
							badgeContent={10}
							color='error'
						>
							<Notifications />
						</BadgeContainer>
						<AccountMenu />
					</Icons>
					<UserBox>
						<AccountMenu />
						<Typography variant='span'>Jose Luis</Typography>
					</UserBox>
				</StyledToolbar>
			</Container>
		</AppBar>
	)
}
export default Navbar
