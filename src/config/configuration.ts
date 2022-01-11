export default () => ({
    post: parseInt(process.env.POST, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    }
})