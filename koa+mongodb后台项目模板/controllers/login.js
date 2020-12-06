const User = require('../model/user');

const login = {};

login.login = (ctx, next) => {
  const user = new User({
    userName: 'hui',
    age: 21,
  });
  user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });

  ctx.body = 'login';
};

module.exports = login;
