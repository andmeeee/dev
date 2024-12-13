const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Пример функции для тестирования
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Запуск приложения
app.listen(port, () => {
  console.log(App listening on port ${port});
});

module.exports = app;
