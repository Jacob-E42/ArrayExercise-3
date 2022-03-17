
function findUserByUsername(usersArray, username) {
  return usersArray.find(function (obj) {
    return obj.username === username;
  })
}
const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];


function removeUser(usersArray, username) {
  let userIndex = usersArray.findIndex(function(obj){
    return obj.username === username;
  });
  if (userIndex > -1) {
    return usersArray.splice(userIndex, 1)[0];
  }
  else return undefined;
}
