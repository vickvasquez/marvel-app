import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'

const HEIGHT_BUTTON = 48

export default EStyleSheet.create({
	container: {
		alignItems: 'center',
		borderColor: '$white',
		borderWidth:1,
		borderRadius: 5,
		width: 250,
	},
	containerLighten: {
		alignItems: 'center',
		marginTop: 10,
		width: 250,
	},
	wrapper: {
		height: HEIGHT_BUTTON,
		flexDirection: 'row',
		alignItems: 'center',
	},/*
	containerLeft: {
		alignItems:'center',
		flexDirection: 'row',
	},
	divider: {
		width: StyleSheet.hairlineWidth,
		height: HEIGHT_BUTTON /2,
		marginHorizontal: 7,
		backgroundColor: '$white',
	},
	icon: {
		width:20,
	}
	*/
	textButton: {
		fontSize:16,
		color: '$white',
	},
	textButtonLighten: {
		fontSize:14,
		color: '$white',
	},

})
