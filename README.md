# Stream app 
live stream app

### config

clone repo, in root dir run: 
```
yarn install
```

in client dir run:
```
yarn install
```

if on windows need to manually install ffmpeg and add path for the exe in config.js 

if not on windows see here: 

https://quantizd.com/building-live-streaming-app-with-node-js-and-react/


### running server

once app packages installed run:
```
node server.js
```


### running OBS

install obs here: 

https://obsproject.com/

once obs is install open the app and use the default settings

in the "Controls" section click "settings" then 'Stream'

in the "Stream" section  the form should have the following values:
```
Service: Custom...
Sever: rtmp://127.0.0.1:1935/live
Stream Key: 
```

then press apply and you should see the the connection being established in your server logs


### running client

run in client dir:
```
yarn start
```

