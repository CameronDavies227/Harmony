const db = require('./services');
const helper = require('../helper');
const config = require('../config');

async function getEach(id){
  console.log(id);
  const rows = await db.query(
    `SELECT id, name, description, startTime, startDate
    FROM events WHERE userid=${id}`
  );
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}
async function create(events){
    const result = await db.query(
      `INSERT INTO events 
      (userID, name, description, startTime, startDate
      VALUES 
      (${events.userID}, ${events.name}, ${events.description}, ${events.startTime}, ${events.startDate}), `
    );
  
    let message = 'Error in registering new event';
  
    if (result.affectedRows) {
      message = 'Event added successfully';
    }
  
    return {message};
  }

  async function update(id, events){
    const result = await db.query(
      `UPDATE events 
      SET name="${events.name}", description="${events.description}", startTime="${events.startTime}", 
      startDate="${events.startDate}"
      WHERE id="${id}"` 
    );
  
    let message = 'Error in updating event';
  
    if (result.affectedRows) {
      message = 'Event updated successfully';
    }
  
    return {message};
  }

  async function remove(id){
    console.log(id);
    const result = await db.query(
      `DELETE FROM events WHERE id=${id}`
    );
  
    let message = 'Error in deleting event';
  
    if (result.affectedRows) {
      message = 'Event deleted successfully';
    }
  
    return {message};
  }
  
  

module.exports = {
  getEach,
  create,
  update,
  remove
}