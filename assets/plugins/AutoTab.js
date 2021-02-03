export default class AutoTab {

    run(player) {
        document.addEventListener("visibilitychange", () => {
            console.log(document.visibilityState)
            if (document.visibilityState === "visible") {
                console.log('dentro de la pagina');
                player.play();

            } else {
                console.log('afuera de la pagina');
                player.pause();
            }
        })
    }
}