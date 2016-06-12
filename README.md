# Fair Weather Hikers (full)
... is the full version of the fairweatherhikers (cli) application. Fair Weather Hikers is a MEAN stack app for planning hikes using trail information, and weather data.

## Create a secure user profile (or not)!
Signing up is easy and secure! Just enter an  email and the password you
would like to use and that's it!  The password needs to be at least 8 characters.
If the email you enter is already in use, you'll need to use another one.

## Sign in!
Signing in is easy too! It works exactly how you'd think it would!  Enter your email
and password -- if it matches what's in the database, you'll be logged in and whisked away to the main page where you'll see all of the amazing trails!

## Technical Stuff

### Trail Model
The model used for creating each trail includes:

* Trail Name
* Latitude
* Longitude
* Difficulty
* Hike distance
* Elevation gain

### Cloning the app
Fork this repo and clone it on your machine:
```bash
> git clone https://github.com/T4Man/fairweatherhikers_styled
```

### Navigate to project directory
Type this:
```bash
> cd fairweatherhikers_styled
```

### Install packages
Type this:
```bash
> npm install
```
### Start mongodb
Type this:
```bash
> mongod
```
### Pull in database
Open a second terminal window, navigate to the project directory.
```bash
> Type 'cd api_server' and press enter.
> Type 'export APP_SECRET="appsecret"' and press enter.
> Type 'node index.js' and press enter.
```
Open a third terminal window, navigate to the project directory.
Type this:
```bash
> mongoimport --db db --collection trails brotherhikes.json --jsonArray
```

### Run tests
In the third terminal window, navigate to the project directory, and type:
```bash
> gulp
```

### Authors

Written by
[Ali Forman](https://github.com/AlegriaForman),
[Gene Troy](https://github.com/energene),
[James Norton](https://github.com/jimmynono),
[Kris Skelton](https://github.com/kmskelton), and
[Tim Forman](https://github.com/T4Man), for the Code Fellows Full Stack Javascript 401 course.


### Acknowledgements
Thanks to the National Weather Service, ForecastIO, Google Maps and BeautifulWashington.Com

### License

This software is published under the MIT license.

Copyright (c) 2016 by Ali Forman, Gene Troy, James Norton, Kris Skelton, Tim Forman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
