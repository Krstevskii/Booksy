if(process.env.NODE_ENV === 'production'){

    module.exports = {
        mongoURI: 'mongodb://krstevski:krstevski14@ds113923.mlab.com:13923/vidjot-production'
    }

}else{

    module.exports = {
        mongoURI: 'mongodb://localhost:27017/vidjot-dev'
    }

}