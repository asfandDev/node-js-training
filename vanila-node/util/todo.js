
/**
 * @returns return a promise object
 * @description get user post data from request body
 */
export const getPostData = (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      request.on('data', chunk => {
        body += chunk.toString();
      });
      request.on('end', () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
        reject(error);
    }
  });
};
