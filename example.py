import math
from random import randint

# Index mass body

# weight = int(input())
# height = float(input())

# MBI = (weight // (height**2)) #  Body mass index // Индекс массы тела

# if MBI < 18.5:
#     print('Underweight')
# elif MBI > 18.5 and MBI < 25:
#     print('Normal')
# elif MBI > 25 and MBI < 30:
# print('Overweight')
# elif MBI > 30:
#     print('Obesity')
# else: print('Not worked')
# print(MBI)
# assigment list

# list = [0, 1, 2, 3, 5, 8, 13]
# print(list[list[4]])
# print(list[5])

# Sum of Consecutive Numbers

# fromNum = int(input())
# to = int(input())
# result = (to * (fromNum + to)) / 2

# print(result)

# =========  with "for iterator"


# fromNum = int(input('Enter first number: '))
# to = int(input('Enter second number: '))

# result = range(fromNum, to + 1)

# y = 0

# for x in result:
#     y = x + y

# print("Overall result " + str(y))


# ======  computer


# N = int(input())

# result = (N * (1 + N)) / 2

# print(float(result))


# ======
# x = [1, 2, 6, 2, 0]

# # x.index(6)
# y = x.reverse()

# print(y)

# ===== Formatting.

# nums = [4, 5, 6]
# msg = "Numbers: {0} {1} {2}".format(nums[0], nums[1], nums[2])
# print(msg)

# print("{0}{1}{0}" .format("abra", "cad")) # output abracadabra

# join, replace, startswith, endswith, lower(), upper(), split      split is opposite of join

# print(", ".join(['spam', 'eggs', 'ham']))

# print('Hello', 'world!'.replace('world!', 'Babe')) # Hello babe

# print('This is my day'.startswith('This')) # True

# print('This is my day'.endswith('is')) # False

# b = 'Ok, normally'

# print(b.lower())
# print(b.upper())

# print('spam, banana, ham'.split("a"))  # ['sp', 'm, b', 'n', 'n', ', h', 'm']


#  ====== Searching engine

# def Plus(a, b):
#     c = a + b
#     return c

# print(Plus(1, 3))

# import math

# a = -25
# a = -a

# print(a)


# assigment
# fib = {1: 1, 2: 1, 3: 2, 4: 3}
# print(fib.get(4, 0))

# x = math.trunc(23.2423)

# print(x)

# nums = (55, 44, 33, 22)
# print(min(nums[:2]), abs(-42))

# a = 1

# b = 2

# a, b = b, a

# a = 7

# b = 42

# a, b = b, a


# text = input()
# dict = {}
# #your code goes here

# Problem in sololearn
# text = 'hello'

# dict = {}

# for x in text:
#     counts = text.count(x)
#     dict[x] = counts

# print(dict)
# higher order function
# def my_func(f, arg):
#       return f(arg)

# my_func(lambda x: 2*x*x, 5)

# i = 50

# while i < 151:
#     print(i)
#     i += 1

# i = 13


# while i < 349:
#     print(i)
#     i += 7

# a = [1, 3, 5, 6, 7, 12]
# b = []
# c = []
# for i in a:
#     if i % 2 == 0:
#         b.append(i)
#     else: c.append(i)
# print(b)
# print(c)


# vowels = 'aeiuo'
# a = 'oabsidsusadgefhrfsio'

# n = len(a)

# for i in range(n - 1):
#     if a[i] in vowels:
#         print(a[i]))


# a = []
# n = int(input())
#
# for i in range(n):
#     a.append([0] * n)
#
# for i in range(n):
#     for j in range(n):
#         if i == j:
#             a[i][j] = 10
#         elif i > j:
#             a[i][j] = 3
#         else:
#             a[i][j] = 5
#
# for i in a:
#     print(i)

# a = [
#     [0, 1, 2, 3],
#     [4, 5, 12, 21],
#     [13, 11, 27, 31]
# ]
# for i in range(3):
#     for j in range(4):
#         print(a[i][j], end=' ')
#     print(a[2][1])
#
# a = {1, 2, 3, 4, 5,}
#
# b = {3, 5, 2, 7,}
#
# print(a & b)
#
# dict = {}
#
# s = 'Ivanov Ivan Samara SGU 4 2 4 2 3 5'
#
# c = s.split()
#
# for i in c:
#
#     dict [i] = i
# print(dict)

