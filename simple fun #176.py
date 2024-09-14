def reverse_letter(st):
    final = []
    for i in st:
        if i.isalpha():
            final.append(i)
    return "".join(final[::-1])