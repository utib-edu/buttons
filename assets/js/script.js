
// begin:: Rơi 1 lần
class PushEffect_0 {
    constructor(el) {
        el.addEventListener('contextmenu', e => e.preventDefault());
        const ev = this.returnEv();
        el.addEventListener(ev.down, () => this.shrink(el));
        el.addEventListener(ev.up, () => this.revive(el));
        el.addEventListener(ev.leave, () => this.revive(el));
        el.addEventListener('animationend', () => this.reviveEnd(el));
    }
    returnEv() {
        const isTouch = !!('ontouchstart' in window || (navigator.pointerEnabled && navigator.maxTouchPoints > 0));
        return {
            down: isTouch ? 'touchstart' : 'mousedown',
            up: isTouch ? 'touchend' : 'mouseup',
            leave: isTouch ? 'touchmove' : 'mouseleave'
        }
    }
    shrink(el) {
        this.reviveEnd(el);
        el.isShrink = true;
        el.classList.add('is-shrink-0');
    }
    revive(el) {
        if (el.isShrink) {
            el.isShrink = false;
            el.classList.remove('is-shrink-0');
            el.isAnim = true;
            el.classList.add('is-anim-0');
        }
    }
    reviveEnd(el) {
        if (el.isAnim) {
            el.isAnim = false;
            el.classList.remove('is-anim-0');
        }
    }
}
class PushAction_0 extends PushEffect_0 {
    shrink(el) {
        if (!el.isAnim) {
            this.reviveEnd(el);
            el.isShrink = true;
            el.classList.add('is-shrink-0');
        }
    }
}
new PushAction_0(document.querySelector('.js-act-0'));
// end:: Rơi 1 lần

// begin:: Rơi 2 lần
class PushEffect_1 {
    constructor(el) {
        el.addEventListener('contextmenu', e => e.preventDefault());
        const ev = this.returnEv();
        el.addEventListener(ev.down, () => this.shrink(el));
        el.addEventListener(ev.up, () => this.revive(el));
        el.addEventListener(ev.leave, () => this.revive(el));
        el.addEventListener('animationend', () => this.reviveEnd(el));
    }
    returnEv() {
        const isTouch = !!('ontouchstart' in window || (navigator.pointerEnabled && navigator.maxTouchPoints > 0));
        return {
            down: isTouch ? 'touchstart' : 'mousedown',
            up: isTouch ? 'touchend' : 'mouseup',
            leave: isTouch ? 'touchmove' : 'mouseleave'
        }
    }
    shrink(el) {
        this.reviveEnd(el);
        el.isShrink = true;
        el.classList.add('is-shrink-1');
    }
    revive(el) {
        if (el.isShrink) {
            el.isShrink = false;
            el.classList.remove('is-shrink-1');
            el.isAnim = true;
            el.classList.add('is-anim-1');
        }
    }
    reviveEnd(el) {
        if (el.isAnim) {
            el.isAnim = false;
            el.classList.remove('is-anim-1');
        }
    }
}
class PushAction_1 extends PushEffect_1 {
    shrink(el) {
        if (!el.isAnim) {
            this.reviveEnd(el);
            el.isShrink = true;
            el.classList.add('is-shrink-1');
        }
    }
}
new PushAction_1(document.querySelector('.js-act-1'));
// end:: Rơi 2 lần