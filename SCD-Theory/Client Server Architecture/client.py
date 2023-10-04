#importing socket module to establish connection
import socket

#creating socket object
s = socket.socket()

#defining port number
port = 56789

#connecting to server
s.connect(('127.0.0.1',port))

#receiving message from server and decoding it to string
print(s.recv(1024).decode())

#closing connection with server
s.close()