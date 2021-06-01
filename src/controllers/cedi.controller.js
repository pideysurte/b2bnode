import {
    getOne
} from '../services/cedi/getOne';
import {
    getOneName
} from '../services/cedi/getOneName';
import {
    getAll
} from '../services/cedi/getAll';
import {
    getCreate
} from '../services/cedi/getCreate';

import {
    getUpdate
} from '../services/cedi/getUpdate';
import {
    getDelete
} from '../services/cedi/getDelete';

import errors from "../utils/codeInternalErrors";
import ResponseUtil from "../utils/response";
import DefaultConstants from "../utils/defaultConstants";


import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = DefaultConstants.logerlevel;

export async function getAllData(req, res, next) {
    try {
        getAll().then(data => {
            res.status(200).json({
                message: 'All data',
                data: data
            });
        }).catch(e => {
            console.log(e);
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}
export async function getCreateData(req, res, next) {
    try {
       
        console.log(req)
        getCreate(req.body, req.files)
            .then(data => {
                res.status(200).json({
                    message: 'Created successfully',
                    data: data
                });
            })
            .catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}

export function getOneData(req, res, next) {
    try {
        const {
            id
        } = req.body;
        getOne(id).then(data => {
            res.status(200).json({
                message: 'One row',
                data: data
            });
        });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}
export function getOneNameData(req, res, next) {
    try {
        const {
            name
        } = req.body;
        getOneName(name).then(data => {
            res.status(200).json({
                message: 'One row',
                data: data
            });
        });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}
export async function getUpdateData(req, res, next) {
    try {      

        await getUpdate(req.body, req.files)
            .then(data => {
                res.json({
                    message: 'Updated successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}
export async function getDeleteData(req, res, next) {
    try {
        const {
            id
        } = req.body;

        await getDelete(id)
            .then(data => {
                res.json({
                    message: 'delete successfully',
                    data: data
                });
            }).catch(e => {
                console.log(e);
            });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {},
            error: true
        });
    }
}