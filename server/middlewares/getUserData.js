const axios = require("axios")

const getUserData = async (req, res, next) => {
    try {
        const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
        headers : {
            authorization : req.headers.authorization
        }
        })

        req.user = response.data
    } catch (error) {
        res.send(error.message)
    } finally {
        next()
    }
}

module.exports = getUserData