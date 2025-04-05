def reverse_list(items):
    reversed_items = []
    for item in items:
        reversed_items.insert(0, item)
    return reversed_items

lst = [1, 2, 3, 4, 5]
result = reverse_list(lst)
print(result)
