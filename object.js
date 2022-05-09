const objUser = {
  username: "userTest",
  password: "123",
  email: "test123@gmail.com",
  intro: function () {
    return " email saya " + this.email + " password saya " + this.password;
  },
};

console.log(objUser["username"]);

const fruits = [
  {
    name: "anggur",
    price: 10000,
    stock: 10,
  },
  {
    name: "jeruk",
    price: 12000,
    stock: 11,
  },
];

console.log(fruits[0].price);

const buku = {
  title: "Harry Potter",
  author: {
    name: "J.K Rowling",
    age: 50,
    nationality: "inggris",
  },
  pages: 658,
  yearReleased: "2001",
  alternativeTitles: ["Sang Penyihir", "The Wizard"],
};

console.log(buku.alternativeTitles[0]);

let { title, pages, yearReleased } = buku;
// console.log(yearReleased);

//dot notation
console.log(buku.alternativeTitles[0]);
//brackt notation
console.log(buku["pages"]);

console.log(buku.title);
console.log(buku["title"]);

fruits.forEach((buah) => {
  console.log(buah.name);
});

fruits.forEach((buah) => {
  console.log(buah);
});
