patterns = {
    big: {
        midE: ['moveDesc 0.3 [ ? 2 [ , conjunction ] [ ; ] moveDesc ] .'],
        startNE: ['0.5 [ interjection ? 2 [ . ] [ ! ] ]'],
        startE: ['startDesc 0.2 [ ? 2 [ , conjunction ] [ ; ] moveDesc ] .'],
        finishNE: ['0.4 [ 0.4 [ moveDesc ? 2 [ , conjunction ] [ ; ] ] finishDesc . ]', ]
    },
    
    little: {
        //Beginning quantifiers
        interjection: [
            'wIntensifier climbAdj',
            '0.2 wIntensifier climbAdj nClimb',
            '? 2 [ definitely not ] [ not at all ] climbAdj',
            '? 2 [ hard ] [ easy ] if you\'re climberAdj'
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
            'vMove ? 2 [ ? 2 [ on ] [ through ] 0.5 holdAdj nHolds ] [ ? 2 [ to ] [ past ] a nHold ]',
            'vHold ? 2 [ a 0.5 holdAdj nHold ] [ 0.5 holdAdj nHolds ]',
            'vMaintain when you ? 3 [ find ] [ get to ] [ reach ] the 0.5 holdAdj ? 2 [ nHolds ] [ nHold ]'
        ],
        conjunction:[
            'and',
            'then'
        ],

        //End descriptions.
        finishDesc: [
            '? 2 [ ? 2 [ 0.4 holdAdj nHolds guard ] [ a 0.4 holdAdj nHold guards ] ] [ a 0.4 moveAdj nMove guards ] the ? 3 [ chains ] [ topout ] [ finish ]',
            '? 2 [ vMaintain ] [ vMove ] ? 3 [ to the chains ] [ for the 0.3 [ ? 2 [ climbAdj ] [ moveAdj ] ] top out ] [ through the 0.3 [ ? 2 [ climbAdj ] [ moveAdj ] ] finish ]',
            'vFinish ? 2 [ with a 0.2 moveAdj nMove ] [ on 0.2 holdAdj nHolds ] 0.4 [ and top out ]'
        ]
    }
}
