const server = require('./server');
const { conn } = require('./DB_connection');
const PORT = 3001;


conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})
    .catch((err) => console.log(err));
