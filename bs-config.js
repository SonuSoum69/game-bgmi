module.exports = {
    Port: process.env.port,
    files: ['./**/*.{html,css,js}'],
    server: {
        baseDir: ["./views","./build/contracts"]
    }
}