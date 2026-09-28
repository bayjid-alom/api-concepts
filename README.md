## ⚙️ API & JSON Concepts

> JavaScript-এ API এবং Server-এর সাথে কাজ করার সময় **JSON, Fetch API, Promise, Request এবং Response** সম্পর্কে জানা গুরুত্বপূর্ণ এই repository-তে API ও JSON-এর basic concepts, notes এবং practical examples রাখা হয়েছে।

[🔗 Preview the Implementation](https://bayjid-alom.github.io/api-concepts/)


<details>
<summary>📌 Async / Await</summary>

### ⚡ What is Async / Await?

**async/await** হলো JavaScript-এ **asynchronous code** সহজভাবে handle করার একটি উপায়। এটি মূলত **Promise**-এর উপর কাজ করে।

### 📌 `async`

কোনো function-এর আগে `async` লিখলে সেই function সবসময় একটি **Promise** return করে।

    async function getData() {
        return "Data received";
    }

### 📌 `await`

`await` কোনো **Promise resolve** হওয়া পর্যন্ত ওই `async` function-এর execution অপেক্ষা করায়।

    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();

        console.log(data);
    }

    getData();

### 🔄 How It Works

    async function getData() {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    }

এখানে:

- `async` → function-টিকে asynchronous করে।
- `await fetch()` → server থেকে response আসা পর্যন্ত অপেক্ষা করে।
- `await response.json()` → response-এর JSON data তৈরি হওয়া পর্যন্ত অপেক্ষা করে।
- তারপর `console.log(data)` execute হয়।

### 🧠 Quick Note

**async** → Function-কে Promise return করতে সাহায্য করে।  
**await** → Promise resolve হওয়া পর্যন্ত `async` function-এর execution pause করে।  
**async/await** → Promise handle করার cleaner ও easier syntax।

</details>


---





### ❔ API (Application Programming Interface)

`API (Application Programming Interface) হলো এমন একটি interface, যার মাধ্যমে একটি application অন্য application বা server-এর সাথে communication এবং data exchange করতে পারে।`

সহজভাবে, frontend থেকে server-এর কাছে কোনো data চাইলে বা data পাঠালে API সেই communication-এর মাধ্যম হিসেবে কাজ করে।

---
---


### ❔ JSON কী?

``JSON (JavaScript Object Notation) হলো একটি lightweight data format, যা মূলত client এবং server-এর মধ্যে structured data আদান-প্রদানের জন্য ব্যবহার করা হয়।``

সহজভাবে, server থেকে frontend-এ data পাঠানো বা frontend থেকে server-এ data পাঠানোর সময় JSON খুব বেশি ব্যবহৃত হয়।

```json
JSON :

{
  "name": "Bayjid",
  "age": 18,
  "student": true
}
```

---
---



<details>
<summary>📌 Object-কে Stringify করা</summary>

> Object → JSON String 

JSON.stringify() দিয়ে JavaScript object-কে JSON string-এ convert করা হয়।

```js
const person = {
  name: "Bayjid",
  age: 18
};

const jsonString = JSON.stringify(person);
console.log(jsonString);

Object
   ↓ JSON.stringify()
JSON String
```

</details><br>







<details>
<summary>📌 JSON String-কে Object-এ Convert করা</summary>

> JSON String → Object

JSON.parse() দিয়ে JSON string-কে JavaScript object-এ convert করা হয়।

```js
const jsonString = '{"name":"Bayjid","age":18}';

const person = JSON.parse(jsonString);
console.log(person);

JSON String
   ↓ JSON.parse()
Object
```

</details> <br>



### ⚙️ fetch() Basic Syntax

```
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data));
```


<details>
<summary>⚙️ Explain Syntax (Fetch & Response)</summary>

> **fetch()** → সরাসরি JSON data return করে না; এটি একটি **Promise** return করে।

> **.then()** → Promise successfully resolve হলে পরবর্তী কাজ করার জন্য ব্যবহৃত হয়।

> **response.json()** → Server থেকে পাওয়া Response-কে JSON হিসেবে read/parse করে এবং একটি **Promise** return করে।

> **Promise Chain** → `fetch()` → Promise → `.then()` → Response → `response.json()` → Promise → `.then()` → JSON Data

</details><br>






<details>
<summary>📌 Load Data & Display in Console</summary>

> **HTML:** Button তৈরি করে `loadData()` function call করা হয়।

```html
<button onclick="loadData()">Load Data</button>
```

JavaScript: fetch() দিয়ে API থেকে data load করে Console-এ দেখানো হয়।

```js
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data));
}
```


#### 🔄 Data Loading Flow
```
HTML Button
    ↓
onclick="loadData()"
    ↓
JavaScript Function
    ↓
fetch()
    ↓
Promise
    ↓
res.json()
    ↓
JSON Data
    ↓
console.log(data)
```

`fetch() → API থেকে data request করে এবং একটি Promise return করে।`

`res.json() → Response-এর JSON data read করে এবং একটি Promise return করে।`

`data → Final JSON data পাওয়া যায় এবং console.log(data) দিয়ে Console-এ দেখা যায়।`

</details><br>

> Extension : JSON Viewer Pro 
<br>

---
---





<br>

<details>
<summary> 🧠 Quick Notes </summary>

> **API** → Application-এর মধ্যে **communication** করার মাধ্যম।

> **JSON** → Structured data আদান-প্রদানের একটি **data format**।

> **JSON.stringify()** → **JavaScript Object/Value → JSON String**

> **JSON.parse()** → **JSON String → JavaScript Object/Value**

> **fetch()** → Server/API-তে request পাঠায় এবং একটি **Promise** return করে।

> **.then()** → Promise resolve হওয়ার পর পরবর্তী কাজ করার জন্য ব্যবহৃত হয়।

> **response.json()** → Response body-কে JSON হিসেবে **read/parse** করে এবং একটি **Promise** return করে।


</details>