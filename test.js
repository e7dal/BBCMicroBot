"use strict";


// Monitor timeline timeline
function Tests(since_id){

  console.log("TEST TWEETS QUEUED");

  this.tests = [
    {
      name: "FRAME_CAPTURE", // MODE 0-6
      text: "0 MODE 2\n10 FOR C = 0 TO 7\n20 COLOUR C\n30 PRINT \"COLOUR \",C\n40 NEXT C\n"+
            "60 MOVE 0,0\n70 DRAW 1279,0\n80 DRAW 1279,1023\n90 DRAW 0,1023\n100 DRAW 0,0\n"+
            "110 DRAW 1279,1023\n120 VDU 23,1,0;0;0;0;\n130 P.TAB(0,16);INT(TIME/10)/10;\" s   \"\n140 GOTO 130",
      mediaType: "video/mp4",
      checksum: "16fcadcb6bb3b10db6f196683b6ed9129187d692"
    },
    {
      name: "CHARACTERS",
      text: "10 PRINT“&gt;&amp;&lt;&amp;lt;”'SPC39\"|\"\n20 VDU 23,1,0;0;0;0;\n", // Tests twitter HTML escapes for <,&,> and OS X auto ""
      mediaType: "image/png",
      checksum: "8054997db79c6860f43c81a73a291a3ddd59850f"
    },
    {
      name: "BASE2048", // Test code HT @kweepa
      text: '🗜КຣǃݣਬૡૐγҐണญءषmಒڤѳൾऎ෮ݏʦߠeռOಕॸiचȾeӕPಕऋͼޏࡪઽڽϟඈ೦Φଞ੫સڍݗɞรݲணࡪܒڅېɞදཝю೫શށळʔแօС౺ມڭରඥഉæбॲອڵخɺඟཥЩඥՅ۹ฅඌೡࡋହ೬Ɲ۱ͷاฃβѡಡІݑஹʒಉɎғअϭޞՕ०ސړਝదӌՒใঔಉцఏ೪ຽݙฆතကཥఏߣƭܜରص༠uДߣϳ۹મɲ൶ಇ୲ଢࢲڝXঊಛuƿດێҏࡄƝۇ੫ʗӏସκǀࢴӊ௫डథØчϏझࢷڍਡ౬ࡈүଥ೭ࡉȶɮൎੳњছƙࡈͰϭဥΞѥઝƗեहݲດۄҏइƟݭலͲດڻҏइρࢶଈচ౫२ӷڛǃݬݦʊഏڼҏइρࢲਦཨ୪qХߤԺDcখມفϦ൩ഴށҜࠔറยϦࡘ5',
      mediaType: "image/png",
      checksum: "03436fb61783e175ab6d5074093f5fda73c8efd5",
    },
    {
      name: "STATICAUDIO", // Test static image with audio gives a video
      text: '0V.279;0;0;0;0;12:P."BEEP":REP.V.7:U.NOTINKEY50',
      mediaType: "video/mp4",
      hasAudio: true,
      checksum: "c28811f08350a0fd116ff103671e05de6f6731a5"
    },
    {
      name: "AUDIOVISUAL", // Video with sound
      text: '1MO.2:V.5:ENV.1,1,-26,-36,-45,255,255,255,127,0,0,0,126,0:SO.1,1,1,1\n2GC.0,RND(7):PL.85,RND(1280),1023A.RND:G.2\n',
      mediaType: "video/mp4",
      hasAudio: true,
      checksum: "ddc2194259220d5b629f993d7988e2e01f470b01"
    },
    {
      name: "NOVSYNC", // Test handling of no frames captured
      text: '1MO.2:!-512=&B0308:REP.P."FAILURE IS ALWAYS AN OPTION":U.0',
      mediaType: "text/plain",
      hasAudio: false,
      checksum: ""
    },
    {
      name: "MODE6", // Test stripes aren't transparent in PNG
      text: '1MO.6:?&D0=2:F.L=0TO999:V.32+L MOD95:N.:V.19;4;0;279;0;0;0;0;',
      mediaType: "image/png",
      checksum: "9b1fcaefd928558fd03862188e2ab509c92c9a0e"
    },
    {
      name: "RUNCHECK", // Regression test for program that didn't used to get run
      text: '0REM THIS SHOULD GET RUN\n1MO.6:P."MODE6":V.19;4;0;19,1,6;0;279;0;0;0;0',
      mediaType: "image/png",
      checksum: "a1723914eecd51a83a1a0384b2773db8f7c55ca9"
    },
    {
      name: "YOUONLYRUNONCE", // Check that an explicit RUN suppresses an implicit one.
      text: '1PRINT"HELLO":!-512=&B000B\nRUN',
      mediaType: "image/png",
      checksum: "382a540645171c0befb5e2757b721b15010bdf74"
    },
    {
      name: "NOLINENOS", // Test no line numbers -> tokeniser.
      text: "P.\"HELLO\";\nV.279;0;0;0;0;32\nP.\"WORLD\"",
      mediaType: "image/png",
      checksum: "18bf9fc11ddf61914cd96014d1815af735560628"
    },
    {
      name: "TOKENS", // Test tokens -> tokeniser.
      text: "\xf1~\u0190\n\xef279;0;0;0;0;\n",
      mediaType: "image/png",
      checksum: "a7bffbe345411afb00e58f032df1800a8f02d663"
    },
    {
      name: "MENTIONS", // Test mention removal
      text: "@BBCMicroBot @RhEolisM 1V.279;0;0;0;0;12:PRINTCHR$141\"Hello\"'CHR$141\"Hello\"CHR$21\n",
      user_mentions: [
        { screen_name: "bbcmicrobot", indices: [0, 12] },
        { screen_name: "rheolism", indices: [13, 22] }
      ],
      mediaType: "image/png",
      checksum: "ff26b135a00313cfce0ee0a6fcc995cc80426589"
    },
      {name: null, text: null}
  ]
}

  // Get the next section of timeline timeline
  Tests.prototype.update = async function () {}

  // Add the interesting timeline to the BBC Emulator queue
  Tests.prototype.pop = function (timeline) {

    var test = this.tests.shift();
    var user_mentions = test.user_mentions;
    if (user_mentions === null) {user_mentions = ['bbcmicrobot'];}
    var tweet = {
      'created_at'                : null,
      'user'                      : {'screen_name':"<TEST SERVER>"},
      'text'                      : test.text,
      'id_str'                    : test.name,
      'in_reply_to_status_id_str' : "1",
      'truncated'                 : false,
      'favorited'                 : false,
      'entities'                  : {'user_mentions': user_mentions},
      'bbcmicrobot_has_audio'     : (test.hasAudio == true),
      'bbcmicrobot_checksum'      : test.checksum,
      'bbcmicrobot_media_type'    : test.mediaType
    };

    return tweet;
  }

  function exec(cmd) {
    const exec = require('child_process').exec;
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        resolve(stdout? stdout.trim() : stderr);
      });
    });
  }

  function videoReply(filename,mediaType,replyTo,text,tweet,checksum,hasAudio){
    console.log("checksum: "+checksum)
    if (tweet.bbcmicrobot_checksum != checksum) {
      throw new Error(replyTo+' TEST - \u001b[31mFAILED\u001b[0m')
    }
    console.log("mediaType: "+mediaType)
    if (tweet.bbcmicrobot_media_type != mediaType) {
      throw new Error(replyTo+' TEST - \u001b[31mFAILED\u001b[0m')
    }
    console.log("hasAudio: "+hasAudio)
    if (tweet.bbcmicrobot_has_audio != hasAudio) {
      throw new Error(replyTo+' TEST - \u001b[31mFAILED\u001b[0m')
    }
    if (mediaType == 'video/mp4') {
      exec('ffprobe -v 0 -select_streams a -show_streams '+filename).then(
        function(audioInfo) {
          var videoHasAudio = (audioInfo.length > 0);
          console.log("videoHasAudio: "+videoHasAudio);
          if (hasAudio != videoHasAudio) {
            throw new Error(replyTo+' TEST - \u001b[31mFAILED\u001b[0m')
          }
        });
    }
    console.log(replyTo+' TEST - \u001b[32mOK\u001b[0m')
  }

  function noOutput(tweet) {
    // If the checksum is empty then we expect no output.
    if (tweet.bbcmicrobot_checksum == '') {
      console.log(tweet.id_str+' TEST - \u001b[32mOK\u001b[0m')
    } else {
      throw new Error(tweet.id_str+' TEST - \u001b[31mFAILED\u001b[0m')
    }
  }

  function block(tweet) {
    throw new Error(tweet.id_str+' TEST - \u001b[31mFAILED\u001b[0m')
  }

  module.exports = {
    Feed: Tests,
    videoReply: videoReply,
    noOutput: noOutput,
    block: block
  };
