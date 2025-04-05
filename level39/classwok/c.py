import random
def shuffle_people (lst):
    random.shuffle(lst)
    grupes = [lst[i:i + 4] for i in range(0, len(lst), 4)]
    return grupes
print(shuffle_people(["ნოდარ ჩოკორაია", "ანდრია ჯანჯულია", "გიორგი", "ხალვაში გაგი", "ანდრია ხორავა", "გიორგი მამუკაშვილი", "ლუკა წულაია", "სოლომოინი ბუჯიაშვილი"]))
