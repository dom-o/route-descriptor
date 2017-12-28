patterns = {
    big: {
        startNE: ['0.5 interjection'],
        midE: ['moveDesc 0.3 continuation 0.3 [ conjunction 0.3 moveDesc 0.3 continuation ]'],
        startE: ['startDesc 0.2 [ conjunction moveDesc 0.3 continuation ]']
    },
    
    little: {
        //Beginning quantifiers
        interjection: [
            'wIntensifier climbAdj',
            '0.2 wIntensifier climbAdj nClimb',
        ],

        //Start descriptions
        startDesc: [
            'vStart 0.4 wPos 0.6 [ on 0.3 holdAdj nHold ] in nFeature',
        ],

        //Middle descriptions
        moveDesc: [
            'vDo a moveAdj nMove',
            'vMove on nHolds',
            'vMove to a nHold',
            'vHold a 0.5 holdAdj nHold',
        ],
        continuation: [
            'into a 0.5 holdAdj nHold',
            'past a 0.5 holdAdj nHold',
            'through 0.5 holdAdj nHolds'
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