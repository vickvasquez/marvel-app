import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { ButtonLogin } from '../components/ButtonLogin'
import Logotipo from '../components/Logotipo'

const Home = ({ navigation }) => (
	<Container>
		<StatusBar
			color="blue"
			barStyle="light-content" 
		/>	
		<Logotipo />
		<ButtonLogin 
			textButton="Inicia sesión"
			onPress={() => {
				console.log('Click login')
			}}
		/>
		<ButtonLogin 
			textButton="Continuar"
			onPress={() => {
				navigation.navigate('Dashboard')
			}}
			buttonLighten
		/>
	</Container>
)
export default Home
