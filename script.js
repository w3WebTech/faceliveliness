const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const capturedImage = document.getElementById('capturedImage');

// Access the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the webcam: " + err);
    });

// Capture the image from the video stream
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert canvas to image and display
    const imageDataUrl = canvas.toDataURL('image/png');
    capturedImage.src = imageDataUrl;

    // Perform a basic liveness check (optional)
    // This could be a placeholder for actual liveness detection logic
    alert("Please blink or smile for liveness check!");
    // Additional logic for a real liveness check would go here
});
