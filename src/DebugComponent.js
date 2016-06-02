'use strict';

var cxComponent = require('complex-engine-component');

class cxDebugComponent extends cxComponent
{
    constructor()
    {
        super();
        this.tag = "cx.debug.component";
    }
}

module.exports = cxDebugComponent;
