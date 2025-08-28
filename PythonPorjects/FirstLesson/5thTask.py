num = int(input("Enter the number: "))
product = 1
for i in range(1 , num + 1):
    product = product * i

print(f"The product of numbers from 1 to {num} is: {product}")