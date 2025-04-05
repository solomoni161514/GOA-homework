def simple_calculator(num1, num2, operation):
    if operation == "მიმატება":
        print(num1 + num2)
    elif operation == "გამოკლება":
        print(num1 - num2)
    elif operation == "გამრავლება":
        print(num1 * num2)
    elif operation == "გაყოფა":
        if num2 != 0:
            print(num1 / num2)
        else:
            print("შეცდომა: ნულზე გაყოფა შეუძლებელია")
    else:
        print("შეცდომა: უცნობი ოპერაცია")

simple_calculator(10, 5, "დამატება")
simple_calculator(10, 5, "გამოკლება")
simple_calculator(10, 5, "გამრავლება")
simple_calculator(10, 5, "გაყოფა")
simple_calculator(10, 0, "გაყოფა")
