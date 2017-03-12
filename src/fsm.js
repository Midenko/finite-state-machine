class FSM {

	constructor(config) {
		this.state = config.initial;
		this.states = config.states;
		this.history = [config.initial];
	}

	getState() {
		return this.state;
	}


	changeState(state) {
		this.history.push(this.state);
		this.state = state;
	}


	trigger(event) {
		this.state = this.states[this.state]['transitions'][event];
		this.history.push(this.state);
	}


	reset() {
		this.state = config.initial;
	}


	getStates(event) {
		var result = [];
		for (var key in this.states) {
			var arrOfStates = Object.keys(this.states[key]['transitions']);
			arrOfStates.forEach(function (item) {
				if (item === event) result.push(key);
			});
		}
		return result;
	}

	undo() {
		if (this.state === config.initial) return false;
		if (this.history.length) {
			this.state = this.history[this.history.length - 2];
			return true;
		}
		return false;
	}


	redo() {
		if (this.history.length > 1) {
			this.state = this.history[1]
			this.history = this.history.slice(1, 1);
			return true;
		}
		return false;
	}

	clearHistory() {
		this.state = config.initial;
		this.history = [config.initial];
	}
}

module.exports = FSM;