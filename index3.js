// // // Define a variable to store the count
// // let requestCount = 0;

// // // Middleware function to count requests
// // const countRequestsMiddleware = (req, res, next) => {
// //     requestCount++;
// //     console.log(`Number of requests: ${requestCount}`);
// //     next();
// // };


// // app.use(countRequestsMiddleware);

// const express = require('express');
// const app = express();

// // Array to store response times
// const responseTimes = [];

// // Middleware to track response time
// app.use((req, res, next) => {
//     const startTime = process.hrtime();
//     res.on('finish', () => {
//         const endTime = process.hrtime(startTime);
//         const elapsedTimeInMilliseconds = (endTime[0] * 1000) + (endTime[1] / 1000000);
//         responseTimes.push(elapsedTimeInMilliseconds);
//     });
//     next();
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// setInterval(() => {
//     const totalResponseTime = responseTimes.reduce((acc, cur) => acc + cur, 0);
//     const averageResponseTime = responseTimes.length > 0 ? totalResponseTime / responseTimes.length : 0;
//     console.log(`Average response time: ${averageResponseTime.toFixed(2)} milliseconds`);
//     responseTimes.length = 0; 
// }, 60000); 

const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.listen(3000)