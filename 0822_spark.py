from pyspark.sql import SparkSession
from pyspark.sql.functions import avg

spark = SparkSession.builder.appName("AverageScore").getOrCreate()

data = spark.read.options(delimiter=";").csv("Student_scores.csv",header=True,inferSchema=True)
average_scores = data.groupBy("Name").agg(avg("Score").alias("average_score"))

average_scores.show()
spark.stop()