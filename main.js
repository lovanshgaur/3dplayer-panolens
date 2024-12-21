document.addEventListener("DOMContentLoaded", () => {
    const panoContainer = document.querySelector(".pano");

    const videoPanorama = new PANOLENS.VideoPanorama('test.mp4', {
        autoplay: true,
        muted: true,
        playsInline : true
    });

    const viewer = new PANOLENS.Viewer({
        container: panoContainer,
        autoRotate: false,
        controlBar: true,
        cameraFov: 75,
    });

    viewer.add(videoPanorama);
    const vrButton = document.getElementById('vrButton');

    vrButton.addEventListener('click', function() {
        viewer.enterVR();      });
    

    viewer.addEventListener('stereo-mode', (event) => {
        if (event.stereo) {
            viewer.container.querySelector('.panolens-control-bar').style.display = 'none';
        } else {
            viewer.container.querySelector('.panolens-control-bar').style.display = 'block';
        }
    });

    videoPanorama.addEventListener('error', () => {
        console.error("Error loading the video panorama.");
    });
});
