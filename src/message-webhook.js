const processMessage = require('./process-message');

module.exports = (req, res) => {
  // Check this an event from a page subscription
  if (req.body.object === 'page') {
    // Iterate over each entry. There may be multiple if batched
    req.body.entry.forEach(entry => {
      // Iterate over each messaging event
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
          processMessage(event);
        }
      });
    });

    // Return a '200 OK' response to all requests
    res.status(200).end();
  }
};
