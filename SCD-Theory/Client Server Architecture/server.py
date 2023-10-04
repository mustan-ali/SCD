#importing socket module to create sockets
import socket

#creating socket object
s = socket.socket()
print("Socket created successfully")

#defining port number
port = 56789

#binding ip address and port number to socket
s.bind(('',port))
print(f"Socket binded to {port}")

#listening to socket for connection request, maximum 5 connection requests queued
s.listen(5)
print("Socket is listening")


while True:
    #accepting connection request
    c,addr = s.accept()
    print(f"Got connection from {addr}")
    message = "Thank you for connecting"

    #sending message to client after encoding it to bytes
    c.send(message.encode())

    #closing connection with client
    c.close()