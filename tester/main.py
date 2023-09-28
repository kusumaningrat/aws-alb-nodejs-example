from multiprocessing import Pool
from requests import get

URL = 'http://nodejs-alb-621790754.ap-southeast-1.elb.amazonaws.com/product'

def send_request(val):
   try:
        while True:
            res = get(f'{URL}', timeout=30)
            data = res.json()
            print('Sending request')
            print(data)
   except Exception as e:
        print(e)

if __name__ == '__main__':
    with Pool(50) as p:
        p.map(send_request, URL)