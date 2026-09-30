        function onFullScreenChange() {
            if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
                // Memasuki mode layar penuh
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock('landscape');
                }
            } else {
                // Keluar dari mode layar penuh
                if (screen.orientation && screen.orientation.unlock) {
                    screen.orientation.unlock();
                }
            }
        }

        document.addEventListener('fullscreenchange', onFullScreenChange);
        document.addEventListener('webkitfullscreenchange', onFullScreenChange);
        document.addEventListener('mozfullscreenchange', onFullScreenChange);
        document.addEventListener('MSFullscreenChange', onFullScreenChange);




                // LAYAR REDUP


let wakeLock = null;

async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      if (wakeLock === null) {
        wakeLock = await navigator.wakeLock.request('screen');
      }
    } catch (err) {
      console.warn(`Wake Lock gagal: ${err.message}`);
    }
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release().then(() => {
      wakeLock = null;
    });
  }
}

// Ambil elemen video (atau sesuaikan ID/Class elemen video Anda)
const videoElement = document.querySelector('video');

if (videoElement) {
  // Aktifkan saat video mulai/lanjut diputar
  videoElement.addEventListener('play', requestWakeLock);
  
  // Lepas saat video dipause atau selesai
  videoElement.addEventListener('pause', releaseWakeLock);
  videoElement.addEventListener('ended', releaseWakeLock);
}

// Meminta ulang Wake Lock jika pengguna sempat berpindah tab/aplikasi saat video masih jalan
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && videoElement && !videoElement.paused) {
    requestWakeLock();
  }
});
