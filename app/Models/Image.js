export class Image {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl
    this.tags = data.tags
    this.author = data.author
    this.query = data.query
  }

  get Template() {
    return `
    <h3>Credits of image</h3>
    <h4>${this.tags}</h4>
    <h4>${this.author}</h4>
    <h4>${this.query}</h4>
    `
  }

}