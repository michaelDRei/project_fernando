function alert_image(img){
  Swal.fire({
    imageUrl: `assets/${img}.png`,
    imageWidth: 400,
    imageHeight: 504,
    imageAlt: 'Custom image',
  })
}
