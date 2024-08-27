// URL video pertama yang akan ditampilkan saat halaman dimuat
const videoPertama = 'https://canhabsyi.github.io/jwp/?url=https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_264.m3u8';

// Atur video pertama saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    changeVideo(videoPertama);
});

// Fungsi untuk mengganti video di iframe
function changeVideo(url) {
    var frame = document.getElementById("vidio");
    if (frame) {
        try {
            frame.src = url;
        } catch (e) {
            console.error('Gagal mengubah URL video:', e);
        }
    } else {
        console.error('Elemen dengan ID "vidio" tidak ditemukan.');
    }
}

function bri() {
    changeVideo("https://cineasticview.blogspot.com/2024/08/ligaidn.html");
}


function rbtv() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_264.m3u8");
}

function spotv1() {
    changeVideo("https://ambontv.my.id/embed/spotv1.html");
}

function spotv2() {
    changeVideo("https://ambontv.my.id/embed/spotv2.html");
}


function sportstars() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://proxy.tsuchikage.my.id/https://cempedak-live-cdn.mncnow.id/live/eds/rcti-sportstar/sa_hls/rcti-sportstar-avc1_2499968=4-mp4a_98800_eng=3.m3u8");
}

function sportstars2() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://proxy.tsuchikage.my.id/https://cempedak-live-cdn.mncnow.id/live/eds/rcti-sportstar2/sa_hls/rcti-sportstar2-avc1_2499968=7-mp4a_98800_eng=3.m3u8");
}

function soccer() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://melon-live-cdn.mncnow.id/live/eds/soccerchannel-test/sa_dash_vmx/soccerchannel-test.mpd&keyId=4d38060bf41b3c29df0ec950ece6b5da&key=7ee9506b13480491d79b71c062ab5366");
}

function ssc1() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd&keyId=d84c325f36814f39bbe59080272b10c3&key=550727de4c96ef1ecff874905493580f");
}

function ssc2() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd?keyId=8bcfc55359e24bd7ad1c5560a96ddd3c&key=b5dcf721ab522af92a9d3bf0bd55b596");
}

function ssc3() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc3-ak.akamaized.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd&keyId=7de5dd08ad8041d586c2f16ccc9490a1&key=5e1503f3398b34f5099933fedab847ef");
}

function ssc4() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc4-ak.akamaized.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd&keyId=5c672f6b85a94638872d0214f7806ed4&key=bf8756fbb866ee2d5c701c2289dd8de3");
}

function ssc5() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc5-ak.akamaized.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd&keyId=c88b512b17ab4f6cb09eb0ff4a1056ed&key=adc08ee1c20a734972a55c9aebbd1888");
}

function sscex1() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc-extra1-ak.akamaized.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd&keyId=ecbc9e6fe6b145efb6658fb5cf7427f8&key=03c17e28911f71221acbc0b11f900401");
}

function sscex2() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc-extra2-ak.akamaized.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd&keyId=4d89249bd4ca4ebc9e70443265f9507d&key=cf074ffd2646c9c2f8513b47fa57bc30");
}

function sscex3() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ssc-extra3-ak.akamaized.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd&keyId=98cfd6fd4812497fb24dc75f7545f2ee&key=d3006ee69e77b25939728ebf30d3180a");
}

function dazn1es() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd&keyId=44dd9cd370b08a868ead115fe84ecfde&key=bff19ab0a51cf14e848389b152913fd0");
}

function dazn2es() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd&keyId=0eab5a3f3e3b4ba5d42d40ca30d17571&key=f3f061ded9b70e8160590d5802ecda6d");
}

function dazn3es() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/zy1ee5sshp/out/v1/bdcffa69fa3b4f3bb3569c9c73ee1c01/cenc.mpd&keyId=bad8efff688c0dbb3711e4a7114c22a3&key=6ba800673b20776c0c850130d45e1920");
}

function dazn4es() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/up7qpwch9b/out/v1/a6d5d1a1287b4893b859c2d6ccf2c65d/cenc.mpd&keyId=d27104d427e4f87e75b19395a9f8796b&key=723593c70e2d4c4862754398e80168f8");
}

function daznlaliga() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/tu06vubgf9/out/v1/7668f47d28e345979c072e361f3d3ce3/cenc.mpd&keyId=6d08b265a6639e32da7c880d5491e3d2&key=0c92556ca14b95f367993710e7cfbc94");
}

