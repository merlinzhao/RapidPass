import pyodbc
import sqlite3
from google.cloud import storage
import mysql.connector
import sys
import pandas as pd
import numpy as np
import time

# helpful things
currentDate = time.strftime('%Y-%m-%d')
print(currentDate)

cnx = mysql.connector.connect(
    user="root", password="Rapidpass123*", host="104.197.129.199", database="Rapidpass", autocommit=True)

cursor = cnx.cursor()
query1 = ("select * from TEST_TABLE")
cursor.execute(query1)
frame = pd.DataFrame(cursor.fetchall())
print(frame.head())

for i in frame.intertuples():
    print(i)

# example for witing into database
writeTestQuery = (
    "INSERT INTO TEST_TABLE (firstName, lastName, dateCreated, email, phoneNumber) VALUES (%s, %s, %s, %s,%s)")
val = ("Merlin", "Zhao", currentDate, "test@mail.com", "7780000000")
# cursor.execute(writeTestQuery, val)
# cnx.commit  # commit changes in query, or else not written into database
# In the .connect() method, we specify an autocommit. Hence we do not need a commit statement at the end

cnx.close()  # close SQL connection


# conn = pyodbc.connect(driver='{MySQL ODBC 8.0 Unicode Driver}',
#                       server='104.197.129.199,3306',
#                       database='rapidpass',
#                       uid='root',
#                       pwd='Rapidpass123*')


# cursor = conn.cursor()
