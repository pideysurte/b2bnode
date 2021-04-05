import {
    getOne
} from '../services/orders/getOne';
import {
    getAll
} from '../services/orders/getAll';
import {
    getCreate
} from '../services/orders/getCreate';

import {
    getUpdate
} from '../services/orders/getUpdate';
import {
    getDelete
} from '../services/orders/getDelete';
import {
    getAllId
} from '../services/orders/getAllId';
import {
     getAllExcel
}
from '../services/orders/getAllExcel';
import excel from "exceljs";

import errors from "../utils/codeInternalErrors";
import ResponseUtil from "../utils/response";
import DefaultConstants from "../utils/defaultConstants";

import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = DefaultConstants.logerlevel;


export async function getAllData(req, res, next) {
    try {
        logger.info("[getAllData] INIT");
        let params = await getAll();
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getAllDataExcel(req, res, next) {
    try {
        logger.info("[getAllDataExcel] INIT");
        let excelOrders = await getAllExcel();
        let workbook = new excel.Workbook();
        let worksheet = workbook.addWorksheet("excelOrders");
        worksheet.columns = [{
                header: "Id",
                key: "id",
                width: 5
            },
            {
                header: "products",
                key: "products",
                width: 25
            },
            {
                header: "status",
                key: "status",
                width: 25
            },
            {
                header: "b2bUserApp.name",
                key: "b2bUserApp.name",
                width: 25
            },
            {
                header: "b2bMarketPlace.name",
                key: "b2bMarketPlace.name",
                width: 25
            },
            {
                header: "b2bCedi.name",
                key: "b2bCedi.name",
                width: 25
            },
            {
                header: "b2bFabDist.name",
                key: "b2bFabDist.name",
                width: 25
            },
            {
                header: "b2bUserComercialCedi.name",
                key: "b2bUserComercialCedi.name",
                width: 25
            },
            {
                header: "b2bEstablecimientosClientCedi.name",
                key: "b2bEstablecimientosClientCedi.name",
                width: 25
            },
            
        ];
        worksheet.addRows(excelOrders);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=' + 'pedidos.xlsx');
        return workbook.xlsx.write(res)
            .then(function () {
                res.status(200).end();
            });
    } catch (error) {
        logger.info("[getAllDataExcel]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getCreateData(req, res, next) {
    try {
        logger.info("[getCreateData] INIT");
        console.log(req.body)
        let params = await getCreate(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getCreateData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getOneData(req, res, next) {
    try {
        logger.info("[getOneData] INIT");
        let params = await getOne(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getOneData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getUpdateData(req, res, next) {
    try {
        logger.info("[getUpdateData] INIT");
        let params = await getUpdate(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getUpdateData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}
export async function getDeleteData(req, res, next) {
    try {
        logger.info("[getDeleteData] INIT");
        let params = await getDelete(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getDeleteData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}

export async function getAllIdData(req, res, next) {
    try {
        logger.info("[getAllIdData] INIT");
        let params = await getAllId(req.body);
        ResponseUtil.success(res, params);
    } catch (error) {
        logger.info("[getAllIdData]  ERROR", error);
        ResponseUtil.badRequest(res, errors.DATA_NOT_FOUND, error.message);
    }
}