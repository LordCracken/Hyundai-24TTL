const sendForm = () => {
  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  document.documentElement.addEventListener('submit', event => {
    event.preventDefault();

    const body = {};
    const formData = new FormData(event.target);

    formData.forEach((value, key) => body[key] = value);
    if (body['name'] === ``) return;

    postData(body)
      .then(response => {
        if (response.status !== 200) throw new Error('status network not 200');
        // popupThank.style.visibility = `visible`;
        event.target.reset();
      })
      .catch(error => {
        console.error(error);
      });
  });

};

export default sendForm;
