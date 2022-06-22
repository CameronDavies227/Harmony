const db = require('../services/services');
const helper = require('../helper');
const config = require('../config');
const { access } = require('fs');

async function getMultiple(id){
  const rows = await db.query(
    `SELECT id, username, email, phone, password, admin, createdAt, updatedAt
    FROM users`
  );


  return {
    rows
  }
}

async function create(users){
    var crypto;
    var hash;
    const check = await db.query(
      `SELECT username FROM users WHERE username=(${users.username}),`
      
    );
    if (check){
      let message = 'username taken';
      return {message}
    };

    const result = await db.query(



      crypto = require('crypto'),
      hash = crypto.createHash('md5').update(users.password).digest('hex'),
      console.log(hash),
      `INSERT INTO users 
      (username, email, phone, pass, admin 
      VALUES 
      (${users.username}, ${users.email}, ${users.phone}, ${hash}, ${users.admin}), `
    );
  
    let message = 'Error in registering new user';
  
    if (result.affectedRows) {
      message = 'user registered successfully';
    }
  
    return {message};
  }

  async function update(id, users){
    var crypto;
    var hash;
    const result = await db.query(
      crypto = require('crypto'),
      hash = crypto.createHash('md5').update(users.password).digest('hex'),
      console.log(hash),
      `UPDATE users 
      SET username="${users.username}", email="${users.email}", phone="${users.phone}", 
      password="${hash}", admin="${users.admin}" 
      WHERE id="${id}"` 
    );
  
    let message = 'Error in updating user';
  
    if (result.affectedRows) {
      message = 'User updated successfully';
    }
  
    return {message};
  }

  async function remove(id){
    const result = await db.query(
      `DELETE FROM users WHERE id=${id}`
    );
  
    let message = 'Error in deleting user';
  
    if (result.affectedRows) {
      message = 'User deleted successfully';
    }
  
    return {message};
  }

  async function login(username, user){
    var crypto;
    var hash;
    const result = await db.query(
      crypto = require('crypto'),
      hash = crypto.createHash('md5').update(user.password).digest('hex'),
      console.log(hash),
      `SELECT id, usertype
      FROM users WHERE (username = ${username}) AND password = ${hash}`
    );
    
    let message = 'Login successful'

    if (!result){
        message = 'Username or Password incorrect';
      }else {
        sessionStorage.user=result
      }



    return {
      result,
      message
    }
  }
  
  

module.exports = {
  getMultiple,
  create,
  update,
  remove,
  login
}