function daznf1() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/cqbcvgkb83/out/v1/4dbe05ecfb1540448d82d68eeebfbb1c/cenc.mpd&keyId=1061be12d303247426ec25e8369b2647&key=bd622b0e610295de3b0bccb850ccaaaa");
}

function digi() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dzn.starlive.workers.dev//https://dcf-fs-live-dazn-cdn.dazn.com/dash/dazn-linear-022/stream.mpd?keyId=8ab47741930c476780515f9a00decb0a&key=7ab4b9ae5a48aa526e511a913b832769");
}

function playsports1() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dzn.starlive.workers.dev//https://dcf-fs-live-dazn-cdn.dazn.com/dash/dazn-linear-051/stream.mpd?keyId=8ab47741930c476780515f9a00decb0a&key=7ab4b9ae5a48aa526e511a913b832769");
}

function playsports2() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dzn.starlive.workers.dev//https://dcf-fs-live-dazn-cdn.dazn.com/dash/dazn-linear-052/stream.mpd?keyId=8ab47741930c476780515f9a00decb0a&key=7ab4b9ae5a48aa526e511a913b832769");
}

function playsports3() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dzn.starlive.workers.dev//https://dcf-fs-live-dazn-cdn.dazn.com/dash/dazn-linear-053/stream.mpd?keyId=8ab47741930c476780515f9a00decb0a&key=7ab4b9ae5a48aa526e511a913b832769");
}

function bein1() {
    changeVideo("https://ambontv.my.id/embed/bein1.html");
}

function bein2() {
    changeVideo("https://ambontv.my.id/embed/bein2.html");
}

function bein3() {
    changeVideo("https://ambontv.my.id/embed/bein3.html");
}

function bein4() {
    changeVideo("https://ambontv.my.id/embed/bein4.html");
}

function unifi() {
    changeVideo("https://ambontv.my.id/embed/unifisports.html");
}

function tn1() {
    changeVideo("https://ambontv.my.id/embed/tnt1.html");
}

function tnt2() {
    changeVideo("https://ambontv.my.id/embed/tnt2.html");
}

function tnt3() {
    changeVideo("https://ambontv.my.id/embed/tnt3.html");
}

function tnt4() {
    changeVideo("https://ambontv.my.id/embed/tnt4.html");
}

function tnt5() {
    changeVideo("https://ambontv.my.id/embed/tnt5.html");
}

function usanet() {
    changeVideo("https://ambontv.my.id/embed/usa1.html");
}

function qazsport() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://qazsporttv-stream.qazcdn.com/qazsporttv/qazsporttv/playlist.m3u8");
}

function dubais1() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dmitnthfrta.cdn.mgmlcdn.com/dubaisports/smil:dubaisports.stream.smil/chunklist_b9000000.m3u8");
}

function dubais2() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dmitwlvvll.cdn.mgmlcdn.com/dubaisportshd/smil:dubaisportshd.smil/chunklist_b1300000.m3u8");
}

function dubais3() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/chunklist_b1600000.m3u8");
}

function ads1() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://proxy.tsuchikage.my.id/https://vo-live-media.cdb.cdn.orange.com/Content/Channel/AbuDhabiSportsChannel1/hls/index.m3u8");
}

function ads2() {
    changeVideo("https://canhabsyi.github.io/jwp/?url==https://proxy.tsuchikage.my.id/https://vo-live-media.cdb.cdn.orange.com/Content/Channel/AbuDhabiSportsChannel2/hls/index.m3u8");
}









// NASIONAL
function tvri() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional.m3u8");
}

function antv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservehd-1.dens.tv/s/s07/02.m3u8");
}

function tvone() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://streaming.indihometv.com/atm/DASH/tvone/manifest.mpd");
}

function indosiar() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://atemeshield2-voe.sysln.id/live/eds/IndosiarHD/mpd/IndosiarHD.mpd?keyId=5eaddccd893a47ac8b65f9b31963a3ae&key=881afa67ea57b41c1822d745d67559e6");
}

function sctv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://atemecdnbalancer-voe.sysln.id/live/eds/SCTVHD/mpd/SCTVHD.mpd?keyId=a79a188263724bfcaafc4a7c3b3cd8ce&key=4d4732d93e6720de0ef884d7106e14f7");
}

