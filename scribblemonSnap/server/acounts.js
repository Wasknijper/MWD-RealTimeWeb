Accounts.onCreateUser(function(options, user) {
  user.userName = options.firstName;
  return user;
});