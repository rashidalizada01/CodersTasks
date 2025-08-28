num = int(input("Enter a number for checking : "))
if num == 0:
    print("0 is not divisible by 5.")
elif num % 5 == 0:
    print(num , "is divisible by 5")
else :
    print(num , "is not divisible by 5")