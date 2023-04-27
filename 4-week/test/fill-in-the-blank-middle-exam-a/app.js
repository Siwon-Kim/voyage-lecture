const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const logMiddleware = require('./middlewares/logMiddleware');

const app = express();
const port = 3000;

// 2번 문제: req.body 데이터 가져오기
app.use(express.json()); // req.body (JSON 형식)를 parsing하는 미들웨어
app.use(express.urlencoded({ extended: false })); // req.body (form data)를 parsing하는 미들웨어
app.use(cookieParser()); // cookie를 req.cookies에 등록하는 미들웨어
app.use(logMiddleware);

app.use('/', routes);

app.listen(port, () => {
  console.log(`Start listen Server: ${port}`);
});

module.exports = app;
