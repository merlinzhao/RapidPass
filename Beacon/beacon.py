from bluepy.btle import Scanner, DefaultDelegate
import time
import RPi.GPIO as GPIO
import time
import random

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17,GPIO.OUT) #green
GPIO.setup(18,GPIO.OUT) #red
GPIO.setup(2,GPIO.IN)


GPIO.output(17,GPIO.LOW)
GPIO.output(18,GPIO.LOW)



class Route:
    def __init__(self, Arrival_Location, Departure_Location, Distance):
        self.Arrival_Location = Arrival_Location;
        self.Departure_Location = Departure_Location;
        self.Distance = Distance;
        

        
    def randLocation(self):
        
        simulateRoute = (random.choice(arr))
        return simulateRoute
        
        

class KeytagUser:
    
    numUsers = 0
    
    def __init__(self,name,currentState,arrivalLocation, arrivalTime, arrivalDate, departureLocation,
                 departureTime, departureDate, validity,balance):

        self.name = name
        self.currentState = currentState
        self.arrivalLocation = arrivalLocation
        self.arrivalTime = arrivalTime
        self.arrivalDate = arrivalDate
        self.departureLocation = departureLocation
        self.departureTime = departureTime
        self.departureDate = departureDate
        self.validity = validity
        self.balance = balance
        #numUsers += 1

    def saveTime(self):
        t = time.localtime()
        current_time = time.strftime("%H: %M: %S" , t)
        return current_time

# database     
User1 = KeytagUser("10001", 1 , "","","","","","","VALID",10.00)
User2 = KeytagUser("10002", 0 , "", "","","","","","",0.00)
User3 = KeytagUser("10003", 0 , "", "","","","","","",0.00)
User4 = KeytagUser("10004", 0 , "", "","","","","","",0.00)

Route1 = Route("B","A",1.00)
Route2 = Route("C","A",2.00)
Route3 = Route("D","B",2.50)
Route4 = Route("F","C",5.00)
Route5 = Route("E","D",1.50)

mapRoute = [Route1, Route2, Route3, Route4, Route5]
pickedRoute = (random.choice(mapRoute))
findName = [User1, User2, User3, User4]
#database

seconds = 60;
start_time = time.time()

while True:
    current_time = time.time()
    elapsed_time = current_time - start_time
    
    
    scanner = Scanner()
    devices = scanner.scan(10.0)


    for dev in devices:
        
        for (adtype, desc, value) in dev.getScanData():
            
            if dev.rssi > -60:
                for database in findName:
                    if database.name == value:
                        print("found " + str(value) + " in database ")
                        print("RSSI: " + str(dev.rssi))
                        
                        if database.validity == "VALID" and database.balance >= 5.00:
                            print("this device is valid")
                            GPIO.output(18,GPIO.HIGH)
                            time.sleep(3)
                            GPIO.output(18,GPIO.LOW)
                            
                            #green led on for 3 secounds
                            if database.currentState == 0 :
                                database.departureLocation = pickedRoute.Departure_Location
                                database.departureTime = time.strftime("%H: %M: %S" , time.localtime() )
                                database.currentState = 1
                                
                                print("Current Balance = " + str(database.balance))
                                
                            elif database.currentState == 1:
                                database.currentState = 0
                                database.arrivalLocation = pickedRoute.Arrival_Location
                                database.balance = database.balance - (pickedRoute.Distance*2)
                                database.arrivalTime = time.strftime("%H: %M: %S" , time.localtime() )
                                
                                print("Ending Balance = " + str(database.balance))
                                print("Departure Location : " + database.departureLocation)
                                print("Departure Time: " + database.departureTime)
                                print("Arrival Location :" + database.arrivalLocation)
                                print("Arrival Time : " + database.arrivalTime)  
                                
                                
                        else:
                            print("this device is unvalid")
                            GPIO.output(17,GPIO.HIGH)
                            time.sleep(3)
                            GPIO.output(17,GPIO.LOW)
                         #red led on for 3 secounds
            
    if elapsed_time > seconds:
        print("Device has stopped scanning")
        break
        #print("value: " + str(value))
        #print("BLANK")
        
