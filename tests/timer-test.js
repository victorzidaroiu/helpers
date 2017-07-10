import { expect } from 'chai';
import sinon from 'sinon';
import Timer from '../src/timer';

describe('The timer object', () => {
  const timer = new Timer();

  it('will have a start timer', () => {
    expect(timer.startTime).to.exist;
  });

  it('will return the elapsed time', () => {
    expect(timer.elapsed).to.exist;
  });

  context('when calling the end() function', () => {
    beforeEach(() => {
      sinon.spy(timer, "end");
      timer.end();
    });

    afterEach(() => {
      timer.end.restore();
    });

    it('will stop the timer', () => {
      expect(timer.end.called).to.be.true;
    });

    it('will have an endTime', () => {
      expect(timer.endTime).to.be.exist;
    });
  });
});
