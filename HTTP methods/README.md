## 🌐 HTTP Methods

> **HTTP Methods** হলো এমন কিছু নির্দেশনা, যার মাধ্যমে Client Server-কে জানায় সে কী ধরনের কাজ করতে চায়।

<details>
<summary>❓ HTTP Status Codes</summary>
<br>

**200 — OK** → The request was successful.

**301 — Moved Permanently** → The resource has been permanently moved to a new URL.

**302 — Found** → The resource has been temporarily moved to a different URL.

**404 — Not Found** → The requested resource could not be found on the server.

**500 — Internal Server Error** → The server encountered an unexpected problem.

**503 — Service Unavailable** → The server is temporarily unable to handle the request.

</details><br>

---

[🔗 Usage Guide - Placeholder](https://jsonplaceholder.typicode.com/guide/)

API-এর সাথে কাজ করার সময় আমরা বিভিন্ন HTTP Method ব্যবহার করি।  
যেমন — **data নেওয়া, নতুন data তৈরি করা, data update করা এবং data delete করা।**

---

## 🚀 HTTP Request Flow

    Client
       │
       │ HTTP Request
       │ Method + URL + Data
       ▼
    Server
       │
       │ HTTP Response
       │ Status + Data
       ▼
    Client

সহজভাবে:

> **Client request পাঠায় → Server কাজ করে → Server response পাঠায়**

---

### 📌 প্রধান ৫টি HTTP Method

| Method | কী করে? | সহজভাবে |
|:------:|:--------|:---------|
| **GET** | Server থেকে data নেয় | Data নেওয়া |
| **POST** | নতুন data তৈরি করে | Data তৈরি করা |
| **PUT** | সম্পূর্ণ data update/replace করে | পুরোটা বদলানো |
| **PATCH** | নির্দিষ্ট অংশ update করে | কিছু অংশ বদলানো |
| **DELETE** | Data মুছে ফেলে | Data delete করা |


### 🧠 সহজে মনে রাখার উপায়

    GET     → নেওয়া
    POST    → তৈরি করা
    PUT     → পুরোটা বদলানো
    PATCH   → কিছু অংশ বদলানো
    DELETE  → মুছে ফেলা

---

<details>
<summary>❓ GET — Data নেওয়া</summary>

<br>

### GET কী?

**GET** হলো এমন একটি HTTP Method, যার মাধ্যমে **Server থেকে data চাওয়া বা নেওয়া হয়।**

সহজভাবে:

> **GET → Server থেকে data নেওয়ার জন্য request পাঠানো হয়।**

### Basic Request

    GET /users

এর অর্থ:

    "Server, আমাকে users-এর data দাও।"

### JavaScript Example

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

এখানে আমরা Server-এর কাছে users-এর data চাচ্ছি।

### GET Request Flow

    Client
       │
       │ GET /users
       ▼
    Server
       │
       │ Users Data
       ▼
    Client

### GET কোথায় ব্যবহার হয়?

- Users-এর list নেওয়ার জন্য
- Products-এর data নেওয়ার জন্য
- কোনো নির্দিষ্ট user-এর information নেওয়ার জন্য
- API থেকে data load করার জন্য
- Posts বা comments নেওয়ার জন্য

### Example Endpoints

    GET /users
    GET /users/1
    GET /products
    GET /posts/10

</details>

<br>

---

<details>
<summary>❓ POST — নতুন Data তৈরি করা</summary>

<br>

### POST কী?

**POST** হলো এমন একটি HTTP Method, যার মাধ্যমে **Server-এ নতুন data পাঠিয়ে নতুন resource তৈরি করা হয়।**

সহজভাবে:

> **POST → Server-এ নতুন data পাঠিয়ে create করা।**

### Basic Request

    POST /users

ধরো আমরা একটি নতুন user তৈরি করতে চাই:

    const user = {
      name: "Bayjid",
      email: "bayjid@example.com"
    };

    fetch("https://example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

### এখানে কী হচ্ছে?

    JavaScript Object
           ↓
    JSON.stringify()
           ↓
    Request Body
           ↓
    POST Request
           ↓
    Server
           ↓
    New Resource Created

আমরা `body`-এর মাধ্যমে নতুন user-এর data Server-এ পাঠাচ্ছি।

### POST কোথায় ব্যবহার হয়?

- নতুন user তৈরি করতে
- নতুন product তৈরি করতে
- নতুন post তৈরি করতে
- Form submit করতে
- নতুন order তৈরি করতে

### Example Endpoints

    POST /users
    POST /products
    POST /posts
    POST /orders

</details>

<br>

---

<details>
<summary>❓ PUT — সম্পূর্ণ Data Update করা</summary>

<br>

### PUT কী?

**PUT** হলো এমন একটি HTTP Method, যার মাধ্যমে কোনো existing resource-এর **সম্পূর্ণ data replace বা update করা হয়।**

সহজভাবে:

> **PUT → Existing resource-এর পুরো data নতুন data দিয়ে replace করা।**

### Basic Request

    PUT /users/1

ধরো Server-এ আগে থেকেই এই user আছে:

    {
      id: 1,
      name: "Bayjid",
      email: "bayjid@example.com"
    }

এখন আমরা user-এর সম্পূর্ণ information update করতে চাই:

    const updatedUser = {
      name: "Bayjid Alom",
      email: "bayjid.alom@example.com"
    };

    fetch("https://example.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

### PUT-এর মূল ধারণা

    Existing Resource
           ↓
          PUT
           ↓
    Complete New Data
           ↓
      Replace / Update

### PUT কোথায় ব্যবহার হয়?

- সম্পূর্ণ user information update করতে
- সম্পূর্ণ product information replace করতে
- কোনো resource-এর complete representation update করতে

### Example Endpoints

    PUT /users/1
    PUT /products/5
    PUT /posts/10

</details>

<br>

---

<details>
<summary>❓ PATCH — নির্দিষ্ট Data Update করা</summary>

<br>

### PATCH কী?

**PATCH** হলো এমন একটি HTTP Method, যার মাধ্যমে existing resource-এর **শুধু নির্দিষ্ট অংশ update করা হয়।**

সহজভাবে:

> **PATCH → পুরো data না বদলে শুধু প্রয়োজনীয় অংশ update করা।**

ধরো existing user:

    {
      id: 1,
      name: "Bayjid",
      email: "bayjid@example.com",
      age: 18
    }

এখন আমরা শুধু `name` পরিবর্তন করতে চাই।

    const update = {
      name: "Bayjid Alom"
    };

    fetch("https://example.com/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(update)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

এখানে আমরা শুধু:

    {
      name: "Bayjid Alom"
    }

পাঠাচ্ছি।

অর্থাৎ পুরো user object পাঠানোর প্রয়োজন হচ্ছে না।

### PATCH-এর মূল ধারণা

    Existing Resource
           ↓
         PATCH
           ↓
      Specific Field
           ↓
      Partial Update

### PATCH কোথায় ব্যবহার হয়?

- শুধু name পরিবর্তন করতে
- শুধু email update করতে
- শুধু profile picture পরিবর্তন করতে
- শুধু product price update করতে
- শুধু account status পরিবর্তন করতে

### Example Endpoints

    PATCH /users/1
    PATCH /products/5
    PATCH /posts/10

</details>

<br>

---

<details>
<summary>❓ DELETE — Data মুছে ফেলা</summary>

<br>

### DELETE কী?

**DELETE** হলো এমন একটি HTTP Method, যার মাধ্যমে **Server থেকে কোনো resource মুছে ফেলার request পাঠানো হয়।**

সহজভাবে:

> **DELETE → Server থেকে data/resource মুছে ফেলা।**

### Basic Request

    DELETE /users/1

এর অর্থ:

    "Server, user ID 1-এর resource delete করো।"

### JavaScript Example

    fetch("https://example.com/users/1", {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

### DELETE Request Flow

    Client
       │
       │ DELETE /users/1
       ▼
    Server
       │
       │ Remove Resource
       ▼
    Response

### DELETE কোথায় ব্যবহার হয়?

- User delete করতে
- Product delete করতে
- Post delete করতে
- Comment delete করতে
- কোনো resource remove করতে

### Example Endpoints

    DELETE /users/1
    DELETE /products/5
    DELETE /posts/10

</details>

<br>

---

## ⚙️ PUT vs PATCH

**PUT** এবং **PATCH** দুটোই data update করার জন্য ব্যবহার করা হয়।  
তবে এদের update করার পদ্ধতি আলাদা।

| বিষয় | PUT | PATCH |
|:--|:--|:--|
| Update type | Complete Update | Partial Update |
| Data পাঠানো | সাধারণত সম্পূর্ণ resource | শুধু পরিবর্তন করা field |
| মূল ধারণা | Replace | Modify |
| Example | পুরো user update | শুধু user-এর name update |

### Existing Data

    {
      id: 1,
      name: "Bayjid",
      email: "bayjid@example.com",
      age: 18
    }

### PUT

    {
      name: "Bayjid Alom",
      email: "bayjid.alom@example.com",
      age: 19
    }

এখানে সম্পূর্ণ resource-এর data পাঠানো হচ্ছে।

### PATCH

    {
      name: "Bayjid Alom"
    }

এখানে শুধু যে field পরিবর্তন করতে চাই, সেটি পাঠানো হচ্ছে।

### 🧠 সহজে মনে রাখো

    PUT
    ↓
    "পুরো resource replace/update করো"

    PATCH
    ↓
    "শুধু প্রয়োজনীয় অংশ পরিবর্তন করো"

---

## 🔄 CRUD এবং HTTP Methods

**CRUD** হলো database/resource-এর চারটি মৌলিক operation:

- **C → Create**
- **R → Read**
- **U → Update**
- **D → Delete**

HTTP Methods-এর সাথে এগুলোকে সাধারণভাবে এভাবে মিলানো যায়:

| CRUD | HTTP Method | কাজ |
|:--|:--:|:--|
| **Create** | POST | নতুন data তৈরি |
| **Read** | GET | Data নেওয়া |
| **Update** | PUT / PATCH | Data update |
| **Delete** | DELETE | Data মুছে ফেলা |

### CRUD Flow

    Create → POST
    Read   → GET
    Update → PUT / PATCH
    Delete → DELETE

---
---

<br>


## 🧩 একই Resource-এর উপর ৫টি Method

ধরো আমাদের API resource:

    https://example.com/users

এখন একই resource-এর জন্য আলাদা HTTP Method ব্যবহার করলে আলাদা action বোঝায়:

    GET    /users       → Users-এর data নেওয়া
    POST   /users       → নতুন user তৈরি করা

    PUT    /users/1     → User 1-এর সম্পূর্ণ data update/replace
    PATCH  /users/1     → User 1-এর নির্দিষ্ট data update

    DELETE /users/1     → User 1 delete করা



### 🧠 গুরুত্বপূর্ণ বিষয়

> **URL বলে কোন resource নিয়ে কাজ হবে, আর HTTP Method বলে resource-এর উপর কী কাজ করা হবে।**

---

### 📌 Quick Notes

<details>
<summary>🧠 এক নজরে মনে রাখো</summary>

<br>

    GET
    → Server থেকে data নেওয়া।

    POST
    → নতুন data Server-এ পাঠিয়ে resource তৈরি করা।

    PUT
    → Existing resource-এর সম্পূর্ণ data replace/update করা।

    PATCH
    → Existing resource-এর নির্দিষ্ট অংশ update করা।

    DELETE
    → Server থেকে resource মুছে ফেলা।

</details>

<br>

---

### 🏁 Final Cheat Sheet

| Method | Action | সহজ অর্থ |
|:------:|:------:|:---------|
| ❔ **GET** | Read | Data নেওয়া |
| ❔ **POST** | Create | Data তৈরি করা |
| ❔ **PUT** | Replace | পুরো data বদলানো |
| ❔ **PATCH** | Partial Update | কিছু অংশ বদলানো |
| ❔ **DELETE** | Remove | Data মুছে ফেলা |

---

<br>

### 🔗 HTTP Methods Overview

    HTTP
      ↓
    HTTP Request
      ↓
    HTTP Methods
      ├── GET
      ├── POST
      ├── PUT
      ├── PATCH
      └── DELETE
           ↓
          API
           ↓
         Server
           ↓
        Database

---

### 📚 Key Takeaways

- **GET** → Server থেকে data নেওয়ার জন্য
- **POST** → নতুন data তৈরি করার জন্য
- **PUT** → সম্পূর্ণ resource replace/update করার জন্য
- **PATCH** → resource-এর নির্দিষ্ট অংশ update করার জন্য
- **DELETE** → resource মুছে ফেলার জন্য
- **PUT এবং PATCH এক নয়**
- HTTP Method Server-কে **কী ধরনের action করতে হবে** তা বোঝায়

---

> 🌐 **HTTP Methods → API-এর সাথে Client এবং Server-এর communication বোঝার অন্যতম গুরুত্বপূর্ণ foundation।**