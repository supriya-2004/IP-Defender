# 🚀 Node.js Script to Block an IP using Windows Firewall

## **1. Importing the `exec` function from `child_process`**
```js
const { exec } = require('child_process');
```
- **Purpose**: The `exec` function allows executing shell/command-line commands from within a Node.js script.
- **Module Used**: `child_process` is a built-in Node.js module that helps run system commands.
- **Why Used Here?**: To run a Windows firewall command for blocking an IP.

---

## **2. Defining the IP Address to Block**
```js
const ipAddressToBlock = '192.168.137.130';
```
- **Purpose**: Stores the IP address of the system that we want to block.
- **Why Hardcoded?**: The user manually sets the IP they want to block.
- **Usage Later**: This value will be used in the firewall rule.

---

## **3. Constructing the Windows Firewall Command**
```js
const command = `netsh advfirewall firewall add rule name="Block IP ${ipAddressToBlock}" dir=in interface=any action=block remoteip=${ipAddressToBlock}`;
```
- **Purpose**: Constructs a command to add a firewall rule to block the specified IP address.
- **Explanation of `netsh` command**:
  - `netsh` → Command-line tool for configuring Windows networking.
  - `advfirewall` → Refers to Windows Advanced Firewall.
  - `firewall` → Specifies firewall settings.
  - `add rule` → Adds a new rule to the firewall.
  - `name="Block IP ${ipAddressToBlock}"` → Names the rule dynamically with the blocked IP.
  - `dir=in` → Applies the rule to incoming network traffic.
  - `interface=any` → Applies to all network interfaces (Wi-Fi, Ethernet, etc.).
  - `action=block` → Blocks the specified traffic.
  - `remoteip=${ipAddressToBlock}` → Specifies the IP to be blocked.

---

## **4. Executing the Command**
```js
exec(command, (err, stdout, stderr) => {
```
- **Purpose**: Runs the constructed command in the system's command-line interface.
- **Callback Function**: Takes three parameters:
  1. `err` → Holds any error if the command fails.
  2. `stdout` → Stores standard output (successful command execution messages).
  3. `stderr` → Stores error messages, if any.

---

## **5. Handling Errors and Outputs**
```js
if (err) {
    console.error(`Error executing command: ${err.message}`);
}
```
- **Purpose**: If an error occurs while executing the command, log the error message.
- **Why Needed?**: To detect execution failures (e.g., if the user lacks admin privileges).

---

## **6. Logging Command Outputs**
```js
console.log(`Command stdout: ${stdout}`);
console.error(`Command stderr: ${stderr}`);
```
- **Purpose**: Prints execution results for debugging.
  - `stdout` (standard output) → Displays success messages.
  - `stderr` (standard error) → Displays error messages, if any.

---

## **💡 Summary**
- **Goal**: Block a specific IP address from communicating with the system using Windows Firewall.
- **How?**
  1. Defines an IP to be blocked.
  2. Constructs a Windows firewall command dynamically.
  3. Executes the command using Node.js.
  4. Handles possible errors and logs output.

---

## **🔧 Potential Improvements**
- **Make IP Dynamic**: Accept the IP from user input instead of hardcoding.
- **Check for Admin Privileges**: `netsh` requires admin access, so ensure the script is run with elevated permissions.
- **Add Removal Option**: A way to remove the rule when needed.
