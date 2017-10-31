class Condition {
	constructor() {
		this._queue = [];
	}

	wait(name) {
		return Promise.resolve("test");
	}

	signal() {
		const p = this._queue.pop();
		if (p) {
			Promise.resolve(p);
		}
	}

	queue() {
		return this._queue.length;
	}
}

export default Condition;
