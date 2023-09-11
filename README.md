<div align="center">
  <br />
  <p>
    <a href="https://api2.rambot.xyz"><img src="https://gamearoo.top/ram/ramapi2js.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/q3ycRjBG9q"><img src="https://img.shields.io/discord/1068088656377692170?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ram-api2.js"><img src="https://img.shields.io/npm/v/ram-api2.js.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ram-api2.js"><img src="https://img.shields.io/npm/dt/ram-api2.js.svg?maxAge=3600" alt="npm downloads" /></a>
    
  </p>
  <a href="https://nodei.co/npm/ram-api2.js/"><img src="https://nodei.co/npm/ram-api2.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

> About this package

We understand using ram api 2 can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

v0.x.x are dev builds for v1.0.0 but are marked as final for npm reasons

> Install

`npm i ram-api2.js` or `yarn add ram-api2.js`

> Examples

```javascript
//typescript
import * as ramapi2 from "ram-api2.js";
//javascript
const ramapi2 = require("ram-api2.js");

let token = "token here";

new ramapi2.tokenAsync()
  .loginAsync("test", "test")
  .then((data) => console.log(data)) //data = {success, token, Notice}
  .catch((err) => {});

new ramapi2.tokenAsync()
  .signupAsync("test", "test")
  .then((data) => console.log(data)) // data =  {success, token, Notice}
  .catch((err) => {});

new ramapi2.funAsync(token)
  .birthdayAsync()
  .then((data) => console.log(data)) // data = {text, imageURL}
  .then((err) => {});

new ramapi2.funAsync(token)
  .helloAsync()
  .then((data) => console.log(data)) // data = {text, imageURL}
  .then((err) => {});

new ramapi2.imageAsync(token)
  .nekoparaAsync()
  .then((data) => console.log(data))
  .catch((err) => {});
```

> Missing endpoint

current api version is v1-dev if v1 is out then contact support

ram api endpoints can be found at https://api2.rambot.xyz/docs

> Support

email : support@rambot.xyz

discord: https://discord.gg/q3ycRjBG9q
