const data = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // first output
    console.log("Hello");

    // second output
    const json = await response.json();
    console.log(json);

    // third output
    console.log(true);
}

data()


/**
 * Fetching একটি asynchronous operation, তাই পরের code আগে execute হতে পারে।
 * await ব্যবহার করলে Promise resolve হওয়া পর্যন্ত execution অপেক্ষা করে।
 * তাই fetching শেষ হওয়ার পর পরের line execute হয়।
 **/


/***
 Output:

 Hello
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
true

***/