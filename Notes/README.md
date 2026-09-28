## 🌐 Internet & Web Fundamentals


<details>
<summary><strong>Quick Topic List</strong></summary>

<br>

> **01** · 🌍 Internet  

> **02** · 🌐 DNS  

> **03** · 🔢 IPv4 vs IPv6 

> **04** · 🔐 HTTP vs HTTPS  

> **05** · 🖥️ Server  

> **06** · 🗄️ Database  

> **07** · 🔌 API
  
> **08** · 📦 JSON  

> **09** · 🔄 How Everything Works Together

<br>

</details>


### 🌍 Internet

**Internet** হলো একটি global network, যেখানে পৃথিবীর বিভিন্ন device, computer ও server একে অপরের সাথে connected থেকে data আদান-প্রদান করে।

সহজভাবে বললে, **Internet হলো এমন একটি network of networks**, যার মাধ্যমে আমরা website access, message send, file transfer, video streaming এবং বিভিন্ন online service ব্যবহার করতে পারি।

<details>
<summary>🧠 Quick Notes</summary>

```text
Internet → পৃথিবীর বিভিন্ন device ও network-এর global connection।

Internet-এর মাধ্যমে →
• Website access করা যায়
• Data send/receive করা যায়
• Online services ব্যবহার করা যায়
• Server-এর সাথে communicate করা যায়
```

</details>

---

<br>












### 🌐 DNS — Domain Name System

**DNS (Domain Name System)** হলো এমন একটি system, যা human-readable **domain name**-কে corresponding **IP address**-এ convert করে।

যেমন, আমরা `google.com` মনে রাখতে পারি, কিন্তু computer/server-এর সাথে communicate করার জন্য IP address প্রয়োজন হয়।

```text
google.com
     ↓
    DNS
     ↓
IP Address
     ↓
Server
```

<details>
<summary>🧠 Quick Notes</summary>

```text
DNS → Domain Name → IP Address

Domain Name → মানুষের জন্য সহজ
IP Address   → Computer/Network-এর জন্য প্রয়োজনীয়

Example:
google.com → DNS → IP Address
```

</details>

---

<br>














### 🔢 IPv4 vs IPv6

**IP Address (Internet Protocol Address)** হলো network-এর মধ্যে একটি device/server-কে identify করার জন্য ব্যবহৃত address।

দুটি প্রধান IP version হলো **IPv4** এবং **IPv6**।

| Feature          | IPv4                        | IPv6                        |
| ---------------- | --------------------------- | --------------------------- |
| Full Form        | Internet Protocol Version 4 | Internet Protocol Version 6 |
| Address Size     | 32-bit                      | 128-bit                     |
| Example          | `192.168.1.1`               | `2001:db8::1`               |
| Address Capacity | তুলনামূলক কম                | অনেক বেশি                   |
| Format           | Decimal                     | Hexadecimal                 |
| Development      | পুরোনো                      | নতুন                        |

<details>
<summary>🧠 Quick Notes</summary>

```text
IPv4 → 32-bit → Example: 192.168.1.1

IPv6 → 128-bit → Example: 2001:db8::1

IPv6 তৈরি করা হয়েছে মূলত IPv4-এর limited address
capacity-এর সমস্যা সমাধানের জন্য।
```

</details>

--- 

<br>













### 🔐 HTTP vs HTTPS

**HTTP (HyperText Transfer Protocol)** হলো browser এবং server-এর মধ্যে web data আদান-প্রদানের একটি protocol।

**HTTPS (HyperText Transfer Protocol Secure)** হলো HTTP-এর secure version, যেখানে data encryption ব্যবহার করা হয়।

```text
HTTP
Browser ───────────→ Server
       Data Transfer

HTTPS
Browser ═══════════→ Server
       Encrypted Data
```

| Feature         | HTTP                        | HTTPS                              |
| --------------- | --------------------------- | ---------------------------------- |
| Full Form       | HyperText Transfer Protocol | HyperText Transfer Protocol Secure |
| Security        | কম secure                   | বেশি secure                        |
| Encryption      | নেই                         | আছে                                |
| Common Port     | 80                          | 443                                |
| Website Example | `http://`                   | `https://`                         |

<details>
<summary>🧠 Quick Notes</summary>

```text
HTTP  → Data transfer করে
HTTPS → Secure + Encrypted data transfer করে

HTTPS = HTTP + Security

Login, password, payment বা sensitive data-এর ক্ষেত্রে
HTTPS অত্যন্ত গুরুত্বপূর্ণ।
```

</details>

---

<br>













### 🖥️ Server

**Server** হলো এমন একটি computer বা computing system, যা অন্য device/client-এর request receive করে এবং প্রয়োজনীয় data বা service provide করে।

