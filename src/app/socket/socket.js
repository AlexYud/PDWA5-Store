import { io } from 'socket.io-client'

var url = "ws://localhost:3000/"

export default io(url, { transports: ['websocket'], reconnection: true})