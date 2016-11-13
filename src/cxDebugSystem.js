'use strict';

var cxVoidSystem = require('complex-engine-system').cxVoidSystem;
var Gui = require('dat.gui');

class cxDebugSystem extends cxVoidSystem
{
    constructor( config )
    {
        super();
        this.tag = "cx.debug.system";
        this.gui = new Gui();
        this.controllers = [];
        this.config = config;
    }

    added(cxEntity)
    {
        if(!cxEntity.hasComponent('cx.debug.component')){
            return;
        }

        var folder = this.gui.addFolder(cxEntity.name);

        for(var i = 0; i < this.config.length; i++){
            var config = this.config[i];
            if(!cxEntity.hasComponent(config.tag)){
                continue;
            }

            var component = cxEntity.getComponent(config.tag);
            var object = component;
            var props = config.props;

            if(config.path != undefined){
                object = this.followPath(object, config.path);
            }

            for(var p = 0; p < props.length; p++){
                var name = props[p];
                if(config.name != undefined){
                    name = config.name+"."+name;
                }
                if(object[props[p]] != undefined){
                    folder.add(object, props[p]).name(name).listen();
                }else{
                    console.error(props[p]+" not found in ", object);
                }
             }
        }

        this.controllers[cxEntity.index] = folder;
    }

    /**
     * @param  {cxComponent} object
     * @param  {string[]} path   Path to follow
     * @return {Object}
     */
    followPath(object, path)
    {
        var subObject = object;
        for(var i = 0; i < path.length; i++){
            var sub = path[i];
            object = object[sub];
        }
        return object;
    }
}

module.exports = cxDebugSystem;
