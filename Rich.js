const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'Image_name',
                large_text: "Image_text",
            },
            details: ('Details'),
            buttons: [
                { label: 'Name', url: 'Short Link' }
            ]
        }
      })    
})

client.login({clientId: 'clientid in there'})
console.log('Successfully launched!')