# factorial

# def factorial(x):
#     pr=1
#     for i in range(2, x+1):
#         pr = pr * i
#     return pr

# for i in range(1, 8):
#         print(i,factorial(i))

# print(factorial(8))

# def sqandper(a, b):
#     mas = []
#     mas.append(a * b)
#     mas.append(2 * (a + b))
#     return mas
# print(sqandper(2, 4))
#
# def factorial(x):
#     if x == 1:            ???? I'll ask this code.
#         return 1
#     else:
#         return x * factorial(x-1)
#
# print(factorial(8))
#
# def power(x, y):
#     if y == 0:
#         return 1
#     else:
#         return x * power(x, y - 1)
#
#
# print(power(2, 3))


# nums = [1, 2, 8, 3, 7]
# res = list( (lambda x: x%2==0, nums))
#
# print(res)
# nums.sort()
#
# print(nums)

# def spell(txt):
# str = "Python"
# reversedString = ''.join(reversed(str))
# print(reversedString)

#
# txt = input()
# spell(txt)

# def rec(x):
#     if x < 4:
#         print(x)
#         rec(x + 1)
#         print(x)
#
#
# rec(1)
#
# def palindrom(x):
#     if len(x) <= 1:
#         return f'Few string length: `{len(x)}`'
#     if x[0] == x[-1]:
#         return palindrom(x[1:-1])
#     return f"Mismatch of start and end lines: `{x}`"
#
# print(palindrom("helloh"))
# print(palindrom("h"))
# print(palindrom("hello"))
#
# a = [12, 34, 3, 21, 32, 12]
#
# print(list(enumerate(a)))

# generators
#
# a = [randint(-10, 10) for i in range(10)]
#
# b = [elem for elem in a if elem%2==0]
#
# print(a)
# print(b)

# a = ['hello', 'Good', 'Morning']
#
#
# b = list(map(len, a))
#
# print(b)

# c = 0
# def addingNum(x):
#     for i in a:
#         c = len(i) + c
# print(c)

# def f(x):
#     return x
#
# s = list(map(f, input()))
#
# for i in s:
#     int(i)
#     print(s)


# nums = [2, 8, 2, 3,]
# target = 5

# def resultNums():
#     for i in range(0, len(nums)):
#         for j in range(i+1, len(nums)):
#             if (nums[i] + nums[j] == target):
#                 print(i, ', ', j)
#             elif nums[i] == target or nums[j] == target:
#                 print('Not matching or has got target nums in list')
#             else: print('Not worked')

# resultNums()

# def create_phone_number(n):
#     m = ''.join([str(elem) for elem in n])
#     return f'({m[:3]}) {m[3:6]}-{m[6:11]}'

# print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

# def accum(s):
#     a = []
#     for i in range(len(s)):
#         list(s[i])
#         a.append(s[i] + s[i] * i)
#     b = '-'.join([str(elem) for elem in a])
#     return b.title()

# print(accum('cwat'))
# print(accum('MjtkuBovqrU'))


# def find_it(seq):
#     result = []
#     for i in seq:
#         x = list(filter(lambda x: x == i, seq))
#         if len(x) % 2 != 0 and not i in result:
#             result.append(i)
#     strings = [str(i) for i in result]
#     a_string = "".join(strings)
#     an_integer = int(a_string)

#     return an_integer

# print(find_it([20,1,-1,2,-2,3,3,3,5,5,1,2,4,-20,4,-1,-2,5,-12]))

# def find_it(seq):
#     for i in seq:
#         if seq.count(i)%2!=0:
#             return i

# print(find_it([20,1,-1,2,-2,3,3,3,5,5,1,2,4,-20,4,-1,-2,5,-12]))


#   list to string python

# s = ['I', 'want', 4, 'apples', 'and', 18, 'bananas']

# listToStr = ' '.join([str(elem) for elem in s])

# print(listToStr)


# list to integer python

# test_list = list(map(int,test_list))


# def array_diff(a, b):
#     a = set(a)
#     b = set(b)
#     a = list(a)
#     b = list(b)

