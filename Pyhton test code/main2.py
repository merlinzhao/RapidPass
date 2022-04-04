from bluepy.btle import Scanner, DefaultDelegate
import time
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18,GPIO.OUT)
GPIO.setup(19,GPIO.OUT)




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
User1 = KeytagUser("KEYTAG_1", 1 , "","","","","","","VALID",5.00)
User2 = KeytagUser("KEYTAG_2", 0 , "", "","","","","","",0.00)
User3 = KeytagUser("KEYTAG_3", 0 , "", "","","","","","",0.00)
User4 = KeytagUser("KEYTAG_4", 0 , "", "","","","","","",0.00)


findName = [User1, User2, User3, User4]
#database


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
                        GPIO.ouput(18,GPIO.LOW)
                        
                        #green led on for 3 secounds
                        if database.currentState == 0 :
                            database.currentState = 1
                            database.arrivalTime = time.strftime("%H: %M: %S" , time.localtime() )
                            print(database.arrivalTime)
                            
                        elif database.currentState == 1:
                            database.currentState = 0
                            database.departureTime = time.strftime("%H: %M: %S" , time.localtime() )
                            print(database.departureTime)
                    else:
                        print("this device is unvalid")
                        GPIO.output(19,GPIO.HIGH)
                        time.sleep(3)
                        GPIO.ouput(19,GPIO.LOW)
                         #red led on for 3 secounds
                    
        #print("value: " + str(value))
        #print("BLANK")
        