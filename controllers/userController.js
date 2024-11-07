const { getUserById } = require("../data/db");

async function getUser(req, res) {
  const { id } = req.params;

  const user = await getUserById(parseInt(id));

  if (!user) {
    res.status(404).send("User not Found");
    return;
  }

  res.send(`User: ${user.name}`);
}

module.exports = { getUser };
