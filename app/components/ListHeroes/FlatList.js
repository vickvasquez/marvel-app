import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { ListHeroes, Separator } from './'

import styles from './styles'

const FlatListItem = ({ data, title }) => (
	<View>
		<Text style={styles.sectionTitle}> { title }</Text>
		<FlatList
			data={data}
			renderItem={({ item }) => <ListHeroes { ...item } />}
			keyExtractor={(item) => item.id}
			numColumns={3}
			ItemSeparatorComponent={() => <Separator />}
		/>
	</View>
)

export default FlatListItem