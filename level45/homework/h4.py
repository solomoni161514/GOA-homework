def even_and_odd_numbers(numbers):
    evens = []
    odds = []
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)
    return evens, odds

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens, odds = even_and_odd_numbers(numbers)
print("ლუწი რიცხვები:", evens)
print("კენტი რიცხვები:", odds)