যখন আমরা কোনো website visit করি, browser সাধারণত server-এর কাছে request পাঠায়। Server সেই request process করে প্রয়োজনীয় response পাঠায়।

```text
Browser / Client
       ↓
    Request
       ↓
     Server
       ↓
   Processing
       ↓
    Response
       ↓
Browser / Client
```

<details>
<summary>🧠 Quick Notes</summary>

```text
Client → Request পাঠায়
Server → Request process করে
Server → Response পাঠায়
Client → Response receive করে

Server-এ থাকতে পারে:
• Website files
• Application code
• API
• Database connection
• Other resources
```

</details>

---

<br>











### 🗄️ Database

**Database** হলো structuredভাবে data store, manage এবং retrieve করার একটি system।

Application-এর প্রয়োজনীয় user information, products, orders, posts, transactions ইত্যাদি database-এ রাখা যেতে পারে।

```text
Application
     ↓
Database
     ↓
Stored Data
```

উদাহরণ:

```js
{
    id: 101,
    name: "Bayjid",
    email: "bayjid@example.com"
}
```


এ ধরনের data application-এর প্রয়োজন অনুযায়ী database-এ store করা যেতে পারে।

<details>
<summary>🧠 Quick Notes</summary>

```text
Database → Data store ও manage করার system।

Example Data:
• User information
• Product information
• Orders
• Posts
• Transactions

Common Databases:
• MySQL
• PostgreSQL
• MongoDB
• SQLite
```

</details>

---


<br>













### 🔌 API — Application Programming Interface

**API (Application Programming Interface)** হলো এমন একটি interface, যার মাধ্যমে একটি application অন্য application বা server-এর সাথে communicate করে এবং data বা service request করতে পারে।

সহজভাবে:

```text
Frontend
   ↓
 API Request
   ↓
Server
   ↓
Database
   ↓
Server
   ↓
 API Response
   ↓
Frontend
```

উদাহরণ:

```js
fetch("https://example.com/api/users")
    .then(response => response.json())
    .then(data => console.log(data))
```

এখানে `fetch()` ব্যবহার করে API endpoint-এ request পাঠানো হচ্ছে এবং server থেকে response নেওয়া হচ্ছে।

<details>
<summary>🧠 Quick Notes</summary>

```text
API → Application-এর মধ্যে communication করার মাধ্যম।

Request  → Server-এর কাছে data/service চাওয়া
Response → Server থেকে পাওয়া result

API সাধারণত ব্যবহার হয়:
• Data fetch করতে
• Data send করতে
• Application-এর সাথে server communicate করতে
```

</details>

---

<br>

















### 📦 JSON — JavaScript Object Notation

**JSON (JavaScript Object Notation)** হলো structured data আদান-প্রদানের একটি lightweight text format।

API-এর মাধ্যমে server এবং client-এর মধ্যে data exchange করার ক্ষেত্রে JSON খুব common।

Example:

```json
{
    "id": 1,
    "name": "Bayjid",
    "age": 20,
    "skills": ["HTML", "CSS", "JavaScript"]
}
```

JavaScript-এ JSON data সাধারণত object-এর মতো ব্যবহার করা যায়:

```js
const user = {
    id: 1,
    name: "Bayjid"
}

console.log(user.name)
```

<details>
<summary>🧠 Quick Notes</summary>

```text
JSON → Structured data আদান-প্রদানের একটি format।

JSON.stringify()
→ JavaScript Object/Value → JSON String

JSON.parse()
→ JSON String → JavaScript Object/Value

API response-এ JSON খুব common data format।
```

</details>

---

<br>
















### 🔄 How Everything Works Together

একটি সাধারণ website বা web application-এ এই concepts গুলো একসাথে এভাবে কাজ করতে পারে:

```text
User
  ↓
Browser
  ↓
Internet
  ↓
DNS
  ↓
IP Address
  ↓
HTTPS
  ↓
Server
  ↓
API
  ↓
Database
  ↓
Server
  ↓
JSON Response
  ↓
API
  ↓
Browser
  ↓
User
```

<details>
<summary>🧠 One-Line Revision</summary>

```text
Internet → Devices ও networks connect করে।

DNS → Domain Name → IP Address করে।

IPv4 → 32-bit IP address system।

IPv6 → 128-bit IP address system।

HTTP → Web data transfer protocol।

HTTPS → Secure HTTP।

Server → Request receive করে এবং response দেয়।

Database → Data store ও manage করে।

API → Application ও Server-এর মধ্যে communication করে।

JSON → Structured data exchange-এর format।
```

</details>

<br>




### 👨‍💻 About Me

**Bayjid Alom**

> Passionate about learning new technologies and improving my skills through continuous practice and real-world projects.
