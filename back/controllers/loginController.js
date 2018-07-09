const API_KEY = process.env.API_KEY;

const login = (req,res) => {
  const { password } = req.body
  if (password === API_KEY) {
    res.status(200).json( {'API_KEY': API_KEY})
  } else {
    res.status(401).json('Wrong password')
  }
}

module.exports = {login}