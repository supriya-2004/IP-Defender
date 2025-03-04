# 📜 get_IP Node.js : Fetching Connected Devices using ARP

## 📌 Overview
This JavaScript code (Node.js) executes a system command to fetch the ARP (Address Resolution Protocol) table and extracts the connected IP addresses from the output.

---

## 🛠️ 1. Importing `exec` from the `child_process` module
```js
const { exec } = require('child_process');
```
- `child_process` is a Node.js module that allows us to execute system commands.
- `exec` is a function provided by this module to execute shell commands asynchronously.

---

## 🖥️ 2. Defining the Command
```js
const command = 'arp -a';
```
- The `arp -a` command retrieves the ARP table, listing all devices connected to the local network with their IP and MAC addresses.
- This works on **Windows**; for **Linux/macOS**, the command would be `arp -n`.

---

## 🚀 3. Executing the Command
```js
exec(command, (err, stdout, stderr) => {
```
- `exec(command, callback)` runs the command in the system shell.
- The callback function receives three parameters:
  - `err`: Contains error details if the command execution fails.
  - `stdout`: Captures the command’s output (ARP table).
  - `stderr`: Captures error messages (if any).

---

## ⚠️ 4. Handling Errors
```js
if (err) {
    console.error(`Error executing command: ${stderr}`);
    return;
}
```
- If there's an error executing the command, it logs the error message from `stderr` and exits the function.

---

## 🔍 5. Extracting IP Addresses
```js
const ipAddresses = stdout
    .split('\n')  // Split the output into lines
    .map(line => {
        const match = line.match(/\d+\.\d+\.\d+\.\d+/); // Regex to match IPv4 addresses
        return match ? match[0] : null; // Extract IP if matched, otherwise return null
    })
    .filter(ip => ip); // Remove null values
```
- `stdout.split('\n')`: Converts the command output into an array of lines.
- `.map(line => { ... })`: Iterates through each line and applies a **regular expression (regex)** to extract IPv4 addresses.
  - `\d+\.\d+\.\d+\.\d+` matches standard IPv4 addresses (e.g., `192.168.1.1`).
  - If a match is found, it returns the IP address; otherwise, it returns `null`.
- `.filter(ip => ip)`: Removes any `null` values from the array.

---

## 📋 6. Displaying the Results
```js
if (ipAddresses.length === 0) {
    console.log('No connected devices found.');
} else {
    console.log('Connected IP addresses:', ipAddresses);
}
```
- If the extracted IP list is empty, it prints **"No connected devices found."**
- Otherwise, it logs the detected **IP addresses**.

---

## 🎯 Overall Functionality
1. Executes the `arp -a` command to get the list of connected devices.
2. Parses the command output to extract IP addresses.
3. Displays the **IP addresses** of connected devices on the local network.
