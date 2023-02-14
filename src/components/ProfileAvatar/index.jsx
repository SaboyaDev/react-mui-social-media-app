import { Avatar } from '@mui/material'

const ProfileAvatar = () => {
	return (
		<Avatar
			alt='Profile Picture'
			src='https://personal-portfolio-2020.s3.amazonaws.com/profile.jpg'
			sx={{ width: '30px', height: '30px' }}
		/>
	)
}
export default ProfileAvatar
