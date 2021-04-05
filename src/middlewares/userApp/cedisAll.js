import Joi from "@hapi/joi";
import ResponseUtil from "../../utils/response";
import errors from "../../utils/codeInternalErrors";
import log4js from "log4js";

const logger = log4js.getLogger();
logger.level = "debug";

const cedisallValidator = async (req, res, next) => {
    logger.info("[cedisallValidator] INIT");

    const data = req.body;

    const schema = Joi.object({
        "idMarketplace": Joi.number().integer().less(99999999999).required(),
        "idUserapp": Joi.number().integer().less(99999999999).required(),
        "lat": Joi.number().required(),
        "lng": Joi.number().required()
    });

    const {
        error
    } = schema.validate(data);

    logger.info("[cedisallValidator] FINISH");
    error ? ResponseUtil.unprocessableEntity(res, errors.VALIDATION_FAILED, errors.VALIDATION_FAILED_MESSAGE, error.details[0].message) : next();
};

export default cedisallValidator;