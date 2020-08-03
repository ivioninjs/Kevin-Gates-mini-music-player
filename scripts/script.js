new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Ain't Too Hard",
          artist: "Kevin Gates",
          cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UMvVPNuKecFmebGKteOMGbJb2pXkxkYIxVpaYRrEKJL6y-LMuQ&s",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=D2CmaxtduaJ1AnaBYKT3NZWSardaqWuV",
          url: "https://youtu.be/FJj1MJS0BPw",
          favorited: false
        },
        {
          name: "Big Gangsta",
          artist: "Kevin Gates",
          cover: "https://images.genius.com/4ec73123a4182fe607cc7dae656ed7ca.1000x1000x1.png",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=jlRv5pO6C8NnenIowllggUqcyqmr4ZIV",
          url: "https://youtu.be/GoGAR9wYZyU",
          favorited: true
        },
        {
          name: "Find You Again",
          artist: "Kevin Gates",
          cover: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/12/57-Kevin-Gates-Quotes-About-Music-Success-Life.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=lPhnpEQkPglG9gQIJDjbDSnXBdCUateb",
          url: "https://youtu.be/d28M6QeCZrk",
          favorited: false
        },
        {
          name: "My Lonely",
          artist: "Kevin Gates",
          cover: "https://images.genius.com/616d488e4df5441f8e2204baea3a3701.1000x1000x1.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=4oJeN8rsMHTQkrpIkHXPYP32rlDrjXPr",
          url: "https://youtu.be/ASEm1TJZduo",
          favorited: false
        },
        {
          name: "Funny How",
          artist: "Kevin Gates",
          cover: "https://i1.sndcdn.com/avatars-000503894535-rdpggo-t500x500.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=5FgmZQ2BW4vLAZ0exQok1fDgB04xI4vD",
          url: "https://youtu.be/fonNFAYY1xc",
          favorited: true
        },
        {
          name: "Imagine That",
          artist: "Kevin Gates",
          cover: "https://i.ytimg.com/vi/3phff_z9gVA/hqdefault.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=czUFmHfUoyq0QgYW2CZSVPbZE5eKsRQa",
          url: "https://youtu.be/T6KFV58Hv9E",
          favorited: false
        },
        {
          name: "Push It",
          artist: "Kevin Gates",
          cover: "https://images.genius.com/fa53854bae259d201fe8122924518153.600x600x1.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=IM6lFM9Me8hmcSkgPPdyWDdr3DSsO5zu",
          url: "https://youtu.be/9knv4opomDQ",
          favorited: true
        },
        {
          name: "Satellites",
          artist: "Kevin Gates",
          cover: "https://www.vvcradio.com/wp-content/uploads/2014/04/kevin-gates.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=6Qbx8pUoqK6iqeHMjSWOWaKrVidBIARO",
          url: "https://youtu.be/aE4UNGlu-Ak",
          favorited: false
        },
        {
          name: "Slow Dance",
          artist: "Kevin Gates",
          cover: "https://i.pinimg.com/originals/35/6a/99/356a99f69560154dc04279cc1ab2403a.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=oOze57XOWcVqSfbFUWT5xvNIuhR82zFI",
          url: "https://youtu.be/hWQlMyY7Z5U",
          favorited: false
        },
          {
          name: "Told Me",
          artist: "Kevin Gates",
          cover: "https://thefader-res.cloudinary.com/images/w_1440,c_limit,f_auto,q_auto:eco/f1ederb06hkjdy7aol3m/kevin-gates-is-a-thoughtful-rapper-who-cannot-tell-a-lie.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=Cpmi33zS7LH6otECjfhqmpRfcTiwJMs3",
          url: "https://youtu.be/tO1Lhxfb-L0",
          favorited: false
        },
          {
          name: "Not The Only One",
          artist: "Kevin Gates",
          cover: "http://dope-shit.com/wp-content/uploads/2016/04/kevin-gates.jpg",
          source: "https://cloud.4in1telecomdesignstudio.com/wl/?id=SDmyFjGE6GThgRLHgz6yGhsWanjj6cOu",
          url: "https://youtu.be/nKoq_oaDWEM",
          favorited: false
        }
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime; //сколько прошло времени в процентах
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    
    // The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
//     The onloadedmetadata event occurs when meta data for the specified audio/video has been loaded.
    this.audio.onloadedmetadata = function() { // this = Audio Object
      vm.generateTime();
    };
//     The onended event occurs when the audio/video has reached the end.
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
