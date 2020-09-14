const verifyWebhook = (req, res) => {
  // Verify token
  let VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Check the mode and token sent is correct
  if (mode && token === VERIFY_TOKEN) {
    // Respond with the challenge token from the request
    res.status(200).send(challenge);
  } else {
    // Respond with '403 Forbidden' if verify tokens do not match
    res.sendStatus(403);
  }
};

module.exports = verifyWebhook;