function moji() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://cdn09jtedge.indihometv.com/joss/134/ochannel720/index.m3u8");
}

function mentari() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://cdn09jtedge.indihometv.com/joss/134/mentaritv/index.m3u8");
}

function rcti() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://rcti-cutv.rctiplus.id/rcti-sdi.m3u8");
}

function gtv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://cempedak-live-cdn.mncnow.id/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd?keyId=88f6c7cbd793374cb5f12d7e26dcd63b&key=e82daa7c7bfb03d99327463fdbd37336");
}

function mnctv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://cempedak-live-cdn.mncnow.id/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd?keyId=828e0aba9825c3546a2831e4c0c36f7f&key=f85d3dcd38981368ab3da597e97ebdcc");
}

function inews() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=http://melon-live-cdn.mncnow.id/live/eds/inews-hdd/sa_hls/inews-hdd.m3u8");
}

function trans7() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://cdn09jtedge.indihometv.com/atm/DASH/trans7/manifest.mpd");
}

function transtv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://cdn09jtedge.indihometv.com/atm/DASH/transtv/manifest.mpd");
}

function cnn() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/playlist.m3u8");
}


function bioskopid() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://cdn09jtedge.indihometv.com/joss/130/bioskopindonesia/index.m3u8");
}

function imc() {
    changeVideo("https://canhabsyi.github.io/jwp/?url=https://cdn09jtedge.indihometv.com/joss/130/imc/index.m3u8");
}

function flik() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://cdn09jtedge.indihometv.com/joss/133/flik/index.m3u8");
}

function net() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservesd-1.dens.tv/h/h06/01.m3u8");
}

function kompastv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservehd-1.dens.tv/s/s104/01.m3u8");
}

function metrotv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservehd-1.dens.tv/h/h12/01.m3u8");
}

function rtv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservehd-1.dens.tv/h/h10/01.m3u8");
}

function magna() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservehd-1.dens.tv/h/h24/01.m3u8");
}


function btv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://b1news.beritasatumedia.com/Beritasatu/B1News_manifest.m3u8");
}


function jaktv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservesd-1.dens.tv/s/s123/S4/mnf.m3u8");
}

function ntv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://nusantaratv.siar.us/nusantaratv/live/playlist.m3u8");
}

function garudatv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://etv-cdn.kdb.co.id/GarudaTV-Stream/index.m3u8");
}

function elshinta() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group2-swiftservesd-1.dens.tv/s/s12/index.m3u8?app_type=web&userid=lite&chname=Elshinta_TV");
}

function indonesiana() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://dgwubfppws111.cloudfront.net/out/v1/667a86e35ddd496c886fa11598dc184d/index_2.m3u8");
}

function jtv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://63b2dc7196c38.streamlock.net:1937/ch2/myStream/playlist.m3u8");
}

function jawapos() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://63b2dc7196c38.streamlock.net:1937/ch6/myStream/playlist.m3u8");
}

function srbytv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://e.siar.us/live/surabayatv.m3u8");
}

function bdgtv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/http://202.150.153.254:443/bandungtvWEBSITE.m3u8");
}

function banten() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://5bf7b725107e5.streamlock.net/bantentv/bantentv/playlist.m3u8");
}

function brtv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://5bf7b725107e5.streamlock.net/brtv/brtv/playlist.m3u8");
}

function jitv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://mam.jogjaprov.go.id:1937/tv/jitv_720p/playlist.m3u8");
}

function salira() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://5bf7b725107e5.streamlock.net/saliratv/saliratv/playlist.m3u8");
}

function qurantv() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://op-group1-swiftservesd-1.dens.tv/s/s28/01.m3u8");
}









function tv2() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://proxy.tsuchikage.my.id/https://d25tgymtnqzu8s.cloudfront.net/smil:tv2/manifest.mpd");
}

function tv3() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://tonton-live-ssai.akamaized.net/live/2dd2b7cd-1b34-4871-b669-57b5c9beca23/cmaf.isml/.m3u8");
}

function tv9() {
    changeVideo("https://canhabsyi.github.io/plyr/?url=https://tonton-live-ssai.akamaized.net/live/2020783a-0303-401a-9c92-b7c3c9108c0b/cmaf.isml/.m3u8");
}
