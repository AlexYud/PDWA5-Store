import { io } from 'socket.io-client'

var url = "https://pdwstoreapi.herokuapp.com/"

export default io(url, { transports: ['websocket'], reconnection: true})