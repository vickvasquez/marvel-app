import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

const ButtonLogin = (props) => {
	const { textButton, buttonLighten = false, onPress } = props

	let styleContainer = [styles.container, styles.textButton]

	if (buttonLighten) {
		styleContainer = [styles.containerLighten, styles.textButtonLighten]
	}
	return (
		<TouchableOpacity onPress={onPress} style={styleContainer[0]}>
			<View style={styles.wrapper}>
				{/*
					!buttonLighten &&
					<View style={styles.containerLeft}>
						<Image resizeMode="contain" style={styles.icon} source={require('./imagenes/user-check.png')} />
						<View style={styles.divider} />
					</View>*/
				}
				<Text style={styleContainer[1]}> {textButton} </Text>
			</View>
		</TouchableOpacity>
	)
}

export default ButtonLogin
