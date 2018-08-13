import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import md5 from 'js-md5'

import { Container } from '../components/Container'
import { FlatList } from '../components/ListHeroes'
import { Search } from '../components/Search'

const PUBLIC_KEY = '6fc0d2900e690e135aeef2f42678fa99'
const PRIVATE_KEY = '04cb6550a018a5bb6870f0d03d6db1cdb4cc4587'
const API_BASE ='https://gateway.marvel.com/v1/public/'

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			data: [],
		}
	}

    async componentDidMount() {
		const timestamp = Number(new Date())

        const hash = md5.create()

        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        const params = `ts=${timestamp}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        
        const response = await fetch(`${API_BASE}/series?${params}`)

        const { data } = await response.json()
        this.setState({
        	loading: !this.state.loading,
        	data: data.results,
        })
	}

	render() {
		return (
			<Container>
				{
					this.state.loading ?
						<ActivityIndicator size="large" color="#fff" />
					:
					<View>
						<Search />
						<FlatList
							data={this.state.data}
							title="Populares"
						/>
					</View>
				}
			</Container>
		)
	}
}

export default Dashboard
