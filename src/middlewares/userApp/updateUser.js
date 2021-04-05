import Joi from "@hapi/joi";
import ResponseUtil from "../../utils/response";
import errors from "../../utils/codeInternalErrors";
import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "debug";

const userAppUpdateValidator = async (req, res, next) => {
    logger.info("[userAppValidator] INIT");
    const data = req.body;
    const schema = Joi.object({
        "id": Joi.number().integer().less(99999999999).required(),
        "name": Joi.string().max(45, 'utf8').required(),
        "phone": Joi.string().max(15, 'utf8').required()
    });
    const {
        error
    } = schema.validate(data);


    logger.info("[userAppUpdateValidator] FINISH");
    error ? ResponseUtil.unprocessableEntity(res, errors.VALIDATION_FAILED, errors.VALIDATION_FAILED_MESSAGE, error.details[0].message) : next();
};

export default userAppUpdateValidator;