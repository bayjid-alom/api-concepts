### 📌 Ternary Operator — Practical Example

`todo.completed` এর value `true` হলে **completed icon** এবং `false` হলে **incomplete icon** দেখানো হয়েছে। এখানে Ternary Operator ব্যবহার করে condition অনুযায়ী দুইটি HTML element-এর মধ্যে একটি dynamically render করা হচ্ছে।

```js
<p>
    ${todo.completed == true 
        ? `<i class="fa-solid fa-square-check"></i>` 
        : `<i class="fa-regular fa-square-check"></i>`
    }
</p>
```


