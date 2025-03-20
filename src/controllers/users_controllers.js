const getUsers = (req, res) => {
    res.json({ message: "Lista de usuarios" });
  };
  
  const createUser = (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Usuario ${name} creado con éxito`, email });
  };
  
  module.exports = { getUsers, createUser };
  