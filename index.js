
const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Single routing
const router = express.Router();

// router.get('/', async function (req, res, next) {
//     console.log("Router Working");
//     const imageRes = await axios({
//         url: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&format=jpg&fit=crop&w=640&q=80",
//         responseType: "arraybuffer",
//     });
//     console.log(imageRes.data)
    
//     const formData = new FormData();
//     formData.append("crop", "true");
//     formData.append("image_file", imageRes.data, "raw");

//     const phRes = await axios({
//         method: "post",
//         url: "https://sdk.photoroom.com/v1/segment",
//         data: formData,
//         responseType: "arraybuffer",
//         headers: {
//             ...formData.getHeaders(),
//             "X-Api-Key": "85ec9dcfc4dad1e802961a5266ea0e18d43a670f",
//         },
//         encoding: null,
//     });

//     if (phRes.status !== 200) {
//         return console.error("Error:", phRes.status, phRes.statusText);
//     }

//     fs.writeFileSync("no-bg.png", phRes.data);
//     res.end();
// })

// app.use(router);
app.use();

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});