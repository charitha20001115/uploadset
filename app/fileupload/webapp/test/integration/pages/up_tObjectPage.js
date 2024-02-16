sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fileupload',
            componentId: 'up_tObjectPage',
            contextPath: '/up_t'
        },
        CustomPageDefinitions
    );
});