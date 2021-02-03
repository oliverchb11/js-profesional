export default class MediaPlayer {

    constructor(config) {
        this.media = config.video;
        this.plugins = config.plugins || [];
        this.plugis();
    }

    plugis() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }

        this.plugins.forEach((plugin) => {
            console.log(plugin);
            plugin.run(player);
        })


    }



    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    playAndPause() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }


}