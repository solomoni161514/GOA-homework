numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)
print("After adding 100 to the list:", numbers)

numbers.insert(0, 5)
print("After inserting 5 at the beginning:", numbers)

numbers.remove(30)
print("After removing 30 from the list:", numbers)

numbers.reverse()
print("After reversing the list:", numbers)

index_50 = numbers.index(50)
print("Index of 50:", index_50)

count_20 = numbers.count(20)
print("Count of 20 in the list:", count_20)
