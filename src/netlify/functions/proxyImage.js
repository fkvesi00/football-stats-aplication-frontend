const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    // Update this URL to a static image URL
    const response = await fetch('https://example.com/static-image.jpg');
    const buffer = await response.buffer();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': response.headers.get('Content-Type'),
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};