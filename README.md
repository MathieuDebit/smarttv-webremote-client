# smarttv-webremote-client
## Control your Samsung Smart TV from the web!

**smarttv-webremote** is a Javascript/NodeJS app for remotely control your Samsung Smart TV connected on your local network.

This repo hosts the client-side (Javascript) of the app. Check the server-side [here](https://www.github.com/MathieuDebit/smarttv-webremote).


## Getting started

Clone the repo and open the index:

```shell
git clone https://github.com/MathieuDebit/smarttv-webremote-client.git
cd smarttv-webremote-client
open index.html
```

That's it for the client!

![smarttv-webremote-client interface](http://i.imgur.com/ltkDR9b.jpg)


## Usage

All you need then is running the server, which provides data through `socket.io` on port `8080`.


> Check the **server of this app [here](https://www.github.com/MathieuDebit/smarttv-webremote)**.

You can change the port on the client by updating `index.html`:

```html
<script src="http://localhost:8080/socket.io/socket.io.js" charset="utf-8"></script>
```

and `app.js`:
```javascript
var socket = io.connect('http://localhost:8080');
```

Of course you also need to change the port on the server.

> Note to self: make the port an environment variable...

## Contributing

> This project is licensed under the terms of the MIT license.

Feel free to contribute to the project by reporting and/or fixing bugs, improving code quality and adding new features.

1. Fork repository
2. Create a branch following a [successfull branching model](http://nvie.com/posts/a-successful-git-branching-model/)
3. Write your feature/fix
4. Pull request

---
Made with ♥ by [Mathieu Débit](http://www.twitter.com/MathieuDebit).
