<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <app-navbar></app-navbar>
    <div>
  
      <div class="row1 mt-8 mb-4 "   v-if="imageDataUrl" >
        <p class="mb-4 text-white font-bold text-lg">Document <span>History</span></p>
        <div class="doc overflow-scroll flex space-x-2">
           <a href="imageDataUrl"> <img :src="imageDataUrl" class="w-24 h-auto"></a>
            <img :src="imageDataUrl" class="w-24 h-auto rounded-lg">
            <img :src="imageDataUrl" class="w-24 h-auto rounded-lg">
            <img :src="imageDataUrl" class="w-24 h-auto rounded-lg">
            <img :src="imageDataUrl" class="w-24 h-auto rounded-lg">
            <img :src="imageDataUrl" class="w-24 h-auto rounded-lg">
            <img :src="imageDataUrl" class="w-24 h-auto rounded-lg ">
        </div>
      </div>  
      <div class="sc mt-2" >  
      <p class="mb-4 text-white font-bold text-lg">Scan <span >Your</span> Document</p>
      <video class="h-auto" ref="video" autoplay></video>
      </div>
      <canvas hidden ref="canvas"></canvas>
      <div class="row mt-4 px-2">
      <button class="btn1" @click="startScanner">Start Scanner</button>
   
      <button class="btn1 " @click="takePicture">Capture</button>

      <button class="btn1" @click="stopScanner">Stop Scanner</button>
   
      </div>

      <br>
      <!-- <div  v-if="imageDataUrl" >
      <img :src="imageDataUrl" class="w-full h-auto">
      <button class="btn1 mt-4 ml-2" @click="stopScanner">Download Pdf</button>
  
      </div> -->
    </div>
  </template>
  
  <script>
  import { BrowserMultiFormatReader } from '@zxing/library';
  
  export default {
    data() {
      return {
        imageDataUrl: null,
        videoStream: null,
        scanner: null,
        startS: 0
      };
    },
    methods: {
      async startScanner() {

        this.startS = 1;
        const video = this.$refs.video;
        const canvas = this.$refs.canvas;
        const constraints = { video: { facingMode: 'environment' } };
  
        this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = this.videoStream;
  
        this.scanner = new BrowserMultiFormatReader();
        this.scanner.decodeFromVideoElement(video, (result, error) => {
          if (result) {
            console.log(result.text);
          }
          if (error) {
            console.error(error);
          }
        });
  
        this.drawCanvas(canvas);
      },
      stopScanner() {
        this.startS = 0;
        if (this.videoStream) {
          this.videoStream.getTracks().forEach(track => {
            track.stop();
          });
          this.videoStream = null;
        }
  
        if (this.scanner) {
          this.scanner.stop();
          this.scanner = null;
        }
      },
      drawCanvas(canvas) {
        const ctx = canvas.getContext('2d');
  
        const draw = () => {
          ctx.drawImage(this.$refs.video, 0, 0, canvas.width, canvas.height);
          requestAnimationFrame(draw);
        };
  
        requestAnimationFrame(draw);
      },
      takePicture() {
        const canvas = this.$refs.canvas;
        const image = new Image();
        image.src = canvas.toDataURL();
        this.imageDataUrl = image.src;
      }
    },
    mounted() {
      this.startScanner();
    },
    beforeDestroy() {
      this.stopScanner();
    }
  };
  </script>
  
  <style>
  
    .row{
        width: 100%;
        gap: 1rem;
        display: flex;
    }

    .btn1{
        width: 35%;
    background-color: #40b93c;
    border-radius: 5px;
    box-shadow: 0 0px 10px #40b93c;
    color: white;
    height: 3rem;
    }

    span{
        color: #40b93c;
        font-weight: bold;
     }

  </style>