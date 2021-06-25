<p align="center">
  <h1 align="center">Discord Rich Presence Editor</h1>
</p>

Hello and welcome to this repository explaining how to create an editable activity on your discord profile.
This repository will be organized in the form of a tutorial with all the steps to make the program work.

<p align="center">
  <h1 align="left">1. Create an Application</h1>
</p>

First you will need to create an application using the Discord [Developer tool](https://discord.com/developers/applications).
Go to this tool and press the New Application button:
<p align="center">
  <img width="200" src="https://cdn.discordapp.com/attachments/706106435943006328/857952819449561128/unknown.png"
</p>


Then go to the Rich Presence tab and import the image you want to have on your activity.


<p align="center">
  <img width="600" src="https://cdn.discordapp.com/attachments/706106435943006328/857959832242094110/unknown.png"
</p>

<p align="center">
  <h1 align="left">2. The Program</h1>
</p>

Then go to a code editor and initialise your project. All you have to do is change the "image" and "clientid" variables!

```javascript
const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'aled',
                large_text: "aled",
            },
            details: ('╚> adieu'),
            buttons: [
                { label: 'Toi aussi?', url: 'https://bit.ly/3j28QgU' }
            ]
        }
      })    
})

client.login({clientId: '781798232447516692'})
console.log('SUCCESS!')
```
 


                                                                                                                                                                                                                                                                                                             
<p align="center">
  <h5 align="center">MRTOBYTE© | 2020-2021/h5>
</p>
