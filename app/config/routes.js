import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'

export default StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header:() => null,
		}
	},
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			header: () => null,
		}
	},
})