def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count

lst = [1, 2, 3, 2, 4, 2, 5]
x = count_items(lst, 2)
print(x)
