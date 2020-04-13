import { Metrics, ApplicationStyles, Fonts, Colors, width, height } from 'Themes'

import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    marginTop: '-3rem',
    height: '9rem',
    width: '9rem'
  }
})