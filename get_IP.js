const { exec } = require('child_process');

// Command to get the ARP table which lists connected devices
const command = 'arp -a';

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${stderr}`);
        return;
    }

    // Extract IP addresses from the command output
    const ipAddresses = stdout
        .split('\n')
        .map(line => {
            const match = line.match(/\d+\.\d+\.\d+\.\d+/); // Regex to match IP addresses
            return match ? match[0] : null;
        })
        .filter(ip => ip); // Remove nulls

    if (ipAddresses.length === 0) {
        console.log('No connected devices found.');
    } else {
        console.log('Connected IP addresses:', ipAddresses);
    }
});