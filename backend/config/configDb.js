const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const dbUrl = `mongodb+srv://${username}:${password}@medi-store.rgeecsj.mongodb.net/?retryWrites=true&w=majority`

module.exports = dbUrl
