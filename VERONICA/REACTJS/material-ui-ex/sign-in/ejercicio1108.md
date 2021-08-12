
1 - hacer un formulario de login:
14:47
https://neoland-school.slack.com/files/U024PKB36GL/F02ARM20Y77/image.png


1.1 - Icons añadir iconos al formulario
npm install @material-ui/icons

2 - Hacer una Card que refleje la siguiente imagen:
https://neoland-school.slack.com/files/U024PKB36GL/F02B1GSAALC/image.png

3 - Hacer uso de grids, para posicionar y utilizar los espacios.  Esto para reflejar la siguiente imagen:
https://neoland-school.slack.com/files/U024PKB36GL/F02ASA5CY1K/image.png


En cuanto al error del theming que tenia antes de irnos a comer, es porque estaba haciendo mal la creación del tema. PAra crear un tema hay que llamar al método createTheme pasándole lo que quieres modificar y lo que te devuelva el createTheme es lo que hay que meter en el Provider.
import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/deepOrange';
import green from '@material-ui/core/colors/green';

export const themeInstance = createTheme({
    palette: {
      primary: {
        main: orange[800],
      },
      secondary: {
        main: green[500],
      },
    },
  });


4 - crear un formulario con multiples pasos, tal y como se ve en la figura (no tiene que tener todos los campos, solo que se vea los pasos multiples):
https://neoland-school.slack.com/files/U024PKB36GL/F02B1GX7VPW/image.png