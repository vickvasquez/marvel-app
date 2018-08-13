import { StyleSheet } from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	cardImage: {
		width: 130,
		height: 200,
	},
	cardTitle: {
		backgroundColor:'rgba(0,0,0,.5)',
		color:'$white',
		textAlign: 'center',
		fontWeight:'400',
		position:'absolute',
		paddingVertical:10,
		fontSize:14,
		left:0,
		bottom:0,
		right:0,
	},
	separator: {
		width: StyleSheet.hairlineWidth,
		height:200,
		backgroundColor: '$white',
	},
	sectionTitle: {
		color: '$white',
		fontSize: 18,
		fontWeight:'700',
		paddingVertical: 15
	}
})

export default styles
