exports.signup = async (req, res) => {
  const {email, password} = req.body;

  console.log(email, password);
  res.end();
};
