const { exec } = require('child_process');

const ipAddressToBlock = '192.168.137.130'; //add address of system's IP that need to be blocked

const command = `netsh advfirewall firewall add rule name="Block IP ${ipAddressToBlock}" dir=in interface=any action=block remoteip=${ipAddressToBlock}`;

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err.message}`);
    }
    console.log(`Command stdout: ${stdout}`);
    console.error(`Command stderr: ${stderr}`);
});
