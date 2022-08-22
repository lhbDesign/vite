import { ref as u, onMounted as d, openBlock as l, createElementBlock as c, createElementVNode as h, Fragment as f, renderList as _ } from "vue";
const p = (n, t) => {
  const s = n.__vccOpts || n;
  for (const [e, r] of t)
    s[e] = r;
  return s;
}, y = { class: "starry-sky-bg" }, v = { class: "stars" }, g = {
  name: "StarrySky"
}, k = /* @__PURE__ */ Object.assign(g, {
  props: {
    starsCount: {
      type: [Number, String],
      default: () => 800
    },
    distance: {
      type: [Number, String],
      default: () => 800
    }
  },
  setup(n) {
    const t = n, s = u();
    return d(() => {
      s.value.forEach((r) => {
        let a = 0.1 + Math.random() * 1, i = t.distance + Math.random() * 300;
        r.style.transformOrigin = `0 0 ${i}px`, r.style.transform = `translate3d(0,0,-${i}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${a},${a})`;
      });
    }), (e, r) => (l(), c("div", y, [
      h("div", v, [
        (l(!0), c(f, null, _(n.starsCount, (a) => (l(), c("div", {
          key: a,
          class: "star",
          ref_for: !0,
          ref_key: "star",
          ref: s
        }))), 128))
      ])
    ]));
  }
}), o = /* @__PURE__ */ p(k, [["__scopeId", "data-v-d63fa737"]]);
o.install = (n) => {
  n.component(o.name, o);
};
class b {
  constructor() {
    this.events = {};
  }
  has(t) {
    return Object.prototype.hasOwnProperty.call(this.events, t);
  }
  on(t, s) {
    return this.events[t] || (this.events[t] = []), this.events[t].push(s), () => {
      this.events[t] = this.events[t].filter((e) => s !== e);
    };
  }
  off(t, s) {
    if (!t) {
      this.events = {};
      return;
    }
    let e = this.events[t];
    e && (s ? this.events[t] = e.filter((r) => s !== r) : delete this.events[t]);
  }
  once(t, s) {
    let e;
    return this.on(t, e = (r) => {
      s.call(null, r), this.events[t] = this.events[t].filter((a) => e !== a);
    });
  }
  emit(t, s) {
    let e = this.events[t];
    e && e.forEach((r) => r.call(null, s));
  }
  getListeners(t) {
    return this.events[t];
  }
}
const m = (n) => {
  n.use(o);
}, x = {
  install: m
};
export {
  b as EventEmitter,
  o as StarrySky,
  x as default
};
