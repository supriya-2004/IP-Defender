# 🔥 IP Defender  

🚀 **IP Defender** is a lightweight and effective Node.js-based tool to manage network access. It helps you:  
✅ **View connected device IPs** 📜  
✅ **Block unwanted/suspicious IPs** ⛔  
✅ **Unblock previously blocked IPs** 🔓  

This tool automates **Windows Firewall rules** using Node.js and `netsh` commands, making it easy to **monitor and control** network access from the terminal.  

---

## 📌 Features  
🔹 **Get Connected IPs** - View a list of active IP addresses on your local network.  
🔹 **Block IP** - Instantly block any IP to prevent access to your system.  
🔹 **Unblock IP** - Remove firewall restrictions on a specific IP.  
🔹 **Fast & Lightweight** - No heavy dependencies, runs efficiently.  
🔹 **Easy to Use** - Simple command-line interface.  

---

## 🛠️ Installation & Setup  

### **1️⃣ Install Node.js (if not installed)**  
Download & install from [Node.js official website](https://nodejs.org/).  

### **2️⃣ Clone the Repository**  

git clone https://github.com/yourusername/ip-defender.git
cd ip-defender

### **3️⃣ Install Dependencies**  
No additional dependencies are required! Just make sure **Node.js** is installed on your system.  

---

## 🚀 **Usage**  

### **🔍 View Connected Devices**  
To see a list of all connected devices on your network, run:  

`node get_IP.js`

This will fetch the **ARP table** and extract all active IP addresses.  

---

### ⛔ **Block an IP Address**  
1. Open **`block_IP.js`** and change the value of `ipAddressToBlock` to the IP you want to block.  
2. Run the script:  
   
   `node block_IP.js`

This will add a Windows Firewall rule to block inbound traffic from that IP.

### 🔓 Unblock an IP Address
1. Open openIP.js and change the ipAddressToBlock variable to the blocked IP you want to unblock.
2. Run the script:
   
   `node open_IP.js`
3. This removes the firewall rule for the specified IP.

## ⚠️ Important Notes
🔸 **Windows Only** - This tool uses netsh, which is Windows-specific.
🔸 **Admin Privileges Required** - You must run Node.js with Administrator permissions to modify firewall rules.
🔸 **Persistent Blocking** - Blocked IPs remain blocked until manually unblocked.
🔸 **For Educational & Security Use Only** - Misuse of this tool is discouraged.

## 🖥️ Example Output
1. Running get_IP.js
   Connected IP addresses: [ '192.168.1.1', '192.168.1.2', '192.168.1.3' ]

2. Running block_IP.js
   Command stdout: Ok.
   Command stderr: 

3. Running open_IP.js
   Command stdout: Ok.
   Command stderr: 

### 🎯 **Conclusion**  
The **IP Defender** project provides a simple yet effective way to monitor and control network access using Node.js and Windows Firewall rules. With just a few commands, you can:  

✅ **Identify** connected devices using `getIP.js`  
✅ **Block** suspicious or unwanted IP addresses with `blockIP.js`  
✅ **Unblock** previously restricted IPs using `openIP.js`  