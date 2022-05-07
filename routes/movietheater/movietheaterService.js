const mysqlExecutor = require('../../model/mysqlExecutor');
const mysqlStatement = require('./movietheaterStatement');
const fs = require('fs');
const AWS = require('aws-sdk');
const BUCKET_NAME = 'mymoviebucketjunhoon';
const s3 = new AWS.S3({   accessKeyId: process.env.accessKeyId,   secretAccessKey: process.env.secretAccessKey });

exports.createMovietheater = async (req, res, next) => {
    try {
        const name = req.body.name;
        const location = req.body.location;



        const sqldata = await mysqlExecutor(
            await mysqlStatement.createMovietheaterStatement(), [name, location]
        );

        res.send({
            status: 'ok',
            message: 'success',
            data : sqldata
        })
    } catch (e) {
        console.error(e);
        res.send({
            status: 'FAIL',
            messsage: '안됐어요'
        })
    }
}

exports.readMovietheater = async (req, res, next) => {
    try {
        const sqldata = await mysqlExecutor(
            await mysqlStatement.readMovietheaterStatement(), []
        );
        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}

exports.updateMovietheater = async (req, res, next) => {
    try {
        const name = req.body.name;
        const location = req.body.location;
        const idx = req.body.idx;



        const sqldata = await mysqlExecutor(
            await mysqlStatement.updateMovietheaterStatement(), [name, location, idx]
        );

        res.send({
            status: 'ok',
            message: 'success',
            data : sqldata
        })
    } catch (e) {
        console.error(e);
        res.send({
            status: 'FAIL',
            messsage: '안됐어요'
        })
    }
}

exports.deleteMovietheater = async (req, res, next) => {
    try {
        const idx = req.body.idx;


        const sqldata = await mysqlExecutor(
            await mysqlStatement.deleteMovietheaterStatement(), [idx]
        );

        res.send({
            status: 'ok',
            message: 'success',
            data : sqldata
        })
    } catch (e) {
        console.error(e);
        res.send({
            status: 'FAIL',
            messsage: '안됐어요'
        })
    }
}

exports.readOpenmovietheater = async (req, res, next) => {
    try {
        const idx = req.query.idx;


        const sqldata = await mysqlExecutor(
            await mysqlStatement.readOpenmovietheaterStatement(), [idx]
        );

        res.send({
            status: 'ok',
            message: 'success',
            data : sqldata
        })
    } catch (e) {
        console.error(e);
        res.send({
            status: 'FAIL',
            messsage: '안됐어요'
        })
    }
}