def greet(name):
    return f"Hello, {name} how are you doing today?"


def opposite(number):
    return -number


def make_negative( number ):
    if number < 0:
        return number
    elif number == 0:
        return number
    else:
        return -number
    


def invert(lst):
    return [-x for x in lst]



def repeat_str(repeat, string):
    return string * repeat