

const ValidUser = (req, res, next) => {
    let { Username, email, password } = req.body
    if (Username && email && password) {
        next()
    }
    else {
        res.status(400).send({error:"Invalid UserData"})
    }
}

module.exports = ValidUser