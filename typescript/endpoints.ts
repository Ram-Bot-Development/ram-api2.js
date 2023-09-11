import { Logger } from "@classycrafter/super-logger";
import axios from "axios";

const logger = new Logger({name: "Ram Bot Development", timezone: "America/New_York", tzformat: 12, writelogs: false, colored: true, custom: {
  character: "*",
  gray: "#bbbbbb",
  namecolor: "#ff0000",
  processcolor: "#ff6400",
  titlecolor: "#00ff78",
  textcolor: "#00ff8f",
  datecolor: "#00a6ff"
}, colors: {
  grey: '#bbbbbb',
  gray: '#4C4C4C',
  blue: '#48ACF8',
  loggernamecolor: '#F2C5E0',
  processcolor: '#D43790',  info: {
    color: '#59E77D',
    dark: '#11cc37',
    background: '#D2EED9',
    highlight: false,
},
debug: {
    color: '#68E3DF',
    dark: '#13aba4',
    background: '#D5F5F4',
    highlight: false,
},
warn: {
    color: '#F2D349',
    dark: '#c9a81b',
    background: '#FAEFBB',
    highlight: false,
},
error: {
    color: '#F6545C',
    dark: '#dc222c',
    background: '#FACBCD',
    highlight: false,
},
fatal   : {
    color: '#F71111',
    dark: '#9b0000',
    background: '#FAACAC',
    highlight: true,
}}})

export class imageAsync {
  
  private token: string;
  constructor(token: string) {
    this.token = token;
  }
  nekoparaAsync(version?: string): Promise<{imageURL: string}> {
    return new Promise(async (resolve, reject) => {
      let baseUrl = "https://api2.rambot.xyz/nekopara";

      if(version) baseUrl = baseUrl + `?versionOverride=${version}`
   
      await axios.get(baseUrl, {headers: {"Authorization": `Bearer ${this.token}`}}).then(data => {

        if(data.data.error) {
          logger.error(data.data.error || data.data, "ram-api2")
          logger.error("ram-api2 ran into a problem", "ram-api2.js")
          reject(data.data.error)
          return;
        }
          resolve(data.data);
        }).catch(error => {
          if(error.response.data === "Forbidden") {
            logger.error("Invalid Token", "ram-api2");
          logger.error("ram-api2 ran into a fatal error", "ram-api2.js");
          
          reject(error.response.data)
         

          } else {
           
            logger.error(error.response.data.error || error.response.data, "ram-api2");
            logger.error("ram-api2 ran into a error", "ram-api2.js");
            
            reject(error.response.data)
            
          
          }


          
        })
      
    })
 
    
 
  }
}


export class funAsync {
  
  private token: string;
  constructor(token: string) {
    this.token = token;
  }
 
  birthdayAsync(version?: string): Promise<{text: string, imageURL: string}> {
    return new Promise(async (resolve, reject) => {
      let baseUrl = "https://api2.rambot.xyz/birthday";

      if(version) baseUrl = baseUrl + `?versionOverride=${version}`

      await axios.get(baseUrl, {headers: {"Authorization": `Bearer ${this.token}`}}).then(data => {

        if(data.data.error) {
          logger.error(data.data.error, "ram-api2")
          logger.error("ram-api2 ran into a problem", "ram-api2.js")
          reject(data.data.error)
          return;
        }
          resolve(data.data);
        }).catch(error => {
          if(error.response.data === "Forbidden") {
            logger.error("Invalid Token", "ram-api2");
          logger.error("ram-api2 ran into a fatal error", "ram-api2.js");
          
          reject(error.response.data)
         

          } else {
           
            logger.error(error.response.data.error || error.response.data, "ram-api2");
            logger.error("ram-api2 ran into a error", "ram-api2.js");
            
            reject(error.response.data)
            
          
          }
        })
    })
  }
  helloAsync(version?: string): Promise<{text: string, imageURL: string}> {
    return new Promise(async (resolve, reject) => {
      let baseUrl = "https://api2.rambot.xyz/hello";

      if(version) baseUrl = baseUrl + `?versionOverride=${version}`

      await axios.get(baseUrl, {headers: {"Authorization": `Bearer ${this.token}`}}).then(data => {

        if(data.data.error) {
          logger.error(data.data.error, "ram-api2")
          logger.error("ram-api2 ran into a problem", "ram-api2.js")
          reject(data.data.error)
          return;
        }
          resolve(data.data);
        }).catch(error => {
          if(error.response.data === "Forbidden") {
            logger.error("Invalid Token", "ram-api2");
          logger.error("ram-api2 ran into a fatal error", "ram-api2.js");
          
          reject(error.response.data)
         

          } else {
           
            logger.error(error.response.data.error || error.response.data, "ram-api2");
            logger.error("ram-api2 ran into a error", "ram-api2.js");
            
            reject(error.response.data)
            
          
          }
        })
    })
  
}
}



export class tokenAsync {
  constructor() {}

 
  async loginAsync(username: string, password: string): Promise<{success: Boolean, token: String, Notice: String}> {
    username = username.toLowerCase()
    return new Promise(async (resolve, reject) => {
        await axios.post("https://api2.rambot.xyz/users/login", {"email": `${username}`.toLowerCase(), "password": `${password}`}).then(data => {

        if(data.data.error) {
          logger.error(data.data.error, "ram-api2")
          logger.error("ram-api2 ran into a problem", "ram-api2.js")
          reject(data.data.error)
          return;
        }
          resolve(data.data);
        }).catch(error => {
          logger.error(error.response.data.error, "ram-api2");
          logger.error("ram-api2 ran into a error", "ram-api2.js");
          
          reject(error.response.data)
        })
    });
  }
  /**
   *
   * @param {String} username - The username to login with
   * @param {String} password  - The password to login with
   * @returns {Promise<{success: Boolean, token: String, Notice: String}>} - Returns the token
   */
  async signupAsync(username: string, password: string): Promise<{success: Boolean, token: String, Notice: String}> {

    username = username.toLowerCase()



    return new Promise(async (resolve, reject) => {
      await axios.post("https://api2.rambot.xyz/users/signup", {"email": `${username}`, "password": `${password}`}).then(data => {

      if(data.data.error) {
        logger.error(data.data.error, "ram-api2")
        logger.error("ram-api2 ran into a problem", "ram-api2.js")
        reject(data.data.error)
        return;
      }
        resolve(data.data);
      }).catch(error => {
        logger.error(error.response.data.error, "ram-api2");
        logger.error("ram-api2 ran into a error", "ram-api2.js");
        
        reject(error.response.data)
      })
    });
  }
}

