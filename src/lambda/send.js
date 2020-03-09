const apiKey = process.env.API_KEY;
const domain = process.env.DOMAIN;
const receiverMail = process.env.RECEIVER_MAIL;

const mailgun = require("mailgun-js")({ apiKey, domain });

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Max-Age": "2592000",
  "Access-Control-Allow-Credentials": "true"
};

function invalidRequest(callback) {
  return callback(null, {
    statusCode: 400,
    headers,
    body: JSON.stringify({
      status: "fail",
      message: "Invalid request"
    })
  });
}

exports.handler = (event, context, callback) => {
  if (event.httpMethod === "OPTIONS") {
    return callback(null, {
      statusCode: 204,
      headers
    });
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return invalidRequest(callback);
  }

  if (
    event.httpMethod != "POST" ||
    !event.body ||
    !data.email ||
    !data.name ||
    !data.message
  ) {
    return invalidRequest(callback);
  }

  const messageData = {
    from: `${data.name} <${data.email}>`,
    to: receiverMail,
    subject: `kwiek.dev contact form message`,
    text: `${data.message}`
  };

  mailgun.messages().send(messageData, error => {
    if (error) {
      return callback(null, {
        statusCode: error.statusCode,
        headers,
        body: JSON.stringify({
          status: "fail",
          message: error.message
        })
      });
    } else {
      delete messageData.to;
      return callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: "success",
          data: {
            message: messageData
          }
        })
      });
    }
  });
};
