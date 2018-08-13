import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

const HeroesList = ({ item }) => {
	return (
		<View>
			<Image
				style={{height: 50, width: 50, borderRadius: 25}}
				source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} 
			/>
	        <Text 
	        	style={{marginLeft: 10}}
	        >
	        	{item.name}
	        </Text>
		</View>
	)
}

export default HeroesList