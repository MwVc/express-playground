const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getAuthorById(id) {
  return authors.find((author) => author.id === id);
}

const users = [
  { id: 1, name: "Mwadime" },
  { id: 2, name: "Victor" },
  { id: 3, name: "Kamwana" },
];

async function getUserById(id) {
  return users.find((user) => {
    return user.id === id;
  });
}

module.exports = { getAuthorById, getUserById };