#     for i in a:
#         for j in b:
#             if i == j:
#                 a.remove(j)

#     return a


# print(array_diff([2,3,4], [3]))
# print(array_diff([1, 2], [1]))
# print(array_diff([1,2,2,2,2,2,2,2,2], [2]))

# It can be used as ternary operator of js in python
# a = [1,2,2,2,]

# b = [elem if elem%2==0]

# print( 2 if 3 < 6 else 7)

# def twoSum(array_diff)


# super class inheritance

# class A:
#     def spam(self):
#         print("I'm firs class")

# class B(A):
#     def spam(self):
#         super().spam()
#         print('I\'m second class')

# B().spam()


# zip

# a = [5, 3, 1, 2]

# b = [199, 299, 188, 122]

# c = ['abcs']

# for t1, t2, t3 in list(zip(a, b, c)):
#     print(type(t1))


# sort - method and sorted - function

# a = [5, 3, 4, 1, 2, 6,]

# b = 'Hello Python'

# c = ('Thanks, and you?', 'Hi', 'Good morning', 'How are you?', )

# a.sort()
# c = sorted(a, reverse=False)

# c = sorted(b, reverse=True)

# s = sorted(c)

# print(s)


# methods join and split

# a = '123 156 189'

# print(a.split('1'))

# s = input().split()

# print(s)

# c = ['34', '23', '23', '55', '123']


# s = ''.join(str(i) for i in c)

# z = int(s)

# print(type(z))
# print(z)

# all and any methods

# a = ('', '', 1)
# a = ['', '', 1]
# a = {'', '', 1}

# print(any(a))
# print(all(a))


# fucntion generator

# def gen_f():
#     for i in range(10):
#         yield i

# s = gen_f()

# print(next(s))
# print(next(s))
# print(next(s))
# print(next(s))
# print(next(s))
# print(next(s))


# def high_and_low(numbers): # 1
#     listInt = numbers.split(' ')
#     maxInt = max(list(map(int,listInt)))
#     minInt = min(list(map(int,listInt)))
#     return f'{maxInt} {minInt}'

# def high_and_low(numbers):   # 2
#     nn = [int(s) for s in numbers.split(" ")]
#     return "%i %i" % (max(nn),min(nn))

# print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))


# Decorator

# def decorator(func):

#     def inner():
#         print('Start')
#         func()
#         print('Finish')
#     return inner
# def say():
#     print('=== >> Hello world! << ===')

# def hi():
#     print('=== >> Hello Decorator! << ===')

# d = decorator(say)

# d()

# t = decorator(hi)

# t()

# def header(func):
#     def inner(*args, **kwargs):
#         print('<h1>')
#         func(*args, **kwargs)
#         print('</h1>')
#     return inner


# def table(func):
#     def inner(*args, **kwargs):
#         print('<table>')
#         func(*args, **kwargs)
#         print('</table>')
#     return inner

# def say(name, surname, age):
#     print('Hello', name, surname, age)

# say = table(header(say))
# say('Vasya', 'Ivanovich', 30)

# return list(set("".join(iterable)))

# def unique_in_order(iterable):  # 1
#     new_list = [iterable[0]]
#     for i in iterable:
#         if new_list[-1] != i:
#             new_list.append(i)
#     return new_list


# def unique_in_order(it):  # 2
#     return [it[0]] + [nc for c, nc in zip(it, it[1:]) if c != nc]

# print(unique_in_order('AAAABBBCCDAABBB'))


# def friend(x):     # 1
#     new_list = []
#     for i in x:
#         if len(i) <= 4 and not i.isdigit():
#             new_list.append(i)
#     return new_list

# print(friend(["Jimm", "Cari", "aret", '2' "truehdnviegkwgvke", "sixtyiscooooool"]))

# new_list = [x for x in c if len(x)<=4] # 2

# return filter(lambda name: len(name) == 4, x) # 3


# it = []   # Checking duplicate
# duplicate = False

# for i in users:
#     it.append(i['name'])
#     for c, nc in zip(it, it[1:]):
#         if c == nc:
#             duplicate = True

# if duplicate:
#     print('List has duplicate')
# else: print('List has not duplicate')

