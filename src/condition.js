class Condition {
	constructor() {
		this._queue = [];
	}

	wait(name) {
		let p = new Promise((res, rej) => {});
		this._queue.push(p);
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
