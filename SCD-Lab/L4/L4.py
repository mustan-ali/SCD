#Array operation to find max and min
arr = [1,2,3,4]

print(max(arr))
print(min(arr))


#Prime number in range 1 to 100
for num in range (1, 100):
   if (num>1):     
        for i in range(2,num):         
            if (num % i) == 0:
                break
        else:
            print(num, end=" ")


#Palindrome check
def pc(s):
    rs = ''.join(reversed(s))
    if s == rs:
        print("palindrome")
    else:
        print("not a palindrome")

pc("racecar")        