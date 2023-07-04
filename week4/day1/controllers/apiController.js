module.exports = {
    api: (req, res) => {res.json({message: "Hello, world!"})},
    greeting: (req,res) => {res.json({message: "Greetings from Planet Earth!"})}
}