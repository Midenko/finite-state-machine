class FSM {

    constructor(config) {
        this.state = config.initial;
        this.states = config.states;
    }    

    getState() {
        return this.state;
    }


    changeState(state) {
        this.state = state;
    }


    trigger(event) {
        this.state = this.states[this.state]['transitions'][event];
    }


    reset() {
        this.state = config.initial;
    }


    getStates(event) {
        var result = [];
        for (var key in this.states) {
            //if (key['transitions'] === event) {
                result.push(key['transitions']);
            //}
        }
        return result;
    }

    undo() {}


    redo() {}

    clearHistory() {}
}

module.exports = FSM;