# def move_zeros(array): # 1
# list_another = []
# zeros = []
# for item in array:
#     if  item != 0 or type(item) == bool:
#         list_another.append(item)
#     elif item == 0:
#         zeros.append(item)
# return list_another + zeros

# def move_zeros(arr): # 2
#     l = [i for i in arr if isinstance(i, bool) or i!=0]
# return l+[0]*(len(arr)-len(l))

# def move_zeros(array): # 3
#     l = [i for i in array if i != 0 or type(i) == bool]
#     n = list(filter(lambda x: x == 0 and type(x) != bool, array))
#     return l + n

# def move_zeros(array): # 4
#         return sorted(array, key=lambda x: x==0 and type(x) != bool)

# print(move_zeros([False,0,1,0,1,2,1,0,3,"a"]))
# print(move_zeros([0,1,2,1,0]))

# import calendar
# from datetime import date

# year = int(input('Enter year: ' ))
# month = int(input('Enter month: ' ))
# day = int(input('Enter day: ' ))

# year2 = int(input('Enter year: ' ))
# month2 = int(input('Enter month: ' ))
# day2 = int(input('Enter day: ' ))

# x = date(year, month, day)
# y = date(year2, month2, day2)
"""
def tripleSumOfZero(arr):
    x = []
    for item in range(0, len(arr) - 2):
        x.append(arr[item] + arr[item] + arr[item])
    for i in x:
        if i == 0:
            state = True
        else: state = False
    return state, x
print(tripleSumOfZero([1,2,3,4,5,-6]))


def tripleSumOfZero(arr):
    temp = 0
    state = False
    for i in range(0, len(arr)):
        for j in range(1, len(arr)):
            temp = arr[0]
            if temp != i and temp != j and temp + i + j == 0:
                return True
    return temp, state
print(tripleSumOfZero([1,1,-2,4,5,-6]))"""


# def three_sum(nums):
#     result = []
#     nums.sort()
#     for i in range(len(nums)-2):
#         if i> 0 and nums[i] == nums[i-1]:
#             continue
#         l, r = i+1, len(nums)-1
#         while l < r:
#             s = nums[i] + nums[l] + nums[r]
#             if s > 0:
#                 r -= 1
#             elif s < 0:
#                 l += 1
#             else:
#         # found three sum
#                 result.append((nums[i], nums[l], nums[r]))
#         # remove duplicates
#                 while l < r and nums[l] == nums[l+1]:
#                     l+=1
#                     while l < r and nums[r] == nums[r-1]:
#                         r -= 1
#                         l += 1
#                         r -= 1
#                     return result

# x = [4, 3, 0, -3, 2, -1, 2, 0, -2, 0, -4 ]
# print(three_sum(x))

# Write a Python program to remove and print every third number from a list of numbers until the list becomes empty.

# def remove_nums(int_list):
#       #list starts with 0 index
#   position = 3 - 1
#   idx = 0
#   len_list = (len(int_list))
#   while len_list>0:
#     idx = (position+idx)%len_list
#     print(int_list.pop(idx))
#     len_list -= 1
# nums = [10,20,30,40,50,60,70,80,90]
# remove_nums(nums)

# random list strings

# import random
# char_list = ['a','e','i','o','u']
# random.shuffle(char_list)
# print(''.join(char_list))


# numbers = []
# for num in range(123):
#   num=str(num).zfill(3)
# print(num)
# numbers.append(num)


# def frequencies(str):
#     c = str.split()
#     arr = []
#     for i in range(0, len(c) - 1):
#         count = 0
#         if c.index(c[i]) == i:
#             count = count + 1
#             arr.append(c[i])
#             arr.append(count)

#     return arr


# print(frequencies("The fox The fox jump jump fox fox"))


# import random

# def permutations(s):
#     arr = []
#     result = []
#     for i in s:
#         arr.append(i)
    
#     result.append(s)  # adds itself

#     random.shuffle(arr)         # random
#     result.append(''.join(arr))


#     for j in range(0, len(result) - 1):
#         while result[j] != result[j + 1]:
#             random.shuffle(arr)
#             result.append(''.join(arr))
#             break


#     return result


# print(permutations('abab'))

