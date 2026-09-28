const loadData = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
        // promise of response
        .then(res => res.json())
        // promise of json data
        .then(data => console.log(data))
}


/***
fetch() → Server-এ request পাঠিয়ে একটি Promise return করে।
res.json() → Server থেকে পাওয়া response-কে JSON format থেকে JavaScript object-এ convert করে এবং একটি Promise return করে।

data → res.json() থেকে পাওয়া converted JavaScript object। .then() → Promise resolve হলে পরবর্তী কাজ করার জন্য ব্যবহার করা হয়। 

// Array of object :   [{…}, {…}, {…}]
***/



