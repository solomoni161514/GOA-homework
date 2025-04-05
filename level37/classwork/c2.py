fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print('List 1: ', fruits)
print("element 1: ", fruits[0])
print("element 2: ", fruits[-1])

fruits.append("fig")
print("list 2: ", fruits)

fruits.remove("banana")
print("list 3 :", fruits)

fruits[1] = "blueberry"
print("element 3 :", fruits)

print("Length of the list:", len(fruits))
