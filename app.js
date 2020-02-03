const express = require("express");
const useMiddleware = require("./middleware");
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
const indexRouter = require("./routers/index");


app.use("/", indexRouter);




useErrorHandlers(app);

module.exports = app;
