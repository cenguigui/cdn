/*
* 笒鬼鬼修改meting-js 音乐播放器
* 修改于 APlayer v1.10.1   http://aplayer.js.org 
* 修改不易留个版权
* 公众号：笒鬼鬼
*/
console.log(
  "\n" +
    " %c Meting " +
    " %c 由笒鬼鬼美化  公众号:笒鬼鬼 " +
    "\n" +
    "\n",
  "color: #fff; background: #fd79a8; padding:5px 0;",
  "background: #FFF; padding:5px 0;"
);

$.ajax({
  url: meting_music_api,
  data: {
    server: music_server,
    type: music_type,
    id: music_id
  },
  dataType: "json",
  success: function (audio) {
    const ap = new APlayer({
      container: music_fixed ? document.getElementById('aplayer-fixed') : document.getElementById('aplayer-inner'),
      audio: audio,
      fixed: music_fixed,
      autoplay: music_autoplay,
      order: music_order,
      listFolded: true,
      volume: music_volume,
      mini: music_fixed ? true : music_mini,
      lrcType: 3,
      preload: "auto",
      loop: music_loop
    });
  },
});

// 创建并添加 aplayer-inner 元素
const aplayerInner = document.createElement('div');
aplayerInner.id = 'aplayer-inner';
aplayerInner.className = 'aplayer';
document.body.appendChild(aplayerInner);

// 创建并添加 aplayer-fixed 元素
const aplayerFixed = document.createElement('div');
aplayerFixed.id = 'aplayer-fixed';
aplayerFixed.className = 'aplayer';
document.body.appendChild(aplayerFixed);
