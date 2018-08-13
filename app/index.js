import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Search from './screens/Search'

EStyleSheet.build({
  $primaryBlue: '#181818',
  $white: '#fff',
})

export default () => <Search />