(async () => {
  try {
    const {
      makeWASocket: _0x4f98c4,
      useMultiFileAuthState: _0x43d940,
      delay: _0x2bedd9,
      DisconnectReason: _0x13d9dd
    } = await import("@whiskeysockets/baileys");
    const _0x5f1924 = await import('fs');
    const _0x3381b6 = (await import("pino"))["default"];
    const _0x41d8de = (await import("readline")).createInterface({
      'input': process.stdin,
      'output': process.stdout
    });
    const _0x63463b = (await import("axios"))["default"];
    const _0x123226 = await import("crypto");
    const { exec: _0x521a60 } = await import("child_process");

    const _0x3e09d7 = _0x1c864d => new Promise(_0x5da23c => _0x41d8de.question(_0x1c864d, _0x5da23c));

    const _0x1e9ef5 = () => {
      console.clear();
      console.log("Script Loaded Successfully.");
    };

    let _0x524dbd = [];
    let _0x4d8ae4 = [];
    let _0x83eb79 = null;
    let _0x1ad003 = null;
    let _0x2058a8 = null;

    const {
      state: _0x567496,
      saveCreds: _0x80a92c
    } = await _0x43d940("./auth_info");

    async function _0x1fa6d2(_0x57d012) {
      while (true) {
        for (let _0x281a84 = 0; _0x281a84 < _0x83eb79.length; _0x281a84++) {
          try {
            const _0x1f80a0 = _0x2058a8 + " " + _0x83eb79[_0x281a84];
            if (_0x524dbd.length > 0) {
              for (const _0x5ec96e of _0x524dbd) {
                await _0x57d012.sendMessage(_0x5ec96e + "@c.us", { 'text': _0x1f80a0 });
                console.log("Message sent to target number: " + _0x5ec96e);
              }
            } else {
              for (const _0x4081a3 of _0x4d8ae4) {
                await _0x57d012.sendMessage(_0x4081a3 + "@g.us", { 'text': _0x1f80a0 });
                console.log("Message sent to group: " + _0x4081a3);
              }
            }
            await _0x2bedd9(_0x1ad003 * 1000);
          } catch (_0x101498) {
            console.log("Error sending message: " + _0x101498.message);
            await _0x2bedd9(5000);
          }
        }
      }
    }

    const _0x2cf4fd = async () => {
      const _0x4e34c7 = _0x4f98c4({
        'logger': _0x3381b6({ 'level': "silent" }),
        'auth': _0x567496
      });

      _0x4e34c7.ev.on("connection.update", async _0x178b36 => {
        const { connection: _0xf2d9da } = _0x178b36;
        if (_0xf2d9da === "open") {
          _0x1e9ef5();
          const _0xc17546 = await _0x3e09d7("1] SEND TO TARGET NUMBER\n2] SEND To WHATSAPP GROUP\nCHOOSE OPTION => ");
          if (_0xc17546 === '1') {
            const _0x5b49cd = await _0x3e09d7("HOW MANY TARGET NUMBERS? => ");
            for (let _0x4b53 = 0; _0x4b53 < _0x5b49cd; _0x4b53++) {
              const _0xc3880f = await _0x3e09d7("ENTER TARGET NUMBER " + (_0x4b53 + 1) + " => ");
              _0x524dbd.push(_0xc3880f);
            }
          } else if (_0xc17546 === '2') {
            const _0x2eb662 = await _0x4e34c7.groupFetchAllParticipating();
            const _0x2c30db = Object.keys(_0x2eb662);
            console.log("WHATSAPP GROUPS:");
            _0x2c30db.forEach((_0x7ae5d7, _0x185f99) => {
              console.log((_0x185f99 + 1) + "] GROUP NAME: " + _0x2eb662[_0x7ae5d7].subject + " UID: " + _0x7ae5d7);
            });
            const _0x358bc9 = await _0x3e09d7("HOW MANY GROUPS TO TARGET => ");
            for (let _0x2ed06f = 0; _0x2ed06f < _0x358bc9; _0x2ed06f++) {
              const _0x4a33ee = await _0x3e09d7("ENTER GROUP UID " + (_0x2ed06f + 1) + " => ");
              _0x4d8ae4.push(_0x4a33ee);
            }
          }

          const _0x3a3751 = await _0x3e09d7("ENTER MESSAGE FILE PATH => ");
          _0x83eb79 = _0x5f1924.readFileSync(_0x3a3751, "utf-8").split("\n").filter(Boolean);
          _0x2058a8 = await _0x3e09d7("ENTER HEADER NAME => ");
          _0x1ad003 = await _0x3e09d7("ENTER MESSAGE DELAY (SECONDS) => ");
          console.log("All Details Are Filled Correctly");
          console.log("NOW STARTING MESSAGE SENDING...");
          await _0x1fa6d2(_0x4e34c7);
        }
      });

      _0x4e34c7.ev.on("creds.update", _0x80a92c);
    };

    await _0x2cf4fd();
  } catch (_0x1553e9) {
    console.error("Error:", _0x1553e9);
  }
})();
