# Dev by Sonthaya Nongncuh, microBlock IDE
from time import sleep
import network
import usocket

_userid = None
_key = None

def config(ssid, passw, userid, key):
    global _userid, _key
    _userid = userid
    _key = key

    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, passw)
    while not wlan.isconnected():
        print("WiFi Connecting")
        sleep(0.1)
    print("WiFi Connected")

def _get(url):
    s = usocket.socket()

    ai = usocket.getaddrinfo("www.sensesiot.com", 4000)
    s.connect(ai[0][-1])

    s.write(b"GET {} HTTP/1.1\r\n".format(url))
    s.write(b"Host: www.sensesiot.com:4000\r\n")
    s.write(b"Connection: close\r\n")
    s.write(b"\r\n")
    ros = s.read()
    s.close()
    return ros

def send(slotnum, data):
    _get("/send/{}/{}/{}/{}".format(_userid, _key, slotnum, data))

def getDigitalControl(controlport):
    ros = _get("/getdigitalstatus/{}/{}/{}".format(_userid, _key, controlport))
    return ros[-2:] == b"on"
