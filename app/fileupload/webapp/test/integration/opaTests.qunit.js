sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fileupload/test/integration/FirstJourney',
		'fileupload/test/integration/pages/up_tList',
		'fileupload/test/integration/pages/up_tObjectPage'
    ],
    function(JourneyRunner, opaJourney, up_tList, up_tObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fileupload') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheup_tList: up_tList,
					onTheup_tObjectPage: up_tObjectPage
                }
            },
            opaJourney.run
        );
    }
);