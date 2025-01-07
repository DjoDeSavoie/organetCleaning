
    // Vérifie si le navigateur supporte l'accès à la caméra
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Obtient l'accès à la caméra
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          var video = document.createElement('video');
          var captureButton = document.getElementById('capture-button');
          var videoContainer = document.getElementById('video-container');
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');

          // Affiche la vidéo en direct dans le navigateur
          video.srcObject = stream;
          video.play();
          videoContainer.appendChild(video);

          // Ajoute un événement au clic sur le bouton de capture
          captureButton.addEventListener('click', function() {
            // Dessine l'image actuelle de la vidéo sur le canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Récupère les données de l'image sous forme de base64
            var imageData = canvas.toDataURL('image/png');

            // Crée un élément <img> avec l'image capturée
            var capturedImage = document.createElement('img');
            capturedImage.src = imageData;

            // Affiche l'image capturée dans le document
            videoContainer.innerHTML = '';
            videoContainer.appendChild(capturedImage);
          });
        })
        .catch(function(error) {
          console.error('Erreur lors de l\'accès à la caméra :', error);
        });
    } else {
      console.error('Votre navigateur ne supporte pas l\'accès à la caméra');
    }
  