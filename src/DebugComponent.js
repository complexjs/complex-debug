'use strict';

var cxComponent = require('complex-engine-component');

class DatGuiComponent extends cxComponent
{
    constructor()
    {
        super();
        this.tag = "cx.debug.datgui.component";
        this.wireFrame = false;
    }
}

module.exports = DatGuiComponent;
