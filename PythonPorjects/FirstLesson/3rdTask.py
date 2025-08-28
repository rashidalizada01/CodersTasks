num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

op = input("Enter the operation (+) (*) (-) (/) : ")

if op == "+":
    print(num1 , "+" , num2 , "=", num1 + num2)
elif op == "-":
    print(num1 , "-" , num2 , "=", num1 - num2)
elif op == "/":
    print(num1 , "/" , num2 , "=", num1 / num2)
elif op == "*":
    print(num1 , "*" , num2 , "=", num1 * num2)

else:
    print("Unknown operator")