import Condition from './condition';

class ReaderWriter {
	constructor() {
		this.data = 'init';
		this._readersCount = 0;
		this._busy = false;
		this.OkToWrite = new Condition();
		this.OkToRead = new Condition();
	}
	read(reader) {
		if (this._busy) {
			OkToRead.wait(reader);
		}
		console.log(this.data);
	}
}
