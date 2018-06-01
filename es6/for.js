

let users = ['Bob', 'Joe', 'Ivan', 'Sergey'];

for (let user in users)
    console.log(user);
// 0
// 1
// 2
// 3
    


for (let user of users)
    console.log(user);
// Bob
// Joe
// Ivan
// Sergey
