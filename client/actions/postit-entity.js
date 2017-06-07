let Api = require('../utils/api');

let EntityActions = {
    getEntityData: function(entityId) {
        Api.getEntityData(entityId);
    },
}

export default EntityActions;