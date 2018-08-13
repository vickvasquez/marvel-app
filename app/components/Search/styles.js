import { Dimensions} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
const {width, height} = Dimensions.get('window')

const styles = EStyleSheet.create({ 
	container: {
		backgroundColor: '$primaryBlue',
		flex:1,
	},
	header: {
		height: 40,
		backgroundColor: '#181818',
		borderBottomWidth: 10,
		borderColor: '#3a3a3a',
		flexDirection: 'row',
		marginBottom: 1,
		alignItems: 'center',
		position: 'relative',
		marginTop: 20,
	},
	textInput: {
		width: width - (width / 4),
        height: 40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
        color: 'grey'
	},
	cancelButton: {
		color: '$white',
	},
	iconSearch: {
		position: 'absolute',
		left:15,
		top: 5,
		zIndex: 1,
	},
	iconClose: {
		position: 'absolute',
		right: 20,
		top: 5,
		zIndex: 1,
	}
})

export default styles
