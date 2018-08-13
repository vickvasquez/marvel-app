import React from 'react'

import { Image, View } from 'react-native'

import styles from './styles'

const Logotipo = () => (
	<View style={styles.container}>
		<Image
			style={styles.imageLogotipo}
			source={require('./imagenes/the-avengers.png')}
			resizeMode="contain"
		/>
	</View>
)

export default Logotipo
