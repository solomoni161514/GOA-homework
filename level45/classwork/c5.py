def check_number(number):
    if number > 0:
        return "რიცხვი დადებითია."
    elif number < 0:
        return "რიცხვი უარყოფითია."
    else:
        return "რიცხვი ნულია."

number = float(input("შეიყვანე რიცხვი: "))

print(check_number(number))