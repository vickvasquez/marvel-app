import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

import styles from './styles'

const ListHeroes = ({ name, title, thumbnail}) => (
	<TouchableHighlight>
		<View style={styles.container}>
			<Image
				resizeMode="cover"
				style={styles.cardImage}
				source={{ uri: `${thumbnail.path}.${thumbnail.extension}`}}
			/>
			<Text style={styles.cardTitle}> { name || title.substring(0,15).concat('...') } </Text>
		</View>
	</TouchableHighlight>
)

export default ListHeroes