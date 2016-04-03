# Complex-debug

## Install
install via npm
`npm install complex-debug`

## Usage

Pass an array of objects with properties `tag`, `props`, `path` and `name` into the systems constructor. These are the configurations for the components which will be debugged.

`{'tag':"cx.physic.component", 'props' : [0, 1], 'path': ['body', 'position'], 'name':'position'}`

TAG: define which component should be debugged.

PROPS: define which properties of that component should be debugged. If there is a property inside an object in the component, you can simply pass a `path` to the property

NAME: Simplified Name in the gui

Complete Usage
<pre> world.addSystem( new DatGuiSystem([
            {'tag':"cx.physic.component", 'props' : [0, 1], 'path': ['body', 'position'], 'name':'position'},
            {'tag':"cx.physic.component", 'props' : [0, 1], 'path': ['body', 'velocity'], 'name':'velocity'},
            {'tag':"cx.physic.component", 'props' : ['mass'], 'path': ['body'], 'name':'body'},
            {'tag':"cx.pixi.sprite", 'props' : ['x', 'y'], 'path': ['sprite', 'scale'], 'name':'scale'},
            {'tag':"cx.debug.datgui.component", 'props' : ['wireFrame']},
            {'tag':"cx.script.component", 'props' : ['velocity'], 'path': ['script'], 'name' : 'script'}
        ]));
</pre>
