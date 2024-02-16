sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'fileupload',
            componentId: 'up_tList',
            contextPath: '/up_t'
        },
        CustomPageDefinitions
    );
});