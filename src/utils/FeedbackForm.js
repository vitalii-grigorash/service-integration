export const BASE_URL = 'https://api.oootelecomservice.ru';

export const sendForm = (name, number, comment) => fetch(`${BASE_URL}/feedbackform`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, number, comment }),
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          if (err.error) {
            throw new Error(err.error);
          } else {
            throw new Error(err.message);
          }
        });
    }
    return res.json();
  })
  .catch((err) => { 
    throw new Error(err.message);
  });