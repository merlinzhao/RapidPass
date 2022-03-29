from bluepy.btle import Scanner, DefaultDelegate
import time



class KeytagUser:
    
    numUsers = 0
    
    def __init__(self,name,currentState,arrivalLocation, arrivalTime, arrivalDate, departureLocation,
                 departureTime, departureDate, validity):

        self.name = name
        self.currentState = currentState
        self.arrivalLocation = arrivalLocation
        self.arrivalTime = arrivalTime
        self.arrivalDate = arrivalDate
        self.departureLocation = departureLocation
        self.departureTime = departureTime
        self.departureDate = departureDate
        self.validity = validity
        #numUsers += 1

    def saveTime(self):
        t = time.localtime()
        current_time = time.strftime("%H: %M: %S" , t)
        return current_time

# database     
User1 = KeytagUser("KEYTAG_1", 1 , "","","","","","","VALID")
User2 = KeytagUser("KEYTAG_2", 0 , "", "","","","","","")
User3 = KeytagUser("KEYTAG_3", 0 , "", "","","","","","")
User4 = KeytagUser("KEYTAG_4", 0 , "", "","","","","","")


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
                    
                    if database.validity == "VALID":
                        print("this device is valid")
                        if database.currentState == 0 :
                            database.currentState = 1
                            database.arrivalTime = time.strftime("%H: %M: %S" , time.localtime() )
                            print(database.arrivalTime)
                            
                        elif database.currentState == 1:
                            database.currentState = 0
                            database.departureTime = time.strftime("%H: %M: %S" , time.localtime() )
                            print(database.departureTime)
        #print("value: " + str(value))
        #print("BLANK")
        
