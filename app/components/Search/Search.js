import React from 'react'
import { View, Text, TouchableHighlight, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'



const Search = ({ children }) => (
	<View style={styles.container}>
		<View style={styles.header}>
	        <Icon 
	            name="search"
	            color="grey"
	            size={18}
	            style={styles.iconSearch}
	        />
			<TextInput
				style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="grey"
                keyboardAppearance="dark"
                autoFocus={true}
			/>
			<TouchableHighlight>
	            <Icon 
	                name="times-circle"
	                color="grey"
	                size={18}
	                style={styles.iconClose}
	            />
	        </TouchableHighlight>

			<TouchableHighlight>
				<View>
					<Text  style={styles.cancelButton}>Cancelar</Text>
				</View>
			</TouchableHighlight>
		</View>
		{ children }
	</View>
)

export default Search
