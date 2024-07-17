
 const btns = document.querySelectorAll("button")
    const audio = document.querySelector("audio")
    const listaMusic = [
            
            {
                title : "Long Life Notti",
                scr : "./music/long_live_notti_mp3_36429.mp3",
                artist : "Notti OSama X DD OSama X Sugarhill Ddot"
            },
            {
                title : "E4N",
                scr : "./music/dd_osama_x_jstar_balla_x_edot_baby_x_sugarhill_ddot_x_dudeylo_x_roscoe_g_e4n_official_video_mp3_36928.mp3",
                artist : "dd_x_jstar_balla_x_edot_baby_x_sugarhill_ddot_x_dudeylo_x_roscoe_g"
            },
            {
                title : "BACK TO BACK",
                scr : "./music/DD Osama X Dudeylo - BACK TO BACK (Shot by CAINE FRAME) (Prod by chrissaves) (Official Video).mp3",
                artist : "DD Osama X Dudeylo"
            }
        ]
    
    
    
    let PausePlayBTn = document.getElementById("Pausar")
    let AvancasBTN = document.getElementById("Prox")
    let VoltarBTn = document.getElementById("Voltar")
    let ProgressBar = document.getElementById("barra")
    let Duration = document.getElementById("Duration")
    let currentTyme = document.getElementById("currentTyme")
    let artista = document.getElementById("artista")
    let titulo = document.getElementById("titulo")
    let bar = document.getElementById("bar")
    let indexMusic = 0
    
    function PlayMUsi(index) {
        audio.src = listaMusic[index].scr
        titulo.textContent = listaMusic[index].title
        artista.textContent = listaMusic[index].artist
        audio.play()
        
    }

    function update() {
        let min = Math.floor(audio.currentTime / 60)
        let sec = Math.floor(audio.currentTime % 60)
        let FomatedDuration = isNaN(audio.duration) ? 0 : audio.duration;
        let duraTinMin = Math.floor(FomatedDuration / 60)
        let durationSec= Math.floor(FomatedDuration / 60)
        let width = FomatedDuration ? (audio.currentTime / FomatedDuration) * 100 :0; 
        if( ProgressBar.style.width >= 50){
            ProgressBar.style.backgroundColor = "red"
        }
        ProgressBar.style.width = width + "%";
        currentTyme.textContent = `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
        Duration.textContent = `${duraTinMin.toString().padStart(2,"0")}:${durationSec.toString().padStart(2,"0")}`
    }
    PlayMUsi(indexMusic)
    let timer = setInterval(update,100)
    VoltarBTn.addEventListener("click",(e)=>{
        if(indexMusic === 0){
            indexMusic = listaMusic.length - 1
            PlayMUsi(indexMusic)
            return
        }
        indexMusic -= 1
        PlayMUsi(indexMusic)
        

    })
    AvancasBTN.addEventListener("click",(e)=>{
        if(indexMusic === listaMusic.length - 1){
            indexMusic = 0
            PlayMUsi(indexMusic)
            return
        }
        indexMusic += 1
        PlayMUsi(indexMusic)

    })
    PausePlayBTn.addEventListener("click",(e)=>{
        if(audio.paused){
            audio.play()
            return
        }else{
            audio.pause()
            return
        }
    })