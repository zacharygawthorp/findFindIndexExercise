function findUserByUsername(userArr, username) {
    return userArr.find(function(user) {
        return user.username === username;
    })
}

function removeUser(userArr, username) {
    let foundIndex = userArr.findIndex(function(user){
        return user.username === username;
    })
    if(foundIndex === -1) return;
    
    return userArr.splice(foundIndex,1)[0];

}