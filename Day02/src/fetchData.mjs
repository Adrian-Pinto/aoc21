import 'chunkMethod.mjs';

export default async (url) => {
  const response = await fetch(url);
  return response.text()
    .then((data) => { response.text = data.toString().split('\n').chunk(2); return response; })
    .catch((error) => new Error(error));
};