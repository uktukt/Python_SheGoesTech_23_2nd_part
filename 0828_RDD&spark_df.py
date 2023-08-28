from pyspark.sql import SparkSession

spark = SparkSession.builder.appName('RDDExampleApp').getOrCreate()

test_data = [1,2,3,4,5,6,7,8,9]
rdd = spark.sparkContext.parallelize(test_data)

rdd_squared = rdd.map(lambda x:x * x)

print('\n\n\n\n\n\n')
print('squared RDD : ', rdd_squared.collect())
print('\n\n\n\n\n\n')
