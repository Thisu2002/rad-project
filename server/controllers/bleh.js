const bcrypt = require('bcrypt');

// The hashed password (from your example)
const hashedPassword = '$2a$10$7wlv96FVfMjzLJ5.GOrnMenQbE0Yfb1Nrmqh4..EtmP0606JsT//G';

// The password to verify
const plainPassword = 'owner1'; // Replace this with the actual password to check

// Compare the plain password with the hashed password
bcrypt.compare(plainPassword, hashedPassword, (err, isMatch) => {
  if (err) throw err;
  console.log(isMatch); // true if password matches, false otherwise
});
