import requests

url = "https://rapidpass-express.herokuapp.com/trip/newtrip"

tripData = {"tagID": 10001,  "station": "test_station",
            "vehicle": "test_bus", "fareCost": 3}
r = requests.post(url, data=tripData)
recieved = r.json()

print(recieved)

string = "11111"

string = int(string)
print(string)
