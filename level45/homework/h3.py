def age (age):
    if age > 18 and age < 30:
        print("adult")
    elif age < 18:
        print("yang")
    if age > 30 and age < 70:
        print("midleage")
    else:
        print("old")
    
age(int(input("enter your age: ")))