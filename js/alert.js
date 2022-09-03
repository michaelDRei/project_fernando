function alert_image(img){
  Swal.fire({
    title: img,
    text: 'Modal with a custom image.',
    imageUrl: `assets/ritmo.png`,
    imageWidth: 400,
    imageHeight: 504,
    imageAlt: 'Custom image',
  })
}
