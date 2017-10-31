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
		if (this._busy || this._readersCount != 0) {
			reader = await OkToRead.wait(reader);
		}
		this._readersCount++;
		console.log(this.data);
		this._readersCount--;
	}
	write(writer){

	}
}
rw = new ReaderWriter();

setTimeout(rw.read)