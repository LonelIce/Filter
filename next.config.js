module.exports = {
    images: {
        domains: ['imgproxy.by.dev.family'],
    },
    async redirects(){
        return [
            {
                source: '/',
                destination:'/shop',
                permanent:true
            }
        ]
    }
}
