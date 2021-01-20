import store from "./store";
import { testPlayer, onError } from "./reducers/playerReducer";
import { handleError } from './subscribers';

import './index.css';

class Player {
  constructor(paramObj) {
    this.data = paramObj;
    // this.playerStore = store;
    this.videoEl = document.getElementById("PLR_2201");
  }

  init() {
    console.log("initialized..");

    const stopListenningErrors = store.subscribe(handleError);

    this.videoEl.addEventListener("pause", () => {
      const vidTime = Math.ceil(this.videoEl.currentTime);
      store.dispatch(testPlayer({ value: 2 }));

      if (vidTime > 8 && vidTime < 15) {
        store.dispatch(
          onError("GEN_001", "Some error occured when player paused", false)
        );
      }

      if (vidTime > 20) {
        store.dispatch(
          onError("GEN_002", "Some error occured when player paused", true)
        );
      }
    });
  }
}

export default Player;
