'use strict';

var configFiles = require('./../config.json');
var CONFIG = {};

CONFIG = {
    "SESKEY" : configFiles.aws.ses.key,
    "SESSELECT" : configFiles.aws.ses.select,
    "REGION": configFiles.aws.ses.region,
    "IMGBASEPATH": configFiles.emailImg.basePath,
    "IMGMAINLOGO": configFiles.emailImg.mainLogo,
    "IMGFAILSTATUSLOGO": configFiles.emailImg.failStatusLogo,
    "IMGFAILLOGO": configFiles.emailImg.failLogo,
    "IMGSUCCESSSTATUSLOGO": configFiles.emailImg.successStatusLogo,
    "IMGSUCCESSLOGO": configFiles.emailImg.successLogo
};

module.exports.CONFIG = CONFIG;