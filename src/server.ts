import 'dotenv/config'
import {app} from './app'

app.listen(process.env.PORT_LISTENER, ()=> {
  console.log(`HTTP Server Running on port ${process.env.PORT_LISTENER}`)
})
