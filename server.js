const corsAnywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 8080; // Render tự động thiết lập biến PORT

corsAnywhere.createServer({
    requireHeader: [ 'x-requested-with'], // Yêu cầu header
    removeHeaders: ['cookie'], // Loại bỏ cookie và authorization nếu cần
}).listen(port, host, () => {
    console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
