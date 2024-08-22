const bcrypt = require('bcryptjs');

const password = 'vet123';
const saltRounds = 10; // Commonly used salt rounds

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log('Hashed Password:', hash);
});
