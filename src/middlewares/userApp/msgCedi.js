import Joi from "@hapi/joi";
import ResponseUtil from "../../utils/response";
import errors from "../../utils/codeInternalErrors";
import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "debug";

const msgCediValidator = async (req, res, next) => {
    logger.info("[msgCediValidator] INIT");

    const data = req.body;

    const schema = Joi.object({
        "idMarketplace": Joi.number().integer().less(99999999999).required(),
        "idCedi": Joi.number().integer().less(99999999999).required(),
        "msg": Joi.string().max(255, 'utf8').required()
    });

    const {
        error
    } = schema.validate(data);

    logger.info("[msgCediValidator] FINISH");
    error ? ResponseUtil.unprocessableEntity(res, errors.VALIDATION_FAILED, errors.VALIDATION_FAILED_MESSAGE, error.details[0].message) : next();
}

export default msgCediValidator;