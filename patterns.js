patterns = {
    big: {
        midE: ['moveDesc 0.3 [ conjunction moveDesc ]'],
        startNE: ['0.5 interjection'],
        startE: ['startDesc 0.2 [ conjunction moveDesc ]']
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
            'vDo a moveAdj nMove ? 2 [ to a 0.5 holdAdj nHold ] [ to 0.5 holdAdj nHolds ]',
            'vMove ? 2 [ on ] [ through ] 0.5 holdAdj nHolds ? 2 [ to a 0.5 holdAdj nHold ] [ to 0.5 holdAdj nHolds ]',
            'vMove ? 2 [ to ] [ past ] a nHold ? 2 [ to a 0.5 holdAdj nHold ] [ to 0.5 holdAdj nHolds ]',
            'vHold a 0.5 holdAdj nHold'
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