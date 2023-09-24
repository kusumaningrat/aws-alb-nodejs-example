from multiprocessing import Pool
from requests import get,post

URL = 'http://nodejs-alb-621790754.ap-southeast-1.elb.amazonaws.com/product'

def send_request(val):
    while True:
        res = get(f'{URL}')
        data = res.json()
        print('Sending request')
        print(data)

if __name__ == '__main__':
    with Pool(50) as p:
        p.map(send_request, range(50))