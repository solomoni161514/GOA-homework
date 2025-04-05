def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total // len(total)

lst = [1, 2, 3, 4, 5]
result = sum_of_list(lst)
print(result)
