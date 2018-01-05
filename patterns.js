patterns = {
    big: {
        midE: ['moveDesc 0.3 [ ? 2 [ , conjunction ] [ ; ] moveDesc ] .'],
        startNE: ['0.5 [ interjection ? 2 [ . ] [ ! ] ]'],
        startE: ['startDesc 0.2 [ ? 2 [ , conjunction ] [ ; ] moveDesc ] .']
    },
    
    little: {
        //Beginning quantifiers
        interjection: [
            'wIntensifier climbAdj',
            '0.2 wIntensifier climbAdj nClimb',
        ],

        //Start descriptions
        startDesc: [
            'vStart 0.2 wPos 0.6 [ on a 0.3 holdAdj nHold ] in nFeature',
        ],

        //Middle descriptions
        moveDesc: [
            'vClimbFeature ? 2 [ up ] [ through ] 0.5 climbAdj nClimbFeature',
            '? 2 [ vDo ] [ vMaintain for ] a moveAdj nMove ? 2 [ to a 0.5 holdAdj nHold ] [ to 0.5 holdAdj nHolds ]',
            'vMove ? 2 [ on ] [ through ] 0.5 holdAdj nHolds ? 2 [ to a 0.5 holdAdj nHold ] [ to 0.5 holdAdj nHolds ]',
            'vMove ? 2 [ to ] [ past ] a nHold ? 2 [ into a 0.5 holdAdj nHold ] [ into 0.5 holdAdj nHolds ]',
            'vHold ? 2 [ a 0.5 holdAdj nHold ] [ 0.5 holdAdj nHolds ]',

        ],
        conjunction:[
            'and',
            'then'
        ],

        //End descriptions.
        finishDesc: [
            
        ]
    }
}