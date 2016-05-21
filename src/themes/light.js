// import the base theme
import {
  red500,
  red700,
  red900,
  deepPurple500
} from 'material-ui/styles/colors'

export default function light() {
  return {
    palette: {
      primary1Color: red500,
      primary2Color: red700,
      primary9Color: red900,
      accent1Color: deepPurple500,
      background1Color: 'whitesmoke',
      pickerHeaderColor: red500,
    },
  }
}
