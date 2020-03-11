import asyncio
import websockets

async def hello():
    uri = "ws://localhost:10101"
    async with websockets.connect(uri) as websocket:
        while True:
            name = str(input("Eu >> "))
            await websocket.send(name)
            if name == 'quit':
                websocket.send(name)
                break
            await websocket.send(name)
            greeting = await websocket.recv()
            print("Bot >> {}".format(greeting))

asyncio.get_event_loop().run_until_complete(hello())