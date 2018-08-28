# f1 = open("/Users/gd/Desktop/data.csv", "r")
# f2 = open("/Users/gd/Desktop/data2.csv", "w")
# count = 0
# for line in f1:
# 	print count
# 	count = count + 1

# 	a = line.split(" ")
# 	del a[0]
# 	newLine = ' '.join(a)
# 	f2.write(newLine)
# f1.close()
# f2.close()


# f1 = open("/Users/gd/Desktop/data2.csv", "r")
# count = 0
# num = 0
# for line in f1:

# 	a = line.split(" ")
# 	if (len(a) != 18):
# 		num = num + 1
# 		print count
# 	count = count + 1

# print num
# f1.close()

f1 = open("/Users/gd/Desktop/data2.csv", "r")
f2 = open("/Users/gd/Desktop/data5.csv", "w")
count = 0
for line in f1:
	print count
	count = count + 1

	if (count > 200000):
		f2.write(line)

f1.close()
f2.close()


